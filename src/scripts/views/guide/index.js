

import "./guide.scss";
import Swipe from "../../components/swipe";
import { connect } from "react-redux"


const Item = Swipe.item;

@connect(state => ({ ...state }))
export class Guide extends Component {

    gotoApp(id) {
        const { imgs, history } = this.props;
        if (id == imgs.length - 1) {
            history.push("/app/one");
        }
    }

    render() {
        const {
            imgs
        } = this.props;
        console.log(this.props)
        return (

            <Swipe id="guide" options={{ autoplay: true, speed: 1000, loop: false }}>
                {
                    imgs.map((item, id) => {
                        return (

                            <Item key={id}>
                                <img src={item} alt="" className="g-img" onClick={() => this.gotoApp(id)} />
                            </Item>

                        )
                    })
                }
            </Swipe>

        )
    }
}