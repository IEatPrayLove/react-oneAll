import { Card, WhiteSpace, Carousel, WingBlank } from 'antd-mobile';
import { connect } from "react-redux";
@connect(state=>({...state}))
export default class One extends Component {
    render() {
        const{
            swipes
        }=this.props;
        console.log(this.props)
        return (
            <div>
                <header>

                </header>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        autoplay
                        dots={false}
                        style={{backgroundColor:'#fff',height:'100%'}}
                    >
                        {
                            swipes.map((swipe,i)=>{
                                return(
                                    <a 
                                        key={i}
                                        href=""
                                        style={{ display: 'inline-block', width: '100%', height:'100%'}}
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
                                    </a>
                                            
                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
                {/* <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                        <Card.Body>
                            <img style={{ width: '100%', height: '40%' }} src="http://image.wufazhuce.com/Flu8GFwiLkaGBaTw7bFDZ36j1E_I" alt="" />
                        </Card.Body>
                        <Card.Footer extra={<div>摄影 | Matthew Henry</div>} />
                        <Card.Header
                            style={{ fontSize: '17px', lineHeight: 2 }}
                            title="这世上有成千上万种爱, 但从来没有一种爱可以重来。"
                        />
                        <Card.Footer extra={<div>菲茨杰拉德</div>} />
                    </Card>
                </div> */}
            </div>
        )
    }
}
