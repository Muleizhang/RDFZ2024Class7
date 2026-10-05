import {byId,characters,dateByDate,backgrounds,initial,story,enter,type Frame} from './story.ts';
import legacy from './data/legacyNodes.ts';
export type HistoryEntry={node:string;speaker:string;text:string;date:string;context?:string};
export type Save={version:2;revision?:string;frame:Frame;read:string[];failures:string[];history:HistoryEntry[]};
export const newSave=():Save=>({version:2,revision:'review-20261005',frame:{...initial},read:[],failures:[],history:[]});
function shape(value:unknown):boolean{if(!value||typeof value!=='object')return false;const v=value as Save;const f=v.frame;return [1,2].includes(v.version)&&!!f&&!!byId[f.node]&&!!dateByDate[f.date]&&!!characters[f.pov]&&(f.character===''||!!characters[f.character])&&!!backgrounds[f.background]&&typeof f.period==='string'&&(!f.context||typeof f.context==='string')&&(!f.prop||(typeof f.prop.kind==='string'&&typeof f.prop.title==='string'&&Array.isArray(f.prop.lines)&&f.prop.lines.length<30&&f.prop.lines.every(x=>typeof x==='string'&&x.length<1000)))&&Array.isArray(v.read)&&v.read.every(x=>typeof x==='string'&&!!byId[x])&&Array.isArray(v.failures)&&v.failures.every(x=>typeof x==='string'&&x.length<500)&&Array.isArray(v.history)&&v.history.every(h=>h&&typeof h.text==='string'&&typeof h.speaker==='string'&&typeof h.date==='string'&&!!byId[h.node]);}
export function validateSave(value:unknown):value is Save{return shape(value)&&(value as Save).version===2;}
export function parseSave(raw:string):Save{
 const v=JSON.parse(raw);
 if(v?.frame){if(v.frame.pov==='c59')v.frame.pov='c38';if(v.frame.character==='c59')v.frame.character='c38';}
 if(v&&[1,2].includes(v.version)&&(v.revision===undefined||v.revision==='review-20261005')&&v.frame&&typeof v.frame.node==='string'&&Array.isArray(v.read)&&Array.isArray(v.history)){
  const map=(id:string)=>legacy[id]?.target??id;
  const former=v.frame.node;v.frame.node=map(former);
  v.read=v.read.filter((id:unknown)=>typeof id==='string'&&(!legacy[id]||legacy[id].retained)).map(map);
  v.history=v.history.map((h:HistoryEntry)=>({...h,node:map(h.node)}));
  if(legacy[former]&&byId[v.frame.node]&&(v.revision===undefined||v.frame.node!==former)){
   const n=byId[v.frame.node];const date=dateByDate[v.frame.date];
   let frame={...v.frame,prop:null,day:date?.id};
   // 重建当前位置之前的视角与场景，旧台词的角色不能带入重写后的场景。
   for(const step of story){if(step.day===n.day)frame=enter(frame,step.id);if(step.id===n.id)break;}
   v.frame=frame;
  }
 }
 if(!shape(v))throw Error('存档格式不兼容或内容损坏。');
 const s=v as Save;return {...s,version:2,revision:'review-20261005',frame:{...s.frame,context:s.frame.context??'现实',day:dateByDate[s.frame.date].id,prop:s.frame.prop??null}};
}
export function readLocal(key:string):Save|null{try{const s=localStorage.getItem(key);return s?parseSave(s):null;}catch{return null;}}
