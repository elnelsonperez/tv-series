import * as React from "react";
import {Card, Elevation} from "@blueprintjs/core";
import {TvListObject} from "Models";
import {ConfigContext} from '../../../../shared/context/config-context';
import {RouteComponentProps, withRouter} from "react-router";
import {getPath} from "../../../../router-paths";
import PosterImage from "../poster-image/PosterImage";
import {PosterSizes} from "../../../../shared/api/enums";
import styles from './TvShowCard.module.scss'

type Props = RouteComponentProps & {
    tvShow: TvListObject;
    posterSize: PosterSizes
}

const widths: { [key in PosterSizes]?: number } = {
    [PosterSizes.SMALL]: 240,
    [PosterSizes.MEDIUM]: 340
}

const TvCard: React.FC<Props> = props => {
    const {tvShow, posterSize} = props

    const handleClick = () => {
        props.history.push(getPath('tvShowDetails', tvShow.id.toString()))
    }

    return (
        <ConfigContext.Consumer>
            {(config) => config ? <Card interactive={true} elevation={Elevation.ONE} onClick={handleClick}
                                        style={{width: widths[posterSize]}} >
                <div className={styles.cardBody}>
                    <div className={styles.title}>
                        {tvShow.name}
                    </div>
                    <div className={styles.image}>
                        <PosterImage size={posterSize} entityWithPoster={tvShow} baseUrl={config.images.base_url}/>
                    </div>
                </div>
            </Card> : false
            }
        </ConfigContext.Consumer>
    )
}

const TvShowCardWithRouter = withRouter(TvCard);
export {TvShowCardWithRouter as TvShowCard}
