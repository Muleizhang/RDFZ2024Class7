import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D29-r0022",
    "kind": "line",
    "source": "补写",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "战老师",
    "text": "鹤鸣呢？",
    "character": "c48",
    "next": "D29-r0023"
  },
  {
    "id": "D29-r0023",
    "kind": "line",
    "source": "补写",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "同学",
    "text": "又不在。可数学成绩还在班里最前。",
    "character": "",
    "next": "D29-r0024"
  },
  {
    "id": "D29-r0024",
    "kind": "line",
    "source": "补写",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "同学",
    "text": "院士真是您的得意门生。",
    "character": "",
    "next": "D29-r0025"
  },
  {
    "id": "D29-r0025",
    "kind": "line",
    "source": "转述",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "旁白",
    "text": "偶尔他真坐在数学课上，老师反而开口求签名。",
    "character": "",
    "next": "D29-r0026"
  },
  {
    "id": "D29-r0026",
    "kind": "line",
    "source": "补写",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "战老师",
    "text": "院士，签个名？",
    "character": "c48",
    "next": "interactive-D29-r0026"
  },
  {
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "page": 109,
    "pages": [
      109
    ],
    "source": "补写",
    "id": "interactive-D29-r0026",
    "kind": "choice",
    "text": "老师叫“院士”签名，我怎样应声？",
    "speaker": "戚洪硕",
    "character": "c13",
    "options": [
      {
        "text": "签名先给在页边，题我还得自己做。",
        "next": "interactive-D29-r0026-say1"
      },
      {
        "text": "这个称呼先记着，您刚才那句我接着听。",
        "next": "interactive-D29-r0026-say2"
      },
      {
        "text": "叫了院士，这道就不用再解释了吧。",
        "failure": "称号很高，题目却还是在等过程。"
      },
      {
        "text": "同学也跟着叫，那我就当正式任命。",
        "failure": "玩笑领到了证书，真正的院士名单却没改一字。"
      }
    ]
  },
  {
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "page": 109,
    "pages": [
      109
    ],
    "source": "补写",
    "id": "interactive-D29-r0026-say1",
    "kind": "line",
    "text": "签名先给在页边，题我还得自己做。",
    "speaker": "戚洪硕",
    "character": "c13",
    "next": "interactive-D29-r0026-reply1"
  },
  {
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "page": 109,
    "pages": [
      109
    ],
    "source": "补写",
    "id": "interactive-D29-r0026-reply1",
    "kind": "line",
    "text": "别把称号当答案。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D29-r0027"
  },
  {
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "page": 109,
    "pages": [
      109
    ],
    "source": "补写",
    "id": "interactive-D29-r0026-say2",
    "kind": "line",
    "text": "这个称呼先记着，您刚才那句我接着听。",
    "speaker": "戚洪硕",
    "character": "c13",
    "next": "interactive-D29-r0026-reply2"
  },
  {
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "page": 109,
    "pages": [
      109
    ],
    "source": "补写",
    "id": "interactive-D29-r0026-reply2",
    "kind": "line",
    "text": "书翻回来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D29-r0027"
  },
  {
    "id": "D29-r0027",
    "kind": "line",
    "source": "补写",
    "page": 109,
    "pages": [
      109
    ],
    "day": "D29",
    "context": "回忆 · 数学课",
    "period": "得意门生",
    "background": "classroom",
    "speaker": "黄鹤鸣",
    "text": "我一来，待遇怎么还变了。",
    "character": "c10",
    "next": "N42-date"
  },
  {
    "id": "N42-date",
    "kind": "date",
    "source": "演出",
    "page": 110,
    "pages": [
      110,
      237
    ],
    "day": "N42",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-28",
    "text": "冰与火的水池",
    "pov": "c11",
    "character": "",
    "next": "N42-r0071"
  },
  {
    "id": "N42-r0071",
    "kind": "portrait",
    "source": "演出",
    "page": 110,
    "pages": [
      110,
      237
    ],
    "day": "N42",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "冰与火的水池",
    "pov": "c11",
    "character": "c11",
    "speaker": "陈熙",
    "next": "N42-r0017"
  },
  {
    "id": "N42-r0017",
    "kind": "scene",
    "source": "演出",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "写字也被阻",
    "background": "classroom",
    "text": "写字也被阻",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0018"
  },
  {
    "id": "N42-r0018",
    "kind": "line",
    "source": "补写",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "写字也被阻",
    "background": "classroom",
    "speaker": "陈熙",
    "text": "我想动笔，戚公子先拦。那把本子传你，行吗？",
    "character": "c11",
    "next": "N42-r0019"
  },
  {
    "id": "N42-r0019",
    "kind": "line",
    "source": "补写",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "写字也被阻",
    "background": "classroom",
    "speaker": "戚洪硕",
    "text": "你接着记。",
    "character": "c13",
    "next": "N42-r0020"
  },
  {
    "id": "N42-r0020",
    "kind": "line",
    "source": "转述",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "写字也被阻",
    "background": "classroom",
    "speaker": "旁白",
    "text": "听口机房暖得使人困，焉家祎说宜人，史官只觉得一人之心千万人之心。",
    "character": "",
    "next": "N42-r0021"
  },
  {
    "id": "N42-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "text": "打更与听课",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0022"
  },
  {
    "id": "N42-r0022",
    "kind": "line",
    "source": "转述",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "speaker": "旁白",
    "text": "数学课，咸公子左右声响似打更，邻座都劝。石杨也开口。",
    "character": "",
    "next": "N42-r0023"
  },
  {
    "id": "N42-r0023",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "speaker": "石杨",
    "text": "听课。",
    "character": "c36",
    "next": "interactive-N42-r0023"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0023",
    "kind": "choice",
    "text": "“听课”把玩笑拉回来，我怎么接？",
    "speaker": "陈熙",
    "character": "c11",
    "options": [
      {
        "text": "先听课，刚才那声下课再接。",
        "next": "interactive-N42-r0023-say1"
      },
      {
        "text": "本子放好，我把没跟上的补上。",
        "next": "interactive-N42-r0023-say2"
      },
      {
        "text": "一边打更一边听，不影响吧。",
        "failure": "时间敲得很准，老师的话却被敲散了一句。"
      },
      {
        "text": "先把这个梗玩完，题目等铃响再说。",
        "failure": "笑话到了结尾，课堂也先到了结尾。"
      }
    ]
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0023-say1",
    "kind": "line",
    "text": "先听课，刚才那声下课再接。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N42-r0023-reply1"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0023-reply1",
    "kind": "line",
    "text": "看前面这步。",
    "speaker": "石杨",
    "character": "c36",
    "next": "N42-r0024"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0023-say2",
    "kind": "line",
    "text": "本子放好，我把没跟上的补上。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N42-r0023-reply2"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0023-reply2",
    "kind": "line",
    "text": "别又只顾打更。",
    "speaker": "石杨",
    "character": "c36",
    "next": "N42-r0024"
  },
  {
    "id": "N42-r0024",
    "kind": "line",
    "source": "转述",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他转手举起默写手册看，大家又笑。",
    "character": "",
    "next": "N42-r0025"
  },
  {
    "id": "N42-r0025",
    "kind": "line",
    "source": "补写",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "打更与听课",
    "background": "classroom",
    "speaker": "陈熙",
    "text": "你这两个字，是提醒别人，还是提醒自己？",
    "character": "c11",
    "next": "N42-r0026"
  },
  {
    "id": "N42-r0026",
    "kind": "scene",
    "source": "演出",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "text": "两池",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0027"
  },
  {
    "id": "N42-r0027",
    "kind": "line",
    "source": "转述",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "speaker": "旁白",
    "text": "男卫生间左右两池，冬日一边冰冷，一边烫得像火。洗手的人左右试了试。",
    "character": "",
    "next": "N42-r0028"
  },
  {
    "id": "N42-r0028",
    "kind": "line",
    "source": "补写",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "speaker": "陈熙",
    "text": "千年寒冰，焚天之火。中间那种水去哪了？",
    "character": "c11",
    "next": "interactive-N42-r0028"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0028",
    "kind": "choice",
    "text": "两个水池一个冷一个烫，我怎么接？",
    "speaker": "陈熙",
    "character": "c11",
    "options": [
      {
        "text": "先各试一下，别以为这一边和另一边一样。",
        "next": "interactive-N42-r0028-say1"
      },
      {
        "text": "中间那种水没找着，这句得记。",
        "next": "interactive-N42-r0028-say2"
      },
      {
        "text": "刚才那边凉，这边也可以直接伸手。",
        "failure": "一池的温度替另一池作证，手却先发现了异议。"
      },
      {
        "text": "水都是同一处的，差不了多少。",
        "failure": "两池没有争辩，只把冷和热各留给了一只手。"
      }
    ]
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0028-say1",
    "kind": "line",
    "text": "先各试一下，别以为这一边和另一边一样。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N42-r0028-reply1"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0028-reply1",
    "kind": "line",
    "text": "两边的水终于被分别看待。",
    "speaker": "旁白",
    "character": "",
    "next": "N42-r0029"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0028-say2",
    "kind": "line",
    "text": "中间那种水没找着，这句得记。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N42-r0028-reply2"
  },
  {
    "day": "N42",
    "context": "现实",
    "period": "两池",
    "background": "corridor",
    "page": 110,
    "pages": [
      110
    ],
    "source": "补写",
    "id": "interactive-N42-r0028-reply2",
    "kind": "line",
    "text": "洗手也留下了今天的温差。",
    "speaker": "旁白",
    "character": "",
    "next": "N42-r0029"
  },
  {
    "id": "N42-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "HQ三宝",
    "background": "classroom",
    "text": "HQ三宝",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0030"
  },
  {
    "id": "N42-r0030",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "HQ三宝",
    "background": "classroom",
    "speaker": "HQ",
    "text": "公式修正、图像修正、等效电源，可助我军大获全胜。",
    "character": "c45",
    "next": "N42-r0031"
  },
  {
    "id": "N42-r0031",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "HQ三宝",
    "background": "classroom",
    "speaker": "戚洪硕",
    "text": "等效电源好理解。",
    "character": "c13",
    "next": "N42-r0032"
  },
  {
    "id": "N42-r0032",
    "kind": "line",
    "source": "补写",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "HQ三宝",
    "background": "classroom",
    "speaker": "陈熙",
    "text": "公式准而繁，图像简而糙。今天洗手的两池，倒也该有人修正一下。",
    "character": "c11",
    "next": "N42-r0034"
  },
  {
    "id": "N42-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0035"
  },
  {
    "id": "N42-r0035",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "引：呜呼！距先时操笔仅期月之隔，何人偷闲而置我于此地也！",
    "character": "",
    "next": "N42-r0036"
  },
  {
    "id": "N42-r0036",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "※ 吾欲动笔，咸公子止之。吾曰：“传此志于汝，此可行耶？”复不止。",
    "character": "",
    "next": "N42-r0037"
  },
  {
    "id": "N42-r0037",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数：咸公子“打更”于课上，左右邻皆止之。石羊曰：“听课。”遂举默写手册以观。众人笑。",
    "character": "",
    "next": "N42-r0038"
  },
  {
    "id": "N42-r0038",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "※ 男卫生间洗手台有二池，左右分立。若冬乎，左者寒甚凉，若千年寒冰；右者甚烫，若焚天之火。若非后勤、维修之失职，其有神明焉？",
    "character": "",
    "next": "N42-r0039"
  },
  {
    "id": "N42-r0039",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：左板报有评曰：此或抬头雁，或落类汤鸡。",
    "character": "",
    "next": "N42-r0040"
  },
  {
    "id": "N42-r0040",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "右板报有评曰：无也，唯九及十一于其上。",
    "character": "",
    "next": "N42-r0041"
  },
  {
    "id": "N42-r0041",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“邵聪是别样的李沛霖。”孙老师说。",
    "character": "",
    "next": "N42-r0042"
  },
  {
    "id": "N42-r0042",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“邵聪是漏气的李沛霖。”黄艺博说。",
    "character": "",
    "next": "N42-r0043"
  },
  {
    "id": "N42-r0043",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物：HQ 大将军曰：“吾有三宝：公式修正、图像修正、等效电源，可助我军大获全胜。”",
    "character": "",
    "next": "N42-r0044"
  },
  {
    "id": "N42-r0044",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "笔者自云：公式准而繁，图像简而糙，唯等效电源乃当世之英雄。",
    "character": "",
    "next": "N42-r0045"
  },
  {
    "id": "N42-r0045",
    "kind": "line",
    "source": "原文",
    "page": 110,
    "pages": [
      110
    ],
    "day": "N42",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "咸公子亦云：“等效电源好理解。”",
    "character": "",
    "next": "N42-r0046"
  },
  {
    "id": "N42-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "text": "源内与源外",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N42-r0047"
  },
  {
    "id": "N42-r0047",
    "kind": "line",
    "source": "转述",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "旁白",
    "text": "课间再翻同学写的残卷，人物姓名被写成了神话。",
    "character": "",
    "next": "N42-r0048"
  },
  {
    "id": "N42-r0048",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "神经",
    "character": "",
    "next": "N42-r0049"
  },
  {
    "id": "N42-r0049",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "旧约满者传降临纪·壹",
    "character": "",
    "next": "N42-r0050"
  },
  {
    "id": "N42-r0050",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "满者留在源里，他要在源中推究极致。他是全知的，但为了追求更卓越，他关闭",
    "character": "",
    "next": "N42-r0051"
  },
  {
    "id": "N42-r0051",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "了对源外的感知。",
    "character": "",
    "next": "N42-r0052"
  },
  {
    "id": "N42-r0052",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "其他的生命生活在源的外面，在满者的赐福中存在。",
    "character": "",
    "next": "N42-r0053"
  },
  {
    "id": "N42-r0053",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "人是源外唯一的灵，他们受到了满者的赐福，却没能留在满老身边。",
    "character": "",
    "next": "N42-r0054"
  },
  {
    "id": "N42-r0054",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "人是有缺陷的。",
    "character": "",
    "next": "N42-r0055"
  },
  {
    "id": "N42-r0055",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "甚古的人保有对满者的敬畏，他们繁衍生忌，与其他生命和谐共处。但到了远古，开始慢慢忘记满者，他们的领地不断扩张，他们的数量不断增加，",
    "character": "",
    "next": "N42-r0056"
  },
  {
    "id": "N42-r0056",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "他们不再以源为梦想。",
    "character": "",
    "next": "N42-r0057"
  },
  {
    "id": "N42-r0057",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "满者在不知多少年后的上古第一次打开了源的壁障，但闻讯而来的万物中缺少了",
    "character": "",
    "next": "N42-r0058"
  },
  {
    "id": "N42-r0058",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "人。",
    "character": "",
    "next": "N42-r0059"
  },
  {
    "id": "N42-r0059",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "满者对人感到怜悯，祂对众生的慈爱让他无法做出放弃人的举动。",
    "character": "",
    "next": "N42-r0060"
  },
  {
    "id": "N42-r0060",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "满者来到人的聚处。人是满者按自己的样子造的。满者像人是错的，人像满者是对的。人认不出满者。",
    "character": "",
    "next": "N42-r0061"
  },
  {
    "id": "N42-r0061",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "人对满者十分冷漠，就好像对其他的人和生命一样。",
    "character": "",
    "next": "N42-r0062"
  },
  {
    "id": "N42-r0062",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "满者在人的聚处游走，感受每个人的灵。他测验了每一个人。绝大部分的人根本",
    "character": "",
    "next": "N42-r0063"
  },
  {
    "id": "N42-r0063",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "不相信祂。有抱着玩乐心态的人在得到结果后也恼羞成怒.只有十三个人还保有较为纯洁的灵，本能的追随满者。满者让他们学习他的知识.",
    "character": "",
    "next": "N42-r0064"
  },
  {
    "id": "N42-r0064",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "十三个灵受到开化，成为了博学之人。为了铭记满者对万物的恩泽，他们为自己",
    "character": "",
    "next": "N42-r0065"
  },
  {
    "id": "N42-r0065",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "取了名字，并得到了满者的同意。",
    "character": "",
    "next": "N42-r0066"
  },
  {
    "id": "N42-r0066",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "泽人，泽兽，泽蟲，泽豸，泽鲲，泽鹏，泽萱，泽草，泽木，泽菌，泽蓝，泽瘟，",
    "character": "",
    "next": "N42-r0067"
  },
  {
    "id": "N42-r0067",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "泽疫。",
    "character": "",
    "next": "N42-r0068"
  },
  {
    "id": "N42-r0068",
    "kind": "line",
    "source": "原文",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "十三位博学之灵的名字被刻在右头上。",
    "character": "",
    "next": "N42-r0069"
  },
  {
    "id": "N42-r0069",
    "kind": "line",
    "source": "补写",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "《神经》",
    "text": "原页确作“满老”“繁衍生忌”“右头上”，疑分别为“满者”“繁衍生息”“石头上”之讹。正文保留原字，猜测不代替原文。",
    "character": "",
    "next": "N42-r0070"
  },
  {
    "id": "N42-r0070",
    "kind": "line",
    "source": "补写",
    "page": 237,
    "pages": [
      237
    ],
    "day": "N42",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "源内与源外",
    "background": "home",
    "speaker": "同学",
    "text": "名字都认得，故事倒走到另一个世界了。",
    "character": "",
    "next": "D30-date"
  },
  {
    "id": "D30-date",
    "kind": "date",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-29",
    "text": "听口将近",
    "pov": "c07",
    "character": "",
    "next": "D30-0001"
  },
  {
    "id": "D30-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "听口将近",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "D30-0002"
  },
  {
    "id": "D30-0002",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听口将近",
    "background": "classroom",
    "text": "听口将近",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-0003"
  },
  {
    "id": "D30-0003",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听口将近",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "第一次这么直观感到高考靠近。分数幽默，安慰方法也不少。",
    "character": "c07",
    "next": "D30-0004"
  },
  {
    "id": "D30-0004",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听口将近",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "一两分，就说一道阅读题；回本听着容易，嘴也得练。",
    "character": "c06",
    "next": "D30-r0005"
  },
  {
    "id": "D30-r0005",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听口将近",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "希望大家第一次听口都能发挥好。我也得接着练。",
    "character": "c07",
    "next": "D30-0006"
  },
  {
    "id": "D30-0006",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "text": "数学竞速前声",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-0007"
  },
  {
    "id": "D30-0007",
    "kind": "line",
    "source": "转述",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "speaker": "旁白",
    "text": "有人叫醒史官和能者竞速。他以前做过题，又选了合适方法，略赢一回。",
    "character": "",
    "next": "D30-0008"
  },
  {
    "id": "D30-0008",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "speaker": "战老师",
    "text": "写得出来才算会，方法也得选对。",
    "character": "c48",
    "next": "interactive-D30-0008"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-0008",
    "kind": "choice",
    "text": "竞速之前，老师说写得出来才会，我怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "先完整做一回，计时不是把过程省掉。",
        "next": "interactive-D30-0008-say1"
      },
      {
        "text": "方法先选清，卡住的步骤也留着。",
        "next": "interactive-D30-0008-say2"
      },
      {
        "text": "只要比别人快，漏一步也没关系。",
        "failure": "秒数领先了一截，过程却落后了一整步。"
      },
      {
        "text": "先记老师的最后式子，下次直接用。",
        "failure": "式子等到了背诵，换题却没等到理解。"
      }
    ]
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-0008-say1",
    "kind": "line",
    "text": "先完整做一回，计时不是把过程省掉。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D30-0008-reply1"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-0008-reply1",
    "kind": "line",
    "text": "路线要能走通。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D30-r0009"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-0008-say2",
    "kind": "line",
    "text": "方法先选清，卡住的步骤也留着。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D30-0008-reply2"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-0008-reply2",
    "kind": "line",
    "text": "别只跟别人比快。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D30-r0009"
  },
  {
    "id": "D30-r0009",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "数学竞速前声",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "这道我以前做过，先占了点便宜。换道新的再来？",
    "character": "c07",
    "next": "D30-0010"
  },
  {
    "id": "D30-0010",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "夜自习",
    "background": "classroom",
    "text": "夜自习",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-0011"
  },
  {
    "id": "D30-0011",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "夜自习",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "有些人初见纯良，班史一翻，像是要做泼猴。",
    "character": "c46",
    "next": "D30-r0032"
  },
  {
    "id": "D30-r0032",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "夜自习",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "老师读的是满者前几天的发言。那句纯良，今天有了下文。",
    "character": "c07",
    "next": "D30-r0024"
  },
  {
    "id": "D30-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听力开盘",
    "background": "classroom",
    "text": "听力开盘",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-r0025"
  },
  {
    "id": "D30-r0025",
    "kind": "line",
    "source": "转述",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听力开盘",
    "background": "classroom",
    "speaker": "旁白",
    "text": "答案还没播放，同学先做判断，仿佛买定离手。听力开始，先前的把握便逐项见真章。",
    "character": "",
    "next": "D30-r0026"
  },
  {
    "id": "D30-r0026",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听力开盘",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "就差一两分，一道阅读题。先这样安慰自己。",
    "character": "c07",
    "next": "D30-r0027"
  },
  {
    "id": "D30-r0027",
    "kind": "line",
    "source": "转述",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "听力开盘",
    "background": "classroom",
    "speaker": "旁白",
    "text": "高考听口越来越近，玩笑能缓一下压力，下一段声音却仍要自己听。",
    "character": "",
    "next": "D30-r0028"
  },
  {
    "id": "D30-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "text": "满者的旧发言",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-r0029"
  },
  {
    "id": "D30-r0029",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "我初见徐子涵，还以为纯良。现在一看，想做泼猴！",
    "character": "c46",
    "next": "D30-r0030"
  },
  {
    "id": "D30-r0030",
    "kind": "line",
    "source": "补写",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "说的是满者前几天那段，可不是我的发言。",
    "character": "c07",
    "next": "interactive-D30-r0030"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-r0030",
    "kind": "choice",
    "text": "满者旧发言被读出来，我怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "这句是你的，刚才那段我可不能抢署名。",
        "next": "interactive-D30-r0030-say1"
      },
      {
        "text": "你当时怎么说的，再接两句吧。",
        "next": "interactive-D30-r0030-say2"
      },
      {
        "text": "我也听过，就当是我自己的发言。",
        "failure": "声音很熟，署名却走到了另一张脸上。"
      },
      {
        "text": "只留“大家都说过”，谁说的不重要。",
        "failure": "众人占齐了称呼，真正说话的人却没被找到。"
      }
    ]
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-r0030-say1",
    "kind": "line",
    "text": "这句是你的，刚才那段我可不能抢署名。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D30-r0030-reply1"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-r0030-reply1",
    "kind": "line",
    "text": "没错，是我那段。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D30-r0031"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-r0030-say2",
    "kind": "line",
    "text": "你当时怎么说的，再接两句吧。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D30-r0030-reply2"
  },
  {
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "page": 111,
    "pages": [
      111
    ],
    "source": "补写",
    "id": "interactive-D30-r0030-reply2",
    "kind": "line",
    "text": "从前面说起。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D30-r0031"
  },
  {
    "id": "D30-r0031",
    "kind": "line",
    "source": "转述",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "满者的旧发言",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师翻到的是11月23日的午休补录。当天奶茶又打到地上，大哥反倒想到培养蛋白质分解菌，用生物防治替代物理防治。",
    "character": "",
    "next": "D30-r0033"
  },
  {
    "id": "D30-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-r0034"
  },
  {
    "id": "D30-r0034",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "虽说，还是希望同学们在即来到的第一次高考听口中取得好成绩！",
    "character": "",
    "next": "D30-r0035"
  },
  {
    "id": "D30-r0035",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物：无事发生",
    "character": "",
    "next": "D30-r0036"
  },
  {
    "id": "D30-r0036",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生：“对碗灼烧灭菌有安全隐患”。“可能啊，晚风太大了，大家都昏昏欲睡。”",
    "character": "",
    "next": "D30-r0037"
  },
  {
    "id": "D30-r0037",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化：委员长：CaSO₄，硫酸 gèi。史官昼寝，不知发生何事。",
    "character": "",
    "next": "D30-r0038"
  },
  {
    "id": "D30-r0038",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数：史官继续昼寝，半途被某人叫起与能者竞速数学题，史官因前写过此题，兼而选了好的方法，有幸而略获胜。",
    "character": "",
    "next": "D30-r0039"
  },
  {
    "id": "D30-r0039",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午休，史官与一干人等去听课，老师调侃等曰：“老师发音很幽默。”而咸乃代表“咸训七”居 C 位，可谓“公→杰出居高位。”",
    "character": "",
    "next": "D30-r0040"
  },
  {
    "id": "D30-r0040",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英：班上做听力题，在放听力前买定离手，而后做听力颇有一种赌场开盘之感。",
    "character": "",
    "next": "D30-r0041"
  },
  {
    "id": "D30-r0041",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：史官略有昼寝，可能小有阙漏。孙老师大讲文言与古诗，论及陆游之横槊赋诗之用典，更叹其一生心于边塞，未尝已也。",
    "character": "",
    "next": "D30-r0042"
  },
  {
    "id": "D30-r0042",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "text": "自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-r0043"
  },
  {
    "id": "D30-r0043",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师窥至史官前几日记徐生子涵之危险发言①，不由得言曰：“吾初见其人，乃以为其为纯良之辈。今视之乃大有祸心，欲作泼猴样哉！”",
    "character": "",
    "next": "D30-r0044"
  },
  {
    "id": "D30-r0044",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语限：①规矩与天性　议　②殊途　记",
    "character": "",
    "next": "D30-r0045"
  },
  {
    "id": "D30-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom",
    "text": "晚自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D30-r0046"
  },
  {
    "id": "D30-r0046",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "有人将奶茶又打至地上，史官以为可以制选择培养基从酸奶中选择合适的蛋白质分解菌，以生物防治替代物理防治。",
    "character": "",
    "next": "D30-r0047"
  },
  {
    "id": "D30-r0047",
    "kind": "line",
    "source": "原文",
    "page": 111,
    "pages": [
      111
    ],
    "day": "D30",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "①：见笔者 11.23 之补录云。",
    "character": "",
    "next": "D31-date"
  },
  {
    "id": "D31-date",
    "kind": "date",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-12-01",
    "text": "教室安静之后",
    "pov": "c03",
    "character": "",
    "next": "D31-0001"
  },
  {
    "id": "D31-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "教室安静之后",
    "pov": "c03",
    "character": "c03",
    "speaker": "徐子涵",
    "next": "D31-0002"
  },
  {
    "id": "D31-0002",
    "kind": "scene",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "教室安静之后",
    "background": "classroom",
    "text": "教室安静之后",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D31-0003"
  },
  {
    "id": "D31-0003",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "教室安静之后",
    "background": "classroom",
    "speaker": "战老师",
    "text": "椭圆知道怎么做了吗？先安静。",
    "character": "c48",
    "next": "D31-0004"
  },
  {
    "id": "D31-0004",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "教室安静之后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "室内刚静下来，九班学生关门一声巨响，老师去了隔壁。几位老师出面劝解后，他才回七班。",
    "character": "",
    "next": "D31-r0005"
  },
  {
    "id": "D31-r0005",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "教室安静之后",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "他那一下关门，半间教室都醒了。",
    "character": "c03",
    "next": "D31-0006"
  },
  {
    "id": "D31-0006",
    "kind": "scene",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "text": "办公室门前",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D31-0008"
  },
  {
    "id": "D31-0008",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "李沛霖",
    "text": "午间他来请罪，门口怎么聚了十多个人？",
    "character": "c05",
    "next": "D31-0009"
  },
  {
    "id": "D31-0009",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "战老师",
    "text": "不该只向我道歉，也该向七班道歉。",
    "character": "c48",
    "next": "interactive-D31-0009"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-0009",
    "kind": "choice",
    "text": "老师要求向七班道歉，我怎么回应？",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "先把为什么影响了班里的人讲清。",
        "next": "interactive-D31-0009-say1"
      },
      {
        "text": "向谁道歉得说到事上，别只走个过场。",
        "next": "interactive-D31-0009-say2"
      },
      {
        "text": "有一个人听见就够，其他都不用管。",
        "failure": "一句道歉找到了捷径，受影响的人却仍在原地。"
      },
      {
        "text": "说得响一点就是诚恳，内容可以省。",
        "failure": "声音到了全班，具体的责任却没有到场。"
      }
    ]
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-0009-say1",
    "kind": "line",
    "text": "先把为什么影响了班里的人讲清。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-D31-0009-reply1"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-0009-reply1",
    "kind": "line",
    "text": "不是只给我听。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D31-0010"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-0009-say2",
    "kind": "line",
    "text": "向谁道歉得说到事上，别只走个过场。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-D31-0009-reply2"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-0009-reply2",
    "kind": "line",
    "text": "把刚才做的认了。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D31-0010"
  },
  {
    "id": "D31-0010",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "徐子瀚",
    "text": "七班同学已经在这里听，何必再请罪？",
    "character": "c60",
    "next": "D31-0011"
  },
  {
    "id": "D31-0011",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "旁白",
    "text": "老师这才发现门外围观的人，起身要驱散，同学们一拥而散。",
    "character": "",
    "next": "D31-0007"
  },
  {
    "id": "D31-0007",
    "kind": "portrait",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "text": "这一段，由李沛霖接着记。",
    "next": "D31-r0012"
  },
  {
    "id": "D31-r0012",
    "kind": "choice",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "text": "老师发现门口围观，我怎么收住",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "“我们先散了，您继续。”",
        "next": "D31-r0013"
      },
      {
        "text": "“听到了，别挤门口了，回班去。”",
        "next": "D31-r0015"
      },
      {
        "text": "先听完再散，这会儿已经到最关键的道歉了。",
        "failure": "办公室的事没说完，门口的观众却先收到了散场通知。"
      }
    ]
  },
  {
    "id": "D31-r0013",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "text": "“我们先散了，您继续。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D31-r0014"
  },
  {
    "id": "D31-r0014",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "战老师",
    "text": "回去，别围着。",
    "character": "c48",
    "next": "D31-r0017"
  },
  {
    "id": "D31-r0015",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "text": "“听到了，别挤门口了，回班去。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D31-r0016"
  },
  {
    "id": "D31-r0016",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "战老师",
    "text": "该道歉的人留下，其他人回班。",
    "character": "c48",
    "next": "D31-r0017"
  },
  {
    "id": "D31-r0017",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "办公室门前",
    "background": "math-office",
    "speaker": "李沛霖",
    "text": "向七班一人说一遍也太费事了，要不找戚公子替全班听？",
    "character": "c05",
    "next": "D31-r0024"
  },
  {
    "id": "D31-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "起身之前",
    "background": "classroom",
    "text": "起身之前",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D31-r0025"
  },
  {
    "id": "D31-r0025",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "起身之前",
    "background": "classroom",
    "speaker": "旁白",
    "text": "门响之前，战老师已为班里的喧闹动怒。刚静下来，九班的徐子瀚一摔门，余音还在教室里。",
    "character": "",
    "next": "D31-r0026"
  },
  {
    "id": "D31-r0026",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "起身之前",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师追到九班，对方趴桌假睡。崔鹏、李岩来劝，战老师才回七班。",
    "character": "",
    "next": "D31-r0027"
  },
  {
    "id": "D31-r0027",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "起身之前",
    "background": "classroom",
    "speaker": "战老师",
    "text": "我怕的是怯战的。真要来战，倒好办。",
    "character": "c48",
    "next": "D31-r0028"
  },
  {
    "id": "D31-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "text": "楼道里的不认错",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D31-r0029"
  },
  {
    "id": "D31-r0029",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "speaker": "徐子瀚",
    "text": "不是假睡，就是困。真有力气就不躲了。",
    "character": "c60",
    "next": "D31-r0030"
  },
  {
    "id": "D31-r0030",
    "kind": "line",
    "source": "补写",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "speaker": "李岩",
    "text": "去向战老师认错。",
    "character": "c57",
    "next": "interactive-D31-r0030"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-r0030",
    "kind": "choice",
    "text": "楼道里还在劝认错，我怎么接？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先把刚才摔门的事说清，别只僵着。",
        "next": "interactive-D31-r0030-say1"
      },
      {
        "text": "回办公室说，走廊上别再堵着人。",
        "next": "interactive-D31-r0030-say2"
      },
      {
        "text": "先让老师承认有问题，我才认。",
        "failure": "认错排好了条件，楼道却继续被堵成了谈判桌。"
      },
      {
        "text": "嘴上应一声就走，认不认回头再说。",
        "failure": "脚步离开了，没说完的事却留在办公室门前。"
      }
    ]
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-r0030-say1",
    "kind": "line",
    "text": "先把刚才摔门的事说清，别只僵着。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D31-r0030-reply1"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-r0030-reply1",
    "kind": "line",
    "text": "得先认识自己的问题。",
    "speaker": "李岩",
    "character": "c57",
    "next": "D31-r0031"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-r0030-say2",
    "kind": "line",
    "text": "回办公室说，走廊上别再堵着人。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D31-r0030-reply2"
  },
  {
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "page": 112,
    "pages": [
      112
    ],
    "source": "补写",
    "id": "interactive-D31-r0030-reply2",
    "kind": "line",
    "text": "过去讲。",
    "speaker": "李岩",
    "character": "c57",
    "next": "D31-r0031"
  },
  {
    "id": "D31-r0031",
    "kind": "line",
    "source": "原文",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "speaker": "徐子瀚",
    "text": "我就不。",
    "character": "c60",
    "next": "D31-r0032"
  },
  {
    "id": "D31-r0032",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "speaker": "旁白",
    "text": "中午他终于被带去办公室。七班围了十多人，听见老师要求向七班道歉，又听见他说七班已经站门口听了。",
    "character": "",
    "next": "D31-r0033"
  },
  {
    "id": "D31-r0033",
    "kind": "line",
    "source": "转述",
    "page": 112,
    "pages": [
      112
    ],
    "day": "D31",
    "context": "现实",
    "period": "楼道里的不认错",
    "background": "corridor",
    "speaker": "旁白",
    "text": "战老师这才发现门外人头攒动，刚起身，围观的同学已一拥而散。",
    "character": "",
    "next": "D31-r0034"
  }
];
export default data;
