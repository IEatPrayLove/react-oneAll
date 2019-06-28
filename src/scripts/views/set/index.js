import { NavBar, Icon } from 'antd-mobile';

import { connect } from "react-redux"
@connect(state => ({ ...state }))
export default class Sset extends Component {
    onLeft = () => {
        console.log(this.props)
        const { history } = this.props
        history.goBack();
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ color: '#666', display: "absolute", top: '0', left: '0' }}
                    mode="light"
                    icon={<Icon type="left" style={{ color: '#666' }} />}
                    onClick={this.onLeft}
                >设置</NavBar>
            </div>
        )
    }
}