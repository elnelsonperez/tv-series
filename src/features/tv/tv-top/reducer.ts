import {fetchTopTvAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {ListObject} from "../models";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchTopTvAction.request, (state, action) => true)
        .handleAction([fetchTopTvAction.failure, fetchTopTvAction.success], (state, action) => false),
    topTvShows: createReducer([] as ListObject[])
        .handleAction(fetchTopTvAction.success, (state, action) => action.payload)
});

export default reducer;
