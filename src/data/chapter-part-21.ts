import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N33-r0038",
    "kind": "line",
    "source": "补写",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "speaker": "彭逸涵",
    "text": "字还没写到哪里，桶倒先不见了。",
    "character": "c12",
    "next": "interactive-N33-r0038"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0038",
    "kind": "choice",
    "text": "垃圾桶没了，我怎么接？",
    "speaker": "彭逸涵",
    "character": "c12",
    "options": [
      {
        "text": "先把这一处记下，别把废纸留在桌边。",
        "next": "interactive-N33-r0038-say1"
      },
      {
        "text": "问问移到了哪儿，没看见不等于真没了。",
        "next": "interactive-N33-r0038-say2"
      },
      {
        "text": "先照讣告写，肯定永远不会回来了。",
        "failure": "桶还没回班，结局已替它办完了手续。"
      },
      {
        "text": "东西没了就随手放地上吧。",
        "failure": "垃圾桶少了一只，脚边却多了一圈纸。"
      }
    ]
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0038-say1",
    "kind": "line",
    "text": "先把这一处记下，别把废纸留在桌边。",
    "speaker": "彭逸涵",
    "character": "c12",
    "next": "interactive-N33-r0038-reply1"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0038-reply1",
    "kind": "line",
    "text": "空位有了记录，纸也找到了该去的地方。",
    "speaker": "旁白",
    "character": "",
    "next": "N33-r0039"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0038-say2",
    "kind": "line",
    "text": "问问移到了哪儿，没看见不等于真没了。",
    "speaker": "彭逸涵",
    "character": "c12",
    "next": "interactive-N33-r0038-reply2"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0038-reply2",
    "kind": "line",
    "text": "缺席没有立刻变成结论。",
    "speaker": "旁白",
    "character": "",
    "next": "N33-r0039"
  },
  {
    "id": "N33-r0039",
    "kind": "line",
    "source": "转述",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物赶进度，拖过三分钟才看表，骤然结束。",
    "character": "",
    "next": "N33-r0040"
  },
  {
    "id": "N33-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "text": "午间大兴土木",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N33-r0041"
  },
  {
    "id": "N33-r0041",
    "kind": "line",
    "source": "转述",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "speaker": "旁白",
    "text": "拇指琴像八音盒启动，手卷钢琴又解锁音色。几件乐器接起，片段式记录忽然有了连续的声音。",
    "character": "",
    "next": "N33-r0042"
  },
  {
    "id": "N33-r0042",
    "kind": "line",
    "source": "补写",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "speaker": "彭逸涵",
    "text": "离丝竹之盛还远，金石铮铮倒有些了。",
    "character": "c12",
    "next": "interactive-N33-r0042"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0042",
    "kind": "choice",
    "text": "乐器还凑不成丝竹之盛，我怎么回应？",
    "speaker": "彭逸涵",
    "character": "c12",
    "options": [
      {
        "text": "先听现在这几件，没齐也有今天的声响。",
        "next": "interactive-N33-r0042-say1"
      },
      {
        "text": "哪件已经有了，哪件还在等，分开记。",
        "next": "interactive-N33-r0042-say2"
      },
      {
        "text": "既然还不够多，今天先当没组起来。",
        "failure": "乐器已经响了，记录却没有给它开门。"
      },
      {
        "text": "先报齐名字，缺的以后再找。",
        "failure": "名单站得很满，耳朵却只听见其中几件。"
      }
    ]
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0042-say1",
    "kind": "line",
    "text": "先听现在这几件，没齐也有今天的声响。",
    "speaker": "彭逸涵",
    "character": "c12",
    "next": "interactive-N33-r0042-reply1"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0042-reply1",
    "kind": "line",
    "text": "零散的声音终于有了自己的位置。",
    "speaker": "旁白",
    "character": "",
    "next": "N33-r0043"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0042-say2",
    "kind": "line",
    "text": "哪件已经有了，哪件还在等，分开记。",
    "speaker": "彭逸涵",
    "character": "c12",
    "next": "interactive-N33-r0042-reply2"
  },
  {
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "source": "补写",
    "id": "interactive-N33-r0042-reply2",
    "kind": "line",
    "text": "乐队没有被一个总称盖住。",
    "speaker": "旁白",
    "character": "",
    "next": "N33-r0043"
  },
  {
    "id": "N33-r0043",
    "kind": "line",
    "source": "补写",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "speaker": "同学",
    "text": "从哪个音再进？",
    "character": "",
    "next": "N33-r0044"
  },
  {
    "id": "N33-r0044",
    "kind": "line",
    "source": "转述",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "午间大兴土木",
    "background": "rear",
    "speaker": "旁白",
    "text": "纸页上几个断续短语，还没把声音写全。琴声接起来，那一点雅兴倒真留住了。",
    "character": "",
    "next": "N33-r0046"
  },
  {
    "id": "N33-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N33-r0047"
  },
  {
    "id": "N33-r0047",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "气温再创新低。",
    "character": "",
    "next": "N33-r0048"
  },
  {
    "id": "N33-r0048",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "一似暑气方尽，旋及零下。",
    "character": "",
    "next": "N33-r0049"
  },
  {
    "id": "N33-r0049",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "//早操初废，考后语文贯连。",
    "character": "",
    "next": "N33-r0050"
  },
  {
    "id": "N33-r0050",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "我所思，乃在大海南。",
    "character": "",
    "next": "N33-r0051"
  },
  {
    "id": "N33-r0051",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "我所忆，乃在渭水畔。",
    "character": "",
    "next": "N33-r0052"
  },
  {
    "id": "N33-r0052",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "……拉杂摧烧之！",
    "character": "",
    "next": "N33-r0053"
  },
  {
    "id": "N33-r0053",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "//七选立·阅表讲解，英语连堂并占。",
    "character": "",
    "next": "N33-r0054"
  },
  {
    "id": "N33-r0054",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "环境抽象，评析难寐，不愧年级（全区）二三。",
    "character": "",
    "next": "N33-r0055"
  },
  {
    "id": "N33-r0055",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Ysir不解东洋语，满满播音似娇笑……再播……",
    "character": "",
    "next": "N33-r0056"
  },
  {
    "id": "N33-r0056",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "//手卷钢琴，呷麦门吸高纯，12嗨特长生挖学舞蹈记。",
    "character": "",
    "next": "N33-r0057"
  },
  {
    "id": "N33-r0057",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "//来电出漏寝宾馆，警贼分道二十年……意识……",
    "character": "",
    "next": "N33-r0058"
  },
  {
    "id": "N33-r0058",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "信仰……？……价值观……机械飞升。",
    "character": "",
    "next": "N33-r0059"
  },
  {
    "id": "N33-r0059",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "哀……上课睡觉……包容包容，批判批判。",
    "character": "",
    "next": "N33-r0060"
  },
  {
    "id": "N33-r0060",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "……哲学家（dawlike）……嗯……嗯人生是单行道（dalawtike）。",
    "character": "",
    "next": "N33-r0061"
  },
  {
    "id": "N33-r0061",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "空空道人……勇于舍弃。轨道……旷野……密林。",
    "character": "",
    "next": "N33-r0062"
  },
  {
    "id": "N33-r0062",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "朱考儒建国啦！……",
    "character": "",
    "next": "N33-r0063"
  },
  {
    "id": "N33-r0063",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "//你不是东西……不是东西的物质是什么东西。",
    "character": "",
    "next": "N33-r0064"
  },
  {
    "id": "N33-r0064",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "特辟此一栏，以为悦心耳（music／amusements）事。",
    "character": "",
    "next": "N33-r0065"
  },
  {
    "id": "N33-r0065",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "当拇指琴启动八音盒，神气俱爽。",
    "character": "",
    "next": "N33-r0066"
  },
  {
    "id": "N33-r0066",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "当JoJo预备演唱会，面意漫卷（面意无面）。",
    "character": "",
    "next": "N33-r0067"
  },
  {
    "id": "N33-r0067",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "当HandRoll解锁新音色，簧管继鸣……梅西安狂喜。",
    "character": "",
    "next": "N33-r0068"
  },
  {
    "id": "N33-r0068",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "深信此中虽尚未臻丝竹之盛，而已将金石铮铮之致。是皆可书，故并记之，以诒来者！",
    "character": "",
    "next": "N33-r0069"
  },
  {
    "id": "N33-r0069",
    "kind": "line",
    "source": "原文",
    "page": 95,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "以下非史也，应有助益于来日之。",
    "character": "",
    "next": "N34-date"
  },
  {
    "id": "N34-date",
    "kind": "date",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-08",
    "text": "有的放矢",
    "pov": "c40",
    "character": "",
    "next": "N34-r0054"
  },
  {
    "id": "N34-r0054",
    "kind": "portrait",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "有的放矢",
    "pov": "c40",
    "character": "c40",
    "speaker": "杨京赫",
    "next": "N34-r0020"
  },
  {
    "id": "N34-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "text": "一百万给谁",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0021"
  },
  {
    "id": "N34-r0021",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "speaker": "HQ",
    "text": "同样一百万，给马云，财产基本不变；给常人，变化可大。",
    "character": "c45",
    "next": "interactive-N34-r0021"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0021",
    "kind": "choice",
    "text": "一百万放在不同人身上，我怎么接？",
    "speaker": "杨京赫",
    "character": "c40",
    "options": [
      {
        "text": "同一个数，得看原来有多少。",
        "next": "interactive-N34-r0021-say1"
      },
      {
        "text": "不能只看钱一样，变化的比例还不同。",
        "next": "interactive-N34-r0021-say2"
      },
      {
        "text": "一百万都一样大，差别就不必看。",
        "failure": "金额一模一样，变化却被一句话抹平。"
      },
      {
        "text": "先只挑最富的人算，其他都可以略。",
        "failure": "例子看完了一边，对照却没找到另一端。"
      }
    ]
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0021-say1",
    "kind": "line",
    "text": "同一个数，得看原来有多少。",
    "speaker": "杨京赫",
    "character": "c40",
    "next": "interactive-N34-r0021-reply1"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0021-reply1",
    "kind": "line",
    "text": "先看原来的量。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N34-r0022"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0021-say2",
    "kind": "line",
    "text": "不能只看钱一样，变化的比例还不同。",
    "speaker": "杨京赫",
    "character": "c40",
    "next": "interactive-N34-r0021-reply2"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0021-reply2",
    "kind": "line",
    "text": "这就是要比较的。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N34-r0022"
  },
  {
    "id": "N34-r0022",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "一百万。",
    "character": "c03",
    "next": "N34-r0023"
  },
  {
    "id": "N34-r0023",
    "kind": "line",
    "source": "转述",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "一百万给谁",
    "background": "classroom",
    "speaker": "旁白",
    "text": "点电荷与大地电量的比喻，数字被满者念得格外清楚。",
    "character": "",
    "next": "N34-r0024"
  },
  {
    "id": "N34-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "text": "顶芽优势",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0025"
  },
  {
    "id": "N34-r0025",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "speaker": "雷老师",
    "text": "平均水平高，但缺拔尖。",
    "character": "c49",
    "next": "N34-r0026"
  },
  {
    "id": "N34-r0026",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "顶芽优势抑制侧芽生长，去掉顶芽，侧芽才茂盛。",
    "character": "c07",
    "next": "interactive-N34-r0026"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0026",
    "kind": "choice",
    "text": "顶芽侧芽的解释出来，我怎么接？",
    "speaker": "杨京赫",
    "character": "c40",
    "options": [
      {
        "text": "先把抑制这层记上，不只是剪掉就长。",
        "next": "interactive-N34-r0026-say1"
      },
      {
        "text": "这句好记，我再核课本那个条件。",
        "next": "interactive-N34-r0026-say2"
      },
      {
        "text": "见到芽都去掉，侧面自然就旺。",
        "failure": "剪刀走得很快，条件却没来得及拦住。"
      },
      {
        "text": "只背“去掉就茂盛”，原因先不管。",
        "failure": "结论背熟了，换张图却找不到该去的那个芽。"
      }
    ]
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0026-say1",
    "kind": "line",
    "text": "先把抑制这层记上，不只是剪掉就长。",
    "speaker": "杨京赫",
    "character": "c40",
    "next": "interactive-N34-r0026-reply1"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0026-reply1",
    "kind": "line",
    "text": "关系得接着看。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N34-r0027"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0026-say2",
    "kind": "line",
    "text": "这句好记，我再核课本那个条件。",
    "speaker": "杨京赫",
    "character": "c40",
    "next": "interactive-N34-r0026-reply2"
  },
  {
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "page": 96,
    "pages": [
      96
    ],
    "source": "补写",
    "id": "interactive-N34-r0026-reply2",
    "kind": "line",
    "text": "对着图看。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N34-r0027"
  },
  {
    "id": "N34-r0027",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "顶芽优势",
    "background": "classroom",
    "speaker": "杨京赫",
    "text": "平均分，也被接成一道生物题。",
    "character": "c40",
    "next": "N34-r0028"
  },
  {
    "id": "N34-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "text": "矢的重音",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0029"
  },
  {
    "id": "N34-r0029",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "战老师",
    "text": "知识点熟记，才能有的放——矢。",
    "character": "c48",
    "next": "N34-r0030"
  },
  {
    "id": "N34-r0030",
    "kind": "line",
    "source": "转述",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一个字重读三次，尾音还拖了两秒。大哥又说从博士那里取得两升可乐。",
    "character": "",
    "next": "N34-r0031"
  },
  {
    "id": "N34-r0031",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "老师也给同学些便利？",
    "character": "c07",
    "next": "N34-r0032"
  },
  {
    "id": "N34-r0032",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "战老师",
    "text": "矢。",
    "character": "c48",
    "next": "N34-r0033"
  },
  {
    "id": "N34-r0033",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "同学",
    "text": "那可乐里有什么？",
    "character": "",
    "next": "N34-r0034"
  },
  {
    "id": "N34-r0034",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "矢的重音",
    "background": "classroom",
    "speaker": "战老师",
    "text": "别乱说药，就矢。",
    "character": "c48",
    "next": "N34-r0035"
  },
  {
    "id": "N34-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "避短扬长",
    "background": "classroom",
    "text": "避短扬长",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0036"
  },
  {
    "id": "N34-r0036",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "避短扬长",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "一百二十分以上太少了。",
    "character": "c46",
    "next": "N34-r0037"
  },
  {
    "id": "N34-r0037",
    "kind": "line",
    "source": "补写",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "避短扬长",
    "background": "classroom",
    "speaker": "同学",
    "text": "一百一到一百二这一段，平均领先。",
    "character": "",
    "next": "N34-r0038"
  },
  {
    "id": "N34-r0038",
    "kind": "line",
    "source": "转述",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "避短扬长",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师换个比方说“吾子胜于汝子”，对方却拿“吾父胜于汝父”接。满分作文随后展示，班乐在课间照常响。",
    "character": "",
    "next": "N34-r0040"
  },
  {
    "id": "N34-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0041"
  },
  {
    "id": "N34-r0041",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0042"
  },
  {
    "id": "N34-r0042",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ形容点电荷电量之微小，大地电量之无穷正如100万元（满者音）之于马云与常人：马云财产基本不变，而常人财产增加。同理，点电荷电量改变远易于大地电量改变，因此视大地为零势能面。",
    "character": "",
    "next": "N34-r0043"
  },
  {
    "id": "N34-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0044"
  },
  {
    "id": "N34-r0044",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "雷老师说我班平均水平较高，但缺乏拔尖者，大哥形容如同“顶芽优势抑制侧芽生长”，只有去除顶芽，侧芽才茂盛（多）。",
    "character": "",
    "next": "N34-r0045"
  },
  {
    "id": "N34-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0046"
  },
  {
    "id": "N34-r0046",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "委员长对某西城模拟题评价为用心险恶，称出题人“内心黑暗”。该题将本应视为不可逆的反应写为K值为10⁴⁰以上的伪可逆反应，干扰学生，着实用心险恶。",
    "character": "",
    "next": "N34-r0047"
  },
  {
    "id": "N34-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0048"
  },
  {
    "id": "N34-r0048",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "副标题——能者说矢。矢↘↗（持续2s）。",
    "character": "",
    "next": "N34-r0049"
  },
  {
    "id": "N34-r0049",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "能者说应将知识点熟记考试才能有的放矢——并将“矢”字重读×3次，似在谐音暗示别字。大哥说到从博士处取得2L可乐，能者也应向同学们惠以便利，能者以“矢”字评之，并将其划清界限。",
    "character": "",
    "next": "N34-r0050"
  },
  {
    "id": "N34-r0050",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "又有人说可乐中可能有博士下的药，能者表示否定，认为其中只有“矢”。",
    "character": "",
    "next": "N34-r0051"
  },
  {
    "id": "N34-r0051",
    "kind": "scene",
    "source": "演出",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N34-r0052"
  },
  {
    "id": "N34-r0052",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "杨sir说周六展示的漏洞百出作文可以得10分，因其内容完整。众人评其得分应为“矢”。另又欣赏冯巨、金巨的满分作文，着实优美。",
    "character": "",
    "next": "N34-r0053"
  },
  {
    "id": "N34-r0053",
    "kind": "line",
    "source": "原文",
    "page": 96,
    "pages": [
      96
    ],
    "day": "N34",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "另：班乐今日同样繁盛。",
    "character": "",
    "next": "N35-date"
  },
  {
    "id": "N35-date",
    "kind": "date",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-09",
    "text": "指挥之权",
    "pov": "c09",
    "character": "",
    "next": "N35-r0025"
  },
  {
    "id": "N35-r0025",
    "kind": "portrait",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "指挥之权",
    "pov": "c09",
    "character": "c09",
    "speaker": "周远持",
    "next": "N35-r0009"
  },
  {
    "id": "N35-r0009",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "text": "博士先讲到哪里",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N35-r0010"
  },
  {
    "id": "N35-r0010",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "speaker": "同学",
    "text": "博士已经讲立体几何了。",
    "character": "",
    "next": "N35-r0011"
  },
  {
    "id": "N35-r0011",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "speaker": "战老师",
    "text": "题我出。博士授什么，不是要事，指挥之权在我手里。",
    "character": "c48",
    "next": "interactive-N35-r0011"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0011",
    "kind": "choice",
    "text": "博士讲得靠前、老师掌握出题，我怎么问？",
    "speaker": "周远持",
    "character": "c09",
    "options": [
      {
        "text": "那我们先看掌握到哪一步，别只比进度。",
        "next": "interactive-N35-r0011-say1"
      },
      {
        "text": "内容听过了，还得回到您的题上试。",
        "next": "interactive-N35-r0011-say2"
      },
      {
        "text": "听得比别人早，考前就能少做几题。",
        "failure": "进度领先了，草稿却没跟上。"
      },
      {
        "text": "只猜您会出什么，别的基础先放下。",
        "failure": "猜题开了许多窗口，基础却没有一扇门。"
      }
    ]
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0011-say1",
    "kind": "line",
    "text": "那我们先看掌握到哪一步，别只比进度。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N35-r0011-reply1"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0011-reply1",
    "kind": "line",
    "text": "会做才算。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N35-r0012"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0011-say2",
    "kind": "line",
    "text": "内容听过了，还得回到您的题上试。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N35-r0011-reply2"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0011-reply2",
    "kind": "line",
    "text": "把过程拿出来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N35-r0012"
  },
  {
    "id": "N35-r0012",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "博士先讲到哪里",
    "background": "classroom",
    "speaker": "周远持",
    "text": "讲得前，和题从哪出，是两回事。",
    "character": "c09",
    "next": "N35-r0013"
  },
  {
    "id": "N35-r0013",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "text": "拭泪",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N35-r0014"
  },
  {
    "id": "N35-r0014",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "博老师",
    "text": "电离平衡何以移？",
    "character": "c53",
    "next": "N35-r0015"
  },
  {
    "id": "N35-r0015",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "周远持",
    "text": "水分子浓度大了。",
    "character": "c09",
    "next": "interactive-N35-r0015"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0015",
    "kind": "choice",
    "text": "水分子浓度那句之后，我怎么接？",
    "speaker": "周远持",
    "character": "c09",
    "options": [
      {
        "text": "这句也有动作，先把老师的反应接上。",
        "next": "interactive-N35-r0015-say1"
      },
      {
        "text": "从题目说到拭泪，前面那句得一起留。",
        "next": "interactive-N35-r0015-say2"
      },
      {
        "text": "只写答案，不写老师反应，免得占地方。",
        "failure": "空间省了一行，转折也少了一步。"
      },
      {
        "text": "把玩笑当成公式记，以后直接套。",
        "failure": "眼泪还没擦完，草稿却先套上了一个比喻。"
      }
    ]
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0015-say1",
    "kind": "line",
    "text": "这句也有动作，先把老师的反应接上。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N35-r0015-reply1"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0015-reply1",
    "kind": "line",
    "text": "答案没有只剩一串字。",
    "speaker": "旁白",
    "character": "",
    "next": "N35-r0016"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0015-say2",
    "kind": "line",
    "text": "从题目说到拭泪，前面那句得一起留。",
    "speaker": "周远持",
    "character": "c09",
    "next": "interactive-N35-r0015-reply2"
  },
  {
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N35-r0015-reply2",
    "kind": "line",
    "text": "玩笑接上了它的来路。",
    "speaker": "旁白",
    "character": "",
    "next": "N35-r0016"
  },
  {
    "id": "N35-r0016",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "旁白",
    "text": "委员长把手移到眼边，擦了一下。",
    "character": "",
    "next": "N35-r0017"
  },
  {
    "id": "N35-r0017",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "博老师",
    "text": "我拭泪也。",
    "character": "c53",
    "next": "N35-r0018"
  },
  {
    "id": "N35-r0018",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "周远持",
    "text": "答案才说一句，老师先有动作了。",
    "character": "c09",
    "next": "N35-r0019"
  },
  {
    "id": "N35-r0019",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "拭泪",
    "background": "classroom",
    "speaker": "旁白",
    "text": "短短两门课的记事，留着两个很不一样的语气。本子又交到下一页。",
    "character": "",
    "next": "N35-r0021"
  },
  {
    "id": "N35-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N35-r0022"
  },
  {
    "id": "N35-r0022",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "或谓战曰：“博士已授立体几何也。”战哂之，曰：“题吾所出，博士授何，皆非要事，盖指挥之权，在吾之手。”",
    "character": "",
    "next": "N35-r0023"
  },
  {
    "id": "N35-r0023",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "硝矢公曰：“我爱仙乐。”",
    "character": "",
    "next": "N35-r0024"
  },
  {
    "id": "N35-r0024",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N35",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "委员长曰：“电离平衡何以移？”持曰：“水分子浓度大矣。”委员长以手拭眸，曰：“吾拭泪也。”",
    "character": "",
    "next": "N36-date"
  },
  {
    "id": "N36-date",
    "kind": "date",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-10",
    "text": "十三十四的排版",
    "pov": "c06",
    "character": "",
    "next": "N36-r0028"
  },
  {
    "id": "N36-r0028",
    "kind": "portrait",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "十三十四的排版",
    "pov": "c06",
    "character": "c06",
    "speaker": "吕思宇",
    "next": "N36-r0009"
  },
  {
    "id": "N36-r0009",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "text": "两篇范文",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "paper",
      "title": "范文编号",
      "lines": [
        "13 · 乖巧",
        "14 · Diang.J",
        "1314"
      ]
    },
    "next": "N36-r0021"
  },
  {
    "id": "N36-r0021",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "speaker": "旁白",
    "text": "孙老师把两篇范文排成十三、十四号，一篇署乖巧，一篇署Diang.J。",
    "character": "",
    "next": "N36-r0011"
  },
  {
    "id": "N36-r0011",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "speaker": "同学",
    "text": "十三十四，1314。",
    "character": "",
    "next": "N36-r0012"
  },
  {
    "id": "N36-r0012",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "我们叹老师的排版之才，号码也是文章外的一句话。",
    "character": "c06",
    "next": "interactive-N36-r0012"
  },
  {
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0012",
    "kind": "choice",
    "text": "十三十四的范文编号摆出来，我怎么接？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "文章先读，号码的巧思我留在旁边。",
        "next": "interactive-N36-r0012-say1"
      },
      {
        "text": "两篇的名字都对清，再看这个排法。",
        "next": "interactive-N36-r0012-say2"
      },
      {
        "text": "把编号当署名吧，反正读者会懂。",
        "failure": "一串数字有了姓名，作者却被挤到了页边。"
      },
      {
        "text": "连起来好看，原来各是谁写的不必留。",
        "failure": "版面排得很美，两篇却没了独立的出处。"
      }
    ]
  },
  {
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0012-say1",
    "kind": "line",
    "text": "文章先读，号码的巧思我留在旁边。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N36-r0012-reply1"
  },
  {
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0012-reply1",
    "kind": "line",
    "text": "编号没有替文章先拿分。",
    "speaker": "旁白",
    "character": "",
    "next": "N36-r0013"
  },
  {
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0012-say2",
    "kind": "line",
    "text": "两篇的名字都对清，再看这个排法。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N36-r0012-reply2"
  },
  {
    "day": "N36",
    "context": "现实 · 11月10日补记",
    "period": "两篇范文",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0012-reply2",
    "kind": "line",
    "text": "两个号码找到了各自的篇子。",
    "speaker": "旁白",
    "character": "",
    "next": "N36-r0013"
  },
  {
    "id": "N36-r0013",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "text": "我吃balabala",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N36-r0014"
  },
  {
    "id": "N36-r0014",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "speaker": "旁白",
    "text": "有人赞排版，史官又想到老师谈吃饭的进取。",
    "character": "",
    "next": "N36-r0015"
  },
  {
    "id": "N36-r0015",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "我吃balabala。",
    "character": "c06",
    "next": "interactive-N36-r0015"
  },
  {
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0015",
    "kind": "choice",
    "text": "“我吃balabala”怎么接回补录？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "这声先留着，发生的时候和写的时候别搁一处。",
        "next": "interactive-N36-r0015-say1"
      },
      {
        "text": "先写今天记起的那句，再补清是在什么时候。",
        "next": "interactive-N36-r0015-say2"
      },
      {
        "text": "哪天写就算哪天发生，省得来回翻。",
        "failure": "笔落在今天，旧事却被迫又发生了一次。"
      },
      {
        "text": "只要好笑，先塞进最近那天。",
        "failure": "笑点找到了近处，前后却找不到原来的顺序。"
      }
    ]
  },
  {
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0015-say1",
    "kind": "line",
    "text": "这声先留着，发生的时候和写的时候别搁一处。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N36-r0015-reply1"
  },
  {
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0015-reply1",
    "kind": "line",
    "text": "补录找到了它该回去的那一页。",
    "speaker": "旁白",
    "character": "",
    "next": "N36-r0016"
  },
  {
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0015-say2",
    "kind": "line",
    "text": "先写今天记起的那句，再补清是在什么时候。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N36-r0015-reply2"
  },
  {
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N36-r0015-reply2",
    "kind": "line",
    "text": "落笔晚了一点，事件没有被搬家。",
    "speaker": "旁白",
    "character": "",
    "next": "N36-r0016"
  },
  {
    "id": "N36-r0016",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "我吃balabala",
    "background": "classroom",
    "speaker": "同学",
    "text": "你连吃饭，都想接个范文结尾？",
    "character": "",
    "next": "N36-r0017"
  },
  {
    "id": "N36-r0017",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "补写记录 · 阅读同页不同日期",
    "period": "一页的不同笔",
    "background": "classroom",
    "text": "一页的不同笔",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N36-r0018"
  },
  {
    "id": "N36-r0018",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "补写记录 · 阅读同页不同日期",
    "period": "一页的不同笔",
    "background": "classroom",
    "speaker": "旁白",
    "text": "这页后来添了HQ的工作记录与蓝笔纠日。黑蓝两笔并在一页，发生的日子却不一样。",
    "character": "",
    "next": "N36-r0019"
  },
  {
    "id": "N36-r0019",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "补写记录 · 阅读同页不同日期",
    "period": "一页的不同笔",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "我以后补录，也得把发生日和落笔日分别写清。",
    "character": "c06",
    "next": "N36-r0022"
  },
  {
    "id": "N36-r0022",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N36-r0023"
  },
  {
    "id": "N36-r0023",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "上HQ之作应为11.11，看得出确实非常忙。",
    "character": "",
    "next": "N36-r0024"
  },
  {
    "id": "N36-r0024",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "蕾作范文，其13号文乃乖巧，14号文乃Diang.J，取其1314之意。",
    "character": "",
    "next": "N36-r0025"
  },
  {
    "id": "N36-r0025",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "众叹蕾排版之才。",
    "character": "",
    "next": "N36-r0026"
  },
  {
    "id": "N36-r0026",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "余叹蕾吃饭之进取。",
    "character": "",
    "next": "N36-r0027"
  },
  {
    "id": "N36-r0027",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N36",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "恐蕾之心近于余：我吃balabala。",
    "character": "",
    "next": "N37-date"
  },
  {
    "id": "N37-date",
    "kind": "date",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-11",
    "text": "漫长的成绩分析",
    "pov": "c07",
    "character": "",
    "next": "N37-r0026"
  },
  {
    "id": "N37-r0026",
    "kind": "portrait",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "漫长的成绩分析",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "N37-r0008"
  },
  {
    "id": "N37-r0008",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · HQ工作记录",
    "period": "冷而忙的周六",
    "background": "classroom",
    "text": "冷而忙的周六",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N37-r0009"
  },
  {
    "id": "N37-r0009",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · HQ工作记录",
    "period": "冷而忙的周六",
    "background": "classroom",
    "speaker": "旁白",
    "text": "每节七十分钟，《电场中的导体》连上两节。老师记着：小朋友们比高二有进步。",
    "character": "",
    "next": "N37-r0010"
  },
  {
    "id": "N37-r0010",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · HQ工作记录",
    "period": "冷而忙的周六",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "难课结束，问题还没问完。",
    "character": "c07",
    "next": "N37-r0011"
  },
  {
    "id": "N37-r0011",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "text": "午间的问题",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N37-r0012"
  },
  {
    "id": "N37-r0012",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "speaker": "旁白",
    "text": "几个同学来问问题，HQ午间有些暴躁。下午还要成绩分析，手里的事没有空隙。",
    "character": "",
    "next": "N37-r0013"
  },
  {
    "id": "N37-r0013",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "speaker": "HQ",
    "text": "先让我把这边整理好。",
    "character": "c45",
    "next": "interactive-N37-r0013"
  },
  {
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0013",
    "kind": "choice",
    "text": "老师说先整理，我怎样等答疑？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "我把题先展开，轮到时直接指这一处。",
        "next": "interactive-N37-r0013-say1"
      },
      {
        "text": "您先忙这边，我把自己的过程核一遍。",
        "next": "interactive-N37-r0013-say2"
      },
      {
        "text": "等着反正没事，题目先收回去。",
        "failure": "轮到问了，题目却又躲进了书包。"
      },
      {
        "text": "现在打断一下，别人的事晚点再说。",
        "failure": "一个疑问挤到了前面，前面的事却都卡住了。"
      }
    ]
  },
  {
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0013-say1",
    "kind": "line",
    "text": "我把题先展开，轮到时直接指这一处。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N37-r0013-reply1"
  },
  {
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0013-reply1",
    "kind": "line",
    "text": "等一下我就看。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N37-r0014"
  },
  {
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0013-say2",
    "kind": "line",
    "text": "您先忙这边，我把自己的过程核一遍。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N37-r0013-reply2"
  },
  {
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0013-reply2",
    "kind": "line",
    "text": "别只拿答案来。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N37-r0014"
  },
  {
    "id": "N37-r0014",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "speaker": "旁白",
    "text": "在她自己写下的工作记录里，紧接着是一句“要改”。同学读到，才看到老师也反省了刚才的着急。",
    "character": "",
    "next": "N37-r0015"
  },
  {
    "id": "N37-r0015",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "午间的问题",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "我们只看见当时，老师连后面这句也写了。",
    "character": "c07",
    "next": "N37-r0016"
  },
  {
    "id": "N37-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "text": "13:30到21:00",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N37-r0017"
  },
  {
    "id": "N37-r0017",
    "kind": "line",
    "source": "转述",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "speaker": "旁白",
    "text": "从下午一点半到晚上九点，老师拿到各科成绩、班级均分，一位一位比对。",
    "character": "",
    "next": "N37-r0018"
  },
  {
    "id": "N37-r0018",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "研讨每位熊孩子的各科成绩，比对自己娃用心多了！",
    "character": "",
    "next": "N37-r0019"
  }
];
export default data;
