import React,{useState} from 'react';
import {backgrounds,backgroundDescriptions,backgroundFile} from './backgrounds.ts';
const asset=(id:string)=>import.meta.env.BASE_URL+'assets/'+backgroundFile(id);
export function BackgroundGallery({unlocked,onClose}:{unlocked:string[];onClose:()=>void}){
 const [query,setQuery]=useState(''),[selected,setSelected]=useState<string|null>(null);
 const available=Object.keys(backgrounds).filter(id=>unlocked.includes(id));
 const shown=available.filter(id=>(backgrounds[id]+backgroundDescriptions[id]).includes(query.trim()));
 return <main className="background-gallery">
  <header className="class-gallery-header"><div><span>CLASS SEVEN / PLACES WE REMEMBER</span><h1>走过的<span>风景</span></h1><p>把见过的地方，留在手帐里。</p></div><button className="gallery-back" onClick={onClose}>返回手帐 ↗</button></header>
  {selected?<section className="background-detail" aria-label={backgrounds[selected]}><button className="gallery-back" onClick={()=>setSelected(null)}>← 返回背景列表</button><img className={selected==='sunset'?'background-sunset':''} src={asset(selected)} alt={backgrounds[selected]}/><h2>{backgrounds[selected]}</h2><p>{backgroundDescriptions[selected]}</p><div className="background-detail-nav"><button disabled={available.indexOf(selected)===0} onClick={()=>setSelected(available[available.indexOf(selected)-1])}>← 上一张</button><button disabled={available.indexOf(selected)===available.length-1} onClick={()=>setSelected(available[available.indexOf(selected)+1])}>下一张 →</button></div></section>:<>
   <section className="gallery-controls"><label>寻找一处风景<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索名称或描述"/></label><span className="gallery-count">已解锁 {available.length} / {Object.keys(backgrounds).length} 处</span></section>
   <div className="background-gallery-grid">{shown.map(id=><button className="background-card" key={id} onClick={()=>setSelected(id)} aria-label={'查看背景：'+backgrounds[id]}><img className={id==='sunset'?'background-sunset':''} src={asset(id)} loading="lazy" decoding="async" alt={backgrounds[id]}/><div><h2>{backgrounds[id]} <span>↗</span></h2><p>{backgroundDescriptions[id]}</p></div></button>)}</div>
   {!shown.length&&<p className="gallery-empty">{available.length?'没有找到这处风景，换个词试试。':'继续翻阅故事，看到的背景会留在这里。'}</p>}
  </>}
 </main>;
}
