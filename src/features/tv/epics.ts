import {RootEpic} from 'GlobalTypes';
import {isActionOf} from "typesafe-actions";
import {of} from 'rxjs';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {TvListType} from "./models";
import {fetchAiringTodayTvAction, fetchOnAirTvAction, fetchPopularTvAction, fetchTopTvAction} from "./actions";

const genericTvEpicFactory = (actionBuilder: {request: any, success: any, failure: any}, type: TvListType) => {
    const epic: RootEpic = (action$, state$, { api }) => {
        return action$.pipe(
            filter(isActionOf(actionBuilder.request)),
            switchMap(() => {
                return api.topTv.getTvList(type).pipe(
                    map(actionBuilder.success),
                    catchError(error => {
                        return of(actionBuilder.failure(error.response))
                    })
                )}
            )
        )
    }
    return epic;
}

export const topTvEpic: RootEpic = (action$, state$, services) => {
    return genericTvEpicFactory(fetchTopTvAction, TvListType.TOP_RATED)(action$, state$, services);
}

export const popularTvEpic: RootEpic = (action$, state$, services) => {
    return genericTvEpicFactory(fetchPopularTvAction, TvListType.POPULAR)(action$, state$, services);
}

export const onTheAirTvEpic: RootEpic = (action$, state$, services) => {
    return genericTvEpicFactory(fetchOnAirTvAction, TvListType.ON_THE_AIR)(action$, state$, services);
}

export const airingTvEpic: RootEpic = (action$, state$, services) => {
    return genericTvEpicFactory(fetchAiringTodayTvAction, TvListType.AIRING_TODAY)(action$, state$, services);
}
