import * as React from "react";
import {MovieCard} from "../../../components/movie-card/MovieCard";
import styles from './MovieListComponent.module.scss'
import {PosterSizes} from "../../../../../shared/api/enums";
import {MovieListObject} from "../../../models";

export type TvListProps = {
    movieList: MovieListObject[]
}

export const MovieListComponent: React.FC<TvListProps> = props => {
    const movieList = props.movieList.map((movie, index) =>
        <div key={index} className={styles.item}>
            <MovieCard posterSize={PosterSizes.SMALL} movie={movie}/>
        </div>
    );
    return (
        <div className={styles.wrapper}>
            {movieList}
        </div>
    );
}
