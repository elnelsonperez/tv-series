import {RootEpic} from 'GlobalTypes';
import {isActionOf} from "typesafe-actions";
import {of} from 'rxjs';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {MovieListType} from "./models";

import {
    fetchPopularMoviesAction,
    fetchTopRatedMoviesAction,
    fetchUpcomingMoviesAction,
    fetchNowPlayingMoviesAction
} from "./actions";

const genericMovieEpicFactory = (actionBuilder: {request: any, success: any, failure: any}, type: MovieListType) => {
    const epic: RootEpic = (action$, state$, { api }) => {
        return action$.pipe(
            filter(isActionOf(actionBuilder.request)),
            switchMap(() => {
                return api.movies.getMovieList(type).pipe(
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

export const popularMoviesEpic: RootEpic = (action$, state$, services) => {
    return genericMovieEpicFactory(fetchPopularMoviesAction, MovieListType.POPULAR)(action$, state$, services);
}

export const topRatedMoviesEpic: RootEpic = (action$, state$, services) => {
    return genericMovieEpicFactory(fetchTopRatedMoviesAction, MovieListType.TOP_RATED)(action$, state$, services);
}

export const nowPlayingMoviesEpic: RootEpic = (action$, state$, services) => {
    return genericMovieEpicFactory(fetchNowPlayingMoviesAction, MovieListType.NOW_PLAYING)(action$, state$, services);
}

export const UpcomingMoviesEpic: RootEpic = (action$, state$, services) => {
    return genericMovieEpicFactory(fetchUpcomingMoviesAction, MovieListType.UPCOMING)(action$, state$, services);
}
