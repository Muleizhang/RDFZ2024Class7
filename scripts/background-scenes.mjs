// Approved 2026-10-07 artwork. Apply after authored scenes and interactions, before output.
// Match whole named scenes so successful branches receive the same location.
const scenes={
 'N19|前几日的电梯':'elevator-lobby','D49|早晨查岗':'elevator-lobby',
 'D18|鸡从碗里出来':'group-restaurant','D18|铁环与奶茶':'songcheng-rings','D18|千年的绿色激光':'songcheng-stage',
 'D56|找个安静地方':'teacher-office','N42|两池':'washroom','D48|隔间里两个人的声音':'washroom',
 'D38|裤子先裂了':'backstage','N58|两边的体育':'sports-dome','D53|食堂门外':'cafeteria-entrance',
 'D60|毕业照的空椅':'graduation-photo','D60|收齐书页':'chronicle-desk',
 'D33|书中的书':'chronicle-desk','D38|明天又高考':'chronicle-desk','N42|源内与源外':'chronicle-desk',
 'N40|窗台被发现':'classroom-window','D07|军训仍在继续':'classroom-window','N21|望远镜播放器':'classroom-window','D48|窗帘上的影子':'classroom-window',
 'N30|班史交到考试前':'classroom-exam','D23|期中首日':'classroom-exam','N31|数学试毕':'classroom-exam','N32|十拿九稳':'classroom-exam',
 'N60|21:30':'classroom-night','D36|自习的十二分钟':'classroom-night','D36|他又夸我聪明':'classroom-night'
};
export function applyBackgroundScenes(nodes){
 const legacy={};let film18Outside=false;
 for(const node of nodes){const previous=node.background;
  if(scenes[node.day+'|'+node.period])node.background=scenes[node.day+'|'+node.period];
  if(['N45','D33'].includes(node.day)&&node.background==='classroom')node.background='classroom-snow';
  if(['classroom','sunset'].includes(node.background)&&/晚自习|夜自习|夜里/.test(node.period||''))node.background='classroom-night';
  if(node.day==='N42'&&node.text.includes('听口机房暖得使人困'))node.background='listening-lab';
  if(node.filmScene===14&&node.background==='company')node.background='company-basement';
  if(node.filmScene===18){
   if(node.text==='建材公司门口')film18Outside=true;
   if(node.text==='在某房间里')film18Outside=false;
   if(film18Outside&&node.background==='company')node.background='company-gate';
  }else film18Outside=false;
  if(node.background!==previous)legacy[node.id]=previous;
 }
 return legacy;
}
