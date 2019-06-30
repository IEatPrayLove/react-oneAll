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
    fontSize: '14px',
    // backgroundColor: "black"
}
const mobileReg = /^1(3|5|7|8|9)\d{9}$/
const codeReg = /^\d{4}$/
import { connect } from "react-redux"
import { checkTel, getCode, changeTxt, changeTxt2, changeToggle, zhuCe } from '../../actions';
let timer = null;
@connect(state => ({ ...state }))
export default class Register extends Component {
    click=()=>{
        this.props.history.push("/myhome")
    }
    onLeft = () => {
        // console.log(this.props)
        const { history } = this.props;
        history.goBack();
    }
    tel = (telNum) => {
        // console.log(telNum);
        const { flag, dispatch } = this.props;
        if (flag) {
            if (mobileReg.test(telNum)) {
                dispatch(checkTel({
                    flag1: false
                }))
            } else {
                dispatch(checkTel({
                    flag1: true
                }))
            }
        }
    }
    // getCode = (telNum) => {
    //     console.log(this.telNum.state.value)
    // }
    startTime = () => {
        console.log('uuu')
        timer = setInterval(() => {
            const { dispatch, count, txt, flag } = this.props
            if (count > 0) {
                dispatch(changeTxt({
                    count: count - 1,
                    txt: count - 1 + "s"
                }))

            }
            else {
                clearInterval(timer);
                timer = null;
                dispatch(changeTxt2({
                    txt: "获取验证码",
                    mobileDis: false,
                    flag: true,
                    count: 60
                }))
            }
        }, 1000)
    }
    checkCode = (code) => {
        var phoneNum = this.telNum.state.value;
        console.log(code)
        const { dispatch, toggle } = this.props;
        if ((codeReg.test(code) && mobileReg.test(phoneNum))) {

            dispatch(changeToggle({
                flag2: false
            }))
        }

    }
    componentWillUnmount(){
        clearInterval(timer);
    }
    // next = () => {
    // var phoneNum = this.telNum.state.value;
    // var myCode = this.code.state.value;
    // const { dispatch } = this.props;
    // () => dispatch(zhuCe({
    //     url: "/react/zhuCe",
    //     phoneNum,
    //     myCode
    // }))
    // }

    render() {
        const {
            mobileDis,
            txt,
            dispatch,
            toggle,
            registerData,
            history
        } = this.props;
        // console.log(this.props)
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
                        type="tel"
                        placeholder="请输入手机号码"
                        clear
                        onChange={this.tel}
                        ref={el => this.telNum = el}
                    >账号</InputItem>
                    <InputItem
                        clear
                        type="tel"
                        onChange={this.checkCode}
                        ref={el => this.code = el}
                        placeholder="请输入验证码"
                    >验证码</InputItem>



                    <Button
                        style={className}
                        ref={el => this.btn = el}
                        inline
                        type="ghost"
                        // onClick={this.getCode}
                        onClick={() => dispatch(getCode({
                            url: "/react/sendCode",
                            phoneNum: this.telNum.state.value,
                            mobileDis: true,
                            flag: false
                        },
                            this.startTime()))}
                        disabled={mobileDis}
                    >{txt}</Button>
                    <WhiteSpace />


                    <Button
                        disabled={toggle}
                        type="primary"
                        onClick={ () => dispatch(zhuCe({
                            url: "/react/zhuCe",
                            phoneNum:this.telNum.state.value,
                            myCode:this.code.state.value
                        }))}
                        style={{
                            backgroundColor: '#000',
                            color: 'white',
                            width: '80%',
                            margin: "20px auto",
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