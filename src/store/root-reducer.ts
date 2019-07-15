import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import tvTop from '../features/tv/tv-top/reducer';
import tvPopular from '../features/tv/tv-popular/reducer';
import configuration from '../features/configuration/reducer';
import genres from '../features/genres/reducer';
import {TvListType} from "../features/tv/models";

const rootReducer = (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
        configuration,
        tv: combineReducers({
            [TvListType.TOP_RATED]: tvTop,
            [TvListType.POPULAR]: tvPopular
        }),
        genres,
    })
};

export default rootReducer;
