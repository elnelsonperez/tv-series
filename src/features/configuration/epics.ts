import {loadConfigurationAsync} from "./actions";
import { RootEpic } from 'MyTypes';
import {isActionOf} from "typesafe-actions";
import { of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadConfigurationEpic: RootEpic = (action$, state$, { api }) => {
    return action$.pipe(
        filter(isActionOf(loadConfigurationAsync.request)),
        switchMap(() => {
            return api.configuration.loadConfiguration().pipe(
                map(loadConfigurationAsync.success),
                catchError(error => {
                    return of(loadConfigurationAsync.failure(error.response))
                })
            )}
        )
    )
}
