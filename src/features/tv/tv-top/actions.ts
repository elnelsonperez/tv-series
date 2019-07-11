import { createAsyncAction } from 'typesafe-actions';
import * as Models from "Models";
import {AxiosResponse} from "axios";

export const fetchTopTvAction = createAsyncAction(
    '[Top Movies] Request',
    '[Top Movies] Request Success',
    '[Top Movies] Request Failure'
)<undefined, Models.TvListObject[], AxiosResponse<Models.ApiError>>();
