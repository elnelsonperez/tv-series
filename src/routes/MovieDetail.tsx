import React from 'react';
import Main from '../layouts/Main';
import {match} from "react-router";

import 'animate.css/animate.css'
import {MovieDetailComponent} from "../features/movie/movie-details/components/MovieDetailComponent";

interface Props {
    match: match<{movieId: string}>
}
 const MovieDetail: React.FC<Props> = (props) => (
    <Main>
        <h1>Movie Details</h1>
        <MovieDetailComponent movieId={props.match.params.movieId} />
    </Main>
);

export default MovieDetail;
