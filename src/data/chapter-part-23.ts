import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D26-r0010",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "speaker": "贾诺基",
    "text": "老师，从开业酬宾讲到香料，您推荐得也太认真了。",
    "character": "c28",
    "next": "interactive-D26-r0010"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-r0010",
    "kind": "choice",
    "text": "老师推荐得认真，我怎样问约面的事？",
    "speaker": "贾诺基",
    "character": "c28",
    "options": [
      {
        "text": "我们凑人前先问问，上菜大概要等多久？",
        "next": "interactive-D26-r0010-say1"
      },
      {
        "text": "晚自习得赶回来，路程也一起算。",
        "next": "interactive-D26-r0010-say2"
      },
      {
        "text": "推荐这么认真，肯定不用等。",
        "failure": "推荐到了碗边，二十多个人却还在等面。"
      },
      {
        "text": "到了再约人，座位总会有。",
        "failure": "一碗面还没齐，找座的人先绕了几圈。"
      },
      {
        "text": "到了面店才问几点关门，反正去一趟总能吃。",
        "failure": "门先等来了二十多人，时间却没等到提前的询问。"
      }
    ]
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-r0010-say1",
    "kind": "line",
    "text": "我们凑人前先问问，上菜大概要等多久？",
    "speaker": "贾诺基",
    "character": "c28",
    "next": "interactive-D26-r0010-reply1"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-r0010-reply1",
    "kind": "line",
    "text": "人多就别都压着一个点去。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D26-0005"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-r0010-say2",
    "kind": "line",
    "text": "晚自习得赶回来，路程也一起算。",
    "speaker": "贾诺基",
    "character": "c28",
    "next": "interactive-D26-r0010-reply2"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-r0010-reply2",
    "kind": "line",
    "text": "别把来回忘了。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D26-0005"
  },
  {
    "id": "D26-0005",
    "kind": "portrait",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103,
      204,
      206
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "text": "这一段，由李沛霖接着记。",
    "next": "D26-r0012"
  },
  {
    "id": "D26-r0012",
    "kind": "choice",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103,
      204,
      206
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "text": "下课就要吃饭，我怎么约",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "“去吃老师说的面？把晚自习的时间看好，一起走。”",
        "next": "D26-r0013"
      },
      {
        "text": "“谁一起去？先凑齐人，别去了才找不到座。”",
        "next": "D26-r0015"
      },
      {
        "text": "老师推荐应该上得快，出门前就不看返校时间了。",
        "failure": "面馆开始忙了，晚自习却没收到这份时间保证。"
      }
    ]
  },
  {
    "id": "D26-r0013",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103,
      204,
      206
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "text": "“去吃老师说的面？把晚自习的时间看好，一起走。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D26-r0014"
  },
  {
    "id": "D26-r0014",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "我去，吃完赶回来。",
    "character": "c27",
    "next": "D26-0016"
  },
  {
    "id": "D26-r0015",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103,
      204,
      206
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "text": "“谁一起去？先凑齐人，别去了才找不到座。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D26-r0016"
  },
  {
    "id": "D26-r0016",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "我也去，帮我留个位置。",
    "character": "c27",
    "next": "D26-0016"
  },
  {
    "id": "D26-0016",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "text": "面店",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-0017"
  },
  {
    "id": "D26-0017",
    "kind": "line",
    "source": "转述",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "旁白",
    "text": "七班、十八班加起来二十多人，把小店挤得满满当当。少数不晚自习的人也来了。",
    "character": "",
    "next": "D26-0018"
  },
  {
    "id": "D26-0018",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "李沛霖",
    "text": "这桌齐了吗？那边再挪一个凳子。",
    "character": "c05",
    "next": "D26-0019"
  },
  {
    "id": "D26-0019",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "张沐雷",
    "text": "我等了快三十分钟，面还没上。",
    "character": "c27",
    "next": "D26-0020"
  },
  {
    "id": "D26-0020",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "贾诺基",
    "text": "先催一下，别耽误晚自习。",
    "character": "c28",
    "next": "D26-0021"
  },
  {
    "id": "D26-0021",
    "kind": "line",
    "source": "转述",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "旁白",
    "text": "面一碗一碗上。等人的时间，比课堂里推荐一碗面长多了。",
    "character": "",
    "next": "D26-r0023"
  },
  {
    "id": "D26-r0023",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "面店",
    "background": "noodle",
    "speaker": "李沛霖",
    "text": "合个影，回去发朋友圈，告诉老师我们真来了。",
    "character": "c05",
    "next": "D26-0023"
  },
  {
    "id": "D26-0023",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "text": "赶回",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-0024"
  },
  {
    "id": "D26-0024",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "speaker": "张沐雷",
    "text": "终于吃完，快回！",
    "character": "c27",
    "next": "D26-0025"
  },
  {
    "id": "D26-0025",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "speaker": "李沛霖",
    "text": "只晚几分钟也叫晚，脚下别停。",
    "character": "c05",
    "next": "interactive-D26-0025"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-0025",
    "kind": "choice",
    "text": "只晚几分钟也要赶，我怎样招呼？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先别聊面了，回班这段走快点。",
        "next": "interactive-D26-0025-say1"
      },
      {
        "text": "东西拿齐，人齐了就回，别再续坐。",
        "next": "interactive-D26-0025-say2"
      },
      {
        "text": "已经只晚一点，再等一碗也差不多。",
        "failure": "几分钟听着很小，第二碗却把它拉长了。"
      },
      {
        "text": "先发朋友圈证明来了，回去等会儿。",
        "failure": "朋友圈准时发出，晚自习却没等到本人。"
      },
      {
        "text": "人少先走就行，落下谁回去群里问。",
        "failure": "前一队先回了班，后面的人却少了同行的照应。"
      }
    ]
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-0025-say1",
    "kind": "line",
    "text": "先别聊面了，回班这段走快点。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D26-0025-reply1"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-0025-reply1",
    "kind": "line",
    "text": "走，别落人。",
    "speaker": "张沐雷",
    "character": "c27",
    "next": "D26-r0027"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-0025-say2",
    "kind": "line",
    "text": "东西拿齐，人齐了就回，别再续坐。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D26-0025-reply2"
  },
  {
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "source": "补写",
    "id": "interactive-D26-0025-reply2",
    "kind": "line",
    "text": "先看谁还没出门。",
    "speaker": "张沐雷",
    "character": "c27",
    "next": "D26-r0027"
  },
  {
    "id": "D26-r0027",
    "kind": "line",
    "source": "转述",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "赶回",
    "background": "gate",
    "speaker": "旁白",
    "text": "一行人气喘吁吁地赶回教室，晚自习已经开始了几分钟，坐下以后还没喘匀。",
    "character": "",
    "next": "D26-0027"
  },
  {
    "id": "D26-0027",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "text": "朋友圈",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "chat",
      "title": "11月16日 · 朋友圈",
      "lines": [
        "21:19–21:21 聚餐照片",
        "22:32 青年才俊，社会栋梁"
      ]
    },
    "next": "D26-r0029"
  },
  {
    "id": "D26-r0029",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "战老师",
    "text": "艾玛，总算看到大合影了！粗算两个班二十五个学生，还有几个老师，都是我推荐的。",
    "character": "c48",
    "next": "D26-0029"
  },
  {
    "id": "D26-0029",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "一帮青年才俊，社会栋梁。",
    "character": "c47",
    "next": "D26-0030"
  },
  {
    "id": "D26-0030",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "贾诺基",
    "text": "二十一点多的照片，二十二点三十二的评论。面店散场，朋友圈还没散。",
    "character": "c28",
    "next": "D26-r0032"
  },
  {
    "id": "D26-r0032",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "看得我明天都想吃了。",
    "character": "c47",
    "next": "D26-r0033"
  },
  {
    "id": "D26-r0033",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "近日我司侦查人员观测到高三七班有集体外出活动迹象，决定主动出击，一网打尽。",
    "character": "c16",
    "next": "D26-r0034"
  },
  {
    "id": "D26-r0034",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "刚才是社会栋梁，现在又被一网打尽了。",
    "character": "c05",
    "next": "D26-r0035"
  },
  {
    "id": "D26-r0035",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "面还可以续。下回去我再加。",
    "character": "c15",
    "next": "D26-r0036"
  },
  {
    "id": "D26-r0036",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "你这碗总也吃不完？",
    "character": "c05",
    "next": "D26-r0037"
  },
  {
    "id": "D26-r0037",
    "kind": "line",
    "source": "补写",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "吃完了再续，不是一碗没吃完。",
    "character": "c15",
    "next": "D26-r0038"
  },
  {
    "id": "D26-r0038",
    "kind": "line",
    "source": "转述",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "朋友圈",
    "background": "classroom",
    "speaker": "旁白",
    "text": "后来我和树苡常一起去。我喜欢拉条子，他喜欢能续的汤面，吃过还想再添；等面时，我们就一起玩皇室战争。",
    "character": "",
    "next": "D26-r0049"
  },
  {
    "id": "D26-r0049",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0050"
  },
  {
    "id": "D26-r0050",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "距离高考仅剩 205 天。距离听口考试仅剩 30 天。",
    "character": "",
    "next": "D26-r0051"
  },
  {
    "id": "D26-r0051",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0052"
  },
  {
    "id": "D26-r0052",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "在委员长的课堂上，天下无事。",
    "character": "",
    "next": "D26-r0053"
  },
  {
    "id": "D26-r0053",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生物（CC）：人大附中雷学宗师、著名生物学家、生态学家、分子生物学家、遗传学家、逻辑学家、分析鉴赏师、画家、修辞学家、小说家、各语种翻译家雷杨今日于课堂上猛烈抨击全程指导，以十六字“不合逻",
    "character": "",
    "next": "D26-r0054"
  },
  {
    "id": "D26-r0054",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "辑、内容冗杂、垃圾信息、令人恼火”深深地道出了自己的苦衷，并与 zyc 提前串通，一唱一和，希望以“补充与拓展”挖空版取代全程指导，打响了生物雷学化的第一枪。",
    "character": "",
    "next": "D26-r0055"
  },
  {
    "id": "D26-r0055",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0056"
  },
  {
    "id": "D26-r0056",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "天下太平。",
    "character": "",
    "next": "D26-r0057"
  },
  {
    "id": "D26-r0057",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0058"
  },
  {
    "id": "D26-r0058",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "贾生已与余等同窗十日，受清池之洗濯，还与诸生无异，别无二样。",
    "character": "",
    "next": "D26-r0059"
  },
  {
    "id": "D26-r0059",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今蕾子于堂上授诸生红楼之学问，言至黛玉进府之时，贾生率尔而对曰：“林黛玉风雪进贾府。”蕾子哂之，曰：“汝来尚才十日，已全然身备七班君子之气。七氏染缸之威力可知矣。”",
    "character": "",
    "next": "D26-r0060"
  },
  {
    "id": "D26-r0060",
    "kind": "line",
    "source": "原文",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "English：朱考儒绘画作品展。",
    "character": "",
    "next": "D26-r0061"
  },
  {
    "id": "D26-r0061",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午间新闻：震惊，满者推特账号被扒，或身败名裂！",
    "character": "",
    "next": "D26-r0062"
  },
  {
    "id": "D26-r0062",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "11月16日中午，众人破译满者（徐子涵）非法持有的推特（某外网）账号，发现其浏览内容不堪入目，竟涉＊＊＊＊信息，或身败名裂。",
    "character": "",
    "next": "D26-r0063"
  },
  {
    "id": "D26-r0063",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "text": "体育 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0064"
  },
  {
    "id": "D26-r0064",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "宣判满者（徐子涵）罚跑4¾ − 2×10¹⁰（共计 −19999999995.25圈）。",
    "character": "",
    "next": "D26-r0065"
  },
  {
    "id": "D26-r0065",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "立即执行，罚完为止。",
    "character": "",
    "next": "D26-r0066"
  },
  {
    "id": "D26-r0066",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "法官：咸中某。11月16日。",
    "character": "",
    "next": "D26-r0067"
  },
  {
    "id": "D26-r0067",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-r0068"
  },
  {
    "id": "D26-r0068",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "能者名言警句集锦。",
    "character": "",
    "next": "D26-r0069"
  },
  {
    "id": "D26-r0069",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "哪个王子亲吻了满者？让他复活的。",
    "character": "",
    "next": "D26-r0070"
  },
  {
    "id": "D26-r0070",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "16＋9得几呀？",
    "character": "",
    "next": "D26-r0071"
  },
  {
    "id": "D26-r0071",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "你怎么那么喜欢三级的？我连二级的都不用。",
    "character": "",
    "next": "D26-r0072"
  },
  {
    "id": "D26-r0072",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这道题是求e吗？我看看答案。",
    "character": "",
    "next": "D26-r0073"
  },
  {
    "id": "D26-r0073",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "厉害得从别人嘴里说出来，我什么时候说自己厉害了？",
    "character": "",
    "next": "D26-r0074"
  },
  {
    "id": "D26-r0074",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "自习→数学",
    "character": "",
    "next": "D26-r0075"
  },
  {
    "id": "D26-r0075",
    "kind": "line",
    "source": "原文",
    "page": 103,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "破天荒的大事件（应到47人，实到45人）。",
    "character": "",
    "next": "D27-date"
  },
  {
    "id": "D27-date",
    "kind": "date",
    "source": "演出",
    "page": 104,
    "pages": [
      104,
      188,
      189
    ],
    "day": "D27",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-17",
    "text": "一碗面打赌",
    "pov": "c29",
    "character": "",
    "next": "D27-r0001"
  },
  {
    "id": "D27-r0001",
    "kind": "portrait",
    "source": "演出",
    "page": 104,
    "pages": [
      104,
      188,
      189
    ],
    "day": "D27",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "一碗面打赌",
    "pov": "c29",
    "character": "c29",
    "speaker": "张瑞麒",
    "next": "D27-0002"
  },
  {
    "id": "D27-0002",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "text": "一碗面打赌",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D27-0003"
  },
  {
    "id": "D27-0003",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "speaker": "战老师",
    "text": "完整算出这道圆锥曲线，你们给我一碗面；反过来，我请大家。",
    "character": "c48",
    "next": "D27-0005"
  },
  {
    "id": "D27-0005",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "不看答案，过程写全，只用一块黑板，不打草稿。",
    "character": "c29",
    "next": "D27-0006"
  },
  {
    "id": "D27-0006",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "speaker": "贾诺基",
    "text": "八块八划掉，十八块八。规则比菜单还认真。",
    "character": "c28",
    "next": "D27-r0006"
  },
  {
    "id": "D27-r0006",
    "kind": "line",
    "source": "转述",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师把加号看成减号。同学们倒戈似的帮着提醒，他最终免了请全班面的开销。",
    "character": "",
    "next": "D27-0008"
  },
  {
    "id": "D27-0008",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "一碗面打赌",
    "background": "classroom",
    "speaker": "战老师",
    "text": "能力强，眼力差。",
    "character": "c48",
    "next": "D27-r0052"
  },
  {
    "id": "D27-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D27-r0053"
  },
  {
    "id": "D27-r0053",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D27-r0054"
  },
  {
    "id": "D27-r0054",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "能者与众生打赌：“如果我能在课堂上完整演算出这道圆锥曲线大题，我便应得众生赉一碗面（￥8.8，18.8￥）；反之，我请众生各一碗面（18.8￥）。”",
    "character": "",
    "next": "D27-r0055"
  },
  {
    "id": "D27-r0055",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "挑战内容：完整演算出一道圆锥曲线大题。",
    "character": "",
    "next": "D27-r0056"
  },
  {
    "id": "D27-r0056",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "附加条件：",
    "character": "",
    "next": "D27-r0057"
  },
  {
    "id": "D27-r0057",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 禁止观看手中的答案。",
    "character": "",
    "next": "D27-r0058"
  },
  {
    "id": "D27-r0058",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 必须完整列出所有计算过程。",
    "character": "",
    "next": "D27-r0059"
  },
  {
    "id": "D27-r0059",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "3. 只能用一块黑板。",
    "character": "",
    "next": "D27-r0060"
  },
  {
    "id": "D27-r0060",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "4. 不准打草稿。",
    "character": "",
    "next": "D27-r0061"
  },
  {
    "id": "D27-r0061",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "在发现自己能力极强，而眼力极差（＋⇒－）后，在众生倒戈式地帮助下，能者终免遭破费之灾。",
    "character": "",
    "next": "D27-r0062"
  },
  {
    "id": "D27-r0062",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D27-r0063"
  },
  {
    "id": "D27-r0063",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "周远持立大功——他以激昂的文字、优美的语言成功激发起蕾子阅读《三体》的兴趣。",
    "character": "",
    "next": "D27-r0064"
  },
  {
    "id": "D27-r0064",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "番外：",
    "character": "",
    "next": "D27-r0065"
  },
  {
    "id": "D27-r0065",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "请假的同学请举一下手。",
    "character": "c03",
    "next": "D27-r0066"
  },
  {
    "id": "D27-r0066",
    "kind": "line",
    "source": "原文",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "晚自习巡课老师看着班级板报上的“抬头雁”三字，陷入了沉思……",
    "character": "",
    "next": "D27-r0008"
  },
  {
    "id": "D27-r0008",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "text": "飞出来的因式",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D27-r0009"
  },
  {
    "id": "D27-r0009",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "大屏上这个视频，就是战老师讲因式分解。",
    "character": "c29",
    "next": "D27-r0010"
  },
  {
    "id": "D27-r0010",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "speaker": "战老师",
    "text": "因式分解之题，小菜一碟。我口算。",
    "character": "c48",
    "next": "D27-r0011"
  },
  {
    "id": "D27-r0011",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "瑞兽出了主意，我做了游戏。多项式在下面，因式飞上来，选对的划；漏掉、划错都扣血。",
    "character": "c26",
    "next": "interactive-D27-r0011"
  },
  {
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0011",
    "kind": "choice",
    "text": "因式从下往上飞，我怎样问软件？",
    "speaker": "张瑞麒",
    "character": "c29",
    "options": [
      {
        "text": "你先演示怎么判，错在哪里也给我们看。",
        "next": "interactive-D27-r0011-say1"
      },
      {
        "text": "瑞兽出主意，你写出来，这两步都得留。",
        "next": "interactive-D27-r0011-say2"
      },
      {
        "text": "只看特效够了，规则大家自己猜。",
        "failure": "因式飞得很漂亮，扣分却没人知道为什么。"
      },
      {
        "text": "把这个当唯一复习法，纸上不用再算。",
        "failure": "屏幕里划得很快，笔下却没找到拆开的因式。"
      }
    ]
  },
  {
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0011-say1",
    "kind": "line",
    "text": "你先演示怎么判，错在哪里也给我们看。",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "interactive-D27-r0011-reply1"
  },
  {
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0011-reply1",
    "kind": "line",
    "text": "划错和漏掉都算。",
    "speaker": "贾盛元",
    "character": "c26",
    "next": "D27-r0012"
  },
  {
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0011-say2",
    "kind": "line",
    "text": "瑞兽出主意，你写出来，这两步都得留。",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "interactive-D27-r0011-reply2"
  },
  {
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0011-reply2",
    "kind": "line",
    "text": "不是一下就有的。",
    "speaker": "贾盛元",
    "character": "c26",
    "next": "D27-r0012"
  },
  {
    "id": "D27-r0012",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "录上屏幕，数学课前给老师试试。",
    "character": "c29",
    "next": "D27-r0013"
  },
  {
    "id": "D27-r0013",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 因式分解课",
    "period": "飞出来的因式",
    "background": "classroom",
    "speaker": "战老师",
    "text": "那我来看看。",
    "character": "c48",
    "next": "D27-r0014"
  },
  {
    "id": "D27-r0014",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "text": "贴吧在课前打开",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D27-r0015"
  },
  {
    "id": "D27-r0015",
    "kind": "line",
    "source": "转述",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "speaker": "旁白",
    "text": "课前大屏又开了与老师有关的内容，这次是贴吧讨论。",
    "character": "",
    "next": "D27-r0016"
  },
  {
    "id": "D27-r0016",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "speaker": "同学",
    "text": "这里说您不负责，还有人说您不好好备课。",
    "character": "",
    "next": "D27-r0017"
  },
  {
    "id": "D27-r0017",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "speaker": "战老师",
    "text": "我以前带第一实验班，有人学到最后连定理都没记住。我让基础不牢的抄五遍，有人就找领导，说题难，还罚学生。",
    "character": "c48",
    "next": "D27-r0018"
  },
  {
    "id": "D27-r0018",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "不会的地方问您，您一直都答。五遍定理，和有些作业比也不多。",
    "character": "c29",
    "next": "D27-r0019"
  },
  {
    "id": "D27-r0019",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 2022年4月8日",
    "period": "贴吧在课前打开",
    "background": "classroom",
    "speaker": "战老师",
    "text": "领导也知道怎么回事。",
    "character": "c48",
    "next": "D27-r0020"
  },
  {
    "id": "D27-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "text": "十分钟与两天",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D27-r0021"
  },
  {
    "id": "D27-r0021",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "一个备课十分钟就能上好一堂课的人，和一个备课两天才能上一节课的人，你愿听谁讲？",
    "character": "c48",
    "next": "D27-r0022"
  },
  {
    "id": "D27-r0022",
    "kind": "choice",
    "source": "补写",
    "page": 104,
    "pages": [
      104,
      188,
      189
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "text": "老师问到这里，我怎么接",
    "speaker": "张瑞麒",
    "character": "c29",
    "options": [
      {
        "text": "“听讲得明白的。备多久，得看上课的结果。”",
        "next": "D27-r0023"
      },
      {
        "text": "“十分钟能讲好，那是效率高；课堂可没少内容。”",
        "next": "D27-r0025"
      },
      {
        "text": "备了两天肯定比十分钟的好，课堂结果不用再看。",
        "failure": "备课时间坐满了，效率却没收到课堂的验收。"
      }
    ]
  },
  {
    "id": "D27-r0023",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104,
      188,
      189
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "text": "“听讲得明白的。备多久，得看上课的结果。”",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "D27-r0024"
  },
  {
    "id": "D27-r0024",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "你们是看得到课堂结果的。",
    "character": "c48",
    "next": "D27-r0027"
  },
  {
    "id": "D27-r0025",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104,
      188,
      189
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "text": "“十分钟能讲好，那是效率高；课堂可没少内容。”",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "D27-r0026"
  },
  {
    "id": "D27-r0026",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "效率就该放在这儿看。",
    "character": "c48",
    "next": "D27-r0027"
  },
  {
    "id": "D27-r0027",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "时间短，不等于不负责。更厉害的老师拿没写过的卷子，也能讲得有条有理。",
    "character": "c48",
    "next": "D27-r0028"
  },
  {
    "id": "D27-r0028",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "同学",
    "text": "还有人嫌您提前下课。",
    "character": "",
    "next": "D27-r0029"
  },
  {
    "id": "D27-r0029",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "拖堂是一种无能的表现。我有什么时候给你们少讲东西了吗？",
    "character": "c48",
    "next": "D27-r0030"
  },
  {
    "id": "D27-r0030",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "没有。三十五分钟讲完任务，剩下的能自己练。",
    "character": "c29",
    "next": "D27-r0031"
  },
  {
    "id": "D27-r0031",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "战老师",
    "text": "提高课堂效率。自由了，怎么往灯塔的方向不走偏？得先把拐棍扔了，学会自己走路。",
    "character": "c48",
    "next": "D27-r0032"
  },
  {
    "id": "D27-r0032",
    "kind": "line",
    "source": "转述",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "同一回忆",
    "period": "十分钟与两天",
    "background": "classroom",
    "speaker": "旁白",
    "text": "几轮质疑讲完，同学们记住了“有能”。能者之名，从这堂演讲传开。",
    "character": "",
    "next": "D27-r0033"
  },
  {
    "id": "D27-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "text": "右手二十分钟",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D27-r0034"
  },
  {
    "id": "D27-r0034",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "战老师",
    "text": "建右手系，用右手。你们做一遍。",
    "character": "c48",
    "next": "D27-r0035"
  },
  {
    "id": "D27-r0035",
    "kind": "line",
    "source": "转述",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "旁白",
    "text": "右手螺旋姿势练了二十多分钟，几个人还被叫到讲台示范。",
    "character": "",
    "next": "D27-r0036"
  },
  {
    "id": "D27-r0036",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "同学",
    "text": "右手砸在左手上，像不像行礼？",
    "character": "",
    "next": "D27-r0037"
  },
  {
    "id": "D27-r0037",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "战老师",
    "text": "格局打开。",
    "character": "c48",
    "next": "D27-r0038"
  },
  {
    "id": "D27-r0038",
    "kind": "line",
    "source": "转述",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师张开右手。螺旋的动作和这句口头禅合起来，成了同学们的能礼。",
    "character": "",
    "next": "D27-r0039"
  },
  {
    "id": "D27-r0039",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "手势会了，题可还得会。",
    "character": "c29",
    "next": "interactive-D27-r0039"
  },
  {
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0039",
    "kind": "choice",
    "text": "右手练了二十分钟，我怎么接？",
    "speaker": "张瑞麒",
    "character": "c29",
    "options": [
      {
        "text": "手势得记，题上的对应也得自己做。",
        "next": "interactive-D27-r0039-say1"
      },
      {
        "text": "先看这一种怎么用，不能只练姿势。",
        "next": "interactive-D27-r0039-say2"
      },
      {
        "text": "手会动就算会解，过程先不写。",
        "failure": "右手很熟练，纸上的那一步却没被带动。"
      },
      {
        "text": "只记左右方向，题换了也照着比。",
        "failure": "手势没变，新的对象却早换了方向。"
      }
    ]
  },
  {
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0039-say1",
    "kind": "line",
    "text": "手势得记，题上的对应也得自己做。",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "interactive-D27-r0039-reply1"
  },
  {
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0039-reply1",
    "kind": "line",
    "text": "别只在空中比。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D27-0016"
  },
  {
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0039-say2",
    "kind": "line",
    "text": "先看这一种怎么用，不能只练姿势。",
    "speaker": "张瑞麒",
    "character": "c29",
    "next": "interactive-D27-r0039-reply2"
  },
  {
    "day": "D27",
    "context": "回忆 · 高二空间直角坐标系",
    "period": "右手二十分钟",
    "background": "classroom",
    "page": 104,
    "pages": [
      104
    ],
    "source": "补写",
    "id": "interactive-D27-r0039-reply2",
    "kind": "line",
    "text": "落到条件上。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D27-0016"
  },
  {
    "id": "D27-0016",
    "kind": "scene",
    "source": "演出",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "今天下课",
    "background": "classroom",
    "text": "今天下课",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D27-0017"
  },
  {
    "id": "D27-0017",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "今天下课",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "请假的同学请举手。",
    "character": "c03",
    "next": "D27-0018"
  },
  {
    "id": "D27-0018",
    "kind": "line",
    "source": "补写",
    "page": 104,
    "pages": [
      104
    ],
    "day": "D27",
    "context": "现实",
    "period": "今天下课",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "如果人在这里举手，这假到底请到哪里了？",
    "character": "c29",
    "next": "N40-date"
  },
  {
    "id": "N40-date",
    "kind": "date",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-21",
    "text": "窗台798",
    "pov": "c21",
    "character": "",
    "next": "N40-r0059"
  },
  {
    "id": "N40-r0059",
    "kind": "portrait",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "窗台798",
    "pov": "c21",
    "character": "c21",
    "speaker": "李玉",
    "next": "N40-r0024"
  },
  {
    "id": "N40-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "text": "窗台被发现",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "paper",
      "title": "窗台 · 798艺术品",
      "lines": [
        "初版：3瓶 / 2瓶 / 1瓶",
        "后添：高举的双手、弯箭头",
        "棕笔改良版"
      ]
    },
    "next": "N40-r0025"
  },
  {
    "id": "N40-r0025",
    "kind": "line",
    "source": "转述",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "speaker": "旁白",
    "text": "几列饮料瓶高低错落，放在窗台上。孙老师看见，大声慨叹。同学转头又去改造。",
    "character": "",
    "next": "N40-r0026"
  },
  {
    "id": "N40-r0026",
    "kind": "line",
    "source": "补写",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "speaker": "李玉",
    "text": "原来三、二、一，像个台阶。",
    "character": "c21",
    "next": "interactive-N40-r0026"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0026",
    "kind": "choice",
    "text": "三二一瓶阵放在窗台，我怎么接？",
    "speaker": "李玉",
    "character": "c21",
    "options": [
      {
        "text": "先把现在这个形状画下，再看后来添了什么。",
        "next": "interactive-N40-r0026-say1"
      },
      {
        "text": "瓶阵和那两只手各有来路，都留着。",
        "next": "interactive-N40-r0026-say2"
      },
      {
        "text": "后来好看，早先三二一就不必记。",
        "failure": "成品站上窗台，起步的台阶却被拆掉。"
      },
      {
        "text": "把几次改版全画成第一天就有。",
        "failure": "双手举得很早，时间却被一起举乱了。"
      }
    ]
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0026-say1",
    "kind": "line",
    "text": "先把现在这个形状画下，再看后来添了什么。",
    "speaker": "李玉",
    "character": "c21",
    "next": "interactive-N40-r0026-reply1"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0026-reply1",
    "kind": "line",
    "text": "台阶没有被后来的改版盖住。",
    "speaker": "旁白",
    "character": "",
    "next": "N40-r0027"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0026-say2",
    "kind": "line",
    "text": "瓶阵和那两只手各有来路，都留着。",
    "speaker": "李玉",
    "character": "c21",
    "next": "interactive-N40-r0026-reply2"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0026-reply2",
    "kind": "line",
    "text": "画面终于接上了变化。",
    "speaker": "旁白",
    "character": "",
    "next": "N40-r0027"
  },
  {
    "id": "N40-r0027",
    "kind": "line",
    "source": "补写",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "speaker": "同学",
    "text": "再添这里，叫798艺术品。",
    "character": "",
    "next": "N40-r0028"
  },
  {
    "id": "N40-r0028",
    "kind": "line",
    "source": "转述",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "窗台被发现",
    "background": "classroom-window",
    "speaker": "旁白",
    "text": "高处又添两只举起的手，倒置的瓶子与弯箭头也补在图上。初版和棕笔改良版留下两个层次。",
    "character": "",
    "next": "N40-r0029"
  },
  {
    "id": "N40-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "text": "吉野家",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N40-r0030"
  },
  {
    "id": "N40-r0030",
    "kind": "line",
    "source": "转述",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "speaker": "旁白",
    "text": "语文又给同学添特定称号，周子尧成了章鱼小丸子贩卖者。瓶子没有卖饮料，语言里倒先开了店。",
    "character": "",
    "next": "N40-r0031"
  },
  {
    "id": "N40-r0031",
    "kind": "line",
    "source": "原文",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "speaker": "李玉",
    "text": "798姓什么？",
    "character": "c21",
    "next": "interactive-N40-r0031"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0031",
    "kind": "choice",
    "text": "798姓什么，我怎样接这句玩笑？",
    "speaker": "李玉",
    "character": "c21",
    "options": [
      {
        "text": "先别给名字乱安人，瓶子为什么摆成这样先说。",
        "next": "interactive-N40-r0031-say1"
      },
      {
        "text": "这句也留边上，画还是按刚才的样子画。",
        "next": "interactive-N40-r0031-say2"
      },
      {
        "text": "数字肯定是人名缩写，我直接填一个。",
        "failure": "窗台有了署名，瓶阵却不认识这位作者。"
      },
      {
        "text": "只留这个问题，原来的摆法不写了。",
        "failure": "问题很响，答案的台阶却没被留下。"
      }
    ]
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0031-say1",
    "kind": "line",
    "text": "先别给名字乱安人，瓶子为什么摆成这样先说。",
    "speaker": "李玉",
    "character": "c21",
    "next": "interactive-N40-r0031-reply1"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0031-reply1",
    "kind": "line",
    "text": "玩笑从姓名回到了窗台。",
    "speaker": "旁白",
    "character": "",
    "next": "N40-r0032"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0031-say2",
    "kind": "line",
    "text": "这句也留边上，画还是按刚才的样子画。",
    "speaker": "李玉",
    "character": "c21",
    "next": "interactive-N40-r0031-reply2"
  },
  {
    "day": "N40",
    "context": "现实",
    "period": "吉野家",
    "background": "classroom",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "source": "补写",
    "id": "interactive-N40-r0031-reply2",
    "kind": "line",
    "text": "数字和瓶阵没有互相顶替。",
    "speaker": "旁白",
    "character": "",
    "next": "N40-r0032"
  },
  {
    "id": "N40-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "生物三问",
    "background": "classroom",
    "text": "生物三问",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N40-r0033"
  },
  {
    "id": "N40-r0033",
    "kind": "line",
    "source": "补写",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "生物三问",
    "background": "classroom",
    "speaker": "同学",
    "text": "为何择生物而学？何人生物高分？如何学生物？",
    "character": "",
    "next": "N40-r0034"
  },
  {
    "id": "N40-r0034",
    "kind": "line",
    "source": "转述",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "生物三问",
    "background": "classroom",
    "speaker": "旁白",
    "text": "大家不理解标准答案，化学限时接着拷打。另一边却有祝贺：启元生物班级第一，拿到110+。",
    "character": "",
    "next": "N40-r0035"
  },
  {
    "id": "N40-r0035",
    "kind": "line",
    "source": "补写",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "生物三问",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "先把这份卷子收好。",
    "character": "xu",
    "next": "N40-r0036"
  },
  {
    "id": "N40-r0036",
    "kind": "line",
    "source": "补写",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "生物三问",
    "background": "classroom",
    "speaker": "李玉",
    "text": "窗台和成绩，一个画下来，一个记下来，今天都没漏。",
    "character": "c21",
    "next": "N40-r0038"
  },
  {
    "id": "N40-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 105,
    "pages": [
      105,
      106
    ],
    "day": "N40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N40-r0039"
  }
];
export default data;
