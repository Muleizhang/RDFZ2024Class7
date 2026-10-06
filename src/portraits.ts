import portraits from './data/portraitAssets.ts';
import {characters} from './story.ts';

export type PortraitSeason = 'summer' | 'winter';
const assets: Record<string, Record<PortraitSeason, string>> = portraits;
// 本届日历：9月1日开秋季学期，2月26日进入春季学期；暑假开场用短袖。
// 服装随当前章节的现实日期，回忆标签和虚构电影年月不改变章节服装。
export function portraitSeason(date: string): PortraitSeason {
  return date >= '2023-09-01' && date < '2024-02-26' ? 'winter' : 'summer';
}

// 原书已明确的简称；九班徐子瀚不与徐子涵合并。
const aliases: Record<string, string> = {'石杨': '石杨子然'};
export function portraitFor(characterId: string, date: string): string {
  const character = characters[characterId==='c59'?'c38':characterId];
  if (!character) return '';
  const name = character.actor || character.name;
  return assets[aliases[name] || name]?.[portraitSeason(date)] || character.image;
}

// 第220页角色借名及242页角色表：借名对象与实际演员分开管理。
// 秦嘉然取名自ASOUL，没有七班借名对象，不把同昵称者自动当作原型。
const filmPrototypeNames: Record<string, string> = {
  'film-秦旻然': '秦敏然',
  'film-刘树颐': '刘树苡',
  'film-代向阳': '戴向阳',
  'film-黄义薄': '黄艺博',
  'film-金跃山': '金悦山',
  'film-石邵楷': '史绍恺',
  'film-李程蓉': '李承容',
};
export function filmPrototypeFor(characterId: string, date: string): {name: string; image: string} | undefined {
  const name = filmPrototypeNames[characterId];
  // 借名人物可能尚无独立台词节点，仍可从人物美术资源表直接取图。
  return name && assets[name] ? {name, image: assets[name][portraitSeason(date)]} : undefined;
}
