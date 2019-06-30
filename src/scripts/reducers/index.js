
const defaultState = {
    imgs: [
        require("@/assets/images/one1.jpg"),
        require("@/assets/images/one.jpg")
    ],
    icons: [
        { path: require("@/assets/images/nav/nav_01.png"), title: "图文" },
        { path: require("@/assets/images/nav/nav_02.png"), title: "问答" },
        { path: require("@/assets/images/nav/nav_03.png"), title: "阅读" },
        { path: require("@/assets/images/nav/nav_04.png"), title: "连载" },
        { path: require("@/assets/images/nav/nav_05.png"), title: "影视" },
        { path: require("@/assets/images/nav/nav_06.png"), title: "音乐" },
        { path: require("@/assets/images/nav/nav_07.png"), title: "电台" }
    ],
    cards: [
        { link: "http://m.wufazhuce.com/topic/114?channel=weibo", path: require("@/assets/images/card_01.png"), title: "胖子的自我修养" },
        { link: "http://m.wufazhuce.com/topic/113?channel=timeline", path: require("@/assets/images/card_02.png"), title: "人间四月天" },
        { link: "http://m.wufazhuce.com/topic/111?channel=singlemessage", path: require("@/assets/images/card_04.png"), title: "第91届奥斯卡获奖和提名影片" },
        { link: "http://m.wufazhuce.com/topic/110?channel=weibo", path: require("@/assets/images/card_03.png"), title: "我想探索你内心的宇宙" }
    ],
    writer: [],
    swipes: [
        { path: require("@/assets/images/swipe/lb_01.jpg"), photo: "摄影 | Matthew Henry", title: "这世上有成千上万种爱, 但从来没有一种爱可以重来。", name: "菲茨杰拉德", time: "2019 / 06 / 25" },
        { path: require("@/assets/images/swipe/lb_02.jpg"), photo: "摄影 | Benjamin", title: "对未来的真正慷慨, 是把一切献给现在。", name: "加缪 《反抗者》", time: "2019 / 06 / 24" },
        { path: require("@/assets/images/swipe/lb_03.jpg"), photo: "摄影 | Ray Hennessy", title: "我也愿学习蝴蝶, 一再的蜕变, 一再的祝愿, 既不思虑, 也不彷徨; 既不回顾, 也不忧伤。", name: "林清玄", time: "2019 / 06 / 23" },
        { path: require("@/assets/images/swipe/lb_04.jpg"), photo: "摄影 | Caleb Woods", title: "上天让我们遇到每个人都是有道理的, 有的人让我们开心, 有的人让我们难过, 但往往是后面一种人, 才会让我们真正地长大。", name: "《长大》", time: "2019 / 06 / 22" },
        { path: require("@/assets/images/swipe/lb_05.jpg"), photo: "摄影 | Dynamic Wang", title: "时间就是这样: 夜里想着心事, 第二天的闹铃就响了; 下几次雨, 夏天也结束了; 等反应过来的时候, 一年已经快要过去了。", name: "《西瓜》", time: "2019 / 06 / 21" },
        { path: require("@/assets/images/swipe/lb_06.jpg"), photo: "摄影 | Maxim Duzij", title: "从现在起, 我开始谨慎地选择我的生活, 我不在轻易让自己迷失在各种诱惑里。", name: "米兰·昆德拉", time: "2019 / 06 / 20" },
        { path: require("@/assets/images/swipe/lb_07.jpg"), photo: "摄影 | Aziz Acharki", title: "因为认识了你, 我太应该有一点长进了。", name: "王小波", time: "2019 / 06 / 19" }
    ],
    touxiang: [
        require("@/assets/images/loginDefault.jpg")
    ],
    backgroundimg: [
        require("@/assets/images/loginbg.jpg")
    ],
    skip: 0,
    searchResult: [],

    toggle: true,
    mobileDis: true,
    flag: true,
    count: 60,
    txt: "获取验证码",
    registerData: [],
    userinfo: []


}

export const reducers = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case "getWriter":
            return { ...state, writer: action.writer }
            break;

        case "getNewWriter":
            return { ...state, writer: action.newWriter }
            break;

        case "shangchuan":
            return { ...state, touxiang: action.touxiang }
            break;

        case "searchWriter":
            return { ...state, searchResult: action.searchResult }
            break;

        case "checkTel":
            return { ...state, mobileDis: action.mobileDis }
            break;

        case "getCode":
            return { ...state, mobileDis: action.mobileDis, flag: action.flag }
            break;

        case "changeTxt":
            return { ...state, count: action.count, txt: action.txt }
            break;

        case "changeTxt2":
            return { ...state, txt: action.txt, flag: action.flag, mobileDis: action.mobileDis, count: action.count }
            break;

        case "changeToggle":
            return { ...state, toggle: action.changeToggle }
            break;

        case "zhuCe":
            return { ...state, registerData: action.registerData }
            break;

        case "setPwd":
            return { ...state, userinfo: action.userinfo }
            break;

        default:
            return state;
            break;
    }
}