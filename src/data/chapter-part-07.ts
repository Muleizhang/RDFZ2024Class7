import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N12-r0025",
    "kind": "line",
    "source": "补写",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "打勾的成果",
    "background": "classroom",
    "speaker": "王家童",
    "text": "一个课间，周末练习写完了。",
    "character": "c25",
    "next": "N12-r0026"
  },
  {
    "id": "N12-r0026",
    "kind": "line",
    "source": "补写",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "打勾的成果",
    "background": "classroom",
    "speaker": "同学",
    "text": "最速传说。",
    "character": "",
    "next": "N12-r0027"
  },
  {
    "id": "N12-r0027",
    "kind": "line",
    "source": "转述",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "打勾的成果",
    "background": "classroom",
    "speaker": "旁白",
    "text": "核过答案，后面又添了“全错”。速度的纪录仍在，正确率要另记。",
    "character": "",
    "next": "N12-r0028"
  },
  {
    "id": "N12-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "text": "作业的见证",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N12-r0029"
  },
  {
    "id": "N12-r0029",
    "kind": "line",
    "source": "转述",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "speaker": "旁白",
    "text": "同学说看见李承容交了作业。",
    "character": "",
    "next": "N12-r0030"
  },
  {
    "id": "N12-r0030",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "这叫导盲犬。",
    "character": "c30",
    "next": "interactive-N12-r0030"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0030",
    "kind": "choice",
    "text": "作业见证被叫“导盲犬”，我怎么接？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "带着看可以，最后还得自己把路走一遍。",
        "next": "interactive-N12-r0030-say1"
      },
      {
        "text": "这词先记着，勾到底表示什么也得说清。",
        "next": "interactive-N12-r0030-say2"
      },
      {
        "text": "有个人带着，我以后不必自己查了。",
        "failure": "带路的人下了课，题目却没找到回家的路。"
      },
      {
        "text": "打勾就当做对，省得又翻一遍。",
        "failure": "勾画得很认真，错的过程也跟着盖了章。"
      }
    ]
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0030-say1",
    "kind": "line",
    "text": "带着看可以，最后还得自己把路走一遍。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N12-r0030-reply1"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0030-reply1",
    "kind": "line",
    "text": "把你那题拿来。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "N12-r0031"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0030-say2",
    "kind": "line",
    "text": "这词先记着，勾到底表示什么也得说清。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N12-r0030-reply2"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0030-reply2",
    "kind": "line",
    "text": "不能只看那个勾。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "N12-r0031"
  },
  {
    "id": "N12-r0031",
    "kind": "line",
    "source": "补写",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "看见作业，也让作业看见人了。",
    "character": "c06",
    "next": "N12-r0032"
  },
  {
    "id": "N12-r0032",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "speaker": "HQ",
    "text": "李昊宇几乎不动，徐启元呼呼直转。",
    "character": "c45",
    "next": "interactive-N12-r0032"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0032",
    "kind": "choice",
    "text": "HQ说转得快慢不同，我怎么接？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "刚才那一步我还没接上，您等我对一下。",
        "next": "interactive-N12-r0032-say1"
      },
      {
        "text": "转得快也得落在纸上，我把过程写完。",
        "next": "interactive-N12-r0032-say2"
      },
      {
        "text": "反应快就算懂了，不必写过程。",
        "failure": "脑子转完一圈，纸上仍没有一条轨迹。"
      },
      {
        "text": "我慢一点，就等别人报答案吧。",
        "failure": "答案等来了，自己的思路却还没出门。"
      }
    ]
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0032-say1",
    "kind": "line",
    "text": "刚才那一步我还没接上，您等我对一下。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N12-r0032-reply1"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0032-reply1",
    "kind": "line",
    "text": "先把条件找齐。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N12-r0033"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0032-say2",
    "kind": "line",
    "text": "转得快也得落在纸上，我把过程写完。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N12-r0032-reply2"
  },
  {
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "page": 36,
    "pages": [
      36
    ],
    "source": "补写",
    "id": "interactive-N12-r0032-reply2",
    "kind": "line",
    "text": "别只在脑子里转。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "N12-r0033"
  },
  {
    "id": "N12-r0033",
    "kind": "line",
    "source": "转述",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "作业的见证",
    "background": "classroom",
    "speaker": "旁白",
    "text": "课上的评论与同学的怪句轮着响，邵聪的名字在页边越写越大，成了今日MVP。",
    "character": "",
    "next": "N12-r0034"
  },
  {
    "id": "N12-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "写下想念",
    "background": "classroom",
    "text": "写下想念",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N12-r0035"
  },
  {
    "id": "N12-r0035",
    "kind": "line",
    "source": "补写",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "写下想念",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "温辞离开五十天。我们想你了。",
    "character": "c06",
    "next": "N12-r0036"
  },
  {
    "id": "N12-r0036",
    "kind": "line",
    "source": "转述",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "写下想念",
    "background": "classroom",
    "speaker": "旁白",
    "text": "这句属于全班的问候，和当天的作业、笑声一起留在纸上。",
    "character": "",
    "next": "N12-r0038"
  },
  {
    "id": "N12-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N12-r0039"
  },
  {
    "id": "N12-r0039",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "all but：几乎。come across：邂逅，遇到。",
    "character": "",
    "next": "N12-r0040"
  },
  {
    "id": "N12-r0040",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日英语课讲了早读的盘点和周末卷子。",
    "character": "",
    "next": "N12-r0041"
  },
  {
    "id": "N12-r0041",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语文课前朗读：《赤壁赋》。课上收尾了限时讲解（极难）。",
    "character": "",
    "next": "N12-r0042"
  },
  {
    "id": "N12-r0042",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总座又因有人写别科作业暴怒。（1/1）。",
    "character": "",
    "next": "N12-r0043"
  },
  {
    "id": "N12-r0043",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物理课讲了周末作业题和变双星模型，以及起向心力实验（没讲）。",
    "character": "",
    "next": "N12-r0044"
  },
  {
    "id": "N12-r0044",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生物课有人破防嚎叫。",
    "character": "",
    "next": "N12-r0045"
  },
  {
    "id": "N12-r0045",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战景林底线试探进一步成果：题全错打勾√；题全对不打勾×。",
    "character": "",
    "next": "N12-r0046"
  },
  {
    "id": "N12-r0046",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "徐子涵的水杯更新，危险。",
    "character": "",
    "next": "N12-r0047"
  },
  {
    "id": "N12-r0047",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数学课爆雷开场。讲了周末练习。",
    "character": "",
    "next": "N12-r0048"
  },
  {
    "id": "N12-r0048",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "自习课。",
    "character": "",
    "next": "N12-r0049"
  },
  {
    "id": "N12-r0049",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "王家童使用一个课间完成周末练习，最速传说（全错）",
    "character": "",
    "next": "N12-r0050"
  },
  {
    "id": "N12-r0050",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "滚！太阳从西山升起。",
    "character": "c30",
    "next": "N12-r0051"
  },
  {
    "id": "N12-r0051",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "周远持",
    "text": "我只得了8分。我：把饭比成农民。",
    "character": "c09",
    "next": "N12-r0052"
  },
  {
    "id": "N12-r0052",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "《对啊我看李承容交了作业》。邵聪：这叫导盲犬。",
    "character": "",
    "next": "N12-r0053"
  },
  {
    "id": "N12-r0053",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "距温辞离开已有50天。",
    "character": "",
    "next": "N12-r0054"
  },
  {
    "id": "N12-r0054",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "温辞，我们想你了。",
    "character": "",
    "next": "N12-r0055"
  },
  {
    "id": "N12-r0055",
    "kind": "line",
    "source": "原文",
    "page": 36,
    "pages": [
      36
    ],
    "day": "N12",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "页外附句：历史在——里的——，就像一个——里——里——最——最的——。",
    "character": "",
    "next": "N13-date"
  },
  {
    "id": "N13-date",
    "kind": "date",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-12",
    "text": "抄答案比赛",
    "pov": "c30",
    "character": "",
    "next": "N13-r0039"
  },
  {
    "id": "N13-r0039",
    "kind": "portrait",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "抄答案比赛",
    "pov": "c30",
    "character": "c30",
    "speaker": "邵聪",
    "next": "N13-r0014"
  },
  {
    "id": "N13-r0014",
    "kind": "scene",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "text": "下棋的原因",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N13-r0015"
  },
  {
    "id": "N13-r0015",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "我这么菜，是不是小时候没学下棋？",
    "character": "c46",
    "next": "interactive-N13-r0015"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0015",
    "kind": "choice",
    "text": "老师说没学下棋，我怎么接？",
    "speaker": "邵聪",
    "character": "c30",
    "options": [
      {
        "text": "下棋的账先放着，这道我先把依据找齐。",
        "next": "interactive-N13-r0015-say1"
      },
      {
        "text": "这个归因我记住了，眼前的错可得先改。",
        "next": "interactive-N13-r0015-say2"
      },
      {
        "text": "那把错都归给小时候，现在也不好改。",
        "failure": "小时候接下了责任，眼前的错题便一直无人认领。"
      },
      {
        "text": "先去研究棋，文章今天不看了。",
        "failure": "棋盘摆开了，阅读的那一步却没走出。"
      }
    ]
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0015-say1",
    "kind": "line",
    "text": "下棋的账先放着，这道我先把依据找齐。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "interactive-N13-r0015-reply1"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0015-reply1",
    "kind": "line",
    "text": "看原文这句。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "N13-r0016"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0015-say2",
    "kind": "line",
    "text": "这个归因我记住了，眼前的错可得先改。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "interactive-N13-r0015-reply2"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0015-reply2",
    "kind": "line",
    "text": "别只记趣话。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "N13-r0016"
  },
  {
    "id": "N13-r0016",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "不是。",
    "character": "c07",
    "next": "N13-r0017"
  },
  {
    "id": "N13-r0017",
    "kind": "line",
    "source": "转述",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "下棋的原因",
    "background": "classroom",
    "speaker": "旁白",
    "text": "肯定得太快，老师的问题还没拐弯，回答已经到了。",
    "character": "",
    "next": "N13-r0018"
  },
  {
    "id": "N13-r0018",
    "kind": "scene",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "text": "草草收尾",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N13-r0019"
  },
  {
    "id": "N13-r0019",
    "kind": "line",
    "source": "转述",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "speaker": "旁白",
    "text": "英语课上，答案抄写越来越快，竟像比起速度。Young Sir发现了，比赛草草收尾。",
    "character": "",
    "next": "N13-r0020"
  },
  {
    "id": "N13-r0020",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "班级进行了答案抄写比赛。",
    "character": "c30",
    "next": "N13-r0021"
  },
  {
    "id": "N13-r0021",
    "kind": "line",
    "source": "转述",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ又在红笔批注里追了一句。",
    "character": "",
    "next": "N13-r0022"
  },
  {
    "id": "N13-r0022",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "speaker": "HQ",
    "text": "可能只有你这么干吧……",
    "character": "c45",
    "next": "N13-r0023"
  },
  {
    "id": "N13-r0023",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "全班的事，写着写着缩成一个人了。",
    "character": "c30",
    "next": "interactive-N13-r0023"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0023",
    "kind": "choice",
    "text": "全班的事写成一个人的事，我怎么补？",
    "speaker": "邵聪",
    "character": "c30",
    "options": [
      {
        "text": "把别人刚才那句也接上，别只剩我自己。",
        "next": "interactive-N13-r0023-say1"
      },
      {
        "text": "先补课上的一件，再回去看谁漏了。",
        "next": "interactive-N13-r0023-say2"
      },
      {
        "text": "我的写全就够，其他人应该会自己补。",
        "failure": "一本班史等成了四十七本各自的日记。"
      },
      {
        "text": "找个“大家”顶上，就不用逐件想了。",
        "failure": "“大家”坐得满满当当，具体的人却都没到场。"
      }
    ]
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0023-say1",
    "kind": "line",
    "text": "把别人刚才那句也接上，别只剩我自己。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "interactive-N13-r0023-reply1"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0023-reply1",
    "kind": "line",
    "text": "独白终于接到了另一个人的声音。",
    "speaker": "旁白",
    "character": "",
    "next": "N13-r0024"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0023-say2",
    "kind": "line",
    "text": "先补课上的一件，再回去看谁漏了。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "interactive-N13-r0023-reply2"
  },
  {
    "day": "N13",
    "context": "现实",
    "period": "草草收尾",
    "background": "classroom",
    "page": 37,
    "pages": [
      37
    ],
    "source": "补写",
    "id": "interactive-N13-r0023-reply2",
    "kind": "line",
    "text": "纸页重新装进了班级。",
    "speaker": "旁白",
    "character": "",
    "next": "N13-r0024"
  },
  {
    "id": "N13-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "听到的英语",
    "background": "classroom",
    "text": "听到的英语",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N13-r0025"
  },
  {
    "id": "N13-r0025",
    "kind": "line",
    "source": "转述",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "听到的英语",
    "background": "classroom",
    "speaker": "旁白",
    "text": "大哥朗读，被旁边的人模仿成唱歌。数学限时里，研究心形函数的持持又说起选项。",
    "character": "",
    "next": "N13-r0026"
  },
  {
    "id": "N13-r0026",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "听到的英语",
    "background": "classroom",
    "speaker": "周远持",
    "text": "B。也可能D。",
    "character": "c09",
    "next": "N13-r0027"
  },
  {
    "id": "N13-r0027",
    "kind": "line",
    "source": "补写",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "听到的英语",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "你这论调，留下两个答案。",
    "character": "c30",
    "next": "N13-r0028"
  },
  {
    "id": "N13-r0028",
    "kind": "line",
    "source": "转述",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "听到的英语",
    "background": "classroom",
    "speaker": "旁白",
    "text": "页边画了一枝玫瑰。秋天在一点点来，今天的价值也得在今天先记住。",
    "character": "",
    "next": "N13-r0030"
  },
  {
    "id": "N13-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N13-r0031"
  },
  {
    "id": "N13-r0031",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "清晨，秋风拂面，带来了一丝凉意，似乎在告诉人们烟烂的夏已经过去，秋真的来了。秋，是收获的季节，古人云：“春生夏长，秋收冬藏。”果实于秋季饱满，辛勤劳于秋季凝结。",
    "character": "",
    "next": "N13-r0032"
  },
  {
    "id": "N13-r0032",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "在这个秋天，愿我们也能学有所成，硕果满载！",
    "character": "",
    "next": "N13-r0033"
  },
  {
    "id": "N13-r0033",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日趣事：",
    "character": "",
    "next": "N13-r0034"
  },
  {
    "id": "N13-r0034",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "孙蕾",
    "text": "我这么菜是不是小时候没学下棋？",
    "character": "c46",
    "next": "N13-r0035"
  },
  {
    "id": "N13-r0035",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "不是（肯定）——大哥。",
    "character": "",
    "next": "N13-r0036"
  },
  {
    "id": "N13-r0036",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "于英语课，班级进行了答案抄写比赛，被youngsir发现，草草收尾。",
    "character": "",
    "next": "N13-r0037"
  },
  {
    "id": "N13-r0037",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大哥读英语被模仿唱歌。",
    "character": "",
    "next": "N13-r0038"
  },
  {
    "id": "N13-r0038",
    "kind": "line",
    "source": "原文",
    "page": 37,
    "pages": [
      37
    ],
    "day": "N13",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "然后是平淡的一天。终于，在数学限时中，对心形函数很有研究的持持，发表了这题选“B”和“选D”的精明论调。",
    "character": "",
    "next": "D11-date"
  },
  {
    "id": "D11-date",
    "kind": "date",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-13",
    "text": "纸飞机与照片",
    "pov": "c14",
    "character": "",
    "next": "D11-0001"
  },
  {
    "id": "D11-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "纸飞机与照片",
    "pov": "c14",
    "character": "c14",
    "speaker": "惠子宁",
    "next": "D11-0002"
  },
  {
    "id": "D11-0002",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "text": "纸飞机与照片",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-0003"
  },
  {
    "id": "D11-0003",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "纸飞机、开窗远眺、班后篮球，苦中作乐的项目越来越多。",
    "character": "c14",
    "next": "D11-0004"
  },
  {
    "id": "D11-0004",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "老师还会弹古筝？您去金门大桥了？",
    "character": "c16",
    "next": "D11-0005"
  },
  {
    "id": "D11-0005",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "HQ",
    "text": "这是普拉提好吗！",
    "character": "c45",
    "next": "interactive-D11-0005"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0005",
    "kind": "choice",
    "text": "HQ说这是普拉提，我怎么接？",
    "speaker": "惠子宁",
    "character": "c14",
    "options": [
      {
        "text": "名字认错了，动作倒挺像那么回事。",
        "next": "interactive-D11-0005-say1"
      },
      {
        "text": "这段也写上，别把老师直接记成另一个项目。",
        "next": "interactive-D11-0005-say2"
      },
      {
        "text": "看着差不多，就用刚才那个名字。",
        "failure": "动作做完了，项目名却还在别人的场地里。"
      },
      {
        "text": "名字不重要，干脆写老师在跳舞。",
        "failure": "一项练习在笔下变了身，老师只好重新报到。"
      }
    ]
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0005-say1",
    "kind": "line",
    "text": "名字认错了，动作倒挺像那么回事。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-D11-0005-reply1"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0005-reply1",
    "kind": "line",
    "text": "先看清再说。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D11-0006"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0005-say2",
    "kind": "line",
    "text": "这段也写上，别把老师直接记成另一个项目。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-D11-0005-reply2"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0005-reply2",
    "kind": "line",
    "text": "你们净会起名。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D11-0006"
  },
  {
    "id": "D11-0006",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "器械像弦，不代表一定是琴。",
    "character": "c14",
    "next": "D11-0007"
  },
  {
    "id": "D11-0007",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "拖把上的这个零件，可以拿下来玩。",
    "character": "c30",
    "next": "interactive-D11-0007"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0007",
    "kind": "choice",
    "text": "邵聪指着拖把零件，我怎么接？",
    "speaker": "惠子宁",
    "character": "c14",
    "options": [
      {
        "text": "先看看怎么装回去，别玩完了只剩拖把杆。",
        "next": "interactive-D11-0007-say1"
      },
      {
        "text": "课间玩两下，值日还得让它回原位。",
        "next": "interactive-D11-0007-say2"
      },
      {
        "text": "拆了就先放一边，值日的人会装。",
        "failure": "零件有了课间，拖把却没等到完整的下节课。"
      },
      {
        "text": "多拆一块看，反正都差不多。",
        "failure": "玩具越拆越多，清洁工具却越拼越少。"
      }
    ]
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0007-say1",
    "kind": "line",
    "text": "先看看怎么装回去，别玩完了只剩拖把杆。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-D11-0007-reply1"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0007-reply1",
    "kind": "line",
    "text": "这块要对着卡口。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "D11-0008"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0007-say2",
    "kind": "line",
    "text": "课间玩两下，值日还得让它回原位。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-D11-0007-reply2"
  },
  {
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "source": "补写",
    "id": "interactive-D11-0007-reply2",
    "kind": "line",
    "text": "我记着。",
    "speaker": "邵聪",
    "character": "c30",
    "next": "D11-0008"
  },
  {
    "id": "D11-0008",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "纸飞机与照片",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "心理年龄两岁，这一笔也值得记。",
    "character": "c14",
    "next": "D11-0009"
  },
  {
    "id": "D11-0009",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "被瓜分的午休",
    "background": "track",
    "text": "被瓜分的午休",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-0010"
  },
  {
    "id": "D11-0010",
    "kind": "line",
    "source": "转述",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "被瓜分的午休",
    "background": "track",
    "speaker": "旁白",
    "text": "三次五十米模拟，再来一次考试。不知名的物竞同学跑完，被众人抬举。",
    "character": "",
    "next": "D11-0011"
  },
  {
    "id": "D11-0011",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "被瓜分的午休",
    "background": "track",
    "speaker": "惠子宁",
    "text": "午休还有数学基础练习、化学方程、英语听写……横条一画，哪里还有空格。",
    "character": "c14",
    "next": "D11-0012"
  },
  {
    "id": "D11-0012",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "被瓜分的午休",
    "background": "track",
    "speaker": "邵聪",
    "text": "至少这一天，不是昨天的复印件。",
    "character": "c30",
    "next": "D11-r0044"
  },
  {
    "id": "D11-r0044",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "三力和四块黑板",
    "background": "classroom",
    "text": "三力和四块黑板",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0045"
  },
  {
    "id": "D11-r0045",
    "kind": "line",
    "source": "转述",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "三力和四块黑板",
    "background": "classroom",
    "speaker": "旁白",
    "text": "物理在三力中求F，生物的表观印迹法随后接上。化学又为先滴哪一种试剂停了下来。",
    "character": "",
    "next": "D11-r0046"
  },
  {
    "id": "D11-r0046",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "三力和四块黑板",
    "background": "classroom",
    "speaker": "同学",
    "text": "先看滴加顺序，不然现象就变了。",
    "character": "",
    "next": "D11-r0047"
  },
  {
    "id": "D11-r0047",
    "kind": "line",
    "source": "转述",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "三力和四块黑板",
    "background": "classroom",
    "speaker": "旁白",
    "text": "数学老师抽问、换班，课堂纪律也跟着重排。例题写进本子，课间的纸飞机还没消停。",
    "character": "",
    "next": "D11-r0048"
  },
  {
    "id": "D11-r0048",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间的另一面",
    "background": "classroom",
    "text": "课间的另一面",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0049"
  },
  {
    "id": "D11-r0049",
    "kind": "line",
    "source": "转述",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间的另一面",
    "background": "classroom",
    "speaker": "旁白",
    "text": "木棉花被说起，扇子却坏了。刚才还谈化劲，转身又得处理风吹不出的扇面。",
    "character": "",
    "next": "D11-r0050"
  },
  {
    "id": "D11-r0050",
    "kind": "line",
    "source": "补写",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间的另一面",
    "background": "classroom",
    "speaker": "同学",
    "text": "先别演，扇子已经不行了。",
    "character": "",
    "next": "D11-r0051"
  },
  {
    "id": "D11-r0051",
    "kind": "line",
    "source": "转述",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间的另一面",
    "background": "classroom",
    "speaker": "旁白",
    "text": "英语D篇与照片番外接着填满纸页，史官先把能记住的留住，再把班史递下去。",
    "character": "",
    "next": "D11-r0052"
  },
  {
    "id": "D11-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0053"
  },
  {
    "id": "D11-r0053",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "眨眼间，开学已经接近4周。从一开始的匆忙与慌乱，到现在高三生活逐渐适应，得心应手。",
    "character": "",
    "next": "D11-r0054"
  },
  {
    "id": "D11-r0054",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "聪明智慧的7班同学们也发明了许多娱乐活动，如班后篮球单打（zyc当篮网），又如课间开窗远眺，纸飞机比赛……苦中作乐，为高三枯燥的生活增添乐趣。",
    "character": "",
    "next": "D11-r0055"
  },
  {
    "id": "D11-r0055",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0056"
  },
  {
    "id": "D11-r0056",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "左图：倾斜圆盘，穿过中心的轴与水平虚线成θ角，盘面有一个小物块。",
    "character": "",
    "next": "D11-r0057"
  },
  {
    "id": "D11-r0057",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "中图：受力分析箭头，N斜向左上，f斜向右上，mg竖直向下，另有斜向箭头。旁文：“物体一定受三个力”。",
    "character": "",
    "next": "D11-r0058"
  },
  {
    "id": "D11-r0058",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "公式：F地月＝GMm月/r地月²＝m月a；F地果＝GMm果/r地²＝m果g。",
    "character": "",
    "next": "D11-r0059"
  },
  {
    "id": "D11-r0059",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "右图：以地球／球体截面M为底，标半径R、距离r、小圆m；绘F—x图，曲线在球内上升、出球后衰减，曲线下方斜线阴影。公式F＝GMm/r²。",
    "character": "",
    "next": "D11-r0060"
  },
  {
    "id": "D11-r0060",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语录：“zyc要不来RDFZ当老师吧！”",
    "character": "",
    "next": "D11-r0061"
  },
  {
    "id": "D11-r0061",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0062"
  },
  {
    "id": "D11-r0062",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "图示：DNA梯状结构，一对标“T”，另一对标“G—C”，圆圈CH₃连接到碱基或骨架。文字：“表观遗传——很新的生物知识”。",
    "character": "",
    "next": "D11-r0063"
  },
  {
    "id": "D11-r0063",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "方位星形图：Northern：DNA-RNA；Southern印迹法：DNA-DNA；Western：抗—原；Eastern：雷：等同学们去发掘。",
    "character": "",
    "next": "D11-r0064"
  },
  {
    "id": "D11-r0064",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0065"
  },
  {
    "id": "D11-r0065",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "四支试管图：①向Al³⁺中滴OH⁻，沉→清；②向OH⁻中滴Al³⁺，清→沉；③向H⁺中滴AlO₂⁻，清→沉；④向AlO₂⁻中滴H⁺，沉→清。试管底部画有阴影沉淀。",
    "character": "",
    "next": "D11-r0066"
  },
  {
    "id": "D11-r0066",
    "kind": "line",
    "source": "原文",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "抽到QHS去写化学方程。",
    "character": "",
    "next": "D11-r0067"
  },
  {
    "id": "D11-r0067",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0068"
  },
  {
    "id": "D11-r0068",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师分享维持纪律秘诀：嚷话的去另一个班上自习，只留听讲的。——杀鸡敬猴法。",
    "character": "",
    "next": "D11-r0069"
  },
  {
    "id": "D11-r0069",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1/√(1²+1)＋1/√(2²+2)＋1/√(3²+3)＋……＋1/√(n²+n)＞ln(n+1)。",
    "character": "",
    "next": "D11-r0070"
  },
  {
    "id": "D11-r0070",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "text": "体育 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0071"
  },
  {
    "id": "D11-r0071",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "某不知名物竞人士来和我们跑50m。",
    "character": "",
    "next": "D11-r0072"
  },
  {
    "id": "D11-r0072",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "跑完后被众人“抬举”。",
    "character": "",
    "next": "D11-r0073"
  },
  {
    "id": "D11-r0073",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "3×50m（模拟）＋50m考试。",
    "character": "",
    "next": "D11-r0074"
  },
  {
    "id": "D11-r0074",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "被瓜分的午休。“一目了然，不言而喻。”",
    "character": "",
    "next": "D11-r0075"
  },
  {
    "id": "D11-r0075",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0076"
  },
  {
    "id": "D11-r0076",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "《木棉花歌》",
    "character": "",
    "next": "D11-r0077"
  },
  {
    "id": "D11-r0077",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "浓须大面好英雄，壮气高冠何落落。",
    "character": "",
    "next": "D11-r0078"
  },
  {
    "id": "D11-r0078",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "后出棠榴枉有名，同时桃杏惭轻薄。",
    "character": "",
    "next": "D11-r0079"
  },
  {
    "id": "D11-r0079",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "旁注：木棉花高大卓异；对比：沉稳、积极；“丰富他人的生活”。",
    "character": "",
    "next": "D11-r0080"
  },
  {
    "id": "D11-r0080",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "统练：“传统功夫是讲化劲的。”大家公认的开头。",
    "character": "",
    "next": "D11-r0081"
  },
  {
    "id": "D11-r0081",
    "kind": "scene",
    "source": "演出",
    "page": 38,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D11-r0082"
  },
  {
    "id": "D11-r0082",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "极简单的D篇。",
    "character": "",
    "next": "D11-r0083"
  },
  {
    "id": "D11-r0083",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "What does deaf ears in the fourth paragraph probably refer to?",
    "character": "",
    "next": "D11-r0084"
  },
  {
    "id": "D11-r0084",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "A. The public. B. The incentive initiators.",
    "character": "",
    "next": "D11-r0085"
  },
  {
    "id": "D11-r0085",
    "kind": "line",
    "source": "原文",
    "page": 39,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "C. The peer researchers. D. The high-impact journal editors.",
    "character": "",
    "next": "D11-r0086"
  },
  {
    "id": "D11-r0086",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "① xzh晚自习发照片。",
    "character": "",
    "next": "D11-r0087"
  },
  {
    "id": "D11-r0087",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "② 7班古筝哥：",
    "character": "",
    "next": "D11-r0088"
  },
  {
    "id": "D11-r0088",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "老师您去金门大桥了。",
    "character": "",
    "next": "D11-r0089"
  },
  {
    "id": "D11-r0089",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "邵聪从拖把上找的玩具。",
    "character": "",
    "next": "D11-r0090"
  },
  {
    "id": "D11-r0090",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "一天过得很快，在准备高考的268天中，这24小时如眨眼般闪过。",
    "character": "",
    "next": "D11-r0091"
  },
  {
    "id": "D11-r0091",
    "kind": "line",
    "source": "原文",
    "page": 40,
    "pages": [
      38,
      39,
      40
    ],
    "day": "D11",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "记述这一天的班级日志让我也意识到今天的特别，成为在重复枯燥高三生活中的一抹高光。",
    "character": "",
    "next": "N14-date"
  },
  {
    "id": "N14-date",
    "kind": "date",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "日历编排 · 事件实日待核",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-14",
    "text": "被压缩的身高",
    "pov": "c14",
    "character": "",
    "next": "N14-r0057"
  },
  {
    "id": "N14-r0057",
    "kind": "portrait",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "被压缩的身高",
    "pov": "c14",
    "character": "c14",
    "speaker": "惠子宁",
    "next": "N14-r0023"
  },
  {
    "id": "N14-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "text": "又是我",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0024"
  },
  {
    "id": "N14-r0024",
    "kind": "line",
    "source": "补写",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "昨天写完已经今天中午。没人认领，只能再写一天。",
    "character": "c14",
    "next": "N14-r0025"
  },
  {
    "id": "N14-r0025",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "speaker": "雷老师",
    "text": "又要讲不完了。",
    "character": "c49",
    "next": "interactive-N14-r0025"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0025",
    "kind": "choice",
    "text": "老师又怕讲不完，我怎么接？",
    "speaker": "惠子宁",
    "character": "c14",
    "options": [
      {
        "text": "先跟住这一段，没懂的留个记号课后问。",
        "next": "interactive-N14-r0025-say1"
      },
      {
        "text": "刚才的条件我还要核，您接着讲我先记着。",
        "next": "interactive-N14-r0025-say2"
      },
      {
        "text": "既然讲不完，这节先不细听了。",
        "failure": "内容还没讲完，听课却先散了场。"
      },
      {
        "text": "剩下的自己看答案就行，问题不留了。",
        "failure": "答案翻到了末页，疑点却停在中间。"
      }
    ]
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0025-say1",
    "kind": "line",
    "text": "先跟住这一段，没懂的留个记号课后问。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-N14-r0025-reply1"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0025-reply1",
    "kind": "line",
    "text": "别只听个大概。",
    "speaker": "雷杨",
    "character": "c49",
    "next": "N14-r0026"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0025-say2",
    "kind": "line",
    "text": "刚才的条件我还要核，您接着讲我先记着。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-N14-r0025-reply2"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0025-reply2",
    "kind": "line",
    "text": "把页码也记好。",
    "speaker": "雷杨",
    "character": "c49",
    "next": "N14-r0026"
  },
  {
    "id": "N14-r0026",
    "kind": "line",
    "source": "转述",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "又是我",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学的“定1法”画成两条折线；物理的过程又写到GM=gR²。英语学案抄得奋笔疾书。",
    "character": "",
    "next": "N14-r0027"
  },
  {
    "id": "N14-r0027",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "text": "体检的厘米",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0028"
  },
  {
    "id": "N14-r0028",
    "kind": "line",
    "source": "转述",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "speaker": "旁白",
    "text": "自习轮到体检。数字从量表传到同学嘴里，身高忽然像高三一样被压缩。",
    "character": "",
    "next": "N14-r0029"
  }
];
export default data;
