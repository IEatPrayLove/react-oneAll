import { connect } from "react-redux";
import { Button } from 'antd-mobile';
import Background from "../../../assets/images/loginbg.jpg";
// import UpdataImg from "../../components/updateImg";
import btnImg from "../../../assets/images/loginDefault.jpg";
import { Link } from "react-router-dom"
const style = {
  width: "100%",
  height: "575px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "100% 100%"
}
const btnStyle = {
  display: "absolute",
  marginTop: '10px',
  marginLeft: '20px',
  color: 'black',
}
const loginBtnStyle = {
  height: '2rem',
  width: '2rem',
  borderRadius: '50%',
  backgroundImage: `url(${btnImg})`,
  backgroundSize: "100% 100%",
  display: "absolute",
  marginTop: '40%',
  marginLeft: '38%',

}

@connect(state => ({ ...state }))
export default class Mine extends Component {
  Setting = () => {
    const { history } = this.props;
    history.push("/set")
  }
  loging = () => {
    const { history } = this.props;
    history.push("/login")
  }
  render() {
    console.log(this.props)
    return (
      <div style={style}>
        <Button style={btnStyle} size="small" icon="ellipsis" type="ghost" inline onClick={this.Setting}></Button>

        <Button type="ghost" style={loginBtnStyle} onClick={this.loging}></Button>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <span>还没有账号？点击</span><Link to="/register" style={{ color: 'black', textDecoration: 'underline' }}>注册</Link>
        </div>
      </div >
    )
  }
}