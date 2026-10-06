import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D06-0011",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "考试该交卷的时候呢？",
    "character": "c26",
    "next": "D06-0012"
  },
  {
    "id": "D06-0012",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "战老师",
    "text": "分低就是分高。",
    "character": "c48",
    "next": "D06-0013"
  },
  {
    "id": "D06-0013",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "老师的对偶句越来越严整了。",
    "character": "c16",
    "next": "D06-0014"
  },
  {
    "id": "D06-0014",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "你们入境完，不会已经出境了吧？",
    "character": "c46",
    "next": "D06-0015"
  },
  {
    "id": "D06-0015",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "周远持",
    "text": "退境。",
    "character": "c09",
    "next": "D06-r0015"
  },
  {
    "id": "D06-r0015",
    "kind": "choice",
    "source": "补写",
    "page": 18,
    "pages": [
      18,
      182
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "text": "听到“分低就是分高”，我怎么接",
    "speaker": "戴向阳",
    "character": "c16",
    "options": [
      {
        "text": "“老师，这句得配着‘慢就是快’一块听吧。”",
        "next": "D06-r0016"
      },
      {
        "text": "“那我先把漏的过程补好，别只顾着快。”",
        "next": "D06-r0018"
      },
      {
        "text": "既然分低就是分高，我这次就不急着订正了。",
        "failure": "反话记得很牢，低分却没有陪它翻面。"
      }
    ]
  },
  {
    "id": "D06-r0016",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18,
      182
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "text": "“老师，这句得配着‘慢就是快’一块听吧。”",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "D06-r0017"
  },
  {
    "id": "D06-r0017",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "战老师",
    "text": "你把题写稳，别只背我的句子。",
    "character": "c48",
    "next": "N05-date"
  },
  {
    "id": "D06-r0018",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18,
      182
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "text": "“那我先把漏的过程补好，别只顾着快。”",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "D06-r0019"
  },
  {
    "id": "D06-r0019",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "speaker": "战老师",
    "text": "稳住，着急也要慢。",
    "character": "c48",
    "next": "N05-date"
  },
  {
    "id": "N05-date",
    "kind": "date",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-08-26",
    "text": "培训一天哪够",
    "pov": "c17",
    "character": "",
    "next": "N05-r0052"
  },
  {
    "id": "N05-r0052",
    "kind": "portrait",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "培训一天哪够",
    "pov": "c17",
    "character": "c17",
    "speaker": "李沐衡",
    "next": "N05-r0019"
  },
  {
    "id": "N05-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "进出会议",
    "background": "classroom",
    "text": "进出会议",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0020"
  },
  {
    "id": "N05-r0020",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "进出会议",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "开头是什么？字有亿点丑，先见谅。",
    "character": "c17",
    "next": "N05-r0021"
  },
  {
    "id": "N05-r0021",
    "kind": "line",
    "source": "转述",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "进出会议",
    "background": "classroom",
    "speaker": "旁白",
    "text": "会议限时六十分钟。时间一到，退出，再进，课堂的连接得重新接一遍。",
    "character": "",
    "next": "N05-r0022"
  },
  {
    "id": "N05-r0022",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "进出会议",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "人没换，会议换了。",
    "character": "c17",
    "next": "N05-r0023"
  },
  {
    "id": "N05-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "text": "听课的熟人",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0024"
  },
  {
    "id": "N05-r0024",
    "kind": "line",
    "source": "转述",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "speaker": "旁白",
    "text": "秦老师来听英语，热情招呼张鹤闻。熟悉的名字从老师嘴里喊出，班里转过几张脸。",
    "character": "",
    "next": "N05-r0025"
  },
  {
    "id": "N05-r0025",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "speaker": "战老师",
    "text": "站得也不直，训的什么呀！军训还没我们补课时间长呢。",
    "character": "c48",
    "next": "interactive-N05-r0025"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0025",
    "kind": "choice",
    "text": "军训和补课被比起来，我怎么接？",
    "speaker": "李沐衡",
    "character": "c17",
    "options": [
      {
        "text": "补课时间长，站和坐都得有点样子。",
        "next": "interactive-N05-r0025-say1"
      },
      {
        "text": "楼下那阵歌还在，咱们接着看题。",
        "next": "interactive-N05-r0025-say2"
      },
      {
        "text": "坐着补课不累，晚点再认真吧。",
        "failure": "晚点到了，认真还堵在路上。"
      },
      {
        "text": "时间都补够了，今天就不必再查漏。",
        "failure": "课时补得整齐，漏洞却没按课时结账。"
      }
    ]
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0025-say1",
    "kind": "line",
    "text": "补课时间长，站和坐都得有点样子。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-N05-r0025-reply1"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0025-reply1",
    "kind": "line",
    "text": "先坐正。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N05-r0026"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0025-say2",
    "kind": "line",
    "text": "楼下那阵歌还在，咱们接着看题。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-N05-r0025-reply2"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0025-reply2",
    "kind": "line",
    "text": "别让歌声带走了。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N05-r0026"
  },
  {
    "id": "N05-r0026",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "楼下军训，又成了楼上数学的话题。",
    "character": "c17",
    "next": "N05-r0027"
  },
  {
    "id": "N05-r0027",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "要让我女儿养一个像她那样的孩子。",
    "character": "c46",
    "next": "N05-r0028"
  },
  {
    "id": "N05-r0028",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "听课的熟人",
    "background": "classroom",
    "speaker": "同学",
    "text": "这句话听着，好大的怨气。",
    "character": "",
    "next": "N05-r0029"
  },
  {
    "id": "N05-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "text": "多一天假",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0030"
  },
  {
    "id": "N05-r0030",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "speaker": "HQ",
    "text": "走读生可以申请住宿了。",
    "character": "c45",
    "next": "N05-r0031"
  },
  {
    "id": "N05-r0031",
    "kind": "line",
    "source": "转述",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "speaker": "旁白",
    "text": "物理课又传来消息：老师去培训，多放一天假。",
    "character": "",
    "next": "N05-r0032"
  },
  {
    "id": "N05-r0032",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "培训一天哪够啊！",
    "character": "c30",
    "next": "N05-r0033"
  },
  {
    "id": "N05-r0033",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "speaker": "同学",
    "text": "你是替老师考虑，还是替自己考虑？",
    "character": "",
    "next": "N05-r0034"
  },
  {
    "id": "N05-r0034",
    "kind": "line",
    "source": "补写",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "今天素材虽少，这句必须写下。退出会议，还能退出上课一天。",
    "character": "c17",
    "next": "interactive-N05-r0034"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0034",
    "kind": "choice",
    "text": "多了一天假，我怎样收拾书包？",
    "speaker": "李沐衡",
    "character": "c17",
    "options": [
      {
        "text": "把要带的篇子数清，再高兴也别漏。",
        "next": "interactive-N05-r0034-say1"
      },
      {
        "text": "先安排这一天，别醒来才发现没想过。",
        "next": "interactive-N05-r0034-say2"
      },
      {
        "text": "既然是多出来的，就完全不算进计划。",
        "failure": "多出的时间没找到主人，转眼又回了日历。"
      },
      {
        "text": "本子先都留校，忘了什么再说。",
        "failure": "假期带回了轻书包，也带回了一道无法打开的题。"
      }
    ]
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0034-say1",
    "kind": "line",
    "text": "把要带的篇子数清，再高兴也别漏。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-N05-r0034-reply1"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0034-reply1",
    "kind": "line",
    "text": "多出来的假期终于有了要带回去的纸。",
    "speaker": "旁白",
    "character": "",
    "next": "N05-r0036"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0034-say2",
    "kind": "line",
    "text": "先安排这一天，别醒来才发现没想过。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "interactive-N05-r0034-reply2"
  },
  {
    "day": "N05",
    "context": "现实",
    "period": "多一天假",
    "background": "classroom",
    "page": 19,
    "pages": [
      19
    ],
    "source": "补写",
    "id": "interactive-N05-r0034-reply2",
    "kind": "line",
    "text": "假日还没开始，桌上的事先排好了。",
    "speaker": "旁白",
    "character": "",
    "next": "N05-r0036"
  },
  {
    "id": "N05-r0036",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0037"
  },
  {
    "id": "N05-r0037",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "开头？开头是什么？",
    "character": "",
    "next": "N05-r0038"
  },
  {
    "id": "N05-r0038",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "字有亿点丑，读者见谅。",
    "character": "",
    "next": "N05-r0039"
  },
  {
    "id": "N05-r0039",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "腾讯会议限时60分钟，不得不出每节课进出一次。",
    "character": "",
    "next": "N05-r0040"
  },
  {
    "id": "N05-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "英语课 · 课间手帐",
    "background": "classroom",
    "text": "英语课 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0041"
  },
  {
    "id": "N05-r0041",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "英语课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "秦老师来听课，zhw被热情招呼。",
    "character": "",
    "next": "N05-r0042"
  },
  {
    "id": "N05-r0042",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "英语课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "outman v. 在数量上胜过，人数胜过。",
    "character": "",
    "next": "N05-r0043"
  },
  {
    "id": "N05-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "数学课 · 课间手帐",
    "background": "classroom",
    "text": "数学课 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0044"
  },
  {
    "id": "N05-r0044",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "数学课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“站得也不直，训的什么呀！”——战战锐评高一军训。",
    "character": "",
    "next": "N05-r0045"
  },
  {
    "id": "N05-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "语文课 · 课间手帐",
    "background": "classroom",
    "text": "语文课 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0046"
  },
  {
    "id": "N05-r0046",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "语文课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“要让我女儿养一个像她那样的孩子。”——好大的怨气。",
    "character": "",
    "next": "N05-r0047"
  },
  {
    "id": "N05-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "text": "午休 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0048"
  },
  {
    "id": "N05-r0048",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“走读生可以申请住宿了！”——HQ。",
    "character": "",
    "next": "N05-r0049"
  },
  {
    "id": "N05-r0049",
    "kind": "scene",
    "source": "演出",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "物理课 · 课间手帐",
    "background": "classroom",
    "text": "物理课 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N05-r0050"
  },
  {
    "id": "N05-r0050",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "物理课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "因为老师要培训多放一天假，“培训一天哪够啊！”——SC。",
    "character": "",
    "next": "N05-r0051"
  },
  {
    "id": "N05-r0051",
    "kind": "line",
    "source": "原文",
    "page": 19,
    "pages": [
      19
    ],
    "day": "N05",
    "context": "现实",
    "period": "物理课 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今天素材有点少。",
    "character": "",
    "next": "D07-date"
  },
  {
    "id": "D07-date",
    "kind": "date",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-08-30",
    "text": "军训仍在继续",
    "pov": "c08",
    "character": "",
    "next": "D07-0001"
  },
  {
    "id": "D07-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "军训仍在继续",
    "pov": "c08",
    "character": "c08",
    "speaker": "陈俊言",
    "next": "D07-0002"
  },
  {
    "id": "D07-0002",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "text": "军训仍在继续",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-0003"
  },
  {
    "id": "D07-0003",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "陈俊言",
    "text": "最长周末结束，我以为楼下终于安静了。",
    "character": "c08",
    "next": "D07-0005"
  },
  {
    "id": "D07-0005",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "周远持",
    "text": "初中军训无缝接上。",
    "character": "c09",
    "next": "D07-0006"
  },
  {
    "id": "D07-0006",
    "kind": "line",
    "source": "转述",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ把窗边高三学生的课间娱乐拍了下来。",
    "character": "",
    "next": "D07-0007"
  },
  {
    "id": "D07-0007",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "解释含义题，两个人得两分，十二个人得一分，剩下都是零蛋。",
    "character": "c46",
    "next": "D07-0008"
  },
  {
    "id": "D07-0008",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "周远持",
    "text": "那我把自己的鸿篇巨著读一下。写得太烂了。",
    "character": "c09",
    "next": "interactive-D07-0008"
  },
  {
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-0008",
    "kind": "choice",
    "text": "持持说自己的文章太烂，我怎么接？",
    "speaker": "陈俊言",
    "character": "c08",
    "options": [
      {
        "text": "你先读，哪段没写好，听完再说。",
        "next": "interactive-D07-0008-say1"
      },
      {
        "text": "别先把自己骂完，至少让我听到文章。",
        "next": "interactive-D07-0008-say2"
      },
      {
        "text": "既然你都说烂，就不读了吧。",
        "failure": "文章还没出场，作者的自评先替它谢幕。"
      },
      {
        "text": "先照着范文改到一样，再给我们看。",
        "failure": "原来的声音改没了，听众只等来一份熟面孔。"
      }
    ]
  },
  {
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-0008-say1",
    "kind": "line",
    "text": "你先读，哪段没写好，听完再说。",
    "speaker": "陈俊言",
    "character": "c08",
    "next": "interactive-D07-0008-reply1"
  },
  {
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-0008-reply1",
    "kind": "line",
    "text": "那我接着。",
    "speaker": "周远持",
    "character": "c09",
    "next": "D07-0009"
  },
  {
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-0008-say2",
    "kind": "line",
    "text": "别先把自己骂完，至少让我听到文章。",
    "speaker": "陈俊言",
    "character": "c08",
    "next": "interactive-D07-0008-reply2"
  },
  {
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-0008-reply2",
    "kind": "line",
    "text": "听到后面你再评。",
    "speaker": "周远持",
    "character": "c09",
    "next": "D07-0009"
  },
  {
    "id": "D07-0009",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "军训仍在继续",
    "background": "classroom",
    "speaker": "陈俊言",
    "text": "四十分的“太烂”，要不要先给我们一个预警。",
    "character": "c08",
    "next": "D07-0010"
  },
  {
    "id": "D07-0010",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会",
    "background": "classroom",
    "text": "班会",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-0011"
  },
  {
    "id": "D07-0011",
    "kind": "line",
    "source": "转述",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会",
    "background": "classroom",
    "speaker": "旁白",
    "text": "凌艺坤、徐启元、石杨、荆巨和张瑞麒分享经验。对答案派与不对答案派各有说法。",
    "character": "",
    "next": "D07-0012"
  },
  {
    "id": "D07-0012",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会",
    "background": "classroom",
    "speaker": "陈俊言",
    "text": "不同办法可以交流，最终还得看自己怎样用。",
    "character": "c08",
    "next": "D07-0013"
  },
  {
    "id": "D07-0013",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会",
    "background": "classroom",
    "speaker": "周远持",
    "text": "住宿申请表明天交。晚自习也要有自己的安排。",
    "character": "c09",
    "next": "D07-r0028"
  },
  {
    "id": "D07-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0029"
  },
  {
    "id": "D07-r0029",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "结束了三天假期，或许可以称为高三最长“周末”，本以为高一军训终于结束，结果上课时分楼下又传来熟悉的声音，一问才知初中军训又不间断地开始了……同学们对此事的热情依旧不减，于是便有了HQ拍下的",
    "character": "",
    "next": "D07-r0030"
  },
  {
    "id": "D07-r0030",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "名场面——高三学生每天的娱乐项目。",
    "character": "",
    "next": "D07-r0031"
  },
  {
    "id": "D07-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0032"
  },
  {
    "id": "D07-r0032",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "再次强调一把复习查缺补漏的重要性！",
    "character": "",
    "next": "D07-r0033"
  },
  {
    "id": "D07-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0034"
  },
  {
    "id": "D07-r0034",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "雷老师令人迷惑的作图，为使X、Y染色体同源区段靠近而使X染色体“盘曲折叠”。",
    "character": "",
    "next": "D07-r0035"
  },
  {
    "id": "D07-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0036"
  },
  {
    "id": "D07-r0036",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“不要小看牛顿第一定律。”",
    "character": "",
    "next": "D07-r0037"
  },
  {
    "id": "D07-r0037",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0038"
  },
  {
    "id": "D07-r0038",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“这道解释含义的题只有2人得了2分，12人得了1分，剩下全是零蛋！”",
    "character": "",
    "next": "D07-r0039"
  },
  {
    "id": "D07-r0039",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "zyc在全班朗读自己在考上的“鸿篇巨著”，并谦虚地说自己写得太烂了，40/50？",
    "character": "",
    "next": "D07-r0040"
  },
  {
    "id": "D07-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0041"
  },
  {
    "id": "D07-r0041",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师找4名同学在黑板上写题，梦回高二下学导数的时候……并与同学们针对一道题的答案展开了广泛而友好的讨论。",
    "character": "",
    "next": "D07-r0042"
  },
  {
    "id": "D07-r0042",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会 · 课间手帐",
    "background": "classroom",
    "text": "班会 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D07-r0043"
  },
  {
    "id": "D07-r0043",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "经验分享：坤、元、石杨、荆巨、ZRQ。",
    "character": "",
    "next": "D07-r0044"
  },
  {
    "id": "D07-r0044",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "班里分为对答案派与不对答案派。",
    "character": "",
    "next": "D07-r0045"
  },
  {
    "id": "D07-r0045",
    "kind": "line",
    "source": "原文",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "现实",
    "period": "班会 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“晚自习的同学明天交正式住宿申请表！”",
    "character": "",
    "next": "D07-r0013"
  },
  {
    "id": "D07-r0013",
    "kind": "scene",
    "source": "演出",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "text": "百分之九十",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D07-r0014"
  },
  {
    "id": "D07-r0014",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "我有一届得意门生，高考语文区区一百三十多。你们当轻易超过他。",
    "character": "c46",
    "next": "D07-r0015"
  },
  {
    "id": "D07-r0015",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "同学",
    "text": "老师，“区区”这两个字，能换换吗？",
    "character": "",
    "next": "D07-r0016"
  },
  {
    "id": "D07-r0016",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "元元，期末当考到百分之九十。",
    "character": "c46",
    "next": "D07-r0017"
  },
  {
    "id": "D07-r0017",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "您下课前一说，我回去连卷子的总分都得重新看一遍。",
    "character": "xu",
    "next": "D07-r0018"
  },
  {
    "id": "D07-r0018",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "断句用铅笔的，我都会擦掉。作文先把作业交了再说。",
    "character": "c46",
    "next": "interactive-D07-r0018"
  },
  {
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-r0018",
    "kind": "choice",
    "text": "老师提醒断句别用铅笔，我怎么回应？",
    "speaker": "陈俊言",
    "character": "c08",
    "options": [
      {
        "text": "记下了，我把这份也换笔，免得判的时候看不见。",
        "next": "interactive-D07-r0018-say1"
      },
      {
        "text": "作业先交，断句那几处我再检查。",
        "next": "interactive-D07-r0018-say2"
      },
      {
        "text": "等正式考试再换，平时铅笔方便。",
        "failure": "方便擦掉的答案，先方便了老师的橡皮。"
      },
      {
        "text": "我描深些就行，不必换笔。",
        "failure": "笔迹黑了一点，橡皮却没有认出这份例外。"
      }
    ]
  },
  {
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-r0018-say1",
    "kind": "line",
    "text": "记下了，我把这份也换笔，免得判的时候看不见。",
    "speaker": "陈俊言",
    "character": "c08",
    "next": "interactive-D07-r0018-reply1"
  },
  {
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-r0018-reply1",
    "kind": "line",
    "text": "该用的笔用清楚。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D07-r0019"
  },
  {
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-r0018-say2",
    "kind": "line",
    "text": "作业先交，断句那几处我再检查。",
    "speaker": "陈俊言",
    "character": "c08",
    "next": "interactive-D07-r0018-reply2"
  },
  {
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "page": 20,
    "pages": [
      20
    ],
    "source": "补写",
    "id": "interactive-D07-r0018-reply2",
    "kind": "line",
    "text": "别等我来追。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D07-r0019"
  },
  {
    "id": "D07-r0019",
    "kind": "line",
    "source": "补写",
    "page": 20,
    "pages": [
      20
    ],
    "day": "D07",
    "context": "回忆 · 孙老师的激将",
    "period": "百分之九十",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "我先换笔，作文也带上。",
    "character": "xu",
    "next": "N06-date"
  },
  {
    "id": "N06-date",
    "kind": "date",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-08-31",
    "text": "绵羊长鸡脚",
    "pov": "xu",
    "character": "",
    "next": "N06-r0056"
  },
  {
    "id": "N06-r0056",
    "kind": "portrait",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "绵羊长鸡脚",
    "pov": "xu",
    "character": "xu",
    "speaker": "徐启元",
    "next": "N06-r0020"
  },
  {
    "id": "N06-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "text": "楼下还有歌",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0021"
  },
  {
    "id": "N06-r0021",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "speaker": "战老师",
    "text": "听着歌声学习真是心旷神怡。因为这一点歌声就做不进去题，这可成不了大事。",
    "character": "c48",
    "next": "interactive-N06-r0021"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0021",
    "kind": "choice",
    "text": "歌声又飘上来，我怎么把话接回课堂？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "听见了，题也得做，先看刚才那步。",
        "next": "interactive-N06-r0021-say1"
      },
      {
        "text": "有歌也能写，卡住的可别全赖歌声。",
        "next": "interactive-N06-r0021-say2"
      },
      {
        "text": "楼下不停，我这道就先停了。",
        "failure": "歌声唱到了结尾，草稿仍停在开头。"
      },
      {
        "text": "把歌词先记全，题可以下课再赶。",
        "failure": "歌词一字不漏，课堂却漏了最关键的一步。"
      }
    ]
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0021-say1",
    "kind": "line",
    "text": "听见了，题也得做，先看刚才那步。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N06-r0021-reply1"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0021-reply1",
    "kind": "line",
    "text": "把思路接回来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N06-r0022"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0021-say2",
    "kind": "line",
    "text": "有歌也能写，卡住的可别全赖歌声。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N06-r0021-reply2"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0021-reply2",
    "kind": "line",
    "text": "先看自己卡在哪儿。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N06-r0022"
  },
  {
    "id": "N06-r0022",
    "kind": "line",
    "source": "转述",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "speaker": "旁白",
    "text": "楼下的声音往上飘，卷子仍在桌上。同学刚被声音带走，又被老师带回题里。",
    "character": "",
    "next": "N06-r0023"
  },
  {
    "id": "N06-r0023",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "看罗翔峰写的作文，我有时候都要查字典。",
    "character": "c47",
    "next": "N06-r0024"
  },
  {
    "id": "N06-r0024",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "楼下还有歌",
    "background": "classroom",
    "speaker": "同学",
    "text": "老师也有要查的词。",
    "character": "",
    "next": "N06-r0025"
  },
  {
    "id": "N06-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "平均两分",
    "background": "classroom",
    "text": "平均两分",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0026"
  },
  {
    "id": "N06-r0026",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "平均两分",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "平均分为两分的诗歌练习。",
    "character": "c46",
    "next": "N06-r0027"
  },
  {
    "id": "N06-r0027",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "平均两分",
    "background": "classroom",
    "speaker": "同学",
    "text": "平均分，一下就听清了。",
    "character": "",
    "next": "N06-r0028"
  },
  {
    "id": "N06-r0028",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "平均两分",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "你闺女打我儿子。",
    "character": "c46",
    "next": "N06-r0029"
  },
  {
    "id": "N06-r0029",
    "kind": "line",
    "source": "转述",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "平均两分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "话题从答卷换成家里的孩子，刚才的“两分”还在同学耳边。",
    "character": "",
    "next": "N06-r0030"
  },
  {
    "id": "N06-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "text": "笔和板书",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0031"
  },
  {
    "id": "N06-r0031",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "同学",
    "text": "刘恒怿去打竞赛了。",
    "character": "",
    "next": "N06-r0032"
  },
  {
    "id": "N06-r0032",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "老师，您把我笔顺走了。",
    "character": "c17",
    "next": "interactive-N06-r0032"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0032",
    "kind": "choice",
    "text": "沐衡说老师把笔顺走了，我怎么插话？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "先让老师把这一行写完，笔别再忘了拿。",
        "next": "interactive-N06-r0032-say1"
      },
      {
        "text": "认准了，等板书停下再接回来。",
        "next": "interactive-N06-r0032-say2"
      },
      {
        "text": "你还有别的笔，这支就别问了。",
        "failure": "备用笔开始上班，原来的那支却没等到归途。"
      },
      {
        "text": "现在就过去拿，板书断一行没关系。",
        "failure": "笔终于回来了，板书却留了一个没写完的转折。"
      }
    ]
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0032-say1",
    "kind": "line",
    "text": "先让老师把这一行写完，笔别再忘了拿。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N06-r0032-reply1"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0032-reply1",
    "kind": "line",
    "text": "我盯着这支。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "N06-r0033"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0032-say2",
    "kind": "line",
    "text": "认准了，等板书停下再接回来。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N06-r0032-reply2"
  },
  {
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "page": 21,
    "pages": [
      21
    ],
    "source": "补写",
    "id": "interactive-N06-r0032-reply2",
    "kind": "line",
    "text": "这回得记着。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "N06-r0033"
  },
  {
    "id": "N06-r0033",
    "kind": "line",
    "source": "转述",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学课一边解释人去了哪里，一边追回走错地方的笔。",
    "character": "",
    "next": "N06-r0034"
  },
  {
    "id": "N06-r0034",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "HQ",
    "text": "不愿拖堂加班的老师不是好老师。",
    "character": "c45",
    "next": "N06-r0035"
  },
  {
    "id": "N06-r0035",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "雷老师",
    "text": "绵羊长鸡脚。",
    "character": "c49",
    "next": "N06-r0036"
  },
  {
    "id": "N06-r0036",
    "kind": "line",
    "source": "转述",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物板书活化起来，像毕加索式的图。同学跟着把线条抄下，鸡脚和绵羊也留在了这页上。",
    "character": "",
    "next": "N06-r0037"
  },
  {
    "id": "N06-r0037",
    "kind": "line",
    "source": "补写",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "笔和板书",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "今天不把快乐喊得太响，记下来就够。",
    "character": "xu",
    "next": "N06-r0039"
  },
  {
    "id": "N06-r0039",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0040"
  },
  {
    "id": "N06-r0040",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "向来认为，时刻将“苦中作乐”宣之于口者，实非能于苦难中真正寻得乐趣之人。于涸辙之中静观其变，情胜其欲者，固知时日并无晴雨之分，岁月既无悲喜之别，便无所谓喜矣。",
    "character": "",
    "next": "N06-r0041"
  },
  {
    "id": "N06-r0041",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "高三亦如此，不为失败所抑志，不因暂胜而忘形。不过分倾注情感，则忙碌之中所遗者，便只有目标明确之充实，复见旧知的泰然。高三难乎哉？不难矣。",
    "character": "",
    "next": "N06-r0042"
  },
  {
    "id": "N06-r0042",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0043"
  },
  {
    "id": "N06-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0044"
  },
  {
    "id": "N06-r0044",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“看罗翔峰写的作文我有时候都要查字典。”——杨sir。",
    "character": "",
    "next": "N06-r0045"
  },
  {
    "id": "N06-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0046"
  },
  {
    "id": "N06-r0046",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“平均分为两分的诗歌练习。”“你闺女打我儿子。”——孙老师。",
    "character": "",
    "next": "N06-r0047"
  },
  {
    "id": "N06-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0048"
  },
  {
    "id": "N06-r0048",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“刘恒怿去打竞赛了。”——全班同学。",
    "character": "",
    "next": "N06-r0049"
  },
  {
    "id": "N06-r0049",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“您把我笔顺走了。”——LMH。",
    "character": "",
    "next": "N06-r0050"
  },
  {
    "id": "N06-r0050",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0051"
  },
  {
    "id": "N06-r0051",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“不愿拖堂加班的老师不是好老师。”——HQ。（谢谢韩老师，您辛苦了。）",
    "character": "",
    "next": "N06-r0052"
  },
  {
    "id": "N06-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N06-r0053"
  },
  {
    "id": "N06-r0053",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“绵羊长鸡脚。”——雷老师。以及活化后的毕加索式板书。",
    "character": "",
    "next": "N06-r0054"
  },
  {
    "id": "N06-r0054",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "高三是锻造的结晶之日，是自我投资的返利之时，当风雨兼程，欣于所遇，静心品味春风拂身，踏上一切之荆棘，并最终收获经历与成长，方为高三之真正意味，亦为此志之精髓。",
    "character": "",
    "next": "N06-r0055"
  },
  {
    "id": "N06-r0055",
    "kind": "line",
    "source": "原文",
    "page": 21,
    "pages": [
      21
    ],
    "day": "N06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "倘若整日倦于前行，怨天尤人，甚至以“苦中作乐”来自我安慰与感动，实失高三之真实意义。",
    "character": "",
    "next": "D08-date"
  },
  {
    "id": "D08-date",
    "kind": "date",
    "source": "演出",
    "page": 22,
    "pages": [
      22,
      212
    ],
    "day": "D08",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-01",
    "text": "新学期",
    "pov": "c10",
    "character": "",
    "next": "D08-0001"
  },
  {
    "id": "D08-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 22,
    "pages": [
      22,
      212
    ],
    "day": "D08",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "新学期",
    "pov": "c10",
    "character": "c10",
    "speaker": "黄鹤鸣",
    "next": "D08-0002"
  },
  {
    "id": "D08-0002",
    "kind": "scene",
    "source": "演出",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "text": "新学期",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D08-0003"
  },
  {
    "id": "D08-0003",
    "kind": "line",
    "source": "补写",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "黄鹤鸣",
    "text": "大家好，我是黄鹤鸣。",
    "character": "c10",
    "next": "D08-0004"
  },
  {
    "id": "D08-0004",
    "kind": "line",
    "source": "补写",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "欢迎！位置在这里。",
    "character": "xu",
    "next": "D08-0006"
  },
  {
    "id": "D08-0006",
    "kind": "line",
    "source": "补写",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "陈熙",
    "text": "新同学到来，今天又是我的十八岁生日。",
    "character": "c11",
    "next": "D08-0007"
  },
  {
    "id": "D08-0007",
    "kind": "line",
    "source": "原文",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "全置顶就是没置顶。",
    "character": "c07",
    "next": "D08-0008"
  },
  {
    "id": "D08-0008",
    "kind": "line",
    "source": "原文",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "我儿子也这么说。",
    "character": "c46",
    "next": "D08-0009"
  },
  {
    "id": "D08-0009",
    "kind": "line",
    "source": "补写",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "正午太阳高度角大家都会做，我就不算了。",
    "character": "c30",
    "next": "D08-0010"
  },
  {
    "id": "D08-0010",
    "kind": "line",
    "source": "补写",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "张强",
    "text": "邵聪，来黑板上算一下数值。",
    "character": "c52",
    "next": "D08-0011"
  },
  {
    "id": "D08-0011",
    "kind": "line",
    "source": "原文",
    "page": 22,
    "pages": [
      22
    ],
    "day": "D08",
    "context": "现实",
    "period": "新学期",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "给大家出丑了。",
    "character": "c30",
    "next": "D08-0012"
  }
];
export default data;
