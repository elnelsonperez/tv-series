
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TvListObject} from "../models";
import {fetchAiringTodayTvAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchAiringTodayTvAction.request, (state, action) => true)
        .handleAction([fetchAiringTodayTvAction.failure, fetchAiringTodayTvAction.success], (state, action) => false),
    data: createReducer([] as TvListObject[])
        .handleAction(fetchAiringTodayTvAction.success, (state, action) => action.payload)
});

export default reducer;
