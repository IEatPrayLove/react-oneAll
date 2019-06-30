
import { Foot } from '../../components/foot'
import axios from "axios";
import { Menu, ActivityIndicator, NavBar,WingBlank, WhiteSpace,Button } from 'antd-mobile';
import React from "react";
import './updateImg.scss';
import history from "@/utils/history";

export default class UptateImg extends Component {
    exit=()=>{
        delete sessionStorage['userInfo']
    }
 
    constructor(...args) {
        super(...args);
        this.state = {
            show: false,
            userImg: require('@/assets/images/FjnjVoaPH389jppglpkmU53NiGgY.png'),
        };
    }

    componentWillMount = () => {
        console.log(localStorage.userInfo);
        if (localStorage.userInfo) {
            this.setState({
                userImg: JSON.parse(localStorage.userInfo).avatar.replace(/public/,'http://localhost:1901')
            })
        }
    };
    onChange = (e) => {
        let $target = e.target || e.srcElement
        console.log(15115165)
        let file = $target.files[0];
        let data = new FormData();    // 构建表单数据对象  
        data.append('avatar', file);  // 需要上传到 服务器 的数据
        const instance = axios.create({
            withCredentials: true
        })
        instance.post('/react/upload-avatar', data).then(res => {
            this.setState({
                userImg: res.data.imgUrl.replace(/public/,'http://localhost:1901' )
            })
            localStorage.userInfo = JSON.stringify({ avatar: res.data.imgUrl });
            console.log(localStorage.userInfo)
        })
    };

    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
    }
    handHide = () => {
        this.setState({
            show: false
        });
    }
    login=()=>{
        history.push("/register")
    }
    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <div className='outer-box'>
                    {/* <WhiteSpace/> */}
                    <WingBlank>
                    <div className='upload-container'>
                        <input type="file" name="image" className='headerInput' onChange={this.onChange} />
                        <img src={this.state.userImg} alt="" id='userHeader' className='headerImg' />
                        <Button className="top-user" onClick={this.exit}>退出登录</Button>
                    </div>
                    </WingBlank>
            </div>
        )
        return (
            <div>
                {menuEl}
                <Foot/>
            </div>
        )
    }
}