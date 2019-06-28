import Head from '../../components/head';
export default class TuWen extends Component {
    render() {
        const { history } = this.props
        return (
            <div>
                <Head title={this.props.match.params.word} history={history} />
            </div>
        )
    }
}