import { createAsyncAction } from 'typesafe-actions';
import {AxiosResponse} from "axios";

import {Genre} from "./models";
import {ApiError} from "../../shared/api/models";

export const fetchTvGenresAction = createAsyncAction(
    '[TV Genres] Request',
    '[TV Genres] Request Success',
    '[TV Genres] Request Failure'
)<undefined, Genre[], AxiosResponse<ApiError>>();

export const fetchMovieGenresAction = createAsyncAction(
    '[Movie Genres] Request',
    '[Movie Genres] Request Success',
    '[Movie Genres] Request Failure'
)<undefined, Genre[], AxiosResponse<ApiError>>();
