const $=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const time=seconds=>{const n=Math.max(0,Math.floor(Number(seconds)||0));return Math.floor(n/60)+':'+String(n%60).padStart(2,'0');};
const key='seven.music-review.v1';
const bgm=$('bgm'),sfx=$('sfx');
let catalog,tracks,roles,preferences={roles:{},sound:null,notes:''},current=null,currentMoment=0,currentLine=0,flipIndex=0,noticeTimer;
function notify(message){$('notice').textContent=message;$('notice').hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('notice').hidden=true,4200);}
function persist(){try{localStorage.setItem(key,JSON.stringify(preferences));}catch{notify('选择保留在本页，浏览器不能保存；请导出选曲单。');}}
function waveform(track){const max=Math.max(...track.waveform,.001);return '<div class="wave" aria-hidden="true">'+track.waveform.map(n=>'<i style="--height:'+Math.max(8,Math.round(n/max*100))+'%"></i>').join('')+'</div>';}
function sourceLink(url,label){return '<a href="'+escape(url)+'" target="_blank" rel="noopener noreferrer">'+escape(label)+'</a>';}
function pickFor(role){const id=preferences.roles[role];return id===null?null:tracks.get(id)||tracks.get(roles.get(role).candidates.map(name=>catalog.tracks.find(t=>t.title===name).id)[0]);}
function renderMusic(){
 $('role-nav').innerHTML='<button data-role-filter="all" class="selected">全部用途</button>'+catalog.roles.map(r=>'<button data-role-filter="'+r.id+'">'+r.code+' '+escape(r.title)+'</button>').join('');
 $('music-cards').innerHTML=catalog.roles.map(r=>'<article class="music-card" data-card-role="'+r.id+'" id="role-'+r.id+'"><div class="card-top"><h3>'+escape(r.title)+'</h3><span class="code">'+r.code+'</span></div><p class="style">'+escape(r.style)+'</p><p class="usage"><span>放在哪些故事里</span>'+escape(r.use)+'</p><div class="tracks">'+r.candidates.map(name=>{
  const track=catalog.tracks.find(t=>t.title===name);
  return '<div class="track" data-track-card="'+track.id+'" data-for-role="'+r.id+'"><div class="track-head"><div><div class="track-title">'+escape(track.title)+'</div><div class="track-meta">'+track.id.toUpperCase()+' · '+time(track.duration)+' · Kevin MacLeod · CC BY 4.0</div></div>'+sourceLink(track.sourceUrl,'源页 ↗')+'</div>'+waveform(track)+'<div class="track-actions"><button class="listen" data-listen="'+track.id+'" aria-label="试听 '+escape(track.title)+' · '+r.code+'">▶ 试听</button><button class="pick" data-pick="'+track.id+'" data-role="'+r.id+'" aria-pressed="false">选用这首</button><button class="again" data-restart="'+track.id+'">从头听</button></div></div>';
 }).join('')+'</div><p class="role-note">'+escape(r.note)+'</p><button class="silence" data-silence="'+r.id+'">这一类先留白 / 不加音乐</button></article>').join('');
}
function renderSounds(){
 $('sound-cards').innerHTML=catalog.sounds.map(t=>'<article class="sound-card" data-sound-card="'+t.id+'"><span class="code">'+t.code+'</span><h3>'+escape(t.title)+'</h3><p>'+escape(t.note)+'</p>'+waveform(t)+'<p>'+t.duration.toFixed(2)+' 秒 · '+escape(t.author)+' · '+escape(t.license)+'</p><div class="sound-actions"><button class="yellow-button" data-fx="'+t.id+'">翻一页 ↗</button><button class="pick" data-pick-sound="'+t.id+'" aria-pressed="false">选这个声音</button></div><p>'+sourceLink(t.url,'原始录音与授权 ↗')+'</p></article>').join('');
}
function selectionText(){const sound=catalog.sounds.find(s=>s.id===preferences.sound);return catalog.roles.map(role=>{
 const selected=preferences.roles[role.id];return role.code+' '+role.title+'：'+(selected===null?'留白 / 不加音乐':selected?tracks.get(selected)?.title||'未定':'未定');
}).join('\n')+'\n\n翻页声：'+(sound?sound.code+' '+sound.title:'未定')+'\n\n整体意见：\n'+(preferences.notes||'暂无')+'\n\n说明：本页保留试听提案；主游戏已按用户确认方案接入。';}
function updateSelection(){
 document.querySelectorAll('[data-pick]').forEach(button=>{const selected=preferences.roles[button.dataset.role]===button.dataset.pick;button.setAttribute('aria-pressed',String(selected));button.textContent=selected?'✓ 已选这首':'选用这首';});
 document.querySelectorAll('[data-track-card]').forEach(card=>{card.classList.toggle('chosen',preferences.roles[card.dataset.forRole]===card.dataset.trackCard);});
 document.querySelectorAll('[data-silence]').forEach(button=>{button.textContent=preferences.roles[button.dataset.silence]===null?'✓ 已选留白（点击取消）':'这一类先留白 / 不加音乐';});
 document.querySelectorAll('[data-pick-sound]').forEach(button=>{const selected=preferences.sound===button.dataset.pickSound;button.setAttribute('aria-pressed',String(selected));button.textContent=selected?'✓ 已选这个':'选这个声音';});
 document.querySelectorAll('[data-sound-card]').forEach(card=>card.classList.toggle('selected',preferences.sound===card.dataset.soundCard));
 $('selection-count').textContent='已决定 '+Object.keys(preferences.roles).length+' / '+catalog.roles.length+' 类配乐；翻页声'+(preferences.sound?'已选':'待定')+'。同一曲在不同用途可分别选择。';
 $('review-output').value=selectionText();
}
function updatePlayer(){
 const playing=!!current&&!bgm.paused;
 $('play-pause').disabled=!current;$('play-pause').textContent=playing?'Ⅱ':'▶';
 $('seek').disabled=!current||!Number.isFinite(bgm.duration);
 $('now-time').textContent=time(bgm.currentTime)+' / '+time(Number.isFinite(bgm.duration)?bgm.duration:current?.duration);
 if(Number.isFinite(bgm.duration)&&bgm.duration>0)$('seek').value=Math.round(bgm.currentTime/bgm.duration*1000);
 document.querySelectorAll('[data-track-card]').forEach(card=>card.classList.toggle('active',playing&&card.dataset.trackCard===current.id));
 document.querySelectorAll('[data-listen]').forEach(button=>button.textContent=playing&&button.dataset.listen===current.id?'Ⅱ 暂停':'▶ 试听');
 if(current){$('now-title').textContent=current.title;$('now-state').textContent=playing?'原曲试听 · '+(bgm.loop?'整曲循环':'不循环'):'已暂停';}
}
async function playTrack(id,restart=false){
 const track=tracks.get(id);if(!track)return;
 if(current?.id===id&&!restart&&!bgm.paused){bgm.pause();return;}
 if(current?.id!==id){bgm.pause();bgm.src=track.path;current=track;}
 if(restart)bgm.currentTime=0;
 bgm.volume=Number($('music-volume').value)/100;bgm.loop=$('loop').checked;
 $('now-title').textContent=track.title;$('now-state').textContent='正在载入本地音频…';
 try{await bgm.play();updatePlayer();}catch(error){$('now-state').textContent='未能播放';notify('音乐未能播放，请再点一次试听或刷新检查本地素材。');}
}
function stopMusic(){bgm.pause();if(current)bgm.currentTime=0;updatePlayer();}
function stopAll(){stopMusic();sfx.pause();sfx.currentTime=0;}
async function playSound(id){
 const track=catalog.sounds.find(s=>s.id===id);if(!track)return;
 sfx.pause();sfx.src=track.path;sfx.currentTime=0;sfx.volume=Number($('sound-volume').value)/100;
 try{await sfx.play();$('now-state').textContent='翻页试听：'+track.code+' '+track.title;flipIndex=(flipIndex+1)%catalog.days.length;const date=catalog.days[flipIndex];$('flip-year').textContent=date.date.slice(0,4)+' · 高三';$('flip-date').textContent=Number(date.date.slice(5,7))+' / '+Number(date.date.slice(8));$('flip-title').textContent=date.title;$('flip-sheet').classList.remove('flip-animation');void $('flip-sheet').offsetWidth;$('flip-sheet').classList.add('flip-animation');}catch{notify('翻页声未能播放，请再试一次。');}
}
function showView(view){if(!['music','pages','scene','coverage','reference'].includes(view))view='music';document.querySelectorAll('.view').forEach(section=>section.hidden=section.id!=='view-'+view);document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-selected',String(button.dataset.view===view)));history.replaceState(null,'','#'+view);}
function renderMoment(){
 const moment=catalog.moments[currentMoment];const role=roles.get(moment.role),track=pickFor(moment.role);
 $('demo-title').textContent=moment.title;$('demo-date').textContent=moment.day+' / '+moment.date;
 const line=moment.lines[currentLine]||{speaker:'七班日志',text:'这段场景没有可用对白摘录。'};
 $('demo-speaker').textContent=line.speaker;$('demo-line').textContent=line.text;
 $('scene-demo').style.backgroundImage='url("../assets/'+moment.background+'.webp")';
 $('scene-note').textContent=role.code+' '+role.title+' · '+(track?(preferences.roles[moment.role]?'按你的选择：':'尚未选择，临时对照：')+track.title:'已选留白，不播放音乐')+'。'+moment.context+'。对白摘自当前游戏，含一条成功回应的试听摘录；配乐安排为提案。';
 document.querySelectorAll('[data-moment]').forEach(button=>button.classList.toggle('selected',Number(button.dataset.moment)===currentMoment));
 $('scene-next').disabled=currentLine>=moment.lines.length-1;$('scene-start').textContent=track?'带配乐试听 ↗':'静默阅读 ↗';
}
function renderCoverage(){
 const chapter=$('chapter-filter').value,search=$('day-search').value.trim().toLowerCase();
 const cues=new Map(catalog.sceneCues.map(cue=>[cue.node,cue]));
 const days=catalog.days.filter(day=>(chapter==='all'||String(day.chapter)===chapter)&&(!search||(day.id+' '+day.date+' '+day.title+' '+day.scenes.map(id=>cues.get(id).title+' '+cues.get(id).context).join(' ')).toLowerCase().includes(search)));
 $('coverage-count').textContent=days.length+' / '+catalog.days.length+' 日';
 $('coverage-days').innerHTML=days.map(day=>'<details><summary><span>'+day.date+' / '+day.id+'</span><b>'+escape(day.title)+'</b><span>'+day.roles.map(id=>roles.get(id).code).join(' · ')+' ＋</span></summary><div class="day-scenes">'+day.scenes.map(id=>{
 const cue=cues.get(id),role=roles.get(cue.role);return '<div class="day-scene"><div><strong>'+escape(cue.title)+'</strong><p>'+escape(cue.context)+' · '+cue.node+' · 原页 '+cue.pages.join('、')+'</p><span>'+escape(cue.basis)+'；'+escape(cue.transition)+'</span></div><button data-jump-role="'+role.id+'">'+role.code+' · '+escape(role.title)+' ↗</button></div>';
 }).join('')+'</div></details>').join('');
}
function renderReferences(){
 $('references').innerHTML=catalog.references.map(r=>'<article class="reference-card"><h3>'+escape(r.title)+'</h3><p><span>查到的依据</span>'+escape(r.finding)+'</p><p><span>七班可以怎么用（设计推论）</span>'+escape(r.proposal)+'</p>'+sourceLink(r.url,'查看官方来源 ↗')+'<p class="footnote">'+escape(r.kind)+'</p></article>').join('');
 $('credits-list').innerHTML=[...catalog.tracks,...catalog.sounds].map(t=>'<article><b>'+escape(t.title)+' · '+escape(t.author)+'</b><br>'+sourceLink(t.sourceUrl||t.url,'来源')+' · '+sourceLink(t.licenseUrl,t.license)+'<br>'+escape(t.attribution)+'<br>'+time(t.duration)+' · '+t.sampleRate+' Hz · '+t.channels+'声道 · '+(t.bytes/1024/1024).toFixed(2)+' MB'+(t.sourceFormat?'<br>'+escape(t.sourceFormat):'')+'</article>').join('');
}
function exportReview(){const data={version:1,createdAt:new Date().toISOString(),roles:preferences.roles,sound:preferences.sound,notes:preferences.notes,choices:catalog.roles.map(r=>({code:r.code,role:r.id,title:r.title,selected:preferences.roles[r.id]===null?'silence':tracks.get(preferences.roles[r.id])?.title||null})),soundChoice:catalog.sounds.find(s=>s.id===preferences.sound)?.title||null};const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='七班音乐选曲单.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);notify('已导出选曲单，可以发给我。');}
function setupEvents(){
 document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.view)showView(button.dataset.view);
 if(button.dataset.listen)void playTrack(button.dataset.listen);
 if(button.dataset.restart)void playTrack(button.dataset.restart,true);
 if(button.dataset.pick){const role=button.dataset.role;if(preferences.roles[role]===button.dataset.pick)delete preferences.roles[role];else preferences.roles[role]=button.dataset.pick;persist();updateSelection();renderMoment();}
 if(button.dataset.silence){if(preferences.roles[button.dataset.silence]===null)delete preferences.roles[button.dataset.silence];else preferences.roles[button.dataset.silence]=null;persist();updateSelection();renderMoment();}
 if(button.dataset.fx)void playSound(button.dataset.fx);
 if(button.dataset.pickSound){preferences.sound=preferences.sound===button.dataset.pickSound?null:button.dataset.pickSound;persist();updateSelection();}
 if(button.dataset.moment){stopMusic();currentMoment=Number(button.dataset.moment);currentLine=0;renderMoment();}
 if(button.dataset.roleFilter){document.querySelectorAll('[data-card-role]').forEach(card=>card.hidden=button.dataset.roleFilter!=='all'&&card.dataset.cardRole!==button.dataset.roleFilter);document.querySelectorAll('[data-role-filter]').forEach(b=>b.classList.toggle('selected',b===button));}
 if(button.dataset.jumpRole){showView('music');document.querySelector('[data-role-filter="all"]').click();$('role-'+button.dataset.jumpRole).scrollIntoView({behavior:'smooth',block:'start'});}
 });
 $('quick-theme').onclick=()=>void playTrack(pickFor('theme')?.id||catalog.tracks[0].id);
 $('play-pause').onclick=()=>current&&playTrack(current.id);
 $('stop-all').onclick=stopAll;
 $('seek').oninput=()=>{if(Number.isFinite(bgm.duration))bgm.currentTime=Number($('seek').value)/1000*bgm.duration;};
 $('music-volume').oninput=()=>bgm.volume=Number($('music-volume').value)/100;
 $('sound-volume').oninput=()=>sfx.volume=Number($('sound-volume').value)/100;
 $('loop').onchange=()=>{bgm.loop=$('loop').checked;updatePlayer();};
 for(const name of ['play','pause','timeupdate','loadedmetadata','ended'])bgm.addEventListener(name,updatePlayer);
 bgm.addEventListener('error',()=>{notify('音频加载失败，请检查本地文件或刷新。');$('now-state').textContent='加载失败';});
 $('chapter-filter').onchange=renderCoverage;$('day-search').oninput=renderCoverage;
 $('scene-start').onclick=()=>{const moment=catalog.moments[currentMoment];currentLine=0;renderMoment();const track=pickFor(moment.role);if(track)void playTrack(track.id,true);else stopMusic();};
 $('scene-next').onclick=()=>{currentLine++;renderMoment();};
 $('review-notes').oninput=()=>{preferences.notes=$('review-notes').value;persist();updateSelection();};
 $('export-review').onclick=exportReview;
 $('copy-review').onclick=async()=>{const text=selectionText();$('review-output').hidden=false;$('review-output').value=text;try{await navigator.clipboard.writeText(text);notify('选曲单已复制。');}catch{$('review-output').select();notify('请复制下方选曲单文本。');}};
 window.addEventListener('hashchange',()=>showView(location.hash.slice(1)));
}
async function init(){
 try{
 const response=await fetch('catalog.json');if(!response.ok)throw Error('无法读取清单');catalog=await response.json();tracks=new Map(catalog.tracks.map(t=>[t.id,t]));roles=new Map(catalog.roles.map(r=>[r.id,r]));
 try{const saved=JSON.parse(localStorage.getItem(key)||'{}');const picked={};for(const role of catalog.roles){const value=saved.roles?.[role.id];if(value===null||catalog.tracks.some(t=>t.id===value&&role.candidates.includes(t.title)))picked[role.id]=value;}preferences={roles:picked,sound:catalog.sounds.some(s=>s.id===saved.sound)?saved.sound:null,notes:typeof saved.notes==='string'?saved.notes:''};}catch{/* default in-memory review */}
 const n=catalog.summary;$('summary').innerHTML=[['15','音乐用途'],[n.musicCandidates,'候选音乐'],[n.soundCandidates,'翻页候选'],[n.days,'保留日期']].map(([number,label])=>'<span><b>'+number+'</b>'+label+'</span>').join('');
 renderMusic();renderSounds();renderReferences();renderCoverage();
 $('moment-tabs').innerHTML=catalog.moments.map((m,i)=>'<button data-moment="'+i+'">'+escape(m.title)+'</button>').join('');
 $('review-notes').value=preferences.notes;updateSelection();renderMoment();setupEvents();$('quick-theme').disabled=false;showView(location.hash.slice(1)||'music');
 }catch(error){$('summary').textContent='试听清单加载失败，请刷新或检查本地服务。';notify('暂时无法打开试听清单。');console.error(error);}
}
void init();
