import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D39-date",
    "kind": "date",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-01-09",
    "text": "听口查分",
    "pov": "lei",
    "character": "",
    "next": "D39-0001"
  },
  {
    "id": "D39-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "听口查分",
    "pov": "lei",
    "character": "lei",
    "speaker": "雷昱",
    "next": "D39-0002"
  },
  {
    "id": "D39-0002",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "text": "听口查分",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0003"
  },
  {
    "id": "D39-r0003",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "课间，Joejoe拿Casio用随机数“查分”，范围设成四十八到五十。",
    "character": "",
    "next": "D39-r0004"
  },
  {
    "id": "D39-r0004",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "你这一按，计算器就比我们先知道了？",
    "character": "lei",
    "next": "D39-0004"
  },
  {
    "id": "D39-0004",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "大屏幕随后查分。全班满分十七人以上，欢呼一个接一个。",
    "character": "",
    "next": "D39-0005"
  },
  {
    "id": "D39-0005",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "我差一分没满，不必过于在意，继续学吧。",
    "character": "lei",
    "next": "D39-r0007"
  },
  {
    "id": "D39-r0007",
    "kind": "choice",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "text": "只差一分满分，我怎么说",
    "speaker": "雷昱",
    "character": "lei",
    "options": [
      {
        "text": "“恭喜你们！我这分就继续练，下次再争。”",
        "next": "D39-r0008"
      },
      {
        "text": "“差一分是遗憾，先看看这次哪里还能补。”",
        "next": "D39-r0010"
      },
      {
        "text": "“把计算器随机到的五十填上，查分就不用看了。”",
        "failure": "计算器替成绩鼓了掌，查分页仍安安静静写着原数。"
      }
    ]
  },
  {
    "id": "D39-r0008",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "text": "“恭喜你们！我这分就继续练，下次再争。”",
    "speaker": "雷昱",
    "character": "lei",
    "next": "D39-r0009"
  },
  {
    "id": "D39-r0009",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "下一次还有机会。",
    "character": "c30",
    "next": "D39-0009"
  },
  {
    "id": "D39-r0010",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "text": "“差一分是遗憾，先看看这次哪里还能补。”",
    "speaker": "雷昱",
    "character": "lei",
    "next": "D39-r0011"
  },
  {
    "id": "D39-r0011",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "听口查分",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "继续练，别盯这一分一整天。",
    "character": "c30",
    "next": "D39-0009"
  },
  {
    "id": "D39-0009",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "text": "AI的旧窗口",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0013"
  },
  {
    "id": "D39-r0013",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "让Bing写“当马克思遇见孔夫子”，先来围棋对决。",
    "character": "lei",
    "next": "D39-r0014"
  },
  {
    "id": "D39-r0014",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "同学",
    "text": "换格斗篇，武术打斗。",
    "character": "",
    "next": "D39-r0015"
  },
  {
    "id": "D39-r0015",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "旁白",
    "text": "题目一改，屏幕上又出了新的剧本。",
    "character": "",
    "next": "D39-r0016"
  },
  {
    "id": "D39-r0016",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "同学",
    "text": "冷热兵器跨时空，以剑对枪！",
    "character": "",
    "next": "D39-r0017"
  },
  {
    "id": "D39-r0017",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "还不够，现代战争，全频段阻塞干扰版。",
    "character": "lei",
    "next": "D39-r0018"
  },
  {
    "id": "D39-r0018",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "同学",
    "text": "再来STAR WARS。",
    "character": "",
    "next": "D39-r0019"
  },
  {
    "id": "D39-r0019",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "旁白",
    "text": "两人互骂，武器和时代一起往后跑，最后连皇室战争也来了。",
    "character": "",
    "next": "D39-r0020"
  },
  {
    "id": "D39-r0020",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "它对时代挺有执念，我们对继续改题目也有执念。",
    "character": "lei",
    "next": "D39-0012"
  },
  {
    "id": "D39-0012",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "我们先看第九题。",
    "character": "c30",
    "next": "D39-0013"
  },
  {
    "id": "D39-0013",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "AI的旧窗口",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "开场白讲完，真正第九题还在等。",
    "character": "lei",
    "next": "D39-0014"
  },
  {
    "id": "D39-0014",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "长夜中途",
    "background": "sunset",
    "text": "长夜中途",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-0015"
  },
  {
    "id": "D39-0015",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "长夜中途",
    "background": "sunset",
    "speaker": "雷昱",
    "text": "班史将来散失，还是会一直见证我们？现在不知道，愿和时光一起见证。",
    "character": "lei",
    "next": "D39-r0053"
  },
  {
    "id": "D39-r0053",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "连绵草与韭菜",
    "background": "classroom",
    "text": "连绵草与韭菜",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0054"
  },
  {
    "id": "D39-r0054",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "连绵草与韭菜",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "我发现做韭菜也挺好。",
    "character": "c37",
    "next": "D39-r0055"
  },
  {
    "id": "D39-r0055",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "连绵草与韭菜",
    "background": "classroom",
    "speaker": "旁白",
    "text": "同学不赞成他自暴自弃。孙老师再看咸公子的字，评作连绵草；换到“面面俱到”的产品，又说搭配不当。",
    "character": "",
    "next": "D39-r0056"
  },
  {
    "id": "D39-r0056",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "连绵草与韭菜",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "孤陋寡闻。",
    "character": "c30",
    "next": "D39-r0057"
  },
  {
    "id": "D39-r0057",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "四个字两分",
    "background": "classroom",
    "text": "四个字两分",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0058"
  },
  {
    "id": "D39-r0058",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "四个字两分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "李白诗话的答案只写“想象奇诡”，语言简洁，竟得两分。",
    "character": "",
    "next": "D39-r0059"
  },
  {
    "id": "D39-r0059",
    "kind": "line",
    "source": "补写",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "四个字两分",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "想象奇诡！",
    "character": "c37",
    "next": "D39-r0060"
  },
  {
    "id": "D39-r0060",
    "kind": "line",
    "source": "转述",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "四个字两分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他振臂高呼，好像终于替胸中的不服找到出口。下午化学点邵聪讲第九题，他开场完，又说先看第九题，时长倒先水过去了。",
    "character": "",
    "next": "D39-r0061"
  },
  {
    "id": "D39-r0061",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0062"
  },
  {
    "id": "D39-r0062",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "24.1.9。距高考151天。",
    "character": "",
    "next": "D39-r0063"
  },
  {
    "id": "D39-r0063",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Des. feat. Asphodelus",
    "character": "",
    "next": "D39-r0064"
  },
  {
    "id": "D39-r0064",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "雷皇",
    "character": "",
    "next": "D39-r0065"
  },
  {
    "id": "D39-r0065",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "English",
    "character": "",
    "next": "D39-r0066"
  },
  {
    "id": "D39-r0066",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "第一节：熟词生义＋素材积累。",
    "character": "",
    "next": "D39-r0067"
  },
  {
    "id": "D39-r0067",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "下发了 Spring Festival 语料。“全部背诵”——懂得都懂。",
    "character": "",
    "next": "D39-r0068"
  },
  {
    "id": "D39-r0068",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "课间 Joejoe 用 Casio 随机数查分。# Ranint [48,50]=？",
    "character": "",
    "next": "D39-r0069"
  },
  {
    "id": "D39-r0069",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "第二节：",
    "character": "",
    "next": "D39-r0070"
  },
  {
    "id": "D39-r0070",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大屏幕直播查分？",
    "character": "",
    "next": "D39-r0071"
  },
  {
    "id": "D39-r0071",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "恭喜咸班满分17＋!!!!!",
    "character": "",
    "next": "D39-r0072"
  },
  {
    "id": "D39-r0072",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（笔者遗憾未能满分，但一分之差，不必过于在意，尽力做好接下来的学习更加重要）",
    "character": "",
    "next": "D39-r0073"
  },
  {
    "id": "D39-r0073",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数学　今日无事（居然无事!?）",
    "character": "",
    "next": "D39-r0074"
  },
  {
    "id": "D39-r0074",
    "kind": "scene",
    "source": "演出",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39-r0075"
  },
  {
    "id": "D39-r0075",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "Hyb：我发现做个韭菜也挺好的（请不要自暴自弃！）不也挺好吗？那！← 看 LoveLive 导致的。",
    "character": "",
    "next": "D39-r0076"
  },
  {
    "id": "D39-r0076",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师曰：何人予以尔等勇气？自述十八班语曰（朱 hq）：早培！鹤鸣率尔而对曰：太可笑了！鹤鸣者，敝二十班之集大成也，方知早培之风气甚极。",
    "character": "",
    "next": "D39-r0077"
  },
  {
    "id": "D39-r0077",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师锐评咸之书法：为连绵草。",
    "character": "",
    "next": "D39-r0078"
  },
  {
    "id": "D39-r0078",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大哥朗读十八班同学答案，论宝玉之劣性：“年少无知之时诱使袭人，使其与宝玉赴云雨，于学堂上与秦钟苟且通私情”众皆笑之。",
    "character": "",
    "next": "D39-r0079"
  },
  {
    "id": "D39-r0079",
    "kind": "line",
    "source": "原文",
    "page": 135,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师曰：未尝闻产品可以“面面俱到”形容之，是搭配不当也。葱曰：孤陋寡闻。",
    "character": "",
    "next": "D39-r0080"
  },
  {
    "id": "D39-r0080",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "论李白诗话，一答案仅曰“想象奇诡”，阅卷者赞其语言简洁，竟得两分，hyb 遂振臂高呼“想象奇诡!!!!!”似一纾其胸中愤懑。",
    "character": "",
    "next": "D39-r0081"
  },
  {
    "id": "D39-r0081",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "——中午：诸君令 Bingchat 创作“当马克思遇见孔夫子——格斗篇”，Bing 创作了十分精彩的剧本（包括但不限于：以剑对枪、现代战争、两人互骂）。",
    "character": "",
    "next": "D39-r0082"
  },
  {
    "id": "D39-r0082",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "围棋对决 → 武术打斗 → 冷热兵器跨时空格斗 → 现代战争（全频段阻塞干扰 ver.） → STAR WARS → 皇室战（niu）争（mo）（逐渐离谱 ing……）",
    "character": "",
    "next": "D39-r0083"
  },
  {
    "id": "D39-r0083",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（AI对时代似有一种执念）",
    "character": "",
    "next": "D39-r0084"
  },
  {
    "id": "D39-r0084",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（少女休憩中……）",
    "character": "",
    "next": "D39-r0085"
  },
  {
    "id": "D39-r0085",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物理　着重讲述21期末与各实验考点。",
    "character": "",
    "next": "D39-r0086"
  },
  {
    "id": "D39-r0086",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "严谨细致！",
    "character": "",
    "next": "D39-r0087"
  },
  {
    "id": "D39-r0087",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化学　委员长令葱讲第九题，葱开场白后曰：“我们先看第九题。”葱看似讲题，实则水时长也。",
    "character": "",
    "next": "D39-r0088"
  },
  {
    "id": "D39-r0088",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "太史公曰：漫长的高三生涯恰如长夜，而一轮复习行将结束，我们的长夜亦将抵中途。愿我等七班众生携手并进，循此苦旅，以抵群星。",
    "character": "",
    "next": "D39-r0089"
  },
  {
    "id": "D39-r0089",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "☆ 又曰：不知这本班史终将散入岁月的尘烟之中，还是成为我们一同渡过的时光永远的见证？不知当我们老去之时，如若幸而这本班史未曾散失，以此重温年少时的点点滴滴，将作何感想？",
    "character": "",
    "next": "D39-r0090"
  },
  {
    "id": "D39-r0090",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“欲买桂花同载酒，终不似，少年游”？亦或“回首向来萧瑟处，也无风雨也无晴”？笔者不得而知，愿与时光一同见证。",
    "character": "",
    "next": "D39-r0091"
  },
  {
    "id": "D39-r0091",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "愿我们的诗",
    "character": "",
    "next": "D39-r0092"
  },
  {
    "id": "D39-r0092",
    "kind": "line",
    "source": "原文",
    "page": 136,
    "pages": [
      135,
      136
    ],
    "day": "D39",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "勇敢地　超越一切牵绊！还在 go！",
    "character": "",
    "next": "N50-date"
  },
  {
    "id": "N50-date",
    "kind": "date",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-01-10",
    "text": "豪华自助作业",
    "pov": "c33",
    "character": "",
    "next": "N50-r0052"
  },
  {
    "id": "N50-r0052",
    "kind": "portrait",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "豪华自助作业",
    "pov": "c33",
    "character": "c33",
    "speaker": "冯子豪",
    "next": "N50-r0020"
  },
  {
    "id": "N50-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "十七到二十",
    "background": "classroom",
    "text": "十七到二十",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N50-r0021"
  },
  {
    "id": "N50-r0021",
    "kind": "line",
    "source": "转述",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "十七到二十",
    "background": "classroom",
    "speaker": "旁白",
    "text": "昨日统计还说十七，今天核完是二十人听口满分。杨sir说与上届七班一样，希望延续辉煌。",
    "character": "",
    "next": "N50-r0022"
  },
  {
    "id": "N50-r0022",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "十七到二十",
    "background": "classroom",
    "speaker": "冯子豪",
    "text": "先把人数记准，再祝下一次。",
    "character": "c33",
    "next": "N50-r0023"
  },
  {
    "id": "N50-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "BN与NB",
    "background": "classroom",
    "text": "BN与NB",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N50-r0024"
  },
  {
    "id": "N50-r0024",
    "kind": "line",
    "source": "转述",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "BN与NB",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学讲熔沸点，先答晶体类型。元素书写顺序又惹出熟悉的一对字母。",
    "character": "",
    "next": "N50-r0025"
  },
  {
    "id": "N50-r0025",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "BN与NB",
    "background": "classroom",
    "speaker": "同学",
    "text": "BN。",
    "character": "",
    "next": "N50-r0026"
  },
  {
    "id": "N50-r0026",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "BN与NB",
    "background": "classroom",
    "speaker": "同学",
    "text": "不是NB。",
    "character": "",
    "next": "N50-r0027"
  },
  {
    "id": "N50-r0027",
    "kind": "line",
    "source": "转述",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "BN与NB",
    "background": "classroom",
    "speaker": "旁白",
    "text": "电负性大的写在后面，字母顺序也得回到知识点。",
    "character": "",
    "next": "N50-r0028"
  },
  {
    "id": "N50-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "具体的成语",
    "background": "classroom",
    "text": "具体的成语",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N50-r0029"
  },
  {
    "id": "N50-r0029",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "具体的成语",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "题说一个或几个成语，要写具体的成语！",
    "character": "c46",
    "next": "N50-r0030"
  },
  {
    "id": "N50-r0030",
    "kind": "line",
    "source": "转述",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "具体的成语",
    "background": "classroom",
    "speaker": "旁白",
    "text": "生物劝别过度纠结，按提示转拿分思路。英语七选五的连接词，也与语文读题并在一起。",
    "character": "",
    "next": "N50-r0031"
  },
  {
    "id": "N50-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "基础套餐",
    "background": "classroom",
    "text": "基础套餐",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "menu",
      "title": "HQ · 豪华自助作业",
      "lines": [
        "基础：19—20年 1—12题 · 30分钟",
        "提高：9、10、12、13题 · 40分钟",
        "也可以都写"
      ]
    },
    "next": "N50-r0032"
  },
  {
    "id": "N50-r0032",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "基础套餐",
    "background": "classroom",
    "speaker": "HQ",
    "text": "基础套餐，十九到二十年一到十二，三十分钟。提高练习九、十、十二、十三，四十分钟。也可以都写。",
    "character": "c45",
    "next": "N50-r0033"
  },
  {
    "id": "N50-r0033",
    "kind": "line",
    "source": "补写",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "基础套餐",
    "background": "classroom",
    "speaker": "冯子豪",
    "text": "豪华自助餐。这次先选卷子，不选饮料。",
    "character": "c33",
    "next": "N50-r0034"
  },
  {
    "id": "N50-r0034",
    "kind": "line",
    "source": "转述",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "基础套餐",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师还提醒压轴要灵活选式，前提是前面守住。菜单收好，今天能选的部分开始在纸上写。",
    "character": "",
    "next": "N50-r0036"
  },
  {
    "id": "N50-r0036",
    "kind": "scene",
    "source": "演出",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N50-r0037"
  },
  {
    "id": "N50-r0037",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1.10　冯",
    "character": "",
    "next": "N50-r0038"
  },
  {
    "id": "N50-r0038",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日重点：经统计20人听口满分，据 yangsir 与上届7班一样，期待能延续上届7班辉煌或再创新高！",
    "character": "",
    "next": "N50-r0039"
  },
  {
    "id": "N50-r0039",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物理　HQ 预言：近年期末压轴都是电磁“线圈”模型，这次……",
    "character": "",
    "next": "N50-r0040"
  },
  {
    "id": "N50-r0040",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "做压轴最后一问要灵活选“式”：P＝Nfv / UI / I²R。",
    "character": "",
    "next": "N50-r0041"
  },
  {
    "id": "N50-r0041",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "前提：保证前面的题。",
    "character": "",
    "next": "N50-r0042"
  },
  {
    "id": "N50-r0042",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化学　解释熔沸点先答晶体类型。",
    "character": "",
    "next": "N50-r0043"
  },
  {
    "id": "N50-r0043",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "规定：电负性大的写在后面。",
    "character": "",
    "next": "N50-r0044"
  },
  {
    "id": "N50-r0044",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "例：BN √　NB ×",
    "character": "",
    "next": "N50-r0045"
  },
  {
    "id": "N50-r0045",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生物　转换思维（拿分思维）不要过于纠结，根据题目提示来。",
    "character": "",
    "next": "N50-r0046"
  },
  {
    "id": "N50-r0046",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数学　选择5竟然能多次代换把 f(x) 消掉，好神奇。",
    "character": "",
    "next": "N50-r0047"
  },
  {
    "id": "N50-r0047",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英语　7选5要有连接词。",
    "character": "",
    "next": "N50-r0048"
  },
  {
    "id": "N50-r0048",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语文　“一个或几个成语”⇒ 要写出具体的成语！",
    "character": "",
    "next": "N50-r0049"
  },
  {
    "id": "N50-r0049",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "特记：今日物理作业：HQ 豪华自助餐",
    "character": "",
    "next": "N50-r0050"
  },
  {
    "id": "N50-r0050",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "A. 基础套餐：19～20年 1～12（30 min）",
    "character": "",
    "next": "N50-r0051"
  },
  {
    "id": "N50-r0051",
    "kind": "line",
    "source": "原文",
    "page": 137,
    "pages": [
      137
    ],
    "day": "N50",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "B. 提高练习 9、10、12、13（40 min）",
    "character": "",
    "next": "D39A-date"
  },
  {
    "id": "D39A-date",
    "kind": "date",
    "source": "演出",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-01-11",
    "text": "望梅止渴 · 梅利屋",
    "pov": "c31",
    "character": "",
    "next": "D39A-0001"
  },
  {
    "id": "D39A-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "望梅止渴 · 梅利屋",
    "pov": "c31",
    "character": "c31",
    "speaker": "唐朝",
    "next": "D39A-0002"
  },
  {
    "id": "D39A-0002",
    "kind": "scene",
    "source": "演出",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "体育与纪律",
    "background": "classroom",
    "text": "体育与纪律",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39A-0003"
  },
  {
    "id": "D39A-0003",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "体育与纪律",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "部分同学体育课留在教室，女主任发现后，追问的却是老师。",
    "character": "c31",
    "next": "D39A-0005"
  },
  {
    "id": "D39A-0005",
    "kind": "scene",
    "source": "演出",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "text": "菜单",
    "character": "",
    "effect": "paper",
    "prop": {
      "kind": "menu",
      "title": "2024.01.11 · 菜单",
      "lines": [
        "望梅止渴",
        "梅利屋"
      ]
    },
    "next": "D39A-0007"
  },
  {
    "id": "D39A-0007",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "望梅止渴。",
    "character": "c03",
    "next": "D39A-0008"
  },
  {
    "id": "D39A-0008",
    "kind": "line",
    "source": "转述",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "旁白",
    "text": "满者仰在椅上举着菜单。此前拿臧春梅老师名字开玩笑的语境，在这一刻又被接了回来。",
    "character": "",
    "next": "D39A-0009"
  },
  {
    "id": "D39A-0009",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "你手里拿的是菜单，怎么又望起梅了？",
    "character": "c31",
    "next": "D39A-r0008"
  },
  {
    "id": "D39A-r0008",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "合利屋，改成梅利屋。",
    "character": "c03",
    "next": "D39A-r0009"
  },
  {
    "id": "D39A-r0009",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "你们上次一起去，还带宣传菜单回来。这回名字也换了。",
    "character": "c31",
    "next": "D39A-r0010"
  },
  {
    "id": "D39A-r0010",
    "kind": "line",
    "source": "转述",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "旁白",
    "text": "一月十一日，“梅利屋”从这天得名。臧春梅的名字跟菜单撞在一起，大家又把菜名纷纷添上“梅”字，纸单传过几排。",
    "character": "",
    "next": "D39A-r0011"
  },
  {
    "id": "D39A-r0011",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "雷雨泽",
    "text": "菜单传过来。我跟满者、邵聪、小惠去过，晚饭还可以一起去。",
    "character": "c04",
    "next": "D39A-r0012"
  },
  {
    "id": "D39A-r0012",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "先看看吃什么，别光看名字。",
    "character": "c14",
    "next": "D39A-0006"
  },
  {
    "id": "D39A-0006",
    "kind": "portrait",
    "source": "演出",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "pov": "c03",
    "character": "c03",
    "speaker": "徐子涵",
    "text": "这一段，由徐子涵接着记。",
    "next": "D39A-r0014"
  },
  {
    "id": "D39A-r0014",
    "kind": "choice",
    "source": "补写",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "text": "大家看着菜单等我接话",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "“那就叫梅利屋。吃饭的时候，望梅也能止渴。”",
        "next": "D39A-r0015"
      },
      {
        "text": "“菜单借你看，别光看我举着。晚上谁一起去？”",
        "next": "D39A-r0017"
      },
      {
        "text": "“只看菜单就管饱，你们以后都别点饭了。”",
        "failure": "满者望了一节课，肚子却没读过这句成语。"
      }
    ]
  },
  {
    "id": "D39A-r0015",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "text": "“那就叫梅利屋。吃饭的时候，望梅也能止渴。”",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D39A-r0016"
  },
  {
    "id": "D39A-r0016",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "合利屋这一改，整张纸都带梅了。",
    "character": "c31",
    "next": "D39A-r0019"
  },
  {
    "id": "D39A-r0017",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138,
      205,
      206
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "text": "“菜单借你看，别光看我举着。晚上谁一起去？”",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "D39A-r0018"
  },
  {
    "id": "D39A-r0018",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "先传过来，我也看看。",
    "character": "c31",
    "next": "D39A-r0019"
  },
  {
    "id": "D39A-r0019",
    "kind": "line",
    "source": "补写",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "菜单",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "这张菜单，倒比今天的卷子传得快。",
    "character": "c31",
    "next": "D39A-r0020"
  },
  {
    "id": "D39A-r0020",
    "kind": "scene",
    "source": "演出",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D39A-r0021"
  },
  {
    "id": "D39A-r0021",
    "kind": "line",
    "source": "原文",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "148天",
    "character": "",
    "next": "D39A-r0022"
  },
  {
    "id": "D39A-r0022",
    "kind": "line",
    "source": "原文",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化 C 物 语 英｜体 数 班",
    "character": "",
    "next": "D39A-r0023"
  },
  {
    "id": "D39A-r0023",
    "kind": "line",
    "source": "原文",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "体育课上，部分同学留于班中自习，被女主任发现。她认为这不是学生之过，而实老师之过。体育老师（姓杨）危矣！",
    "character": "",
    "next": "D39A-r0024"
  },
  {
    "id": "D39A-r0024",
    "kind": "line",
    "source": "原文",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "太史公曰：夫以附中之广，近千之众，受制于一人，虽有绝伦之力，当世之智，莫不敢奔走而服役者，岂非纪律哉！是故主任统组长，组长率诸师，诸师制学生。上之使下，犹心腹之运手足，根本之制支叶；",
    "character": "",
    "next": "D39A-r0025"
  },
  {
    "id": "D39A-r0025",
    "kind": "line",
    "source": "原文",
    "page": 138,
    "pages": [
      138
    ],
    "day": "D39A",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "下之事上，犹手足之卫心腹，支叶之庇本根。今日，主任权倾高三者，非责于学生，而特寻组长，是以师长制学生，浚源固根之举也。而楼下动辄咆哮师生者，可谓下矣。",
    "character": "",
    "next": "D40-date"
  },
  {
    "id": "D40-date",
    "kind": "date",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2024-01-12",
    "text": "两篇作文",
    "pov": "c09",
    "character": "",
    "next": "D40-0001"
  },
  {
    "id": "D40-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "两篇作文",
    "pov": "c09",
    "character": "c09",
    "speaker": "周远持",
    "next": "D40-0002"
  },
  {
    "id": "D40-0002",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "两篇作文",
    "background": "classroom",
    "text": "两篇作文",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-0003"
  },
  {
    "id": "D40-0003",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "两篇作文",
    "background": "classroom",
    "speaker": "周远持",
    "text": "孙老师昨晚九点还说一半没判，今天已经发回两篇。",
    "character": "c09",
    "next": "D40-0004"
  },
  {
    "id": "D40-0004",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "两篇作文",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "《理性的力量》，《说共享》，拿回去看。",
    "character": "c46",
    "next": "D40-0005"
  },
  {
    "id": "D40-0005",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "两篇作文",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "勤政可知。",
    "character": "c07",
    "next": "D40-0006"
  },
  {
    "id": "D40-0006",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "和弦",
    "background": "classroom",
    "text": "和弦",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-0008"
  },
  {
    "id": "D40-0008",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "和弦",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "何不吟减七和弦？C、降E、降G、A。",
    "character": "lei",
    "next": "D40-0009"
  },
  {
    "id": "D40-0009",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "和弦",
    "background": "classroom",
    "speaker": "周远持",
    "text": "和弦都姓咸了，CE也在里面。",
    "character": "c09",
    "next": "D40-0011"
  },
  {
    "id": "D40-0011",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "text": "皆不可扣",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-0012"
  },
  {
    "id": "D40-0012",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "speaker": "HQ",
    "text": "基础题不可错，别的老师也这么说吗？",
    "character": "c45",
    "next": "D40-0013"
  },
  {
    "id": "D40-0013",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "speaker": "同学",
    "text": "孙老师心里是，皆不可扣。",
    "character": "",
    "next": "D40-0014"
  },
  {
    "id": "D40-0014",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "speaker": "HQ",
    "text": "那七班四十余人，皆可七百五了。",
    "character": "c45",
    "next": "D40-0015"
  },
  {
    "id": "D40-0015",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "则师皆入狱也。",
    "character": "c14",
    "next": "D40-0016"
  },
  {
    "id": "D40-0016",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "皆不可扣",
    "background": "classroom",
    "speaker": "周远持",
    "text": "这句夸张结尾，大家笑完，还得回去看反应条件和正负号。",
    "character": "c09",
    "next": "D40-r0022"
  },
  {
    "id": "D40-r0022",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "空桌和两篇作文",
    "background": "classroom",
    "text": "空桌和两篇作文",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-r0023"
  },
  {
    "id": "D40-r0023",
    "kind": "line",
    "source": "转述",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "空桌和两篇作文",
    "background": "classroom",
    "speaker": "旁白",
    "text": "雪茗病中在家四日有余，同桌不在，书卷积压，空桌也被用来放书。",
    "character": "",
    "next": "D40-r0024"
  },
  {
    "id": "D40-r0024",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "空桌和两篇作文",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "昨晚九点孙老师还说作文只判了一半。",
    "character": "c07",
    "next": "D40-r0025"
  },
  {
    "id": "D40-r0025",
    "kind": "line",
    "source": "转述",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "空桌和两篇作文",
    "background": "classroom",
    "speaker": "旁白",
    "text": "今天《理性的力量》《说共享》两篇都判完，班里欢呼。此前默写不交、作文不判的等待，也在这一刻一起松开。",
    "character": "",
    "next": "D40-r0026"
  },
  {
    "id": "D40-r0026",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "别班同学来讲语文",
    "background": "classroom",
    "text": "别班同学来讲语文",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-r0027"
  },
  {
    "id": "D40-r0027",
    "kind": "line",
    "source": "转述",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "别班同学来讲语文",
    "background": "classroom",
    "speaker": "旁白",
    "text": "孙老师邀一位外班同学讲答题方法。班里用“猪韩琪”叫他，他讲多文本、文言、古诗与红楼，遇难点就吐槽。",
    "character": "",
    "next": "D40-r0028"
  },
  {
    "id": "D40-r0028",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "别班同学来讲语文",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "这题不可扣。",
    "character": "c46",
    "next": "D40-r0029"
  },
  {
    "id": "D40-r0029",
    "kind": "line",
    "source": "转述",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "别班同学来讲语文",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他是来讲语文的同学，站在台上的并不是物理老师HQ。",
    "character": "",
    "next": "D40-r0030"
  },
  {
    "id": "D40-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "电池不是电容",
    "background": "classroom",
    "text": "电池不是电容",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-r0031"
  },
  {
    "id": "D40-r0031",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "电池不是电容",
    "background": "classroom",
    "speaker": "HQ",
    "text": "电池容量是什么？",
    "character": "c45",
    "next": "D40-r0032"
  },
  {
    "id": "D40-r0032",
    "kind": "line",
    "source": "补写",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "电池不是电容",
    "background": "classroom",
    "speaker": "周远持",
    "text": "电容的全称，所以单位是C。",
    "character": "c09",
    "next": "D40-r0033"
  },
  {
    "id": "D40-r0033",
    "kind": "line",
    "source": "转述",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "电池不是电容",
    "background": "classroom",
    "speaker": "旁白",
    "text": "答案把两个概念硬接起来。卷尾还有反应条件、可逆、热化学正负、标况、复数虚部与投影，考前清单得一项项过。",
    "character": "",
    "next": "D40-r0034"
  },
  {
    "id": "D40-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D40-r0035"
  },
  {
    "id": "D40-r0035",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "雪茗因病在家，已逾四日矣。无同桌之课堂，无趣也，然时至期末，书卷积压如山，吾得若之桌以置之，故知戴狗独占二桌之乐也。",
    "character": "",
    "next": "D40-r0036"
  },
  {
    "id": "D40-r0036",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "自蕾子以默写之有无定作文之判否以来，众生苦作文之不得久矣，而今蕾子连发作文二篇，一曰《理性的力量》，二曰《说共享》，众生无不欢呼雀跃。大哥曰：“昨日晚九时，蕾子谓余曰：作文尚有半未判！",
    "character": "",
    "next": "D40-r0037"
  },
  {
    "id": "D40-r0037",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”而今已判尽矣，蕾之勤政，可知也。",
    "character": "",
    "next": "D40-r0038"
  },
  {
    "id": "D40-r0038",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战知英语作文题目流出，怒而曰：“太无良了。”",
    "character": "",
    "next": "D40-r0039"
  },
  {
    "id": "D40-r0039",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "猪韩琪受蕾子之邀，“共享”笔答题之法，然十八班之课可逃乎？或曰：“此节乃数学也。”朱子上谈多文本，下述文言文，论古诗而辩红楼。其称文小而其指极大，举类迩而见义远。偶有难点，便调侃吐槽；",
    "character": "",
    "next": "D40-r0040"
  },
  {
    "id": "D40-r0040",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "每至此时，蕾子常道“此题不可扣”如是言得遂，则众生满分，指日可待矣。",
    "character": "",
    "next": "D40-r0041"
  },
  {
    "id": "D40-r0041",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "午时，史官昼寝。",
    "character": "",
    "next": "D40-r0042"
  },
  {
    "id": "D40-r0042",
    "kind": "line",
    "source": "原文",
    "page": 139,
    "pages": [
      139
    ],
    "day": "D40",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "诸生求期末题于蒋委员长，师曰：“吾亦不知也，而化学组中参与命题之师，亦不可言也。”诸生又欲问原理题之方程，原元素“为铜乎？为铁乎？”终不得也。",
    "character": "",
    "next": "D40-r0043"
  }
];
export default data;
