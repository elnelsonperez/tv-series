import * as React from "react";
import {Card, Elevation} from "@blueprintjs/core";
import {ConfigContext} from '../../../../shared/hooks/config-context';
import {RouteComponentProps, withRouter} from "react-router";
import {getPath} from "../../../../router-paths";
import PosterImage from "../../../../shared/components/PosterImage";
import {PosterSizes} from "../../../../shared/api/enums";
import styles from './MovieCard.module.scss'
import {useContext} from "react";
import {useStoreSelector} from "../../../../shared/hooks/use-store-selector";
import {Genre} from "../../../genres/models";
import GenreList from "../../../../shared/components/genre-list/GenreList";
import {MovieListObject} from "../../models";

type Props = RouteComponentProps & {
    movie: MovieListObject;
    posterSize: PosterSizes
}

const widths: { [key in PosterSizes]?: number } = {
    [PosterSizes.SMALL]: 240,
    [PosterSizes.MEDIUM]: 340
}

const MovieCard: React.FC<Props> = props => {
    const {movie, posterSize} = props

    const handleClick = () => {
        props.history.push(getPath('movieDetail', movie.id.toString()))
    }

    const config = useContext(ConfigContext);
    const genresById = useStoreSelector(state => state.genres.data.tv.byId);

    let genres: Genre[] = [];
    if (genresById) {
        genres = movie.genre_ids
            .map(id => genresById[id] ? genresById[id] : null)
            .filter(i => i !== null) as Genre[]
    }

    if (config && config.images) {
        return <Card elevation={Elevation.TWO}
                     interactive={true}
              style={{width: widths[posterSize]}} >
            <div className={styles.cardBody}>
                <div className={styles.image} onClick={handleClick}>
                    <PosterImage size={posterSize} entityWithPoster={movie} baseUrl={config.images.base_url}/>
                </div>
                <div className={styles.title}>
                    <b>{movie.title}</b>
                </div>
                <div className={styles.rating}>
                   <b>{movie.vote_average * 10}%</b> &nbsp;
                    {movie.vote_average > 6.5 ?
                        <i style={{color: '#ff6c00'}} className={'fas fa-star'}/> :
                        <i style={{color: '#9c1d14'}} className={'fas fa-bomb'}/> }
                </div>
                <GenreList genres={genres} />
            </div>
        </Card>
    }
    return null;
}

const MovieCardWithRouter = withRouter(MovieCard);
export {MovieCardWithRouter as MovieCard}
