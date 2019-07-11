import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import topTv from '../features/tv/tv-top/reducer';
import configuration from '../features/configuration/reducer';
import tv from '../features/genres/tv-reducer';
import movies from '../features/genres/movies-reducer';

const rootReducer = (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
        configuration,
        tv: combineReducers({topTv}),
        genres: combineReducers({tv, movies}),
    })
};

export default rootReducer;
