import { Button, Icon } from "antd-mobile"
import { Foot } from "../../components/foot";
import { Switch, Route, Redirect } from "react-router-dom"
import One from "../one";
import All from "../all";
import Mine from "../mine";

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/app/one" component={One} />
                    <Route path="/app/all" component={All} />
                    <Route path="/app/mine" component={Mine} />
                    <Route
                        render={
                            () => (<Redirect to="/app/one" />)
                        }
                    />
                </Switch>
                <Foot />
            </div>
        )
    }
}