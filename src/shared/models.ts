import {MovieListObject} from "../features/movie/models";
import {TvListObject} from "../features/tv/models";

export interface HasPosterPath {
    poster_path: string;
}

export type ResourceList = MovieListObject | TvListObject
