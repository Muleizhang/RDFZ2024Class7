import music from './data/music.ts';
import type {Frame} from './story.ts';
export type MusicRole=keyof typeof music.roles;
export type MusicTrack=keyof typeof music.tracks;
export function musicRoleFor(frame:Frame):MusicRole{
 const nodes:Record<string,string>=music.nodes,cues:Record<string,string>=music.cues,defaults:Record<string,string>=music.defaults;
 return (frame.day==='D01'?'theme':nodes[frame.node]||cues[(frame.day||'D01')+'|'+frame.period]||defaults[frame.day||'D01']||'daily') as MusicRole;
}
export function musicTrackFor(frame:Frame):MusicTrack{return music.roles[musicRoleFor(frame)];}
export function shouldPlayPage(from:Frame,to:Frame,kind:string){return kind==='date'&&from.date!==to.date;}
/** Two native audio channels crossfade; dialogue/retry updates never restart the same track. */
export class GameAudio{
 private channels:[HTMLAudioElement,HTMLAudioElement];
 private page:HTMLAudioElement;
 private active=0;
 private gains=[0,0];
 private desired:MusicTrack|null=null;
 private volume=.35;
 private pageVolume=.25;
 private generation=0;
 private blocked=false;
 private suspended=false;
 private base:string;
 private onBlocked:(blocked:boolean)=>void;
 constructor(base:string,onBlocked:(blocked:boolean)=>void){
  this.base=base;this.onBlocked=onBlocked;
  this.channels=[new Audio(),new Audio()];
  for(const [i,a] of this.channels.entries()){a.preload='none';a.loop=true;a.volume=0;a.dataset.gameAudio='music-'+i;}
  this.page=new Audio(base+music.page.file);this.page.preload='none';this.page.dataset.gameAudio='page';
  for(const a of [...this.channels,this.page]){a.hidden=true;document.body.appendChild(a);}
 }
 setVolumes(musicVolume:number,pageVolume:number){this.volume=musicVolume;this.pageVolume=pageVolume;this.channels.forEach((a,i)=>a.volume=this.gains[i]*this.volume);this.page.volume=pageVolume;}
 setTrack(track:MusicTrack){if(this.desired===track)return;this.desired=track;if(!this.suspended)this.transition(track);}
 unlock(){if(!this.suspended&&this.desired&&(this.blocked||this.channels[this.active].paused))this.transition(this.desired);}
 suspend(hidden:boolean){this.suspended=hidden;if(hidden){this.generation++;this.channels.forEach(a=>a.pause());this.page.pause();}else this.unlock();}
 private transition(track:MusicTrack){
  const token=++this.generation,old=this.active,next=1-old;
  const incoming=this.channels[next],outgoing=this.channels[old];
  // Resume the current track after tab suspension without resetting its position.
  if(outgoing.src.endsWith('/'+music.tracks[track].file)&&this.gains[old]>0){void outgoing.play().then(()=>{this.blocked=false;this.onBlocked(false);}).catch(()=>{this.blocked=true;this.onBlocked(true);});return;}
  incoming.pause();incoming.src=this.base+music.tracks[track].file;incoming.volume=0;this.gains[next]=0;
  void incoming.play().then(()=>{
   if(token!==this.generation){if(this.suspended)incoming.pause();return;}
   this.active=next;this.blocked=false;this.onBlocked(false);
   const start=performance.now(),oldGain=this.gains[old];
   const fade=()=>{if(token!==this.generation)return;const progress=Math.min(1,(performance.now()-start)/1000);this.gains[next]=progress;this.gains[old]=oldGain*(1-progress);this.channels.forEach((a,i)=>a.volume=this.gains[i]*this.volume);if(progress<1)requestAnimationFrame(fade);else outgoing.pause();};
   requestAnimationFrame(fade);
  }).catch(()=>{if(token!==this.generation)return;this.blocked=true;this.onBlocked(true);});
 }
 flipPage(){if(this.pageVolume===0||this.suspended)return;this.page.currentTime=0;this.page.volume=this.pageVolume;void this.page.play().catch(()=>{/* A blocked SFX must never interrupt the story. */});}
 dispose(){this.generation++;for(const a of [...this.channels,this.page]){a.pause();a.removeAttribute('src');a.load();a.remove();}}
}
export {music};
