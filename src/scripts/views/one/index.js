import { Card, WhiteSpace, Carousel, WingBlank, NavBar, Icon, Button } from 'antd-mobile';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./one.css";
// import { NavBar, Icon } from 'antd-mobile';
@connect(state => ({ ...state }))
export default class One extends Component {

    render() {
        const {
            swipes
        } = this.props;
        console.log(this.props)
        return (
            <div>
                <NavBar
                    style={{ color: '#666', display: "absolute", top: '0', left: '0' }}
                    mode="light"
                    // icon={<Icon type="left" style={{ color: '#666' }} />}
                    onClick={this.onLeft}
                    rightContent={[
                        <Icon key="0" type="search" onClick={(e) => this.goSearch(e)} style={{ color: '#666' }} />,
                    ]}
                >ONE</NavBar>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        autoplay
                        dots={false}
                        style={{ backgroundColor: '#fff', height: '100%' }}
                    >
                        {
                            swipes.map((swipe, i) => {
                                return (
                                    <a
                                        key={i}
                                        href=""
                                        style={{ display: 'inline-block', width: '100%', height: '100%' }}
                                    >
                                        <Card full>
                                            <Card.Body>
                                                <img
                                                    src={swipe.path}
                                                    alt=''
                                                    style={{ width: '100%', verticalAlign: 'top' }}
                                                    onLoad={() => {
                                                        // fire window resize event to change height
                                                        window.dispatchEvent(new Event('resize'));
                                                        // this.setState({ imgHeight: 'auto' });
                                                    }}
                                                />
                                            </Card.Body>
                                            <Card.Footer extra={<div>{swipe.photo}</div>} />
                                            <Card.Header
                                                style={{ fontSize: '17px', lineHeight: 2 }}
                                                title={swipe.title}
                                            />
                                            <Card.Footer extra={<div>{swipe.name}</div>} />
                                        </Card>
                                        {/* <Link className="mui-card-link" to="/scan">扫一扫</Link> */}
                                    </a>

                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
                <Link
                    to="/scan"
                    className="open_barcode"
                    onClick={this.open_barcode}
                    style={{
                        display: 'block',
                        margin: '50px auto',
                        padding: '10px 20px',
                        backgroundColor: '#D74B28',
                        color: '#fff',
                        outline: 'none',
                        border: 'none',
                        lineHeight: '100%'
                    }}>打开扫一扫页面</Link>
            </div>
        )
    }
}
