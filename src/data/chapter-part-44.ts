import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D59-r0009",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "HQ",
    "text": "向阳呢？怎么还没出来？",
    "character": "c45",
    "next": "D59-r0010"
  },
  {
    "id": "D59-r0010",
    "kind": "line",
    "source": "转述",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "旁白",
    "text": "我终于慢悠悠走出来，脸还是红润的，神情很平静。",
    "character": "",
    "next": "D59-r0011"
  },
  {
    "id": "D59-r0011",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "HQ",
    "text": "你怎么去备用考场了？",
    "character": "c45",
    "next": "D59-r0012"
  },
  {
    "id": "D59-r0012",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "戴向阳",
    "text": "我在考场里老伸胳膊，影响后面的人。他们让我换到单间。",
    "character": "c16",
    "next": "D59-r0013"
  },
  {
    "id": "D59-r0013",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "HQ",
    "text": "我在外面不知道，还一直担心。",
    "character": "c45",
    "next": "interactive-D59-r0013"
  },
  {
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "source": "补写",
    "id": "interactive-D59-r0013",
    "kind": "choice",
    "text": "HQ说一直担心，我怎么解释备用考场？",
    "speaker": "戴向阳",
    "character": "c16",
    "options": [
      {
        "text": "老师，让您担心了，我从当时为什么换场说。",
        "next": "interactive-D59-r0013-say1"
      },
      {
        "text": "人还没出来，您在外面不知道，这段我得交代。",
        "next": "interactive-D59-r0013-say2"
      },
      {
        "text": "就说题做得久，真正换场的原因先不说。",
        "failure": "等待找到了借口，担心却没找到真实的来路。"
      },
      {
        "text": "您没看见就当没发生过，别问了。",
        "failure": "门外没有听见，门内的事却被一句话抹去。"
      }
    ]
  },
  {
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "source": "补写",
    "id": "interactive-D59-r0013-say1",
    "kind": "line",
    "text": "老师，让您担心了，我从当时为什么换场说。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D59-r0013-reply1"
  },
  {
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "source": "补写",
    "id": "interactive-D59-r0013-reply1",
    "kind": "line",
    "text": "把情况讲清。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D59-r0014"
  },
  {
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "source": "补写",
    "id": "interactive-D59-r0013-say2",
    "kind": "line",
    "text": "人还没出来，您在外面不知道，这段我得交代。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D59-r0013-reply2"
  },
  {
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "source": "补写",
    "id": "interactive-D59-r0013-reply2",
    "kind": "line",
    "text": "我听着。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D59-r0014"
  },
  {
    "id": "D59-r0014",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "回忆 · 生物考试后",
    "period": "为什么没出来",
    "background": "gate",
    "speaker": "戴向阳",
    "text": "单间倒挺安静。",
    "character": "c16",
    "next": "D59-r0015"
  },
  {
    "id": "D59-r0015",
    "kind": "scene",
    "source": "演出",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "高考后",
    "period": "考完的页边",
    "background": "gate",
    "text": "考完的页边",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D59-r0016"
  },
  {
    "id": "D59-r0016",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "高考后",
    "period": "考完的页边",
    "background": "gate",
    "speaker": "雷雨泽",
    "text": "今年的答疑、可乐、金子，现在都可以重新看一眼。",
    "character": "c04",
    "next": "D59-r0017"
  },
  {
    "id": "D59-r0017",
    "kind": "line",
    "source": "补写",
    "page": 187,
    "pages": [
      187,
      196
    ],
    "day": "D59",
    "context": "高考后",
    "period": "考完的页边",
    "background": "gate",
    "speaker": "徐子涵",
    "text": "分数还没齐，玩笑先齐了。",
    "character": "c03",
    "next": "D60-date"
  },
  {
    "id": "D60-date",
    "kind": "date",
    "source": "演出",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-06-11",
    "text": "毕业，再会",
    "pov": "c07",
    "character": "",
    "next": "D60-0001"
  },
  {
    "id": "D60-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "毕业，再会",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "D60-0002"
  },
  {
    "id": "D60-0002",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "text": "毕业照的空椅",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D60-0003"
  },
  {
    "id": "D60-0003",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "speaker": "刘恒怿",
    "text": "大家还在排队，黄鹤鸣怎么往前去了？",
    "character": "c07",
    "next": "interactive-D60-0003"
  },
  {
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "source": "补写",
    "id": "interactive-D60-0003",
    "kind": "choice",
    "text": "黄鹤鸣往前走，我怎样招呼？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "先等等大家，这一排还没收齐。",
        "next": "interactive-D60-0003-say1"
      },
      {
        "text": "都得入镜，别让后面的人找不到队。",
        "next": "interactive-D60-0003-say2"
      },
      {
        "text": "你先拍完就行，大家各拍各的。",
        "failure": "一张合影多了许多单人位置，却没等到全班站齐。"
      },
      {
        "text": "空椅子不用管，回头把没来的当来了。",
        "failure": "照片补齐了说法，空着的位置却仍没有人。"
      }
    ]
  },
  {
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "source": "补写",
    "id": "interactive-D60-0003-say1",
    "kind": "line",
    "text": "先等等大家，这一排还没收齐。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D60-0003-reply1"
  },
  {
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "source": "补写",
    "id": "interactive-D60-0003-reply1",
    "kind": "line",
    "text": "我先看前边。",
    "speaker": "黄鹤鸣",
    "character": "c10",
    "next": "D60-0005"
  },
  {
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "source": "补写",
    "id": "interactive-D60-0003-say2",
    "kind": "line",
    "text": "都得入镜，别让后面的人找不到队。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-D60-0003-reply2"
  },
  {
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "source": "补写",
    "id": "interactive-D60-0003-reply2",
    "kind": "line",
    "text": "看看还有谁。",
    "speaker": "黄鹤鸣",
    "character": "c10",
    "next": "D60-0005"
  },
  {
    "id": "D60-0005",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "speaker": "黄鹤鸣",
    "text": "老师旁边有空椅。",
    "character": "c10",
    "next": "D60-0006"
  },
  {
    "id": "D60-0006",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 合照实日未定",
    "period": "毕业照的空椅",
    "background": "graduation-photo",
    "speaker": "旁白",
    "text": "他坐进空位，画面才解释刚才的从容。院士的随机刷新，最后刷新进了毕业照。",
    "character": "",
    "next": "D60-0007"
  },
  {
    "id": "D60-0007",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "text": "凑凑宴请",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D60-r0007"
  },
  {
    "id": "D60-r0007",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "HQ",
    "text": "向阳，将来择什么业？",
    "character": "c45",
    "next": "D60-r0008"
  },
  {
    "id": "D60-r0008",
    "kind": "line",
    "source": "原文",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "戴向阳",
    "text": "法学。",
    "character": "c16",
    "next": "D60-r0009"
  },
  {
    "id": "D60-r0009",
    "kind": "line",
    "source": "原文",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "HQ",
    "text": "则我国之司法系统不复也。",
    "character": "c45",
    "next": "D60-r0010"
  },
  {
    "id": "D60-r0010",
    "kind": "line",
    "source": "原文",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "戴向阳",
    "text": "我学法学，是为了探索规则的边界。",
    "character": "c16",
    "next": "D60-r0011"
  },
  {
    "id": "D60-r0011",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "旁白",
    "text": "老师接得快，向阳答得更快，一桌人都笑了。",
    "character": "",
    "next": "D60-0012"
  },
  {
    "id": "D60-0012",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "李沛霖",
    "text": "前面那么多次特立独行，这句倒接得上。",
    "character": "c05",
    "next": "D60-r0013"
  },
  {
    "id": "D60-r0013",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "同学",
    "text": "大哥自主复习时总开屏扫雷，初级、中级还破了纪录。",
    "character": "",
    "next": "D60-r0014"
  },
  {
    "id": "D60-r0014",
    "kind": "line",
    "source": "原文",
    "page": 214,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "HQ",
    "text": "怪不得我每天早上来看大屏幕的黑板都是拉开的。我把它拉上，第二天又打开了。",
    "character": "c45",
    "next": "D60-r0015"
  },
  {
    "id": "D60-r0015",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "刘恒怿",
    "text": "原来每天早上替我们收场的是您。",
    "character": "c07",
    "next": "D60-0015"
  },
  {
    "id": "D60-0015",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 聚餐实日未定",
    "period": "凑凑宴请",
    "background": "hotpot",
    "speaker": "旁白",
    "text": "初级、中级的纪录，解释了教室屏幕上的旧谜。王家童的高级纪录仍没被破。",
    "character": "",
    "next": "D60-0016"
  },
  {
    "id": "D60-0016",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 结果公布后",
    "period": "最后的数字",
    "background": "classroom",
    "text": "最后的数字",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D60-0017"
  },
  {
    "id": "D60-0017",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 结果公布后",
    "period": "最后的数字",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "听口最后四十八。以前二三十分，练过的那些天没白过。",
    "character": "c07",
    "next": "D60-r0019"
  },
  {
    "id": "D60-r0019",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 结果公布后",
    "period": "最后的数字",
    "background": "classroom",
    "speaker": "旁白",
    "text": "从三月开始，连续到校一百天。这个旧日总趴着睡的同学，把那一百个早晨也攒到了毕业。",
    "character": "",
    "next": "D60-r0020"
  },
  {
    "id": "D60-r0020",
    "kind": "portrait",
    "source": "演出",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 结果公布后",
    "period": "最后的数字",
    "background": "classroom",
    "pov": "c06",
    "character": "c06",
    "speaker": "吕思宇",
    "text": "这一段，由吕思宇接着记。",
    "next": "D60-r0021"
  },
  {
    "id": "D60-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 原书后来的重逢",
    "period": "三百一十四",
    "background": "park",
    "text": "三百一十四",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D60-r0022"
  },
  {
    "id": "D60-r0022",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 原书后来的重逢",
    "period": "三百一十四",
    "background": "park",
    "speaker": "旁白",
    "text": "时隔三百一十四，终于又在一起。隔着手机错过的夜晚、写在信里的话，这次不必等待对方醒来。",
    "character": "",
    "next": "D60-r0023"
  },
  {
    "id": "D60-r0023",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 原书后来的重逢",
    "period": "三百一十四",
    "background": "park",
    "speaker": "程洛怡",
    "text": "终于又站到你旁边。",
    "character": "c43",
    "next": "D60-r0024"
  },
  {
    "id": "D60-r0024",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 原书后来的重逢",
    "period": "三百一十四",
    "background": "park",
    "speaker": "吕思宇",
    "text": "这次不用留言了。",
    "character": "c06",
    "next": "D60-r0025"
  },
  {
    "id": "D60-r0025",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业回望 · 原书后来的重逢",
    "period": "三百一十四",
    "background": "park",
    "speaker": "旁白",
    "text": "我们相拥。那些留白，到这里终于添上了一笔。",
    "character": "",
    "next": "D60-0019"
  },
  {
    "id": "D60-0019",
    "kind": "scene",
    "source": "演出",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "text": "收齐书页",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D60-0020"
  },
  {
    "id": "D60-0020",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "李沛霖",
    "text": "第一部是全班同学和韩琪老师写的。后面的纪传、作品、剧本，各有执笔者。",
    "character": "c05",
    "next": "D60-0021"
  },
  {
    "id": "D60-0021",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "彭逸涵",
    "text": "当日的琐碎，几年以后可能正是最记得的事。",
    "character": "c12",
    "next": "D60-0022"
  },
  {
    "id": "D60-0022",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "凌艺坤",
    "text": "班史会散到哪里，不知道。但今天这一份，已经收齐。",
    "character": "ling",
    "next": "D60-0024"
  },
  {
    "id": "D60-0024",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "徐启元",
    "text": "第一页录叙每日之常规，奋斗之历程，逆天之言行。后之览者，也会有感于这些日子。",
    "character": "xu",
    "next": "D60-0023"
  },
  {
    "id": "D60-0023",
    "kind": "portrait",
    "source": "演出",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "pov": "xu",
    "character": "xu",
    "speaker": "徐启元",
    "text": "这一段，由徐启元接着记。",
    "next": "D60-r0032"
  },
  {
    "id": "D60-r0032",
    "kind": "choice",
    "source": "补写",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "text": "最后一笔，我对大家说",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "“谢谢。留一页空白，等以后再写。”",
        "next": "D60-r0033"
      },
      {
        "text": "“再会。名字都留在这里，这本我合上了。”",
        "next": "D60-r0035"
      },
      {
        "text": "最后只留最光彩的名字，小事和普通同学略掉吧。",
        "failure": "收尾省下了纸，前面的许多声音却找不到回来的名字。"
      }
    ]
  },
  {
    "id": "D60-r0033",
    "kind": "line",
    "source": "补写",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "text": "“谢谢。留一页空白，等以后再写。”",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D60-r0034"
  },
  {
    "id": "D60-r0034",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "凌艺坤",
    "text": "给后之览者也留个位置。",
    "character": "ling",
    "next": "D60-0028"
  },
  {
    "id": "D60-r0035",
    "kind": "line",
    "source": "补写",
    "page": 181,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "text": "“再会。名字都留在这里，这本我合上了。”",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D60-r0036"
  },
  {
    "id": "D60-r0036",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "凌艺坤",
    "text": "合上吧，日子还往前走。",
    "character": "ling",
    "next": "D60-0028"
  },
  {
    "id": "D60-0028",
    "kind": "line",
    "source": "补写",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "徐启元",
    "text": "我们不是只有成绩，也不是只有玩笑。一起上过的课、走过的路，都在这里了。",
    "character": "xu",
    "next": "D60-0029"
  },
  {
    "id": "D60-0029",
    "kind": "line",
    "source": "转述",
    "page": 196,
    "pages": [
      196,
      209,
      210,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "speaker": "旁白",
    "text": "纸页合起，日子没有停止。七班日志，全篇完。",
    "character": "",
    "next": "graduation-ending"
  },
  {
    "id": "graduation-ending",
    "kind": "end",
    "source": "补写",
    "page": 255,
    "pages": [
      181,
      196,
      212,
      214,
      255
    ],
    "day": "D60",
    "context": "毕业收尾",
    "period": "收齐书页",
    "background": "chronicle-desk",
    "text": "七班日志 · 毕业结局\n谢谢每一位一起写下这些日子的人。",
    "speaker": "旁白",
    "character": ""
  }
];
export default data;
