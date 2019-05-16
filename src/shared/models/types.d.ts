declare module 'Models' {
    export interface Response<T> {
        page: number;
        results: T;
        total_results: number;
        total_pages: number;
    }
}
