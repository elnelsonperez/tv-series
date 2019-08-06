import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import tvTop from '../features/tv/tv-top/reducer';
import tvPopular from '../features/tv/tv-popular/reducer';
import tvAiring from '../features/tv/tv-on-air/reducer';
import tvOnAir from '../features/tv/tv-airing/reducer';

import moviesPopular from '../features/movie/movie-popular/reducer';

import configuration from '../features/configuration/reducer';
import genres from '../features/genres/reducer';
import {TvListType} from "../features/tv/models";
import {MovieListType} from "../features/movie/models";

const rootReducer = (history: History<any>) => {
    return combineReducers({
        router: connectRouter(history),
        configuration,
        tv: combineReducers({
            [TvListType.TOP_RATED]: tvTop,
            [TvListType.POPULAR]: tvPopular,
            [TvListType.ON_THE_AIR]: tvOnAir,
            [TvListType.AIRING_TODAY]: tvAiring,
        }),
        movies: combineReducers({
            [MovieListType.POPULAR]: moviesPopular
        }),
        genres,
    })
};

export default rootReducer;
