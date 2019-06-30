import { Button, Card, CardContent, Avatar, CardHeader, CardFooter, Icon } from 'bee-mobile';
import { connect } from "react-redux";

@connect(state => ({ ...state }))
export default class TuWenCard extends Component {

    getShares = () => {
        plus.share.getServices(function (s) {
            shares = s;
            console.log(JSON.stringify(shares));
        }, function (e) {
            alert("获取分享服务列表失败：" + e.message);
        });
    }
    shareSystem = () => {
        plus.share.sendWithSystem({ content: '6666', href: 'https://zuozhaoxi.com' }, function () {
            console.log('分享成功');
        }, function (e) {
            console.log('分享失败：' + JSON.stringify(e));
        });
    }
    openSharesList = () => {
        mui('#sheet1').popover('toggle');
    }

    shareTo = (id) => {
        this.getShares();
        for (var i in shares) {
            if (shares[i].id == id) {
                var s = shares[i];
                console.log(s)
                s.authorize(function () {
                    console.log("认证完成！");
                    s.send({ content: "Hello" }, function () {
                        alert("分享成功！");
                        this.shareSystem()
                    }, function (e) {
                        alert("分享失败：" + e.message);
                    });
                }, function (e) {
                    console.log("未进行认证");
                })
            }
        }
    }
    takePhoto = () => {
        // alert("start photo")
        // e.stopPropagation();
        var cmr = plus.camera.getCamera();
        var res = cmr.supportedImageResolutions[0];
        var fmt = cmr.supportedImageFormats[0];
        console.log("Resolution: " + res + ", Format: " + fmt);
        cmr.captureImage(function (path) {
            alert("Capture image success: " + path);
            var pic = document.getElementById("pic")

            plus.io.resolveLocalFileSystemURL(path, function (entry) {
                pic.src = entry.toLocalURL();
            }, function (e) {
                outLine('读取拍照文件错误：' + e.message);
            });
        },
            function (error) {
                alert("Capture image failed: " + error.message);
            }, {
                resolution: res,
                format: fmt
            }
        );
    }




    render() {
        const {
            ...state
        } = this.props
        return (
            <div className="CasePanel">
                {
                    state.swipes.map((swipe, i) => {
                        return (
                            <Card key={i}>
                                <CardHeader avatar={
                                    <Avatar src={state.touxiang} />
                                } title={swipe.name} subTitle="September 14, 2016"
                                />
                                <CardContent>
                                    <Avatar src={swipe.path} />
                                    <div className="padding-10">
                                        {swipe.title}
                                    </div>
                                </CardContent>
                                <CardFooter className="padding-5">
                                    <Button flat={true} onClick={this.openSharesList}>分享</Button>
                                    <Button onClick={this.takePhoto}>拍照</Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
                <div id="sheet1" className="mui-popover mui-popover-bottom mui-popover-action ">
                    {/* <!-- 可选择菜单 --> */}
                    <ul className="mui-table-view">
                        <li className="mui-table-view-cell">
                            <a onClick={() => this.shareTo('qq')}>分享QQ</a>
                        </li>
                        <li className="mui-table-view-cell">
                            <a onClick={() => this.shareTo('weixin')}>分享Wechat</a>
                        </li>
                        <li className="mui-table-view-cell">
                            <a onClick={() => this.shareTo('sinaweibo')}>分享Weibo</a>
                        </li>
                    </ul>
                    {/* <!-- 取消菜单 --> */}
                    <ul className="mui-table-view">
                        <li className="mui-table-view-cell">
                            <a href="#sheet1"><b>取消</b></a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}