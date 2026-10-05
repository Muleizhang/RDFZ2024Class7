import fs from 'node:fs';
// 台词不变则保留旧 ID；新台词永不占用旧编号。删除的节点迁移到同日同场入口。
export function stabilize(nodes,days) {
 const old=JSON.parse(fs.readFileSync('scripts/legacy-nodes-v2.json','utf8'));
 const signature=n=>JSON.stringify([n.day,n.kind,n.period,n.speaker||'',n.text]);
 const buckets=new Map();for(const n of old){const key=signature(n);if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(n.id);}
 const registryPath='scripts/review-node-ids.json';
 const registry=fs.existsSync(registryPath)?JSON.parse(fs.readFileSync(registryPath,'utf8')):[];
 const revised=new Map();for(const n of registry){if(!revised.has(n.key))revised.set(n.key,[]);revised.get(n.key).push(n.id);}
 const reserved=new Set([...old.map(n=>n.id),...registry.map(n=>n.id)]),rename=new Map(),used=new Set();
 for(const n of nodes){
  const key=signature(n),explicit=n.id.endsWith('-date')||n.id==='graduation-ending';
  const match=buckets.get(key)?.find(id=>!used.has(id))||revised.get(key)?.find(id=>!used.has(id));
  let id=explicit?n.id:match||`${n.day}-r${n.id.split('-').at(-1)}`;
  if(!explicit&&!match){let suffix=Number(id.split('-r')[1]);while(reserved.has(id)||used.has(id))id=`${n.day}-r${String(++suffix).padStart(4,'0')}`;registry.push({key,id});reserved.add(id);}
  used.add(id);rename.set(n.id,id);
 }
 fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+'\n');
 for(const n of nodes){n.id=rename.get(n.id);if(n.next)n.next=rename.get(n.next)||n.next;for(const o of n.options||[])if(o.next)o.next=rename.get(o.next)||o.next;}
 const current=new Set(nodes.map(n=>n.id)), migration={};
 for(const n of old){const same=current.has(n.id);const target=same?n.id:nodes.find(x=>x.day===n.day&&x.kind==='scene'&&x.period===n.period)?.id||days.find(x=>x.id===n.day)?.entry; migration[n.id]={target,retained:same};}
 for(const n of registry){const [day,,period]=JSON.parse(n.key);const same=current.has(n.id);migration[n.id]={target:same?n.id:nodes.find(x=>x.day===day&&x.kind==='scene'&&x.period===period)?.id||days.find(x=>x.id===day)?.entry,retained:same};}
 fs.writeFileSync('src/data/legacyNodes.ts','// Generated: compatibility with the pre-review v2 story.\nconst data:Record<string,{target:string;retained:boolean}> = '+JSON.stringify(migration,null,2)+';\nexport default data;\n');
}
