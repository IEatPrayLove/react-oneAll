import BgImg from "../../../assets/images/loginhead.jpg";
import { Button, WhiteSpace, List, InputItem } from 'antd-mobile';
import { connect } from "react-redux";
import { setPwd } from "../../actions";
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

@connect(state => ({ ...state }))
export default class SetPassWord extends Component {
    onLeft = () => {
        // console.log(this.props)
        const { history } = this.props;
        history.goBack();
    }

    render() {
        const {
            dispatch,
            userinfo
        } = this.props;
        console.log(this.props)
        return (
            <div>
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
                        onChange={this.getTel}
                        ref={el => this.tel = el}
                    >账号</InputItem>
                    <InputItem
                        clear
                        type="password"
                        placeholder="请设置密码"
                        onChange={this.getPwd}
                        ref={el => this.pwd = el}
                    >密码</InputItem>

                </List>
                <Button
                    type="primary"
                    onClick={() => dispatch(setPwd({
                        url: "/react/userinfo",
                        phoneNum: this.tel.state.value,
                        passWord: this.pwd.state.value,
                        userinfo
                    }))}
                    style={{
                        backgroundColor: '#000',
                        color: 'white',
                        width: '80%',
                        margin: "20px auto"
                    }}
                >确定</Button>

            </div>
        )
    }
}