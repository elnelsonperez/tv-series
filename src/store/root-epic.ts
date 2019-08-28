import { combineEpics } from 'redux-observable';

import * as tv from '../features/tv/epics';
import * as movies from '../features/movie/epics';
import * as configuration from '../features/configuration/epics';
import * as genres from '../features/genres/epics';

export default combineEpics(
    ...Object.values(configuration),
    ...Object.values(genres),
    ...Object.values(tv),
    ...Object.values(movies),
);
