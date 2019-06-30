import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import App from "./app";
import { Guide } from "./guide";
import TuWen from "./tuwen";
import WenDa from "./wenda";
import Read from "./read";
import LianZai from "./lianzai";
import Video from "./video";
import Music from "./music";
import Search from "./search";
import Sset from "./set";
import Login from "./login";
import Register from "./register";
import SetPassWord from "./setpassword";
import MyHome from "./myhome"
import Scan from "./scan";



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
                <Route path="/tuwen/:word" component={TuWen} />
                <Route path="/wenda/:word" component={WenDa} />
                <Route path="/read/:word" component={Read} />
                <Route path="/lianzai/:word" component={LianZai} />
                <Route path="/video/:word" component={Video} />
                <Route path="/music/:word" component={Music} />
                <Route path="/search" component={Search} />
                <Route path="/set" component={Sset} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/setpassword" component={SetPassWord} />
                <Route path="/myhome" component={MyHome} />
                <Route path="/scan" component={Scan} />
            </Switch>
        )
    }
}