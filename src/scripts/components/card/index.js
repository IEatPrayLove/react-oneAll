import { Card, WingBlank, WhiteSpace, List, Button } from 'antd-mobile';
import { connect } from "react-redux";
const Item = List.Item;
const Brief = Item.Brief;
import "@/styles/index.scss"
import { getWriter, getNewWriter } from "../../actions"
import { random } from 'node-forge';
@connect(state => ({ ...state }))
export default class MyCard extends Component {
    componentWillMount() {
        console.log(this.props);
        const { dispatch } = this.props;
        dispatch(getWriter({
            url: "/react/getWriter",
            params: {
                limit: 3
            },
        }))
    }
    componentDidUpdate() {

    }

    render() {
        const {
            cards,
            writer,
            dispatch
        } = this.props
        console.log(this.pro)
        return (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                {
                    cards.map((card, i) => {
                        return (
                            <Card key={i}>
                                {/* <Card.Header
                                // title="This is title"
                                // extra={<span>this is extra</span>}
                                /> */}
                                <Card.Body>
                                    <img src={card.path} alt="" style={{ width: '95%', height: '40%' }} onClick={this.toContent} />
                                </Card.Body>
                                <Card.Footer content={card.title} style={{ color: '#000', margin: "10px 0 10px 0" }} />
                            </Card>
                        )
                    })
                }
                <WhiteSpace size="lg" />
                <div style={{ marginBottom: "1rem", backgroundColor: '#fff' }}>
                    <div className="sub-title">近期热门作者</div>
                    {
                        writer.map((item, i) => {
                            return (
                                <List key={i}>
                                    <Item
                                        // style={{ }}
                                        arrow="horizontal"
                                        thumb={item.web_url}
                                        multipleLine
                                        onClick={() => { }}
                                    >
                                        {item.user_name} <Brief>{item.desc}</Brief>
                                    </Item>
                                </List>
                            )
                        })
                    }
                    <Button type="ghost" onClick={() => dispatch(getNewWriter({
                        url: "/react/getNewWriter",
                        params: {
                            limit: 3,
                            skip: 3
                        },
                    }))} size="small" inline style={{ margin: "20px 40%", border: "px solid #000", color: "#000" }}>换一换</Button>
                </div>
            </WingBlank>
        )
    }
}