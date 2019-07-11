import http from '../../../services/http-client'
import * as Models from "Models";
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

export function loadTvShowDetails (id: string): Observable<Models.TvShowDetailObject> {
    return http.get<Models.TvShowDetailObject>('tv/' + id ).pipe(
        map(result => {
            return result.data;
        })
    );
}
