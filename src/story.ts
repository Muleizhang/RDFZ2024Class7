import cast from './data/characters.ts';
import allDays from './data/dates.ts';
import expanded from './data/nodes.ts';
import {opening} from './data/opening.ts';
export type Kind='line'|'choice'|'date'|'portrait'|'scene'|'end';
export type Option={text:string;next?:string;failure?:string};
export type Prop={kind:string;title:string;lines:string[]};
export type StoryNode={id:string;kind:Kind;text:string;speaker?:string;character?:string;pov?:string;background?:string;period?:string;date?:string;context?:string;day?:string;next?:string;options?:Option[];source:'原文'|'转述'|'补写'|'演出';page:number;pages?:number[];effect?:string;prop?:Prop|null;filmScene?:number};
export type Character={name:string;role:string;image:string;color:string;gender?:string;actor?:string;bio?:string};
export const characters:Record<string,Character>=cast;
export const dates=allDays;
export const dateById=Object.fromEntries(dates.map(d=>[d.id,d]));
export const dateByDate=Object.fromEntries(dates.map(d=>[d.date,d]));
export const story:StoryNode[]=[...opening,...expanded as StoryNode[]];
export const byId:Record<string,StoryNode>=Object.fromEntries(story.map(n=>[n.id,n]));
export {backgrounds} from './backgrounds.ts';
export const failureCount=story.flatMap(n=>n.options?.filter(o=>o.failure)||[]).length;
export const timetable=['英','英','语','数','数','英语答疑','化','C·选科','物','物'];
export function countdown(date:string){return Math.round((Date.parse('2024-06-07T00:00:00Z')-Date.parse(date+'T00:00:00Z'))/86400000);}
export function countdownLabel(date:string){const c=countdown(date);return c>0?`距高考 ${c} 天`:c===0?'高考日 · 今天':'高考之后 · 毕业季';}
export function skippedDates(date:string){const index=dates.findIndex(d=>d.date===date);if(index<1)return [];const from=Date.parse(dates[index-1].date+'T00:00:00Z'),end=Date.parse(date+'T00:00:00Z'),out:string[]=[];for(let time=from+86400000;time<end;time+=86400000)out.push(new Date(time).toISOString().slice(5,10));return out;}
export function weekday(date:string){return ['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(date+'T00:00:00Z').getUTCDay()];}
export type Frame={node:string;date:string;pov:string;character:string;background:string;period:string;context?:string;day?:string;prop?:Prop|null};
export function enter(frame:Frame,id:string):Frame{const n=byId[id];if(!n)throw Error('不存在的剧情节点：'+id);return {...frame,node:id,date:n.date??frame.date,pov:n.pov??frame.pov,character:n.character??frame.character,background:n.background??frame.background,period:n.period??frame.period,context:n.context??(n.date?'现实':frame.context??'现实'),day:n.day??dateByDate[n.date??frame.date]?.id??frame.day,prop:n.kind==='scene'||n.kind==='date'?n.prop??null:frame.prop??null};}
export const initial=enter({node:'calendar',date:'2023-07-16',pov:'xu',character:'xu',background:'classroom',period:'集结',context:'现实',day:'D01',prop:null},'calendar');
