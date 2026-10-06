import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N32-date",
    "kind": "date",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-02",
    "text": "虽败犹胜的D派",
    "pov": "c05",
    "character": "",
    "next": "N32-r0042"
  },
  {
    "id": "N32-r0042",
    "kind": "portrait",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "虽败犹胜的D派",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "N32-r0016"
  },
  {
    "id": "N32-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "text": "十拿九稳",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N32-r0017"
  },
  {
    "id": "N32-r0017",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "speaker": "旁白",
    "text": "英语卷到手，史官想起昨日“一百四十五”。越往下做，越想重新解释“十拿九稳”。",
    "character": "",
    "next": "N32-r0018"
  },
  {
    "id": "N32-r0018",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "完形和阅表取九分，那一百四十，还未可知。",
    "character": "c05",
    "next": "interactive-N32-r0018"
  },
  {
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0018",
    "kind": "choice",
    "text": "一百四十还未可知，我怎么接？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "先把眼前能核的核了，猜分先停一下。",
        "next": "interactive-N32-r0018-say1"
      },
      {
        "text": "九分那两处记清，余下等卷子说。",
        "next": "interactive-N32-r0018-say2"
      },
      {
        "text": "九分到了，后面就按全对算吧。",
        "failure": "两个题领到的分，替整份卷子盖了满章。"
      },
      {
        "text": "别人猜得高，我也照他的估。",
        "failure": "预测凑齐了一排，自己的答题却没进账。"
      }
    ]
  },
  {
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0018-say1",
    "kind": "line",
    "text": "先把眼前能核的核了，猜分先停一下。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N32-r0018-reply1"
  },
  {
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0018-reply1",
    "kind": "line",
    "text": "猜测没抢走下一场的时间。",
    "speaker": "旁白",
    "character": "",
    "next": "N32-r0019"
  },
  {
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0018-say2",
    "kind": "line",
    "text": "九分那两处记清，余下等卷子说。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N32-r0018-reply2"
  },
  {
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0018-reply2",
    "kind": "line",
    "text": "分数没有被心愿填满。",
    "speaker": "旁白",
    "character": "",
    "next": "N32-r0019"
  },
  {
    "id": "N32-r0019",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "十拿九稳",
    "background": "classroom",
    "speaker": "同学",
    "text": "你这个算法，稳的部分倒挺小。",
    "character": "",
    "next": "N32-r0020"
  },
  {
    "id": "N32-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "各自的末场",
    "background": "corridor",
    "text": "各自的末场",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N32-r0021"
  },
  {
    "id": "N32-r0021",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "各自的末场",
    "background": "corridor",
    "speaker": "旁白",
    "text": "英语之后，有人潇洒离开，有人到下午休息，还有人要考到傍晚。选科不同，离场的太阳也不同。",
    "character": "",
    "next": "N32-r0022"
  },
  {
    "id": "N32-r0022",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "各自的末场",
    "background": "corridor",
    "speaker": "李沛霖",
    "text": "酉时还在考的人，今日特别不幸。",
    "character": "c05",
    "next": "N32-r0023"
  },
  {
    "id": "N32-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "text": "B与D",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N32-r0024"
  },
  {
    "id": "N32-r0024",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "旁白",
    "text": "历史出来，末两问分成B、D两派。史官在考场原觉得容易，讨论却被B派压住。",
    "character": "",
    "next": "N32-r0032"
  },
  {
    "id": "N32-r0032",
    "kind": "choice",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "text": "争论时我怎样守住自己的判断",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "“我还选D，先把各自理由对一遍。”",
        "next": "N32-r0033"
      },
      {
        "text": "“你们讲得有道理，我保留D，等答案再看。”",
        "next": "N32-r0035"
      },
      {
        "text": "你们选B的先别讲了，我等答案就够。",
        "failure": "D派守住了选项，却先把讨论的门关上。"
      }
    ]
  },
  {
    "id": "N32-r0033",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "text": "“我还选D，先把各自理由对一遍。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "N32-r0034"
  },
  {
    "id": "N32-r0034",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "同学",
    "text": "行，那你也说说为什么选D。",
    "character": "",
    "next": "N32-r0025"
  },
  {
    "id": "N32-r0035",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "text": "“你们讲得有道理，我保留D，等答案再看。”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "N32-r0036"
  },
  {
    "id": "N32-r0036",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "同学",
    "text": "先留着，等公布再核。",
    "character": "",
    "next": "N32-r0025"
  },
  {
    "id": "N32-r0025",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "我在D这边。",
    "character": "c05",
    "next": "N32-r0026"
  },
  {
    "id": "N32-r0026",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "同学",
    "text": "先把理由说出来。",
    "character": "",
    "next": "N32-r0027"
  },
  {
    "id": "N32-r0027",
    "kind": "line",
    "source": "转述",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "B与D",
    "background": "classroom",
    "speaker": "旁白",
    "text": "论争没赢，危迫感倒先来了。",
    "character": "",
    "next": "N32-r0028"
  },
  {
    "id": "N32-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "text": "答案既出",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N32-r0029"
  },
  {
    "id": "N32-r0029",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "其终为D。",
    "character": "",
    "next": "N32-r0030"
  },
  {
    "id": "N32-r0030",
    "kind": "line",
    "source": "补写",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "虽败于论争，终胜于答案。今天终于可以嘻一下。",
    "character": "c05",
    "next": "interactive-N32-r0030"
  },
  {
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0030",
    "kind": "choice",
    "text": "争论输了、答案赢了，我怎么回应？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "这回可以嘻了，但为什么选D还得留着。",
        "next": "interactive-N32-r0030-say1"
      },
      {
        "text": "谁声音大不顶用，这回看答案怎么说。",
        "next": "interactive-N32-r0030-say2"
      },
      {
        "text": "结果是D，以后同类题都照D选。",
        "failure": "这次的字母走了很远，下一道题却没跟着同意。"
      },
      {
        "text": "他们都选错，下次谁的理由也不用听。",
        "failure": "一场的结果收走了后来所有讨论的座位。"
      }
    ]
  },
  {
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0030-say1",
    "kind": "line",
    "text": "这回可以嘻了，但为什么选D还得留着。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N32-r0030-reply1"
  },
  {
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0030-reply1",
    "kind": "line",
    "text": "笑声没把依据擦掉。",
    "speaker": "旁白",
    "character": "",
    "next": "N32-r0037"
  },
  {
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0030-say2",
    "kind": "line",
    "text": "谁声音大不顶用，这回看答案怎么说。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-N32-r0030-reply2"
  },
  {
    "day": "N32",
    "context": "此后 · 期中答案公布",
    "period": "答案既出",
    "background": "classroom",
    "page": 92,
    "pages": [
      92
    ],
    "source": "补写",
    "id": "interactive-N32-r0030-reply2",
    "kind": "line",
    "text": "讨论和答案终于分开了账。",
    "speaker": "旁白",
    "character": "",
    "next": "N32-r0037"
  },
  {
    "id": "N32-r0037",
    "kind": "scene",
    "source": "演出",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N32-r0038"
  },
  {
    "id": "N32-r0038",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "期中末日",
    "character": "",
    "next": "N32-r0039"
  },
  {
    "id": "N32-r0039",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "入考场，观英语卷，方知华子之深意。一百四十又五，实十拿九稳也。何谓之“十拿九稳”？自完形、阅读表者问，取均可得九分。其余一百四十分，未可知也。呜呼！何其易也！",
    "character": "",
    "next": "N32-r0040"
  },
  {
    "id": "N32-r0040",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英语试毕，有数人，即潇洒离去；而后，又有多人，于申时方能休憩；止有几人，于酉时方能战终。噫！于酉时劳者，何其不幸也！",
    "character": "",
    "next": "N32-r0041"
  },
  {
    "id": "N32-r0041",
    "kind": "line",
    "source": "原文",
    "page": 92,
    "pages": [
      92
    ],
    "day": "N32",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "历史试毕，不幸者聚而议选择。余于考场，甚觉其易，未有踌躇不定者。然众于选择末两问生起争辩，B、D两派，论争不甚休。然B派终以其理论，势足占于上风。吾身付D派，深感危迫矣。",
    "character": "",
    "next": "D24-date"
  },
  {
    "id": "D24-date",
    "kind": "date",
    "source": "演出",
    "page": 93,
    "pages": [
      93,
      196,
      197,
      198
    ],
    "day": "D24",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-06",
    "text": "八件乐器",
    "pov": "c05",
    "character": "",
    "next": "D24-r0001"
  },
  {
    "id": "D24-r0001",
    "kind": "portrait",
    "source": "演出",
    "page": 93,
    "pages": [
      93,
      196,
      197,
      198
    ],
    "day": "D24",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "八件乐器",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "D24-0002"
  },
  {
    "id": "D24-0002",
    "kind": "scene",
    "source": "演出",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "八件乐器",
    "background": "classroom",
    "text": "八件乐器",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D24-r0003"
  },
  {
    "id": "D24-r0003",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "八件乐器",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "乐队集齐八件乐器了！",
    "character": "c05",
    "next": "D24-r0004"
  },
  {
    "id": "D24-r0004",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "八件乐器",
    "background": "classroom",
    "speaker": "同学",
    "text": "尤里两件、Kazoo笛、竖笛、横笛、手卷钢琴、口琴、拇指钢琴。",
    "character": "",
    "next": "D24-r0005"
  },
  {
    "id": "D24-r0005",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "八件乐器",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "《波莱罗》，还有德彪西《月光》，新曲目也有了。",
    "character": "c05",
    "next": "D24-r0006"
  },
  {
    "id": "D24-r0006",
    "kind": "line",
    "source": "转述",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "八件乐器",
    "background": "classroom",
    "speaker": "旁白",
    "text": "乐器在午间凑到了一起。说着说着，话头绕到去年秋天那场等人的聚会。",
    "character": "",
    "next": "D24-r0110"
  },
  {
    "id": "D24-r0110",
    "kind": "scene",
    "source": "演出",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D24-r0111"
  },
  {
    "id": "D24-r0111",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "小段：要证明1/4是最大的。说左侧大于1/4没用。应证明：①大于1/4不行；②找出1/4行的例子。",
    "character": "",
    "next": "D24-r0112"
  },
  {
    "id": "D24-r0112",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "杨sir提示：6.3上面总结的熟词生义，大家一定要认真看！（我也觉得很重要）",
    "character": "",
    "next": "D24-r0113"
  },
  {
    "id": "D24-r0113",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化：找现象中的证据要充分（虽未有Cu生成，有Cu²⁺消耗）。",
    "character": "",
    "next": "D24-r0114"
  },
  {
    "id": "D24-r0114",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "并联系生活举例子：",
    "character": "",
    "next": "D24-r0115"
  },
  {
    "id": "D24-r0115",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "绰名：持子／学名：戴向阳／真名：大羔……",
    "character": "",
    "next": "D24-r0116"
  },
  {
    "id": "D24-r0116",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物、C：中午大事：7班乐队里程碑：集齐8件乐器！",
    "character": "",
    "next": "D24-r0117"
  },
  {
    "id": "D24-r0117",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "目前乐器名录：尤里×2、Kazoo笛、竖笛、横笛、手卷钢琴、口琴、拇指钢琴。",
    "character": "",
    "next": "D24-r0118"
  },
  {
    "id": "D24-r0118",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "解锁新曲目：BOLERO，Clair de lune - Debussy。",
    "character": "",
    "next": "D24-r0119"
  },
  {
    "id": "D24-r0119",
    "kind": "line",
    "source": "原文",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：大家纷纷哂笑着赞同“孙老师是最好的语文老师！”——LPL。",
    "character": "",
    "next": "D24-r0007"
  },
  {
    "id": "D24-r0007",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "text": "植物园门前",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0008"
  },
  {
    "id": "D24-r0008",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "史绍恺",
    "text": "人差不多齐了，树苡说马上来。",
    "character": "c35",
    "next": "D24-r0009"
  },
  {
    "id": "D24-r0009",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "约的是两点。我们先进去，边走边等？",
    "character": "c24",
    "next": "D24-r0010"
  },
  {
    "id": "D24-r0010",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "同学",
    "text": "他会不会已经躲进草木里，要袭击我们？",
    "character": "",
    "next": "D24-r0011"
  },
  {
    "id": "D24-r0011",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "旁白",
    "text": "进了园，树林里也没冒出树苡。一路走到五点，他才终于到了。",
    "character": "",
    "next": "D24-r0012"
  },
  {
    "id": "D24-r0012",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "刘树苡",
    "text": "我来了。",
    "character": "c15",
    "next": "D24-r0013"
  },
  {
    "id": "D24-r0013",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      199
    ],
    "day": "D24",
    "context": "回忆 · 2022年10月5日",
    "period": "植物园门前",
    "background": "park",
    "speaker": "李沛霖",
    "text": "我们已经替你想好了三种潜伏方式，你一种都没用。",
    "character": "c05",
    "next": "D24-r0014"
  },
  {
    "id": "D24-r0014",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "text": "先问什么叫前女友",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0015"
  },
  {
    "id": "D24-r0015",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "我前女友很多，今天给你们讲讲。",
    "character": "c37",
    "next": "D24-r0016"
  },
  {
    "id": "D24-r0016",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "李沛霖",
    "text": "先说标准。怎样才算你的“前女友”？",
    "character": "c05",
    "next": "D24-r0017"
  },
  {
    "id": "D24-r0017",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "两条。貌美而富姿色；我愿意以她为前女友。",
    "character": "c37",
    "next": "D24-r0018"
  },
  {
    "id": "D24-r0018",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "那对方要做什么？",
    "character": "c24",
    "next": "D24-r0019"
  },
  {
    "id": "D24-r0019",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "……我先讲。",
    "character": "c37",
    "next": "D24-r0020"
  },
  {
    "id": "D24-r0020",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "李沛霖",
    "text": "行，我们听你讲，不替对方答应。",
    "character": "c05",
    "next": "D24-r0021"
  },
  {
    "id": "D24-r0021",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "军训的时候，我跟一个女生说“与我结婚”。",
    "character": "c37",
    "next": "D24-r0022"
  },
  {
    "id": "D24-r0022",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "她答应了？",
    "character": "c24",
    "next": "D24-r0023"
  },
  {
    "id": "D24-r0023",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "她告诉老师了。老师找了我家长。",
    "character": "c37",
    "next": "D24-r0024"
  },
  {
    "id": "D24-r0024",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "李沛霖",
    "text": "开头就把家长请出来了。",
    "character": "c05",
    "next": "D24-r0025"
  },
  {
    "id": "D24-r0025",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "初一的同桌，我们很谈得来，友谊也深。",
    "character": "c37",
    "next": "D24-r0026"
  },
  {
    "id": "D24-r0026",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "这段总算不需要叫老师了。",
    "character": "c24",
    "next": "D24-r0027"
  },
  {
    "id": "D24-r0027",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "黄艺博",
    "text": "初二还认识了一个，常一起学习。后来生日那次，我酒后嘴欠，她说“嘴欠哦”，把我拉黑了。",
    "character": "c37",
    "next": "D24-r0028"
  },
  {
    "id": "D24-r0028",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "speaker": "李沛霖",
    "text": "你每次说到“后来”，听众都得先做好准备。",
    "character": "c05",
    "next": "interactive-D24-r0028"
  },
  {
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "source": "补写",
    "id": "interactive-D24-r0028",
    "kind": "choice",
    "text": "黄艺博说到“后来”，我怎么追问？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "你先说当时对方回了什么，别跳到名字。",
        "next": "interactive-D24-r0028-say1"
      },
      {
        "text": "你觉得关系好，和对方怎么说，是不是两件事？",
        "next": "interactive-D24-r0028-say2"
      },
      {
        "text": "你自己叫前女友，就当双方都这么认了。",
        "failure": "称呼先确立了关系，对方的回应却没到场。"
      },
      {
        "text": "后面有转折就行，前面验证不用讲。",
        "failure": "转折到了，笑点却找不到自己的起因。"
      },
      {
        "text": "听你讲得这么像，关系那层我就先替你确认。",
        "failure": "自述还没说完，听众却已替另一个人点了头。"
      }
    ]
  },
  {
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "source": "补写",
    "id": "interactive-D24-r0028-say1",
    "kind": "line",
    "text": "你先说当时对方回了什么，别跳到名字。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D24-r0028-reply1"
  },
  {
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "source": "补写",
    "id": "interactive-D24-r0028-reply1",
    "kind": "line",
    "text": "我接着讲。",
    "speaker": "黄艺博",
    "character": "c37",
    "next": "D24-r0029"
  },
  {
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "source": "补写",
    "id": "interactive-D24-r0028-say2",
    "kind": "line",
    "text": "你觉得关系好，和对方怎么说，是不是两件事？",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D24-r0028-reply2"
  },
  {
    "day": "D24",
    "context": "同一回忆 · 黄艺博自述",
    "period": "先问什么叫前女友",
    "background": "park",
    "page": 196,
    "pages": [
      196,
      197
    ],
    "source": "补写",
    "id": "interactive-D24-r0028-reply2",
    "kind": "line",
    "text": "那还得从前面说。",
    "speaker": "黄艺博",
    "character": "c37",
    "next": "D24-r0029"
  },
  {
    "id": "D24-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "text": "好友验证界面",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0030"
  },
  {
    "id": "D24-r0030",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "有个追她的同学，邀我去看她。我一看，惊为天人。",
    "character": "c37",
    "next": "D24-r0031"
  },
  {
    "id": "D24-r0031",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "李沛霖",
    "text": "他让你看，你就也想追？",
    "character": "c05",
    "next": "D24-r0032"
  },
  {
    "id": "D24-r0032",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "我想加微信，她没同意。",
    "character": "c37",
    "next": "D24-r0033"
  },
  {
    "id": "D24-r0033",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "那聊天呢？",
    "character": "c24",
    "next": "D24-r0034"
  },
  {
    "id": "D24-r0034",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "在加好友的界面上聊。",
    "character": "c37",
    "next": "D24-r0035"
  },
  {
    "id": "D24-r0035",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "李沛霖",
    "text": "你说的聊天记录，是好友验证？",
    "character": "c05",
    "next": "D24-r0036"
  },
  {
    "id": "D24-r0036",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "初三运动会，我们还当面聊了。她说了整整一百二十八字。",
    "character": "c37",
    "next": "D24-r0037"
  },
  {
    "id": "D24-r0037",
    "kind": "choice",
    "source": "补写",
    "page": 93,
    "pages": [
      93,
      196,
      197,
      198
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "text": "听到“一百二十八字”，我问他",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "“你还数了？那她同意加你了吗？”",
        "next": "D24-r0038"
      },
      {
        "text": "“你说谈得很欢，具体欢在哪一句？”",
        "next": "D24-r0040"
      },
      {
        "text": "验证没通过也许只是忙，再跟上去提醒一次。",
        "failure": "好友验证还没回音，参谋已替追逐排上下一次。"
      }
    ]
  },
  {
    "id": "D24-r0038",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93,
      196,
      197,
      198
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "text": "“你还数了？那她同意加你了吗？”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D24-r0039"
  },
  {
    "id": "D24-r0039",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "我就是数过，才记得那么清楚。",
    "character": "c37",
    "next": "D24-r0042"
  },
  {
    "id": "D24-r0040",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93,
      196,
      197,
      198
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "text": "“你说谈得很欢，具体欢在哪一句？”",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "D24-r0041"
  },
  {
    "id": "D24-r0041",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "你听我继续讲。",
    "character": "c37",
    "next": "D24-r0042"
  },
  {
    "id": "D24-r0042",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "微信还是没加上。后来我跟着上楼，我是关切她。",
    "character": "c37",
    "next": "D24-r0043"
  },
  {
    "id": "D24-r0043",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "你这么说，她呢？",
    "character": "c24",
    "next": "D24-r0044"
  },
  {
    "id": "D24-r0044",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "黄艺博",
    "text": "把我拉黑了。",
    "character": "c37",
    "next": "D24-r0045"
  },
  {
    "id": "D24-r0045",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 一钗",
    "period": "好友验证界面",
    "background": "park",
    "speaker": "李沛霖",
    "text": "我今天还学到，原来没加好友也能拉黑。",
    "character": "c05",
    "next": "D24-r0046"
  },
  {
    "id": "D24-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "text": "与班里的人也有关系",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0047"
  },
  {
    "id": "D24-r0047",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "黄艺博",
    "text": "高中有个女生做图书委员，我就想当图书助理。",
    "character": "c37",
    "next": "D24-r0048"
  },
  {
    "id": "D24-r0048",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "后来去当了吗？",
    "character": "c24",
    "next": "D24-r0049"
  },
  {
    "id": "D24-r0049",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "黄艺博",
    "text": "知道她有男朋友，就不去了。",
    "character": "c37",
    "next": "D24-r0050"
  },
  {
    "id": "D24-r0050",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "李沛霖",
    "text": "这助理的岗位要求，倒是写得很特别。",
    "character": "c05",
    "next": "D24-r0051"
  },
  {
    "id": "D24-r0051",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "黄艺博",
    "text": "还有一个，我觉得情谊最深。",
    "character": "c37",
    "next": "D24-r0088"
  },
  {
    "id": "D24-r0088",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "黄艺博",
    "text": "结果戚公子来传话，说他有个朋友，是她男朋友，让我离远一点。",
    "character": "c37",
    "next": "D24-r0089"
  },
  {
    "id": "D24-r0089",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "李沛霖",
    "text": "你说情谊最深，接下来却是别人来传这句话？",
    "character": "c05",
    "next": "D24-r0090"
  },
  {
    "id": "D24-r0090",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "黄艺博",
    "text": "所以后来也没成。",
    "character": "c37",
    "next": "D24-r0091"
  },
  {
    "id": "D24-r0091",
    "kind": "line",
    "source": "转述",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆",
    "period": "与班里的人也有关系",
    "background": "park",
    "speaker": "旁白",
    "text": "他说的是从前那次传话。园里的听众还没听到“最深”的证据，这段已经到了结尾。",
    "character": "",
    "next": "D24-r0054"
  },
  {
    "id": "D24-r0054",
    "kind": "scene",
    "source": "演出",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "text": "曹雪芹故居",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0055"
  },
  {
    "id": "D24-r0055",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "同学",
    "text": "讲了这么多人，到了曹雪芹故居，干脆给你编十二钗吧。",
    "character": "",
    "next": "D24-r0056"
  },
  {
    "id": "D24-r0056",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "黄艺博",
    "text": "那就把刚才讲的排进去。",
    "character": "c37",
    "next": "D24-r0057"
  },
  {
    "id": "D24-r0057",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "李沛霖",
    "text": "刚才那位一百二十八字的，是一钗？",
    "character": "c05",
    "next": "D24-r0058"
  },
  {
    "id": "D24-r0058",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "黄艺博",
    "text": "一钗叫珈乐。二钗叫向晚，三钗乃琳，四钗贝拉，七钗柚恩。",
    "character": "c37",
    "next": "D24-r0059"
  },
  {
    "id": "D24-r0059",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "张鹤闻",
    "text": "借ASOUL的名字叫她们，好认些。你刚才讲的同桌，也排进去了？",
    "character": "c24",
    "next": "D24-r0060"
  },
  {
    "id": "D24-r0060",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "黄艺博",
    "text": "十一钗。",
    "character": "c37",
    "next": "D24-r0061"
  },
  {
    "id": "D24-r0061",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "同一回忆 · 命名现场",
    "period": "曹雪芹故居",
    "background": "park",
    "speaker": "李沛霖",
    "text": "名称总算编成了，关系可没有因此全成立。",
    "character": "c05",
    "next": "D24-r0062"
  },
  {
    "id": "D24-r0062",
    "kind": "scene",
    "source": "演出",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "text": "晚风与乒乓球",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0063"
  },
  {
    "id": "D24-r0063",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "周远持",
    "text": "你最近怎么开始练乒乓球了？",
    "character": "c09",
    "next": "D24-r0064"
  },
  {
    "id": "D24-r0064",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "想跟向晚有个共同话题。",
    "character": "c37",
    "next": "D24-r0065"
  },
  {
    "id": "D24-r0065",
    "kind": "line",
    "source": "转述",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他向周远持和彭逸涵学球，微信名也换成了“曾听晚风打向他，曾向晚风打听他”。",
    "character": "",
    "next": "D24-r0066"
  },
  {
    "id": "D24-r0066",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "张鹤闻",
    "text": "名字里这阵晚风，还挺长。",
    "character": "c24",
    "next": "D24-r0067"
  },
  {
    "id": "D24-r0067",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "我还把十二钗的故事告诉她了。",
    "character": "c37",
    "next": "D24-r0068"
  },
  {
    "id": "D24-r0068",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "全部？",
    "character": "c05",
    "next": "D24-r0069"
  },
  {
    "id": "D24-r0069",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197,
      198
    ],
    "day": "D24",
    "context": "回忆 · 十二钗命名后，高二",
    "period": "晚风与乒乓球",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "……她没话说。",
    "character": "c37",
    "next": "D24-r0070"
  },
  {
    "id": "D24-r0070",
    "kind": "scene",
    "source": "演出",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "text": "泡面与付款",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0071"
  },
  {
    "id": "D24-r0071",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "闻，这个面怎么泡？",
    "character": "c37",
    "next": "D24-r0072"
  },
  {
    "id": "D24-r0072",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "张鹤闻",
    "text": "调料放进去，倒热水。你先别把叉子扔了。",
    "character": "c24",
    "next": "D24-r0073"
  },
  {
    "id": "D24-r0073",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "我要买麦当劳，再借一下手机。",
    "character": "c37",
    "next": "D24-r0074"
  },
  {
    "id": "D24-r0074",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "上次的钱呢？",
    "character": "c05",
    "next": "D24-r0075"
  },
  {
    "id": "D24-r0075",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "我不会微信支付。",
    "character": "c37",
    "next": "D24-r0076"
  },
  {
    "id": "D24-r0076",
    "kind": "line",
    "source": "补写",
    "page": 197,
    "pages": [
      197
    ],
    "day": "D24",
    "context": "回忆 · 高二日常",
    "period": "泡面与付款",
    "background": "classroom",
    "speaker": "张鹤闻",
    "text": "冲泡面和付款，今天得教两件事。",
    "character": "c24",
    "next": "D24-r0077"
  },
  {
    "id": "D24-r0077",
    "kind": "scene",
    "source": "演出",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 高二寒假",
    "period": "李悦琳怎么来的",
    "background": "noodle",
    "text": "李悦琳怎么来的",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0078"
  },
  {
    "id": "D24-r0078",
    "kind": "line",
    "source": "转述",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 高二寒假",
    "period": "李悦琳怎么来的",
    "background": "noodle",
    "speaker": "旁白",
    "text": "我和冯君阳在新中关吃饭，碰到初中同学季和他的高中朋友。说起黄艺博，那位朋友忽然激动起来。",
    "character": "",
    "next": "D24-r0079"
  },
  {
    "id": "D24-r0079",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 高二寒假",
    "period": "李悦琳怎么来的",
    "background": "noodle",
    "speaker": "朋友",
    "text": "他前几天在我女朋友朋友圈下留言“小美女又变可爱了”！",
    "character": "",
    "next": "D24-r0080"
  },
  {
    "id": "D24-r0080",
    "kind": "line",
    "source": "转述",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 高二寒假",
    "period": "李悦琳怎么来的",
    "background": "noodle",
    "speaker": "旁白",
    "text": "饭桌上谈出一个恶作剧：大家设了微信号，用网上照片发朋友圈，名字叫“李悦琳”。我把这个号介绍给了黄艺博。",
    "character": "",
    "next": "D24-r0081"
  },
  {
    "id": "D24-r0081",
    "kind": "scene",
    "source": "演出",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "text": "数月之后的揭晓",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D24-r0082"
  },
  {
    "id": "D24-r0082",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "我和李悦琳聊了好几个月。",
    "character": "c37",
    "next": "interactive-D24-r0082"
  },
  {
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "page": 198,
    "pages": [
      198
    ],
    "source": "补写",
    "id": "interactive-D24-r0082",
    "kind": "choice",
    "text": "聊了几个月之后，我怎么问信息差？",
    "speaker": "李沛霖",
    "character": "c05",
    "options": [
      {
        "text": "账号是谁开的，你后来怎么知道？",
        "next": "interactive-D24-r0082-say1"
      },
      {
        "text": "介绍的人和账号里说话的人，先分清再讲。",
        "next": "interactive-D24-r0082-say2"
      },
      {
        "text": "谁来告知就算谁开了账号吧。",
        "failure": "告知者领了账号，真正的揭晓反而被换了人。"
      },
      {
        "text": "聊了几个月就能证明身份，不必再核。",
        "failure": "聊天留了许多行，姓名却没自动变成证件。"
      },
      {
        "text": "先记下账号名字，真正是谁揭晓的可以不留。",
        "failure": "名字终于到了页上，揭晓的那一步却被跳了过去。"
      }
    ]
  },
  {
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "page": 198,
    "pages": [
      198
    ],
    "source": "补写",
    "id": "interactive-D24-r0082-say1",
    "kind": "line",
    "text": "账号是谁开的，你后来怎么知道？",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D24-r0082-reply1"
  },
  {
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "page": 198,
    "pages": [
      198
    ],
    "source": "补写",
    "id": "interactive-D24-r0082-reply1",
    "kind": "line",
    "text": "得说到揭晓那步。",
    "speaker": "黄艺博",
    "character": "c37",
    "next": "D24-r0083"
  },
  {
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "page": 198,
    "pages": [
      198
    ],
    "source": "补写",
    "id": "interactive-D24-r0082-say2",
    "kind": "line",
    "text": "介绍的人和账号里说话的人，先分清再讲。",
    "speaker": "李沛霖",
    "character": "c05",
    "next": "interactive-D24-r0082-reply2"
  },
  {
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "page": 198,
    "pages": [
      198
    ],
    "source": "补写",
    "id": "interactive-D24-r0082-reply2",
    "kind": "line",
    "text": "不是同一个角色。",
    "speaker": "黄艺博",
    "character": "c37",
    "next": "D24-r0083"
  },
  {
    "id": "D24-r0083",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "史绍恺",
    "text": "你知道这个号怎么来的么？是那次聚会后设的，照片也是找来的。",
    "character": "c35",
    "next": "D24-r0084"
  },
  {
    "id": "D24-r0084",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "你说，跟我聊的人……",
    "character": "c37",
    "next": "D24-r0085"
  },
  {
    "id": "D24-r0085",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "史绍恺",
    "text": "不是你以为的那个女生。",
    "character": "c35",
    "next": "D24-r0086"
  },
  {
    "id": "D24-r0086",
    "kind": "line",
    "source": "转述",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "旁白",
    "text": "史绍恺把真相告诉他。那张聊了数月的头像，突然有了完全不同的来历。",
    "character": "",
    "next": "D24-r0087"
  },
  {
    "id": "D24-r0087",
    "kind": "line",
    "source": "补写",
    "page": 198,
    "pages": [
      198
    ],
    "day": "D24",
    "context": "回忆 · 李悦琳事件后续",
    "period": "数月之后的揭晓",
    "background": "classroom",
    "speaker": "张鹤闻",
    "text": "这回连“后来”都要重讲了。",
    "character": "c24",
    "next": "D24-r0092"
  },
  {
    "id": "D24-r0092",
    "kind": "scene",
    "source": "演出",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实 · 11月6日午间",
    "period": "乐器还在桌上",
    "background": "classroom",
    "text": "乐器还在桌上",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D24-r0093"
  },
  {
    "id": "D24-r0093",
    "kind": "line",
    "source": "转述",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实 · 11月6日午间",
    "period": "乐器还在桌上",
    "background": "classroom",
    "speaker": "旁白",
    "text": "讲到后来，植物园里那些名字又和教室里的同学连了起来。桌上的乐器还没收，张鹤闻拿起了笛子。",
    "character": "",
    "next": "D24-r0094"
  },
  {
    "id": "D24-r0094",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实 · 11月6日午间",
    "period": "乐器还在桌上",
    "background": "classroom",
    "speaker": "张鹤闻",
    "text": "故事先停一停。这一遍从哪儿进？",
    "character": "c24",
    "next": "D24-r0095"
  },
  {
    "id": "D24-r0095",
    "kind": "line",
    "source": "补写",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实 · 11月6日午间",
    "period": "乐器还在桌上",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "从刚才没合齐的地方。别又各吹各的。",
    "character": "c05",
    "next": "D24-r0096"
  },
  {
    "id": "D24-r0096",
    "kind": "line",
    "source": "转述",
    "page": 93,
    "pages": [
      93
    ],
    "day": "D24",
    "context": "现实 · 11月6日午间",
    "period": "乐器还在桌上",
    "background": "classroom",
    "speaker": "旁白",
    "text": "八件乐器重新响起来，后排的声音总算不全是讲故事了。",
    "character": "",
    "next": "N33-date"
  },
  {
    "id": "N33-date",
    "kind": "date",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-07",
    "text": "拇指琴八音盒",
    "pov": "c12",
    "character": "",
    "next": "N33-r0070"
  },
  {
    "id": "N33-r0070",
    "kind": "portrait",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "拇指琴八音盒",
    "pov": "c12",
    "character": "c12",
    "speaker": "彭逸涵",
    "next": "N33-r0032"
  },
  {
    "id": "N33-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "骤冷的晨",
    "background": "classroom",
    "text": "骤冷的晨",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N33-r0033"
  },
  {
    "id": "N33-r0033",
    "kind": "line",
    "source": "补写",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "骤冷的晨",
    "background": "classroom",
    "speaker": "彭逸涵",
    "text": "暑气刚尽，旋即零下。翻翻前页，先把手暖起来。",
    "character": "c12",
    "next": "N33-r0034"
  },
  {
    "id": "N33-r0034",
    "kind": "line",
    "source": "转述",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "骤冷的晨",
    "background": "classroom",
    "speaker": "旁白",
    "text": "早操停了，语文连堂，英语也连堂并占。老师不解东洋语，满者播音又似娇笑，按了又播。",
    "character": "",
    "next": "N33-r0035"
  },
  {
    "id": "N33-r0035",
    "kind": "line",
    "source": "补写",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "骤冷的晨",
    "background": "classroom",
    "speaker": "同学",
    "text": "这个音，刚才已经听过。",
    "character": "",
    "next": "N33-r0036"
  },
  {
    "id": "N33-r0036",
    "kind": "scene",
    "source": "演出",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "text": "垃圾桶的讣告",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N33-r0037"
  },
  {
    "id": "N33-r0037",
    "kind": "line",
    "source": "原文",
    "page": 94,
    "pages": [
      94,
      95
    ],
    "day": "N33",
    "context": "现实",
    "period": "垃圾桶的讣告",
    "background": "classroom",
    "speaker": "同学",
    "text": "垃圾桶丢了，发讣告了吗？",
    "character": "",
    "next": "N33-r0038"
  }
];
export default data;
