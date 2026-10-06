import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D22-r0024",
    "kind": "line",
    "source": "补写",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "两层还是不分层",
    "background": "classroom",
    "speaker": "同学",
    "text": "预实验不是这样。",
    "character": "",
    "next": "D22-r0025"
  },
  {
    "id": "D22-r0025",
    "kind": "line",
    "source": "转述",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "两层还是不分层",
    "background": "classroom",
    "speaker": "旁白",
    "text": "结果没有被一句“实验做完”盖过去，两批的差异仍留在观察里。",
    "character": "",
    "next": "D22-r0026"
  },
  {
    "id": "D22-r0026",
    "kind": "scene",
    "source": "演出",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "text": "擦掉的答案",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D22-r0027"
  },
  {
    "id": "D22-r0027",
    "kind": "line",
    "source": "转述",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "speaker": "旁白",
    "text": "废答题卡流到别班，惠子宁又擦上面的答案。卡已是废的，答案却依旧有人在意。",
    "character": "",
    "next": "D22-r0028"
  },
  {
    "id": "D22-r0028",
    "kind": "line",
    "source": "补写",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "先擦掉这些。",
    "character": "c14",
    "next": "interactive-D22-r0028"
  },
  {
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "page": 88,
    "pages": [
      88
    ],
    "source": "补写",
    "id": "interactive-D22-r0028",
    "kind": "choice",
    "text": "惠说先擦掉答案，我怎样配合？",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "先留自己的过程，再擦旁边的答案。",
        "next": "interactive-D22-r0028-say1"
      },
      {
        "text": "我把需要重做的圈上，擦完能回到题里。",
        "next": "interactive-D22-r0028-say2"
      },
      {
        "text": "把错的答案擦干净，就算订正完了。",
        "failure": "红叉消失了，错因却没有被带走。"
      },
      {
        "text": "顺手全擦，条件和过程回头再想。",
        "failure": "纸擦得很净，连重来的入口也一起没了。"
      }
    ]
  },
  {
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "page": 88,
    "pages": [
      88
    ],
    "source": "补写",
    "id": "interactive-D22-r0028-say1",
    "kind": "line",
    "text": "先留自己的过程，再擦旁边的答案。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-D22-r0028-reply1"
  },
  {
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "page": 88,
    "pages": [
      88
    ],
    "source": "补写",
    "id": "interactive-D22-r0028-reply1",
    "kind": "line",
    "text": "别擦错地方。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "D22-r0029"
  },
  {
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "page": 88,
    "pages": [
      88
    ],
    "source": "补写",
    "id": "interactive-D22-r0028-say2",
    "kind": "line",
    "text": "我把需要重做的圈上，擦完能回到题里。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-D22-r0028-reply2"
  },
  {
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "page": 88,
    "pages": [
      88
    ],
    "source": "补写",
    "id": "interactive-D22-r0028-reply2",
    "kind": "line",
    "text": "先看这一道。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "D22-r0029"
  },
  {
    "id": "D22-r0029",
    "kind": "line",
    "source": "补写",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "speaker": "同学",
    "text": "这个也要擦？",
    "character": "",
    "next": "D22-r0030"
  },
  {
    "id": "D22-r0030",
    "kind": "line",
    "source": "转述",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "擦掉的答案",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一张张清完，刚才的试验和答题卡才一起收桌。",
    "character": "",
    "next": "D22-r0031"
  },
  {
    "id": "D22-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D22-r0032"
  },
  {
    "id": "D22-r0032",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日无事→确信。",
    "character": "",
    "next": "D22-r0033"
  },
  {
    "id": "D22-r0033",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（徐生启元补录）：",
    "character": "",
    "next": "D22-r0034"
  },
  {
    "id": "D22-r0034",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "蕾子怒斥蕾生上课用心之不专于班中，而攘徐生之去。然蕾不知徐生当其时正写数册于座，更不料有小人举徐生之册以示众人。蕾子大惊，疾走而夺其册，自述心碎万瓣。",
    "character": "",
    "next": "D22-r0035"
  },
  {
    "id": "D22-r0035",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "徐生悔其行，乃于课后登堂请罪，誓考90分而复得其册。后人传之为佳话。",
    "character": "",
    "next": "D22-r0036"
  },
  {
    "id": "D22-r0036",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "有刘雷二术士炼金于班中，自以为精通其化学原理，其实不似菜茼所料。将褐稠液溢出而附于地，滋滋有气生焉，有氯味，而不知其为何物。不知者以其为徐生子涵遗矢于地也。",
    "character": "",
    "next": "D22-r0037"
  },
  {
    "id": "D22-r0037",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "沛于废纸中得十有七班涂卡纸，怅然叹曰：“吾等之答题卡亦将流于他班诸生掌中邪？作答须敬须慎，切莫见笑于人也。”惠子谆尔而对曰：“临交卷擦净选项以橡皮，固可防之矣。”",
    "character": "",
    "next": "D22-r0038"
  },
  {
    "id": "D22-r0038",
    "kind": "line",
    "source": "原文",
    "page": 88,
    "pages": [
      88
    ],
    "day": "D22",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "又补录：“吾尝求古数学家之心，知有自然对数曰ln；今又有一偶素数曰二，故又问徐生启元：ln2与0，孰大孰小？”",
    "character": "",
    "next": "N29-date"
  },
  {
    "id": "N29-date",
    "kind": "date",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-25",
    "text": "你在嘲笑我吗",
    "pov": "c09",
    "character": "",
    "next": "N29-r0039"
  },
  {
    "id": "N29-r0039",
    "kind": "portrait",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "你在嘲笑我吗",
    "pov": "c09",
    "character": "c09",
    "speaker": "周远持",
    "next": "N29-r0015"
  },
  {
    "id": "N29-r0015",
    "kind": "scene",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "红衣服的帅哥",
    "background": "classroom",
    "text": "红衣服的帅哥",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N29-r0016"
  },
  {
    "id": "N29-r0016",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "红衣服的帅哥",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学课有人睡，委员长掷粉笔正中其位，又隔远处喊。",
    "character": "",
    "next": "N29-r0017"
  },
  {
    "id": "N29-r0017",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "红衣服的帅哥",
    "background": "classroom",
    "speaker": "博老师",
    "text": "红衣服的帅哥～",
    "character": "c53",
    "next": "N29-r0018"
  },
  {
    "id": "N29-r0018",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "红衣服的帅哥",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一声喊得人惊醒，还像有些自得。",
    "character": "",
    "next": "N29-r0019"
  },
  {
    "id": "N29-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "text": "球框与代码",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N29-r0020"
  },
  {
    "id": "N29-r0020",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "speaker": "旁白",
    "text": "持持误解球框题，能者笑他审题不细。",
    "character": "",
    "next": "N29-r0021"
  },
  {
    "id": "N29-r0021",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "speaker": "周远持",
    "text": "你在嘲笑我吗？",
    "character": "c09",
    "next": "N29-r0022"
  },
  {
    "id": "N29-r0022",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "speaker": "战老师",
    "text": "然也。天下嘲笑旁人者何其多，不言已矣。",
    "character": "c48",
    "next": "interactive-N29-r0022"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0022",
    "kind": "choice",
    "text": "老师说有人嘲笑，我怎样把话接回去？",
    "speaker": "周远持",
    "character": "c09",
    "options": [
      {
        "text": "我刚才笑的是那个画面，题我接着写。",
        "next": "interactive-N29-r0022-say1"
      },
      {
        "text": "先不抢话，您刚才那一步我还要问。",
        "next": "interactive-N29-r0022-say2"
      },
      {
        "text": "笑过就算回应了，题目先不用接。",
        "failure": "笑声落了地，课堂的下一步却悬在半空。"
      },
      {
        "text": "替旁边的人承认是在嘲笑，省得您再问。",
        "failure": "解释还没开始，旁边的人先领到了一句代认。"
      }
    ]
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0022-say1",
    "kind": "line",
    "text": "我刚才笑的是那个画面，题我接着写。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N29-r0022-reply1"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0022-reply1",
    "kind": "line",
    "text": "那就看这道。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N29-r0023"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0022-say2",
    "kind": "line",
    "text": "先不抢话，您刚才那一步我还要问。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N29-r0022-reply2"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0022-reply2",
    "kind": "line",
    "text": "把问题说出来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N29-r0023"
  },
  {
    "id": "N29-r0023",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "speaker": "旁白",
    "text": "持持上黑板想显身手，又加C++。瑕疵越露越多，台下笑声还没结束。",
    "character": "",
    "next": "N29-r0024"
  },
  {
    "id": "N29-r0024",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "球框与代码",
    "background": "classroom",
    "speaker": "周远持",
    "text": "又是2B。",
    "character": "c09",
    "next": "N29-r0025"
  },
  {
    "id": "N29-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "text": "飞盘的创意",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N29-r0026"
  },
  {
    "id": "N29-r0026",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "戴同学飞盘的微写作，创意不错。",
    "character": "c46",
    "next": "interactive-N29-r0026"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0026",
    "kind": "choice",
    "text": "飞盘微写作被夸，我怎么回应？",
    "speaker": "周远持",
    "character": "c09",
    "options": [
      {
        "text": "创意先站住，后面的表达也得跟上。",
        "next": "interactive-N29-r0026-say1"
      },
      {
        "text": "我把您夸的是哪一处记下，不只记夸过。",
        "next": "interactive-N29-r0026-say2"
      },
      {
        "text": "创意够新，写得乱一点也没事吧。",
        "failure": "飞盘飞得很新，文字却没找好落点。"
      },
      {
        "text": "以后都写飞盘，题目换了也能用。",
        "failure": "旧飞盘又起飞，新的题目却没有接住它。"
      }
    ]
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0026-say1",
    "kind": "line",
    "text": "创意先站住，后面的表达也得跟上。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N29-r0026-reply1"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0026-reply1",
    "kind": "line",
    "text": "看怎么落到文字里。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "N29-r0027"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0026-say2",
    "kind": "line",
    "text": "我把您夸的是哪一处记下，不只记夸过。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N29-r0026-reply2"
  },
  {
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "page": 89,
    "pages": [
      89
    ],
    "source": "补写",
    "id": "interactive-N29-r0026-reply2",
    "kind": "line",
    "text": "别只盯那一个分。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "N29-r0027"
  },
  {
    "id": "N29-r0027",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "周远持",
    "text": "飞盘岂非狗之玩物？",
    "character": "c09",
    "next": "N29-r0028"
  },
  {
    "id": "N29-r0028",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师大骇。持持立即想把话拐走，归给家里别人说过。",
    "character": "",
    "next": "N29-r0029"
  },
  {
    "id": "N29-r0029",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "周远持",
    "text": "这是我家里的说法……",
    "character": "c09",
    "next": "N29-r0030"
  },
  {
    "id": "N29-r0030",
    "kind": "line",
    "source": "补写",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "你这个补充，来得晚了一点。",
    "character": "c05",
    "next": "N29-r0031"
  },
  {
    "id": "N29-r0031",
    "kind": "line",
    "source": "转述",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "飞盘的创意",
    "background": "classroom",
    "speaker": "旁白",
    "text": "球框到飞盘，一整天持持都没躲开自己先说出的那句话。",
    "character": "",
    "next": "N29-r0033"
  },
  {
    "id": "N29-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N29-r0034"
  },
  {
    "id": "N29-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N29-r0035"
  },
  {
    "id": "N29-r0035",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "持持误解球框题，能者笑其审题之心不细。持责问曰：“你在嘲个笑我么？”能者答曰：“然也。天下嘲笑旁人者何其多也，不言已矣。”余深以为然。",
    "character": "",
    "next": "N29-r0036"
  },
  {
    "id": "N29-r0036",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "持持解题于黑板上，欲炫其技，乃加之以C++云。然学术不精，瑕疵百出，为众生所嘲，实乃班门弄斧，贻笑大方之家，为后人作谈笑之资矣。",
    "character": "",
    "next": "N29-r0037"
  },
  {
    "id": "N29-r0037",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "能者大谈求神拜佛之法于班中，吾等无神论者不知若何云。",
    "character": "",
    "next": "N29-r0038"
  },
  {
    "id": "N29-r0038",
    "kind": "line",
    "source": "原文",
    "page": 89,
    "pages": [
      89
    ],
    "day": "N29",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "持持公示其答案于众，曰“又是2B”。",
    "character": "",
    "next": "N30-date"
  },
  {
    "id": "N30-date",
    "kind": "date",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-30",
    "text": "一百四十五的前夜",
    "pov": "c05",
    "character": "",
    "next": "N30-r0057"
  },
  {
    "id": "N30-r0057",
    "kind": "portrait",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "一百四十五的前夜",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "N30-r0027"
  },
  {
    "id": "N30-r0027",
    "kind": "scene",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "班史交到考试前",
    "background": "classroom",
    "text": "班史交到考试前",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N30-r0028"
  },
  {
    "id": "N30-r0028",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "班史交到考试前",
    "background": "classroom",
    "speaker": "HQ",
    "text": "我看你每回大考，大喜、哀号，情绪像云霄飞车。这个也可以记下来。",
    "character": "c45",
    "next": "N30-r0029"
  },
  {
    "id": "N30-r0029",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "班史交到考试前",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "只记趣事吗？怕还有哀事、异事。",
    "character": "c05",
    "next": "N30-r0030"
  },
  {
    "id": "N30-r0030",
    "kind": "line",
    "source": "转述",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "班史交到考试前",
    "background": "classroom",
    "speaker": "旁白",
    "text": "布置考场时，老师把班史交来。沛接下考前数日，先记卷子还没发的这一天。",
    "character": "",
    "next": "N30-r0031"
  },
  {
    "id": "N30-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "完形十错四",
    "background": "classroom",
    "text": "完形十错四",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N30-r0032"
  },
  {
    "id": "N30-r0032",
    "kind": "line",
    "source": "转述",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "完形十错四",
    "background": "classroom",
    "speaker": "旁白",
    "text": "有人做往年的英语卷来提振信心，完形先错十道里的四道，信心反而落下去。",
    "character": "",
    "next": "N30-r0033"
  },
  {
    "id": "N30-r0033",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "完形十错四",
    "background": "classroom",
    "speaker": "同学",
    "text": "杨sir说，这里不错、那里不错，一百四十五就唾手可得。",
    "character": "",
    "next": "N30-r0034"
  },
  {
    "id": "N30-r0034",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "完形十错四",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "这回倒显得一百四十五特别容易，可我还在看错的那四道。",
    "character": "c05",
    "next": "N30-r0035"
  },
  {
    "id": "N30-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "text": "医生与老师",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N30-r0036"
  },
  {
    "id": "N30-r0036",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "学医要七八年，如今又卷，名校毕业、学精了才有机会去好医院继续。每天还得和病人谈，精神上也可能被影响。",
    "character": "c05",
    "next": "N30-r0037"
  },
  {
    "id": "N30-r0037",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "speaker": "周远持",
    "text": "照你这么说，HQ和我们，跟医患关系有什么区别？",
    "character": "c09",
    "next": "interactive-N30-r0037"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0037",
    "kind": "choice",
    "text": "持持把医患关系和课堂相比，我怎么接？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "这个比喻先听完，医生那份责任也不能只说一半。",
        "next": "interactive-N30-r0037-say1"
      },
      {
        "text": "你说的是彼此要配合吧，别只剩谁怪谁。",
        "next": "interactive-N30-r0037-say2"
      },
      {
        "text": "只要付出了，结果不好就全是对方的问题。",
        "failure": "责任被推得很远，比喻却少了一边。"
      },
      {
        "text": "既然像医患，我们都不用做题了。",
        "failure": "比喻刚到教室，题目却被借机送出了门。"
      }
    ]
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0037-say1",
    "kind": "line",
    "text": "这个比喻先听完，医生那份责任也不能只说一半。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N30-r0037-reply1"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0037-reply1",
    "kind": "line",
    "text": "我就问这层。",
    "speaker": "周远持",
    "character": "c09",
    "next": "N30-r0038"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0037-say2",
    "kind": "line",
    "text": "你说的是彼此要配合吧，别只剩谁怪谁。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N30-r0037-reply2"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0037-reply2",
    "kind": "line",
    "text": "得把两边都放进去。",
    "speaker": "周远持",
    "character": "c09",
    "next": "N30-r0038"
  },
  {
    "id": "N30-r0038",
    "kind": "line",
    "source": "转述",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "医生与老师",
    "background": "classroom",
    "speaker": "旁白",
    "text": "众人笑而不语。玩笑之外，救死扶伤仍让人敬重，沛把这层也记进页里。",
    "character": "",
    "next": "N30-r0039"
  },
  {
    "id": "N30-r0039",
    "kind": "scene",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "text": "压轴不是重灾区",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N30-r0040"
  },
  {
    "id": "N30-r0040",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "老师，再看一下这道压轴。",
    "character": "c05",
    "next": "N30-r0041"
  },
  {
    "id": "N30-r0041",
    "kind": "line",
    "source": "转述",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ答完，看过他的卷子，又笑了。",
    "character": "",
    "next": "N30-r0042"
  },
  {
    "id": "N30-r0042",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "speaker": "HQ",
    "text": "这题不过如此。你的重灾区在这里吗？简单的题先做到迅而稳。",
    "character": "c45",
    "next": "N30-r0043"
  },
  {
    "id": "N30-r0043",
    "kind": "line",
    "source": "补写",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "先把容易错的守住，不光盯压轴。",
    "character": "c05",
    "next": "interactive-N30-r0043"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0043",
    "kind": "choice",
    "text": "考前都盯压轴，我怎样提醒自己？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先看容易丢的那几处，压轴也不能挤掉基础。",
        "next": "interactive-N30-r0043-say1"
      },
      {
        "text": "把会的写稳，难的留足时间再碰。",
        "next": "interactive-N30-r0043-say2"
      },
      {
        "text": "压轴拿下就够，前面小题先随意写。",
        "failure": "压轴领到了耐心，小题却领到了新的红叉。"
      },
      {
        "text": "不会的全部背结论，过程等考场发挥。",
        "failure": "结论背得很响，考场却等来一张缺路的草稿。"
      }
    ]
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0043-say1",
    "kind": "line",
    "text": "先看容易丢的那几处，压轴也不能挤掉基础。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N30-r0043-reply1"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0043-reply1",
    "kind": "line",
    "text": "卷子从第一处遗漏重新展开。",
    "speaker": "旁白",
    "character": "",
    "next": "N30-r0044"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0043-say2",
    "kind": "line",
    "text": "把会的写稳，难的留足时间再碰。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N30-r0043-reply2"
  },
  {
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "page": 90,
    "pages": [
      90
    ],
    "source": "补写",
    "id": "interactive-N30-r0043-reply2",
    "kind": "line",
    "text": "前后两头各找到了位置。",
    "speaker": "旁白",
    "character": "",
    "next": "N30-r0044"
  },
  {
    "id": "N30-r0044",
    "kind": "line",
    "source": "转述",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "压轴不是重灾区",
    "background": "classroom",
    "speaker": "旁白",
    "text": "复习方法和睡眠也要准备，文具收好。明天的“唾手可得”，得等明天那张卷检验。",
    "character": "",
    "next": "N30-r0045"
  },
  {
    "id": "N30-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N30-r0046"
  },
  {
    "id": "N30-r0046",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "原页日期：10.30。",
    "character": "",
    "next": "N30-r0047"
  },
  {
    "id": "N30-r0047",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "期中前数日，置考场之时，HQ谓余曰：“吾观汝向之大试，或大喜伴其间，或哀号随其中，情志之变，迅而疾，多而杂，如云霄飞车，观之令人生趣也。汝可记之。”乃授班史于吾。",
    "character": "",
    "next": "N30-r0048"
  },
  {
    "id": "N30-r0048",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "余故为此数日之史官，录大试之趣事也。",
    "character": "",
    "next": "N30-r0049"
  },
  {
    "id": "N30-r0049",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "有生习于往年之英语卷，欲以提振信心。然于完形，即已十者失四，哀恸甚矣。众生论此文之异，又有人论及华子之语：“无误于此，无误于彼，如此这般，则一百四十有五，唾手可得矣。",
    "character": "",
    "next": "N30-r0050"
  },
  {
    "id": "N30-r0050",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”众人哂之，感于得一百四十五于英语实为易之甚也。",
    "character": "",
    "next": "N30-r0051"
  },
  {
    "id": "N30-r0051",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "众人于复习之余议诸职业。沛霖曰：“余甚不可解其欲为医者也。学于校，七、八年方止。如今也卷之甚，非学精于名校毕业者不得宅于著名医馆而得续进也。",
    "character": "",
    "next": "N30-r0052"
  },
  {
    "id": "N30-r0052",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "更可愁之处，则以为每日与谈者，多为病者，其精神亦病而有异也①。”持持曰：“依此言，则HQ与诸生，其与医患之关系，有何异哉？”众人笑而不语。",
    "character": "",
    "next": "N30-r0053"
  },
  {
    "id": "N30-r0053",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "①原话为：每天都跟一帮＊＊说话，病了精神上估计也不太正常。",
    "character": "",
    "next": "N30-r0054"
  },
  {
    "id": "N30-r0054",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（然欲为医者，救死扶伤，实真令人敬也。）",
    "character": "",
    "next": "N30-r0055"
  },
  {
    "id": "N30-r0055",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "考前，余咨HQ以压轴之问。答毕，HQ笑曰：“此题不过如此耳，然观汝之卷，重灾之问，岂出于此乎？迅而稳，得之答，完满于中，易之问复为第一要务也。”余深以为然。",
    "character": "",
    "next": "N30-r0056"
  },
  {
    "id": "N30-r0056",
    "kind": "line",
    "source": "原文",
    "page": 90,
    "pages": [
      90
    ],
    "day": "N30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "考前，通习以得之途，早憩以致盈满之眠，则次日之战，方可如华子所言，无往不利如唾手耳！",
    "character": "",
    "next": "D23-date"
  },
  {
    "id": "D23-date",
    "kind": "date",
    "source": "演出",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-31",
    "text": "期中首日",
    "pov": "c05",
    "character": "",
    "next": "D23-r0022"
  },
  {
    "id": "D23-r0022",
    "kind": "portrait",
    "source": "演出",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "期中首日",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "D23-0005"
  },
  {
    "id": "D23-0005",
    "kind": "scene",
    "source": "演出",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "text": "期中首日",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D23-0006"
  },
  {
    "id": "D23-0006",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "稳了！稳了！……选项一出来，好像没那么稳。",
    "character": "c05",
    "next": "interactive-D23-0006"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0006",
    "kind": "choice",
    "text": "喊稳了之后又觉得不稳，我怎么接？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先别续喊，考完回去把没把握的列出来。",
        "next": "interactive-D23-0006-say1"
      },
      {
        "text": "刚才选得急，这回先承认不确定。",
        "next": "interactive-D23-0006-say2"
      },
      {
        "text": "喊得稳一点就能放心，不看疑点了。",
        "failure": "声音更稳了，那道题却没跟着站稳。"
      },
      {
        "text": "别人都说稳，我把自己的疑问划掉吧。",
        "failure": "别人的把握借来了，自己的问题却借丢了。"
      }
    ]
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0006-say1",
    "kind": "line",
    "text": "先别续喊，考完回去把没把握的列出来。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D23-0006-reply1"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0006-reply1",
    "kind": "line",
    "text": "口号停下来，疑点才有了位置。",
    "speaker": "旁白",
    "character": "",
    "next": "D23-0007"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0006-say2",
    "kind": "line",
    "text": "刚才选得急，这回先承认不确定。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D23-0006-reply2"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0006-reply2",
    "kind": "line",
    "text": "不确定没被庆功话盖住。",
    "speaker": "旁白",
    "character": "",
    "next": "D23-0007"
  },
  {
    "id": "D23-0007",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "同学",
    "text": "自信如曹子桓，结果又想起江东徐盛。",
    "character": "",
    "next": "D23-0008"
  },
  {
    "id": "D23-0008",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "物理从实验到后面大题，时间越来越紧。送分没接住，险些送命。",
    "character": "c05",
    "next": "D23-0009"
  },
  {
    "id": "D23-0009",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "这次我语文一百三，数学一百四十五，英语一百四十五……全市状元。",
    "character": "c03",
    "next": "interactive-D23-0009"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0009",
    "kind": "choice",
    "text": "满者开始报状元分数，我怎么回应？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先留着这声豪言，真分数出来再接。",
        "next": "interactive-D23-0009-say1"
      },
      {
        "text": "你报得挺齐，卷子可还在老师那儿呢。",
        "next": "interactive-D23-0009-say2"
      },
      {
        "text": "我就照这几个数当成绩写下。",
        "failure": "豪言领了成绩单，阅卷却还没领完卷子。"
      },
      {
        "text": "既然你算好了，后面几科先不用准备。",
        "failure": "预计分数提前毕业，下一科却照常开考。"
      }
    ]
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0009-say1",
    "kind": "line",
    "text": "先留着这声豪言，真分数出来再接。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D23-0009-reply1"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0009-reply1",
    "kind": "line",
    "text": "现在先听这个版本。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D23-r0010"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0009-say2",
    "kind": "line",
    "text": "你报得挺齐，卷子可还在老师那儿呢。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D23-0009-reply2"
  },
  {
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "page": 91,
    "pages": [
      91
    ],
    "source": "补写",
    "id": "interactive-D23-0009-reply2",
    "kind": "line",
    "text": "这还不能想想。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D23-r0010"
  },
  {
    "id": "D23-r0010",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "卷子还在老师手里，你倒先把全市状元领了。",
    "character": "c05",
    "next": "D23-r0011"
  },
  {
    "id": "D23-r0011",
    "kind": "choice",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "text": "考完后，我怎样和同学说",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "“先喘口气，刚才那几道我还真得回去看看。”",
        "next": "D23-r0012"
      },
      {
        "text": "“今天先吃饭，等分出来再看哪里错了。”",
        "next": "D23-r0014"
      },
      {
        "text": "先拿同学的估分当最后结果，今天就安心了。",
        "failure": "安心先领到分数，试卷却还在去阅卷的路上。"
      }
    ]
  },
  {
    "id": "D23-r0012",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "text": "“先喘口气，刚才那几道我还真得回去看看。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D23-r0013"
  },
  {
    "id": "D23-r0013",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "我也有几道没把握。",
    "character": "lei",
    "next": "D23-r0016"
  },
  {
    "id": "D23-r0014",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "text": "“今天先吃饭，等分出来再看哪里错了。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D23-r0015"
  },
  {
    "id": "D23-r0015",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "先走，食堂要排队了。",
    "character": "lei",
    "next": "D23-r0016"
  },
  {
    "id": "D23-r0016",
    "kind": "line",
    "source": "补写",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "期中首日",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "语文物理先考完了，回去还得接着准备后面的。",
    "character": "c05",
    "next": "D23-r0023"
  },
  {
    "id": "D23-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D23-r0024"
  },
  {
    "id": "D23-r0024",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物理试毕，叹万物之理难求者更蕃。此卷自始即困影重重，至实验似有回转之意。然视大题，自第三题始，新意即出，至万有引力，意以为送分，终几至于送命也；再至于流体，“微重力”之类时间已殆尽。",
    "character": "",
    "next": "D23-r0025"
  },
  {
    "id": "D23-r0025",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "呜呼哀哉！",
    "character": "",
    "next": "D23-r0026"
  },
  {
    "id": "D23-r0026",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这次徐子涵：",
    "character": "",
    "next": "D23-r0027"
  },
  {
    "id": "D23-r0027",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语文130+／数学145+／英语145+／物理94／化学100／历史100。",
    "character": "",
    "next": "D23-r0028"
  },
  {
    "id": "D23-r0028",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总分720分，全市状元。",
    "character": "",
    "next": "D23-r0029"
  },
  {
    "id": "D23-r0029",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "史官曰：是。（李昊宇表情包）",
    "character": "",
    "next": "D23-r0019"
  },
  {
    "id": "D23-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "回忆 · 日志补记",
    "period": "补记的前因",
    "background": "classroom",
    "text": "补记的前因",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D23-r0020"
  },
  {
    "id": "D23-r0020",
    "kind": "line",
    "source": "原文",
    "page": 91,
    "pages": [
      91
    ],
    "day": "D23",
    "context": "回忆 · 日志补记",
    "period": "补记的前因",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "补录：是夜，语文答案已出，而吾求之不得。尝求于雷子，未得之。余恳请再三，呼以“我↗要↘答↗案↗”，三番五次，雷子终不胜其烦，退而予余之。",
    "character": "",
    "next": "N31-date"
  },
  {
    "id": "N31-date",
    "kind": "date",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-01",
    "text": "九十五与九十之初",
    "pov": "c05",
    "character": "",
    "next": "N31-r0033"
  },
  {
    "id": "N31-r0033",
    "kind": "portrait",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "九十五与九十之初",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "N31-r0016"
  },
  {
    "id": "N31-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "text": "数学试毕",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N31-r0017"
  },
  {
    "id": "N31-r0017",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "speaker": "旁白",
    "text": "数学考完，三角和导数的失分把心往下拽。回想数理语文，再看还没考的化学，焦虑又加一层。",
    "character": "",
    "next": "N31-r0018"
  },
  {
    "id": "N31-r0018",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "这次只能在化学复生了。",
    "character": "c05",
    "next": "interactive-N31-r0018"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0018",
    "kind": "choice",
    "text": "数学之后只盼化学复生，我怎么说？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先把这一科留在纸边，下一场还得重新看题。",
        "next": "interactive-N31-r0018-say1"
      },
      {
        "text": "能丢的先别带进去，化学一题题来。",
        "next": "interactive-N31-r0018-say2"
      },
      {
        "text": "化学肯定能救回来，今天就靠运气。",
        "failure": "希望到了考场，审题却被留在门外。"
      },
      {
        "text": "数学已经这样了，后面的准备也不用管。",
        "failure": "一场的失落带走了另一场的开始。"
      }
    ]
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0018-say1",
    "kind": "line",
    "text": "先把这一科留在纸边，下一场还得重新看题。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N31-r0018-reply1"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0018-reply1",
    "kind": "line",
    "text": "上一科的情绪没有替下一科答题。",
    "speaker": "旁白",
    "character": "",
    "next": "N31-r0019"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0018-say2",
    "kind": "line",
    "text": "能丢的先别带进去，化学一题题来。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N31-r0018-reply2"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0018-reply2",
    "kind": "line",
    "text": "心里的那一声终于给题目让开了路。",
    "speaker": "旁白",
    "character": "",
    "next": "N31-r0019"
  },
  {
    "id": "N31-r0019",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "数学试毕",
    "background": "classroom",
    "speaker": "旁白",
    "text": "持持、萌童等人还在谈末尾几问，听不明白的人更想换个话题。",
    "character": "",
    "next": "N31-r0020"
  },
  {
    "id": "N31-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "text": "化学出来",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N31-r0021"
  },
  {
    "id": "N31-r0021",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "speaker": "李沛霖",
    "text": "终于像一份正常的命题了。",
    "character": "c05",
    "next": "N31-r0022"
  },
  {
    "id": "N31-r0022",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "speaker": "同学",
    "text": "你估多少？",
    "character": "",
    "next": "N31-r0023"
  },
  {
    "id": "N31-r0023",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "speaker": "李沛霖",
    "text": "先别急，等答案。",
    "character": "c05",
    "next": "interactive-N31-r0023"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0023",
    "kind": "choice",
    "text": "大家抢着对答案，我怎样缓一下？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先别拿一个人的版本下结论，等核清。",
        "next": "interactive-N31-r0023-say1"
      },
      {
        "text": "记得不一样的先圈上，别越说越确定。",
        "next": "interactive-N31-r0023-say2"
      },
      {
        "text": "声音最大那个先算准，省时间。",
        "failure": "讨论有了领头人，答案却没有证据。"
      },
      {
        "text": "先把所有疑题算错，心里才稳。",
        "failure": "分数先被扣完，真正的答案还没到场。"
      }
    ]
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0023-say1",
    "kind": "line",
    "text": "先别拿一个人的版本下结论，等核清。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N31-r0023-reply1"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0023-reply1",
    "kind": "line",
    "text": "几份答案终于停下来对照。",
    "speaker": "旁白",
    "character": "",
    "next": "N31-r0024"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0023-say2",
    "kind": "line",
    "text": "记得不一样的先圈上，别越说越确定。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N31-r0023-reply2"
  },
  {
    "day": "N31",
    "context": "现实",
    "period": "化学出来",
    "background": "corridor",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N31-r0023-reply2",
    "kind": "line",
    "text": "分歧有了标记，没冒充结果。",
    "speaker": "旁白",
    "character": "",
    "next": "N31-r0024"
  },
  {
    "id": "N31-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "此后 · 期中答案公布",
    "period": "后来核答案",
    "background": "classroom",
    "text": "后来核答案",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N31-r0025"
  },
  {
    "id": "N31-r0025",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "此后 · 期中答案公布",
    "period": "后来核答案",
    "background": "classroom",
    "speaker": "旁白",
    "text": "史官回看答案，曾觉得九十五以上唾手可得，真正数字却只到九十之初。",
    "character": "",
    "next": "N31-r0026"
  },
  {
    "id": "N31-r0026",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "此后 · 期中答案公布",
    "period": "后来核答案",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "当时那只手，还是伸远了。",
    "character": "c05",
    "next": "N31-r0027"
  },
  {
    "id": "N31-r0027",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "此后 · 期中答案公布",
    "period": "后来核答案",
    "background": "classroom",
    "speaker": "旁白",
    "text": "“大悲”两个字补在纸上，和出考场时那句庆幸挨在一起。",
    "character": "",
    "next": "N31-r0029"
  },
  {
    "id": "N31-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N31-r0030"
  },
  {
    "id": "N31-r0030",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "11.1 期中次日",
    "character": "",
    "next": "N31-r0031"
  },
  {
    "id": "N31-r0031",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数学试毕，笔者大叹，三角导数尽失，悲痛欲绝，将呼天抢地之时，回观数、理及语文之困，略作估量，更感化学之将亡。又闻持持、萌童等人似胸有成竹议末者数问，吾更不知其所云，只可复生于化学。",
    "character": "",
    "next": "N31-r0032"
  },
  {
    "id": "N31-r0032",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化学试毕，方感此为本大试间唯一正常之命题人也。",
    "character": "",
    "next": "N31-r0006"
  },
  {
    "id": "N31-r0006",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "回忆 · 日志补记",
    "period": "补记的前因",
    "background": "classroom",
    "text": "补记的前因",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "N31-r0007"
  },
  {
    "id": "N31-r0007",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N31",
    "context": "回忆 · 日志补记",
    "period": "补记的前因",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "补录：余观其答案，自觉九十又五以上，唾手可得也，然止于九十之初，大悲。",
    "character": "",
    "next": "N32-date"
  }
];
export default data;
