import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {story,byId,dates,characters,backgrounds,enter,initial,countdown,failureCount} from '../src/story.ts';
import {newSave,parseSave,validateSave} from '../src/save.ts';
import film from '../src/data/filmSources.ts';
import legacy from '../src/data/legacyNodes.ts';
import portraitAssets from '../src/data/portraitAssets.ts';
import {portraitFor,portraitSeason,filmPrototypeFor} from '../src/portraits.ts';
test('第一章撤下骰子与告白，保留课堂送别及旧节点迁移',()=>{
 const nodes=story.filter(n=>['D03','D04'].includes(n.day||''));
 assert.ok(nodes.every(n=>!/玻璃骰子|假作未见|我也喜欢你|同样的心意|如听仙乐|温辞是谁/.test(n.text)));
 assert.equal(nodes.filter(n=>n.day==='D04'&&n.kind==='choice').length,0);
 assert.ok(nodes.some(n=>n.text.includes('掏出来给我看看')));
 assert.ok(nodes.some(n=>n.text.includes('不说再见，因为一定会再见')));
 assert.equal(dates.find(d=>d.id==='D03')!.title,'课堂里的例题');
 const registered=JSON.parse(readFileSync('scripts/review-node-ids.json','utf8')) as {key:string;id:string}[];
 const removed=registered.filter(r=>{const [day,,period]=JSON.parse(r.key);return day==='D04'&&period==='误会从哪里开始'&&!byId[r.id];});
 assert.ok(removed.length>0);
 for(const old of removed){
  const saved={...newSave(),frame:{...initial,node:old.id,date:'2023-07-22'},read:[old.id]};
  const migrated=parseSave(JSON.stringify(saved));assert.ok(validateSave(migrated));assert.ok(!/误会从哪里开始/.test(migrated.frame.period));
 }
});
test('郑导合并到郑泽一：统一剧情、个人立绘与旧角色存档',()=>{
 assert.equal(Object.values(characters).filter(c=>c.name==='郑泽一').length,1);
 assert.equal(characters.c59,undefined);
 assert.ok(story.some(n=>n.speaker==='郑泽一'&&n.character==='c38'));
 assert.ok(story.every(n=>n.character!=='c59'&&n.pov!=='c59'));
 for(const date of ['2023-10-01','2024-03-01'])assert.equal(portraitFor('c59',date),portraitFor('c38',date));
 const old={...newSave(),frame:{...initial,character:'c59',pov:'c59'},failures:['已有收藏']};
 const s=parseSave(JSON.stringify(old));assert.equal(s.frame.character,'c38');assert.equal(s.frame.pov,'c38');assert.deepEqual(s.failures,old.failures);
});
test('电影后层按借名同学映射，与前层演员分开且普通人物不叠影',()=>{
 const names={'秦旻然':'秦敏然','刘树颐':'刘树苡','代向阳':'戴向阳','黄义薄':'黄艺博','金跃山':'金悦山','石邵楷':'史绍恺','李程蓉':'李承容'};
 for(const [role,name] of Object.entries(names)){
  const person=filmPrototypeFor('film-'+role,'2024-04-02');assert.ok(person);assert.equal(person.name,name);
  assert.ok(existsSync('public/assets/'+person.image));
 }
 assert.equal(filmPrototypeFor('film-秦嘉然','2024-04-02'),undefined);
 for(const [id,c] of Object.entries(characters))if(!c.actor)assert.equal(filmPrototypeFor(id,'2024-04-02'),undefined);
 assert.notEqual(filmPrototypeFor('film-刘树颐','2024-04-02')!.image,portraitFor('film-刘树颐','2024-04-02'));
});
test('个人立绘按学期切换，电影使用演员且存疑人物不误合并',()=>{
 for(const date of ['2023-07-16','2023-08-30','2024-02-27','2024-06-11'])assert.equal(portraitSeason(date),'summer');
 for(const date of ['2023-09-01','2023-12-31','2024-01-26','2024-02-01'])assert.equal(portraitSeason(date),'winter');
 for(const person of Object.values(portraitAssets))for(const image of Object.values(person))assert.ok(existsSync('public/assets/'+image),image);
 assert.equal(Object.keys(portraitAssets).length,52);
 for(const [id,c] of Object.entries(characters)){
  for(const date of ['2023-10-01','2024-03-01']){
   const image=portraitFor(id,date);assert.ok(existsSync('public/assets/'+image),image);
   if(c.actor){const actorId=Object.keys(characters).find(key=>characters[key].name===c.actor)!;assert.equal(image,portraitFor(actorId,date));}
   if(c.name==='郑导'||c.name==='徐子瀚')assert.equal(image,c.image);
  }
 }
 assert.equal(portraitFor('c10','2023-09-01'),portraitAssets['黄鹤鸣'].winter);
 assert.equal(portraitFor('c10','2024-03-01'),portraitAssets['黄鹤鸣'].summer);
 assert.equal(portraitFor('xu','2023-10-01'),portraitAssets['徐启元'].winter);
 assert.equal(portraitFor('xu','2024-03-01'),portraitAssets['徐启元'].summer);
 assert.equal(portraitFor('c36','2024-03-01'),portraitAssets['石杨子然'].summer);
});
test('本轮退役节点不损坏自动档：清理已读、映射历史与当前场景',()=>{
 for(const [id,entry] of Object.entries(legacy).filter(([id,entry])=>id.includes('-r')&&!entry.retained)){
  const target=byId[entry.target],day=dates.find(d=>d.id===target.day)!;const s={...newSave(),frame:{...initial,node:id,date:day.date},read:[id],history:[{node:id,speaker:'动作',text:'修改前读过的文本',date:day.date}]};
  const migrated=parseSave(JSON.stringify(s));assert.equal(migrated.frame.node,entry.target);assert.equal(migrated.read.length,0);assert.equal(migrated.history[0].text,s.history[0].text);assert.ok(validateSave(migrated));
 }
});
function sceneText(day:string,period?:string){return story.filter(n=>n.day===day&&(!period||n.period===period));}
test('复查：选择后的对方回应一致',()=>{
 let frame=initial;
 while(byId[frame.node].kind!=='end'){
  const n=byId[frame.node];
  if(['D09','D12','D28'].includes(n.day||'')&&n.kind==='choice'){
   for(const option of n.options!.filter(o=>o.next)){
    const spoken=byId[option.next!],reply=byId[spoken.next!];
    assert.equal(reply.kind,'line');assert.notEqual(reply.speaker,spoken.speaker);assert.notEqual(reply.speaker,'旁白');
   }
  }
  frame=enter(frame,n.kind==='choice'?n.options!.find(o=>o.next)!.next!:n.next!);
 }
});
test('复查：档案室动作为动作，挪款自辩为角色内心，不混入现实学生',()=>{
 const ns=story.filter(n=>n.filmScene===9);
 for(const phrase of ['但这实在是太不合适','但远水解不了近渴','我这毁的是小账','你可不是一张纸']){
  const n=ns.find(n=>n.text.includes(phrase));assert.ok(n);assert.equal(n.speaker,'黄义薄·内心');assert.equal(n.character,'film-黄义薄');
 }
 const action=ns.find(n=>n.text==='摇了摇头');assert.ok(action);assert.equal(action.speaker,'动作');assert.equal(action.character,'');
});
test('整改事实回归：生日、告知者、笔袋、汤、作业标记和Switch',()=>{
 const birthday=sceneText('D53','三月二十九日约拍');assert.ok(birthday.some(n=>n.speaker==='黄艺博'&&n.text.includes('珈乐生日')));assert.ok(sceneText('D53','食堂门外').some(n=>n.speaker==='李沛霖'&&n.text.includes('挨打')));
 const reveal=sceneText('D24','数月之后的揭晓');assert.ok(reveal.some(n=>n.speaker==='史绍恺'&&n.text.includes('不是你以为的那个女生')));assert.ok(!reveal.some(n=>n.speaker==='史绍恺'&&/是我|我设|我扮/.test(n.text)));
 const pen=sceneText('D19').filter(n=>n.text.includes('笔袋'));assert.ok(pen.some(n=>n.speaker==='秦敏然'&&n.text.includes('我的笔袋')));assert.ok(!pen.some(n=>n.speaker==='惠子宁'&&n.text.includes('我的笔袋')));
 assert.ok(sceneText('D36','我的汤，大杂烩').some(n=>n.speaker==='邵聪'&&n.text.includes('你吃得真快')));assert.ok(sceneText('D36','我的汤，大杂烩').some(n=>n.speaker==='旁白'&&n.text.includes('我的汤')));assert.ok(sceneText('D36','越翻越多').some(n=>n.text.includes('10.3和10.5')));assert.ok(!sceneText('D36','越翻越多').some(n=>/点.*分/.test(n.text)));
 const switchText=sceneText('D33').map(n=>n.text).join('\n');assert.match(switchText,/Switch/);assert.match(switchText,/期中英语、生物/);assert.match(switchText,/我妈没收/);assert.ok(!sceneText('D33').some(n=>n.speaker==='HQ'&&/交过来|没收/.test(n.text)));
});
test('可乐伏笔跨日保留主体、离场、猜测与自行喝掉的反转',()=>{
 const ns=sceneText('D46'),text=ns.map(n=>n.text).join('\n');assert.match(text,/三人到历史办公室/);assert.match(text,/两人告辞离开，我坐到老师对面/);assert.match(text,/朱老师右手拿起可乐/);
 const guess=ns.find(n=>n.speaker==='雷雨泽'&&n.text.includes('自己的也贡给他'));assert.ok(guess);const next=sceneText('D47','次日的拉环');assert.ok(next.some(n=>n.text.includes('我打开，喝了')));assert.ok(next.some(n=>n.speaker==='雷雨泽'&&n.text.includes('昨天不是大悟')));
});
test('电影演出没有伪署名、校注、孤立括号或安全指令；三处分支真正在戏内',()=>{
 const movie=story.filter(n=>n.filmScene);for(const n of movie){assert.ok(n.speaker!=='认现实');assert.ok(n.pages?.includes(n.page),'电影出处应取剧本页：'+n.id);assert.ok(!/〔校|做动作的时候别把脖子|^[）)]+$/.test(n.text),n.id);}
 for(const num of [6,14,21]){const choice=movie.find(n=>n.filmScene===num&&n.kind==='choice');assert.ok(choice);assert.ok(choice.character?.startsWith('film-'));assert.equal(choice.page,byId[choice.options![0].next!].page);}
});
test('旧全篇每个节点都能迁移，删改内容重新可读，保留收藏与历史原文',()=>{
 const old=JSON.parse(readFileSync('scripts/legacy-nodes-v2.json','utf8')) as {id:string;day:string;date?:string}[];
 for(const n of old){const day=dates.find(d=>d.id===n.day)!;const s={...newSave(),revision:undefined,frame:{...initial,node:n.id,date:day.date},read:[n.id],failures:['旧失败句仍然留在纸边。'],history:[{node:n.id,date:day.date,speaker:'原说话人',text:'读过的旧原文'}]};const migrated=parseSave(JSON.stringify(s));assert.ok(byId[migrated.frame.node],n.id);assert.equal(migrated.frame.day,day.id);assert.equal(migrated.history[0].text,'读过的旧原文');assert.deepEqual(migrated.failures,s.failures);if(!legacy[n.id]?.retained)assert.equal(migrated.read.length,0,n.id+' 重写后应重新可读');}
});
test('校勘按语不混入电影人物原台词',()=>{for(const scene of film)for(const line of scene.lines)assert.ok(!/同页明确|月份和先后存在疑点|第\d+页|不能仅凭|保留异文/.test(line.text),line.text);});
test('全部节点唯一，所有跳转、人物、背景存在；无占位或断链',()=>{assert.equal(new Set(story.map(n=>n.id)).size,story.length);for(const n of story){if(n.next)assert.ok(byId[n.next],n.id+' -> '+n.next);if(n.kind!=='end'&&n.kind!=='choice')assert.ok(n.next,n.id);if(n.character)assert.ok(characters[n.character],n.id);if(n.pov)assert.ok(characters[n.pov],n.id);if(n.background)assert.ok(backgrounds[n.background],n.id);assert.ok(n.text&&!/TODO|待填|占位图/.test(n.text));for(const o of n.options||[]){assert.notEqual(!!o.next,!!o.failure,n.id);if(o.next)assert.ok(byId[o.next]);}}for(const c of Object.values(characters))assert.ok(existsSync('public/assets/'+c.image),c.name);for(const b of Object.keys(backgrounds))assert.ok(existsSync('public/assets/'+(b==='sunset'?'classroom':b)+'.webp'),b);});
test('图遍历覆盖61日及毕业，成功路径无环，唯一结局',()=>{assert.equal(dates.length,61);const seen=new Set<string>(),active=new Set<string>();function visit(id:string){assert.ok(!active.has(id),'剧情环 '+id);if(seen.has(id))return;active.add(id);const n=byId[id];for(const t of [n.next,...(n.options||[]).map(o=>o.next)].filter(Boolean) as string[])visit(t);active.delete(id);seen.add(id);}visit(initial.node);assert.equal(seen.size,story.length,'所有场景进入正常流程');for(const d of dates)assert.ok(seen.has(d.entry),d.id);assert.equal(story.filter(n=>n.kind==='end').length,1);assert.ok(seen.has('graduation-ending'));let f=initial;const days=new Set<string>();while(byId[f.node].kind!=='end'){days.add(f.date);const n=byId[f.node];f=enter(f,n.kind==='choice'?n.options!.find(o=>o.next)!.next!:n.next!);}days.add(f.date);assert.equal(days.size,61);assert.equal(f.date,'2024-06-11');});
test('每处选择的两种成功回应重新汇合，失败一句保持选择前完整画面',()=>{for(const n of story.filter(n=>n.kind==='choice')){const success=n.options!.filter(o=>o.next);assert.ok(success.length>=2);const paths=success.map(o=>{const set=new Set<string>();let id=o.next!;while(id&&!set.has(id)){set.add(id);const node=byId[id];if(node.kind==='choice'||node.kind==='end')break;id=node.next!;}return set;});assert.ok([...paths[0]].some(id=>paths[1].has(id)),n.id);for(const o of n.options!.filter(o=>o.failure)){assert.equal((o.failure!.match(/[。！？]/g)||[]).length,1,n.id);const before=enter(initial,n.id),s={...newSave(),frame:before},after={...s,read:[n.id],failures:[o.failure!]};assert.deepEqual(after.frame,before);assert.deepEqual(parseSave(JSON.stringify(after)).failures,[o.failure]);}}assert.ok(failureCount>=37);});
test('现实日期、回忆日期和教师ID分开；电影23场与演职对应',()=>{assert.equal(countdown('2023-07-16'),327);assert.equal(countdown('2024-06-07'),0);assert.equal(countdown('2024-06-11'),-4);assert.deepEqual(film.map(s=>s.number),Array.from({length:24},(_,i)=>i+1).filter(n=>n!==11));assert.equal(characters['film-刘树颐'].actor,'周远持');assert.equal(characters['film-代向阳'].actor,'张鹤闻');assert.equal(characters['film-金跃山'].actor,'彭逸涵');const history=Object.entries(characters).find(([,c])=>c.name==='朱老师')!,politics=Object.entries(characters).find(([,c])=>c.name==='朱泽萱')!;assert.notEqual(history[0],politics[0]);const name=story.find(n=>n.text.includes('从这天得名'))!;assert.equal(name.day,'D39A');assert.ok(story.some(n=>n.day==='D35'&&n.background==='biology'));for(const n of story.filter(n=>n.kind==='portrait'))assert.ok(!characters[n.pov!].role.includes('老师'),'老师不是玩家视角');});
test('角色性别临时资源分配，原图保留',()=>{for(const c of Object.values(characters)){assert.equal(c.image,c.gender==='女'?'girl.webp':'xu.webp');}for(const file of['lei.webp','ling.webp'])assert.ok(existsSync('public/assets/'+file));});
test('版本1样章档可迁移到完整游戏，完整长篇存档导入导出恢复',()=>{const s=newSave();s.frame=enter(initial,'opening-choice');s.read=['first'];s.failures=['第一页等到了毕业，第二页还在等第一页。'];assert.deepEqual(parseSave(JSON.stringify(s)),s);const old={...s,version:1,frame:{node:'preview-end',date:'2023-07-17',pov:'ling',character:'ling',background:'classroom',period:'第一节 · 英语'}};const migrated=parseSave(JSON.stringify(old));assert.equal(migrated.version,2);assert.ok(byId[migrated.frame.node].next);assert.equal(migrated.frame.day,'D02');let f=initial;while(byId[f.node].kind!=='end'){const n=byId[f.node];f=enter(f,n.kind==='choice'?n.options!.find(o=>o.next)!.next!:n.next!);if(n.kind==='scene'){const stored={...s,frame:f};assert.deepEqual(parseSave(JSON.stringify(stored)),stored);}}assert.equal(validateSave({...s,version:99}),false);assert.throws(()=>parseSave(JSON.stringify({...s,frame:{...s.frame,node:'missing'}})));assert.throws(()=>parseSave('{}'));assert.throws(()=>parseSave(JSON.stringify({...s,frame:{...s.frame,date:'garbage'}})));});
