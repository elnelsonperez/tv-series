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

    export interface Configuration {
        images: {
            base_url: string;
            secure_base_url: string;
            backdrop_sizes: string[];
            logo_sizes: string[];
            poster_sizes: string[];
            profile_sizes: string[];
            still_sizes: string[];
        };
        change_keys: string[];
    }

    export interface TvListObject {
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
        poster_path: string;
    }
    
    export interface MovieListObject {
        poster_path: string;
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
}

