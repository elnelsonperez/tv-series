import { createAsyncAction } from 'typesafe-actions';
import * as Models from "Models";
import {AxiosResponse} from "axios";
import {Genre} from "Models";

export const fetchTvGenresAction = createAsyncAction(
    '[TV Genres] Request',
    '[TV Genres] Request Success',
    '[TV Genres] Request Failure'
)<undefined, Genre[], AxiosResponse<Models.ApiError>>();

export const fetchMovieGenresAction = createAsyncAction(
    '[Movie Genres] Request',
    '[Movie Genres] Request Success',
    '[Movie Genres] Request Failure'
)<undefined, Genre[], AxiosResponse<Models.ApiError>>();
