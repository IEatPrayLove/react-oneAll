import { Button, Card, CardContent, Avatar, CardHeader, CardFooter, Icon } from 'bee-mobile';
import { connect } from "react-redux";
@connect(state => ({ ...state }))
export default class TuWenCard extends Component {
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
                                    <Button flat={true}>Share</Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }

            </div>
        )
    }
}