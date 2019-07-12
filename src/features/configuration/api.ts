import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {Configuration} from "./models";

export function loadConfiguration (): Observable<Configuration> {
    return http.get<Configuration>('configuration').pipe(
        map(result => {
            return result.data;
        })
    );
}
