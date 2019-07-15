
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TvListObject} from "../models";
import {fetchTopTvAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchTopTvAction.request, (state, action) => true)
        .handleAction([fetchTopTvAction.failure, fetchTopTvAction.success], (state, action) => false),
    data: createReducer([] as TvListObject[])
        .handleAction(fetchTopTvAction.success, (state, action) => action.payload)
});

export default reducer;
