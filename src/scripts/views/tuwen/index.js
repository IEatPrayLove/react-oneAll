
import { connect } from "react-redux";
import TuWenCard from '../../components/tuwuCard';
import Head from '../../components/head';
@connect(state => ({ ...state }))

export default class TuWen extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <Head title={this.props.match.params.word} />
                    <TuWenCard />
            </div>
            )
        }
}