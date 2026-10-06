import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D12-0015",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "画得好！",
    "character": "c15",
    "next": "D12-0016"
  },
  {
    "id": "D12-0016",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "speaker": "凌艺坤",
    "text": "夸完怎么继续丢？",
    "character": "ling",
    "next": "D12-0017"
  },
  {
    "id": "D12-0017",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "因为我还想看下一件作品。",
    "character": "c15",
    "next": "D12-r0023"
  },
  {
    "id": "D12-r0023",
    "kind": "portrait",
    "source": "演出",
    "page": 46,
    "pages": [
      46,
      47,
      194,
      198,
      199,
      200
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "pov": "ling",
    "character": "ling",
    "speaker": "凌艺坤",
    "text": "这一段，由凌艺坤接着记。",
    "next": "D12-r0024"
  },
  {
    "id": "D12-r0024",
    "kind": "choice",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47,
      194,
      198,
      199,
      200
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "text": "树苡还等着下一张立体字，我怎么说",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "“你先别扔，我画完这一张再给你。”",
        "next": "D12-r0025"
      },
      {
        "text": "“你夸的是字，还是希望我接着骂你？”",
        "next": "D12-r0026"
      },
      {
        "text": "“那以后每节课都开纸团展，我替你砸老师。”",
        "failure": "立体字还在纸上，策展人先被请到教室外谈了两句。"
      }
    ]
  },
  {
    "id": "D12-r0025",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47,
      194,
      198,
      199,
      200
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "text": "“你先别扔，我画完这一张再给你。”",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "D12-r0027"
  },
  {
    "id": "D12-r0027",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "好，我等着。你这个立体字是真好看。",
    "character": "c15",
    "next": "D12-0021"
  },
  {
    "id": "D12-r0026",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47,
      194,
      198,
      199,
      200
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "text": "“你夸的是字，还是希望我接着骂你？”",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "D12-r0028"
  },
  {
    "id": "D12-r0028",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 作品与纸团",
    "period": "艺术现场",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "字好看，骂的那句也画得好。",
    "character": "c15",
    "next": "D12-0021"
  },
  {
    "id": "D12-0021",
    "kind": "scene",
    "source": "演出",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "现实",
    "period": "飞机兑奖",
    "background": "classroom",
    "text": "飞机兑奖",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D12-0022"
  },
  {
    "id": "D12-0022",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "现实",
    "period": "飞机兑奖",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "纸飞机上写：拾此物者，于高中楼五〇六兑奖。",
    "character": "c05",
    "next": "D12-0023"
  },
  {
    "id": "D12-0023",
    "kind": "line",
    "source": "原文",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "现实",
    "period": "飞机兑奖",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "奖者，大笔兜也。",
    "character": "c15",
    "next": "D12-0024"
  },
  {
    "id": "D12-0024",
    "kind": "line",
    "source": "转述",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "现实",
    "period": "飞机兑奖",
    "background": "classroom",
    "speaker": "旁白",
    "text": "飞机没有到楼下人的手里，停在了树上。",
    "character": "",
    "next": "D12-0025"
  },
  {
    "id": "D12-0025",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "现实",
    "period": "飞机兑奖",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "奖品暂存，兑奖路线先被树截住了。",
    "character": "c05",
    "next": "D12-r0032"
  },
  {
    "id": "D12-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 树苡的书和作文",
    "period": "铁柜与背包雁",
    "background": "rear",
    "text": "铁柜与背包雁",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D12-r0033"
  },
  {
    "id": "D12-r0033",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 树苡的书和作文",
    "period": "铁柜与背包雁",
    "background": "rear",
    "speaker": "李沛霖",
    "text": "你柜子里这么多村上春树，买齐了？",
    "character": "c05",
    "next": "D12-r0034"
  },
  {
    "id": "D12-r0034",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 树苡的书和作文",
    "period": "铁柜与背包雁",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "我喜欢，先买回来。",
    "character": "c15",
    "next": "D12-r0035"
  },
  {
    "id": "D12-r0035",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 树苡的书和作文",
    "period": "铁柜与背包雁",
    "background": "rear",
    "speaker": "李沛霖",
    "text": "这本读到哪儿了？",
    "character": "c05",
    "next": "D12-r0036"
  },
  {
    "id": "D12-r0036",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 树苡的书和作文",
    "period": "铁柜与背包雁",
    "background": "rear",
    "speaker": "刘树苡",
    "text": "……先放着。",
    "character": "c15",
    "next": "D12-r0037"
  },
  {
    "id": "D12-r0037",
    "kind": "scene",
    "source": "演出",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "text": "作文的比喻",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D12-r0038"
  },
  {
    "id": "D12-r0038",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "科技发展就像背着喷气背包的大雁。",
    "character": "c15",
    "next": "D12-r0039"
  },
  {
    "id": "D12-r0039",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "先把你要论证的事情说清楚。大雁背上这个，你后面准备怎么解释？",
    "character": "c46",
    "next": "D12-r0040"
  },
  {
    "id": "D12-r0040",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "speaker": "刘树苡",
    "text": "我是想写得有文学性。",
    "character": "c15",
    "next": "D12-r0041"
  },
  {
    "id": "D12-r0041",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "比喻飞起来了，论证得跟上吧。",
    "character": "c05",
    "next": "D12-r0042"
  },
  {
    "id": "D12-r0042",
    "kind": "line",
    "source": "转述",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "同一回忆",
    "period": "作文的比喻",
    "background": "classroom",
    "speaker": "旁白",
    "text": "树苡喜欢把文学词句放进议论文，分数却并未随它一起飞起来。改变还在后面。",
    "character": "",
    "next": "D12-r0043"
  },
  {
    "id": "D12-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "text": "记睡时",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D12-r0044"
  },
  {
    "id": "D12-r0044",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "第一节课就趴了。",
    "character": "c05",
    "next": "D12-r0045"
  },
  {
    "id": "D12-r0045",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "speaker": "周远持",
    "text": "下午第二节了，他醒过吗？",
    "character": "c09",
    "next": "D12-r0046"
  },
  {
    "id": "D12-r0046",
    "kind": "line",
    "source": "转述",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "speaker": "旁白",
    "text": "树苡趴过桌，也仰过头，睡姿换了，记睡时的人还在等。",
    "character": "",
    "next": "D12-r0047"
  },
  {
    "id": "D12-r0047",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "从早上第一节到现在，未尝得醒。",
    "character": "c05",
    "next": "D12-r0048"
  },
  {
    "id": "D12-r0048",
    "kind": "line",
    "source": "补写",
    "page": 46,
    "pages": [
      46,
      47
    ],
    "day": "D12",
    "context": "回忆 · 沛与持的记录",
    "period": "记睡时",
    "background": "classroom",
    "speaker": "周远持",
    "text": "记在旁边，等他醒来给他看。",
    "character": "c09",
    "next": "N18-date"
  },
  {
    "id": "N18-date",
    "kind": "date",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-20",
    "text": "物理等于语文",
    "pov": "c09",
    "character": "",
    "next": "N18-r0075"
  },
  {
    "id": "N18-r0075",
    "kind": "portrait",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "物理等于语文",
    "pov": "c09",
    "character": "c09",
    "speaker": "周远持",
    "next": "N18-r0030"
  },
  {
    "id": "N18-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "等式的证据",
    "background": "classroom",
    "text": "等式的证据",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0031"
  },
  {
    "id": "N18-r0031",
    "kind": "line",
    "source": "补写",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "等式的证据",
    "background": "classroom",
    "speaker": "HQ",
    "text": "做物理其实就是做语文，写物理作业就等于写语文作业。最初一定是受力分析。",
    "character": "c45",
    "next": "N18-r0032"
  },
  {
    "id": "N18-r0032",
    "kind": "line",
    "source": "补写",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "等式的证据",
    "background": "classroom",
    "speaker": "周远持",
    "text": "这等式，先从把话读清开始。",
    "character": "c09",
    "next": "N18-r0033"
  },
  {
    "id": "N18-r0033",
    "kind": "line",
    "source": "转述",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "等式的证据",
    "background": "classroom",
    "speaker": "旁白",
    "text": "政治老师说不用看表，说完才结束；化学又把碳酸钠溶水的感觉说成“烧烧的”。",
    "character": "",
    "next": "N18-r0034"
  },
  {
    "id": "N18-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "一声woc",
    "background": "classroom",
    "text": "一声woc",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0035"
  },
  {
    "id": "N18-r0035",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "一声woc",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "woc。",
    "character": "c27",
    "next": "N18-r0036"
  },
  {
    "id": "N18-r0036",
    "kind": "line",
    "source": "转述",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "一声woc",
    "background": "classroom",
    "speaker": "旁白",
    "text": "全班的注意一起移过去。",
    "character": "",
    "next": "N18-r0037"
  },
  {
    "id": "N18-r0037",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "一声woc",
    "background": "classroom",
    "speaker": "战老师",
    "text": "别被他一声woc带走了，不然我也来一句。",
    "character": "c48",
    "next": "N18-r0038"
  },
  {
    "id": "N18-r0038",
    "kind": "line",
    "source": "补写",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "一声woc",
    "background": "classroom",
    "speaker": "周远持",
    "text": "那全班又要往讲台看。",
    "character": "c09",
    "next": "N18-r0039"
  },
  {
    "id": "N18-r0039",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "text": "金帛与好货",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0040"
  },
  {
    "id": "N18-r0040",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "“何以金帛为？余岂好货贾哉？”",
    "character": "c46",
    "next": "N18-r0041"
  },
  {
    "id": "N18-r0041",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "speaker": "李沐衡",
    "text": "我要金帛干什么？还有什么好货？",
    "character": "c17",
    "next": "N18-r0042"
  },
  {
    "id": "N18-r0042",
    "kind": "line",
    "source": "转述",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "speaker": "旁白",
    "text": "翻译还没离开句子，第二问已经走到了买东西。",
    "character": "",
    "next": "N18-r0043"
  },
  {
    "id": "N18-r0043",
    "kind": "line",
    "source": "补写",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "周远持特意坐李沛霖后面，什么用意？我很伤心。",
    "character": "c46",
    "next": "N18-r0044"
  },
  {
    "id": "N18-r0044",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "金帛与好货",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "这是一次骂两个。",
    "character": "lei",
    "next": "N18-r0045"
  },
  {
    "id": "N18-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "跳绳第二",
    "background": "track",
    "text": "跳绳第二",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0046"
  },
  {
    "id": "N18-r0046",
    "kind": "line",
    "source": "转述",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "跳绳第二",
    "background": "track",
    "speaker": "旁白",
    "text": "自习的年级跳绳比赛，七班拿了第二。楼道的准备终于到了场上。",
    "character": "",
    "next": "N18-r0047"
  },
  {
    "id": "N18-r0047",
    "kind": "line",
    "source": "补写",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "跳绳第二",
    "background": "track",
    "speaker": "周远持",
    "text": "名次记下，刚才那阵讲演也记下。",
    "character": "c09",
    "next": "N18-r0048"
  },
  {
    "id": "N18-r0048",
    "kind": "line",
    "source": "转述",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "跳绳第二",
    "background": "track",
    "speaker": "旁白",
    "text": "晚上云是粉红的，旁边有人唱歌、打球。玩笑里长出的“物理=语文”，今天留在纸页上。",
    "character": "",
    "next": "N18-r0050"
  },
  {
    "id": "N18-r0050",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0051"
  },
  {
    "id": "N18-r0051",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "免责声明：无辜史官有迟到、昼寝之恶习，又加之以词藻匮乏，故今日史料不免有残缺，且失LPL矢鑵之文雅。",
    "character": "",
    "next": "N18-r0052"
  },
  {
    "id": "N18-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0053"
  },
  {
    "id": "N18-r0053",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "动能定理。",
    "character": "",
    "next": "N18-r0054"
  },
  {
    "id": "N18-r0054",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "韩琪",
    "text": "做物理其实就是做语文，故而写物理作业等于写语文作业。",
    "character": "c45",
    "next": "N18-r0055"
  },
  {
    "id": "N18-r0055",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "——后HQ之语便可得“物理＝语文”的证据：",
    "character": "",
    "next": "N18-r0056"
  },
  {
    "id": "N18-r0056",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“最初の一定是受力分析。”",
    "character": "",
    "next": "N18-r0057"
  },
  {
    "id": "N18-r0057",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "政治 · 课间手帐",
    "background": "classroom",
    "text": "政治 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0058"
  },
  {
    "id": "N18-r0058",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "政治 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "党的先进性。",
    "character": "",
    "next": "N18-r0059"
  },
  {
    "id": "N18-r0059",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0060"
  },
  {
    "id": "N18-r0060",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Na。",
    "character": "",
    "next": "N18-r0061"
  },
  {
    "id": "N18-r0061",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "持持将Na₂CO₃溶水现象评价为“烧烧的”。",
    "character": "",
    "next": "N18-r0062"
  },
  {
    "id": "N18-r0062",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0063"
  },
  {
    "id": "N18-r0063",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "三角函数。",
    "character": "",
    "next": "N18-r0064"
  },
  {
    "id": "N18-r0064",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "murray：woc。（全班注意被吸引。）",
    "character": "",
    "next": "N18-r0065"
  },
  {
    "id": "N18-r0065",
    "kind": "line",
    "source": "原文",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "持持画皇室牛魔角色火枪手为XP，众一致认为神似HQ。",
    "character": "",
    "next": "N18-r0066"
  },
  {
    "id": "N18-r0066",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：乌有先生。",
    "character": "",
    "next": "N18-r0067"
  },
  {
    "id": "N18-r0067",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "孙蕾",
    "text": "周远持特意坐在李沛霖后，是什么用意？我很伤心。",
    "character": "c46",
    "next": "N18-r0068"
  },
  {
    "id": "N18-r0068",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "孙蕾",
    "text": "不理你这个说番语的。",
    "character": "c46",
    "next": "N18-r0069"
  },
  {
    "id": "N18-r0069",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "衡翻译“何以金帛为？余岂好货贾哉？”：",
    "character": "",
    "next": "N18-r0070"
  },
  {
    "id": "N18-r0070",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英：……昼寝。",
    "character": "",
    "next": "N18-r0071"
  },
  {
    "id": "N18-r0071",
    "kind": "scene",
    "source": "演出",
    "page": 48,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "text": "自习 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N18-r0072"
  },
  {
    "id": "N18-r0072",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "政限：LSY大获全胜，XQY得错三道选择。",
    "character": "",
    "next": "N18-r0073"
  },
  {
    "id": "N18-r0073",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "LSY借由我党先进性为出发点，提出：“习×××了××中国××。”理论上，确实正确。",
    "character": "",
    "next": "N18-r0074"
  },
  {
    "id": "N18-r0074",
    "kind": "line",
    "source": "原文",
    "page": 49,
    "pages": [
      48,
      49
    ],
    "day": "N18",
    "context": "现实",
    "period": "自习 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日晚霞甚美，粉红色的云下有美意式的Flag Football及隔壁演唱BGM，使人得一时兴起。",
    "character": "",
    "next": "D13-date"
  },
  {
    "id": "D13-date",
    "kind": "date",
    "source": "演出",
    "page": 50,
    "pages": [
      50,
      194,
      195,
      201,
      226
    ],
    "day": "D13",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-21",
    "text": "当开新页",
    "pov": "c16",
    "character": "",
    "next": "D13-0001"
  },
  {
    "id": "D13-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 50,
    "pages": [
      50,
      194,
      195,
      201,
      226
    ],
    "day": "D13",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "当开新页",
    "pov": "c16",
    "character": "c16",
    "speaker": "戴向阳",
    "next": "D13-0002"
  },
  {
    "id": "D13-0002",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "text": "当开新页",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D13-0003"
  },
  {
    "id": "D13-0003",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "班史还剩这么多空白，真的要另开一页？",
    "character": "c16",
    "next": "D13-0004"
  },
  {
    "id": "D13-0004",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "当开新页。",
    "character": "ling",
    "next": "D13-0005"
  },
  {
    "id": "D13-0005",
    "kind": "line",
    "source": "原文",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "大哥说重力是恒力，真是搞笑。大哥说孙老师有脂肪，真是讨骂。",
    "character": "c16",
    "next": "D13-r0006"
  },
  {
    "id": "D13-r0006",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "雷昱今日改名为倭寇。",
    "character": "c16",
    "next": "D13-r0007"
  },
  {
    "id": "D13-r0007",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "朱考儒",
    "text": "你写的不对。",
    "character": "ling",
    "next": "D13-r0008"
  },
  {
    "id": "D13-r0008",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "朱考儒说我写的不对，真是欠火候。",
    "character": "c16",
    "next": "D13-r0009"
  },
  {
    "id": "D13-r0009",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "我让你开新页，不是让你把我也写进去。",
    "character": "ling",
    "next": "D13-r0010"
  },
  {
    "id": "D13-r0010",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "旁白",
    "text": "四句连在一起，同学们以其语气像唐氏之言，称它《唐诗》。",
    "character": "",
    "next": "D13-0007"
  },
  {
    "id": "D13-0007",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "当开新页",
    "background": "classroom",
    "speaker": "旁白",
    "text": "这里的朱考儒，是凌艺坤的“烤乳猪”谐音称呼。",
    "character": "",
    "next": "D13-0008"
  },
  {
    "id": "D13-0008",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 初入七班",
    "period": "巨佬的初识",
    "background": "classroom",
    "text": "巨佬的初识",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-0009"
  },
  {
    "id": "D13-0009",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 初入七班",
    "period": "巨佬的初识",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "你们都是巨佬。",
    "character": "c16",
    "next": "D13-0010"
  },
  {
    "id": "D13-0010",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 初入七班",
    "period": "巨佬的初识",
    "background": "classroom",
    "speaker": "同学",
    "text": "巨佬，你先说说自己。",
    "character": "",
    "next": "D13-0011"
  },
  {
    "id": "D13-0011",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 初入七班",
    "period": "巨佬的初识",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "怎么我叫完所有人，最后称号落到我头上了？",
    "character": "c16",
    "next": "D13-0012"
  },
  {
    "id": "D13-0012",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 园博园集合",
    "period": "园博园",
    "background": "park",
    "text": "园博园",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-0013"
  },
  {
    "id": "D13-0013",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 园博园集合",
    "period": "园博园",
    "background": "park",
    "speaker": "旁白",
    "text": "大家还在集合，群里先跳出一张森林照片。",
    "character": "",
    "next": "D13-0014"
  },
  {
    "id": "D13-0014",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 园博园集合",
    "period": "园博园",
    "background": "park",
    "speaker": "李沛霖",
    "text": "戴向阳，你到哪里了？",
    "character": "c05",
    "next": "D13-0015"
  },
  {
    "id": "D13-0015",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 园博园集合",
    "period": "园博园",
    "background": "park",
    "speaker": "戴向阳",
    "text": "园里。",
    "character": "c16",
    "next": "D13-0016"
  },
  {
    "id": "D13-0016",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 园博园集合",
    "period": "园博园",
    "background": "park",
    "speaker": "李沛霖",
    "text": "我们还在园外凑齐人。",
    "character": "c05",
    "next": "D13-0017"
  },
  {
    "id": "D13-0017",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 群聊",
    "period": "发电站",
    "background": "classroom",
    "text": "发电站",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-0018"
  },
  {
    "id": "D13-0018",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 群聊",
    "period": "发电站",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "另开个群吧，想发的消息往这里发。",
    "character": "c37",
    "next": "D13-0019"
  },
  {
    "id": "D13-0019",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 群聊",
    "period": "发电站",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "我和周远持做副站长。",
    "character": "c05",
    "next": "D13-0020"
  },
  {
    "id": "D13-0020",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 群聊",
    "period": "发电站",
    "background": "classroom",
    "speaker": "周远持",
    "text": "原本想给大家分流，怎么最后大家都进来了。",
    "character": "c09",
    "next": "D13-0021"
  },
  {
    "id": "D13-0021",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 群聊",
    "period": "发电站",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "这下电力供应完整了。",
    "character": "c16",
    "next": "D13-0022"
  },
  {
    "id": "D13-0022",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "诗的旁批",
    "background": "classroom",
    "text": "诗的旁批",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D13-0023"
  },
  {
    "id": "D13-0023",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "现实",
    "period": "诗的旁批",
    "background": "classroom",
    "speaker": "旁白",
    "text": "“孤篇压全唐”的旁批，很快又被改成了“孤唐压全篇”。这页没有写满，声音却不少。",
    "character": "",
    "next": "D13-r0028"
  },
  {
    "id": "D13-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高一地理课",
    "period": "坝",
    "background": "classroom",
    "text": "坝",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-r0029"
  },
  {
    "id": "D13-r0029",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高一地理课",
    "period": "坝",
    "background": "classroom",
    "speaker": "亓老师",
    "text": "这里讲水坝。",
    "character": "c58",
    "next": "D13-r0030"
  },
  {
    "id": "D13-r0030",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高一地理课",
    "period": "坝",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "唉。",
    "character": "c16",
    "next": "D13-r0031"
  },
  {
    "id": "D13-r0031",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高一地理课",
    "period": "坝",
    "background": "classroom",
    "speaker": "旁白",
    "text": "全班忽然安静，不敢接话。",
    "character": "",
    "next": "D13-r0032"
  },
  {
    "id": "D13-r0032",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高一地理课",
    "period": "坝",
    "background": "classroom",
    "speaker": "亓老师",
    "text": "没事，把平时分儿扣光就好了。",
    "character": "c58",
    "next": "D13-r0033"
  },
  {
    "id": "D13-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高二",
    "period": "戴语传开",
    "background": "classroom",
    "text": "戴语传开",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-r0034"
  },
  {
    "id": "D13-r0034",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高二",
    "period": "戴语传开",
    "background": "classroom",
    "speaker": "同学",
    "text": "NO！那捏——",
    "character": "",
    "next": "D13-r0035"
  },
  {
    "id": "D13-r0035",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高二",
    "period": "戴语传开",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "我每闻此声，则似能见戴向阳之脸庞。",
    "character": "c46",
    "next": "D13-r0036"
  },
  {
    "id": "D13-r0036",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "回忆 · 高二",
    "period": "戴语传开",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "我人还没过来，声音先到了。",
    "character": "c16",
    "next": "D13-r0037"
  },
  {
    "id": "D13-r0037",
    "kind": "scene",
    "source": "演出",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "text": "石钟山记课间",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D13-r0038"
  },
  {
    "id": "D13-r0038",
    "kind": "line",
    "source": "转述",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "speaker": "旁白",
    "text": "戚公子旁边，戴卷袖露出大臂，曲肘摆出姿势。上课后还摆了几次。",
    "character": "",
    "next": "D13-r0039"
  },
  {
    "id": "D13-r0039",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "speaker": "戚洪硕",
    "text": "你这又是什么？",
    "character": "c13",
    "next": "D13-r0040"
  },
  {
    "id": "D13-r0040",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "speaker": "同学",
    "text": "猛兽奇鬼，森然欲搏人。",
    "character": "",
    "next": "D13-r0041"
  },
  {
    "id": "D13-r0041",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "李承容总是走到大家中间，说一些奇怪的话，被大家嘲笑。",
    "character": "c16",
    "next": "D13-r0042"
  },
  {
    "id": "D13-r0042",
    "kind": "line",
    "source": "补写",
    "page": 50,
    "pages": [
      50
    ],
    "day": "D13",
    "context": "同一回忆",
    "period": "石钟山记课间",
    "background": "classroom",
    "speaker": "同学",
    "text": "你说的这个人，怎么听着就在面前。",
    "character": "",
    "next": "N19-date"
  },
  {
    "id": "N19-date",
    "kind": "date",
    "source": "演出",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-09-23",
    "text": "满者赐福",
    "pov": "c05",
    "character": "",
    "next": "N19-r0118"
  },
  {
    "id": "N19-r0118",
    "kind": "portrait",
    "source": "演出",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "满者赐福",
    "pov": "c05",
    "character": "c05",
    "speaker": "李沛霖",
    "next": "N19-r0052"
  },
  {
    "id": "N19-r0052",
    "kind": "scene",
    "source": "演出",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "text": "失散的班史",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N19-r0053"
  },
  {
    "id": "N19-r0053",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "班史失散，拾些遗漏记上。黄艺博今天又在后面哀嚎。",
    "character": "c05",
    "next": "N19-r0054"
  },
  {
    "id": "N19-r0054",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "青梅竹马，现在形同陌路了。",
    "character": "c37",
    "next": "N19-r0055"
  },
  {
    "id": "N19-r0055",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "你在珈乐生日那次哭闹，别人后来知道了。",
    "character": "c05",
    "next": "N19-r0056"
  },
  {
    "id": "N19-r0056",
    "kind": "line",
    "source": "转述",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "旁白",
    "text": "沛故意把缘由一路拐向“三者赐福”。智、能都排除，最后落到了满者身上。",
    "character": "",
    "next": "N19-r0057"
  },
  {
    "id": "N19-r0057",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "所以，这事满者的过。",
    "character": "c05",
    "next": "N19-r0058"
  },
  {
    "id": "N19-r0058",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "徐子涵！汝之过也！给我赐福！",
    "character": "c37",
    "next": "N19-r0059"
  },
  {
    "id": "N19-r0059",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "好好，先停下。",
    "character": "c03",
    "next": "N19-r0060"
  },
  {
    "id": "N19-r0060",
    "kind": "line",
    "source": "转述",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "失散的班史",
    "background": "classroom",
    "speaker": "旁白",
    "text": "同学把这一幕戏称“廿三之变”。满者先答应，才让这场强求停下。",
    "character": "",
    "next": "N19-r0061"
  },
  {
    "id": "N19-r0061",
    "kind": "scene",
    "source": "演出",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "text": "办公室的长策",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N19-r0062"
  },
  {
    "id": "N19-r0062",
    "kind": "line",
    "source": "转述",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "speaker": "旁白",
    "text": "蔡依凡去了物理办公室，同学想进去听，被HQ逐出。",
    "character": "",
    "next": "N19-r0063"
  },
  {
    "id": "N19-r0063",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "speaker": "戚洪硕",
    "text": "让满者进去？把衣物套头上，潜进去。",
    "character": "c13",
    "next": "N19-r0064"
  },
  {
    "id": "N19-r0064",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "speaker": "徐子涵",
    "text": "不去。",
    "character": "c03",
    "next": "N19-r0065"
  },
  {
    "id": "N19-r0065",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "speaker": "同学",
    "text": "老师前几天整理办公室，就是防你藏杂物里吧。",
    "character": "",
    "next": "N19-r0066"
  },
  {
    "id": "N19-r0066",
    "kind": "line",
    "source": "补写",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实 · 9月23日补记",
    "period": "办公室的长策",
    "background": "corridor",
    "speaker": "李沛霖",
    "text": "连普拉提都被解释成练体防满者。我们先把门口这场讨论停了。",
    "character": "c05",
    "next": "N19-r0075"
  },
  {
    "id": "N19-r0075",
    "kind": "scene",
    "source": "演出",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N19-r0076"
  },
  {
    "id": "N19-r0076",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "九月二十三日，班史遗失而历史失散，余拾其遗而记之。",
    "character": "",
    "next": "N19-r0077"
  },
  {
    "id": "N19-r0077",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "黄犬哀嚎于班中而伤恸，言曰与青梅竹马今形同陌路矣。余谓之曰：“此非汝之过也。与之形同陌路，汝哭闹于珈乐之诞辰故也。汝之哭闹，心中之情欲也。心中之情欲，生物体结构之过也，人之原罪也。",
    "character": "",
    "next": "N19-r0078"
  },
  {
    "id": "N19-r0078",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "汝之原罪尚存，不信三者主义过也。不信三者主义，三者未赐福过也。智者掌智，能者持能，非其过也。故知汝形同陌路，满者过也。”黄犬怒，于班后取一手枪，持枪抵于满者之躯，怒曰：“徐子涵！汝之过也！",
    "character": "",
    "next": "N19-r0079"
  },
  {
    "id": "N19-r0079",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "汝之过也！”而强满者赐福之，满者惧而许之。",
    "character": "",
    "next": "N19-r0080"
  },
  {
    "id": "N19-r0080",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "硝矢公曰：“此廿三之变也。黄犬之行，宗教史之碑也。昔之教派，无论上帝、真主，皆以信徒祷告礼拜神明以为其式。而今黄犬之行，创新之教义也。于神明，不必跪而求之，当以武胁迫之，或曰此武教也。",
    "character": "",
    "next": "N19-r0081"
  },
  {
    "id": "N19-r0081",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "其行当与马丁·路德之论纲相较，今之宗教改革也。”",
    "character": "",
    "next": "N19-r0082"
  },
  {
    "id": "N19-r0082",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "蔡乖巧失其踪，众人寻之而闻其奏仙乐③于物理之办公室。众人欲入听之，而见逐于诶迟扣。起哄说曰：“满者，神明也。当使其入室。”或曰：“诶迟扣，将军也，满者未可敌。",
    "character": "",
    "next": "N19-r0083"
  },
  {
    "id": "N19-r0083",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”起哄说曰：“当以衣物套于满者之首，以为潜焉。”满者弗许，众无计可施。或曰：“诶迟扣，有长策也。前有整办公室，虽曰解压，其实防满者匿于杂物中也；又兼以弹古筝④以练体，使可击满者。",
    "character": "",
    "next": "N19-r0084"
  },
  {
    "id": "N19-r0084",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”众以为然，而叹于诶迟扣之深谋也。",
    "character": "",
    "next": "N19-r0085"
  },
  {
    "id": "N19-r0085",
    "kind": "line",
    "source": "原文",
    "page": 53,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "③仙乐者，恋爱之事也。④诶迟扣行普拉提，戴便曰：“师亦知古筝耶？”",
    "character": "",
    "next": "N19-r0086"
  },
  {
    "id": "N19-r0086",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "火花骑士，前来报道！",
    "character": "",
    "next": "N19-r0087"
  },
  {
    "id": "N19-r0087",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“用抽签筒颠勺。”“做饭是男人必备技能。”",
    "character": "",
    "next": "N19-r0088"
  },
  {
    "id": "N19-r0088",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“十一去过没有手机的隐者生活。”",
    "character": "",
    "next": "N19-r0089"
  },
  {
    "id": "N19-r0089",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "日常吹NB询问SC为什么不用硬质纸。",
    "character": "",
    "next": "N19-r0090"
  },
  {
    "id": "N19-r0090",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“用——直析①。”①“一折通”！C，一说指可莉。",
    "character": "",
    "next": "N19-r0091"
  },
  {
    "id": "N19-r0091",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "C已22天未洗澡。",
    "character": "",
    "next": "N19-r0092"
  },
  {
    "id": "N19-r0092",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "cosα/sinα＝(cos/sin)(α)。",
    "character": "",
    "next": "N19-r0093"
  },
  {
    "id": "N19-r0093",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“物理课”“你可真是大聪明”“瞪眼”“这这这这……”",
    "character": "",
    "next": "N19-r0094"
  },
  {
    "id": "N19-r0094",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "矢罐黄犬受太史公之刑，身残而志不坚，难以续写其史，故递于余。",
    "character": "",
    "next": "N19-r0095"
  },
  {
    "id": "N19-r0095",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "［英语］上机模拟听口。",
    "character": "",
    "next": "N19-r0096"
  },
  {
    "id": "N19-r0096",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "归班之途，道阻长而险，当拾级两百有余，攀登五层之高。众生不堪其苦，皆欲退缩。会有电梯至，众蜂拥以入，梯遂速满。方欲盖门而上升，忽又有苡至，挤入其中，使梯不能行。有义士悦山大呼：“下去！",
    "character": "",
    "next": "N19-r0097"
  },
  {
    "id": "N19-r0097",
    "kind": "line",
    "source": "原文",
    "page": 51,
    "pages": [
      53,
      51,
      52
    ],
    "day": "N19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”与众合将苡推下，梯遂上行而独遗苡于门外。苡心伤，哭曰：“吾遭霸凌也！”硝矢公曰：“若以戴便之言，当曰：‘刘树苡说自己被霸凌，真是搞笑。’”",
    "character": "",
    "next": "N19-r0098"
  }
];
export default data;
