import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {MovieDetailObject} from "../models";

export function fetchMovieDetails (id: string): Observable<MovieDetailObject> {
    return http.get<MovieDetailObject>('movie/' + id ).pipe(
        map(result => {
            return result.data;
        })
    );
}
