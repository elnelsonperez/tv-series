import {loadConfigurationAsync} from './actions'
import {combineReducers} from "redux";
import {createReducer} from "typesafe-actions";
import {Configuration} from "Models";

const reducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(loadConfigurationAsync.request, (state, action) => true)
        .handleAction([loadConfigurationAsync.failure, loadConfigurationAsync.success], (state, action) => false),
    data: createReducer({} as Configuration)
        .handleAction(loadConfigurationAsync.success, (state, action) => action.payload)
});

export default reducer;
