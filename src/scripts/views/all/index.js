import { NavBar, Icon, WhiteSpace } from "antd-mobile";
import "./all.scss";
import MyCard from "@/scripts/components/card";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

@connect(state => ({ ...state }))
export default class All extends Component {
    goSearch = () => {
        console.log(this.props)
        const { history } = this.props
        history.push("/search")
    }
    render() {
        const {
            icons
        } = this.props;
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{ color: '#999' }} onClick={this.goSearch} />,
                    ]}
                >ONE IS ALL</NavBar>
                <div className="sub-title">分类导航</div>
                <WhiteSpace size="lg" />
                <ul className="nav-box">
                    <li>
                        <Link to={`/tuwen/${icons[0].title}`}>
                            <img src={icons[0].path} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/wenda/${icons[1].title}`}>
                            <img src={icons[1].path} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/read/${icons[2].title}`}>
                            <img src={icons[2].path} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/lianzai/${icons[3].title}`}>
                            <img src={icons[3].path} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/video/${icons[4].title}`}>
                            <img src={icons[4].path} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/music/${icons[5].title}`}>
                            <img src={icons[5].path} alt="" />
                        </Link>
                    </li>
                    {/* <li>
                        <img src={icons[6]} alt=""/>
                    </li> */}
                </ul>
                <WhiteSpace size="lg" />
                <MyCard />
            </div>
        )
    }
}
