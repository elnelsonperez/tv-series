declare module 'Models' {
    export interface Response<T> {
        page: number;
        results: T;
        total_results: number;
        total_pages: number;
    }
    
    export interface ApiError {
        status_code: number;
        status_message: string;
    }

    export interface TvListObject extends  HasPosterPath{
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
    
    export interface MovieListObject  extends  HasPosterPath{
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

    export interface HasPosterPath {
        poster_path: string;
    }

}

