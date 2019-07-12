import { createAsyncAction } from 'typesafe-actions';
import {AxiosResponse} from "axios";
import {ApiError} from "../../../shared/api/models";
import {ListObject} from "../models";

export const fetchTopTvAction = createAsyncAction(
    '[Top Movies] Request',
    '[Top Movies] Request Success',
    '[Top Movies] Request Failure'
)<undefined, ListObject[], AxiosResponse<ApiError>>();
