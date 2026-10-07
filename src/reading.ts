import type {Option} from './story.ts';
/** Stable per-scene shuffle: retries, refreshes and keyboard numbering agree. */
export function orderedOptions(id:string,options:Option[]=[]):Option[]{
 let seed=2166136261;for(const c of id)seed=Math.imul(seed^c.charCodeAt(0),16777619)>>>0;
 const result=[...options];for(let i=result.length-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[result[i],result[j]]=[result[j],result[i]];}return result;
}
export function textCharacters(text:string):string[]{return Array.from(new Intl.Segmenter('zh',{granularity:'grapheme'}).segment(text),x=>x.segment);}

export function readingSettings(raw:unknown){
 const v=raw&&typeof raw==='object'?raw as Record<string,unknown>:{};
 return {
  speed:typeof v.speed==='number'&&Number.isFinite(v.speed)?Math.max(10,Math.min(100,v.speed)):26,
  volume:typeof v.volume==='number'&&Number.isFinite(v.volume)?Math.max(0,Math.min(1,v.volume)):0.25,
  musicVolume:typeof v.musicVolume==='number'&&Number.isFinite(v.musicVolume)?Math.max(0,Math.min(1,v.musicVolume)):0.35,
  uiVolume:typeof v.uiVolume==='number'&&Number.isFinite(v.uiVolume)?Math.max(0,Math.min(1,v.uiVolume)):0.1,
  reduced:!!v.reduced,
  // Old reduced-motion preferences must not silently disable the dialogue typewriter.
  instantText:!!v.instantText
 };
}
