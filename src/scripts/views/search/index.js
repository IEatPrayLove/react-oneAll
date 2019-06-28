import { SearchBar, WhiteSpace,Card ,List,NavBar,Icon} from 'antd-mobile';
// import { Card, WingBlank, WhiteSpace, List, Button } from 'antd-mobile';
import {connect} from "react-redux";
import {searchWriter} from "@/scripts/actions";
const Item = List.Item;
const Brief = Item.Brief;
@connect(state=>({...state}))
export default class Search extends Component {
    onLeft = () => {
        console.log(this.props)
        const{
            history
        }=this.props
        history.goBack();
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        const{
            dispatch,
            searchResult,
            history
        }=this.props
        console.log(this.props)
        return (
            <div>
                 <NavBar
                style={{ color: '#666' }}
                mode="light"
                icon={<Icon type="left" style={{ color: '#666' }} />}
                onClick={this.onLeft}
                // rightContent={[
                //     <Icon key="0" type="search" onClick={(e) => this.goSearch(e)} style={{ color: '#666' }} />,
                // ]}
            >搜索</NavBar>
                <SearchBar placeholder="在这里写下你想寻找的" ref={ref => this.autoFocusInst = ref}
                    /* onSubmit */onChange={(value)=>dispatch(searchWriter({
                        url:"/react/getWriterData",
                        params:{
                            value
                        },
                    }))}
                />
                <WhiteSpace size="lg" />
                <div style={{ marginBottom: "1rem", backgroundColor: '#fff' }}>
                    {
                        searchResult.map((item, i) => {
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
                    </div>
            </div>  
        )
    }
}