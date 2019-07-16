import * as React from "react";
import {Boundary, Card, Elevation, OverflowList, Tag} from "@blueprintjs/core";
import {ConfigContext} from '../../../../shared/hooks/config-context';
import {RouteComponentProps, withRouter} from "react-router";
import {getPath} from "../../../../router-paths";
import PosterImage from "../PosterImage";
import {PosterSizes} from "../../../../shared/api/enums";
import styles from './TvShowCard.module.scss'
import {useContext} from "react";
import {useStoreSelector} from "../../../../shared/hooks/use-store-selector";
import {Genre} from "../../../genres/models";
import {TvListObject} from "../../models";

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

    const config = useContext(ConfigContext);
    const genresById = useStoreSelector(state => state.genres.data.tv.byId);

    let genres: Genre[] = [];
    if (genresById) {
        genres = tvShow.genre_ids
            .map(id => genresById[id] ? genresById[id] : null)
            .filter(i => i !== null) as Genre[]
    }

    if (config && config.images) {
        return <Card elevation={Elevation.TWO}
              style={{width: widths[posterSize]}} >
            <div className={styles.cardBody}>
                <div className={styles.image} onClick={handleClick}>
                    <PosterImage size={posterSize} entityWithPoster={tvShow} baseUrl={config.images.base_url}/>
                </div>
                <div className={styles.title}>
                    <b>{tvShow.name}</b>
                </div>
                <div className={styles.rating}>
                   <b>{tvShow.vote_average * 10}%</b> &nbsp;
                    {tvShow.vote_average > 6.5 ?
                        <i style={{color: '#ff6c00'}} className={'fas fa-star'}/> :
                        <i style={{color: '#9c1d14'}} className={'fas fa-bomb'}/> }
                </div>
                <div className={styles.categories}>
                    <OverflowList items={genres}
                                  collapseFrom={Boundary.END}
                                  visibleItemRenderer={g => <Tag key={g.id} style={{marginRight: 5}}>{g.name}</Tag>}
                                  overflowRenderer={items => <Tag><span style={{fontWeight: 500}}>...</span></Tag>}
                    />
                </div>
            </div>
        </Card>
    }
    return null;
}

const TvShowCardWithRouter = withRouter(TvCard);
export {TvShowCardWithRouter as TvShowCard}
