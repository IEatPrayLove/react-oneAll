import "./scan.css"

export default class Scan extends Component {
    onLeft = () => {
        // console.log(this.props)
        const { history } = this.props;
        history.goBack();
    }
    componentWillmount() {
        var ws = null,
            wo = null;
        var scan = null,
            domready = false;
        // H5 plus事件处理
        function plusReady() {
            if (ws || !window.plus || !domready) {
                return;
            }
            // 获取窗口对象
            ws = plus.webview.currentWebview();
            // 开始扫描
            ws.addEventListener('show', function () {
                scan = new plus.barcode.Barcode('bcid');
                scan.onmarked = onmarked;
                scan.start({
                    conserve: true,
                    filename: '_doc/barcode/'
                });
            }, false);
            // 显示页面并关闭等待框
            ws.show('pop-in');
        }
        if (window.plus) {
            plusReady();
        } else {
            document.addEventListener('plusready', plusReady, false);
        }
        // 监听DOMContentLoaded事件
        document.addEventListener('DOMContentLoaded', function () {
            domready = true;
            plusReady();
        }, false);
        // 二维码扫描成功
        function onmarked(type, result, file) {
            switch (type) {
                case plus.barcode.QR:
                    type = 'QR';
                    break;
                case plus.barcode.EAN13:
                    type = 'EAN13';
                    break;
                case plus.barcode.EAN8:
                    type = 'EAN8';
                    break;
                default:
                    type = '其它' + type;
                    break;
            }
            result = result.replace(/\n/g, '');
            plus.nativeUI.alert('扫描结果:' + JSON.stringify(result), function () {
                console.log('扫描成功')
            }, "二维码扫描", "OK");
            back();
        }
        // 从相册中选择二维码图片 
    }
    scanPicture = () => {
        plus.gallery.pick(function (path) {
            plus.barcode.scan(path, onmarked, function (error) {
                plus.nativeUI.alert('无法识别此图片');
            });
        }, function (err) {
            console.log('Failed: ' + err.message);
        });
    }
    render() {
        return (
            // <div className="mui-content">
            //     <header className="mui-bar mui-bar-nav my-head">
            //         <a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onClick={this.onLeft}></a>
            //         <h1 className="mui-title">扫一扫</h1>
            //     </header>
            //     <div id="bcid">

            //     </div>
            // </div>
            <div>
                <div id="bcid">
                    <div style={{ height: '40%' }}></div>
                    <p className="tip">...载入中...</p>
                </div>
                <footer>
                    <div className="fbt" onClick={this.onLeft}>取　 消</div> {/* <!--退出页面--> */}
                    <div className="fbt" onClick={this.scanPicture}>从相册选择二维码</div>
                </footer>
            </div>
        )
    }
}