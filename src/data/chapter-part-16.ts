import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D20-0013",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "speaker": "吕思宇",
    "text": "醒来再回。时间错开，话不必丢。",
    "character": "c06",
    "next": "D20-0014"
  },
  {
    "id": "D20-0014",
    "kind": "line",
    "source": "转述",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "speaker": "旁白",
    "text": "信、礼物、相约签，一件一件留下。合影中，也出现过写着名字的横幅、竹签替身。",
    "character": "",
    "next": "D20-r0014"
  },
  {
    "id": "D20-r0014",
    "kind": "choice",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73,
      207,
      209
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "text": "她夜里回家，我早上醒来怎么说",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "“昨晚的留言看到了。我今天也有件事，等你放学讲。”",
        "next": "D20-r0015"
      },
      {
        "text": "“我把想说的写成信，攒在一起寄给你。”",
        "next": "D20-r0017"
      },
      {
        "text": "我们时差总错开，没及时回的以后就都不留了。",
        "failure": "留言赶过了夜路，却没赶上收信人替它关门。"
      }
    ]
  },
  {
    "id": "D20-r0015",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73,
      207,
      209
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "text": "“昨晚的留言看到了。我今天也有件事，等你放学讲。”",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "D20-r0016"
  },
  {
    "id": "D20-r0016",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "speaker": "程洛怡",
    "text": "好，回来我看。",
    "character": "c43",
    "next": "D20-0018"
  },
  {
    "id": "D20-r0017",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73,
      207,
      209
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "text": "“我把想说的写成信，攒在一起寄给你。”",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "D20-r0018"
  },
  {
    "id": "D20-r0018",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "回忆 · 温雪异地通讯",
    "period": "时间错开",
    "background": "home",
    "speaker": "程洛怡",
    "text": "那我也给你写。",
    "character": "c43",
    "next": "D20-0018"
  },
  {
    "id": "D20-0018",
    "kind": "scene",
    "source": "演出",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "现实",
    "period": "批红",
    "background": "classroom",
    "text": "批红",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D20-0019"
  },
  {
    "id": "D20-0019",
    "kind": "line",
    "source": "转述",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "现实",
    "period": "批红",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ在前面翻班史。一页里不只有史官的黑字，还能留下老师的批红。",
    "character": "",
    "next": "D20-0020"
  },
  {
    "id": "D20-0020",
    "kind": "line",
    "source": "补写",
    "page": 70,
    "pages": [
      70,
      71,
      72,
      73
    ],
    "day": "D20",
    "context": "现实",
    "period": "批红",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "今天主题，我爱学习，确信。",
    "character": "c06",
    "next": "N22-date"
  },
  {
    "id": "N22-date",
    "kind": "date",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75,
      236
    ],
    "day": "N22",
    "context": "日历编排 · 事件实日待核",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-13",
    "text": "观测站报告",
    "pov": "xu",
    "character": "",
    "next": "N22-r0083"
  },
  {
    "id": "N22-r0083",
    "kind": "portrait",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75,
      236
    ],
    "day": "N22",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "观测站报告",
    "pov": "xu",
    "character": "xu",
    "speaker": "徐启元",
    "next": "N22-r0021"
  },
  {
    "id": "N22-r0021",
    "kind": "scene",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 原页日期改画待核",
    "period": "SOLⅢ观测站",
    "background": "classroom",
    "text": "SOLⅢ观测站",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N22-r0022"
  },
  {
    "id": "N22-r0022",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 原页日期改画待核",
    "period": "SOLⅢ观测站",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总督，欢迎回来。我是负责SOLⅢ RDFZ观测站的负责人泽宇。",
    "character": "",
    "next": "N22-r0023"
  },
  {
    "id": "N22-r0023",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 原页日期改画待核",
    "period": "SOLⅢ观测站",
    "background": "classroom",
    "speaker": "旁白",
    "text": "这一页把七班换成观测站，把一天换成地球自转周期。报告旁边留着像游戏窗口的画框。",
    "character": "",
    "next": "N22-r0024"
  },
  {
    "id": "N22-r0024",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 原页日期改画待核",
    "period": "SOLⅢ观测站",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "上空有奇异的云。科学家迅速按快门，才捕捉到转瞬即逝的现象。",
    "character": "",
    "next": "N22-r0025"
  },
  {
    "id": "N22-r0025",
    "kind": "line",
    "source": "补写",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 原页日期改画待核",
    "period": "SOLⅢ观测站",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "云没留下，照片倒留下了。",
    "character": "xu",
    "next": "N22-r0026"
  },
  {
    "id": "N22-r0026",
    "kind": "scene",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "text": "宿敌的窗口",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N22-r0027"
  },
  {
    "id": "N22-r0027",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "满者金银利益集团宣布小帮凶共和国为宿敌。",
    "character": "",
    "next": "N22-r0028"
  },
  {
    "id": "N22-r0028",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "speaker": "旁白",
    "text": "所谓宿敌，报告归因于书包被“掷出窗外”。引号和宇宙帝国的语气，一起留在这场夸张叙述里。",
    "character": "",
    "next": "N22-r0029"
  },
  {
    "id": "N22-r0029",
    "kind": "line",
    "source": "补写",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "这报告写得，我还真成一个集团了。",
    "character": "c03",
    "next": "interactive-N22-r0029"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0029",
    "kind": "choice",
    "text": "观测报告把满者写成集团，我怎么接？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "报告这口气挺大，你先认哪一段？",
        "next": "interactive-N22-r0029-say1"
      },
      {
        "text": "宿敌的窗口都开好了，你的解释呢？",
        "next": "interactive-N22-r0029-say2"
      },
      {
        "text": "报告写得正式，那就都当实事记吧。",
        "failure": "观测站盖了一个虚构章，现实却没同意并入。"
      },
      {
        "text": "你名字在里面，就算你亲口承认了。",
        "failure": "名字签了到，满者却被代签了整份报告。"
      }
    ]
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0029-say1",
    "kind": "line",
    "text": "报告这口气挺大，你先认哪一段？",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N22-r0029-reply1"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0029-reply1",
    "kind": "line",
    "text": "我认名字，不认全篇。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N22-r0030"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0029-say2",
    "kind": "line",
    "text": "宿敌的窗口都开好了，你的解释呢？",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N22-r0029-reply2"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0029-reply2",
    "kind": "line",
    "text": "先让我读完。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N22-r0030"
  },
  {
    "id": "N22-r0030",
    "kind": "line",
    "source": "补写",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "共和国也收到通知了？",
    "character": "c17",
    "next": "interactive-N22-r0030"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0030",
    "kind": "choice",
    "text": "沐衡问共和国也收到通知，我怎么接？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "先看看通知里怎么写你，别急着认领。",
        "next": "interactive-N22-r0030-say1"
      },
      {
        "text": "这一页的称号真齐，前面那个也得连着看。",
        "next": "interactive-N22-r0030-say2"
      },
      {
        "text": "收到通知就当事情真发生过了。",
        "failure": "通知传到了手里，戏仿却忘了保留引号。"
      },
      {
        "text": "只留共和国这个名，别的设定自己补。",
        "failure": "国号很响，前面的玩笑却没有接上。"
      }
    ]
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0030-say1",
    "kind": "line",
    "text": "先看看通知里怎么写你，别急着认领。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N22-r0030-reply1"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0030-reply1",
    "kind": "line",
    "text": "我先翻这一段。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "N22-r0031"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0030-say2",
    "kind": "line",
    "text": "这一页的称号真齐，前面那个也得连着看。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N22-r0030-reply2"
  },
  {
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "宿敌的窗口",
    "background": "classroom",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "source": "补写",
    "id": "interactive-N22-r0030-reply2",
    "kind": "line",
    "text": "都在报告里。",
    "speaker": "李沐衡",
    "character": "c17",
    "next": "N22-r0031"
  },
  {
    "id": "N22-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "期中加成",
    "background": "classroom",
    "text": "期中加成",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N22-r0032"
  },
  {
    "id": "N22-r0032",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "期中加成",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "满者，首席科学家。做题速度加百分之百，正确率加百分之百。相对难度：宛若神明。",
    "character": "",
    "next": "N22-r0033"
  },
  {
    "id": "N22-r0033",
    "kind": "line",
    "source": "补写",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "期中加成",
    "background": "classroom",
    "speaker": "同学",
    "text": "这是考试通知，还是请满者保佑？",
    "character": "",
    "next": "N22-r0034"
  },
  {
    "id": "N22-r0034",
    "kind": "line",
    "source": "转述",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "期中加成",
    "background": "classroom",
    "speaker": "旁白",
    "text": "游戏式窗口给出祝好运、满者保佑等口气，现实的期中准备却只有桌上的卷子。",
    "character": "",
    "next": "N22-r0035"
  },
  {
    "id": "N22-r0035",
    "kind": "line",
    "source": "补写",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "班史戏仿 · 观测报告",
    "period": "期中加成",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "报告归报告，试卷还要自己写。",
    "character": "xu",
    "next": "N22-r0037"
  },
  {
    "id": "N22-r0037",
    "kind": "scene",
    "source": "演出",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N22-r0038"
  },
  {
    "id": "N22-r0038",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "页上注：由日史官改动，概不负责。",
    "character": "",
    "next": "N22-r0039"
  },
  {
    "id": "N22-r0039",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总督，欢迎回来，我是负责SOLⅢ RDFZ观测站的负责人泽宇。现在向您简略汇报这一个地球自转周期内观察到的新气象。",
    "character": "",
    "next": "N22-r0040"
  },
  {
    "id": "N22-r0040",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这两天在SOLⅢ上空出现了许多奇形怪状的云，SOLⅢ上的土著对此展示出了喜爱与崇敬，还好我们的许多科学家迅速地按下了快门，所以我们才能捕捉到这一转瞬即逝而又奇特的现象。",
    "character": "",
    "next": "N22-r0041"
  },
  {
    "id": "N22-r0041",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大讨论",
    "character": "",
    "next": "N22-r0042"
  },
  {
    "id": "N22-r0042",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日，在SOLⅢ的七班议事会空闲的过程中，一位议员向其他议员提出了一个深刻的议题，这个议题关于爱情、生活、智慧和幸福，这个议题一被提出遍受到了人们的广泛关注，经过激烈的讨论，人们认可了这位",
    "character": "",
    "next": "N22-r0043"
  },
  {
    "id": "N22-r0043",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "议员的观点。",
    "character": "",
    "next": "N22-r0044"
  },
  {
    "id": "N22-r0044",
    "kind": "line",
    "source": "原文",
    "page": 74,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这位议员作为四大之首的参议员支持率有所提高。由此，七班议事会的主要思潮由传统保守主义转变为了激进自由工口主义。",
    "character": "",
    "next": "N22-r0045"
  },
  {
    "id": "N22-r0045",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "宣布宿敌",
    "character": "",
    "next": "N22-r0046"
  },
  {
    "id": "N22-r0046",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "在人类年2023年10月的一天，满者金银利益集团宣布小帮凶共和国为宿敌。这件事的起因是小帮凶对集团代表财富的象征物“书包”“掷出窗外”。",
    "character": "",
    "next": "N22-r0047"
  },
  {
    "id": "N22-r0047",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这不禁让人想起了人类年1618中的一天两个前太空文明因为唯心主义思潮的一些冲突从而引发的战争。",
    "character": "",
    "next": "N22-r0048"
  },
  {
    "id": "N22-r0048",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "期中模拟",
    "character": "",
    "next": "N22-r0049"
  },
  {
    "id": "N22-r0049",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "提供加成：做题速度+100%；正确率+100%。",
    "character": "",
    "next": "N22-r0050"
  },
  {
    "id": "N22-r0050",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "研究时间：0.25 SOLⅢ卫星的周期。",
    "character": "",
    "next": "N22-r0051"
  },
  {
    "id": "N22-r0051",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "啊哈，看来SOLⅢ RDFZ管理区的原住民遇到大麻烦了。",
    "character": "",
    "next": "N22-r0052"
  },
  {
    "id": "N22-r0052",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今天清晨七班的总督公布了一个坏消息：在接下来的0.25个人类月（SOLⅢ一颗自然卫星的周期）中七班将迎来一次大审查，这次大审查将针对人们的七个学习学科分别进行检验，据不可溯消息称结果没有满",
    "character": "",
    "next": "N22-r0053"
  },
  {
    "id": "N22-r0053",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "足标准的人将被“大清洗”而被冠上“退步之星”的名号。",
    "character": "",
    "next": "N22-r0054"
  },
  {
    "id": "N22-r0054",
    "kind": "line",
    "source": "原文",
    "page": 75,
    "pages": [
      74,
      75
    ],
    "day": "N22",
    "context": "回看待核日期 · 暂排2023-10-13",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "这个消息一经公布，人们立即意识到了期中考试的临近，人人忙于称为“内卷”的事务。关于这个原著民称为“内卷”的名词，需要我们的研究人员进一步考察RDFZ管理区的人才可得到进一步的定义。",
    "character": "",
    "next": "N22-r0055"
  },
  {
    "id": "N22-r0055",
    "kind": "scene",
    "source": "演出",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "text": "七日称满",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N22-r0056"
  },
  {
    "id": "N22-r0056",
    "kind": "line",
    "source": "转述",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "旁白",
    "text": "课间再翻同学写的残卷，人物姓名被写成了神话。",
    "character": "",
    "next": "N22-r0057"
  },
  {
    "id": "N22-r0057",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "神经",
    "character": "",
    "next": "N22-r0058"
  },
  {
    "id": "N22-r0058",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "旧约·满者传创世纪",
    "character": "",
    "next": "N22-r0059"
  },
  {
    "id": "N22-r0059",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "起初，涵在混沌中产生。",
    "character": "",
    "next": "N22-r0060"
  },
  {
    "id": "N22-r0060",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "在空虚和黑暗的深渊，涵的灵运行中央。",
    "character": "",
    "next": "N22-r0061"
  },
  {
    "id": "N22-r0061",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“要有光。”就有了光。",
    "character": "",
    "next": "N22-r0062"
  },
  {
    "id": "N22-r0062",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵看着好的，就把光暗分开了。",
    "character": "",
    "next": "N22-r0063"
  },
  {
    "id": "N22-r0063",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵称光为昼，称暗为夜。",
    "character": "",
    "next": "N22-r0064"
  },
  {
    "id": "N22-r0064",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "有昼，有夜，是第一日，",
    "character": "",
    "next": "N22-r0065"
  },
  {
    "id": "N22-r0065",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“要有空气。”就有了空气，",
    "character": "",
    "next": "N22-r0066"
  },
  {
    "id": "N22-r0066",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "空气在渊上面的，上下就分开了。",
    "character": "",
    "next": "N22-r0067"
  },
  {
    "id": "N22-r0067",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵称空气为天。",
    "character": "",
    "next": "N22-r0068"
  },
  {
    "id": "N22-r0068",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“要有水和土。\"事就这样成了。",
    "character": "",
    "next": "N22-r0069"
  },
  {
    "id": "N22-r0069",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵称土的繁处为地，称水的聚处为海。",
    "character": "",
    "next": "N22-r0070"
  },
  {
    "id": "N22-r0070",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "有天，有地，有海，是第二日。",
    "character": "",
    "next": "N22-r0071"
  },
  {
    "id": "N22-r0071",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“天上要有分昼夜，定时间的光普照在地上。”于是涵造了两个大光，又造了众多小光，把这些光摆列在天空，普照在地上，管理昼夜，分别明暗。",
    "character": "",
    "next": "N22-r0072"
  },
  {
    "id": "N22-r0072",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵称代表昼的光为日，代表夜的光为月，漫天的光为星。",
    "character": "",
    "next": "N22-r0073"
  },
  {
    "id": "N22-r0073",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "有日，有月，有星，是第三日。",
    "character": "",
    "next": "N22-r0074"
  },
  {
    "id": "N22-r0074",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“海里要有鱼，地上要有兽，天上要有鸟。”涵滋养出了各样生命。",
    "character": "",
    "next": "N22-r0075"
  },
  {
    "id": "N22-r0075",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵看着是好的，就赐福给这一切。",
    "character": "",
    "next": "N22-r0076"
  },
  {
    "id": "N22-r0076",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "有生命，是第四日。",
    "character": "",
    "next": "N22-r0077"
  },
  {
    "id": "N22-r0077",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“要有像我的灵来管理生命。”涵按自己的样子造男创女，赐给他们智慧。",
    "character": "",
    "next": "N22-r0078"
  },
  {
    "id": "N22-r0078",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵称他们为人。有人，是第五日.",
    "character": "",
    "next": "N22-r0079"
  },
  {
    "id": "N22-r0079",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“要有评定万物的标准。”涵以自己为标准建立了源。",
    "character": "",
    "next": "N22-r0080"
  },
  {
    "id": "N22-r0080",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵为源做了九十九次测试，都没有出现问题。有源，是第六日。",
    "character": "",
    "next": "N22-r0081"
  },
  {
    "id": "N22-r0081",
    "kind": "line",
    "source": "原文",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "《神经》",
    "text": "涵说:“我是谁。”涵看到自己在源中完美无缺，涵称完美为满，称自己为满者。有满者，是第七日。",
    "character": "",
    "next": "N22-r0082"
  },
  {
    "id": "N22-r0082",
    "kind": "line",
    "source": "补写",
    "page": 236,
    "pages": [
      236
    ],
    "day": "N22",
    "context": "同学虚构作品 · 《神经》阅读",
    "period": "七日称满",
    "background": "home",
    "speaker": "同学",
    "text": "名字都认得，故事倒走到另一个世界了。",
    "character": "",
    "next": "N23-date"
  },
  {
    "id": "N23-date",
    "kind": "date",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-16",
    "text": "唯一看视频的人",
    "pov": "c11",
    "character": "",
    "next": "N23-r0053"
  },
  {
    "id": "N23-r0053",
    "kind": "portrait",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "唯一看视频的人",
    "pov": "c11",
    "character": "c11",
    "speaker": "陈熙",
    "next": "N23-r0022"
  },
  {
    "id": "N23-r0022",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "text": "一个人看过",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0023"
  },
  {
    "id": "N23-r0023",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "speaker": "战老师",
    "text": "我发的视频，你们看过没有？",
    "character": "c48",
    "next": "interactive-N23-r0023"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0023",
    "kind": "choice",
    "text": "老师问发的视频看过没有，我怎么回应？",
    "speaker": "陈熙",
    "character": "c11",
    "options": [
      {
        "text": "看过多少就说多少，没看的我补看。",
        "next": "interactive-N23-r0023-say1"
      },
      {
        "text": "我先把卡住的地方记下，再看那段讲解。",
        "next": "interactive-N23-r0023-say2"
      },
      {
        "text": "群里下载了就算看过，应该没区别。",
        "failure": "文件住进了手机，讲解却没住进脑子。"
      },
      {
        "text": "有同学看过了，借他笔记就不必看。",
        "failure": "笔记借到了，没听懂的那一步却不能借懂。"
      }
    ]
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0023-say1",
    "kind": "line",
    "text": "看过多少就说多少，没看的我补看。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N23-r0023-reply1"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0023-reply1",
    "kind": "line",
    "text": "别只点头。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N23-r0024"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0023-say2",
    "kind": "line",
    "text": "我先把卡住的地方记下，再看那段讲解。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N23-r0023-reply2"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0023-reply2",
    "kind": "line",
    "text": "视频得拿来用。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N23-r0024"
  },
  {
    "id": "N23-r0024",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "speaker": "郑泽一",
    "text": "老师，文件不对吧？",
    "character": "c38",
    "next": "N23-r0025"
  },
  {
    "id": "N23-r0025",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "speaker": "战老师",
    "text": "是。满朝学生，只有这一人看过？",
    "character": "c48",
    "next": "N23-r0026"
  },
  {
    "id": "N23-r0026",
    "kind": "line",
    "source": "转述",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "speaker": "旁白",
    "text": "错误的文件，反而成了看没看视频的证据。",
    "character": "",
    "next": "N23-r0027"
  },
  {
    "id": "N23-r0027",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "一个人看过",
    "background": "classroom",
    "speaker": "陈熙",
    "text": "这一问，没看的人连文件错在哪都不知道。",
    "character": "c11",
    "next": "N23-r0028"
  },
  {
    "id": "N23-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "校草考儒",
    "background": "classroom",
    "text": "校草考儒",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0029"
  },
  {
    "id": "N23-r0029",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "校草考儒",
    "background": "classroom",
    "speaker": "同学",
    "text": "考儒和校草，谁美？",
    "character": "",
    "next": "N23-r0030"
  },
  {
    "id": "N23-r0030",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "校草考儒",
    "background": "classroom",
    "speaker": "同学",
    "text": "众志成城，举考儒为校草！",
    "character": "",
    "next": "N23-r0031"
  },
  {
    "id": "N23-r0031",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "校草考儒",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "你们先把课间过完。",
    "character": "ling",
    "next": "N23-r0032"
  },
  {
    "id": "N23-r0032",
    "kind": "line",
    "source": "转述",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "校草考儒",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学忽闻脆声，老师找不到源头。有人说藏了炸弹，大家都笑，全无惧色。",
    "character": "",
    "next": "N23-r0033"
  },
  {
    "id": "N23-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "扶住满者",
    "background": "track",
    "text": "扶住满者",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0034"
  },
  {
    "id": "N23-r0034",
    "kind": "line",
    "source": "转述",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "扶住满者",
    "background": "track",
    "speaker": "旁白",
    "text": "体育之后，大家扶着满者。人有些站不稳，说话也乱。",
    "character": "",
    "next": "N23-r0035"
  },
  {
    "id": "N23-r0035",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "扶住满者",
    "background": "track",
    "speaker": "徐子涵",
    "text": "我跑了两圈有余！",
    "character": "c03",
    "next": "N23-r0036"
  },
  {
    "id": "N23-r0036",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "扶住满者",
    "background": "track",
    "speaker": "陈熙",
    "text": "你先站好，话一会儿再说。",
    "character": "c11",
    "next": "N23-r0037"
  },
  {
    "id": "N23-r0037",
    "kind": "line",
    "source": "转述",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "扶住满者",
    "background": "track",
    "speaker": "旁白",
    "text": "回教室，孙老师让有能者读文章，又评惠的垃圾桶作文难与一类争先。",
    "character": "",
    "next": "N23-r0038"
  },
  {
    "id": "N23-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "text": "临别赠言",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0039"
  },
  {
    "id": "N23-r0039",
    "kind": "line",
    "source": "补写",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "speaker": "李承容",
    "text": "或许没能得胜而归，那便让我大笑而去吧。",
    "character": "c34",
    "next": "interactive-N23-r0039"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0039",
    "kind": "choice",
    "text": "承容说要大笑而去，我怎么接？",
    "speaker": "陈熙",
    "character": "c11",
    "options": [
      {
        "text": "得胜的事等结果，今天这声也别憋着。",
        "next": "interactive-N23-r0039-say1"
      },
      {
        "text": "回来再讲一路的事，别只留输赢。",
        "next": "interactive-N23-r0039-say2"
      },
      {
        "text": "没得胜就别讲了，省得又想起来。",
        "failure": "结果被略过了，回来的人也失去了开口的位置。"
      },
      {
        "text": "先把你写成胜了，读着痛快。",
        "failure": "纸上领了胜利，真正走过的那段路却没能回来。"
      }
    ]
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0039-say1",
    "kind": "line",
    "text": "得胜的事等结果，今天这声也别憋着。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N23-r0039-reply1"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0039-reply1",
    "kind": "line",
    "text": "那我先笑。",
    "speaker": "李承容",
    "character": "c34",
    "next": "N23-r0040"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0039-say2",
    "kind": "line",
    "text": "回来再讲一路的事，别只留输赢。",
    "speaker": "陈熙",
    "character": "c11",
    "next": "interactive-N23-r0039-reply2"
  },
  {
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "source": "补写",
    "id": "interactive-N23-r0039-reply2",
    "kind": "line",
    "text": "有些事还挺值得说。",
    "speaker": "李承容",
    "character": "c34",
    "next": "N23-r0040"
  },
  {
    "id": "N23-r0040",
    "kind": "line",
    "source": "转述",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "临别赠言",
    "background": "classroom",
    "speaker": "旁白",
    "text": "池苑、芙蓉的诗句留在页末，归来和离去，同一天都有了自己的声音。",
    "character": "",
    "next": "N23-r0042"
  },
  {
    "id": "N23-r0042",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0043"
  },
  {
    "id": "N23-r0043",
    "kind": "line",
    "source": "原文",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "课间：有人曰：“朱考儒孰与校草美？”众人齐声曰：“吾等众志成城，定能举朱考儒为校草。”是曰“校草兮，考儒王！”",
    "character": "",
    "next": "N23-r0044"
  },
  {
    "id": "N23-r0044",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0045"
  },
  {
    "id": "N23-r0045",
    "kind": "line",
    "source": "原文",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总座授课，忽闻有脆声，环顾四周，不见其源；没法止之而未果。或曰：“盖有只炸弹藏于此。”然众人笑，全无惧色，真英雄也。",
    "character": "",
    "next": "N23-r0046"
  },
  {
    "id": "N23-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0047"
  },
  {
    "id": "N23-r0047",
    "kind": "line",
    "source": "原文",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ谈讲义：“甚矣，汝之不慧！舍二级结论而列式求之者，岂不舍近求远哉？”余观纸上二式，无言可对矣。",
    "character": "",
    "next": "N23-r0048"
  },
  {
    "id": "N23-r0048",
    "kind": "line",
    "source": "原文",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午时：史官自述：“两耳不闻身外事，一心只想睡大觉。”",
    "character": "",
    "next": "N23-r0049"
  },
  {
    "id": "N23-r0049",
    "kind": "scene",
    "source": "演出",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N23-r0050"
  },
  {
    "id": "N23-r0050",
    "kind": "line",
    "source": "原文",
    "page": 76,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师授以扫洒进退之事，令有能者读其文。读罢，方谓惠曰：“汝之垃圾桶，岂能与一类争先？谬哉，谬哉！”",
    "character": "",
    "next": "N23-r0051"
  },
  {
    "id": "N23-r0051",
    "kind": "line",
    "source": "原文",
    "page": 77,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "lcr临别赠言：“归来池苑皆依旧，太液芙蓉未央柳。”“芙蓉如面柳如眉，对此如何不泪垂。”",
    "character": "",
    "next": "N23-r0052"
  },
  {
    "id": "N23-r0052",
    "kind": "line",
    "source": "原文",
    "page": 77,
    "pages": [
      76,
      77
    ],
    "day": "N23",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "或许我没能做到得胜而归，那便让我大笑而去吧。",
    "character": "",
    "next": "N24-date"
  },
  {
    "id": "N24-date",
    "kind": "date",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-17",
    "text": "向后移动a米",
    "pov": "student-yang-yanxiang",
    "character": "",
    "next": "N24-r0066"
  },
  {
    "id": "N24-r0066",
    "kind": "portrait",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "向后移动a米",
    "pov": "student-yang-yanxiang",
    "character": "student-yang-yanxiang",
    "speaker": "杨雁翔",
    "next": "N24-r0025"
  },
  {
    "id": "N24-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "text": "百分之十七",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N24-r0026"
  },
  {
    "id": "N24-r0026",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "三十三题得分率只有百分之十七。我们认真反思过，答案没有问题。",
    "character": "c47",
    "next": "interactive-N24-r0026"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0026",
    "kind": "choice",
    "text": "得分率低，答案又说没问题，我怎么问？",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "options": [
      {
        "text": "我把支持另一个选项的原句拿出来，您帮我对对。",
        "next": "interactive-N24-r0026-say1"
      },
      {
        "text": "先听命题这边的依据，再看我误在哪里。",
        "next": "interactive-N24-r0026-say2"
      },
      {
        "text": "只有百分之十七对，那答案一定错了。",
        "failure": "人数举起了手，证据却仍坐着没动。"
      },
      {
        "text": "老师说没问题，那我不找错因了。",
        "failure": "答案保住了，自己的误读却没被查到。"
      }
    ]
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0026-say1",
    "kind": "line",
    "text": "我把支持另一个选项的原句拿出来，您帮我对对。",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "next": "interactive-N24-r0026-reply1"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0026-reply1",
    "kind": "line",
    "text": "说具体是哪句。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N24-r0027"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0026-say2",
    "kind": "line",
    "text": "先听命题这边的依据，再看我误在哪里。",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "next": "interactive-N24-r0026-reply2"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0026-reply2",
    "kind": "line",
    "text": "看这一层意思。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N24-r0027"
  },
  {
    "id": "N24-r0027",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "他要把我的零食也吃了。",
    "character": "c16",
    "next": "N24-r0028"
  },
  {
    "id": "N24-r0028",
    "kind": "line",
    "source": "转述",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一道译句又被读出。老师说起家乡，用了“国家百强贫困县”，同学听得同时想笑又想问。",
    "character": "",
    "next": "N24-r0029"
  },
  {
    "id": "N24-r0029",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "我们都是2B。",
    "character": "c16",
    "next": "N24-r0030"
  },
  {
    "id": "N24-r0030",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "百分之十七",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "你在说选项，还是想压我一头？",
    "character": "c17",
    "next": "N24-r0031"
  },
  {
    "id": "N24-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "一劈就断",
    "background": "classroom",
    "text": "一劈就断",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N24-r0032"
  },
  {
    "id": "N24-r0032",
    "kind": "line",
    "source": "转述",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "一劈就断",
    "background": "classroom",
    "speaker": "旁白",
    "text": "陈俊言在班后练刀，木杆劈了几下没断。考儒接过，一劈断了。",
    "character": "",
    "next": "N24-r0033"
  },
  {
    "id": "N24-r0033",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "一劈就断",
    "background": "classroom",
    "speaker": "同学",
    "text": "此火之力量！",
    "character": "",
    "next": "N24-r0034"
  },
  {
    "id": "N24-r0034",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "一劈就断",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "刀接过来，名号也跟着过来了。",
    "character": "ling",
    "next": "N24-r0035"
  },
  {
    "id": "N24-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "text": "哪里有Amy",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N24-r0036"
  },
  {
    "id": "N24-r0036",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "speaker": "战老师",
    "text": "测完，向后移动a米，再测仰角。",
    "character": "c48",
    "next": "N24-r0037"
  },
  {
    "id": "N24-r0037",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "speaker": "同学",
    "text": "哪里有Amy？",
    "character": "",
    "next": "N24-r0038"
  },
  {
    "id": "N24-r0038",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "speaker": "战老师",
    "text": "a米。",
    "character": "c48",
    "next": "interactive-N24-r0038"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0038",
    "kind": "choice",
    "text": "“a米”刚解释清楚，我怎么接？",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "options": [
      {
        "text": "哦，是距离，我刚才听成人名了。",
        "next": "interactive-N24-r0038-say1"
      },
      {
        "text": "字母那一步我记上，别把听错带进图。",
        "next": "interactive-N24-r0038-say2"
      },
      {
        "text": "刚才听见名字，我先按人物画。",
        "failure": "图上多出一位同学，距离却没有了单位。"
      },
      {
        "text": "含义差不多，不用专门改笔记。",
        "failure": "字母留着，旁边的解释却还在认人。"
      }
    ]
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0038-say1",
    "kind": "line",
    "text": "哦，是距离，我刚才听成人名了。",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "next": "interactive-N24-r0038-reply1"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0038-reply1",
    "kind": "line",
    "text": "看图上的a。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N24-r0039"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0038-say2",
    "kind": "line",
    "text": "字母那一步我记上，别把听错带进图。",
    "speaker": "杨雁翔",
    "character": "student-yang-yanxiang",
    "next": "interactive-N24-r0038-reply2"
  },
  {
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "page": 78,
    "pages": [
      78
    ],
    "source": "补写",
    "id": "interactive-N24-r0038-reply2",
    "kind": "line",
    "text": "接着往后推。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N24-r0039"
  },
  {
    "id": "N24-r0039",
    "kind": "line",
    "source": "转述",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "哪里有Amy",
    "background": "classroom",
    "speaker": "旁白",
    "text": "湖里的两点又不能跳进去测。老师离开时，班里拜拜声四起。",
    "character": "",
    "next": "N24-r0040"
  },
  {
    "id": "N24-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "text": "物限的声明",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N24-r0041"
  },
  {
    "id": "N24-r0041",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "你看雪茗写得就很好。作答也跟情商有关。",
    "character": "c46",
    "next": "N24-r0042"
  },
  {
    "id": "N24-r0042",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "这两个八分文章，李昊宇偷了徐启元两分吧！",
    "character": "c37",
    "next": "N24-r0043"
  },
  {
    "id": "N24-r0043",
    "kind": "line",
    "source": "转述",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "speaker": "旁白",
    "text": "晚上的物理卷题量大、难度高。抱怨一多，八六发了朋友圈。",
    "character": "",
    "next": "N24-r0044"
  },
  {
    "id": "N24-r0044",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "卷子不是我出的！",
    "character": "",
    "next": "N24-r0045"
  },
  {
    "id": "N24-r0045",
    "kind": "line",
    "source": "补写",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "物限的声明",
    "background": "classroom",
    "speaker": "杨雁翔",
    "text": "声明比订正先到。今晚的卷子，还是得收好。",
    "character": "student-yang-yanxiang",
    "next": "N24-r0047"
  },
  {
    "id": "N24-r0047",
    "kind": "scene",
    "source": "演出",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N24-r0048"
  },
  {
    "id": "N24-r0048",
    "kind": "line",
    "source": "原文",
    "page": 78,
    "pages": [
      78
    ],
    "day": "N24",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英：杨老师曰：“33题得分率只有17%，我们做了认真的反思，并认为答案没有问题。”",
    "character": "",
    "next": "N24-r0049"
  }
];
export default data;
