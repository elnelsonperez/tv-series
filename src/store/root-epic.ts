import { combineEpics } from 'redux-observable';

import * as topTvEpics from '../features/top-tv/epics';

export default combineEpics(...Object.values(topTvEpics));
