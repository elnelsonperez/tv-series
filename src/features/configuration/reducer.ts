import {fetchConfigurationAction} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {Configuration} from "Models";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(fetchConfigurationAction.request, (state, action) => true)
        .handleAction([fetchConfigurationAction.failure, fetchConfigurationAction.success], (state, action) => false),
    data: createReducer({} as Configuration)
        .handleAction(fetchConfigurationAction.success, (state, action) => action.payload)
});

export default reducer;
