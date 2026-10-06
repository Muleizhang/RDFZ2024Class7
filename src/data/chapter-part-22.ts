import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N37-r0019",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "冷的是天气，忙的这一页倒没停过。",
    "character": "c07",
    "next": "interactive-N37-r0019"
  },
  {
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0019",
    "kind": "choice",
    "text": "一天的成绩分析很长，我怎么收尾？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "先留实际讲到的，剩下没听清的回来再问。",
        "next": "interactive-N37-r0019-say1"
      },
      {
        "text": "把改错和下一步分开写，明天好接。",
        "next": "interactive-N37-r0019-say2"
      },
      {
        "text": "老师分析过就算我改过了。",
        "failure": "分析讲完了，自己的卷子仍停在发回那一刻。"
      },
      {
        "text": "从早到晚很辛苦，细节就全略了吧。",
        "failure": "辛苦保住了标题，具体的问题却没保住一行。"
      }
    ]
  },
  {
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0019-say1",
    "kind": "line",
    "text": "先留实际讲到的，剩下没听清的回来再问。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N37-r0019-reply1"
  },
  {
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0019-reply1",
    "kind": "line",
    "text": "长时间没有被一句忙碌盖住。",
    "speaker": "旁白",
    "character": "",
    "next": "N37-r0021"
  },
  {
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0019-say2",
    "kind": "line",
    "text": "把改错和下一步分开写，明天好接。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N37-r0019-reply2"
  },
  {
    "day": "N37",
    "context": "现实 · 工作记录回看",
    "period": "13:30到21:00",
    "background": "classroom",
    "page": 97,
    "pages": [
      97
    ],
    "source": "补写",
    "id": "interactive-N37-r0019-reply2",
    "kind": "line",
    "text": "忙了一天的纸上多了能继续的一步。",
    "speaker": "旁白",
    "character": "",
    "next": "N37-r0021"
  },
  {
    "id": "N37-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N37-r0022"
  },
  {
    "id": "N37-r0022",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "周六，一个非常冷又非常忙的周末。",
    "character": "",
    "next": "N37-r0023"
  },
  {
    "id": "N37-r0023",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "上：C·B·A，每节70分钟，《电场中的导体》，最难的两节，小朋友们比高二还是有些进步。",
    "character": "",
    "next": "N37-r0024"
  },
  {
    "id": "N37-r0024",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午：怒斥问问题的几个娃，因为下午要成绩分析，略暴躁……要改～",
    "character": "",
    "next": "N37-r0025"
  },
  {
    "id": "N37-r0025",
    "kind": "line",
    "source": "原文",
    "page": 97,
    "pages": [
      97
    ],
    "day": "N37",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "下：13:30～晚21:00，漫长的期中成绩分析，拿到宝贝们的各科成绩和班级均分。",
    "character": "",
    "next": "N38-date"
  },
  {
    "id": "N38-date",
    "kind": "date",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "日历编排 · 事件实日待核",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-12",
    "text": "半岛式朗读",
    "pov": "c07",
    "character": "",
    "next": "N38-r0042"
  },
  {
    "id": "N38-r0042",
    "kind": "portrait",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "半岛式朗读",
    "pov": "c07",
    "character": "c07",
    "speaker": "刘恒怿",
    "next": "N38-r0016"
  },
  {
    "id": "N38-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "text": "后期中",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0017"
  },
  {
    "id": "N38-r0017",
    "kind": "line",
    "source": "转述",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "speaker": "旁白",
    "text": "惊险出分后，新鲜感淡了一些。老师的“有的放矢”稳定发挥，又说并非认错人、让学生讲题来水课。",
    "character": "",
    "next": "N38-r0018"
  },
  {
    "id": "N38-r0018",
    "kind": "line",
    "source": "补写",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "speaker": "战老师",
    "text": "让同学讲，也有同学讲的用处。",
    "character": "c48",
    "next": "interactive-N38-r0018"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0018",
    "kind": "choice",
    "text": "老师说同学讲题有用，我怎么回应？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "听同学怎么走这步，我再和自己的比。",
        "next": "interactive-N38-r0018-say1"
      },
      {
        "text": "讲完了让卡住的人再问一句，路才接得上。",
        "next": "interactive-N38-r0018-say2"
      },
      {
        "text": "讲得没老师快，不如只抄他的结果。",
        "failure": "黑板收到了结果，座位上的疑点却没收到路。"
      },
      {
        "text": "听过同学讲，就不用自己再做。",
        "failure": "同学下了讲台，自己的笔却始终没起身。"
      }
    ]
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0018-say1",
    "kind": "line",
    "text": "听同学怎么走这步，我再和自己的比。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N38-r0018-reply1"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0018-reply1",
    "kind": "line",
    "text": "别只等最后的数。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N38-r0019"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0018-say2",
    "kind": "line",
    "text": "讲完了让卡住的人再问一句，路才接得上。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N38-r0018-reply2"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0018-reply2",
    "kind": "line",
    "text": "先把问题说具体。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N38-r0019"
  },
  {
    "id": "N38-r0019",
    "kind": "line",
    "source": "转述",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 原页11月12日，实日待核",
    "period": "后期中",
    "background": "classroom",
    "speaker": "旁白",
    "text": "后面仍是同学上台，水神之称又被接起来。",
    "character": "",
    "next": "N38-r0020"
  },
  {
    "id": "N38-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "text": "午间录音",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0021"
  },
  {
    "id": "N38-r0021",
    "kind": "line",
    "source": "转述",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "speaker": "旁白",
    "text": "大哥的英语展示带了自己的口音。有人把这段戏称“半岛式”，还画出战场似的图。",
    "character": "",
    "next": "N38-r0022"
  },
  {
    "id": "N38-r0022",
    "kind": "line",
    "source": "补写",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "我在读英语，你们连现场图都画好了。",
    "character": "c07",
    "next": "interactive-N38-r0022"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0022",
    "kind": "choice",
    "text": "朗读被画成现场图，我怎么接？",
    "speaker": "刘恒怿",
    "character": "c07",
    "options": [
      {
        "text": "图留着，录音也得回头听，别只留这个姿势。",
        "next": "interactive-N38-r0022-say1"
      },
      {
        "text": "笑完再读一遍，刚才哪里卡还得自己听。",
        "next": "interactive-N38-r0022-say2"
      },
      {
        "text": "图画得像，这次朗读就算录清了。",
        "failure": "纸上开了口，录音里的停顿却没有被改。"
      },
      {
        "text": "就播最好那一句，别的不用回听。",
        "failure": "一句很顺，其余的卡点却被静音了。"
      }
    ]
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0022-say1",
    "kind": "line",
    "text": "图留着，录音也得回头听，别只留这个姿势。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N38-r0022-reply1"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0022-reply1",
    "kind": "line",
    "text": "画像没替发音领过关。",
    "speaker": "旁白",
    "character": "",
    "next": "N38-r0023"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0022-say2",
    "kind": "line",
    "text": "笑完再读一遍，刚才哪里卡还得自己听。",
    "speaker": "刘恒怿",
    "character": "c07",
    "next": "interactive-N38-r0022-reply2"
  },
  {
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "page": 98,
    "pages": [
      98
    ],
    "source": "补写",
    "id": "interactive-N38-r0022-reply2",
    "kind": "line",
    "text": "第二遍有了要留意的那个字。",
    "speaker": "旁白",
    "character": "",
    "next": "N38-r0023"
  },
  {
    "id": "N38-r0023",
    "kind": "line",
    "source": "补写",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12 · 实日待核",
    "period": "午间录音",
    "background": "classroom",
    "speaker": "同学",
    "text": "这个音，先让我们听完。",
    "character": "",
    "next": "N38-r0024"
  },
  {
    "id": "N38-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "语文被逮",
    "background": "classroom",
    "text": "语文被逮",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0025"
  },
  {
    "id": "N38-r0025",
    "kind": "line",
    "source": "转述",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "语文被逮",
    "background": "classroom",
    "speaker": "旁白",
    "text": "古诗和多文本讲解中，大哥开口讲话，老师发现。上午有些内容睡过去，下午这一回，倒不能写成没事。",
    "character": "",
    "next": "N38-r0026"
  },
  {
    "id": "N38-r0026",
    "kind": "line",
    "source": "补写",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "语文被逮",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "今天阙漏多，这回被抓，倒记得清楚。",
    "character": "c07",
    "next": "N38-r0027"
  },
  {
    "id": "N38-r0027",
    "kind": "line",
    "source": "转述",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "语文被逮",
    "background": "classroom",
    "speaker": "旁白",
    "text": "剩下体育、自习没有新记事。史官收笔，距高考的数字仍一天一天减。",
    "character": "",
    "next": "N38-r0029"
  },
  {
    "id": "N38-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0030"
  },
  {
    "id": "N38-r0030",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "在上一周惊险的出分之后，本周进入了“后期中”时代，天气已渐渐转凉，日头下山亦一日早于一日。今日史官在下午才起笔，故多有阙漏，望后之览者或见恕也。",
    "character": "",
    "next": "N38-r0031"
  },
  {
    "id": "N38-r0031",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数：能者稳定发挥，做到有的放——矢，还说：“或曰吾谬认同学于课堂，命生写题以水课，此大谬误也。”遂继以同学讲课，继水神之位。",
    "character": "",
    "next": "N38-r0032"
  },
  {
    "id": "N38-r0032",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英：今日之周末套题讲述过于稳健而不见有人争于课堂，或红衣少年昼寝，或吾昼寝而失其趣。",
    "character": "",
    "next": "N38-r0033"
  },
  {
    "id": "N38-r0033",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化、物、生：半付昼寝，半付笔记，而至笔者记录到此，早已忘其旨。故笔者不遗余力忆此，但卒无所获。",
    "character": "",
    "next": "N38-r0034"
  },
  {
    "id": "N38-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "text": "午休 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0035"
  },
  {
    "id": "N38-r0035",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "笔者之“半岛式”英语展示风采，或曰此乃加沙现场之录音。",
    "character": "",
    "next": "N38-r0036"
  },
  {
    "id": "N38-r0036",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：今日老师讲解古诗 & 多文本，笔者因上课讲话，惨遭逮捕。",
    "character": "",
    "next": "N38-r0037"
  },
  {
    "id": "N38-r0037",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "午休 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "体：无事发生。",
    "character": "",
    "next": "N38-r0038"
  },
  {
    "id": "N38-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "text": "自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N38-r0039"
  },
  {
    "id": "N38-r0039",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "无事发生。",
    "character": "",
    "next": "N38-r0040"
  },
  {
    "id": "N38-r0040",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Ending：高三至如今，最初的热情，以及不同于前两年的新鲜感早已淡去。能支撑着我们在这场劳苦中披星戴月、风雨无阻的，只有那坚定不移的目标与坚持不懈的决心。",
    "character": "",
    "next": "N38-r0041"
  },
  {
    "id": "N38-r0041",
    "kind": "line",
    "source": "原文",
    "page": 98,
    "pages": [
      98
    ],
    "day": "N38",
    "context": "回看待核日期 · 暂排2023-11-12",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“多少事，从来急，天地转，光阴迫，一万年太久，只争朝夕。”",
    "character": "",
    "next": "D25-date"
  },
  {
    "id": "D25-date",
    "kind": "date",
    "source": "演出",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-14",
    "text": "早读迟到",
    "pov": "c26",
    "character": "",
    "next": "D25-0001"
  },
  {
    "id": "D25-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "早读迟到",
    "pov": "c26",
    "character": "c26",
    "speaker": "贾盛元",
    "next": "D25-0002"
  },
  {
    "id": "D25-0002",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "text": "早读迟到",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D25-0003"
  },
  {
    "id": "D25-0003",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "老师，我迟到的原因先跟您说。",
    "character": "c26",
    "next": "interactive-D25-0003"
  },
  {
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-0003",
    "kind": "choice",
    "text": "迟到后我怎样解释？",
    "speaker": "贾盛元",
    "character": "c26",
    "options": [
      {
        "text": "老师，我把原因说清，这节我赶紧跟上。",
        "next": "interactive-D25-0003-say1"
      },
      {
        "text": "是我迟到了，该补的我下课补。",
        "next": "interactive-D25-0003-say2"
      },
      {
        "text": "先找个最容易被接受的理由，不讲实际的。",
        "failure": "理由准时到场，真实的迟到却还在门外。"
      },
      {
        "text": "坐下就没事了，不用再交代。",
        "failure": "人到了座位，迟到却没有等到一句回应。"
      }
    ]
  },
  {
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-0003-say1",
    "kind": "line",
    "text": "老师，我把原因说清，这节我赶紧跟上。",
    "speaker": "贾盛元",
    "character": "c26",
    "next": "interactive-D25-0003-reply1"
  },
  {
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-0003-reply1",
    "kind": "line",
    "text": "先坐下，别再耽误。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D25-0004"
  },
  {
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-0003-say2",
    "kind": "line",
    "text": "是我迟到了，该补的我下课补。",
    "speaker": "贾盛元",
    "character": "c26",
    "next": "interactive-D25-0003-reply2"
  },
  {
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-0003-reply2",
    "kind": "line",
    "text": "把今天的安排看好。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D25-0004"
  },
  {
    "id": "D25-0004",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "speaker": "HQ",
    "text": "主动说明情况，变乖了。总结也要交。",
    "character": "c45",
    "next": "D25-0006"
  },
  {
    "id": "D25-0006",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "早读迟到",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "HQ今天写了自己的一天，我们从这张纸读起。",
    "character": "xu",
    "next": "D25-0007"
  },
  {
    "id": "D25-0007",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "text": "老师的一天",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D25-0008"
  },
  {
    "id": "D25-0008",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "五点半梦中惊醒，前一晚看期中总结失眠，还梦见自己在上课。",
    "character": "",
    "next": "D25-0009"
  },
  {
    "id": "D25-0009",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "六点到七点上班，七点吃早饭。听别人吐槽打架，突然觉得七班娃还很可爱。",
    "character": "",
    "next": "D25-0010"
  },
  {
    "id": "D25-0010",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "夸我们的时候，最好别漏看下一条。",
    "character": "c26",
    "next": "D25-0011"
  },
  {
    "id": "D25-0011",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "七点二十早读，迟到好转，怒斥不交总结的熊孩子。",
    "character": "",
    "next": "D25-0012"
  },
  {
    "id": "D25-0012",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "八点到十二点，先在题海里筛典型题，再判作业。电容器学得不咋地，准备开批。",
    "character": "",
    "next": "D25-0013"
  },
  {
    "id": "D25-0013",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "我们拿到一份讲义，她得先把一片题海走完。",
    "character": "xu",
    "next": "D25-0014"
  },
  {
    "id": "D25-0014",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "十二点半到一点四十，边吃三明治边答疑，小史、佳怡来谈心。",
    "character": "",
    "next": "D25-0015"
  },
  {
    "id": "D25-0015",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "一点五十到三点二十五，两节课，基础多讲，但他们不爱听。",
    "character": "",
    "next": "D25-0016"
  },
  {
    "id": "D25-0016",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "还是听吧。没听懂的，会回到下一份卷子里。",
    "character": "c26",
    "next": "D25-0017"
  },
  {
    "id": "D25-0017",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "四点印很多题，准备班会，分析成绩，一直干到五点半。回家接着做。",
    "character": "",
    "next": "D25-0018"
  },
  {
    "id": "D25-0018",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "HQ · 记录",
    "text": "七点到九点半准备家长会，十点睡，明早接着干。",
    "character": "",
    "next": "D25-0019"
  },
  {
    "id": "D25-0019",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · HQ于当日记录",
    "period": "老师的一天",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "十五小时。将军辛苦！",
    "character": "xu",
    "next": "D25-r0041"
  },
  {
    "id": "D25-r0041",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D25-r0042"
  },
  {
    "id": "D25-r0042",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "早，5:30 梦中惊醒，因前一天晚上看为数不多的期中总结，失眠。",
    "character": "",
    "next": "D25-r0043"
  },
  {
    "id": "D25-r0043",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "6:00—7:00 上班。",
    "character": "",
    "next": "D25-r0044"
  },
  {
    "id": "D25-r0044",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "7:00—7:20 食堂吃早饭。别的班主任在吐槽学生打架，突然感觉7班娃还很可爱。",
    "character": "",
    "next": "D25-r0045"
  },
  {
    "id": "D25-r0045",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "7:20—8:00 早读：",
    "character": "",
    "next": "D25-r0046"
  },
  {
    "id": "D25-r0046",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 焉哥堵车。其他迟到大王早读到校情况好转！",
    "character": "",
    "next": "D25-r0047"
  },
  {
    "id": "D25-r0047",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "3. 怒斥不交总结的熊孩子！",
    "character": "",
    "next": "D25-r0048"
  },
  {
    "id": "D25-r0048",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "8:00—12:00：",
    "character": "",
    "next": "D25-r0049"
  },
  {
    "id": "D25-r0049",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 讲义8.7（1）（2）：先去题海中畅游了一圈，筛选出各种典型海洋生物，印于讲义，希望他们享用愉快！",
    "character": "",
    "next": "D25-r0050"
  },
  {
    "id": "D25-r0050",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 判了作业，发现电容器学得不咋地……准备上课“开批”。",
    "character": "",
    "next": "D25-r0051"
  },
  {
    "id": "D25-r0051",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "12:30—13:40：",
    "character": "",
    "next": "D25-r0052"
  },
  {
    "id": "D25-r0052",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 边吃了三明治边答疑，脑子已晕。",
    "character": "",
    "next": "D25-r0053"
  },
  {
    "id": "D25-r0053",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 小史、佳怡来谈心。",
    "character": "",
    "next": "D25-r0054"
  },
  {
    "id": "D25-r0054",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "13:50—15:25 上了两节课，基础多讲。（但他们不爱听）。",
    "character": "",
    "next": "D25-r0055"
  },
  {
    "id": "D25-r0055",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "16:00：",
    "character": "",
    "next": "D25-r0056"
  },
  {
    "id": "D25-r0056",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 印了很多题，很多题……这周够用了。",
    "character": "",
    "next": "D25-r0057"
  },
  {
    "id": "D25-r0057",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 准备班会，看各位的期中总结；分析各位的成绩。",
    "character": "",
    "next": "D25-r0058"
  },
  {
    "id": "D25-r0058",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "一直干到17:30。",
    "character": "",
    "next": "D25-r0059"
  },
  {
    "id": "D25-r0059",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "17:50 下班（其实回家接着干……）。",
    "character": "",
    "next": "D25-r0060"
  },
  {
    "id": "D25-r0060",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "18:40 到家。",
    "character": "",
    "next": "D25-r0061"
  },
  {
    "id": "D25-r0061",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "22:00 睡……明早接着干。希望他们不迟到、不吵闹、不惹事、不调皮。",
    "character": "",
    "next": "D25-r0062"
  },
  {
    "id": "D25-r0062",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "哪个好心人可以计算一下我每天工作几个小时，……",
    "character": "",
    "next": "D25-r0063"
  },
  {
    "id": "D25-r0063",
    "kind": "line",
    "source": "原文",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "15小时。将军辛苦！",
    "character": "",
    "next": "D25-0020"
  },
  {
    "id": "D25-0020",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 心理课职业测试",
    "period": "将军的来处",
    "background": "classroom",
    "text": "将军的来处",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D25-r0020"
  },
  {
    "id": "D25-r0020",
    "kind": "line",
    "source": "转述",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 心理课职业测试",
    "period": "将军的来处",
    "background": "classroom",
    "speaker": "旁白",
    "text": "心理课职业测试得了“大将军”，于是称呼跟着HQ传开。我们再看她从早到晚的记录，这几字倒格外贴切。",
    "character": "",
    "next": "D25-0022"
  },
  {
    "id": "D25-0022",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "text": "另一页工作记录",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D25-r0022"
  },
  {
    "id": "D25-r0022",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "这里又一页。三节七十分钟，下午还一直忙到晚上。",
    "character": "xu",
    "next": "D25-0024"
  },
  {
    "id": "D25-0024",
    "kind": "line",
    "source": "转述",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "speaker": "旁白",
    "text": "上午三节七十分钟课，午间答疑，下午一点半到晚上九点做期中分析。老师还记了自己暴躁，要改。",
    "character": "",
    "next": "D25-r0024"
  },
  {
    "id": "D25-r0024",
    "kind": "portrait",
    "source": "演出",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "pov": "xu",
    "character": "xu",
    "speaker": "徐启元",
    "text": "这一段，由徐启元接着记。",
    "next": "D25-r0025"
  },
  {
    "id": "D25-r0025",
    "kind": "choice",
    "source": "补写",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "text": "看到老师忙碌的一天，我怎么接",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "“将军辛苦！我们明天把总结准时交，少让您追一点。”",
        "next": "D25-r0026"
      },
      {
        "text": "“谢谢老师。我把这句写下来，也把今天的补齐。”",
        "next": "D25-r0028"
      },
      {
        "text": "老师忙得很，今晚就别发我们的总结打扰了。",
        "failure": "体贴先出了声，总结却借着体贴失了踪。"
      }
    ]
  },
  {
    "id": "D25-r0026",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "text": "“将军辛苦！我们明天把总结准时交，少让您追一点。”",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D25-r0027"
  },
  {
    "id": "D25-r0027",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "speaker": "HQ",
    "text": "好，明天我看看。",
    "character": "c45",
    "next": "D25-0028"
  },
  {
    "id": "D25-r0028",
    "kind": "line",
    "source": "补写",
    "page": 97,
    "pages": [
      97,
      100,
      181,
      182
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "text": "“谢谢老师。我把这句写下来，也把今天的补齐。”",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D25-r0029"
  },
  {
    "id": "D25-r0029",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "阅读 · 11月11日工作补记",
    "period": "另一页工作记录",
    "background": "classroom",
    "speaker": "HQ",
    "text": "写完也记得做到。",
    "character": "c45",
    "next": "D25-0028"
  },
  {
    "id": "D25-0028",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "收好纸页",
    "background": "classroom",
    "text": "收好纸页",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D25-0029"
  },
  {
    "id": "D25-0029",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "现实",
    "period": "收好纸页",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "基础课听进去，可能是我们最具体的回应。",
    "character": "c26",
    "next": "D25-r0032"
  },
  {
    "id": "D25-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "text": "群里怎么没人回",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D25-r0033"
  },
  {
    "id": "D25-r0033",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "资料发给你们，怎么群里一点回复都没有？我日夜找，你们到底看没看？",
    "character": "c46",
    "next": "interactive-D25-r0033"
  },
  {
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-r0033",
    "kind": "choice",
    "text": "老师找资料，群里没人回，我怎么接？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "看到了，我也把读到的问题回给您。",
        "next": "interactive-D25-r0033-say1"
      },
      {
        "text": "没看完我就说没看完，今晚补上。",
        "next": "interactive-D25-r0033-say2"
      },
      {
        "text": "群里已读应该够了，不用再回。",
        "failure": "资料发出了声，群里却只剩一排沉默。"
      },
      {
        "text": "统一回个表情，就算每个人都看过。",
        "failure": "表情来得整齐，阅读却没有跟着签到。"
      }
    ]
  },
  {
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-r0033-say1",
    "kind": "line",
    "text": "看到了，我也把读到的问题回给您。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-D25-r0033-reply1"
  },
  {
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-r0033-reply1",
    "kind": "line",
    "text": "别只让我知道发出去了。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D25-r0034"
  },
  {
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-r0033-say2",
    "kind": "line",
    "text": "没看完我就说没看完，今晚补上。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-D25-r0033-reply2"
  },
  {
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "page": 100,
    "pages": [
      100
    ],
    "source": "补写",
    "id": "interactive-D25-r0033-reply2",
    "kind": "line",
    "text": "看完要落到题里。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D25-r0034"
  },
  {
    "id": "D25-r0034",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "speaker": "同学",
    "text": "给您磕五的n次方个！",
    "character": "",
    "next": "D25-r0035"
  },
  {
    "id": "D25-r0035",
    "kind": "line",
    "source": "补写",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "东施效颦，亦步亦趋。",
    "character": "c46",
    "next": "D25-r0036"
  },
  {
    "id": "D25-r0036",
    "kind": "line",
    "source": "转述",
    "page": 100,
    "pages": [
      100
    ],
    "day": "D25",
    "context": "回忆 · 语文群",
    "period": "群里怎么没人回",
    "background": "classroom",
    "speaker": "旁白",
    "text": "学十八班的回复没讨好成功，群里又静了。刚想只用一句热闹话蒙过去的人，也得回去把资料打开。",
    "character": "",
    "next": "N39-date"
  },
  {
    "id": "N39-date",
    "kind": "date",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-15",
    "text": "二三本生物册",
    "pov": "c06",
    "character": "",
    "next": "N39-r0025"
  },
  {
    "id": "N39-r0025",
    "kind": "portrait",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "二三本生物册",
    "pov": "c06",
    "character": "c06",
    "speaker": "吕思宇",
    "next": "N39-r0012"
  },
  {
    "id": "N39-r0012",
    "kind": "scene",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "text": "册子太少",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N39-r0013"
  },
  {
    "id": "N39-r0013",
    "kind": "line",
    "source": "转述",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物册收来不过二三本，有人拿历史作业的数量来比。",
    "character": "",
    "next": "N39-r0014"
  },
  {
    "id": "N39-r0014",
    "kind": "line",
    "source": "补写",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "speaker": "同学",
    "text": "还不若历史之数。",
    "character": "",
    "next": "N39-r0015"
  },
  {
    "id": "N39-r0015",
    "kind": "line",
    "source": "补写",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "数量少得，都能一眼数完。",
    "character": "c06",
    "next": "interactive-N39-r0015"
  },
  {
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0015",
    "kind": "choice",
    "text": "册子只交二三本，我怎么提醒？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "先问漏在哪儿，没交的赶紧补齐。",
        "next": "interactive-N39-r0015-say1"
      },
      {
        "text": "把名单和本子对一遍，别只数桌上这一叠。",
        "next": "interactive-N39-r0015-say2"
      },
      {
        "text": "这几本够老师判了，其他先不用催。",
        "failure": "桌子很清静，未交的作业也继续清静。"
      },
      {
        "text": "没有交的先记成都没写，别再问。",
        "failure": "记录下得很快，书包里的那本却没被看见。"
      }
    ]
  },
  {
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0015-say1",
    "kind": "line",
    "text": "先问漏在哪儿，没交的赶紧补齐。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N39-r0015-reply1"
  },
  {
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0015-reply1",
    "kind": "line",
    "text": "少数册子终于等来了余下的问话。",
    "speaker": "旁白",
    "character": "",
    "next": "N39-r0016"
  },
  {
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0015-say2",
    "kind": "line",
    "text": "把名单和本子对一遍，别只数桌上这一叠。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N39-r0015-reply2"
  },
  {
    "day": "N39",
    "context": "现实 · 11月15日补记",
    "period": "册子太少",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0015-reply2",
    "kind": "line",
    "text": "空缺有了具体的位置。",
    "speaker": "旁白",
    "character": "",
    "next": "N39-r0016"
  },
  {
    "id": "N39-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "text": "拒绝信",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N39-r0017"
  },
  {
    "id": "N39-r0017",
    "kind": "line",
    "source": "转述",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "speaker": "旁白",
    "text": "早读写拒绝信，话题又碰到不用AI写论文。大家把句子写在自己的纸上。",
    "character": "",
    "next": "N39-r0018"
  },
  {
    "id": "N39-r0018",
    "kind": "line",
    "source": "补写",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "这个收信人，先别让机器替我选措辞。",
    "character": "c06",
    "next": "interactive-N39-r0018"
  },
  {
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0018",
    "kind": "choice",
    "text": "拒绝信措辞要怎么定？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "先想收信的人，再把不合适的语气改掉。",
        "next": "interactive-N39-r0018-say1"
      },
      {
        "text": "我自己的意思先说清，再看哪些词伤人。",
        "next": "interactive-N39-r0018-say2"
      },
      {
        "text": "生成得挺客气，整段照搬就好。",
        "failure": "客气的模板到了，收信的人却没被真正想起。"
      },
      {
        "text": "拒绝越短越好，原因和语气都省了。",
        "failure": "字数确实少了，误会却多出了整页空白。"
      }
    ]
  },
  {
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0018-say1",
    "kind": "line",
    "text": "先想收信的人，再把不合适的语气改掉。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N39-r0018-reply1"
  },
  {
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0018-reply1",
    "kind": "line",
    "text": "信没有只剩机器的句式。",
    "speaker": "旁白",
    "character": "",
    "next": "N39-r0019"
  },
  {
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0018-say2",
    "kind": "line",
    "text": "我自己的意思先说清，再看哪些词伤人。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-N39-r0018-reply2"
  },
  {
    "day": "N39",
    "context": "现实",
    "period": "拒绝信",
    "background": "classroom",
    "page": 101,
    "pages": [
      101
    ],
    "source": "补写",
    "id": "interactive-N39-r0018-reply2",
    "kind": "line",
    "text": "句子保留了分寸，也保留了意思。",
    "speaker": "旁白",
    "character": "",
    "next": "N39-r0019"
  },
  {
    "id": "N39-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "会议的名字",
    "background": "classroom",
    "text": "会议的名字",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N39-r0020"
  },
  {
    "id": "N39-r0020",
    "kind": "line",
    "source": "转述",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "会议的名字",
    "background": "classroom",
    "speaker": "旁白",
    "text": "统练是人尽皆知的丰台卷，午休几个人又受命开会。",
    "character": "",
    "next": "N39-r0021"
  },
  {
    "id": "N39-r0021",
    "kind": "line",
    "source": "补写",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "会议的名字",
    "background": "classroom",
    "speaker": "同学",
    "text": "这是课，还是周日团建？",
    "character": "",
    "next": "N39-r0022"
  },
  {
    "id": "N39-r0022",
    "kind": "line",
    "source": "补写",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "会议的名字",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "其他忘了。能记得的先补上，别把落笔那天也当成今天。",
    "character": "c06",
    "next": "N39-r0024"
  },
  {
    "id": "N39-r0024",
    "kind": "scene",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N39-r0003"
  },
  {
    "id": "N39-r0003",
    "kind": "scene",
    "source": "演出",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "text": "补录：",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "N39-r0004"
  },
  {
    "id": "N39-r0004",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "补录：",
    "character": "",
    "next": "N39-r0005"
  },
  {
    "id": "N39-r0005",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日所收生物之册不过二三矣，或曰：“其不若历史之数也。”",
    "character": "",
    "next": "N39-r0006"
  },
  {
    "id": "N39-r0006",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "早读写拒绝信之不用AI写论文。",
    "character": "",
    "next": "N39-r0007"
  },
  {
    "id": "N39-r0007",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "统练乃人尽皆知丰台卷。",
    "character": "",
    "next": "N39-r0008"
  },
  {
    "id": "N39-r0008",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午休数人受命开会。",
    "character": "",
    "next": "N39-r0009"
  },
  {
    "id": "N39-r0009",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "其课欤？其周日团建也！",
    "character": "",
    "next": "N39-r0010"
  },
  {
    "id": "N39-r0010",
    "kind": "line",
    "source": "原文",
    "page": 101,
    "pages": [
      101
    ],
    "day": "N39",
    "context": "回忆 · 日志补记",
    "period": "补录：",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Snow Tea，2023.11.18。",
    "character": "",
    "next": "D26-date"
  },
  {
    "id": "D26-date",
    "kind": "date",
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
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-11-16",
    "text": "二十多人的一碗面",
    "pov": "c28",
    "character": "",
    "next": "D26-0001"
  },
  {
    "id": "D26-0001",
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
    "period": "",
    "background": "classroom",
    "text": "二十多人的一碗面",
    "pov": "c28",
    "character": "c28",
    "speaker": "贾诺基",
    "next": "D26-0002"
  },
  {
    "id": "D26-0002",
    "kind": "scene",
    "source": "演出",
    "page": 102,
    "pages": [
      102,
      103
    ],
    "day": "D26",
    "context": "现实",
    "period": "自习变数学",
    "background": "classroom",
    "text": "自习变数学",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D26-0003"
  },
  {
    "id": "D26-0003",
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
    "text": "今天应到四十七，实到四十五，自习又变数学了。",
    "character": "c28",
    "next": "D26-0004"
  },
  {
    "id": "D26-0004",
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
    "speaker": "战老师",
    "text": "周六要去命期末题，今天抓紧。课业做完了，我们聊聊。",
    "character": "c48",
    "next": "D26-0006"
  },
  {
    "id": "D26-0006",
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
    "speaker": "李沛霖",
    "text": "老师，附近有好吃的面吗？",
    "character": "c05",
    "next": "D26-0007"
  },
  {
    "id": "D26-0007",
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
    "speaker": "战老师",
    "text": "有，八块钱一碗。你们可以去试试。",
    "character": "c48",
    "next": "D26-0009"
  },
  {
    "id": "D26-0009",
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
    "text": "先约人，晚自习前吃完回来。",
    "character": "c27",
    "next": "D26-r0008"
  },
  {
    "id": "D26-r0008",
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
    "speaker": "李沛霖",
    "text": "八元一碗，会不会有窜稀之患？",
    "character": "c05",
    "next": "D26-r0009"
  },
  {
    "id": "D26-r0009",
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
    "speaker": "战老师",
    "text": "西北多香辛料，菜里用得多，蟑螂老鼠都不敢近，怎么会窜稀。",
    "character": "c48",
    "next": "D26-r0010"
  }
];
export default data;
