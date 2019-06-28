import { connect } from "react-redux";
import { NavBar, Icon } from 'antd-mobile';
import history from "@/utils/history"
// import { Link } from "react-router-dom";
@connect(state => ({ ...state }))
export default class Head extends Component {
    onLeft = () => {
        console.log(this.props)
        history.goBack();
    }
    goSearch = (e) => {
        e.stopPropagation();
        console.log(this.props)
        history.push("/search")
    }
    render() {
        const {
            title,
            dispatch
        } = this.props;
        return (
            <NavBar
                style={{ color: '#666',display:"absolute",top:'0',left:'0' }}
                mode="light"
                icon={<Icon type="left" style={{ color: '#666' }} />}
                onClick={this.onLeft}
                rightContent={[
                    <Icon key="0" type="search" onClick={(e) => this.goSearch(e)} style={{ color: '#666' }} />,
                ]}
            >{title}</NavBar>
        )
    }
}