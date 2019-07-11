import { createAsyncAction } from 'typesafe-actions';
import * as Models from "Models";
import {AxiosResponse} from "axios";

export const fetchConfigurationAction = createAsyncAction(
    '[Configuration] Request',
    '[Configuration] Request Success',
    '[Configuration] Request Failure'
)<undefined, Models.Configuration, AxiosResponse<Models.ApiError>>();
