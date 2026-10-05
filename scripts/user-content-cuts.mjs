// 用户最新要求：撤下第一章的骰子赠礼和温雪告白插叙。
// 在历次审查补写之后执行，避免旧润色步骤重新加回这些桥段。
export function applyUserCuts(scripts, sources) {
  const original = scripts.D03;
  const start = original.indexOf('@课堂|');
  const end = original.indexOf('@下课|');
  if (start < 0 || end < start) throw Error('骰子撤下锚点失配');
  scripts.D03 = '!吕思宇\n' + original.slice(start, end).replace('@课堂|classroom',
    '@课堂|classroom\n吕思宇|初执史笔，诚惶诚恐……好吧其实并没有，挺好玩的。').trim();

  const farewell = scripts.D04.indexOf('@告别|');
  const memory = scripts.D04.indexOf('@误会从哪里开始|');
  if (memory < 0 || farewell < memory) throw Error('告白撤下锚点失配');
  // 二次复查在回忆入口前加入了吕的视角标记，一起撤下。
  const before = scripts.D04.slice(0, memory).replace(/\n!吕思宇\s*$/, '');
  scripts.D04 = before + scripts.D04.slice(farewell);
  sources.D04 = [{pages: [14]}];
}
