import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import topTv from '../features/top-tv/reducer';

const rootReducer = (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
        tv: combineReducers({topTv})}
    )
};

export default rootReducer;
