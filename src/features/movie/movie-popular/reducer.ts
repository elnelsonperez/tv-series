
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {MovieListObject} from "../models";
import {fetchPopularMoviesAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchPopularMoviesAction.request, (state, action) => true)
        .handleAction([fetchPopularMoviesAction.failure, fetchPopularMoviesAction.success], (state, action) => false),
    data: createReducer([] as MovieListObject[])
        .handleAction(fetchPopularMoviesAction.success, (state, action) => action.payload)
});

export default reducer;
