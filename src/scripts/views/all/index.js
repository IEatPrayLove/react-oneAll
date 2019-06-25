import { NavBar, Icon, WhiteSpace } from "antd-mobile";
import "./all.scss";
import MyCard from "@/scripts/components/card";
import { connect } from "react-redux";
@connect(state => ({ ...state }))
export default class All extends Component {
    render() {
        const {
            icons
        } = this.props;
        // console.log(this.props)
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{ color: '#999' }} />,
                    ]}
                >ONE IS ALL</NavBar>
                <div className="sub-title">分类导航</div>
                <WhiteSpace size="lg" />
                <ul className="nav-box">
                    <li>
                        <img src={icons[0]} alt="" />
                    </li>
                    <li>
                        <img src={icons[1]} alt="" />
                    </li>
                    <li>
                        <img src={icons[2]} alt="" />
                    </li>
                    <li>
                        <img src={icons[3]} alt="" />
                    </li>
                    <li>
                        <img src={icons[4]} alt="" />
                    </li>
                    <li>
                        <img src={icons[5]} alt="" />
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