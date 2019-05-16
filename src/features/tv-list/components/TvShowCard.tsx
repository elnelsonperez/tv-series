import * as React from "react";
import {Button, Card, Elevation} from "@blueprintjs/core";
import {TvListObject} from "Models";

type Props = {
    tvShow: TvListObject
}

export const TvShowCard: React.FC<Props> = props => {
    const {tvShow} = props

    return (
        <Card interactive={true} elevation={Elevation.ONE}>
            <h5>{tvShow.name}</h5>
            <p>{tvShow.overview}</p>
            {/*<p>Card content</p>*/}
            {/*<Button>Submit</Button>*/}
        </Card>
    );
}
