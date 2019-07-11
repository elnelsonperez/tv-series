import {fetchMovieGenresAction, fetchTvGenresAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {Genre} from "Models";
import {convertToEntityState, EntityState, getDefaults} from "../../store/helpers";

const tvReducer = combineReducers({
    isTvLoading: createReducer(false as boolean)
        .handleAction(fetchTvGenresAction.request, (state, action) => true)
        .handleAction([fetchTvGenresAction.failure, fetchTvGenresAction.success], (state, action) => false),
    isMoviesLoading: createReducer(false as boolean)
        .handleAction(fetchMovieGenresAction.request, (state, action) => true)
        .handleAction([fetchMovieGenresAction.failure, fetchMovieGenresAction.success], (state, action) => false),
    data: combineReducers({
        tv: createReducer(getDefaults() as EntityState<Genre>).handleAction(fetchTvGenresAction.success, (state, action) => {
            return convertToEntityState<Genre>(state, action.payload)
        }),
        movies: createReducer(getDefaults() as EntityState<Genre>).handleAction(fetchTvGenresAction.success, (state, action) => {
            return convertToEntityState<Genre>(state, action.payload)
        }),
    })
});

export default tvReducer;
