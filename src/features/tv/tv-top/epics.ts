import {fetchTopTvAction} from "./actions";
import { RootEpic } from 'GlobalTypes';
import {isActionOf} from "typesafe-actions";
import { of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadTopTvEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(fetchTopTvAction.request)),
        switchMap(() => {
            return api.topTv.getTopTvShows().pipe(
                map(fetchTopTvAction.success),
                catchError(error => {
                    return of(fetchTopTvAction.failure(error.response))
                })
            )}
        )
    )
}
