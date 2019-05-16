import {loadTopTvAsync} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TopRatedTvShow} from "Models";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(loadTopTvAsync.request, (state, action) => true)
        .handleAction([loadTopTvAsync.failure, loadTopTvAsync.success], (state, action) => false),
    topTvShows: createReducer([] as TopRatedTvShow[])
        .handleAction(loadTopTvAsync.success, (state, action) => action.payload)
});

export default reducer;
