import * as React from "react";
import {GenericSearchComponent} from "./GenericSearchComponent";

import {ResourceEndpoint} from "../../../shared/api/enums";
import {MovieListObject} from "../../movie/models";
import {MovieListComponent} from "../../movie/movie-list/components/movies-list-component/MovieListComponent";

const MovieSearchComponent: React.FC = (props) => {
    return (
        <GenericSearchComponent<MovieListObject> endpoint={ResourceEndpoint.MOVIES}>
            { (movieList) => <MovieListComponent movieList={movieList} /> }
        </GenericSearchComponent>
    );
}

export default MovieSearchComponent;
export {MovieSearchComponent};
