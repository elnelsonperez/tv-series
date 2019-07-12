import {HasPosterPath} from "../../shared/models";
import {Genre} from "../genres/models";

export enum ListType {
    TOP_RATED = 'top_rated',
    POPULAR = 'popular',
    ON_THE_AIR = 'on_the_air',
    AIRING_TODAY = 'airing_today'
}

export interface ListObject extends HasPosterPath {
    original_name: string;
    genre_ids: number[];
    name: string;
    popularity: number;
    origin_country: string[];
    vote_count: number;
    first_air_date: string;
    backdrop_path: string;
    original_language: string;
    id: number;
    vote_average: number;
    overview: string;
}

interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface Season extends HasPosterPath {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    season_number: number;
}

export interface DetailObject extends HasPosterPath {
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: any;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}
