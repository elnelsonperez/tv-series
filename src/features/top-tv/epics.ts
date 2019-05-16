import {loadTopTvAsync} from "./actions";
import { RootEpic } from 'MyTypes';
import {isActionOf} from "typesafe-actions";
import { of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadTopTvEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(loadTopTvAsync.request)),
        switchMap(() => {
            return api.topTv.loadTopTvShows().pipe(
                map(loadTopTvAsync.success),
                catchError(error => {
                    return of(loadTopTvAsync.failure(error.response))
                })
            )}
        )
    )
}
