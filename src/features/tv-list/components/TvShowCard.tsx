import * as React from "react";
import {Button, Card, Elevation} from "@blueprintjs/core";
import {TvListObject} from "Models";
import ConfigContext from '../../../shared/context/config-context';

type Props = {
    tvShow: TvListObject
}

export const TvShowCard: React.FC<Props> = props => {
    const {tvShow} = props
    return (
        <ConfigContext.Consumer>
            { (config) => config ? <Card interactive={true} elevation={Elevation.ONE}>
                <h5>{tvShow.name}</h5>
                {/*<p>{tvShow.overview}</p>*/}
                <img src={config.images.base_url+'w185/'+tvShow.poster_path} alt={'Poster'}/>
                {/*<p>Card content</p>*/}
                {/*<Button>Submit</Button>*/}
            </Card> : false
            }
        </ConfigContext.Consumer>
    );
}
