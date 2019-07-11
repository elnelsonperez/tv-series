import {fetchMovieGenresAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {Genre} from "Models";

const tvReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchMovieGenresAction.request, (state, action) => true)
        .handleAction([fetchMovieGenresAction.failure, fetchMovieGenresAction.success], (state, action) => false),
    data: createReducer([] as Genre[])
        .handleAction(fetchMovieGenresAction.success, (state, action) => action.payload)
});

export default tvReducer;
