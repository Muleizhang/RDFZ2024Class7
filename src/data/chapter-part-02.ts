import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D05-0005",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "翻译题平均还不到一分，我居然拿了满分。",
    "character": "ling",
    "next": "D05-0006"
  },
  {
    "id": "D05-0006",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "周远持",
    "text": "我就是超几何先生。",
    "character": "c09",
    "next": "D05-0007"
  },
  {
    "id": "D05-0007",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "战老师",
    "text": "第二题，只有七个人做对。值得表扬的先表扬，漏洞也要补。",
    "character": "c48",
    "next": "interactive-D05-0007"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0007",
    "kind": "choice",
    "text": "七个人做对之后，我怎么接讲评？",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "对的先看为什么对，我这份也把漏的补上。",
        "next": "interactive-D05-0007-say1"
      },
      {
        "text": "我先改第二题，别光数那七个人。",
        "next": "interactive-D05-0007-say2"
      },
      {
        "text": "只七个人对，这题可以先不管吧。",
        "failure": "七个人成了借口，错题仍稳稳躺在原处。"
      },
      {
        "text": "先看别人多少分，自己的卷子等会儿。",
        "failure": "讲评已经换了题，自己的红叉还没轮到。"
      }
    ]
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0007-say1",
    "kind": "line",
    "text": "对的先看为什么对，我这份也把漏的补上。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D05-0007-reply1"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0007-reply1",
    "kind": "line",
    "text": "把过程对起来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D05-0008"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0007-say2",
    "kind": "line",
    "text": "我先改第二题，别光数那七个人。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D05-0007-reply2"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0007-reply2",
    "kind": "line",
    "text": "先把自己的问题找着。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D05-0008"
  },
  {
    "id": "D05-0008",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "你在纠结什么？",
    "character": "c27",
    "next": "D05-0009"
  },
  {
    "id": "D05-0009",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "周远持",
    "text": "我没假设。",
    "character": "c09",
    "next": "D05-0010"
  },
  {
    "id": "D05-0010",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "张沐雷",
    "text": "哦，那确实不需要纠结。",
    "character": "c27",
    "next": "D05-0011"
  },
  {
    "id": "D05-0011",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "HQ",
    "text": "你和同桌有没有什么竞争关系？",
    "character": "c45",
    "next": "interactive-D05-0011"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0011",
    "kind": "choice",
    "text": "老师问同桌的竞争关系，我怎么接？",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "空位也挺显眼，等人回来再聊。",
        "next": "interactive-D05-0011-say1"
      },
      {
        "text": "竞争归竞争，有题还是得互相问。",
        "next": "interactive-D05-0011-say2"
      },
      {
        "text": "我只盯同桌，超过他这次就算够了。",
        "failure": "同桌被追上了，卷上的漏洞却没被追上。"
      },
      {
        "text": "今天人不在，这个问题和我没关系。",
        "failure": "空位替人躲过了提问，作业却还在桌上。"
      }
    ]
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0011-say1",
    "kind": "line",
    "text": "空位也挺显眼，等人回来再聊。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D05-0011-reply1"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0011-reply1",
    "kind": "line",
    "text": "你自己的这份先做好。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D05-0012"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0011-say2",
    "kind": "line",
    "text": "竞争归竞争，有题还是得互相问。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D05-0011-reply2"
  },
  {
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "page": 16,
    "pages": [
      16
    ],
    "source": "补写",
    "id": "interactive-D05-0011-reply2",
    "kind": "line",
    "text": "一起把问题落实。",
    "speaker": "韩琪",
    "character": "c45",
    "next": "D05-0012"
  },
  {
    "id": "D05-0012",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "但我的不在。",
    "character": "ling",
    "next": "D05-0013"
  },
  {
    "id": "D05-0013",
    "kind": "line",
    "source": "转述",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "摸底讲评",
    "background": "classroom",
    "speaker": "旁白",
    "text": "想念与作业挤在同一张桌面上。新一轮学习从查漏开始。",
    "character": "",
    "next": "D05-r0025"
  },
  {
    "id": "D05-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "超几何先生",
    "background": "classroom",
    "text": "超几何先生",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0026"
  },
  {
    "id": "D05-r0026",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "超几何先生",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "我就是超几何先生。",
    "character": "student-zhou-ziyao",
    "next": "D05-r0027"
  },
  {
    "id": "D05-r0027",
    "kind": "line",
    "source": "转述",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "超几何先生",
    "background": "classroom",
    "speaker": "旁白",
    "text": "第二题全班只有七个人做对，老师终于找到可以表扬的地方。翻译平均不到一分，坤却拿满。",
    "character": "",
    "next": "D05-r0028"
  },
  {
    "id": "D05-r0028",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "超几何先生",
    "background": "classroom",
    "speaker": "同学",
    "text": "查漏补缺。",
    "character": "",
    "next": "D05-r0029"
  },
  {
    "id": "D05-r0029",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "超几何先生",
    "background": "classroom",
    "speaker": "同学",
    "text": "女娲补天。",
    "character": "",
    "next": "D05-r0030"
  },
  {
    "id": "D05-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "不发的答案",
    "background": "classroom",
    "text": "不发的答案",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0031"
  },
  {
    "id": "D05-r0031",
    "kind": "line",
    "source": "转述",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "不发的答案",
    "background": "classroom",
    "speaker": "旁白",
    "text": "地理不发答案、不发答题卡，也暂不讲评；要隔一段再检测复习结果。期待着对分数的人只好先收好卷子。",
    "character": "",
    "next": "D05-r0032"
  },
  {
    "id": "D05-r0032",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "不发的答案",
    "background": "classroom",
    "speaker": "同学",
    "text": "连错在哪里都得再等一等。",
    "character": "",
    "next": "D05-r0033"
  },
  {
    "id": "D05-r0033",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "同桌的空位",
    "background": "classroom",
    "text": "同桌的空位",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0034"
  },
  {
    "id": "D05-r0034",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "同桌的空位",
    "background": "classroom",
    "speaker": "HQ",
    "text": "你和你的同桌有没有竞争关系？",
    "character": "c45",
    "next": "D05-r0035"
  },
  {
    "id": "D05-r0035",
    "kind": "line",
    "source": "转述",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "同桌的空位",
    "background": "classroom",
    "speaker": "旁白",
    "text": "记录者望向空位。重逢本该让人欣喜，可同桌今天不在。",
    "character": "",
    "next": "D05-r0036"
  },
  {
    "id": "D05-r0036",
    "kind": "line",
    "source": "补写",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "同桌的空位",
    "background": "classroom",
    "speaker": "同学",
    "text": "但我的不在。",
    "character": "",
    "next": "D05-r0037"
  },
  {
    "id": "D05-r0037",
    "kind": "line",
    "source": "转述",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "同桌的空位",
    "background": "classroom",
    "speaker": "旁白",
    "text": "“因为机械能守恒，所以机械能守恒”的解释绕了一圈，又落回原点。补作业、改错题、小白条都还在桌上。",
    "character": "",
    "next": "D05-r0038"
  },
  {
    "id": "D05-r0038",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0039"
  },
  {
    "id": "D05-r0039",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "感谢温辞老师在补作业最繁忙的时候把班级日志交给了我（抹泪）。不过摸底考完第一天正式上课，应该还是会出现不少名场面的。",
    "character": "",
    "next": "D05-r0040"
  },
  {
    "id": "D05-r0040",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "命题作文：同桌不在的第一天，想她QAQ。",
    "character": "",
    "next": "D05-r0041"
  },
  {
    "id": "D05-r0041",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0042"
  },
  {
    "id": "D05-r0042",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "翻译题平均只喜提不到一分，但不妨碍大佬（lyk）拿满。",
    "character": "",
    "next": "D05-r0043"
  },
  {
    "id": "D05-r0043",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0044"
  },
  {
    "id": "D05-r0044",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "第二题全班只有7个人做对，终于老师捞到表扬，大加赞赏。",
    "character": "",
    "next": "D05-r0045"
  },
  {
    "id": "D05-r0045",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "我就是超几何先生。",
    "character": "student-zhou-ziyao",
    "next": "D05-r0046"
  },
  {
    "id": "D05-r0046",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "地理 · 课间手帐",
    "background": "classroom",
    "text": "地理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0047"
  },
  {
    "id": "D05-r0047",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "地理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "地理统一不发答案、不发答题卡、不讲评，就离谱（）旨在过一段时间后再次检测复习结果。",
    "character": "",
    "next": "D05-r0048"
  },
  {
    "id": "D05-r0048",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "地理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“查漏补缺，女娲补天。”",
    "character": "",
    "next": "D05-r0049"
  },
  {
    "id": "D05-r0049",
    "kind": "scene",
    "source": "演出",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D05-r0050"
  },
  {
    "id": "D05-r0050",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“你在纠结什么？”“我没假设。”“哦那确实不需要纠结。”——以上对话来自zml和zyc。",
    "character": "",
    "next": "D05-r0051"
  },
  {
    "id": "D05-r0051",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "韩琪",
    "text": "你和你的同桌有没有什么竞争关系？我：但我的不在（悲）。",
    "character": "c45",
    "next": "D05-r0052"
  },
  {
    "id": "D05-r0052",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "因为机械能守恒，所以机械能守恒（点头）。",
    "character": "",
    "next": "D05-r0053"
  },
  {
    "id": "D05-r0053",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "暑假后的第一天正式上课，有很多作业要补，有成绩要面对，有错题要改orz，但是与同学们重逢，亦给人以欣喜。",
    "character": "",
    "next": "D05-r0054"
  },
  {
    "id": "D05-r0054",
    "kind": "line",
    "source": "原文",
    "page": 16,
    "pages": [
      16
    ],
    "day": "D05",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（假装首尾呼应，想我同桌呜呜）",
    "character": "",
    "next": "N04-date"
  },
  {
    "id": "N04-date",
    "kind": "date",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-08-24",
    "text": "紫色的头发",
    "pov": "c32",
    "character": "",
    "next": "N04-r0064"
  },
  {
    "id": "N04-r0064",
    "kind": "portrait",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "紫色的头发",
    "pov": "c32",
    "character": "c32",
    "speaker": "童莘淇",
    "next": "N04-r0023"
  },
  {
    "id": "N04-r0023",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "text": "雨窗",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0024"
  },
  {
    "id": "N04-r0024",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "speaker": "童莘淇",
    "text": "和赵梓伊想了好久，想不出开头。那就把这件事当开头。",
    "character": "c32",
    "next": "N04-r0025"
  },
  {
    "id": "N04-r0025",
    "kind": "line",
    "source": "转述",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "speaker": "旁白",
    "text": "雨声让九节课和午自习之间的空隙松了一点。楼下军训也碰上了雨。",
    "character": "",
    "next": "N04-r0026"
  },
  {
    "id": "N04-r0026",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "speaker": "童莘淇",
    "text": "高一军训正好下雨，真羡慕。",
    "character": "c32",
    "next": "N04-r0027"
  },
  {
    "id": "N04-r0027",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "speaker": "蒋老师",
    "text": "没有无缘无故的爱，也没有无缘无故的恨，更没有无缘无故的化学方程式。",
    "character": "c54",
    "next": "interactive-N04-r0027"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0027",
    "kind": "choice",
    "text": "老师把化学方程式接到爱恨后，我怎么回应？",
    "speaker": "童莘淇",
    "character": "c32",
    "options": [
      {
        "text": "原因得找着，方程式也不能凭空背。",
        "next": "interactive-N04-r0027-say1"
      },
      {
        "text": "这句我记住了，后面那步还请您讲讲。",
        "next": "interactive-N04-r0027-say2"
      },
      {
        "text": "有感情就能反应吧，条件暂时不看了。",
        "failure": "感情很充沛，试管却不肯按心情变化。"
      },
      {
        "text": "只背方程式，缘故留到考试之后。",
        "failure": "方程式背下来了，题干的条件却把它拦住。"
      }
    ]
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0027-say1",
    "kind": "line",
    "text": "原因得找着，方程式也不能凭空背。",
    "speaker": "童莘淇",
    "character": "c32",
    "next": "interactive-N04-r0027-reply1"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0027-reply1",
    "kind": "line",
    "text": "先看反应条件。",
    "speaker": "蒋老师",
    "character": "c54",
    "next": "N04-r0028"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0027-say2",
    "kind": "line",
    "text": "这句我记住了，后面那步还请您讲讲。",
    "speaker": "童莘淇",
    "character": "c32",
    "next": "interactive-N04-r0027-reply2"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "雨窗",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0027-reply2",
    "kind": "line",
    "text": "跟上这一反应。",
    "speaker": "蒋老师",
    "character": "c54",
    "next": "N04-r0028"
  },
  {
    "id": "N04-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "text": "绷不住的弹簧",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0029"
  },
  {
    "id": "N04-r0029",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "speaker": "HQ",
    "text": "这就绷不住了。",
    "character": "c45",
    "next": "N04-r0030"
  },
  {
    "id": "N04-r0030",
    "kind": "line",
    "source": "转述",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师指的是弹簧。测力计指针前加个纸团，同学又把它看成坐位体前屈。",
    "character": "",
    "next": "N04-r0031"
  },
  {
    "id": "N04-r0031",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "speaker": "同学",
    "text": "往前够一点，读数也跟着走。",
    "character": "",
    "next": "N04-r0032"
  },
  {
    "id": "N04-r0032",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "speaker": "战老师",
    "text": "慢，就是快。我问你，不就是看你忘没忘吗？反正我是有点忘了……",
    "character": "c48",
    "next": "N04-r0033"
  },
  {
    "id": "N04-r0033",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "绷不住的弹簧",
    "background": "classroom",
    "speaker": "童莘淇",
    "text": "老师倒先把自己的情况说了。",
    "character": "c32",
    "next": "N04-r0034"
  },
  {
    "id": "N04-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "text": "竞拍升级",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0035"
  },
  {
    "id": "N04-r0035",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "同学",
    "text": "一百，剪头发。",
    "character": "",
    "next": "N04-r0036"
  },
  {
    "id": "N04-r0036",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "同学",
    "text": "两百。",
    "character": "",
    "next": "N04-r0037"
  },
  {
    "id": "N04-r0037",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "同学",
    "text": "四百，染紫色！",
    "character": "",
    "next": "N04-r0038"
  },
  {
    "id": "N04-r0038",
    "kind": "line",
    "source": "转述",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "旁白",
    "text": "竞拍的是雪茗头发的处理权。数字越抬越高，发色也从普通剪发跑到了紫色。",
    "character": "",
    "next": "N04-r0039"
  },
  {
    "id": "N04-r0039",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "你们先把语文课上完。",
    "character": "c06",
    "next": "N04-r0040"
  },
  {
    "id": "N04-r0040",
    "kind": "line",
    "source": "补写",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "童莘淇",
    "text": "价格记下了，头发还在。",
    "character": "c32",
    "next": "N04-r0041"
  },
  {
    "id": "N04-r0041",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "这个问题非常好，你主观臆断了。",
    "character": "c47",
    "next": "interactive-N04-r0041"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0041",
    "kind": "choice",
    "text": "“主观臆断”被点出来，我怎么接？",
    "speaker": "童莘淇",
    "character": "c32",
    "options": [
      {
        "text": "那我先把原文依据找出来，不拿感觉顶答案。",
        "next": "interactive-N04-r0041-say1"
      },
      {
        "text": "我理解偏了，能把这两个选项再对一遍吗？",
        "next": "interactive-N04-r0041-say2"
      },
      {
        "text": "我读起来顺，所以先保留，不找依据了。",
        "failure": "一句顺口替证据落了款，原文却没有签字。"
      },
      {
        "text": "同学也这么选，理由应该差不多。",
        "failure": "人数撑住了选项，却撑不住老师的追问。"
      }
    ]
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0041-say1",
    "kind": "line",
    "text": "那我先把原文依据找出来，不拿感觉顶答案。",
    "speaker": "童莘淇",
    "character": "c32",
    "next": "interactive-N04-r0041-reply1"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0041-reply1",
    "kind": "line",
    "text": "指给我看是哪一句。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N04-r0042"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0041-say2",
    "kind": "line",
    "text": "我理解偏了，能把这两个选项再对一遍吗？",
    "speaker": "童莘淇",
    "character": "c32",
    "next": "interactive-N04-r0041-reply2"
  },
  {
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "page": 17,
    "pages": [
      17
    ],
    "source": "补写",
    "id": "interactive-N04-r0041-reply2",
    "kind": "line",
    "text": "先对上下文。",
    "speaker": "杨卫华",
    "character": "c47",
    "next": "N04-r0042"
  },
  {
    "id": "N04-r0042",
    "kind": "line",
    "source": "转述",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "竞拍升级",
    "background": "classroom",
    "speaker": "旁白",
    "text": "自习课竟真是自习。雨还没停，日记这一页也终于有了开头和结尾。",
    "character": "",
    "next": "N04-r0044"
  },
  {
    "id": "N04-r0044",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0045"
  },
  {
    "id": "N04-r0045",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "拿到班级日志，和赵伊伊想了好久想不出开头怎么写，所以就把这个当作开头＝）",
    "character": "",
    "next": "N04-r0046"
  },
  {
    "id": "N04-r0046",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今天下雨，特别特别喜欢夏季的雨天，让很繁忙的一天9节课＋晚（我没有），午自习稍微舒服了一些。",
    "character": "",
    "next": "N04-r0047"
  },
  {
    "id": "N04-r0047",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（PS：羡慕高一军训赶上了下雨＞）",
    "character": "",
    "next": "N04-r0048"
  },
  {
    "id": "N04-r0048",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "text": "化学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0049"
  },
  {
    "id": "N04-r0049",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "化学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“没有无缘无故的爱，也没有无缘无故的恨，更没有无缘无故的化学方程式。”——蒋艳老师。",
    "character": "",
    "next": "N04-r0050"
  },
  {
    "id": "N04-r0050",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0051"
  },
  {
    "id": "N04-r0051",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“这就绷不住了（指弹簧）。”——HQ。",
    "character": "",
    "next": "N04-r0052"
  },
  {
    "id": "N04-r0052",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "弹簧测力计＋指针前的纸团＝坐位体前屈。",
    "character": "",
    "next": "N04-r0053"
  },
  {
    "id": "N04-r0053",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0054"
  },
  {
    "id": "N04-r0054",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "科学家操作不规范之“加入蛋白合成抑制剂后没有抑制住”（＞）。",
    "character": "",
    "next": "N04-r0055"
  },
  {
    "id": "N04-r0055",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0056"
  },
  {
    "id": "N04-r0056",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“慢，就是快。”——战老师。",
    "character": "",
    "next": "N04-r0057"
  },
  {
    "id": "N04-r0057",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“我问一下你，不就是看你忘没忘吗。反正我是有点忘了……”——战老师。",
    "character": "",
    "next": "N04-r0058"
  },
  {
    "id": "N04-r0058",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "text": "英语 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0059"
  },
  {
    "id": "N04-r0059",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "英语 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“这个年级的人有不self-centered的吗？”",
    "character": "",
    "next": "N04-r0060"
  },
  {
    "id": "N04-r0060",
    "kind": "scene",
    "source": "演出",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N04-r0061"
  },
  {
    "id": "N04-r0061",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "竞拍lsy头发的处理权（100mb→200mb→400mb）。",
    "character": "",
    "next": "N04-r0062"
  },
  {
    "id": "N04-r0062",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "小小感动一下，今天的自习课竟然真的是自习！",
    "character": "",
    "next": "N04-r0063"
  },
  {
    "id": "N04-r0063",
    "kind": "line",
    "source": "原文",
    "page": 17,
    "pages": [
      17
    ],
    "day": "N04",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "总结一下：今天也是7班平凡而抽象的一天～",
    "character": "",
    "next": "D06-date"
  },
  {
    "id": "D06-date",
    "kind": "date",
    "source": "演出",
    "page": 18,
    "pages": [
      18,
      182
    ],
    "day": "D06",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-08-25",
    "text": "窗边",
    "pov": "c16",
    "character": "",
    "next": "D06-0001"
  },
  {
    "id": "D06-0001",
    "kind": "portrait",
    "source": "演出",
    "page": 18,
    "pages": [
      18,
      182
    ],
    "day": "D06",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "窗边",
    "pov": "c16",
    "character": "c16",
    "speaker": "戴向阳",
    "next": "D06-0002"
  },
  {
    "id": "D06-0002",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "text": "窗边",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-0003"
  },
  {
    "id": "D06-0003",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "speaker": "戴向阳",
    "text": "高一军训还能摸到枪，平等地羡慕。",
    "character": "c16",
    "next": "interactive-D06-0003"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-0003",
    "kind": "choice",
    "text": "窗边都在羡慕军训，我怎么接话？",
    "speaker": "戴向阳",
    "character": "c16",
    "options": [
      {
        "text": "看一眼就回来，咱们这节课还没结束。",
        "next": "interactive-D06-0003-say1"
      },
      {
        "text": "枪摸不到，今天这段羡慕倒能写下来。",
        "next": "interactive-D06-0003-say2"
      },
      {
        "text": "再看一会儿，板书等他们训练完再补。",
        "failure": "楼下散队了，楼上的笔记也散了一页。"
      },
      {
        "text": "拿班里的东西比给他们看，先不管老师。",
        "failure": "窗边的展示有了观众，讲台却少了一位听众。"
      }
    ]
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-0003-say1",
    "kind": "line",
    "text": "看一眼就回来，咱们这节课还没结束。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D06-0003-reply1"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-0003-reply1",
    "kind": "line",
    "text": "窗下在训练，窗上重新翻开了书。",
    "speaker": "旁白",
    "character": "",
    "next": "D06-0005"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-0003-say2",
    "kind": "line",
    "text": "枪摸不到，今天这段羡慕倒能写下来。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D06-0003-reply2"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-0003-reply2",
    "kind": "line",
    "text": "窗边的热闹留进了班史。",
    "speaker": "旁白",
    "character": "",
    "next": "D06-0005"
  },
  {
    "id": "D06-0005",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗边",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "我们窗边也有玩具装备。",
    "character": "c03",
    "next": "D06-r0032"
  },
  {
    "id": "D06-r0032",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗下的教官",
    "background": "classroom",
    "text": "窗下的教官",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0033"
  },
  {
    "id": "D06-r0033",
    "kind": "line",
    "source": "转述",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗下的教官",
    "background": "classroom",
    "speaker": "旁白",
    "text": "高一军训的教官开始跳舞。窗边的高三学生向楼下交流，还展示了班里的“军火”。",
    "character": "",
    "next": "D06-r0034"
  },
  {
    "id": "D06-r0034",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "窗下的教官",
    "background": "classroom",
    "speaker": "赵梓伊",
    "text": "他们能摸到枪，怎么不羡慕。",
    "character": "c42",
    "next": "D06-r0035"
  },
  {
    "id": "D06-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "稳稳之后",
    "background": "classroom",
    "text": "稳稳之后",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0036"
  },
  {
    "id": "D06-r0036",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "稳稳之后",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "考试该交卷的时候呢？",
    "character": "c26",
    "next": "D06-r0037"
  },
  {
    "id": "D06-r0037",
    "kind": "line",
    "source": "转述",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "稳稳之后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "“慢就是快”刚说完，交卷时刻就被抬来做反问。",
    "character": "",
    "next": "D06-r0038"
  },
  {
    "id": "D06-r0038",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "稳稳之后",
    "background": "classroom",
    "speaker": "同学",
    "text": "分低就是分高。",
    "character": "",
    "next": "D06-r0039"
  },
  {
    "id": "D06-r0039",
    "kind": "line",
    "source": "转述",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "稳稳之后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "中午战老师尝了纽甜，下午又把物理的U形管拿来做数学比喻，同学觉得比喻用得不对。",
    "character": "",
    "next": "D06-r0040"
  },
  {
    "id": "D06-r0040",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "text": "写给自己",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0041"
  },
  {
    "id": "D06-r0041",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "贾盛元",
    "text": "写给选题三的自己。",
    "character": "c26",
    "next": "D06-r0042"
  },
  {
    "id": "D06-r0042",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "同学",
    "text": "写给再也不用写赏析题的自己。",
    "character": "",
    "next": "D06-r0043"
  },
  {
    "id": "D06-r0043",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "你们入境完不会已经出境了吧。",
    "character": "c46",
    "next": "interactive-D06-r0043"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-r0043",
    "kind": "choice",
    "text": "“是不是已经出境”怎么接？",
    "speaker": "戴向阳",
    "character": "c16",
    "options": [
      {
        "text": "还在，还在，刚才跑神了一下。",
        "next": "interactive-D06-r0043-say1"
      },
      {
        "text": "得把脑子叫回来，第一周的劲不能只在标题上。",
        "next": "interactive-D06-r0043-say2"
      },
      {
        "text": "人坐在这儿就算入境，听没听另说。",
        "failure": "身体留在教室，脑子却已经过了关。"
      },
      {
        "text": "题都太熟了，我先省点劲。",
        "failure": "省下的劲很安静，新的漏洞也悄悄坐下了。"
      }
    ]
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-r0043-say1",
    "kind": "line",
    "text": "还在，还在，刚才跑神了一下。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D06-r0043-reply1"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-r0043-reply1",
    "kind": "line",
    "text": "把眼前这题接上。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D06-r0044"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-r0043-say2",
    "kind": "line",
    "text": "得把脑子叫回来，第一周的劲不能只在标题上。",
    "speaker": "戴向阳",
    "character": "c16",
    "next": "interactive-D06-r0043-reply2"
  },
  {
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "page": 18,
    "pages": [
      18
    ],
    "source": "补写",
    "id": "interactive-D06-r0043-reply2",
    "kind": "line",
    "text": "那就往下写。",
    "speaker": "孙蕾",
    "character": "c46",
    "next": "D06-r0044"
  },
  {
    "id": "D06-r0044",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "周子尧",
    "text": "退境。",
    "character": "student-zhou-ziyao",
    "next": "D06-r0045"
  },
  {
    "id": "D06-r0045",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "张瑞麒",
    "text": "拟人的例子？花儿对我笑。",
    "character": "c29",
    "next": "D06-r0046"
  },
  {
    "id": "D06-r0046",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "战老师",
    "text": "高三了你还好意思下课吗？",
    "character": "c48",
    "next": "D06-r0047"
  },
  {
    "id": "D06-r0047",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "同学",
    "text": "下课就是上课。",
    "character": "",
    "next": "D06-r0048"
  },
  {
    "id": "D06-r0048",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "同学",
    "text": "大专就是清华。",
    "character": "",
    "next": "D06-r0049"
  },
  {
    "id": "D06-r0049",
    "kind": "line",
    "source": "转述",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "写给自己",
    "background": "classroom",
    "speaker": "旁白",
    "text": "同一种句式越走越远，赵梓伊给数学留下的地方很快又填满了。",
    "character": "",
    "next": "D06-r0050"
  },
  {
    "id": "D06-r0050",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0051"
  },
  {
    "id": "D06-r0051",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "和小童一样想不出开头捏（）",
    "character": "",
    "next": "D06-r0052"
  },
  {
    "id": "D06-r0052",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "高一的军训正进行得如火如荼。大家在窗边和高一的同学们进行了快乐的交流（甚至展示了班级军火）。",
    "character": "",
    "next": "D06-r0053"
  },
  {
    "id": "D06-r0053",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "平等地羡慕能军训摸到枪的人。",
    "character": "",
    "next": "D06-r0054"
  },
  {
    "id": "D06-r0054",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "军训教官激情献舞。",
    "character": "",
    "next": "D06-r0055"
  },
  {
    "id": "D06-r0055",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "text": "生物 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0056"
  },
  {
    "id": "D06-r0056",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "生物 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "群落水平结构×；沿斜面分布结构√。",
    "character": "",
    "next": "D06-r0057"
  },
  {
    "id": "D06-r0057",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "text": "物理 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0058"
  },
  {
    "id": "D06-r0058",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "韩琪",
    "text": "这就是你们去年11月期中考考的第一题（同类型）。”DXY：“透题了。",
    "character": "c45",
    "next": "D06-r0059"
  },
  {
    "id": "D06-r0059",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师中午品尝了纽甜。",
    "character": "",
    "next": "D06-r0060"
  },
  {
    "id": "D06-r0060",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "物理 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师金句再现：“慢就是快，这是永远的真理。越着急的时候，越要慢。要稳稳。”JSY：考试该交卷的时候呢。“分低就是分高。”",
    "character": "",
    "next": "D06-r0061"
  },
  {
    "id": "D06-r0061",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "text": "语文 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0062"
  },
  {
    "id": "D06-r0062",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "写给选题三的自己——JSY。写给再也不用写赏析题的自己。写给提肛时自己——HYB。（——启动）",
    "character": "",
    "next": "D06-r0063"
  },
  {
    "id": "D06-r0063",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“你们入境完不会已经出境了吧。”——孙老师。“退境。”——ZYC♡。",
    "character": "",
    "next": "D06-r0064"
  },
  {
    "id": "D06-r0064",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“举一个拟人的例子。”“花儿对我笑。”——ZRQ。",
    "character": "",
    "next": "D06-r0065"
  },
  {
    "id": "D06-r0065",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "语文 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（小童让我留些地方给战老师。）",
    "character": "",
    "next": "D06-r0066"
  },
  {
    "id": "D06-r0066",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "text": "数学 · 课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-r0067"
  },
  {
    "id": "D06-r0067",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "战老师用了物理中U形管的比喻。（异物果然用错了）",
    "character": "",
    "next": "D06-r0068"
  },
  {
    "id": "D06-r0068",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "LHY执剑勇闯数学作业，战老师",
    "text": "想做啥做啥。",
    "character": "",
    "next": "D06-r0069"
  },
  {
    "id": "D06-r0069",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“高三了你还好意思下课吗？”——战老师。“下课就是上课。”",
    "character": "",
    "next": "D06-r0070"
  },
  {
    "id": "D06-r0070",
    "kind": "line",
    "source": "原文",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "数学 · 课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日的素材有亿点多（）",
    "character": "",
    "next": "D06-0006"
  },
  {
    "id": "D06-0006",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "回忆 · 此前六一",
    "period": "小公主六一",
    "background": "classroom",
    "text": "小公主六一",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D06-0007"
  },
  {
    "id": "D06-0007",
    "kind": "line",
    "source": "转述",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "回忆 · 此前六一",
    "period": "小公主六一",
    "background": "classroom",
    "speaker": "旁白",
    "text": "HQ的小公主曾带来儿童节玩具。同学们接过礼物，教室一下热闹起来。",
    "character": "",
    "next": "D06-0008"
  },
  {
    "id": "D06-0008",
    "kind": "line",
    "source": "补写",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "回忆 · 此前六一",
    "period": "小公主六一",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "儿童节过完了，玩具还能陪我们过很多课间。",
    "character": "c03",
    "next": "D06-0009"
  },
  {
    "id": "D06-0009",
    "kind": "scene",
    "source": "演出",
    "page": 18,
    "pages": [
      18
    ],
    "day": "D06",
    "context": "现实",
    "period": "慢与快",
    "background": "classroom",
    "text": "慢与快",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D06-0010"
  },
  {
    "id": "D06-0010",
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
    "text": "慢就是快，越着急的时候越要慢。要稳稳。",
    "character": "c48",
    "next": "D06-0011"
  }
];
export default data;
