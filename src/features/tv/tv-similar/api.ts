import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {TvListObject} from "../models";
import {Response} from "../../../shared/api/models";

export function fetchSimilarTv (tvId: string, page: number = 1): Observable<TvListObject[]> {
    return http.get<Response<TvListObject[]>>('tv/' + tvId + '/similar', {params: {page}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
