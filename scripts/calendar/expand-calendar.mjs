import fs from 'node:fs';
const plan=JSON.parse(fs.readFileSync('scripts/calendar/new-date-plan.json','utf8'));
const existingPages=JSON.parse(fs.readFileSync('scripts/calendar/existing-day-pages.json','utf8'));
const blocks=Object.fromEntries([1,2,3].flatMap(i=>fs.readFileSync(`scripts/calendar/new-days-0${i}.txt`,'utf8').split(/^## /m).slice(1).map(s=>{const [head,...body]=s.trim().split('\n');const [key,pov,schedule]=head.split('|');const [id,...title]=key.split(' ');return [id,{title:title.join(' '),pov,schedule,body:body.join('\n')}];})));
const extra=fs.existsSync('scripts/calendar/daily-scenes.txt')?Object.fromEntries(fs.readFileSync('scripts/calendar/daily-scenes.txt','utf8').split(/^## /m).slice(1).map(s=>{const [id,...lines]=s.trim().split('\n');return[id.trim(),lines.join('\n')];})):{};
const sourceEntries=[];
const transcript=fs.readFileSync('../人大附中2024届7班班史_全卷转写校勘.md','utf8');
const originalPages=[...transcript.matchAll(/^## 第(\d{3})页[^\n]*\n([\s\S]*?)(?=^## 第\d{3}页|$(?![\s\S]))/gm)].map(m=>({page:Number(m[1]),text:m[2].replace(/<a id="page-\d+"><\/a>/g,'')}));
const alias={'HQ':'韩琪','诶迟扣':'韩琪','埃迟扣':'韩琪','唉迟扣':'韩琪','孙老师':'孙蕾','蕾子':'孙蕾','蕾':'孙蕾','summer':'孙蕾','杨sir':'杨卫华','YoungSir':'杨卫华','Ysir':'杨卫华','Young Sir':'杨卫华','战':'战景林','能者':'战景林','战老师':'战景林','总座':'博老师','委员长':'博老师','委座':'博老师','zyc':'周子尧','ZYC':'周子尧','lmh':'李沐衡','LMH':'李沐衡','dxy':'戴向阳','DXY':'戴向阳','hyb':'黄艺博','HYB':'黄艺博','lhy':'李昊宇','LHY':'李昊宇','jsy':'贾盛元','JSY':'贾盛元','jnj':'贾诺基','Jnj':'贾诺基','qhs':'戚洪硕','QHS':'戚洪硕','xzh':'徐子涵','XZH':'徐子涵','HZN':'惠子宁','hzn':'惠子宁','SC':'邵聪','sc':'邵聪','雷子':'雷杨','雷枸':'雷杨','雷哥':'雷杨','雷大':'雷杨','雷老师':'雷杨','满':'徐子涵','满者':'徐子涵','雪茗':'吕思宇','温辞':'程洛怡','萌童':'王家童','蒙童':'王家童','大哥':'刘恒怿','树苡':'刘树苡','苡':'刘树苡','持持':'周远持','持子':'周远持','持':'周远持','沐衡':'李沐衡','雷导':'雷雨泽','朱考儒':'凌艺坤','戴小姐':'戴杨洁','郑导':'郑泽一'};
const normal=s=>s.replace(/〔[^〕]*〕/g,'').replace(/[\s\p{P}\p{S}]/gu,'').toLowerCase();
function coverage(text,material){const t=normal(text),m=normal(material);if(!t)return true;if(m.includes(t))return true;if(t.length<9)return false;let hit=0,total=0;for(let i=0;i<=t.length-5;i++){total++;if(m.includes(t.slice(i,i+5)))hit++;}return total&&hit/total>=.9;}
function usable(page,id){let text=page.text; // Mixed dates are trimmed before any clause is projected.
 if(id==='D23')return text; // only page 91 registered, not 90
 if(id==='D34')text=text.split('12.22')[1]||text;
 if(id==='D41'&&page.page===146)text=text.split('1月27')[0].split('1.27')[0].split('2024.1.27')[0];
 if(id==='N19'&&page.page===53)text=text.slice(text.indexOf('九月二十三日'));
 if(id==='N31')text=text.split('### 11.2')[0];
 if(id==='N32')text=text.split('### 11.2')[1]?.split('11.3')[0]||'';
 if(id==='N41'&&page.page===109)text=text.split('11.27：')[0];
 if(id==='D29'&&page.page===109)text=text.split('11.27：')[1]||'';
 if(id==='N35'&&page.page===97)text=text.split('——以下黑笔')[0];
 if(id==='N36')text=text.split('补录2023.11.10。')[1]?.split('Snow Tea')[0]||'';
 if(id==='N37')text=text.split('2023.11.18：')[1]?.split('——蓝笔')[0]||'';
 if(id==='N40'&&page.page===105)text=text.slice(text.indexOf('**英语：**'));
 if(id==='N43')text=text.split('12.5')[0];
 if(id==='N44')text=text.split('12.5')[1]||'';
 if(['N45','N46','N47'].includes(id))return ''; // tiny interval entries fully enacted in authored scenes
 if(id==='N51')text=text.split('〔以下红笔〕')[0];
 if(id==='N52'&&page.page===142)text=text.split('1月24')[0].split('1.24')[0].split('1.25')[0];
 if(id==='N53')return ''; // isolated 24th note fully authored
 if(id==='N54')return ''; // isolated 25th note fully authored
 if(id==='N55')text=text.split(/1月27|1\.27|2024\.1\.27/).at(-1);
 if(id==='N59')text=text.split('附：昨日')[0];
 if(id==='N60')return ''; // 4月19日短记已完整演出，页下4月22日属于D54。
 // Do not reinstate the explicit user cuts through the source projection.
 if(id==='D03')text=text.replace(/^.*玻璃骰子.*$/gm,'').replace(/^.*温辞是谁.*$/gm,'').replace(/^.*完全不知道.*$/gm,'').replace(/^.*私货.*$/gm,'');
 if(id==='D04')text=text.replace(/^.*(?:心跳|抽卡|袒露心意|相识|仙乐|温雪|玻璃骰子|温辞.*雪茗).*$/gm,'');
 return text;
}
function project(id,pages,material){const out=[];let period='',context='现实',section='';
 for(const p of pages){let text=usable(p,id);let image=false;
 for(let line of text.split('\n').map(s=>s.trim()).filter(Boolean)){
  const record={day:id,page:p.page,original:line,status:'',nodes:[]};sourceEntries.push(record);
  if(/^〔/.test(line)||/^\[图/.test(line)){record.status='资料层图注/校注，非角色对白';continue;}
  if(/^>|^[A-D][.．]|^\d+[.．]/.test(line)&&p.page===28){record.status='歌词：以点歌与分享动作承载';continue;}
  if(p.page===28||/^(署名|主题|距高考|距期末|今日课表|课表|Subject|Sub：|农历|倒计时|日期：|202\d|END|Date|By |by\.|by |PS：猜|P.S.)/.test(line)){record.status='日期/署名/课表元数据或附言';continue;}
  if(/^〔/.test(line)||line.includes('〔编注')){record.status='校注待核';continue;}
  if(/〔(?:疑|姓名|人名|辨认)|辨认不清|□/.test(line)){record.status='含未辨字，清楚事件以手写台本演出；未辨部分待核';continue;}
  line=line.replace(/〔[^〕]*〕/g,'').replace(/<[^>]*>/g,'').replace(/\*\*|~~/g,'').replace(/^[#＊*▷-]+\s*/,'').trim();
  if(!line){record.status='校注';continue;}
  if(/^>/.test(line)||/^[A-Za-z].{35,}$/.test(line)&&[58,60,113].includes(p.page)){record.status='歌词不逐句重复；场景保留分享听歌';continue;}
  if(/^(?:\[|【)?(语文|英语|数学|物理|化学|生物|地理|历史|政治|体育|午休|午间|中午|晚自习|早读|自习|班会)(?:课)?(?:\]|】)?(?:[：:]|$)/.test(line)){
   const m=line.match(/^(?:\[|【)?([^\]】：:]+)(?:\]|】)?[：:]?(.*)$/);section=m[1];const rest=m[2]?.trim();period=`${section} · 课间手帐`;context=/补记|昨日/.test(rest||'')?'回忆 · 日志补记':id==='N19'&&p.page<53?'回忆 · 此前的课堂，未强定日期':id==='N52'?'回顾 · 1月22—23日混记':'现实';out.push(`@${period}|${section.includes('体育')?'track':'classroom'}|${context}`);record.status='场景入口';if(!rest)continue;line=rest;
  }
  if(/^(?:补记|补录|昨日)/.test(line)){context='回忆 · 日志补记';out.push(`@${line.length<20?line:'补记的前因'}|classroom|${context}`);}
  if(coverage(line,material)){record.status='已有逐句/细节演出（文本对照候选，复读核对）';continue;}
  if(/辨认不清|\[疑|□/.test(line)){record.status='未辨部分保留资料；清楚事件已演';continue;}
  // Preserve original action subjects: quote extraction does not invent a speaker.
  const before=line.match(/^([^：:“”「」]{1,18})(?:曰|说|问|答|对|：|:)[：:]?\s*[“「]([^”」]+)[”」](.*)$/);
  const after=line.match(/^[“「]([^”」]+)[”」][———-]+\s*([^（(]{1,20})/);
  const simple=line.match(/^([^：:]{1,16})[：:]\s*(.+)$/);
  let who='',speech='';
  if(before&&!before[3]?.trim()){who=before[1];speech=before[2];}
  else if(after){who=after[2].trim();speech=after[1];}
  else if(simple){who=simple[1].trim();speech=simple[2].replace(/^“|”$/g,'');}
  const person=alias[who]||who;
  if(speech&&(/老师$/.test(person)||Object.values(alias).includes(person)||['徐启元','凌艺坤','雷昱','李沛霖','冯子豪','张瑞麒','陈俊言','李玉','孙佳怡','童莘淇','马诗雨','赵梓伊','刘美孜','张怀锦','杨京赫','杨雁翔','黄鹤鸣','张鹤闻','贾诺基','石杨','金悦山','李承容'].includes(person))){out.push(`${person}|${speech.replaceAll('|','／')}`);record.status='原载台词，保留说话者';}
  else {out.push(`班史原载|${line.replaceAll('|','／')}`);record.status='原载动作/内心/短记，进入正常流程';}
 }
 }
 return out.some(x=>!x.startsWith('@'))?`@课间手帐|classroom|${id==='N52'?'回顾 · 1月22—23日混记':'现实'}\n${out.join('\n')}`:'';
}
export function expandCalendar(scripts,days,schedules,sources){
 // Fact fixes occur at the editable source, before generating nodes.
 scripts.D04=scripts.D04.replace('。@告别','。\n@告别');
 scripts.D30=scripts.D30.replace('刘恒怿|读到自己前几天的发言，今天更想把题写在纸上了。','刘恒怿|老师读的是满者前几天的发言。那句纯良，今天有了下文。');
 scripts.D49=scripts.D49.replace('@千米与一圈|track|现实','@千米与一圈|track|回忆 · 高三套圈测试，具体日未载').replace('@千米与一圈|track\n','@千米与一圈|track|回忆 · 高三套圈测试，具体日未载\n');
 scripts.D49=scripts.D49.replace('|同一现实','|同一回忆 · 高三套圈测试，具体日未载');
 scripts.D48=scripts.D48.replace('|现实 · 五层男厕所','|回忆 · 高三下、二次听口前的五层男厕所').replace('@展板|classroom|现实','@展板|classroom|回忆 · 高二期中学法指导展板');
 days.find(d=>d.id==='D23').pages='091';
 const machine=scripts.D50.indexOf('@架起手机');if(machine>=0){let moved=scripts.D50.slice(machine);scripts.D50=scripts.D50.slice(0,machine).trim();moved=moved.replace(/(@架起手机\|classroom)\|[^\n]+/,'$1|现实 · 3月6日');scripts.D48=moved+'\n'+scripts.D48;}
 const prep=scripts.D23.indexOf('@考前');if(prep>=0){const later=scripts.D23.indexOf('\n@',prep+1);if(later>=0)scripts.D23=scripts.D23.slice(0,prep)+scripts.D23.slice(later+1);}
 // Scripts remain ordinary VN scenes; all supplemental material is in the normal chain.
 for(const p of plan){const b=blocks[p.id];if(!b)throw new Error('缺逐句台本 '+p.id);days.push({id:p.id,date:p.date,basis:p.basis,title:b.title,pov:b.pov,pages:p.pages.join('、'),assets:'复用现有场景、个人立绘与前景文字'});scripts[p.id]=b.body;if(!b.schedule.startsWith('今日行程'))schedules[p.id]=b.schedule;}
 days.sort((x,y)=>x.date.localeCompare(y.date));
 for(const d of days){if(['D01','D55','D56','D57','D58','D59','D60'].includes(d.id))continue;
  const original=Object.keys(blocks).includes(d.id)?plan.find(x=>x.id===d.id).pages:existingPages[d.id]||[];
  const pages=original.filter(p=>!(d.id==='D45'&&p===153)).map(p=>originalPages.find(x=>x.page===p)).filter(Boolean);
  let daily=project(d.id,pages,scripts[d.id]+'\n'+(extra[d.id]||''));
  if(d.id==='D13')daily=''; // source single-day poem is already played with its annotations
  const inserted=[extra[d.id],daily].filter(Boolean).join('\n');
  if(inserted){const memory=scripts[d.id].search(/^@[^\n]*\|(?:回忆|同学作品|此前|戏中戏|毕业)/m);const cut=memory>=0?memory:scripts[d.id].length;scripts[d.id]=scripts[d.id].slice(0,cut).trimEnd()+'\n'+inserted+'\n'+scripts[d.id].slice(cut);}
  if(['N14','N22','N38','N43','N45'].includes(d.id))scripts[d.id]=scripts[d.id].replace(/\|现实(?=\n| ·|$)/g,`|回看待核日期 · 暂排${d.date}`);
  (sources[d.id]??=[]).push({title:'当天纸页上的细节',pages:original});
  for(const m of scripts[d.id].matchAll(/^@([^|\n]+)/gm))(sources[d.id]??=[]).push({title:m[1],pages:original});
 }
 // 作品阅读是编排框架，作品中的日期/神话不进入现实日历。
 for(const [id,page,title] of [['N22',236,'七日称满'],['N42',237,'源内与源外']]){
  const text=originalPages.find(x=>x.page===page).text.replace(/〔[^〕]*〕/g,'').replace(/<[^>]*>/g,'').replace(/^神经\s*/,'').replace(/^旧约[^\n]*\n/,'').trim();
  scripts[id]+='\n@'+title+'|home|同学虚构作品 · 《神经》阅读\n旁白|课间再翻同学写的残卷，人物姓名被写成了神话。\n'+text.split(/\n\n+/).filter(Boolean).map(x=>'《神经》|'+x.replace(/\n/g,'')).join('\n')+'\n同学|名字都认得，故事倒走到另一个世界了。';
  sources[id].push({title,pages:[page]});days.find(d=>d.id===id).pages+='、'+page;
 }
 fs.writeFileSync('docs/qa/121日素材逐条归宿.json',JSON.stringify(sourceEntries,null,2)+'\n');
}
export function preserveExpansionMigration(nodes,days){
 const baseline=JSON.parse(fs.readFileSync('scripts/calendar/baseline-nodes.json','utf8'));
 const f='src/data/legacyNodes.ts',text=fs.readFileSync(f,'utf8');const current=new Set(nodes.map(n=>n.id));const data=JSON.parse(text.slice(text.indexOf('= ')+2,text.lastIndexOf(';\nexport')));
 for(const n of baseline){if(!current.has(n.id)){const moved=n.day==='D50'&&n.period==='架起手机'?nodes.find(x=>x.day==='D48'&&x.kind===n.kind&&x.text===n.text&&x.speaker===n.speaker):undefined;const target=moved?.id||nodes.find(x=>x.day===n.day&&x.kind==='scene'&&x.period===n.period)?.id||days.find(x=>x.id===n.day)?.entry;data[n.id]={target,retained:false};}else data[n.id]={target:n.id,retained:true};}
 fs.writeFileSync(f,'// Generated: compatibility with chapter review and calendar expansion.\nconst data:Record<string,{target:string;retained:boolean}> = '+JSON.stringify(data,null,2)+';\nexport default data;\n');
}
// Exact text links are evidence, while partial matches remain explicit review candidates.
export function linkSourceLedger(nodes){
 const f='docs/qa/121日素材逐条归宿.json';
 const ledger=JSON.parse(fs.readFileSync(f,'utf8'));
 for(const r of ledger){
  const source=normal(r.original.replace(/^[#＊*▷-]+\s*/,''));
  const candidates=nodes.filter(n=>n.day===r.day&&n.text&&['line','narration'].includes(n.kind));
  const direct=candidates.filter(n=>{const t=normal(n.text);return t.length>4&&source.length>4&&(t.includes(source)||source.includes(t));});
  r.nodes=direct.map(n=>n.id);
  r.mapping=direct.length?'直接文本对应（不等同语义验收）':'无逐字对应；按状态复核';
  if(!direct.length&&r.status.includes('候选')){
   r.nodes=candidates.filter(n=>coverage(r.original,n.text)).map(n=>n.id);
   r.mapping='改编归并候选；需结合所在场景阅读';
  }
 }
 fs.writeFileSync(f,JSON.stringify(ledger,null,2)+'\n');
}
