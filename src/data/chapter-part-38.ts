import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D49-r0024",
    "kind": "line",
    "source": "补写",
    "page": 165,
    "pages": [
      165,
      166
    ],
    "day": "D49",
    "context": "同一回忆 · 高三套圈测试，具体日未载",
    "period": "守门也要加圈",
    "background": "track",
    "speaker": "郑泽一",
    "text": "这回早点说，不就少跑这些了。",
    "character": "c38",
    "next": "D49-r0020"
  },
  {
    "id": "D49-r0018",
    "kind": "line",
    "source": "补写",
    "page": 165,
    "pages": [
      165,
      166,
      187
    ],
    "day": "D49",
    "context": "同一回忆 · 高三套圈测试，具体日未载",
    "period": "守门也要加圈",
    "background": "track",
    "text": "“别踢了，我自首。再踢明天得住跑道上。”",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D49-r0025"
  },
  {
    "id": "D49-r0025",
    "kind": "line",
    "source": "补写",
    "page": 165,
    "pages": [
      165,
      166
    ],
    "day": "D49",
    "context": "同一回忆 · 高三套圈测试，具体日未载",
    "period": "守门也要加圈",
    "background": "track",
    "speaker": "郑泽一",
    "text": "去吧，别再算丢几个球了。",
    "character": "c38",
    "next": "D49-r0020"
  },
  {
    "id": "D49-r0020",
    "kind": "line",
    "source": "补写",
    "page": 165,
    "pages": [
      165,
      166
    ],
    "day": "D49",
    "context": "同一回忆 · 高三套圈测试，具体日未载",
    "period": "守门也要加圈",
    "background": "track",
    "speaker": "徐子涵",
    "text": "杨老师，我跑千米套圈了。",
    "character": "c03",
    "next": "D49-r0021"
  },
  {
    "id": "D49-r0021",
    "kind": "line",
    "source": "转述",
    "page": 165,
    "pages": [
      165,
      166
    ],
    "day": "D49",
    "context": "同一回忆 · 高三套圈测试，具体日未载",
    "period": "守门也要加圈",
    "background": "track",
    "speaker": "旁白",
    "text": "最初想少跑一点，最后绕了一大圈，还是自己去承认了。",
    "character": "",
    "next": "D50-date"
  },
  {
    "id": "D50-date",
    "kind": "date",
    "source": "演出",
    "page": 167,
    "pages": [
      167,
      200
    ],
    "day": "D50",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-03-08",
    "text": "小卖部补货",
    "pov": "c17",
    "character": "",
    "next": "D50-0001"
  },
  {
    "id": "D50-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 167,
    "pages": [
      167,
      200
    ],
    "day": "D50",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "小卖部补货",
    "pov": "c17",
    "character": "c17",
    "speaker": "李沐衡",
    "next": "D50-0002"
  },
  {
    "id": "D50-0002",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "text": "小卖部补货",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D50-0003"
  },
  {
    "id": "D50-0003",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "speaker": "李沐衡",
    "text": "可乐雪碧售罄。新进东方树叶、芬达、速溶咖啡。",
    "character": "c17",
    "next": "interactive-D50-0003"
  },
  {
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "page": 167,
    "pages": [
      167
    ],
    "source": "补写",
    "id": "interactive-D50-0003",
    "kind": "choice",
    "text": "新饮料补货，我怎么招呼？",
    "speaker": "李沐衡",
    "character": "c17",
    "options": [
      {
        "text": "先看清今天有什么，再拿，钱晚自习后记得对。",
        "next": "interactive-D50-0003-say1"
      },
      {
        "text": "可乐没了就看别的，别拿旧库存报数。",
        "next": "interactive-D50-0003-say2"
      },
      {
        "text": "先照上次的品种报价，到了再找替代。",
        "failure": "报价到了门口，货架却没接到那一瓶。"
      },
      {
        "text": "拿了不必记，熟人以后总会想起。",
        "failure": "饮料出了柜，名字却没有进账。"
      }
    ]
  },
  {
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "page": 167,
    "pages": [
      167
    ],
    "source": "补写",
    "id": "interactive-D50-0003-say1",
    "kind": "line",
    "text": "先看清今天有什么，再拿，钱晚自习后记得对。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-D50-0003-reply1"
  },
  {
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "page": 167,
    "pages": [
      167
    ],
    "source": "补写",
    "id": "interactive-D50-0003-reply1",
    "kind": "line",
    "text": "新货和新账各有了位置。",
    "speaker": "旁白",
    "character": "",
    "next": "D50-0005"
  },
  {
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "page": 167,
    "pages": [
      167
    ],
    "source": "补写",
    "id": "interactive-D50-0003-say2",
    "kind": "line",
    "text": "可乐没了就看别的，别拿旧库存报数。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-D50-0003-reply2"
  },
  {
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "page": 167,
    "pages": [
      167
    ],
    "source": "补写",
    "id": "interactive-D50-0003-reply2",
    "kind": "line",
    "text": "清单终于赶上了货架。",
    "speaker": "旁白",
    "character": "",
    "next": "D50-0005"
  },
  {
    "id": "D50-0005",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "小卖部补货",
    "background": "rear",
    "speaker": "张沐雷",
    "text": "选择越来越多，课表没变少。",
    "character": "c27",
    "next": "D50-r0031"
  },
  {
    "id": "D50-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "四十分钟写作",
    "background": "classroom",
    "text": "四十分钟写作",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D50-r0032"
  },
  {
    "id": "D50-r0032",
    "kind": "line",
    "source": "转述",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "四十分钟写作",
    "background": "classroom",
    "speaker": "旁白",
    "text": "英语的语言障碍、数学接连翻车都记在今天。语文作文四十分钟，四十七分被提起，生物转到小肠绒毛。",
    "character": "",
    "next": "D50-r0033"
  },
  {
    "id": "D50-r0033",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "四十分钟写作",
    "background": "classroom",
    "speaker": "同学",
    "text": "这回先把题目看全。",
    "character": "",
    "next": "D50-r0050"
  },
  {
    "id": "D50-r0050",
    "kind": "line",
    "source": "转述",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "四十分钟写作",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学也有自己的卷子。两天前摆好直播的设备，今天仍在教室。桌后又补了货，课也照常走。",
    "character": "",
    "next": "D50-r0035"
  },
  {
    "id": "D50-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D50-r0036"
  },
  {
    "id": "D50-r0036",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "[英语] Young Sir讲完型 Passage 6，提到“语言障碍”。",
    "character": "",
    "next": "D50-r0037"
  },
  {
    "id": "D50-r0037",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "沐衡曰：“这不做D篇吗。”",
    "character": "",
    "next": "D50-r0038"
  },
  {
    "id": "D50-r0038",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "[数学] 战老师三次翻车，雯巨道：“谁做错了站起来！”",
    "character": "",
    "next": "D50-r0039"
  },
  {
    "id": "D50-r0039",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "题目如下：",
    "character": "",
    "next": "D50-r0040"
  },
  {
    "id": "D50-r0040",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "已知 F 为双曲线 C：x²/9 − y²/16 = 1 的左焦点，P、Q 为 C 右支上的点，若 PQ 的长等于虚轴长的2倍，点 A(5,0) 在线段 PQ 上，则△PQF 的周长为__",
    "character": "",
    "next": "D50-r0041"
  },
  {
    "id": "D50-r0041",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "______。",
    "character": "",
    "next": "D50-r0042"
  },
  {
    "id": "D50-r0042",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "课间　中班级小卖部可乐、雪碧售倾。罄 qìng。",
    "character": "",
    "next": "D50-r0043"
  },
  {
    "id": "D50-r0043",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "班级小卖部新进东方树叶、芬达、速溶咖啡，极大程度地丰富了同学们的物质和精神生活。",
    "character": "",
    "next": "D50-r0044"
  },
  {
    "id": "D50-r0044",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "[语文] 沐衡推荐《↗↘↗关于北京发展论述编摘》，孙老师打分：“Good！”",
    "character": "",
    "next": "D50-r0045"
  },
  {
    "id": "D50-r0045",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "写作文《自立与借力》。",
    "character": "",
    "next": "D50-r0046"
  },
  {
    "id": "D50-r0046",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "[午休] 戴便估作文47分！拭目以待。",
    "character": "",
    "next": "D50-r0047"
  },
  {
    "id": "D50-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D50-r0048"
  },
  {
    "id": "D50-r0048",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（Xzh评：这是奈子吗？）",
    "character": "",
    "next": "D50-r0049"
  },
  {
    "id": "D50-r0049",
    "kind": "line",
    "source": "原文",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "[化学] 实验探究最后一课。",
    "character": "",
    "next": "D50-0006"
  },
  {
    "id": "D50-0006",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 电教日常",
    "period": "修墙与架机",
    "background": "classroom",
    "text": "修墙与架机",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D50-r0006"
  },
  {
    "id": "D50-r0006",
    "kind": "line",
    "source": "转述",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 电教日常",
    "period": "修墙与架机",
    "background": "classroom",
    "speaker": "旁白",
    "text": "墙面凹凸，沐衡买来抹墙的材料，一点点填平。钉子晃了，他又拿钉、锤敲牢。",
    "character": "",
    "next": "D50-0008"
  },
  {
    "id": "D50-0008",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 电教日常",
    "period": "修墙与架机",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "这块固定好，图像就不会歪。",
    "character": "c17",
    "next": "D50-0009"
  },
  {
    "id": "D50-0009",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 电教日常",
    "period": "修墙与架机",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "你一请假，全班就会想起来。",
    "character": "c27",
    "next": "D50-0010"
  },
  {
    "id": "D50-0010",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 高二的大屏与发电站",
    "period": "AI进群",
    "background": "classroom",
    "text": "AI进群",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D50-r0010"
  },
  {
    "id": "D50-r0010",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 高二的大屏与发电站",
    "period": "AI进群",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "大屏上能用了。让它写电影节剧本试试？",
    "character": "c17",
    "next": "D50-r0011"
  },
  {
    "id": "D50-r0011",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 高二的大屏与发电站",
    "period": "AI进群",
    "background": "classroom",
    "speaker": "同学",
    "text": "先调成喵喵机。",
    "character": "",
    "next": "D50-r0012"
  },
  {
    "id": "D50-r0012",
    "kind": "line",
    "source": "转述",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 高二的大屏与发电站",
    "period": "AI进群",
    "background": "classroom",
    "speaker": "旁白",
    "text": "疫情转到线上后，沐衡又把它引进微信、拉入发电站。原来只刷表情的群，这回围着新来的“成员”聊天。",
    "character": "",
    "next": "D50-r0013"
  },
  {
    "id": "D50-r0013",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 高二的大屏与发电站",
    "period": "AI进群",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "电影稿也让它试过，可要拍出来，还是得我们自己接着改。",
    "character": "c05",
    "next": "D50-0013"
  },
  {
    "id": "D50-0013",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 晚自习借手机",
    "period": "手机的旧一局",
    "background": "classroom",
    "text": "手机的旧一局",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D50-0014"
  },
  {
    "id": "D50-0014",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 晚自习借手机",
    "period": "手机的旧一局",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "手机借完，该回来了。",
    "character": "c27",
    "next": "D50-r0016"
  },
  {
    "id": "D50-r0016",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 晚自习借手机",
    "period": "手机的旧一局",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "再来一把。",
    "character": "c15",
    "next": "D50-0016"
  },
  {
    "id": "D50-0016",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "回忆 · 晚自习借手机",
    "period": "手机的旧一局",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "话可以讲一遍，时间不会自己多一把。",
    "character": "c27",
    "next": "D50-0017"
  },
  {
    "id": "D50-0017",
    "kind": "scene",
    "source": "演出",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "回到今天",
    "background": "classroom",
    "text": "回到今天",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D50-0018"
  },
  {
    "id": "D50-0018",
    "kind": "line",
    "source": "补写",
    "page": 167,
    "pages": [
      167
    ],
    "day": "D50",
    "context": "现实",
    "period": "回到今天",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "饮料拿了，晚自习后记得付钱。外班的价也别看成班内价。",
    "character": "c17",
    "next": "N59-date"
  },
  {
    "id": "N59-date",
    "kind": "date",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-03-12",
    "text": "点满者要花钱",
    "pov": "c07",
    "character": "",
    "next": "N59-r0060"
  },
  {
    "id": "N59-r0060",
    "kind": "portrait",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "点满者要花钱",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "N59-r0021"
  },
  {
    "id": "N59-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "家务的例子",
    "background": "classroom",
    "text": "家务的例子",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N59-r0022"
  },
  {
    "id": "N59-r0022",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "家务的例子",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "砍柴、喂猪，怎么就不行？",
    "character": "c17",
    "next": "N59-r0023"
  },
  {
    "id": "N59-r0023",
    "kind": "line",
    "source": "转述",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "家务的例子",
    "background": "classroom",
    "speaker": "旁白",
    "text": "英语作文说家务，李华却似长生不老，一直留级。每回换话题，这个人还是中学生。",
    "character": "",
    "next": "N59-r0024"
  },
  {
    "id": "N59-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "text": "点谁讲题",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N59-r0025"
  },
  {
    "id": "N59-r0025",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "同学",
    "text": "请徐子涵讲。",
    "character": "",
    "next": "N59-r0026"
  },
  {
    "id": "N59-r0026",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "战老师",
    "text": "点徐子涵要花钱。",
    "character": "c48",
    "next": "N59-r0027"
  },
  {
    "id": "N59-r0027",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "同学",
    "text": "点邵聪不用钱。",
    "character": "",
    "next": "N59-r0038"
  },
  {
    "id": "N59-r0038",
    "kind": "choice",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "text": "听见讲题要收费，我怎么打趣",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "“先记价目，题目可别跟着涨价。”",
        "next": "N59-r0039"
      },
      {
        "text": "“那请邵聪先讲，满者这档以后再约。”",
        "next": "N59-r0041"
      },
      {
        "text": "既然收费，那今天这道就先别听讲了。",
        "failure": "讲台报了一个价，自己的题却先被暂停营业。"
      }
    ]
  },
  {
    "id": "N59-r0039",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "text": "“先记价目，题目可别跟着涨价。”",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N59-r0040"
  },
  {
    "id": "N59-r0040",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "战老师",
    "text": "你先把眼前这道写了。",
    "character": "c48",
    "next": "N59-r0028"
  },
  {
    "id": "N59-r0041",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "text": "“那请邵聪先讲，满者这档以后再约。”",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N59-r0042"
  },
  {
    "id": "N59-r0042",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "战老师",
    "text": "谁来讲都得先会，继续。",
    "character": "c48",
    "next": "N59-r0028"
  },
  {
    "id": "N59-r0028",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "点谁讲题",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "同一个讲台，突然还分价目了。",
    "character": "c07",
    "next": "N59-r0029"
  },
  {
    "id": "N59-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "苏轼的情书",
    "background": "classroom",
    "text": "苏轼的情书",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N59-r0030"
  },
  {
    "id": "N59-r0030",
    "kind": "line",
    "source": "转述",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "苏轼的情书",
    "background": "classroom",
    "speaker": "旁白",
    "text": "语文说苏轼和陶诗，东坡给陶潜的“情书”。《论语》事君事父，又有人故意错换字，孙老师把人称作逆子逆生逆臣。",
    "character": "",
    "next": "N59-r0031"
  },
  {
    "id": "N59-r0031",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "苏轼的情书",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "字别乱换！",
    "character": "c46",
    "next": "N59-r0032"
  },
  {
    "id": "N59-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "text": "谁算错了",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N59-r0033"
  },
  {
    "id": "N59-r0033",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "HQ，你算错了。",
    "character": "student-zhou-ziyao",
    "next": "interactive-N59-r0033"
  },
  {
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "page": 168,
    "pages": [
      168
    ],
    "source": "补写",
    "id": "interactive-N59-r0033",
    "kind": "choice",
    "text": "子尧说HQ算错了，我怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "先把我们算的那一步并排放着，看看差在哪儿。",
        "next": "interactive-N59-r0033-say1"
      },
      {
        "text": "老师，您再看这一行，我也核一下自己的。",
        "next": "interactive-N59-r0033-say2"
      },
      {
        "text": "既然有人说错，前面全重写就行。",
        "failure": "草稿重开了一页，真正的差错却没被找出。"
      },
      {
        "text": "您算的肯定对，他那份先不用看。",
        "failure": "答案保住了权威，计算却没有等到核对。"
      }
    ]
  },
  {
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "page": 168,
    "pages": [
      168
    ],
    "source": "补写",
    "id": "interactive-N59-r0033-say1",
    "kind": "line",
    "text": "先把我们算的那一步并排放着，看看差在哪儿。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N59-r0033-reply1"
  },
  {
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "page": 168,
    "pages": [
      168
    ],
    "source": "补写",
    "id": "interactive-N59-r0033-reply1",
    "kind": "line",
    "text": "从这一步核。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N59-r0034"
  },
  {
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "page": 168,
    "pages": [
      168
    ],
    "source": "补写",
    "id": "interactive-N59-r0033-say2",
    "kind": "line",
    "text": "老师，您再看这一行，我也核一下自己的。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N59-r0033-reply2"
  },
  {
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "page": 168,
    "pages": [
      168
    ],
    "source": "补写",
    "id": "interactive-N59-r0033-reply2",
    "kind": "line",
    "text": "别只报最后的数。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N59-r0034"
  },
  {
    "id": "N59-r0034",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "speaker": "HQ",
    "text": "没错啊。",
    "character": "c45",
    "next": "N59-r0043"
  },
  {
    "id": "N59-r0043",
    "kind": "line",
    "source": "转述",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "speaker": "旁白",
    "text": "回头核算，纯小丑竟是周子尧。雷学仍在谈水的光解，老师算的没错，方才纠错的人先被自己的计算绕住了。",
    "character": "",
    "next": "N59-r0036"
  },
  {
    "id": "N59-r0036",
    "kind": "line",
    "source": "补写",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "谁算错了",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "这页能说清的笑点，已经够响了。",
    "character": "c07",
    "next": "N59-r0044"
  },
  {
    "id": "N59-r0044",
    "kind": "scene",
    "source": "演出",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N59-r0045"
  },
  {
    "id": "N59-r0045",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "12日　March 2024。距高考87天。Izzy。",
    "character": "",
    "next": "N59-r0046"
  },
  {
    "id": "N59-r0046",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英，讲阅读表记，作文“做家务”。",
    "character": "",
    "next": "N59-r0047"
  },
  {
    "id": "N59-r0047",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "我砍柴、喂猪怎么就不行了？",
    "character": "c17",
    "next": "N59-r0048"
  },
  {
    "id": "N59-r0048",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "李华：长生不老，一直留级。",
    "character": "",
    "next": "N59-r0049"
  },
  {
    "id": "N59-r0049",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数。战：面朝大海，春暖花开。同学：老师您教唆学生 suicide。",
    "character": "",
    "next": "N59-r0050"
  },
  {
    "id": "N59-r0050",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "或曰：请徐子涵来讲题。战曰：点徐子涵要花钱。",
    "character": "",
    "next": "N59-r0051"
  },
  {
    "id": "N59-r0051",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "又有人曰：点 SC 不花钱。笔者曰，xzh者，戚班之花魁也。",
    "character": "",
    "next": "N59-r0052"
  },
  {
    "id": "N59-r0052",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语，讲苏轼之“和陶归园田居”及东坡给陶潜之“情书”。",
    "character": "",
    "next": "N59-r0053"
  },
  {
    "id": "N59-r0053",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "悠悠未必尔，聊乐我所然。“独好渊明之诗”。",
    "character": "",
    "next": "N59-r0054"
  },
  {
    "id": "N59-r0054",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "或有论语“远之事君，迩之事父”，有同学以“远之弑父，迩之弑君”解之，又有人以“百日誓师”言之，多有不合礼之处，未多言。",
    "character": "",
    "next": "N59-r0055"
  },
  {
    "id": "N59-r0055",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙以为同学为逆子、逆生、逆臣。",
    "character": "",
    "next": "N59-r0056"
  },
  {
    "id": "N59-r0056",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物，史官昼寝，无事发生。",
    "character": "",
    "next": "N59-r0057"
  },
  {
    "id": "N59-r0057",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "HQ你算错了。HQ：没错啊。纯小丑竟是 zyc --。",
    "character": "student-zhou-ziyao",
    "next": "N59-r0058"
  },
  {
    "id": "N59-r0058",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化，无事发生。",
    "character": "",
    "next": "N59-r0059"
  },
  {
    "id": "N59-r0059",
    "kind": "line",
    "source": "原文",
    "page": 168,
    "pages": [
      168
    ],
    "day": "N59",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生，雷大谈雷学，水之光解，等等不一而足。",
    "character": "",
    "next": "D51-date"
  },
  {
    "id": "D51-date",
    "kind": "date",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170,
      188,
      189,
      190,
      193
    ],
    "day": "D51",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-03-14",
    "text": "解析竞速记",
    "pov": "c07",
    "character": "",
    "next": "D51-0001"
  },
  {
    "id": "D51-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170,
      188,
      189,
      190,
      193
    ],
    "day": "D51",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "解析竞速记",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "D51-r0002"
  },
  {
    "id": "D51-r0002",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "班门口迎战",
    "background": "classroom",
    "text": "班门口迎战",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D51-r0003"
  },
  {
    "id": "D51-r0003",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "班门口迎战",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "这份全国解析密题，自习半小时还没弄明白。老师下午来，问问他竞速？",
    "character": "c07",
    "next": "D51-r0004"
  },
  {
    "id": "D51-r0004",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "班门口迎战",
    "background": "classroom",
    "speaker": "王家童",
    "text": "老师，以您才学，在七班扬一回威名。",
    "character": "c25",
    "next": "D51-r0005"
  },
  {
    "id": "D51-r0005",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "班门口迎战",
    "background": "classroom",
    "speaker": "战老师",
    "text": "善。先授一题，再竞速。",
    "character": "c48",
    "next": "D51-0002"
  },
  {
    "id": "D51-0002",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "text": "先讲例七",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "formula",
      "title": "原页169 · 板书异写",
      "lines": [
        "3k² + 4 → 3k² + 9",
        "同学提醒 · 老师未信"
      ]
    },
    "next": "D51-r0007"
  },
  {
    "id": "D51-r0007",
    "kind": "line",
    "source": "转述",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "speaker": "旁白",
    "text": "原式是3k²＋4。老师列韦达时抄成9，另一处又抄成1。我们起初等他发现，提醒了，他却不信。",
    "character": "",
    "next": "D51-0008"
  },
  {
    "id": "D51-0008",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "speaker": "王家童",
    "text": "这次真的抄错了。",
    "character": "c25",
    "next": "D51-r0009"
  },
  {
    "id": "D51-r0009",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "以前假提醒太多，这回狼真来了。",
    "character": "c07",
    "next": "D51-r0010"
  },
  {
    "id": "D51-r0010",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "speaker": "战老师",
    "text": "这是老眼昏花，还没老年痴呆。",
    "character": "c48",
    "next": "D51-r0011"
  },
  {
    "id": "D51-r0011",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "战氏等式，一等于四等于九。",
    "character": "c07",
    "next": "interactive-D51-r0011"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0011",
    "kind": "choice",
    "text": "老师板书的常数变了，我怎么指出？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "老师，这里刚才还是四，您再看一眼这行。",
        "next": "interactive-D51-r0011-say1"
      },
      {
        "text": "前后的常数不同，我把原题一起指给您。",
        "next": "interactive-D51-r0011-say2"
      },
      {
        "text": "您写得快肯定对，我直接把四改九。",
        "failure": "笔记跟得很快，原题却仍把四留在原处。"
      },
      {
        "text": "大家都在笑，我就不指出哪里变了。",
        "failure": "笑声出了黑板，错处却没找到自己的坐标。"
      }
    ]
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0011-say1",
    "kind": "line",
    "text": "老师，这里刚才还是四，您再看一眼这行。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D51-r0011-reply1"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0011-reply1",
    "kind": "line",
    "text": "我看这一处。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D51-0010"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0011-say2",
    "kind": "line",
    "text": "前后的常数不同，我把原题一起指给您。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D51-r0011-reply2"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "先讲例七",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0011-reply2",
    "kind": "line",
    "text": "先对着原题。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D51-0010"
  },
  {
    "id": "D51-0010",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第一轮",
    "background": "classroom",
    "text": "第一轮",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D51-r0013"
  },
  {
    "id": "D51-r0013",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第一轮",
    "background": "classroom",
    "speaker": "贾诺基",
    "text": "我跟大哥来。",
    "character": "c28",
    "next": "D51-r0014"
  },
  {
    "id": "D51-r0014",
    "kind": "line",
    "source": "转述",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第一轮",
    "background": "classroom",
    "speaker": "旁白",
    "text": "我们还沉在韦达里，老师已经笔走龙蛇，把整题解完。",
    "character": "",
    "next": "D51-r0015"
  },
  {
    "id": "D51-r0015",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第一轮",
    "background": "classroom",
    "speaker": "战老师",
    "text": "再来一轮？",
    "character": "c48",
    "next": "D51-r0016"
  },
  {
    "id": "D51-r0016",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第一轮",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "第一轮认输。萌童，你换贾诺基来。",
    "character": "c07",
    "next": "D51-r0017"
  },
  {
    "id": "D51-r0017",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "text": "第二轮的密谋",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D51-r0018"
  },
  {
    "id": "D51-r0018",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "王家童",
    "text": "故意写错韦达，他以为我们错，两人反而对，让他发昏。",
    "character": "c25",
    "next": "D51-r0019"
  },
  {
    "id": "D51-r0019",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "上台一看……这题根本不用韦达。",
    "character": "c07",
    "next": "D51-r0020"
  },
  {
    "id": "D51-r0020",
    "kind": "line",
    "source": "转述",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "旁白",
    "text": "萌童敲着老师的面板，我又推了几下黑板。取乐归取乐，演算仍得自己写。老师却把题中点的位置看错了。",
    "character": "",
    "next": "D51-r0021"
  },
  {
    "id": "D51-r0021",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "王家童",
    "text": "怎么他又写韦达了？",
    "character": "c25",
    "next": "D51-r0022"
  },
  {
    "id": "D51-r0022",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "他算到两个椭圆上去了，题里不是这个。",
    "character": "c07",
    "next": "interactive-D51-r0022"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0022",
    "kind": "choice",
    "text": "老师算到两个椭圆，我们怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "老师，题里不是两个，这个条件得先对。",
        "next": "interactive-D51-r0022-say1"
      },
      {
        "text": "先把图和原题并排，别光看哪边算得快。",
        "next": "interactive-D51-r0022-say2"
      },
      {
        "text": "双椭圆算得顺，就把题当成那个做。",
        "failure": "速度跑在前面，原题却被留在另一张图上。"
      },
      {
        "text": "等您全部算完再说，反正现在不好打断。",
        "failure": "长过程终于结束，起点的误认却还在第一行。"
      },
      {
        "text": "先记老师算到哪里，题里多一个也影响不大。",
        "failure": "第二个椭圆留在了草稿，原题却始终只有自己的那一个。"
      }
    ]
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0022-say1",
    "kind": "line",
    "text": "老师，题里不是两个，这个条件得先对。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D51-r0022-reply1"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0022-reply1",
    "kind": "line",
    "text": "再看这里。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D51-r0023"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0022-say2",
    "kind": "line",
    "text": "先把图和原题并排，别光看哪边算得快。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D51-r0022-reply2"
  },
  {
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "source": "补写",
    "id": "interactive-D51-r0022-reply2",
    "kind": "line",
    "text": "回到题干。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D51-r0023"
  },
  {
    "id": "D51-r0023",
    "kind": "line",
    "source": "转述",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "旁白",
    "text": "我写完回头，老师竟得了一个无解的解。台下哗然。",
    "character": "",
    "next": "D51-r0024"
  },
  {
    "id": "D51-r0024",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "战老师",
    "text": "一胜一负耳。",
    "character": "c48",
    "next": "D51-r0025"
  },
  {
    "id": "D51-r0025",
    "kind": "choice",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170,
      188,
      189,
      190,
      193
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "text": "这一轮结束，我怎么接",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "“一胜一负。第一轮您真快，第二轮我们终于扳回来。”",
        "next": "D51-r0026"
      },
      {
        "text": "“题里一个椭圆，您算了两个。这回是看错题，不是不会算。”",
        "next": "D51-r0028"
      },
      {
        "text": "您第二轮错了，第一轮的胜局也不用再算。",
        "failure": "比分只留了新一轮，旧一轮却还举着做完的草稿。"
      }
    ]
  },
  {
    "id": "D51-r0026",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170,
      188,
      189,
      190,
      193
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "text": "“一胜一负。第一轮您真快，第二轮我们终于扳回来。”",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "D51-r0027"
  },
  {
    "id": "D51-r0027",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "战老师",
    "text": "一胜一负，我承认。",
    "character": "c48",
    "next": "D51-r0030"
  },
  {
    "id": "D51-r0028",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170,
      188,
      189,
      190,
      193
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "text": "“题里一个椭圆，您算了两个。这回是看错题，不是不会算。”",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "D51-r0029"
  },
  {
    "id": "D51-r0029",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "战老师",
    "text": "看错了，下次再来。",
    "character": "c48",
    "next": "D51-r0030"
  },
  {
    "id": "D51-r0030",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "第二轮的密谋",
    "background": "classroom",
    "speaker": "HQ",
    "text": "莫做心中之题，做笔下之题。捡好基础的西瓜，再求高深的西柚。",
    "character": "c45",
    "next": "D51-r0061"
  },
  {
    "id": "D51-r0061",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D51-r0062"
  },
  {
    "id": "D51-r0062",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战与同学战于讲台之上。",
    "character": "",
    "next": "D51-r0063"
  },
  {
    "id": "D51-r0063",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "一日晨，战发全国解析之密题，难甚，凡二刻有余，晓之者寥寥寥。以是战不及授其例题，曰：“有自习乎？”对曰：“然，于暮时可授之解析。”于是战计亲授以解析于申时，言必毕，去。",
    "character": "",
    "next": "D51-r0064"
  },
  {
    "id": "D51-r0064",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "后于申时，笔者与萌童迎战于班口，问曰：“盍不与诸生共竞速解析？以师之天资兼之才学，必可一展师之宏图，而扬威名于七班矣。",
    "character": "",
    "next": "D51-r0065"
  },
  {
    "id": "D51-r0065",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”战闻之曰：“善，然吾先授一题，以泽诸生之智，再竞于解析，方可立威于七班。”",
    "character": "",
    "next": "D51-r0066"
  },
  {
    "id": "D51-r0066",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "顷之，战授课本例题七，其方程有“3k²+4”之形，4者，阿拉伯之数也，其形似乎“9”，又似乎“1”。",
    "character": "",
    "next": "D51-r0067"
  },
  {
    "id": "D51-r0067",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战列韦达时，抄之一点，以4为9，将 M 点之分母记为3k²+9，又抄一点，分母记为3k²+1，诸生早了然，冀战可自阅其谬，故默然。",
    "character": "",
    "next": "D51-r0068"
  },
  {
    "id": "D51-r0068",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "或有出声点之，皆由昔常假意提醒耗其精力，此时战不信其点，执意自算。笔者曰：“此乃狼来了之意，数误之，再诚则不见信。”讵料战谬者二，竟得一结果，虽非正解，于解析中亦奇事矣。",
    "character": "",
    "next": "D51-r0069"
  },
  {
    "id": "D51-r0069",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "至此战始见其抄之谬误，忙笑而改之，谓诸生：“此止见吾之老眼昏花，未见吾之老年痴呆。”笔者再曰：“自此，战氏等式始立，有1=4=9也。",
    "character": "",
    "next": "D51-r0070"
  },
  {
    "id": "D51-r0070",
    "kind": "line",
    "source": "原文",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "余观此玄妙之处竟胜于2000¥≥3000$，可见战之智慧。”",
    "character": "",
    "next": "D51-r0071"
  },
  {
    "id": "D51-r0071",
    "kind": "line",
    "source": "原文",
    "page": 170,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "笔者曰：“题不细观深究，而臆断其数与意，可乎？战之才学天资，由其初战于贾生观之，可谓卓越绝伦，远非吾辈可比，若扫题而过，会错其意，致数取图谬，犹不可以胜之。",
    "character": "",
    "next": "D51-r0072"
  },
  {
    "id": "D51-r0072",
    "kind": "line",
    "source": "原文",
    "page": 170,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ尝言：‘莫做心中之题，做笔下之题。’盖此之理也。",
    "character": "",
    "next": "D51-r0073"
  },
  {
    "id": "D51-r0073",
    "kind": "line",
    "source": "原文",
    "page": 170,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "同样，数学物理者，艰深也，似学生物者，繁杂也，试中常有时间之虞，若急于一时，则终为错讹，犹不及细察深思，虽有一二不解，终胜于会意错而白写一卷矣。",
    "character": "",
    "next": "D51-r0074"
  },
  {
    "id": "D51-r0074",
    "kind": "line",
    "source": "原文",
    "page": 170,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "于大闱在即，愿众人以此为戒，细察深思，诚如HQ所言：‘捡好基础之西瓜，再求高深之西柚，基础要打牢，四平八稳。’”",
    "character": "",
    "next": "D51-r0075"
  },
  {
    "id": "D51-r0075",
    "kind": "line",
    "source": "原文",
    "page": 170,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "共和国七十六年，伊紫于人大附中记。",
    "character": "",
    "next": "D51-r0036"
  },
  {
    "id": "D51-r0036",
    "kind": "scene",
    "source": "演出",
    "page": 189,
    "pages": [
      189
    ],
    "day": "D51",
    "context": "回忆 · 老师谈孩子",
    "period": "西瓜和西柚",
    "background": "classroom",
    "text": "西瓜和西柚",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D51-r0037"
  },
  {
    "id": "D51-r0037",
    "kind": "line",
    "source": "补写",
    "page": 189,
    "pages": [
      189
    ],
    "day": "D51",
    "context": "回忆 · 老师谈孩子",
    "period": "西瓜和西柚",
    "background": "classroom",
    "speaker": "战老师",
    "text": "西瓜的大名，你们猜猜？",
    "character": "c48",
    "next": "D51-r0038"
  },
  {
    "id": "D51-r0038",
    "kind": "line",
    "source": "补写",
    "page": 189,
    "pages": [
      189
    ],
    "day": "D51",
    "context": "回忆 · 老师谈孩子",
    "period": "西瓜和西柚",
    "background": "classroom",
    "speaker": "同学",
    "text": "您姓战，您爱人姓范，难道叫战范？",
    "character": "",
    "next": "D51-r0039"
  },
  {
    "id": "D51-r0039",
    "kind": "line",
    "source": "转述",
    "page": 189,
    "pages": [
      189
    ],
    "day": "D51",
    "context": "回忆 · 老师谈孩子",
    "period": "西瓜和西柚",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师让大家猜名字，同学却先把两个姓拼成了笑话。西瓜之外，又有了小的西柚。",
    "character": "",
    "next": "D51-r0040"
  },
  {
    "id": "D51-r0040",
    "kind": "line",
    "source": "补写",
    "page": 189,
    "pages": [
      189
    ],
    "day": "D51",
    "context": "回忆 · 老师谈孩子",
    "period": "西瓜和西柚",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "平常听这两个名字，都是老师说孩子。后来圆锥课上，竟又凑出一个来。",
    "character": "c07",
    "next": "D51-r0031"
  },
  {
    "id": "D51-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "回忆 · 圆锥曲线课堂",
    "period": "西翼的来处",
    "background": "classroom",
    "text": "西翼的来处",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D51-r0032"
  },
  {
    "id": "D51-r0032",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "回忆 · 圆锥曲线课堂",
    "period": "西翼的来处",
    "background": "classroom",
    "speaker": "战老师",
    "text": "圆锥第二定义，准线写成ce……",
    "character": "c48",
    "next": "D51-r0033"
  },
  {
    "id": "D51-r0033",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "回忆 · 圆锥曲线课堂",
    "period": "西翼的来处",
    "background": "classroom",
    "speaker": "同学",
    "text": "老师，应该是a/e。",
    "character": "",
    "next": "D51-r0034"
  },
  {
    "id": "D51-r0034",
    "kind": "line",
    "source": "转述",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "回忆 · 圆锥曲线课堂",
    "period": "西翼的来处",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师沿错式编了“蜥蜴”口诀。同学想到他家西瓜、西柚，把蜥蜴又改成“西翼”，说是虚出来的第三个孩子。",
    "character": "",
    "next": "D51-r0035"
  },
  {
    "id": "D51-r0035",
    "kind": "line",
    "source": "补写",
    "page": 169,
    "pages": [
      169,
      170
    ],
    "day": "D51",
    "context": "回忆 · 圆锥曲线课堂",
    "period": "西翼的来处",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "西翼能上黑板，公式可不能跟着认错。",
    "character": "c07",
    "next": "D52-date"
  },
  {
    "id": "D52-date",
    "kind": "date",
    "source": "演出",
    "page": 174,
    "pages": [
      174,
      211,
      220,
      242,
      243,
      244,
      245
    ],
    "day": "D52",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-04-02",
    "text": "镜中花 · 第一幕",
    "pov": "c05",
    "character": "",
    "next": "D52-r0001"
  }
];
export default data;
