import http from '../../services/http-client'
import * as Models from "Models";
import {Observable, from} from 'rxjs'
import {map} from 'rxjs/operators'
import {Configuration} from "Models";

export function loadConfiguration (): Observable<Models.Configuration> {
    return from(http.get<Configuration>('configuration')).pipe(
        map(result => {
            return result.data;
        })
    );
}
