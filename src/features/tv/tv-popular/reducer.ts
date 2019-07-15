
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TvListObject} from "../models";
import {fetchPopularTvAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchPopularTvAction.request, (state, action) => true)
        .handleAction([fetchPopularTvAction.failure, fetchPopularTvAction.success], (state, action) => false),
    data: createReducer([] as TvListObject[])
        .handleAction(fetchPopularTvAction.success, (state, action) => action.payload)
});

export default reducer;
