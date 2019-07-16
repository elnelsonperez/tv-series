import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {TvDetailObject} from "../models";

export function fetchTvDetails (id: string): Observable<TvDetailObject> {
    return http.get<TvDetailObject>('tv/' + id ).pipe(
        map(result => {
            return result.data;
        })
    );
}
