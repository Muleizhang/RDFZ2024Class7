import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N14-r0029",
    "kind": "line",
    "source": "补写",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "speaker": "同学",
    "text": "高中压缩两厘米。",
    "character": "",
    "next": "N14-r0030"
  },
  {
    "id": "N14-r0030",
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
    "text": "戚洪硕成了“高学压人士”。周子尧和彭逸涵一样高，旁边还在争到底缩了多少。",
    "character": "",
    "next": "N14-r0031"
  },
  {
    "id": "N14-r0031",
    "kind": "line",
    "source": "补写",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "speaker": "惠子宁",
    "text": "先看尺上的数，你们别再靠嘴把人压矮。",
    "character": "c14",
    "next": "interactive-N14-r0031"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0031",
    "kind": "choice",
    "text": "身高越说越矮，我怎么收住？",
    "speaker": "惠子宁",
    "character": "c14",
    "options": [
      {
        "text": "看尺，不听口头压缩。",
        "next": "interactive-N14-r0031-say1"
      },
      {
        "text": "玩笑先停一下，数读清楚再记。",
        "next": "interactive-N14-r0031-say2"
      },
      {
        "text": "大家都这么说，就取那个最矮的数。",
        "failure": "嘴上量出的身高，先把尺子的刻度挤走。"
      },
      {
        "text": "差一点也无所谓，我凭印象记。",
        "failure": "印象签了字，尺上那一厘米却不肯认领。"
      }
    ]
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0031-say1",
    "kind": "line",
    "text": "看尺，不听口头压缩。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-N14-r0031-reply1"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0031-reply1",
    "kind": "line",
    "text": "身高终于回到了测量尺上。",
    "speaker": "旁白",
    "character": "",
    "next": "N14-r0032"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0031-say2",
    "kind": "line",
    "text": "玩笑先停一下，数读清楚再记。",
    "speaker": "惠子宁",
    "character": "c14",
    "next": "interactive-N14-r0031-reply2"
  },
  {
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14 · 日期据267天推定",
    "period": "体检的厘米",
    "background": "hall",
    "page": 41,
    "pages": [
      41
    ],
    "source": "补写",
    "id": "interactive-N14-r0031-reply2",
    "kind": "line",
    "text": "记录没有再少一厘米。",
    "speaker": "旁白",
    "character": "",
    "next": "N14-r0032"
  },
  {
    "id": "N14-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "可乐杯和镜子",
    "background": "classroom",
    "text": "可乐杯和镜子",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "cola",
      "title": "专属可乐",
      "lines": [
        "徐子涵",
        "朱老师 · 历史",
        "愿数学130+"
      ]
    },
    "next": "N14-r0033"
  },
  {
    "id": "N14-r0033",
    "kind": "line",
    "source": "转述",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "可乐杯和镜子",
    "background": "classroom",
    "speaker": "旁白",
    "text": "蔡依凡拿可乐杯健身，吕思宇唱歌。周子尧打开可乐，泡沫一喷，到了镜子上。",
    "character": "",
    "next": "N14-r0034"
  },
  {
    "id": "N14-r0034",
    "kind": "line",
    "source": "补写",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "可乐杯和镜子",
    "background": "classroom",
    "speaker": "同学",
    "text": "镜子也分到一杯？",
    "character": "",
    "next": "N14-r0035"
  },
  {
    "id": "N14-r0035",
    "kind": "line",
    "source": "补写",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "可乐杯和镜子",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "公愤拉满。这回不用尺，溅到哪里看得很清楚。",
    "character": "c14",
    "next": "N14-r0036"
  },
  {
    "id": "N14-r0036",
    "kind": "line",
    "source": "转述",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "可乐杯和镜子",
    "background": "classroom",
    "speaker": "旁白",
    "text": "可乐罐画在页角，喷溅线画在另一个框里。本子又到了明天。",
    "character": "",
    "next": "N14-r0038"
  },
  {
    "id": "N14-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0039"
  },
  {
    "id": "N14-r0039",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "因上一天的内容写完已经今天中午，今天又没人愿意认领，只能再写一天。",
    "character": "",
    "next": "N14-r0040"
  },
  {
    "id": "N14-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0041"
  },
  {
    "id": "N14-r0041",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0042"
  },
  {
    "id": "N14-r0042",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0043"
  },
  {
    "id": "N14-r0043",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "GM＝gR²。大哥的物理题过程。",
    "character": "",
    "next": "N14-r0044"
  },
  {
    "id": "N14-r0044",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0045"
  },
  {
    "id": "N14-r0045",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "忘了。",
    "character": "",
    "next": "N14-r0046"
  },
  {
    "id": "N14-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0047"
  },
  {
    "id": "N14-r0047",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "奋笔疾书地（抄）写学案。",
    "character": "",
    "next": "N14-r0048"
  },
  {
    "id": "N14-r0048",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "text": "自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0049"
  },
  {
    "id": "N14-r0049",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "体检。高学压人士qhs，“高中压缩2cm”；zyc和pyh一样高。",
    "character": "",
    "next": "N14-r0050"
  },
  {
    "id": "N14-r0050",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "体育 · 课间手帐",
    "background": "track",
    "text": "体育 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0051"
  },
  {
    "id": "N14-r0051",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "体育 · 课间手帐",
    "background": "track",
    "speaker": "班史原载",
    "text": "硝硼：“你要几个？”——测引体中。",
    "character": "",
    "next": "N14-r0052"
  },
  {
    "id": "N14-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N14-r0053"
  },
  {
    "id": "N14-r0053",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "经检验，……不能用端点效应。",
    "character": "",
    "next": "N14-r0054"
  },
  {
    "id": "N14-r0054",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生物作业真多。",
    "character": "",
    "next": "N14-r0055"
  },
  {
    "id": "N14-r0055",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "CYF用可乐杯健身；LSY唱歌。",
    "character": "",
    "next": "N14-r0056"
  },
  {
    "id": "N14-r0056",
    "kind": "line",
    "source": "原文",
    "page": 41,
    "pages": [
      41
    ],
    "day": "N14",
    "context": "回看待核日期 · 暂排2023-09-14",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "ZYC开可乐射到镜子上。",
    "character": "",
    "next": "N15-date"
  },
  {
    "id": "N15-date",
    "kind": "date",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-15",
    "text": "半篇桥与半杯奶茶",
    "pov": "c07",
    "character": "",
    "next": "N15-r0093"
  },
  {
    "id": "N15-r0093",
    "kind": "portrait",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "半篇桥与半杯奶茶",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "N15-r0038"
  },
  {
    "id": "N15-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "text": "不用极限的题",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0039"
  },
  {
    "id": "N15-r0039",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "speaker": "战老师",
    "text": "书上有的定理都能用，书上没有的都不能用。",
    "character": "c48",
    "next": "interactive-N15-r0039"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0039",
    "kind": "choice",
    "text": "老师划清能用的定理，我怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "那我先用书上的，把条件写全。",
        "next": "interactive-N15-r0039-say1"
      },
      {
        "text": "这个方法越过去了，我换回课内的路。",
        "next": "interactive-N15-r0039-say2"
      },
      {
        "text": "网上见过就算会用，不解释也能写吧。",
        "failure": "方法从网上赶来，证明却忘了带通行证。"
      },
      {
        "text": "名字写上够了，推出来的过程不用留。",
        "failure": "定理报完了姓名，题目却还在等它出示条件。"
      }
    ]
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0039-say1",
    "kind": "line",
    "text": "那我先用书上的，把条件写全。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N15-r0039-reply1"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0039-reply1",
    "kind": "line",
    "text": "先看适用的条件。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N15-r0040"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0039-say2",
    "kind": "line",
    "text": "这个方法越过去了，我换回课内的路。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N15-r0039-reply2"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0039-reply2",
    "kind": "line",
    "text": "能说清每一步才行。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N15-r0040"
  },
  {
    "id": "N15-r0040",
    "kind": "line",
    "source": "转述",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一题写了半面黑板。全国卷的极限，换成北京不用极限的方法，王家童、雷昱、黄艺博都来接招。",
    "character": "",
    "next": "N15-r0041"
  },
  {
    "id": "N15-r0041",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "speaker": "同学",
    "text": "三英战景林！",
    "character": "",
    "next": "N15-r0042"
  },
  {
    "id": "N15-r0042",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "不用极限的题",
    "background": "classroom",
    "speaker": "战老师",
    "text": "把所有全国卷题全删了！",
    "character": "c48",
    "next": "N15-r0043"
  },
  {
    "id": "N15-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "桥的上下半场",
    "background": "classroom",
    "text": "桥的上下半场",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0044"
  },
  {
    "id": "N15-r0044",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "桥的上下半场",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "两个人写一篇《桥》，上下半场。",
    "character": "c46",
    "next": "N15-r0045"
  },
  {
    "id": "N15-r0045",
    "kind": "line",
    "source": "转述",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "桥的上下半场",
    "background": "classroom",
    "speaker": "旁白",
    "text": "同桌先后接笔，上半篇的桥，得让下半篇接得上。戴向阳却在课堂半途没了踪影。",
    "character": "",
    "next": "N15-r0046"
  },
  {
    "id": "N15-r0046",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "桥的上下半场",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "桥还没连到那边，人先走了。",
    "character": "c07",
    "next": "N15-r0047"
  },
  {
    "id": "N15-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "满者的柜子",
    "background": "classroom",
    "text": "满者的柜子",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0048"
  },
  {
    "id": "N15-r0048",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "满者的柜子",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "满兮，满兮，在看什么？你今所盖何物？",
    "character": "c47",
    "next": "N15-r0049"
  },
  {
    "id": "N15-r0049",
    "kind": "line",
    "source": "转述",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "满者的柜子",
    "background": "classroom",
    "speaker": "旁白",
    "text": "满者下来，杨sir也看柜子。",
    "character": "",
    "next": "N15-r0050"
  },
  {
    "id": "N15-r0050",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "满者的柜子",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "我看本来无物，你聚在这里做什么？",
    "character": "c47",
    "next": "N15-r0051"
  },
  {
    "id": "N15-r0051",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "满者的柜子",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "……",
    "character": "c03",
    "next": "N15-r0052"
  },
  {
    "id": "N15-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "text": "五分钟以后",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0053"
  },
  {
    "id": "N15-r0053",
    "kind": "line",
    "source": "转述",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物老师对着一个看错的题，讲得振振有辞。五分钟过去，自己忽然醒过味来。",
    "character": "",
    "next": "N15-r0054"
  },
  {
    "id": "N15-r0054",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "speaker": "雷老师",
    "text": "诶，这不是更慢吗？",
    "character": "c49",
    "next": "N15-r0055"
  },
  {
    "id": "N15-r0055",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "我们还以为马上能更快。",
    "character": "c07",
    "next": "N15-r0056"
  },
  {
    "id": "N15-r0056",
    "kind": "line",
    "source": "转述",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "晚自习，满者碰翻聪惠的奶茶，洒到惠子宁的位置。他占了蔡依凡的位置扫地，把当晚的收尾扫出了一小块空地。",
    "character": "",
    "next": "N15-r0057"
  },
  {
    "id": "N15-r0057",
    "kind": "line",
    "source": "补写",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "这边别踩，先让我扫完。",
    "character": "c03",
    "next": "interactive-N15-r0057"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0057",
    "kind": "choice",
    "text": "满者正在扫碎片，我怎么提醒？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "这边我先让开，别又把碎片带到桌底。",
        "next": "interactive-N15-r0057-say1"
      },
      {
        "text": "先把这一圈清干净，再找别的地方走。",
        "next": "interactive-N15-r0057-say2"
      },
      {
        "text": "这块看着没碎，直接从中间过去吧。",
        "failure": "鞋底走得很快，碎片也跟着搬了家。"
      },
      {
        "text": "先捡大的，小的课后再说。",
        "failure": "大块收走了，小块却接了下一位的脚步。"
      }
    ]
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0057-say1",
    "kind": "line",
    "text": "这边我先让开，别又把碎片带到桌底。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N15-r0057-reply1"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0057-reply1",
    "kind": "line",
    "text": "等我扫完。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N15-r0059"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0057-say2",
    "kind": "line",
    "text": "先把这一圈清干净，再找别的地方走。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N15-r0057-reply2"
  },
  {
    "day": "N15",
    "context": "现实",
    "period": "五分钟以后",
    "background": "classroom",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "source": "补写",
    "id": "interactive-N15-r0057-reply2",
    "kind": "line",
    "text": "那边还有一点。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N15-r0059"
  },
  {
    "id": "N15-r0059",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0060"
  },
  {
    "id": "N15-r0060",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "清晨的寒气让人披上风衣服，午间的烈日又让人扇起折扇。在高三的“正式”的头一个月正式进入半途之时，天气也开始转凉了。",
    "character": "",
    "next": "N15-r0061"
  },
  {
    "id": "N15-r0061",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "值此秋高气爽之日，同学们也愈发地努力学习，对于知识可谓是语英之收藏，化生之经营，数物之精英，几世几年，一但不能有，输来其间。",
    "character": "",
    "next": "N15-r0062"
  },
  {
    "id": "N15-r0062",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "平日里教室充满了讨论学习、“学习”与“学”“习”的人，大家纷纷踊跃发言，去分析数、物、生之奥妙。",
    "character": "",
    "next": "N15-r0063"
  },
  {
    "id": "N15-r0063",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "高三的生活很累，但是“以中有足乐者，不知闲暇之时不若他。”",
    "character": "",
    "next": "N15-r0064"
  },
  {
    "id": "N15-r0064",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“纵使穷寒途远，此志岂难夺。”",
    "character": "",
    "next": "N15-r0065"
  },
  {
    "id": "N15-r0065",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0066"
  },
  {
    "id": "N15-r0066",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "由能者分享至理名言：",
    "character": "",
    "next": "N15-r0067"
  },
  {
    "id": "N15-r0067",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "书上有的定理都能用，书上没有的定理都不能用。",
    "character": "",
    "next": "N15-r0068"
  },
  {
    "id": "N15-r0068",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "讲卷子ing……在能者的号召下，我们拿一个不用极限的方法证明要用极限的题。",
    "character": "",
    "next": "N15-r0069"
  },
  {
    "id": "N15-r0069",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "全国卷方法：f(x)＝ax－1/x－(a+1)ln x，在a＞1时，lim(x→0)f(x)＝－∞。",
    "character": "",
    "next": "N15-r0070"
  },
  {
    "id": "N15-r0070",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "北京特色方法：令x＝e^(－(a+1))，令a+1＝t，再求导。",
    "character": "",
    "next": "N15-r0071"
  },
  {
    "id": "N15-r0071",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "洋洋洒洒写了半面黑板的过程。",
    "character": "",
    "next": "N15-r0072"
  },
  {
    "id": "N15-r0072",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "其中王家童、雷昱、黄艺博“三英战景林”，表现优异。",
    "character": "",
    "next": "N15-r0073"
  },
  {
    "id": "N15-r0073",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "恼羞成怒的能者：把所有全国卷题全删了！",
    "character": "",
    "next": "N15-r0074"
  },
  {
    "id": "N15-r0074",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0075"
  },
  {
    "id": "N15-r0075",
    "kind": "line",
    "source": "原文",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "听力而已，班上无事。",
    "character": "",
    "next": "N15-r0076"
  },
  {
    "id": "N15-r0076",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0077"
  },
  {
    "id": "N15-r0077",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师整了个大活，让同桌两人写一篇作文的上下半场。",
    "character": "",
    "next": "N15-r0078"
  },
  {
    "id": "N15-r0078",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "两个人写题目为《桥》的作文。",
    "character": "",
    "next": "N15-r0079"
  },
  {
    "id": "N15-r0079",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "戴向阳在课表一半时直接荒荒无踪了——绝命“统”师。",
    "character": "",
    "next": "N15-r0080"
  },
  {
    "id": "N15-r0080",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "text": "午休 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0081"
  },
  {
    "id": "N15-r0081",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "杨sir歌而过满者曰：“满兮，满兮，在视之何？汝今所盖何也？吾不得与之观焉？”满者下，杨sir与之一观其柜，又曰：“吾观之本来无物，汝聚之何？”趋而降之。",
    "character": "",
    "next": "N15-r0082"
  },
  {
    "id": "N15-r0082",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "又：逮逢圣朝，沐浴清化。前太守逵察臣孝廉，后刺史臣荣举臣秀才，臣以供养无主，辞不赴命。——《陈情表》李密。",
    "character": "",
    "next": "N15-r0083"
  },
  {
    "id": "N15-r0083",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0084"
  },
  {
    "id": "N15-r0084",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "老师在对着一个看错了的题目振振有辞地说了五分钟后，忽魂悸以魄动，“诶，这不是更慢吗？”",
    "character": "",
    "next": "N15-r0085"
  },
  {
    "id": "N15-r0085",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0086"
  },
  {
    "id": "N15-r0086",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "委座一路讲氧还，无事发生。",
    "character": "",
    "next": "N15-r0087"
  },
  {
    "id": "N15-r0087",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0088"
  },
  {
    "id": "N15-r0088",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "引力与天体，太阳、地球与月亮。",
    "character": "",
    "next": "N15-r0089"
  },
  {
    "id": "N15-r0089",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英限：130道题写了60min，直接speed up，然后就漏了40道……优秀的做题家。",
    "character": "",
    "next": "N15-r0090"
  },
  {
    "id": "N15-r0090",
    "kind": "scene",
    "source": "演出",
    "page": 42,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom-night",
    "text": "晚自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N15-r0091"
  },
  {
    "id": "N15-r0091",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom-night",
    "speaker": "班史原载",
    "text": "满者把烧惠的奶茶打到了HZN位置上，然后占了CYF位置扫地。",
    "character": "",
    "next": "N15-r0092"
  },
  {
    "id": "N15-r0092",
    "kind": "line",
    "source": "原文",
    "page": 43,
    "pages": [
      42,
      43
    ],
    "day": "N15",
    "context": "现实",
    "period": "晚自习 · 课间手帐",
    "background": "classroom-night",
    "speaker": "班史原载",
    "text": "虽处一园之间，一室之内，琐事居多，但还是冀能记录一二，所供后者读之，阅闲罢了。",
    "character": "",
    "next": "N16-date"
  },
  {
    "id": "N16-date",
    "kind": "date",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-16",
    "text": "应得的答案",
    "pov": "student-cai-yifan",
    "character": "",
    "next": "N16-r0047"
  },
  {
    "id": "N16-r0047",
    "kind": "portrait",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "应得的答案",
    "pov": "student-cai-yifan",
    "character": "student-cai-yifan",
    "speaker": "蔡依凡",
    "next": "N16-r0017"
  },
  {
    "id": "N16-r0017",
    "kind": "scene",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "text": "累的推论",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N16-r0018"
  },
  {
    "id": "N16-r0018",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "高中越累，大学越好；大学越好，大学越累。所以高中越累，大学越累。",
    "character": "c07",
    "next": "interactive-N16-r0018"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0018",
    "kind": "choice",
    "text": "大哥把两段“越累”接在一起，我怎么回应？",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "options": [
      {
        "text": "你这个推论一接，前后都没让我歇着。",
        "next": "interactive-N16-r0018-say1"
      },
      {
        "text": "结论先记下，今天这份倒还得自己做。",
        "next": "interactive-N16-r0018-say2"
      },
      {
        "text": "既然后面也累，现在努力就没用了。",
        "failure": "推论少说了一句，书却先被合上。"
      },
      {
        "text": "只要累就能进好大学，做什么都一样吧。",
        "failure": "累得很公平，题目却不按疲劳计分。"
      }
    ]
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0018-say1",
    "kind": "line",
    "text": "你这个推论一接，前后都没让我歇着。",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "next": "interactive-N16-r0018-reply1"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0018-reply1",
    "kind": "line",
    "text": "两段都累。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N16-r0019"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0018-say2",
    "kind": "line",
    "text": "结论先记下，今天这份倒还得自己做。",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "next": "interactive-N16-r0018-reply2"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0018-reply2",
    "kind": "line",
    "text": "先过今天。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "N16-r0019"
  },
  {
    "id": "N16-r0019",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "speaker": "蔡依凡",
    "text": "两句话一接，未来也一起累了。",
    "character": "student-cai-yifan",
    "next": "N16-r0020"
  },
  {
    "id": "N16-r0020",
    "kind": "line",
    "source": "转述",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "累的推论",
    "background": "classroom",
    "speaker": "旁白",
    "text": "六天之后，终于能在放学后见太阳。物竞复赛的同学，还得去自己的考场。",
    "character": "",
    "next": "N16-r0021"
  },
  {
    "id": "N16-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "text": "风格迥异",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N16-r0022"
  },
  {
    "id": "N16-r0022",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "讲到这里我的教学任务就完成了……哦，原来还有一段。",
    "character": "c47",
    "next": "interactive-N16-r0022"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0022",
    "kind": "choice",
    "text": "老师发现文章还有一段，我怎么接？",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "options": [
      {
        "text": "我们也还没翻完，那最后一段接着看。",
        "next": "interactive-N16-r0022-say1"
      },
      {
        "text": "刚才这个收尾来早了，我把笔接回来。",
        "next": "interactive-N16-r0022-say2"
      },
      {
        "text": "教学任务说完成了，那这段不算了吧。",
        "failure": "下课先落了款，文章却还站在最后一段。"
      },
      {
        "text": "最后一段肯定重复，我先不看了。",
        "failure": "结尾等来了判断，却没等来阅读。"
      }
    ]
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0022-say1",
    "kind": "line",
    "text": "我们也还没翻完，那最后一段接着看。",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "next": "interactive-N16-r0022-reply1"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0022-reply1",
    "kind": "line",
    "text": "还有这里。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N16-r0023"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0022-say2",
    "kind": "line",
    "text": "刚才这个收尾来早了，我把笔接回来。",
    "speaker": "蔡依凡",
    "character": "student-cai-yifan",
    "next": "interactive-N16-r0022-reply2"
  },
  {
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "page": 44,
    "pages": [
      44
    ],
    "source": "补写",
    "id": "interactive-N16-r0022-reply2",
    "kind": "line",
    "text": "把这一段也读了。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N16-r0023"
  },
  {
    "id": "N16-r0023",
    "kind": "line",
    "source": "转述",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "风格迥异",
    "background": "classroom",
    "speaker": "旁白",
    "text": "战老师不在，新老师代数学，大家第一次体验另一种节奏。化学把一题从A到D都讲了一遍。",
    "character": "",
    "next": "N16-r0024"
  },
  {
    "id": "N16-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "深蓝色的下一届",
    "background": "classroom",
    "text": "深蓝色的下一届",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N16-r0025"
  },
  {
    "id": "N16-r0025",
    "kind": "line",
    "source": "转述",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "深蓝色的下一届",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ终于注意到同学早注意到的讲义答案，大家那句“这是我应得的”又被提起。",
    "character": "",
    "next": "N16-r0026"
  },
  {
    "id": "N16-r0026",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "深蓝色的下一届",
    "background": "classroom",
    "speaker": "HQ",
    "text": "学校打印质量太差了。下一届把答案印成深蓝色。",
    "character": "c45",
    "next": "N16-r0027"
  },
  {
    "id": "N16-r0027",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "深蓝色的下一届",
    "background": "classroom",
    "speaker": "蔡依凡",
    "text": "这一届先听到了下一届的防线。",
    "character": "student-cai-yifan",
    "next": "N16-r0028"
  },
  {
    "id": "N16-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "CRISPR",
    "background": "classroom",
    "text": "CRISPR",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N16-r0029"
  },
  {
    "id": "N16-r0029",
    "kind": "line",
    "source": "转述",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "CRISPR",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物终于讲到大哥先前说过的CRISPR-CAS9。大哥笔不停，合导的行号却又让人抄错位置。",
    "character": "",
    "next": "N16-r0030"
  },
  {
    "id": "N16-r0030",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "CRISPR",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "CRISPR-CAS9确实好用。",
    "character": "c07",
    "next": "N16-r0031"
  },
  {
    "id": "N16-r0031",
    "kind": "line",
    "source": "补写",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "CRISPR",
    "background": "classroom",
    "speaker": "蔡依凡",
    "text": "小事虽小，还是能一起记。",
    "character": "student-cai-yifan",
    "next": "N16-r0033"
  },
  {
    "id": "N16-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N16-r0034"
  },
  {
    "id": "N16-r0034",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "六天之后，终于又能在放学后看到太阳，是十分令人欣喜的。虽然只有一天假期，却到底是“better than none”。今天是物竞复赛，愿付出得到回报。",
    "character": "",
    "next": "N16-r0035"
  },
  {
    "id": "N16-r0035",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "早读时，大哥便由HQ的发言给出了推论：",
    "character": "",
    "next": "N16-r0036"
  },
  {
    "id": "N16-r0036",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "∵高中越累，大学越好。又∵大学越好，大学越累。",
    "character": "",
    "next": "N16-r0037"
  },
  {
    "id": "N16-r0037",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "〈语文〉孙老师",
    "text": "粗糙的利己主义者。",
    "character": "",
    "next": "N16-r0038"
  },
  {
    "id": "N16-r0038",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "〈英语〉杨sir以极高效率判出了昨日的地狱统练，并进行讲解。",
    "character": "",
    "next": "N16-r0039"
  },
  {
    "id": "N16-r0039",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "LSY（刘）：“Mr.Thompson为什么不是暗恋我？”",
    "character": "",
    "next": "N16-r0040"
  },
  {
    "id": "N16-r0040",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "杨卫华",
    "text": "讲到这我的教学任务就完成了，哦原来还有一段。",
    "character": "c47",
    "next": "N16-r0041"
  },
  {
    "id": "N16-r0041",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "〈数学〉由于战老师不在，一位新老师代课，体验到了“风格迥异”的数学课。“这哥们～”",
    "character": "",
    "next": "N16-r0042"
  },
  {
    "id": "N16-r0042",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "〈化学〉继续氧还反应。同老师将一道答案是D的选择从A到D虐了一遍。",
    "character": "",
    "next": "N16-r0043"
  },
  {
    "id": "N16-r0043",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "〈物理〉HQ终于意识到同学们早已意识到的“这是我应得的”的物理讲义答案，于是恼羞成怒。",
    "character": "",
    "next": "N16-r0044"
  },
  {
    "id": "N16-r0044",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“学校打印质量太差了。”“下一届我就把答案印成深蓝色。”以及每届都在更新的物理讲义。",
    "character": "",
    "next": "N16-r0045"
  },
  {
    "id": "N16-r0045",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "〈生物〉终于讲到了大哥说的CRISPR-CAS9技术，以及大哥狂书，以及雷老师将合导第二行内容说成第三行，导致人的导错位置。",
    "character": "",
    "next": "N16-r0046"
  },
  {
    "id": "N16-r0046",
    "kind": "line",
    "source": "原文",
    "page": 44,
    "pages": [
      44
    ],
    "day": "N16",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "琐事虽小，然可以共怀。望后之览者，亦将有感于斯文。",
    "character": "",
    "next": "N17-date"
  },
  {
    "id": "N17-date",
    "kind": "date",
    "source": "演出",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-18",
    "text": "曲别针跳绳",
    "pov": "student-jin-yueshan",
    "character": "",
    "next": "N17-r0051"
  },
  {
    "id": "N17-r0051",
    "kind": "portrait",
    "source": "演出",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "曲别针跳绳",
    "pov": "student-jin-yueshan",
    "character": "student-jin-yueshan",
    "speaker": "金悦山",
    "next": "N17-r0019"
  },
  {
    "id": "N17-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "text": "避震的正事",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N17-r0020"
  },
  {
    "id": "N17-r0020",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "speaker": "金悦山",
    "text": "九一八，先记正事。下午班会是避震教育。",
    "character": "student-jin-yueshan",
    "next": "N17-r0021"
  },
  {
    "id": "N17-r0021",
    "kind": "line",
    "source": "转述",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "speaker": "旁白",
    "text": "正事记完，课堂里那些译句与怪话才在下面排开。",
    "character": "",
    "next": "N17-r0022"
  },
  {
    "id": "N17-r0022",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "博士，为什么不是enjoy？",
    "character": "c26",
    "next": "N17-r0023"
  },
  {
    "id": "N17-r0023",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "令国致乐不已——全国的人都笑话你。",
    "character": "c27",
    "next": "interactive-N17-r0023"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0023",
    "kind": "choice",
    "text": "“全国都笑话你”怎么接？",
    "speaker": "金悦山",
    "character": "student-jin-yueshan",
    "options": [
      {
        "text": "这个翻译挺响，先看原句是怎么转过来的。",
        "next": "interactive-N17-r0023-say1"
      },
      {
        "text": "先把笑话那句记边上，再核译文。",
        "next": "interactive-N17-r0023-say2"
      },
      {
        "text": "好笑就当最终译文，不必对原句。",
        "failure": "笑声落得很齐，译文却少了几个原字。"
      },
      {
        "text": "自己加一句更好笑的，意思差不多。",
        "failure": "段子添了新一层，原句却被压在了底下。"
      }
    ]
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0023-say1",
    "kind": "line",
    "text": "这个翻译挺响，先看原句是怎么转过来的。",
    "speaker": "金悦山",
    "character": "student-jin-yueshan",
    "next": "interactive-N17-r0023-reply1"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0023-reply1",
    "kind": "line",
    "text": "你看这几个字。",
    "speaker": "张沐雷",
    "character": "c27",
    "next": "N17-r0024"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0023-say2",
    "kind": "line",
    "text": "先把笑话那句记边上，再核译文。",
    "speaker": "金悦山",
    "character": "student-jin-yueshan",
    "next": "interactive-N17-r0023-reply2"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0023-reply2",
    "kind": "line",
    "text": "别只剩这一句。",
    "speaker": "张沐雷",
    "character": "c27",
    "next": "N17-r0024"
  },
  {
    "id": "N17-r0024",
    "kind": "line",
    "source": "原文",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "避震的正事",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "技校才学习工业流程。",
    "character": "c16",
    "next": "N17-r0025"
  },
  {
    "id": "N17-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "text": "一百余个曲别针",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N17-r0026"
  },
  {
    "id": "N17-r0026",
    "kind": "line",
    "source": "转述",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "speaker": "旁白",
    "text": "大家把大哥一百余个曲别针一个个接起来，连成绳。楼道里留出位置，试着跳，为周三比赛做准备。",
    "character": "",
    "next": "N17-r0027"
  },
  {
    "id": "N17-r0027",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "speaker": "刘恒怿",
    "text": "你们把它们全接上了？",
    "character": "c07",
    "next": "N17-r0028"
  },
  {
    "id": "N17-r0028",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "speaker": "同学",
    "text": "先试一试。",
    "character": "",
    "next": "N17-r0029"
  },
  {
    "id": "N17-r0029",
    "kind": "line",
    "source": "补写",
    "page": 45,
    "pages": [
      45
    ],
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "speaker": "金悦山",
    "text": "曲别针本来夹纸，今天倒把人围在一起。",
    "character": "student-jin-yueshan",
    "next": "interactive-N17-r0029"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0029",
    "kind": "choice",
    "text": "曲别针排到一百余个，我怎么接？",
    "speaker": "金悦山",
    "character": "student-jin-yueshan",
    "options": [
      {
        "text": "先把要夹纸的留下，链子玩完还得拆回去。",
        "next": "interactive-N17-r0029-say1"
      },
      {
        "text": "先看有没有松的，别一甩全飞出去。",
        "next": "interactive-N17-r0029-say2"
      },
      {
        "text": "再加一串就能直接跳，接缝不用看了。",
        "failure": "人还没跳过去，接缝先跳开了一格。"
      },
      {
        "text": "用完就整条留地上，下次接着玩。",
        "failure": "下一次还没开始，先有一双鞋踩进了链子。"
      }
    ]
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0029-say1",
    "kind": "line",
    "text": "先把要夹纸的留下，链子玩完还得拆回去。",
    "speaker": "金悦山",
    "character": "student-jin-yueshan",
    "next": "interactive-N17-r0029-reply1"
  },
  {
    "day": "N17",
    "context": "现实",
    "period": "一百余个曲别针",
    "background": "corridor",
    "page": 45,
    "pages": [
      45
    ],
    "source": "补写",
    "id": "interactive-N17-r0029-reply1",
    "kind": "line",
    "text": "曲别针暂时有了两份工作。",
    "speaker": "旁白",
    "character": "",
    "next": "N17-r0030"
  }
];
export default data;
