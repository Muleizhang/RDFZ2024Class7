import fs from 'node:fs';
import {story,dates,characters,backgrounds,failureCount,byId,initial,enter} from '../src/story.ts';
import {opening} from '../src/data/opening.ts';

// 技术统计不覆盖人工文档，不借用历史浏览器结果作当前验收声明。
const checklist=JSON.parse(fs.readFileSync('scripts/review-checklist.json','utf8')) as string[][];
const review=checklist.map(([key,pages,day,period,problem,change,status])=>({
  key,pages,day,period,problem,change,recordedStatus:status||'已完成',
  matchedScene:story.find(n=>n.day===day&&n.kind==='scene'&&n.period===period)?.id??null,
  meaning:'状态来自历史整改清单；锚点匹配只用于定位，故事完整性需人工通读。用户撤下或场景调整可使历史锚点不存在。',
}));
const openingDays=new Map<string,string>();
let openingDay='D01';
for(const node of opening){if(node.id==='next-date')openingDay='D02';openingDays.set(node.id,openingDay);}
const daily=dates.map(date=>{
  const nodes=story.filter(node=>node.day===date.id||openingDays.get(node.id)===date.id);
  const choices=nodes.filter(node=>node.kind==='choice');
  return {id:date.id,date:date.date,title:date.title,entry:date.entry,basis:date.basis,
    pages:date.sourcePages,nodes:nodes.length,choices:choices.length,
    options:choices.reduce((sum,node)=>sum+(node.options?.length||0),0),
    sourceKinds:[...new Set(nodes.map(node=>node.source))],
  };
});
let frame=initial;
const visited=new Set<string>();
while(byId[frame.node].kind!=='end'){
  if(visited.has(frame.node))throw Error('正常路线出现循环：'+frame.node);
  visited.add(frame.node);
  const node=byId[frame.node];
  const next=node.kind==='choice'?node.options?.find(option=>option.next)?.next:node.next;
  if(!next)throw Error('正常路线缺少出口：'+frame.node);
  frame=enter(frame,next);
}
const choices=story.filter(node=>node.kind==='choice');
const report={
  schemaVersion:1,
  meaning:'读取当前可玩源码的结构快照；正常路线只取每题第一条成功路径，不替代全部分支测试或逐屏浏览器验收。不以字数、标题或节点数认定主体故事完成。',
  dates:dates.length,nodes:story.length,choices:choices.length,
  options:choices.reduce((sum,node)=>sum+(node.options?.length||0),0),failures:failureCount,
  characters:Object.keys(characters).length,backgroundIds:Object.keys(backgrounds).length,
  textCharacters:story.reduce((sum,node)=>sum+node.text.length,0),
  normalWalkNodes:visited.size+1,ending:frame.node,endingDate:frame.date,
  daily,review,
  historicalBrowserEvidence:'docs/qa/本轮浏览器验收.json（2026-10-05批次，不是本报告新验收）',
};
fs.mkdirSync('docs/qa',{recursive:true});
fs.writeFileSync('docs/qa/当前版本结构统计.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({dates:report.dates,nodes:report.nodes,choices:report.choices,
  options:report.options,failures:report.failures,ending:report.ending,
  unmatchedHistoricalScenes:review.filter(item=>!item.matchedScene&&item.recordedStatus!=='用户要求撤下').map(item=>item.key),
  withdrawnHistoricalScenes:review.filter(item=>item.recordedStatus==='用户要求撤下').map(item=>item.key)},null,2));
