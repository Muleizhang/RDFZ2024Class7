import {backgrounds} from './backgrounds.ts';
import {byId,story,type Frame} from './story.ts';
import previous from './data/backgroundLegacy.ts';
const legacy:Record<string,string>=previous;
const valid=(ids:string[])=>[...new Set(ids.filter(id=>Object.hasOwn(backgrounds,id)))];
// Only legacy saves infer seen artwork from read nodes. An old read flag must not
// unlock newly substituted artwork that the player has never actually seen.
export function seenBackgrounds(save:{read:string[];seenBackgrounds?:string[];frame?:Frame}):string[]{
 if(save.seenBackgrounds!==undefined)return valid(save.seenBackgrounds);
 return valid([...save.read.flatMap(id=>{const n=byId[id];return n?.background?[legacy[id]||n.background]:[];}),...(save.frame?[save.frame.background]:[])]);
}
export function mergeBackgrounds(...lists:string[][]):string[]{return valid(lists.flat());}
export const obtainableBackgrounds=()=>valid(story.flatMap(n=>n.background?[n.background]:[]));
