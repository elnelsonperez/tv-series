import { combineEpics } from 'redux-observable';

import * as topTv from '../features/tv-top/epics';
import * as configuration from '../features/configuration/epics';

export default combineEpics(
    ...Object.values(topTv),
    ...Object.values(configuration),
    );
