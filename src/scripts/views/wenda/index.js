import Head from "../../components/head";

export default class WenDa extends Component {
    render() {
        return (
            <div>
                <Head title={this.props.match.params.word} />
            </div>
        )
    }
}