
const defaultState = {
    imgs: [
        require("@/assets/images/one1.jpg"),
        require("@/assets/images/one.jpg")
    ],
    icons: [
        require("@/assets/images/nav_01.png"),
        require("@/assets/images/nav_02.png"),
        require("@/assets/images/nav_03.png"),
        require("@/assets/images/nav_04.png"),
        require("@/assets/images/nav_05.png"),
        require("@/assets/images/nav_06.png"),
        require("@/assets/images/nav_07.png")
    ],
    cards: [
        { path: require("@/assets/images/card_01.png"), title: "胖子的自我修养" },
        { path: require("@/assets/images/card_02.png"), title: "人间四月天" },
        { path: require("@/assets/images/card_04.png"), title: "第91届奥斯卡获奖和提名影片" },
        { path: require("@/assets/images/card_03.png"), title: "我想探索你内心的宇宙" }
    ],
    writer: [],
    // newWriter: [],
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

        default:
            return state;
            break;
    }
}