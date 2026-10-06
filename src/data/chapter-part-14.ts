import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "N21-r0028",
    "kind": "line",
    "source": "转述",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "speaker": "旁白",
    "text": "中午轮流拿望远镜看景，望远镜又首次成了音乐播放器。大家从看远处换成听近处。",
    "character": "",
    "next": "N21-r0029"
  },
  {
    "id": "N21-r0029",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "坐第一排太吵了！",
    "character": "c16",
    "next": "interactive-N21-r0029"
  },
  {
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "page": 65,
    "pages": [
      65
    ],
    "source": "补写",
    "id": "interactive-N21-r0029",
    "kind": "choice",
    "text": "向阳嫌第一排太吵，我怎么问？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "是讲台的声音近了，还是后面也在吵？",
        "next": "interactive-N21-r0029-say1"
      },
      {
        "text": "换了位置才感觉出来？这句可得留着。",
        "next": "interactive-N21-r0029-say2"
      },
      {
        "text": "那第一排都不适合学习，干脆别听了。",
        "failure": "座位领走了责任，耳朵也跟着请了假。"
      },
      {
        "text": "先戴耳机挡掉吧，老师说什么回头问。",
        "failure": "杂音挡住了，讲台的正题也被留在耳机外。"
      }
    ]
  },
  {
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "page": 65,
    "pages": [
      65
    ],
    "source": "补写",
    "id": "interactive-N21-r0029-say1",
    "kind": "line",
    "text": "是讲台的声音近了，还是后面也在吵？",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N21-r0029-reply1"
  },
  {
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "page": 65,
    "pages": [
      65
    ],
    "source": "补写",
    "id": "interactive-N21-r0029-reply1",
    "kind": "line",
    "text": "前面真近。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "N21-r0030"
  },
  {
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "page": 65,
    "pages": [
      65
    ],
    "source": "补写",
    "id": "interactive-N21-r0029-say2",
    "kind": "line",
    "text": "换了位置才感觉出来？这句可得留着。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N21-r0029-reply2"
  },
  {
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "page": 65,
    "pages": [
      65
    ],
    "source": "补写",
    "id": "interactive-N21-r0029-reply2",
    "kind": "line",
    "text": "第一排太吵了。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "N21-r0030"
  },
  {
    "id": "N21-r0030",
    "kind": "line",
    "source": "补写",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "望远镜播放器",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "讲台近了，声音也近了。前排后排，这回真有区别。",
    "character": "xu",
    "next": "N21-r0032"
  },
  {
    "id": "N21-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N21-r0033"
  },
  {
    "id": "N21-r0033",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "十月考发成绩第二天，各科以试卷讲评为主。78年前，毛主席承担极大风险，亲赴重庆进行谈判，为祖国的和平奋不顾身，望青年们不忘先辈的努力，不忘初心；牢记先辈的智慧，“牢记使命”。",
    "character": "",
    "next": "N21-r0034"
  },
  {
    "id": "N21-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N21-r0035"
  },
  {
    "id": "N21-r0035",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "继续试卷讲评（阅读→阅表）。",
    "character": "",
    "next": "N21-r0036"
  },
  {
    "id": "N21-r0036",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "JYS：Therapist → The rapist。（No, No, No!）",
    "character": "",
    "next": "N21-r0037"
  },
  {
    "id": "N21-r0037",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "According to 大哥,「colorful」people are LGBT, as resembled in the rainbow.",
    "character": "",
    "next": "N21-r0038"
  },
  {
    "id": "N21-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N21-r0039"
  },
  {
    "id": "N21-r0039",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师21题第一问-4。",
    "character": "",
    "next": "N21-r0040"
  },
  {
    "id": "N21-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N21-r0041"
  },
  {
    "id": "N21-r0041",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“大哥有一种反串的效果。”",
    "character": "",
    "next": "N21-r0042"
  },
  {
    "id": "N21-r0042",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "吕思宇错错得对，错里错以错对选择。",
    "character": "",
    "next": "N21-r0043"
  },
  {
    "id": "N21-r0043",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "天子以黄金百两、白金三千两赐其家，令部分同学心动。",
    "character": "",
    "next": "N21-r0044"
  },
  {
    "id": "N21-r0044",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "中：同学们轮流用望远镜观景，望远镜首次成为音乐播放器。",
    "character": "",
    "next": "N21-r0045"
  },
  {
    "id": "N21-r0045",
    "kind": "line",
    "source": "原文",
    "page": 65,
    "pages": [
      65
    ],
    "day": "N21",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "戴便：“坐第一排太吵了！”",
    "character": "",
    "next": "D19-date"
  },
  {
    "id": "D19-date",
    "kind": "date",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69,
      211,
      220
    ],
    "day": "D19",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-10-11",
    "text": "操场香蕉",
    "pov": "c22",
    "character": "",
    "next": "D19-0001"
  },
  {
    "id": "D19-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69,
      211,
      220
    ],
    "day": "D19",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "操场香蕉",
    "pov": "c22",
    "character": "c22",
    "speaker": "李昊宇",
    "next": "D19-0002"
  },
  {
    "id": "D19-0002",
    "kind": "scene",
    "source": "演出",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "text": "操场香蕉",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0003"
  },
  {
    "id": "D19-r0003",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "speaker": "旁白",
    "text": "我手里拿着一根香蕉，正绕操场走。秦敏然迎面过来，忽然加快了脚步。",
    "character": "",
    "next": "D19-r0004"
  },
  {
    "id": "D19-r0004",
    "kind": "line",
    "source": "原文",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "speaker": "秦敏然",
    "text": "李昊宇不许吃香蕉！",
    "character": "c23",
    "next": "D19-r0005"
  },
  {
    "id": "D19-r0005",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "speaker": "李昊宇",
    "text": "为什么？",
    "character": "c22",
    "next": "D19-r0006"
  },
  {
    "id": "D19-r0006",
    "kind": "line",
    "source": "原文",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "speaker": "秦敏然",
    "text": "我是校园文明小使者，环保小卫士。",
    "character": "c23",
    "next": "D19-r0007"
  },
  {
    "id": "D19-r0007",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "现实",
    "period": "操场香蕉",
    "background": "track",
    "speaker": "李昊宇",
    "text": "我还没把香蕉皮丢出去，你就把香蕉判了。",
    "character": "c22",
    "next": "D19-r0112"
  },
  {
    "id": "D19-r0112",
    "kind": "scene",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "text": "第二问和第三问",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0113"
  },
  {
    "id": "D19-r0113",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "speaker": "战老师",
    "text": "二十一题花的时间越多，浪费的越多。第二问随缘，第三问绝缘。",
    "character": "c48",
    "next": "D19-r0114"
  },
  {
    "id": "D19-r0114",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "最后一题有防沉迷系统，十五分钟自动关闭。",
    "character": "student-zhou-ziyao",
    "next": "D19-r0115"
  },
  {
    "id": "D19-r0115",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师讲向量，减法要转成加法，画虚线还带着“得得得”的声音。",
    "character": "",
    "next": "D19-r0116"
  },
  {
    "id": "D19-r0116",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "speaker": "战老师",
    "text": "用鲜血将绿书染红了！",
    "character": "c48",
    "next": "D19-r0117"
  },
  {
    "id": "D19-r0117",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "第二问和第三问",
    "background": "classroom",
    "speaker": "旁白",
    "text": "大哥拿着红书进门，书的颜色也成了老师现成的比喻。满者又用动量守恒解决向量例四，赢来同学夸奖。",
    "character": "",
    "next": "D19-r0118"
  },
  {
    "id": "D19-r0118",
    "kind": "scene",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "text": "五分反问六分",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0119"
  },
  {
    "id": "D19-r0119",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "这都能满分，太恶心了。",
    "character": "student-zhou-ziyao",
    "next": "D19-r0120"
  },
  {
    "id": "D19-r0120",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他看的是杨雁翔的答案。孙老师随即把话转回来，五分与六分摆到一起。",
    "character": "",
    "next": "D19-r0121"
  },
  {
    "id": "D19-r0121",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "这么简单的题都没满，太恶心了。",
    "character": "c46",
    "next": "D19-r0122"
  },
  {
    "id": "D19-r0122",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "周子尧脸上的得意收住了。",
    "character": "",
    "next": "D19-r0123"
  },
  {
    "id": "D19-r0123",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "我是江西人。",
    "character": "c07",
    "next": "D19-r0124"
  },
  {
    "id": "D19-r0124",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "旁白",
    "text": "孙老师说起大学里与江西人的相处，大哥听着评价，突然改口。",
    "character": "",
    "next": "D19-r0125"
  },
  {
    "id": "D19-r0125",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "五分反问六分",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "福建人。",
    "character": "c07",
    "next": "D19-r0126"
  },
  {
    "id": "D19-r0126",
    "kind": "scene",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "text": "病痛变药膏",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0127"
  },
  {
    "id": "D19-r0127",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "唐朝",
    "text": "陪着杜甫的药膏和壮志。",
    "character": "c31",
    "next": "D19-r0128"
  },
  {
    "id": "D19-r0128",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "旁白",
    "text": "病痛被读成药膏，同学倒夸他添了意象，诗言之有物。",
    "character": "",
    "next": "D19-r0129"
  },
  {
    "id": "D19-r0129",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "你们为什么聊得这么开心？",
    "character": "c46",
    "next": "D19-r0130"
  },
  {
    "id": "D19-r0130",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "贴药膏。",
    "character": "ling",
    "next": "D19-r0131"
  },
  {
    "id": "D19-r0131",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "药膏潮了。",
    "character": "student-zhou-ziyao",
    "next": "D19-r0132"
  },
  {
    "id": "D19-r0132",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "病痛变药膏",
    "background": "classroom",
    "speaker": "旁白",
    "text": "话落到语文课代表这里，更没法装成正经答题。",
    "character": "",
    "next": "D19-r0133"
  },
  {
    "id": "D19-r0133",
    "kind": "scene",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "text": "鼓掌解决不了设备",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0134"
  },
  {
    "id": "D19-r0134",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "HQ",
    "text": "无人助我？无情商。",
    "character": "c45",
    "next": "interactive-D19-r0134"
  },
  {
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "source": "补写",
    "id": "interactive-D19-r0134",
    "kind": "choice",
    "text": "老师说无人助我，我怎么接？",
    "speaker": "李昊宇",
    "character": "c22",
    "options": [
      {
        "text": "我先看看设备，鼓掌解决不了这个。",
        "next": "interactive-D19-r0134-say1"
      },
      {
        "text": "您指的是这边吗？我过来试一下。",
        "next": "interactive-D19-r0134-say2"
      },
      {
        "text": "先等懂的人来，我们在旁边鼓掌就好。",
        "failure": "掌声很齐，设备却一直等不到一只手。"
      },
      {
        "text": "现在能响就行，坏的那处先不问。",
        "failure": "声音暂时回来了，问题却原样留给下一节。"
      }
    ]
  },
  {
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "source": "补写",
    "id": "interactive-D19-r0134-say1",
    "kind": "line",
    "text": "我先看看设备，鼓掌解决不了这个。",
    "speaker": "李昊宇",
    "character": "c22",
    "next": "interactive-D19-r0134-reply1"
  },
  {
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "source": "补写",
    "id": "interactive-D19-r0134-reply1",
    "kind": "line",
    "text": "把接头也看看。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D19-r0135"
  },
  {
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "source": "补写",
    "id": "interactive-D19-r0134-say2",
    "kind": "line",
    "text": "您指的是这边吗？我过来试一下。",
    "speaker": "李昊宇",
    "character": "c22",
    "next": "interactive-D19-r0134-reply2"
  },
  {
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "source": "补写",
    "id": "interactive-D19-r0134-reply2",
    "kind": "line",
    "text": "对，就是这里。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D19-r0135"
  },
  {
    "id": "D19-r0135",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "旁白",
    "text": "技术出了问题，班里先鼓掌。掌声响了一轮，终于有人上台把设备处理好。",
    "character": "",
    "next": "D19-r0136"
  },
  {
    "id": "D19-r0136",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "HQ",
    "text": "看视频。可惜，别班没有什么可看的。",
    "character": "c45",
    "next": "D19-r0137"
  },
  {
    "id": "D19-r0137",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "黄艺博",
    "text": "可看的多了！",
    "character": "c37",
    "next": "D19-r0138"
  },
  {
    "id": "D19-r0138",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "旁白",
    "text": "班会主题“完全入境”。大哥与史绍恺的经验分享接在照片后面，笑声慢慢停下来。",
    "character": "",
    "next": "D19-r0139"
  },
  {
    "id": "D19-r0139",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "十月考是阶段性、适应性的。高考像长跑，先明确目标，心态平和。",
    "character": "c07",
    "next": "D19-r0140"
  },
  {
    "id": "D19-r0140",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "优势科目保手感，劣势科目解决问题，时好时坏的也得看清。按科目给晚自习排计划。",
    "character": "c07",
    "next": "D19-r0141"
  },
  {
    "id": "D19-r0141",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "还有，找HQ聊天。HQ英明神武，美丽漂亮。",
    "character": "c07",
    "next": "D19-r0142"
  },
  {
    "id": "D19-r0142",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "史绍恺",
    "text": "笔记本、卷夹、草稿纸，先把条理做好。用本子列计划，顺序安排合理。",
    "character": "c35",
    "next": "D19-r0143"
  },
  {
    "id": "D19-r0143",
    "kind": "line",
    "source": "补写",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "史绍恺",
    "text": "别因为简单就轻视，单词不确定也要面对。正视自己的成绩，实事求是地总结问题。",
    "character": "c35",
    "next": "D19-r0144"
  },
  {
    "id": "D19-r0144",
    "kind": "line",
    "source": "转述",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "鼓掌解决不了设备",
    "background": "classroom",
    "speaker": "旁白",
    "text": "认知、能力、习惯和分数一起被提起。先进者与进步者各讲一段，这一页班会不只有设备和掌声。",
    "character": "",
    "next": "D19-r0145"
  },
  {
    "id": "D19-r0145",
    "kind": "scene",
    "source": "演出",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D19-r0146"
  },
  {
    "id": "D19-r0146",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "物：继续讲解两连接体问题及动量定理。zyc至少做一题仍能赋到满分，HQ称赞良。",
    "character": "",
    "next": "D19-r0147"
  },
  {
    "id": "D19-r0147",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "生：雄性果蝇不发生基因片段交换。雷：“我也不知道”（摊手）。1 μmol/L蒸馏水。雷：“怀疑没选化学。”",
    "character": "",
    "next": "D19-r0148"
  },
  {
    "id": "D19-r0148",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化：石墨换金刚石（同素异形体转换为化学变化）。“好～～”难溶（CuS）。讲完了硫单质及SO₂。",
    "character": "",
    "next": "D19-r0149"
  },
  {
    "id": "D19-r0149",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数×2：能者：21题花的时间越多，浪费的时间越多。第2问随缘，第3问绝缘。缘分大了，缘分深浅看造化。",
    "character": "",
    "next": "D19-r0150"
  },
  {
    "id": "D19-r0150",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（zyc：最后一题有防沉迷系统，15min自动关闭。）",
    "character": "",
    "next": "D19-r0151"
  },
  {
    "id": "D19-r0151",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "向量加减：减就是“加”。",
    "character": "",
    "next": "D19-r0152"
  },
  {
    "id": "D19-r0152",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大哥拿了本红书进门，能者锐评：“用鲜血将绿书染红了！”",
    "character": "",
    "next": "D19-r0153"
  },
  {
    "id": "D19-r0153",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "加粗黑体表示向量，不被允许。",
    "character": "",
    "next": "D19-r0154"
  },
  {
    "id": "D19-r0154",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“只许州（周，即zyc）官放火，不许百姓点灯。”",
    "character": "",
    "next": "D19-r0155"
  },
  {
    "id": "D19-r0155",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "能者画虚线声音特效：“得得得……”",
    "character": "",
    "next": "D19-r0156"
  },
  {
    "id": "D19-r0156",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "满者用动量守恒解决向量例4，赢众人夸奖。",
    "character": "",
    "next": "D19-r0157"
  },
  {
    "id": "D19-r0157",
    "kind": "line",
    "source": "原文",
    "page": 66,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "失职故人评歌者《兰亭序》，曰：“吾始不知其为人之声也！”",
    "character": "",
    "next": "D19-r0158"
  },
  {
    "id": "D19-r0158",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英，阅：“眼前一黑”的观点（新颖，有创新的观点）。",
    "character": "",
    "next": "D19-r0159"
  },
  {
    "id": "D19-r0159",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "lsy理解“Think of the future changes in human IQ?”为“I think it's a good question, it's good.”",
    "character": "",
    "next": "D19-r0160"
  },
  {
    "id": "D19-r0160",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "receive：英式口语读 re ce 爱 wy。",
    "character": "",
    "next": "D19-r0161"
  },
  {
    "id": "D19-r0161",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "作：soccer player → earn a lot of money（典）。杨sir问什么职业不用读书，众曰：soccer player。",
    "character": "",
    "next": "D19-r0162"
  },
  {
    "id": "D19-r0162",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "语：答题有一种“百无禁忌的练习班之美”——孙老师评答题。",
    "character": "",
    "next": "D19-r0163"
  },
  {
    "id": "D19-r0163",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“莽夫节”→哥布林投矛手——zyc评。",
    "character": "",
    "next": "D19-r0164"
  },
  {
    "id": "D19-r0164",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师终闻黄犬名，巨佬问zzy（郑）戴便谓何？",
    "character": "",
    "next": "D19-r0165"
  },
  {
    "id": "D19-r0165",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“四步四十名，超过了一个班的人！”",
    "character": "",
    "next": "D19-r0166"
  },
  {
    "id": "D19-r0166",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“年级进步多一点，巴里更多，币里更多！”——战绩论。",
    "character": "",
    "next": "D19-r0167"
  },
  {
    "id": "D19-r0167",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "黄犬以夹声朗读，孙老师误称黄犬为大黄。",
    "character": "",
    "next": "D19-r0168"
  },
  {
    "id": "D19-r0168",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "yjy以新名称之——“右牵黄”以区分两者。",
    "character": "",
    "next": "D19-r0169"
  },
  {
    "id": "D19-r0169",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "zyc诶嘲yyx答案为“这都能得满分，太恶心了！”",
    "character": "",
    "next": "D19-r0170"
  },
  {
    "id": "D19-r0170",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师嘲zyc，以5分嘲6分，“这么简单的题都没满，太恶心了！”zyc羞愧难当。",
    "character": "",
    "next": "D19-r0171"
  },
  {
    "id": "D19-r0171",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "孙老师与大哥论江西人，大哥自豪称其为江西人。后孙老师述大学之事，评江西人为事多、心胸狭窄。大哥叛改其口，为福建人。",
    "character": "",
    "next": "D19-r0172"
  },
  {
    "id": "D19-r0172",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "唐朝读，唐朝呼之现代诗。",
    "character": "",
    "next": "D19-r0173"
  },
  {
    "id": "D19-r0173",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "班中原批闻“元神”而动，齐诵原神。",
    "character": "",
    "next": "D19-r0174"
  },
  {
    "id": "D19-r0174",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "后唐朝指“病痛”为“药膏”，曰：陪着杜甫的苦和壮志。",
    "character": "",
    "next": "D19-r0175"
  },
  {
    "id": "D19-r0175",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "众曰：唐兄加入意象，便诗言之有物，实妙哉！",
    "character": "",
    "next": "D19-r0176"
  },
  {
    "id": "D19-r0176",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "zyc曰：“药膏潮了。”众皆笑，皆曰：“逆天。”笔者评：不愧为语文课代表。",
    "character": "",
    "next": "D19-r0177"
  },
  {
    "id": "D19-r0177",
    "kind": "line",
    "source": "原文",
    "page": 67,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "而课后之课间，逆天之言多，处处可闻，故略而不记。",
    "character": "",
    "next": "D19-r0178"
  },
  {
    "id": "D19-r0178",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "自习（班会）。主题：完全入境。",
    "character": "",
    "next": "D19-r0179"
  },
  {
    "id": "D19-r0179",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ遇技术困难而曰：“无人助我？无情商。”众皆鼓掌助HQ，而DJ之上台，助HQ解决。",
    "character": "",
    "next": "D19-r0180"
  },
  {
    "id": "D19-r0180",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ放视频，过7班之图片，曰：“可惜！余班无可观也。”",
    "character": "",
    "next": "D19-r0181"
  },
  {
    "id": "D19-r0181",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "黄犬立曰：“可观者多也！”",
    "character": "",
    "next": "D19-r0182"
  },
  {
    "id": "D19-r0182",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "HQ将图片中“♡温辞♡”改为“我爱学习”。故“温辞”今日改名“学习”。HQ解读三者口号，颇有深意，总结十月考。",
    "character": "",
    "next": "D19-r0183"
  },
  {
    "id": "D19-r0183",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "大哥和ssk分享经验。",
    "character": "",
    "next": "D19-r0184"
  },
  {
    "id": "D19-r0184",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 阶段性、适应性。（10月考）",
    "character": "",
    "next": "D19-r0185"
  },
  {
    "id": "D19-r0185",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 高考路：明确的目标、心态平和（长跑）。",
    "character": "",
    "next": "D19-r0186"
  },
  {
    "id": "D19-r0186",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "3. HQ英明神武、美丽漂亮。找HQ聊天。",
    "character": "",
    "next": "D19-r0187"
  },
  {
    "id": "D19-r0187",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "4. 课目：优势课目→保持手感；劣势课目；时好时坏。",
    "character": "",
    "next": "D19-r0188"
  },
  {
    "id": "D19-r0188",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "5. 根据课目制定自己的计划，晚自习。",
    "character": "",
    "next": "D19-r0189"
  },
  {
    "id": "D19-r0189",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "6. 期中考备考：解决问题；跟紧老师，听课状态；统练。",
    "character": "",
    "next": "D19-r0190"
  },
  {
    "id": "D19-r0190",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "ssk（青年物理学家）：",
    "character": "",
    "next": "D19-r0191"
  },
  {
    "id": "D19-r0191",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "看待高考：",
    "character": "",
    "next": "D19-r0192"
  },
  {
    "id": "D19-r0192",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "心态／认知：实事求是、处变不惊。认知：高考不在于成绩，更在于能力、创新、习惯的培养。",
    "character": "",
    "next": "D19-r0193"
  },
  {
    "id": "D19-r0193",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "条理性→例：笔记本、卷夹的使用、草稿纸使用。",
    "character": "",
    "next": "D19-r0194"
  },
  {
    "id": "D19-r0194",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "合理安排顺序，运筹帷幄→用本将计划列出，从容安排合理。",
    "character": "",
    "next": "D19-r0195"
  },
  {
    "id": "D19-r0195",
    "kind": "line",
    "source": "原文",
    "page": 68,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "实事求是→无论多简单都应注重。单词不确定。↓勇于面对自己的成绩，正视总结问题。",
    "character": "",
    "next": "D19-r0196"
  },
  {
    "id": "D19-r0196",
    "kind": "line",
    "source": "原文",
    "page": 69,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "正视别人的优点，虚怀若谷。",
    "character": "",
    "next": "D19-r0197"
  },
  {
    "id": "D19-r0197",
    "kind": "line",
    "source": "原文",
    "page": 69,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "对于中位数之上的同学，全科学习；中位数之下的同学，去各科老师交流，制定学习计划。",
    "character": "",
    "next": "D19-r0198"
  },
  {
    "id": "D19-r0198",
    "kind": "line",
    "source": "原文",
    "page": 69,
    "pages": [
      66,
      67,
      68,
      69
    ],
    "day": "D19",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“史官”以为领头雁和进步者两人之分享均对同学们很有帮助，故记之于今日7班日志。后之览者，亦将有感于斯文。",
    "character": "",
    "next": "D19-r0008"
  },
  {
    "id": "D19-r0008",
    "kind": "scene",
    "source": "演出",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "text": "大家原来很信任他",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D19-r0009"
  },
  {
    "id": "D19-r0009",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "人分来的都说，初中老师常夸秦敏然。他当团支书、语文课代表，应该没问题吧？",
    "character": "c05",
    "next": "D19-r0010"
  },
  {
    "id": "D19-r0010",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "语文课代表我可以来。",
    "character": "c23",
    "next": "D19-r0011"
  },
  {
    "id": "D19-r0011",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "你们先相处几天。",
    "character": "c30",
    "next": "D19-r0012"
  },
  {
    "id": "D19-r0012",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "旁白",
    "text": "邵聪是秦的初中同班同学，比其他人更熟悉他。后来，惠子宁和雷昱也跟着逗秦。",
    "character": "",
    "next": "D19-r0013"
  },
  {
    "id": "D19-r0013",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "我的笔袋呢？刚才还在桌上。",
    "character": "c23",
    "next": "D19-r0014"
  },
  {
    "id": "D19-r0014",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "雷昱",
    "text": "抬头看看。",
    "character": "lei",
    "next": "D19-r0015"
  },
  {
    "id": "D19-r0015",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "旁白",
    "text": "邵聪、惠子宁和雷昱把秦的笔袋藏在门框、柜子上。秦抬头又翻柜子，找回笔袋，自己的座位却已经有人了。",
    "character": "",
    "next": "D19-r0016"
  },
  {
    "id": "D19-r0016",
    "kind": "line",
    "source": "原文",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "惠子宁",
    "text": "此鸠占鹊巢也。",
    "character": "c14",
    "next": "D19-r0017"
  },
  {
    "id": "D19-r0017",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "你起来，我还得坐。",
    "character": "c23",
    "next": "D19-r0018"
  },
  {
    "id": "D19-r0018",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一",
    "period": "大家原来很信任他",
    "background": "classroom",
    "speaker": "旁白",
    "text": "秦想把惠赶开，反而被他制住，只好站在座位旁边。",
    "character": "",
    "next": "D19-r0019"
  },
  {
    "id": "D19-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "text": "失职故人",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D19-r0020"
  },
  {
    "id": "D19-r0020",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "作业怎么没收？登记呢？发下来的篇子怎么还放着？上课前也没人来接我。",
    "character": "c46",
    "next": "interactive-D19-r0020"
  },
  {
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "page": 211,
    "pages": [
      211
    ],
    "source": "补写",
    "id": "interactive-D19-r0020",
    "kind": "choice",
    "text": "四项失职被追问，我怎么插话？",
    "speaker": "李昊宇",
    "character": "c22",
    "options": [
      {
        "text": "老师，先一项项补，作业和登记别再堆着。",
        "next": "interactive-D19-r0020-say1"
      },
      {
        "text": "我帮着找漏的篇子，具体的事也得说清。",
        "next": "interactive-D19-r0020-say2"
      },
      {
        "text": "先说一句对不起，后面的事就别再翻了。",
        "failure": "道歉到了，漏掉的四件事却还没收到人。"
      },
      {
        "text": "其他人也能帮，主要责任就不必提了。",
        "failure": "帮手找齐了，失职却没有找到该认领的人。"
      },
      {
        "text": "先把小助理找齐，原来的失职就不用提了。",
        "failure": "补位的人到了，先前漏掉的事却仍没人认领。"
      }
    ]
  },
  {
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "page": 211,
    "pages": [
      211
    ],
    "source": "补写",
    "id": "interactive-D19-r0020-say1",
    "kind": "line",
    "text": "老师，先一项项补，作业和登记别再堆着。",
    "speaker": "李昊宇",
    "character": "c22",
    "next": "interactive-D19-r0020-reply1"
  },
  {
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "page": 211,
    "pages": [
      211
    ],
    "source": "补写",
    "id": "interactive-D19-r0020-reply1",
    "kind": "line",
    "text": "该交代的要交代。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D19-r0021"
  },
  {
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "page": 211,
    "pages": [
      211
    ],
    "source": "补写",
    "id": "interactive-D19-r0020-say2",
    "kind": "line",
    "text": "我帮着找漏的篇子，具体的事也得说清。",
    "speaker": "李昊宇",
    "character": "c22",
    "next": "interactive-D19-r0020-reply2"
  },
  {
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "page": 211,
    "pages": [
      211
    ],
    "source": "补写",
    "id": "interactive-D19-r0020-reply2",
    "kind": "line",
    "text": "把哪项漏了对上。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D19-r0021"
  },
  {
    "id": "D19-r0021",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "老师……",
    "character": "c23",
    "next": "D19-r0022"
  },
  {
    "id": "D19-r0022",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "收作业、登作业、发作业、接老师，你担的事得有人做吧！",
    "character": "c46",
    "next": "D19-r0023"
  },
  {
    "id": "D19-r0023",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "旁白",
    "text": "这次的责问一直到了语文学习群。那些原先相信秦能担大任的同学，也看到了他的回复。",
    "character": "",
    "next": "D19-r0024"
  },
  {
    "id": "D19-r0024",
    "kind": "line",
    "source": "原文",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "对不起，老师，我错了，我失职了。",
    "character": "c23",
    "next": "D19-r0025"
  },
  {
    "id": "D19-r0025",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "邵聪",
    "text": "“失职故人”，这回称号有出处了。",
    "character": "c30",
    "next": "D19-r0026"
  },
  {
    "id": "D19-r0026",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "李承容、刘美孜，你们来做语文小助理。",
    "character": "c46",
    "next": "D19-r0027"
  },
  {
    "id": "D19-r0027",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "刘美孜",
    "text": "我把今天要收的先列出来。",
    "character": "c20",
    "next": "D19-r0028"
  },
  {
    "id": "D19-r0028",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 语文课代表任内",
    "period": "失职故人",
    "background": "classroom",
    "speaker": "李承容",
    "text": "老师来之前，我去接。别又漏了一头。",
    "character": "c34",
    "next": "D19-r0029"
  },
  {
    "id": "D19-r0029",
    "kind": "scene",
    "source": "演出",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "text": "打印费差了数毛",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D19-r0030"
  },
  {
    "id": "D19-r0030",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "旁白",
    "text": "各科课代表从校南打印店取作业，再向同学收钱。语文的收款数额，却有人越算越觉得不对。",
    "character": "",
    "next": "D19-r0031"
  },
  {
    "id": "D19-r0031",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "同学",
    "text": "打印费用摊到每个人，不应该是你收的这个数吧？",
    "character": "",
    "next": "D19-r0032"
  },
  {
    "id": "D19-r0032",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "差多少？",
    "character": "c23",
    "next": "D19-r0033"
  },
  {
    "id": "D19-r0033",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "同学",
    "text": "每人多了数毛。数额不大，可每个人都多收了。",
    "character": "",
    "next": "D19-r0034"
  },
  {
    "id": "D19-r0034",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "先把打印钱和收款对上。多的怎么办？",
    "character": "c05",
    "next": "D19-r0035"
  },
  {
    "id": "D19-r0035",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "旁白",
    "text": "几个人拿着数额询问，秦没能解释清楚，随后退回了多收的钱。",
    "character": "",
    "next": "D19-r0036"
  },
  {
    "id": "D19-r0036",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "秦敏然",
    "text": "多收的退给大家。",
    "character": "c23",
    "next": "D19-r0037"
  },
  {
    "id": "D19-r0037",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211
    ],
    "day": "D19",
    "context": "回忆 · 高一下期末后的暑假作业",
    "period": "打印费差了数毛",
    "background": "classroom",
    "speaker": "李昊宇",
    "text": "当时是几毛钱，后来写电影，竟写成了一个镇。",
    "character": "c22",
    "next": "D19-r0038"
  },
  {
    "id": "D19-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 211,
    "pages": [
      211,
      220
    ],
    "day": "D19",
    "context": "回忆 · 高二",
    "period": "分班后的故人",
    "background": "corridor",
    "text": "分班后的故人",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D19-r0039"
  },
  {
    "id": "D19-r0039",
    "kind": "line",
    "source": "补写",
    "page": 211,
    "pages": [
      211,
      220
    ],
    "day": "D19",
    "context": "回忆 · 高二",
    "period": "分班后的故人",
    "background": "corridor",
    "speaker": "HQ",
    "text": "敏然！",
    "character": "c45",
    "next": "D19-r0040"
  },
  {
    "id": "D19-r0040",
    "kind": "line",
    "source": "转述",
    "page": 211,
    "pages": [
      211,
      220
    ],
    "day": "D19",
    "context": "回忆 · 高二",
    "period": "分班后的故人",
    "background": "corridor",
    "speaker": "旁白",
    "text": "秦已经分到二十一班。这次在楼道，HQ热情招呼，他却像没看见一样，快步过去了。第二天，原七班同学听说了这事。",
    "character": "",
    "next": "D19-r0041"
  }
];
export default data;
