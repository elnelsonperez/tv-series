declare module 'Models' {
    export interface GenreResponse {
        genres: Genre[]
    }
    export interface Genre {
        id: number;
        name: string
    }

}
