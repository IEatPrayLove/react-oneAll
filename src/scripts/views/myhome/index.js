import Background from "../../../assets/images/FmOaXh3wUW_62xvrnkImao6e4A5o.png";
import UpdateImg from "../../components/updateImg";
import { NavBar, Icon ,WhiteSpace} from 'antd-mobile';


const bg = {
    width: '100%',
    height: "100vw",
    backgroundImage: `url(${Background})`,
    backgroundSize: '100% 100%'
}


export default class MyHome extends Component {
    onLeft = () => {
        // console.log(this.props)
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
             <NavBar
                style={{ color: '#666',display:"absolute",top:'0',left:'0' }}
                mode="light"
                icon={<Icon type="left" style={{ color: '#666' }} />}
                onClick={this.onLeft}
                rightContent={[
                    <Icon key="0" type="search" onClick={(e) => this.goSearch(e)} style={{ color: '#666' }} />,
                ]}
            >我的</NavBar>
                <div style={bg}>
                    <UpdateImg />
                    <WhiteSpace/>
                    
                </div>
            </div>
        )
    }
}