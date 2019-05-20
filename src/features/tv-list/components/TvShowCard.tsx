import * as React from "react";
import {Card, Elevation, Icon} from "@blueprintjs/core";
import {TvListObject} from "Models";
import {ConfigContext} from '../../../shared/context/config-context';

type Props = {
    tvShow: TvListObject
}

export const TvShowCard: React.FC<Props> = props => {
    const {tvShow} = props
    return (
        <ConfigContext.Consumer>
            { (config) => config ? <Card interactive={true} elevation={Elevation.ONE}>
                <h5>{tvShow.name} - Rating: {tvShow.vote_average} <Icon icon={'clean'} color={'#ff6c00'}/> </h5>
                <img src={config.images.base_url+'w185/'+tvShow.poster_path} alt={'Poster'}/>
            </Card> : false
            }
        </ConfigContext.Consumer>
    );
}
