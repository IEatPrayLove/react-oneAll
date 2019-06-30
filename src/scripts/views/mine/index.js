import { connect } from "react-redux";
import { Button,WhiteSpace } from 'antd-mobile';
import Background from "../../../assets/images/loginbg.jpg";
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
  authsLogout(){
    // console.log("666")
    for(var s in auths){
        auths[s].logout(function(e){
         plus.nativeUI.alert("注销登录认证成功!");
     }, function(e){
         plus.nativeUI.alert("注销登录认证失败: "+JSON.stringify(e));
     });
    }
}

authLogin(id){
    // alert(id);
    for(var s in auths){
        if(auths[s].id==id){
            var obj = auths[s];
            obj.login(function(e){
             plus.nativeUI.alert("登录认证成功!");
             obj.getUserInfo( function(e){
                 plus.nativeUI.alert("获取用户信息成功："+JSON.stringify(obj.userInfo));
             }, function(e){
                 plus.nativeUI.alert("获取用户信息失败： "+JSON.stringify(e));
             } );
         }, function(e){
             plus.nativeUI.alert("登录认证失败: "+JSON.stringify(e));
         } );
        }
    }
}

componentWillMount(){
    document.addEventListener("plusready",plusReady,false);
    function plusReady(){
        plus.oauth.getServices((services)=>{
            auths = services;
            console.log(JSON.stringify(auths));
        },(e)=>{
            plus.nativeUI.alert("获取登录授权服务列表失败："+JSON.stringify(e));
        })
    }
    
}
  Setting = () => {
    const { history } = this.props;
    history.push("/set")
  }
  loging = () => {
    const { history } = this.props;
    history.push("/register")
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

        <WhiteSpace/>
        <div className="three-login">
                        <button type="button" onClick={()=>this.authsLogout()} className="mui-btn mui-btn-warning" >注销登录认证</button>
                        <button type="button" onClick={()=>this.authLogin('sinaweibo')} className="mui-btn mui-btn-primary mui-icon mui-icon-weibo" >微博</button>
                        <button type="button" onClick={()=>this.authLogin('weixin')} className="mui-btn mui-btn-primary mui-icon mui-icon-weixin" >微信</button>
                        <button type="button" onClick={()=>this.authLogin('qq')} className="mui-btn mui-btn-primary mui-icon mui-icon-qq" >QQ</button>
                    </div>
      </div>
    )
  }
}