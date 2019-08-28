import {MovieListObject} from "../features/movie/models";
import {TvListObject} from "../features/tv/models";

export interface HasPosterPath {
    poster_path: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export type ResourceList = MovieListObject | TvListObject
