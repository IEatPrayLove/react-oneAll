
const defaultState = {
    imgs: [
        require("@/assets/images/one1.jpg"),
        require("@/assets/images/one.jpg")
    ],
}

export const reducers = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {

        default:
            return state;
            break;
    }
}