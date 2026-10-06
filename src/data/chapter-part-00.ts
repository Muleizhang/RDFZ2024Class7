import type {StoryNode} from "../story.ts";
const data:StoryNode[] = [
  {
    "id": "D02-0001",
    "kind": "scene",
    "source": "演出",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "text": "课堂",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D02-0002"
  },
  {
    "id": "D02-0002",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "昨天的热情只用二十多个小时，就走到了今天第九节课。",
    "character": "ling",
    "next": "D02-0003"
  },
  {
    "id": "D02-0003",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "今天开始，我们先把课堂的条理立起来。",
    "character": "c47",
    "next": "D02-0004"
  },
  {
    "id": "D02-0004",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "冯子豪",
    "text": "老师您好。",
    "character": "c33",
    "next": "D02-0005"
  },
  {
    "id": "D02-0005",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "杨sir",
    "text": "……你站起来，我像照了一面镜子。",
    "character": "c47",
    "next": "D02-0006"
  },
  {
    "id": "D02-0006",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "声音也像。两个杨sir，只有一张课表。",
    "character": "ling",
    "next": "D02-0007"
  },
  {
    "id": "D02-0007",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "战老师",
    "text": "笔记要跟上。写过的例题，能不能再做出来？",
    "character": "c48",
    "next": "interactive-D02-0007"
  },
  {
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0007",
    "kind": "choice",
    "text": "老师问例题能不能再做，我怎么接？",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "抄过不一定会，我回去盖住答案再做一次。",
        "next": "interactive-D02-0007-say1"
      },
      {
        "text": "笔记记了，卡住的那一步我还得再问。",
        "next": "interactive-D02-0007-say2"
      },
      {
        "text": "过程都抄齐了，今晚先不用重复了吧。",
        "failure": "例题留在本子里，独立完成却还没签到。"
      },
      {
        "text": "等下次考到，我再看看自己会不会。",
        "failure": "试卷成了第一次练习，计时却没肯重来。"
      }
    ]
  },
  {
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0007-say1",
    "kind": "line",
    "text": "抄过不一定会，我回去盖住答案再做一次。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D02-0007-reply1"
  },
  {
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0007-reply1",
    "kind": "line",
    "text": "对，落在纸上看看。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D02-0008"
  },
  {
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0007-say2",
    "kind": "line",
    "text": "笔记记了，卡住的那一步我还得再问。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D02-0007-reply2"
  },
  {
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0007-reply2",
    "kind": "line",
    "text": "把那一步圈出来。",
    "speaker": "战景林",
    "character": "c48",
    "next": "D02-0008"
  },
  {
    "id": "D02-0008",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "博老师",
    "text": "晶体部分不轻松，先查清自己在哪里断了。",
    "character": "c53",
    "next": "D02-r0028"
  },
  {
    "id": "D02-r0028",
    "kind": "scene",
    "source": "演出",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "text": "十分钟之后",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D02-r0029"
  },
  {
    "id": "D02-r0029",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "上午每节都往后挪，十多分钟不知道从哪儿找回来。",
    "character": "ling",
    "next": "D02-r0030"
  },
  {
    "id": "D02-r0030",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "speaker": "同学",
    "text": "下一节的铃声已经来了。",
    "character": "",
    "next": "D02-r0031"
  },
  {
    "id": "D02-r0031",
    "kind": "line",
    "source": "转述",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "陈俊言去北大暑期课堂，李承容、李昊宇去物竞集训。留在教室的同学照课表接着上，一组轮到值日。",
    "character": "",
    "next": "D02-r0032"
  },
  {
    "id": "D02-r0032",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "昨天还觉得能一直热情高涨，今天第九节就开始累。这个得记，不能只记开学。",
    "character": "ling",
    "next": "D02-r0033"
  },
  {
    "id": "D02-r0033",
    "kind": "line",
    "source": "转述",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "十分钟之后",
    "background": "classroom",
    "speaker": "旁白",
    "text": "他在小序里解释：日常琐碎又重复，当天不写，回首就忘了。流水账也有它该留下的一页。",
    "character": "",
    "next": "D02-r0034"
  },
  {
    "id": "D02-r0034",
    "kind": "scene",
    "source": "演出",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D02-r0035"
  },
  {
    "id": "D02-r0035",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "高三的第一个周一",
    "character": "",
    "next": "D02-r0036"
  },
  {
    "id": "D02-r0036",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "首先，除过叙言，以及“伊始”“重启”“高考”之外，其余日子的日常往往琐碎而重复，当日的精彩只有当日记下才能想起。",
    "character": "",
    "next": "D02-r0037"
  },
  {
    "id": "D02-r0037",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "虽不免于在有些日子变成流水帐，但总在鼓励记录者去观察并生发感悟，也帮助健忘而善记的我们在回首时有所依托。我想这便是班级日志的意义吧。",
    "character": "",
    "next": "D02-r0038"
  },
  {
    "id": "D02-r0038",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 学习版：",
    "character": "",
    "next": "D02-r0039"
  },
  {
    "id": "D02-r0039",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 今日课表：英 英 语 数 数／英语答疑 化 C 物 物。",
    "character": "",
    "next": "D02-r0040"
  },
  {
    "id": "D02-r0040",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "英语首堂课：今天是杨卫华老师为我们上的头两节正课。杨sir教学风格条理性强，干脆爽利，使我们初睹他的风采。",
    "character": "",
    "next": "D02-r0041"
  },
  {
    "id": "D02-r0041",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "数学课堂重振雄风：今日战老师严抓课堂笔记及上课效果，开始发力。",
    "character": "",
    "next": "D02-r0042"
  },
  {
    "id": "D02-r0042",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "化学首堂课：新老师博老师为我们上了高三第一堂化学课，晶体部分难度不小，诸位仍需努力。",
    "character": "",
    "next": "D02-r0043"
  },
  {
    "id": "D02-r0043",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 以下为杂记和娱乐版：",
    "character": "",
    "next": "D02-r0044"
  },
  {
    "id": "D02-r0044",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "1. 今日上午各课安排有所后延，约十余分钟。",
    "character": "",
    "next": "D02-r0045"
  },
  {
    "id": "D02-r0045",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "2. 今日为李沛霖同学生日。",
    "character": "",
    "next": "D02-r0046"
  },
  {
    "id": "D02-r0046",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "3. 彭逸涵、凌艺坤联手9班官天与开创乒乓运动新形式（乒乓球）。",
    "character": "",
    "next": "D02-r0047"
  },
  {
    "id": "D02-r0047",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 今日评：今天算是高三学习正式开始的日子。从昨天的热情高涨到今日第九节课，疲态而出不过二十余小时，强度（学习强度）可见一斑。",
    "character": "",
    "next": "D02-r0048"
  },
  {
    "id": "D02-r0048",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "适应高三学习生活不仅要靠劳逸结合，更需要学会合理分配时间与精力，从个人状态层面开始依据近日的日程进行调整，在休闲减少、学习增多的大背景下明确目标，分配体力，提高效率，高效利用课堂，减少重复",
    "character": "",
    "next": "D02-r0049"
  },
  {
    "id": "D02-r0049",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "、无意义的事务，为接下来的一年节奏奠定打下基础。",
    "character": "",
    "next": "D02-r0050"
  },
  {
    "id": "D02-r0050",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "以上。",
    "character": "",
    "next": "D02-r0051"
  },
  {
    "id": "D02-r0051",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 今日出勤：陈俊言（北大暑期课堂请假）、李承容、李昊宇（物竞集训请假）。",
    "character": "",
    "next": "D02-r0052"
  },
  {
    "id": "D02-r0052",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "△ 今日值日：一组。",
    "character": "",
    "next": "D02-r0053"
  },
  {
    "id": "D02-r0053",
    "kind": "line",
    "source": "原文",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "距离高考还剩326天。",
    "character": "",
    "next": "D02-0009"
  },
  {
    "id": "D02-0009",
    "kind": "scene",
    "source": "演出",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "text": "称呼的旧事",
    "character": "",
    "effect": "memory",
    "prop": null,
    "next": "D02-0010"
  },
  {
    "id": "D02-0010",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "speaker": "韩琪",
    "text": "别像以前的学生那样叫我HQ。",
    "character": "c45",
    "next": "D02-0011"
  },
  {
    "id": "D02-0011",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "HQ？原来还可以这么叫。",
    "character": "xu",
    "next": "interactive-D02-0011"
  },
  {
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0011",
    "kind": "choice",
    "text": "启元问起HQ，我怎样接话？",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "叫顺口了，听着倒像咱们自己的暗号。",
        "next": "interactive-D02-0011-say1"
      },
      {
        "text": "先记老师，再记这个称呼的来历。",
        "next": "interactive-D02-0011-say2"
      },
      {
        "text": "就写HQ吧，没听过的人自己猜。",
        "failure": "两个字母站上纸面，后来读的人却找不到老师。"
      },
      {
        "text": "名字略掉，群名够解释一切了。",
        "failure": "群名接过了解释工作，第一位读者仍在门外。"
      }
    ]
  },
  {
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0011-say1",
    "kind": "line",
    "text": "叫顺口了，听着倒像咱们自己的暗号。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D02-0011-reply1"
  },
  {
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0011-reply1",
    "kind": "line",
    "text": "那我也记住了。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D02-0012"
  },
  {
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0011-say2",
    "kind": "line",
    "text": "先记老师，再记这个称呼的来历。",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "interactive-D02-0011-reply2"
  },
  {
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "page": 9,
    "pages": [
      9
    ],
    "source": "补写",
    "id": "interactive-D02-0011-reply2",
    "kind": "line",
    "text": "名字和故事都得有。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "D02-0012"
  },
  {
    "id": "D02-0012",
    "kind": "line",
    "source": "转述",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "speaker": "旁白",
    "text": "老师刚规定完称呼，同学们就学会了新称呼。群名后来也有了“HQ万岁”。",
    "character": "",
    "next": "D02-0013"
  },
  {
    "id": "D02-0013",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "回忆 · 高一初识HQ",
    "period": "称呼的旧事",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "规则是记住了，方向没记住。",
    "character": "ling",
    "next": "D02-0014"
  },
  {
    "id": "D02-0014",
    "kind": "scene",
    "source": "演出",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "text": "午间",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D02-0015"
  },
  {
    "id": "D02-0015",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "李沛霖",
    "text": "今天还是我的生日，你们不要只记两位杨sir。",
    "character": "c05",
    "next": "D02-0016"
  },
  {
    "id": "D02-0016",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "彭逸涵",
    "text": "生日快乐！课间来试试新的乒乓玩法？",
    "character": "c12",
    "next": "D02-0017"
  },
  {
    "id": "D02-0017",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "官天与也在。先说好，球还是同一个球。",
    "character": "ling",
    "next": "D02-r0018"
  },
  {
    "id": "D02-r0018",
    "kind": "choice",
    "source": "补写",
    "page": 9,
    "pages": [
      9,
      181
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "text": "记到第九节课，我怎么接",
    "speaker": "凌艺坤",
    "character": "ling",
    "options": [
      {
        "text": "“今天困成这样，明天得早点睡。”",
        "next": "D02-r0019"
      },
      {
        "text": "“九节课全上过了，这一页可不能空着。”",
        "next": "D02-r0021"
      },
      {
        "text": "今天太累，先只写一句“正常上课”，明天再补。",
        "failure": "九节课被压成四个字，哈欠却没肯一起压缩。"
      }
    ]
  },
  {
    "id": "D02-r0019",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9,
      181
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "text": "“今天困成这样，明天得早点睡。”",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "D02-r0020"
  },
  {
    "id": "D02-r0020",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "你先写，我也把第一页留下。",
    "character": "xu",
    "next": "D02-0021"
  },
  {
    "id": "D02-r0021",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9,
      181
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "text": "“九节课全上过了，这一页可不能空着。”",
    "speaker": "凌艺坤",
    "character": "ling",
    "next": "D02-r0022"
  },
  {
    "id": "D02-r0022",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "那就从早上第一节开始数。",
    "character": "xu",
    "next": "D02-0021"
  },
  {
    "id": "D02-0021",
    "kind": "line",
    "source": "补写",
    "page": 9,
    "pages": [
      9
    ],
    "day": "D02",
    "context": "现实",
    "period": "午间",
    "background": "classroom",
    "speaker": "凌艺坤",
    "text": "今天记下，明年才能想起来。",
    "character": "ling",
    "next": "N01-date"
  },
  {
    "id": "N01-date",
    "kind": "date",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-07-18",
    "text": "新机型试飞",
    "pov": "xu",
    "character": "",
    "next": "N01-r0038"
  },
  {
    "id": "N01-r0038",
    "kind": "portrait",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "新机型试飞",
    "pov": "xu",
    "character": "xu",
    "speaker": "徐启元",
    "next": "N01-r0016"
  },
  {
    "id": "N01-r0016",
    "kind": "scene",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "text": "书叠纸铺",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N01-r0017"
  },
  {
    "id": "N01-r0017",
    "kind": "line",
    "source": "转述",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "speaker": "旁白",
    "text": "迁楼后的第三天，桌上书叠纸铺。刚觉得没有什么可记，笔尖又停在了新教室的纸页上。",
    "character": "",
    "next": "N01-r0018"
  },
  {
    "id": "N01-r0018",
    "kind": "line",
    "source": "补写",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "speaker": "徐启元",
    "text": "这本子不能只在大事发生时才写。晶胞、纸飞机，今天也有今天的形状。",
    "character": "xu",
    "next": "interactive-N01-r0018"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0018",
    "kind": "choice",
    "text": "第一篇日常记些什么？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "晶胞也记，纸飞机也记，今天没什么大事也有今天。",
        "next": "interactive-N01-r0018-say1"
      },
      {
        "text": "先写眼前这叠纸，再往回想上午的课。",
        "next": "interactive-N01-r0018-say2"
      },
      {
        "text": "等有大事再写，这页先省下来。",
        "failure": "空白省好了，今天却没有地方停下。"
      },
      {
        "text": "先借昨天的开头，明天再补细节。",
        "failure": "昨天又开了一次头，今天始终没接上。"
      }
    ]
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0018-say1",
    "kind": "line",
    "text": "晶胞也记，纸飞机也记，今天没什么大事也有今天。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N01-r0018-reply1"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0018-reply1",
    "kind": "line",
    "text": "书页上终于有了课堂以外的折痕。",
    "speaker": "旁白",
    "character": "",
    "next": "N01-r0019"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0018-say2",
    "kind": "line",
    "text": "先写眼前这叠纸，再往回想上午的课。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N01-r0018-reply2"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "书叠纸铺",
    "background": "classroom",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0018-reply2",
    "kind": "line",
    "text": "笔尖从桌面走回黑板。",
    "speaker": "旁白",
    "character": "",
    "next": "N01-r0019"
  },
  {
    "id": "N01-r0019",
    "kind": "scene",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "text": "棱角与晶胞",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N01-r0020"
  },
  {
    "id": "N01-r0020",
    "kind": "line",
    "source": "转述",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学把棱角分明的晶胞画上黑板。顶点与内部的点数来回数，虚线背后的结构渐渐显出来。",
    "character": "",
    "next": "N01-r0021"
  },
  {
    "id": "N01-r0021",
    "kind": "line",
    "source": "补写",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "speaker": "同学",
    "text": "外面的算完了，里面还有。",
    "character": "",
    "next": "N01-r0022"
  },
  {
    "id": "N01-r0022",
    "kind": "line",
    "source": "转述",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "speaker": "旁白",
    "text": "物理又把类抛运动拾起，同学盯着反向延长的中点；生物讲满三节，终于把期末卷讲完。",
    "character": "",
    "next": "N01-r0023"
  },
  {
    "id": "N01-r0023",
    "kind": "line",
    "source": "补写",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "speaker": "同学",
    "text": "这卷讲完了，脑子还得再整理一遍。",
    "character": "",
    "next": "N01-r0024"
  },
  {
    "id": "N01-r0024",
    "kind": "line",
    "source": "转述",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "棱角与晶胞",
    "background": "classroom",
    "speaker": "旁白",
    "text": "数学转到圆锥，语文紧跟文言真题；英语把语法的坑填过，才偷得半课闲。",
    "character": "",
    "next": "N01-r0025"
  },
  {
    "id": "N01-r0025",
    "kind": "scene",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "text": "纸翼和球场",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N01-r0026"
  },
  {
    "id": "N01-r0026",
    "kind": "line",
    "source": "补写",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "speaker": "徐启元",
    "text": "兼获三好、优团、优干的各位，祝贺！",
    "character": "xu",
    "next": "N01-r0027"
  },
  {
    "id": "N01-r0027",
    "kind": "line",
    "source": "转述",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "speaker": "旁白",
    "text": "新机型试飞，网球场轮战。纸上刚画完晶胞，课间又换了一种空间结构。",
    "character": "",
    "next": "N01-r0028"
  },
  {
    "id": "N01-r0028",
    "kind": "line",
    "source": "补写",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "speaker": "徐启元",
    "text": "飞机别折在这页上，班史还得传下去。",
    "character": "xu",
    "next": "interactive-N01-r0028"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0028",
    "kind": "choice",
    "text": "纸飞机飞到本子旁，我怎么提醒？",
    "speaker": "徐启元",
    "character": "xu",
    "options": [
      {
        "text": "这张还得写字，拿旁边的废纸折吧。",
        "next": "interactive-N01-r0028-say1"
      },
      {
        "text": "先传班史，飞机我给你留到课间。",
        "next": "interactive-N01-r0028-say2"
      },
      {
        "text": "就用这页试一下，展开还能写。",
        "failure": "飞机回来时，落款先藏进了折缝。"
      },
      {
        "text": "飞完再传，下一位等一会儿没关系。",
        "failure": "试飞还没结束，下一位史官已经等出了下一节课。"
      }
    ]
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0028-say1",
    "kind": "line",
    "text": "这张还得写字，拿旁边的废纸折吧。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N01-r0028-reply1"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0028-reply1",
    "kind": "line",
    "text": "史册留在桌上，试飞转到了另一张纸。",
    "speaker": "旁白",
    "character": "",
    "next": "N01-r0030"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0028-say2",
    "kind": "line",
    "text": "先传班史，飞机我给你留到课间。",
    "speaker": "徐启元",
    "character": "xu",
    "next": "interactive-N01-r0028-reply2"
  },
  {
    "day": "N01",
    "context": "现实",
    "period": "纸翼和球场",
    "background": "track",
    "page": 10,
    "pages": [
      10
    ],
    "source": "补写",
    "id": "interactive-N01-r0028-reply2",
    "kind": "line",
    "text": "两样东西终于排好了先后。",
    "speaker": "旁白",
    "character": "",
    "next": "N01-r0030"
  },
  {
    "id": "N01-r0030",
    "kind": "scene",
    "source": "演出",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N01-r0031"
  },
  {
    "id": "N01-r0031",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "——扯点没用的",
    "character": "",
    "next": "N01-r0032"
  },
  {
    "id": "N01-r0032",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "棱角分明，内外点数，纵横晶胞显隐结构之美——化学。",
    "character": "",
    "next": "N01-r0033"
  },
  {
    "id": "N01-r0033",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "重拾类抛，板板相觑，反向延长中点究竟何处（流式仪寡人解矣）——物理。",
    "character": "",
    "next": "N01-r0034"
  },
  {
    "id": "N01-r0034",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "（内容固重，形式亦不可失）",
    "character": "",
    "next": "N01-r0035"
  },
  {
    "id": "N01-r0035",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "祝贺兼获三好、优团、优干的各位同学！",
    "character": "",
    "next": "N01-r0036"
  },
  {
    "id": "N01-r0036",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "新机型试飞，网球场轮战，班级航空、体育事业蓬勃发展。",
    "character": "",
    "next": "N01-r0037"
  },
  {
    "id": "N01-r0037",
    "kind": "line",
    "source": "原文",
    "page": 10,
    "pages": [
      10
    ],
    "day": "N01",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "距离高考还剩325天。",
    "character": "",
    "next": "N02-date"
  },
  {
    "id": "N02-date",
    "kind": "date",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-07-19",
    "text": "不可能一直倒霉",
    "pov": "c03",
    "character": "",
    "next": "N02-r0060"
  },
  {
    "id": "N02-r0060",
    "kind": "portrait",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "不可能一直倒霉",
    "pov": "c03",
    "character": "c03",
    "speaker": "徐子涵",
    "next": "N02-r0018"
  },
  {
    "id": "N02-r0018",
    "kind": "scene",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "text": "满者执笔",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N02-r0019"
  },
  {
    "id": "N02-r0019",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "太史公要究天人之际。我先把今天记明白，免得明天就忘。",
    "character": "c03",
    "next": "interactive-N02-r0019"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0019",
    "kind": "choice",
    "text": "“究天人之际”之后怎么落笔？",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "大题目先放着，从早上第一节写起。",
        "next": "interactive-N02-r0019-say1"
      },
      {
        "text": "笑话和课都记，别只剩最后的感想。",
        "next": "interactive-N02-r0019-say2"
      },
      {
        "text": "先写一段像太史公的序，事情最后再说。",
        "failure": "序写得庄严，今天却没等到自己的出场。"
      },
      {
        "text": "小事不用留，结尾说今天不错就好。",
        "failure": "“不错”两个字坐满了整页，队伍却仍在食堂。"
      }
    ]
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0019-say1",
    "kind": "line",
    "text": "大题目先放着，从早上第一节写起。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-N02-r0019-reply1"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0019-reply1",
    "kind": "line",
    "text": "天人之际暂且让出了第一行。",
    "speaker": "旁白",
    "character": "",
    "next": "N02-r0020"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0019-say2",
    "kind": "line",
    "text": "笑话和课都记，别只剩最后的感想。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-N02-r0019-reply2"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0019-reply2",
    "kind": "line",
    "text": "课堂和课间一起挤进了纸页。",
    "speaker": "旁白",
    "character": "",
    "next": "N02-r0020"
  },
  {
    "id": "N02-r0020",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "朱老师",
    "text": "这个教材编得……脑子糊涂啊。",
    "character": "c51",
    "next": "N02-r0021"
  },
  {
    "id": "N02-r0021",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "同学",
    "text": "每日批教材，今天也完成了。",
    "character": "",
    "next": "N02-r0022"
  },
  {
    "id": "N02-r0022",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "旁白",
    "text": "化学认缩写，老师问“这个是BV还是NB”；数学转到笔记本。",
    "character": "",
    "next": "N02-r0023"
  },
  {
    "id": "N02-r0023",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "战老师",
    "text": "周子尧的本子太小了，不行啊。",
    "character": "c48",
    "next": "N02-r0024"
  },
  {
    "id": "N02-r0024",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "孙老师",
    "text": "诗歌鉴赏题出得不错吧？",
    "character": "c46",
    "next": "N02-r0025"
  },
  {
    "id": "N02-r0025",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "同学",
    "text": "最高三分的那个？",
    "character": "",
    "next": "N02-r0026"
  },
  {
    "id": "N02-r0026",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "满者执笔",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "这个“不错”，大家各有理解。",
    "character": "c03",
    "next": "N02-r0027"
  },
  {
    "id": "N02-r0027",
    "kind": "scene",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "text": "不长的队",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N02-r0028"
  },
  {
    "id": "N02-r0028",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "旁白",
    "text": "物理下课，几个人冲进食堂。面前队不长，满者望了一眼，安心排进去。",
    "character": "",
    "next": "N02-r0029"
  },
  {
    "id": "N02-r0029",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "徐子涵",
    "text": "不可能一直倒霉。",
    "character": "c03",
    "next": "N02-r0030"
  },
  {
    "id": "N02-r0030",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "同学",
    "text": "才这几个人，很快。",
    "character": "",
    "next": "N02-r0031"
  },
  {
    "id": "N02-r0031",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "旁白",
    "text": "十多分钟过去，队里的几个人还在队里。HQ已经吃完，从他们面前走过。",
    "character": "",
    "next": "N02-r0032"
  },
  {
    "id": "N02-r0032",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "HQ",
    "text": "你们还在这儿呀。",
    "character": "c45",
    "next": "N02-r0033"
  },
  {
    "id": "N02-r0033",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "徐子涵",
    "text": "刚才那句话，我是不是说得太早？",
    "character": "c03",
    "next": "N02-r0040"
  },
  {
    "id": "N02-r0040",
    "kind": "choice",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "text": "还在队里，我怎么接",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "“队短不等于等得短，这句话我收回一半。”",
        "next": "N02-r0041"
      },
      {
        "text": "“先往前挪吧，饭还没吃到，别再给自己算运气。”",
        "next": "N02-r0043"
      },
      {
        "text": "这边等太久了，咱们再换一条看着更短的。",
        "failure": "队换得很勤，饭却一直还在窗口里。"
      }
    ]
  },
  {
    "id": "N02-r0041",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "text": "“队短不等于等得短，这句话我收回一半。”",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N02-r0058"
  },
  {
    "id": "N02-r0058",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "旁白",
    "text": "她听到自嘲，笑着从几人旁边走过。",
    "character": "",
    "next": "N02-r0034"
  },
  {
    "id": "N02-r0043",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "text": "“先往前挪吧，饭还没吃到，别再给自己算运气。”",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "N02-r0059"
  },
  {
    "id": "N02-r0059",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "旁白",
    "text": "老师看了一眼仍在排队的同学，又笑着走了。",
    "character": "",
    "next": "N02-r0034"
  },
  {
    "id": "N02-r0034",
    "kind": "line",
    "source": "转述",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "不长的队",
    "background": "cafeteria",
    "speaker": "旁白",
    "text": "老师笑着走了。大家往前挪了一点，重新看这支“不长”的队。",
    "character": "",
    "next": "N02-r0035"
  },
  {
    "id": "N02-r0035",
    "kind": "scene",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "暑假计划草案",
    "background": "classroom",
    "text": "暑假计划草案",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N02-r0036"
  },
  {
    "id": "N02-r0036",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "暑假计划草案",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "计划出炉。复习之重与假期之喜共进。",
    "character": "c03",
    "next": "N02-r0037"
  },
  {
    "id": "N02-r0037",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "暑假计划草案",
    "background": "classroom",
    "speaker": "同学",
    "text": "刚从排队出来，还要给暑假排队。",
    "character": "",
    "next": "N02-r0038"
  },
  {
    "id": "N02-r0038",
    "kind": "line",
    "source": "补写",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "暑假计划草案",
    "background": "classroom",
    "speaker": "徐子涵",
    "text": "这次至少能先看看队有多长。",
    "character": "c03",
    "next": "N02-r0045"
  },
  {
    "id": "N02-r0045",
    "kind": "scene",
    "source": "演出",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "text": "课间手帐",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "N02-r0046"
  },
  {
    "id": "N02-r0046",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "太史公在阐述《史记》撰写宗旨时曾言：“究天人之际，通古今之变，成一家之言。",
    "character": "",
    "next": "N02-r0047"
  },
  {
    "id": "N02-r0047",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "”而在史学研究日益碎片化的今天，并非所有叙述者需要有“通古今之变”的宏大感，更贴近生活细节的微观视角更符合我们的需要。",
    "character": "",
    "next": "N02-r0048"
  },
  {
    "id": "N02-r0048",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "而修此班志，记录我们生活中的点滴，或增添乐趣，或提供力量，或得些许回忆，亦为此意。",
    "character": "",
    "next": "N02-r0049"
  },
  {
    "id": "N02-r0049",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "不知从何下笔，观前人体例，又加以自己思考（私货），有内容如下：",
    "character": "",
    "next": "N02-r0050"
  },
  {
    "id": "N02-r0050",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "有一些有趣的话：",
    "character": "",
    "next": "N02-r0051"
  },
  {
    "id": "N02-r0051",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "“这个教材编得……脑子糊涂啊……”——朱（每日批比教材（1/1））",
    "character": "",
    "next": "N02-r0052"
  },
  {
    "id": "N02-r0052",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "博老师",
    "text": "这个是BV还是NB啊？我们大家有希望能白嫖……",
    "character": "c53",
    "next": "N02-r0053"
  },
  {
    "id": "N02-r0053",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "战景林",
    "text": "ZYC（的本子）太小了，不行啊。",
    "character": "c48",
    "next": "interactive-N02-r0053"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0053",
    "kind": "choice",
    "text": "老师嫌本子小，我怎么接？",
    "speaker": "徐子涵",
    "character": "c03",
    "options": [
      {
        "text": "这页快挤满了，得给过程多留点地方。",
        "next": "interactive-N02-r0053-say1"
      },
      {
        "text": "字小也不能省步骤，我另接一页。",
        "next": "interactive-N02-r0053-say2"
      },
      {
        "text": "最后答案还能放下，就先不换了。",
        "failure": "本子装下了答案，却拒收中间那几步。"
      },
      {
        "text": "我缩小一点写，漏掉的回头靠记忆补。",
        "failure": "字越缩越小，记忆却没有配套的放大镜。"
      }
    ]
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0053-say1",
    "kind": "line",
    "text": "这页快挤满了，得给过程多留点地方。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-N02-r0053-reply1"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0053-reply1",
    "kind": "line",
    "text": "不只留最后那个数。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N02-r0054"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0053-say2",
    "kind": "line",
    "text": "字小也不能省步骤，我另接一页。",
    "speaker": "徐子涵",
    "character": "c03",
    "next": "interactive-N02-r0053-reply2"
  },
  {
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "page": 11,
    "pages": [
      11
    ],
    "source": "补写",
    "id": "interactive-N02-r0053-reply2",
    "kind": "line",
    "text": "接着写，别挤得自己都看不清。",
    "speaker": "战景林",
    "character": "c48",
    "next": "N02-r0054"
  },
  {
    "id": "N02-r0054",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "孙蕾",
    "text": "诗歌鉴赏题出得不错吧（指最高的得了3分）。",
    "character": "c46",
    "next": "N02-r0055"
  },
  {
    "id": "N02-r0055",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "其他：",
    "character": "",
    "next": "N02-r0056"
  },
  {
    "id": "N02-r0056",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "中午物理下课冲去食堂，排起不长队，一边念叨“不可能一直倒霉”，一边排着队，然后十多分钟过去，HQ吃完饭下来看到还在排队的几个怂种，笑着走了过去。",
    "character": "",
    "next": "N02-r0057"
  },
  {
    "id": "N02-r0057",
    "kind": "line",
    "source": "原文",
    "page": 11,
    "pages": [
      11
    ],
    "day": "N02",
    "context": "现实",
    "period": "课间手帐",
    "background": "classroom",
    "speaker": "班史原载",
    "text": "今日暑假计划（草案）出炉，复习之重与假期之喜共进。",
    "character": "",
    "next": "D03-date"
  },
  {
    "id": "D03-date",
    "kind": "date",
    "source": "演出",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "翻到这一日",
    "background": "classroom",
    "date": "2023-07-20",
    "text": "课堂里的例题",
    "pov": "c06",
    "character": "",
    "next": "D03-r0001"
  },
  {
    "id": "D03-r0001",
    "kind": "portrait",
    "source": "演出",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "",
    "background": "classroom",
    "text": "课堂里的例题",
    "pov": "c06",
    "character": "c06",
    "speaker": "吕思宇",
    "next": "D03-0006"
  },
  {
    "id": "D03-0006",
    "kind": "scene",
    "source": "演出",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "text": "课堂",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D03-r0003"
  },
  {
    "id": "D03-r0003",
    "kind": "line",
    "source": "原文",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "初执史笔，诚惶诚恐……好吧其实并没有，挺好玩的。",
    "character": "c06",
    "next": "D03-0008"
  },
  {
    "id": "D03-0008",
    "kind": "line",
    "source": "原文",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "我把例题写在心里了。",
    "character": "c07",
    "next": "D03-0009"
  },
  {
    "id": "D03-0009",
    "kind": "line",
    "source": "原文",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "战老师",
    "text": "掏出来给我看看。",
    "character": "c48",
    "next": "D03-0010"
  },
  {
    "id": "D03-0010",
    "kind": "line",
    "source": "补写",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "刘恒怿",
    "text": "纸和心之间，还差一支笔。",
    "character": "c07",
    "next": "D03-0011"
  },
  {
    "id": "D03-0011",
    "kind": "line",
    "source": "补写",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "王家童",
    "text": "一个亿？我直接甩一个亿。",
    "character": "c25",
    "next": "interactive-D03-0011"
  },
  {
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 12,
    "pages": [
      12
    ],
    "source": "补写",
    "id": "interactive-D03-0011",
    "kind": "choice",
    "text": "一个亿之后，我怎么追问？",
    "speaker": "吕思宇",
    "character": "c06",
    "options": [
      {
        "text": "你这一下直接把前一位报价盖过去了。",
        "next": "interactive-D03-0011-say1"
      },
      {
        "text": "这个称号可得连竞拍的过程一起记。",
        "next": "interactive-D03-0011-say2"
      },
      {
        "text": "前面的出价略了吧，反正你最高。",
        "failure": "最后一手有了姓名，竞拍的前半场却被收走。"
      },
      {
        "text": "写成你第一个报一个亿，读着更利落。",
        "failure": "报价没变，先后却在纸上换了座位。"
      },
      {
        "text": "竞拍结束了，前一手的报价就按最高那位记。",
        "failure": "一个亿没有少，报出它的人却在纸上换了位置。"
      }
    ]
  },
  {
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 12,
    "pages": [
      12
    ],
    "source": "补写",
    "id": "interactive-D03-0011-say1",
    "kind": "line",
    "text": "你这一下直接把前一位报价盖过去了。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-D03-0011-reply1"
  },
  {
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 12,
    "pages": [
      12
    ],
    "source": "补写",
    "id": "interactive-D03-0011-reply1",
    "kind": "line",
    "text": "那就看谁还加。",
    "speaker": "王家童",
    "character": "c25",
    "next": "D03-0012"
  },
  {
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 12,
    "pages": [
      12
    ],
    "source": "补写",
    "id": "interactive-D03-0011-say2",
    "kind": "line",
    "text": "这个称号可得连竞拍的过程一起记。",
    "speaker": "吕思宇",
    "character": "c06",
    "next": "interactive-D03-0011-reply2"
  },
  {
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "page": 12,
    "pages": [
      12
    ],
    "source": "补写",
    "id": "interactive-D03-0011-reply2",
    "kind": "line",
    "text": "前面那手也别漏。",
    "speaker": "王家童",
    "character": "c25",
    "next": "D03-0012"
  },
  {
    "id": "D03-0012",
    "kind": "line",
    "source": "补写",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "吕思宇",
    "text": "今天可以叫“王家亿”了。",
    "character": "c06",
    "next": "D03-0013"
  },
  {
    "id": "D03-0013",
    "kind": "line",
    "source": "原文",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "周远持",
    "text": "我的锌在你的心里。",
    "character": "c09",
    "next": "D03-0014"
  },
  {
    "id": "D03-0014",
    "kind": "line",
    "source": "补写",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "课堂",
    "background": "classroom",
    "speaker": "雷老师",
    "text": "概率题讲了半天，这跟生物有啥关系？",
    "character": "c49",
    "next": "D03-r0031"
  },
  {
    "id": "D03-r0031",
    "kind": "scene",
    "source": "演出",
    "page": 12,
    "pages": [
      12
    ],
    "day": "D03",
    "context": "现实",
    "period": "竞拍的前一手",
    "background": "classroom",
    "text": "竞拍的前一手",
    "character": "",
    "effect": "paper",
    "prop": null,
    "next": "D03-r0032"
  }
];
export default data;
