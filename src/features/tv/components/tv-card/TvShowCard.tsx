import * as React from "react";
import {Card, Elevation, Tag} from "@blueprintjs/core";
import {ConfigContext} from '../../../../shared/hooks/config-context';
import {RouteComponentProps, withRouter} from "react-router";
import {getPath} from "../../../../router-paths";
import PosterImage from "../poster-image/PosterImage";
import {PosterSizes} from "../../../../shared/api/enums";
import styles from './TvShowCard.module.scss'
import {useContext} from "react";
import {useStoreSelector} from "../../../../shared/hooks/useStoreSelector";
import {Genre} from "../../../genres/models";
import {ListObject} from "../../models";

type Props = RouteComponentProps & {
    tvShow: ListObject;
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

    const config = useContext(ConfigContext);
    const genresById = useStoreSelector(state => state.genres.data.tv.byId);

    let genres: Genre[] = [];
    if (genresById) {
        genres = tvShow.genre_ids
            .map(id => genresById[id] ? genresById[id] : null)
            .filter(i => i !== null) as Genre[]
    }

    if (config) {
        return <Card interactive={true} elevation={Elevation.ONE} onClick={handleClick}
              style={{width: widths[posterSize]}} >
            <div className={styles.cardBody}>
                <div className={styles.title}>
                    {tvShow.name}
                </div>
                <div className={styles.image}>
                    <PosterImage size={posterSize} entityWithPoster={tvShow} baseUrl={config.images.base_url}/>
                </div>
                <div className={styles.categories}>
                    {genres ? genres.map(g => <Tag key={g.id} style={{marginRight: 5}}>{g.name}</Tag>) : ''}
                </div>
            </div>
        </Card>
    }
    return null;
}

const TvShowCardWithRouter = withRouter(TvCard);
export {TvShowCardWithRouter as TvShowCard}
