import {fetchTvGenresAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {Genre} from "Models";

const tvReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchTvGenresAction.request, (state, action) => true)
        .handleAction([fetchTvGenresAction.failure, fetchTvGenresAction.success], (state, action) => false),
    data: createReducer([] as Genre[])
        .handleAction(fetchTvGenresAction.success, (state, action) => action.payload)
});

export default tvReducer;
