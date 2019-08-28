
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {MovieListObject} from "../models";
import {fetchUpcomingMoviesAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchUpcomingMoviesAction.request, (state, action) => true)
        .handleAction([fetchUpcomingMoviesAction.failure, fetchUpcomingMoviesAction.success], (state, action) => false),
    data: createReducer([] as MovieListObject[])
        .handleAction(fetchUpcomingMoviesAction.success, (state, action) => action.payload)
});

export default reducer;
