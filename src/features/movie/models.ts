import {HasPosterPath} from "../../shared/models";

export interface MovieListObject extends HasPosterPath {
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export enum MovieListType {
    TOP_RATED = 'top_rated',
    UPCOMING = 'upcoming',
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    LATEST = 'popular',
}


