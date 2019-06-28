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
const className = {

    position: 'absolute !important',
    right: '-230px',
    bottom: '46px', /*no*/
    width: '100px',
    fontSize: '14px'
}
const mobileReg = /^1(3|5|7|8|9)\d{9}$/
const codeReg = /^\d{4}$/
import { connect } from "react-redux"
import { checkTel } from '../../actions';
@connect(state => ({ ...state }))
export default class Register extends Component {
    tel =(e)=>{
        console.log(e)
        var telNum = e;
        const { dispatch, flag, mobileDis } = this.props;
        // const mobileDis = registerData.mobileDis
        if (flag) {
            console.log(telNum)
            console.log(typeof(telNum))
            var flag2 = mobileReg.test(telNum);
            console.log(flag2);
            var a = mobileReg.test(telNum);
            console.log(a);
            dispatch(checkTel({
                flag2
            }))
        }
    }
    render() {
        const {
            mobileDis,
            txt,
            dispatch
        } = this.props;
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

                    style={defaultStyle}>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号码"
                        clear
                        onChange={this.tel}
                        // ref={el => this.telNum = el}
                    >账号</InputItem>
                    <InputItem
                        clear
                        type="password"
                        placeholder="请输入验证码"
                    >验证码</InputItem>



                    <Button
                        style={className}
                        ref={el => this.btn = el}
                        inline
                        type="ghost"
                        onClick={this.getCode}
                        disabled={mobileDis}
                    >{txt}</Button>
                    <WhiteSpace />


                    <Button
                        type="primary"
                        style={{
                            backgroundColor: '#000',
                            color: 'white',
                            width: '80%',
                            margin: "20px auto"
                        }}
                    >下一步</Button>

                    <div style={{
                        width: '80%',
                        margin: "20px auto",
                        textAlign: 'center'
                    }}>
                        <span
                            style={{ color: '#666' }}
                        >注册即代表您同意</span>
                        <Link to="/register" style={{ color: '#000' }}>
                            用户服务协议</Link>
                    </div>

                </List>
            </div>
        )
    }
}