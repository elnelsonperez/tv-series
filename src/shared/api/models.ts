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
