import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import App from "./app";
import {Guide} from "./guide";


export class IndexView extends Component {
    render() {
        return (
            <Router>
                <div id="main">
                    <Route path="" exact component={Layout} />
                </div>
            </Router>
        )
    }
}

// 配置路由 

class Layout extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => (<Redirect to="/guide" />)} />
                <Route path="/app" strtic component={App} />
                <Route path="/guide" component={Guide} />
            </Switch>
        )
    }
}