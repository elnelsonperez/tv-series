import {fetchMovieGenresAction, fetchTvGenresAction} from "./actions";
import {RootEpic} from 'GlobalTypes';
import {isActionOf} from "typesafe-actions";
import {of} from 'rxjs';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {ResourceType} from "../../shared/api/enums";

export const fetchTvGenresEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(fetchTvGenresAction.request)),
        switchMap(() => {
            return api.genres.getGenres(ResourceType.TV).pipe(
                map(fetchTvGenresAction.success),
                catchError(error => {
                    return of(fetchTvGenresAction.failure(error.response))
                })
            )}
        )
    )
}

export const fetchMovieGenresEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(fetchMovieGenresAction.request)),
        switchMap(() => {
            return api.genres.getGenres(ResourceType.MOVIES).pipe(
                map(fetchMovieGenresAction.success),
                catchError(error => {
                    return of(fetchMovieGenresAction.failure(error.response))
                })
            )}
        )
    )
}
