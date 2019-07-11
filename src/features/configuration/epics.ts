import {fetchConfigurationAction} from "./actions";
import { RootEpic } from 'GlobalTypes';
import {isActionOf} from "typesafe-actions";
import { of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadConfigurationEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(fetchConfigurationAction.request)),
        switchMap(() => {
            return api.configuration.loadConfiguration().pipe(
                map(fetchConfigurationAction.success),
                catchError(error => {
                    return of(fetchConfigurationAction.failure(error.response))
                })
            )}
        )
    )
}
