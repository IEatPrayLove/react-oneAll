


import ReactDOM, { render } from "react-dom";  //  ReactDOM.render
import { IndexView } from "./views";
import store from "./store";
import { Provider } from "react-redux";

const rootEle = document.getElementById("app");

const hotRender = () => {
    render(
        <Provider store={store}>
            <IndexView />
        </Provider>,
        rootEle
    )
}

hotRender()
