import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {DetailObject} from "../models";

export function loadTvShowDetails (id: string): Observable<DetailObject> {
    return http.get<DetailObject>('tv/' + id ).pipe(
        map(result => {
            return result.data;
        })
    );
}
