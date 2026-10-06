import fs from 'node:fs';
export function addInteractions(nodes,characters){
 const revised=fs.readFileSync('scripts/interactions/existing-options.txt','utf8').split('\n').filter(s=>s.trim()&&!s.startsWith('#'));
 for(const row of revised){const [id,...fields]=row.split('|');const n=nodes.find(n=>n.id===id);if(!n||n.kind!=='choice')throw Error('旧选择不存在 '+id);const bad=n.options.filter(o=>o.failure);if(fields.length!==bad.length*2)throw Error('旧选择失败项数不匹配 '+id);bad.forEach((o,i)=>{o.text=fields[2*i];o.failure=fields[2*i+1];});}

 const byId=Object.fromEntries(nodes.map(n=>[n.id,n]));
 const frames={};let pov='ling',id='D02-0001';const visited=new Set();
 while(id&&byId[id]&&!visited.has(id)){visited.add(id);const n=byId[id];if(n.pov)pov=n.pov;frames[id]={pov};id=n.kind==='choice'?n.options.find(o=>o.next)?.next:n.next;}
 const rows=fs.readFileSync('scripts/interactions/scenes.txt','utf8').split('\n').filter(s=>s.trim()&&!s.startsWith('#'));
 const filmActors=JSON.parse(fs.readFileSync('scripts/interactions/film-actors.json','utf8'));
 const additions=[];const report=[];
 for(const row of rows){
  const [anchor,q,who,a,ar,b,br,...failures]=row.split('|');
  if(!anchor||!q||!br||failures.length<2||failures.length%2)throw Error('选择字段不完整 '+anchor);
  const n=byId[anchor];if(!n||n.kind!=='line'||!n.next||!frames[anchor])throw Error('选择锚点不在主流程 '+anchor);
  const actor=filmActors[anchor]||(n.filmScene?n.character:frames[anchor].pov);
  if(!characters[actor])throw Error('未定义玩家 '+anchor);
  const respondent=Object.keys(characters).find(k=>characters[k].name===who);
  if(!respondent&&who!=='旁白')throw Error('未定义回应人物 '+who);
  const prefix='interactive-'+anchor;const resume=n.next;
  const shared={day:n.day,context:n.context,period:n.period,background:n.background,page:n.page,pages:n.pages,source:'补写',...(n.filmScene?{filmScene:n.filmScene}:{})};
  const choice={...shared,id:prefix,kind:'choice',text:q,speaker:characters[actor].name,character:actor,options:[]};
  for(const [i,text,reaction]of [[1,a,ar],[2,b,br]]){
   const line={...shared,id:prefix+'-say'+i,kind:'line',text,speaker:characters[actor].name,character:actor,next:prefix+'-reply'+i};
   const reply={...shared,id:prefix+'-reply'+i,kind:'line',text:reaction,speaker:who,character:respondent||'',next:resume};
   additions.push(line,reply);choice.options.push({text,next:line.id});
  }
  for(let i=0;i<failures.length;i+=2){if(!failures[i]||!failures[i+1])throw Error('空失败 '+anchor);choice.options.push({text:failures[i],failure:failures[i+1]});}
  n.next=choice.id;additions.push(choice);report.push({id:choice.id,anchor,day:n.day,pages:n.pages||[n.page],pov:characters[actor].name,question:q,options:choice.options.length});
 }
 // Keep narrative order for LOG display, with branch lines adjacent to their choice.
 for(const r of report){const at=nodes.findIndex(n=>n.id===r.anchor)+1;const own=additions.filter(n=>n.id===r.id||n.id.startsWith(r.id+'-'));own.sort((a,b)=>(a.kind==='choice'?-1:b.kind==='choice'?1:0));nodes.splice(at,0,...own);}
 fs.mkdirSync('docs/qa',{recursive:true});fs.writeFileSync('docs/qa/互动扩增节点对照_2026-10-07.json',JSON.stringify(report,null,2)+'\n');
}
