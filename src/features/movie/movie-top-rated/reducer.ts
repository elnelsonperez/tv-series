
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {MovieListObject} from "../models";
import {fetchTopRatedMoviesAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchTopRatedMoviesAction.request, (state, action) => true)
        .handleAction([fetchTopRatedMoviesAction.failure, fetchTopRatedMoviesAction.success], (state, action) => false),
    data: createReducer([] as MovieListObject[])
        .handleAction(fetchTopRatedMoviesAction.success, (state, action) => action.payload)
});

export default reducer;
