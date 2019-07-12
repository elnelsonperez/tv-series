import { createAsyncAction } from 'typesafe-actions';

import {AxiosResponse} from "axios";
import {ApiError} from "../../shared/api/models";
import {Configuration} from "./models";

export const fetchConfigurationAction = createAsyncAction(
    '[Configuration] Request',
    '[Configuration] Request Success',
    '[Configuration] Request Failure'
)<undefined, Configuration, AxiosResponse<ApiError>>();
