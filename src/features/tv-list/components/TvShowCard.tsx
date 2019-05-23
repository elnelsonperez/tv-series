import * as React from "react";
import {Card, Elevation, Icon} from "@blueprintjs/core";
import {TvListObject} from "Models";
import {ConfigContext} from '../../../shared/context/config-context';
import {withRouter, RouteComponentProps} from "react-router";
import {getPath} from "../../../router-paths";

type Props = RouteComponentProps & {
    tvShow: TvListObject
}

const TvCard: React.FC<Props> = props => {
    const {tvShow} = props

    const handleClick = () => {
        props.history.push(getPath('tvShowDetails', tvShow.id.toString()))
    }

    return (
        <ConfigContext.Consumer>
            { (config) => config ? <Card interactive={true} elevation={Elevation.ONE} onClick={handleClick}>
                <h5>{tvShow.name} - Rating: {tvShow.vote_average} <Icon icon={'clean'} color={'#ff6c00'}/> </h5>
                <img src={config.images.base_url+'w185/'+tvShow.poster_path} alt={'Poster'}/>
            </Card> : false
            }
        </ConfigContext.Consumer>
    );
}

const TvShowCardWithRouter = withRouter(TvCard);

export {TvShowCardWithRouter as TvShowCard}
