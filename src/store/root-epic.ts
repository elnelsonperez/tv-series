import { combineEpics } from 'redux-observable';

import * as topTv from '../features/top-tv/epics';
import * as configuration from '../features/configuration/epics';

export default combineEpics(
    ...Object.values(topTv),
    ...Object.values(configuration),
    );
