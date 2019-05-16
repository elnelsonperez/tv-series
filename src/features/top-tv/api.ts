import http from '../../services/http-client'
import * as Models from "Models";
import {Observable, from} from 'rxjs'
import {map} from 'rxjs/operators'
import {TvListObject} from "Models";

export function loadTopTvShows (): Observable<Models.TvListObject[]> {
    return from(http.get<Models.Response<TvListObject[]>>('tv/top_rated')).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
