
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {MovieListObject} from "../models";
import {fetchNowPlayingMoviesAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchNowPlayingMoviesAction.request, (state, action) => true)
        .handleAction([fetchNowPlayingMoviesAction.failure, fetchNowPlayingMoviesAction.success], (state, action) => false),
    data: createReducer([] as MovieListObject[])
        .handleAction(fetchNowPlayingMoviesAction.success, (state, action) => action.payload)
});

export default reducer;
