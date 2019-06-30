import { Button, WhiteSpace, List, InputItem } from 'antd-mobile';
import BgImg from "../../../assets/images/loginhead.jpg";
import { Link } from "react-router-dom"
const btnStyle = {
    position: "fixed",
    Top: '20px',
    Left: '20px',
    color: '#fff',
}
const defaultStyle = {
    width: '80%',
    margin: "20px auto"
}
import { connect } from "react-redux"
@connect(state => ({ ...state }))
export default class Login extends Component {
    onLeft = () => {
        // console.log(this.props)
        const { history } = this.props;
        history.goBack();
    }
    render() {
        console.log(this.props)
        return (
            <div style={{ width: "100%", background: '#fff' }}>
                <Button
                    style={btnStyle}
                    size="small" icon="left"
                    type="ghost"
                    inline
                    onClick={this.onLeft}></Button>

                <img src={BgImg} alt="" style={{ width: '100%', height: "100%", display: 'block' }} />
                <WhiteSpace />

                <List
                    /* renderHeader={() => 'Custom title（text / image / empty)'} */
                    style={defaultStyle}>
                    <InputItem
                        clear
                        type="tel"
                        placeholder="手机号码"
                    >账号</InputItem>
                    <InputItem
                        clear
                        type="password"
                        placeholder="请输入密码"
                    >密码</InputItem>

                </List>

                {/* <WhiteSpace /> */}
                <div style={defaultStyle}>
                    <Link to="/register" style={{ color: '#000' }}>忘记密码？</Link>
                </div>
                <Button
                    type="primary"
                    style={{
                        backgroundColor: '#000',
                        color: 'white',
                        width: '80%',
                        margin: "20px auto"
                    }}
                >登录</Button>
                <div style={{
                    width: '80%',
                    margin: "20px auto",
                    textAlign: 'center'
                }}>
                    <Link to="/register" style={{ color: '#000' }}>还没有账号？现在注册</Link>
                </div>
                <WhiteSpace />
                <div style={{
                    width: '80%',
                    margin: "20px auto",
                    textAlign: 'center'
                }}>
                    <span style={{ color: '#666' }}>登录即代表您同意</span><Link to="/register" style={{ color: '#000' }}>用户服务协议</Link>
                </div>
            </div>
        )
    }
}