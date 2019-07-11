import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import topTv from '../features/tv/tv-top/reducer';
import configuration from '../features/configuration/reducer';

const rootReducer = (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
        configuration,
        tv: combineReducers({topTv})}
    )
};

export default rootReducer;
