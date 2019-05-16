declare module 'Models' {
    export interface TopRatedTvShow {
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
}
