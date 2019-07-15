import { createAsyncAction } from 'typesafe-actions';
import {AxiosResponse} from "axios";
import {ApiError} from "../../shared/api/models";
import {TvListObject} from "./models";

export const fetchTopTvAction = createAsyncAction(
    `[Top Tv] Request`,
    `[Top Tv] Request Success`,
    `[Top Tv] Request Failure`
)<undefined, TvListObject[], AxiosResponse<ApiError>>();

export const fetchPopularTvAction = createAsyncAction(
    `[Popular Tv] Request`,
    `[Popular Tv] Request Success`,
    `[Popular Tv] Request Failure`
)<undefined, TvListObject[], AxiosResponse<ApiError>>();

export const fetchOnAirTvAction = createAsyncAction(
    `[On Air Tv] Request`,
    `[On Air Tv] Request Success`,
    `[On Air Tv] Request Failure`
)<undefined, TvListObject[], AxiosResponse<ApiError>>();

export const fetchAiringTodayTvAction = createAsyncAction(
    `[Airing Today Tv] Request`,
    `[Airing Today Tv] Request Success`,
    `[Airing Today Tv] Request Failure`
)<undefined, TvListObject[], AxiosResponse<ApiError>>();

export type FetchTvType = typeof fetchTopTvAction | typeof fetchPopularTvAction | typeof fetchOnAirTvAction | typeof fetchAiringTodayTvAction;
