import { combineEpics } from 'redux-observable';

import * as topTv from '../features/tv/tv-top/epics';
import * as configuration from '../features/configuration/epics';
import * as genres from '../features/genres/epics';

export default combineEpics(
    ...Object.values(topTv),
    ...Object.values(configuration),
    ...Object.values(genres),
);
