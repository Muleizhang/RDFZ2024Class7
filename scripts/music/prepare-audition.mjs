import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {story,dates} from '../../src/story.ts';
const root='public/music-room';
const curation=JSON.parse(fs.readFileSync('scripts/music/curation.json','utf8'));
const fetchFile=(url,file)=>{execFileSync('curl',['-sSfL','--retry','1','--max-time','60','-o',file,url],{stdio:['ignore','ignore','pipe'],timeout:130000});};
const catalogueCache='/tmp/seven-music-pieces.json';
if(!fs.existsSync(catalogueCache))fetchFile('https://www.incompetech.com/music/royalty-free/pieces.json',catalogueCache);
const pieces=JSON.parse(fs.readFileSync(catalogueCache,'utf8'));
const names=[...new Set(curation.roles.flatMap(r=>r.candidates))];
const catalog={...curation,tracks:[],sceneCues:[],days:[]};
fs.mkdirSync('public/audio',{recursive:true});
function inspect(file){
 const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels,bit_rate','-of','json',file],{encoding:'utf8'}));
 const samples=execFileSync('ffmpeg',['-v','error','-i',file,'-ac','1','-ar','400','-f','f32le','pipe:1'],{maxBuffer:12*1024*1024});
 const count=samples.length/4;let square=0,peak=0;const wave=[];for(let i=0;i<count;i++){const v=Math.abs(samples.readFloatLE(i*4));square+=v*v;peak=Math.max(peak,v);}for(let b=0;b<72;b++){let p=0;for(let i=Math.floor(count*b/72);i<Math.floor(count*(b+1)/72);i++)p=Math.max(p,Math.abs(samples.readFloatLE(i*4)));wave.push(Number(p.toFixed(4)));}
 return {duration:Number(probe.format.duration),codec:probe.streams[0].codec_name,sampleRate:Number(probe.streams[0].sample_rate),channels:probe.streams[0].channels,bytes:fs.statSync(file).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),waveform:wave,analysis:'波形为400Hz单声道降采样分析，不是人耳试听结论，也不改变原音频文件。',rmsDb:Number((20*Math.log10(Math.sqrt(square/count)||1e-9)).toFixed(2))};
}
for(let i=0;i<names.length;i++){
 const piece=pieces.find(p=>p.title===names[i]);if(!piece)throw Error('曲库缺失：'+names[i]);
 const id='m'+String(i+1).padStart(2,'0');const path='../audio/'+id+'.mp3';const url='https://www.incompetech.com/music/royalty-free/mp3-royaltyfree/'+encodeURIComponent(piece.filename);
 if(!fs.existsSync(root+'/'+path))fetchFile(url,root+'/'+path);
 const stats=inspect(root+'/'+path);
 if(stats.duration<20)throw Error('音乐文件异常：'+piece.title);
 catalog.tracks.push({id,title:piece.title,author:'Kevin MacLeod',path,url,sourceUrl:'https://www.incompetech.com/music/royalty-free/index.html?isrc='+piece.isrc,license:'CC-BY-4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',attribution:`${piece.title} — Kevin MacLeod (incompetech.com). Licensed under Creative Commons Attribution 4.0: https://creativecommons.org/licenses/by/4.0/`,instruments:piece.instruments,bpm:piece.bpm,feel:piece.feel,sourceDescription:piece.description,kind:'music',...stats});
 console.log('音乐 '+(i+1)+'/'+names.length+'：'+piece.title);
}
for(const sound of catalog.sounds){
 const cache='/tmp/seven-sound-'+sound.sourceId+'.html';if(!fs.existsSync(cache))fetchFile(sound.url,cache);
 const html=fs.readFileSync(cache,'utf8');
 const license=sound.license==='CC0-1.0'?'creativecommons.org/publicdomain/zero/1.0/':'creativecommons.org/licenses/by/4.0/';
 if(!html.includes(license))throw Error('音效授权不匹配：'+sound.id);
 const url=html.match(/data-static-file-url="([^"]+-hq\.mp3)"/)?.[1];if(!url)throw Error('没有公开HQ试听：'+sound.id);
 const path='../audio/'+sound.id+'.mp3';if(!fs.existsSync(root+'/'+path))fetchFile(url,root+'/'+path);
 const stats=inspect(root+'/'+path);if(stats.duration<.15||stats.duration>15)throw Error('音效文件异常：'+sound.id);
 Object.assign(sound,{path,downloadUrl:url,licenseUrl:'https://'+license,sourceFormat:'Freesound公开HQ MP3试听文件；不是原始WAV',attribution:`${sound.title} (${sound.sourceId}) — ${sound.author}, ${sound.url}. ${sound.license}. 未修改原试听文件。`,...stats});
 console.log('音效：'+sound.title);
}
const scenes=story.filter(n=>n.kind==='scene');
const manual=new Map([
 ['D01','theme'],['D44','study'],['D45','teacher'],['D46','study'],['D47','daily'],['D51','exam'],['D56','exam'],['D57','graduation'],['D58','exam'],['D59','graduation'],['D60','graduation'],
]);
function cue(n){
 const day=n.day||'D01';
 const t=n.period||n.text,ctx=n.context||'';
 if(['D46-0002','D46-r0088'].includes(n.id))return {role:'exam',basis:'百日现实框架，与可乐答疑回忆分开'};
 if(n.id==='D46-r0049')return {role:'comedy',basis:'雷导对可乐动作的误读，次日回日常'};
 if(n.id==='D46-r0008')return {role:'friends',basis:'刻名可乐与分班回忆'};
 if(n.id==='D46-r0012')return {role:'teacher',basis:'HQ求学旧事的同学转述'};
 if(day==='D39A')return {role:'lunch',basis:'梅利屋得名与同学闲聊'};
 if(day==='D01')return {role:'theme',basis:'开场与序的主旋律'};
 if(ctx.includes('戏中戏')){const number=Number(ctx.match(/场景(\d+)/)?.[1]);return {role:[2,9,23].includes(number)?'film-loss':[3,6,8,10,13,14,15,18,19,21,22].includes(number)?'film-mystery':[20,24].includes(number)?'conflict':'film-city',basis:'电影场次人工分组'};}
 if(day==='D24'&&ctx!=='现实')return {role:'comedy',basis:'十二钗代表自述与听众追问'};
 if(/食堂门外|回班路上|后来得知缘由/.test(t)&&day==='D53')return {role:'conflict',basis:'生日争执／余波'};
 if(/好友验证|前女友|一百二十八|账号|李悦琳|谁在洗牌|纸团|借裤|套圈|语音|鸣冤|金子|反复拿|可乐.*暗示|机位|摇镜|机票|采访|幕布之后/.test(t))return {role:'comedy',basis:'重点误会或幕后'};
 if(day==='D36'&& !/课间手帐|晚自习|数学.*课堂/.test(t))return {role:'friends',basis:'观察日志主要关系'};
 if(['D18','D17'].includes(day)&&ctx!=='现实'&&['classroom','rear'].includes(n.background))return {role:'comedy',basis:'旅行中的同学／老师互动'};
 if(['train','bus','great-wall','west-lake','songcheng','workshop','hotel','liangzhu','yue-temple','xixi'].includes(n.background))return {role:'travel',basis:'出行场景基础，具体冲突优先'};
 if(/哭|失利|道歉|投降|绝交/.test(t))return {role:'conflict',basis:'关系或受挫转折候选'};
 if(/雪|晚自习后|教室安静|书中的书|创世|降临|接龙/.test(t)||ctx.includes('同学虚构作品'))return {role:'memory',basis:'安静回望／作品阅读'};
 if(['noodle','hotpot','barbecue','cafeteria','cafe'].includes(n.background)||/梅利屋|望梅/.test(t))return {role:'lunch',basis:'饭桌日常'};
 if(/厕所|牌位|赌|白板|Switch|再来一把|赐福|证书|咸班|打赌/.test(t))return {role:'comedy',basis:'轻喜剧事件候选'};
 if(manual.has(day))return {role:manual.get(day),basis:'重点长篇／结尾人工归类'};
 if(['math-office','biology','history-office'].includes(n.background))return {role:'study',basis:'办公室基础，实际气氛仍需逐句定点'};
 if(ctx.includes('老师讲述')||/尼德兰|荷兰|老师.*往事/.test(t))return {role:'teacher',basis:'老师讲述'};
 return {role:'daily',basis:'校园日常默认曲，后续按现场转折细化'};
}
catalog.sceneCues.push({node:"first",day:"D01",title:"徐启元落笔与序",context:"现实",background:"classroom",pages:[8],role:"theme",basis:"开场主旋律人工归类",transition:"同曲连续，不重复起奏"});
for(const n of scenes){const c=cue(n);catalog.sceneCues.push({node:n.id,day:n.day||'D01',title:n.period||n.text,context:n.context||'现实',background:n.background||'classroom',pages:n.pages||[n.page],...c,transition:c.role==='film-loss'?'先停乐，冲击后再入':c.role==='conflict'?'可先留白': '同曲连续，不重复起奏'});}
for(const date of dates){const cues=catalog.sceneCues.filter(c=>c.day===date.id);catalog.days.push({id:date.id,date:date.date,title:date.title,chapter:date.chapter,chapterTitle:date.chapterTitle,roles:[...new Set(cues.map(c=>c.role))],scenes:cues.map(c=>c.node)});}
const moments=[['开场落笔','D01','theme','first'],['吃面与等候','D26','lunch','D26-0016'],['十二钗追问','D24','comedy','D24-r0029'],['答疑与可乐','D46','study','D46-r0017'],['旅行里的牌局','D18','comedy','D18-r0034'],['观察日志里的相处','D36','friends','D36-r0011'],['电影查账','D52','film-mystery','D52-0075'],['毕业收笔','D60','graduation','D60-0019']];
const byId=new Map(story.map(n=>[n.id,n]));
catalog.moments=moments.map(([title,day,role,node])=>{const scene=byId.get(node);if(!scene)throw Error('试听场景不存在：'+node);const lines=[];let n=scene.kind==='line'?scene:byId.get(scene.next);for(let steps=0;n&&steps<30&&lines.length<6;steps++){if(n.kind==='scene'||n.kind==='date')break;if(n.kind==='line')lines.push({speaker:n.speaker||'旁白',text:n.text});n=byId.get(n.kind==='choice'?n.options.find(o=>o.next)?.next:n.next);}if(!lines.length)throw Error('试听对白为空：'+node);return {title,day,role,node,context:scene.context||'现实',background:scene.background||'classroom',date:dates.find(d=>d.id===day).date,lines};});
catalog.summary={days:dates.length,scenes:scenes.length,cues:catalog.sceneCues.length,musicCandidates:catalog.tracks.length,soundCandidates:catalog.sounds.length,totalBytes:[...catalog.tracks,...catalog.sounds].reduce((s,t)=>s+t.bytes,0),sceneRoleCounts:Object.fromEntries(curation.roles.map(r=>[r.id,catalog.sceneCues.filter(c=>c.role===r.id).length])),limits:'全量用途建议已按用户确认选曲映射到游戏；默认日常归类仍可细化。使用整曲循环，未宣称无缝循环点。'};
fs.writeFileSync(root+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');
console.log(JSON.stringify(catalog.summary));

fs.writeFileSync(root+'/credits.txt',[...catalog.tracks,...catalog.sounds].map(t=>t.attribution+'\nSource: '+(t.sourceUrl||t.url)+'\nLicense: '+t.licenseUrl).join('\n\n')+'\n');
