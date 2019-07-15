
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {TvListObject} from "../models";
import {fetchOnAirTvAction} from "../actions";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchOnAirTvAction.request, (state, action) => true)
        .handleAction([fetchOnAirTvAction.failure, fetchOnAirTvAction.success], (state, action) => false),
    data: createReducer([] as TvListObject[])
        .handleAction(fetchOnAirTvAction.success, (state, action) => action.payload)
});

export default reducer;
