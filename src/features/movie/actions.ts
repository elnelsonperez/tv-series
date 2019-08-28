import { createAsyncAction } from 'typesafe-actions';
import {AxiosResponse} from "axios";
import {ApiError} from "../../shared/api/models";
import {MovieListObject} from "./models";

export const fetchNowPlayingMoviesAction = createAsyncAction(
    `[Now Playing Movies] Request`,
    `[Now Playing Movies] Request Success`,
    `[Now Playing Movies] Request Failure`
)<undefined, MovieListObject[], AxiosResponse<ApiError>>();

export const fetchTopRatedMoviesAction = createAsyncAction(
    `[Top Rated Movies] Request`,
    `[Top Rated Movies] Request Success`,
    `[Top Rated Movies] Request Failure`
)<undefined, MovieListObject[], AxiosResponse<ApiError>>();

export const fetchUpcomingMoviesAction = createAsyncAction(
    `[Upcoming Movies] Request`,
    `[Upcoming Movies] Request Success`,
    `[Upcoming Movies] Request Failure`
)<undefined, MovieListObject[], AxiosResponse<ApiError>>();

export const fetchPopularMoviesAction = createAsyncAction(
    `[Popular Movies] Request`,
    `[Popular Movies] Request Success`,
    `[Popular Movies] Request Failure`
)<undefined, MovieListObject[], AxiosResponse<ApiError>>();


export type FetchMoviesType = typeof fetchUpcomingMoviesAction
    | typeof fetchTopRatedMoviesAction | typeof fetchNowPlayingMoviesAction | typeof fetchPopularMoviesAction;
