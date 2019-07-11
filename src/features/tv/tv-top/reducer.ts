import {fetchTopTvAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TvListObject} from "Models";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchTopTvAction.request, (state, action) => true)
        .handleAction([fetchTopTvAction.failure, fetchTopTvAction.success], (state, action) => false),
    topTvShows: createReducer([] as TvListObject[])
        .handleAction(fetchTopTvAction.success, (state, action) => action.payload)
});

export default reducer;
