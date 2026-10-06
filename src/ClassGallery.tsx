import React,{useState} from 'react';
import portraits from './data/portraitAssets.ts';
import profiles from './data/classProfiles.ts';
import {characters} from './story.ts';
import {portraitSeason,type PortraitSeason} from './portraits.ts';
const asset=(name:string)=>import.meta.env.BASE_URL+'assets/'+name;
const images:Record<string,Record<PortraitSeason,string>>=portraits;
// 全班个人美术名单；演员和虚构角色不重复计人。
const names=[...new Set([...Object.keys(portraits),'黄鹤鸣'])];
const people=names.map(name=>{
 const character=Object.values(characters).find(c=>!c.actor&&(c.name===name||(name==='石杨子然'&&c.name==='石杨')));
 const profile=profiles[name as keyof typeof profiles];
 return {name,bio:profile?.bio||character?.bio||'',role:profile?.role||character?.role||'七班同学',fallback:character?.image||'xu.webp'};
});
export function ClassGallery({date,onClose}:{date:string;onClose:()=>void}){
 const [season,setSeason]=useState<PortraitSeason>(()=>portraitSeason(date));
 const [query,setQuery]=useState(''),[selected,setSelected]=useState<(typeof people)[number]|null>(null);
 const shown=people.filter(person=>person.name.includes(query.trim())||(person.name==='郑泽一'&&['郑导','Roy Zheng'].some(alias=>alias.includes(query.trim()))));
 const image=(person:(typeof people)[number])=>images[person.name]?.[season]||person.fallback;
 return <main className="class-gallery">
  <header className="class-gallery-header"><div><span>CLASS SEVEN / OUR PEOPLE</span><h1>全班<span>人物</span></h1><p>把名字，和一起走过的日子放在一起。</p></div><button className="gallery-back" onClick={onClose}>返回游戏 ↗</button></header>
  <section className="gallery-controls" aria-label="人物筛选"><label>找到一位同学<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="输入姓名"/></label><div className="gallery-seasons" aria-label="校服版本"><button aria-pressed={season==='winter'} onClick={()=>setSeason('winter')}>秋季 · 长袖</button><button aria-pressed={season==='summer'} onClick={()=>setSeason('summer')}>春季 · 短袖</button></div><span className="gallery-count">{shown.length} / {people.length} 位同学</span></section>
  <div className="class-gallery-grid">{shown.map(person=><button className="class-person" key={person.name} onClick={()=>setSelected(person)} aria-label={'查看'+person.name}><span className="class-person-number">{String(names.indexOf(person.name)+1).padStart(2,'0')}</span><div className="class-person-image"><img loading="lazy" decoding="async" src={asset(image(person))} alt={person.name+'的'+(season==='winter'?'长袖':'短袖')+'立绘'}/></div><h2>{person.name}<span>↗</span></h2>{!images[person.name]&&<small>个人立绘待补</small>}</button>)}</div>
  {!shown.length&&<p className="gallery-empty">这页没有找到这个名字。试试完整姓名或其中一个字。</p>}
  <footer className="gallery-footer">我们的七班 · 二次元造型 · 点击人物查看大图与资料</footer>
  {selected&&<div className="modal-shade gallery-detail-shade" onClick={()=>setSelected(null)}><section className="gallery-detail" role="dialog" aria-modal="true" aria-label={selected.name+'的人物资料'} onClick={e=>e.stopPropagation()} onKeyDown={e=>{if(e.key==='Escape'){e.stopPropagation();setSelected(null);}}}><button autoFocus className="close" aria-label="关闭人物资料" onClick={()=>setSelected(null)}>×</button><img src={asset(image(selected))} alt={selected.name+'的完整立绘'}/><div><span>CLASS / 07</span><h2>{selected.name}</h2><p>{selected.role}</p>{selected.bio&&<p>{selected.bio}</p>}<small>{images[selected.name]?(season==='winter'?'秋季学期 · 长袖':'春季学期 · 短袖'):'共用立绘 · 个人图待补'}</small></div></section></div>}
 </main>;
}
