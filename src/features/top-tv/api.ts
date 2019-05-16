import http from '../../services/http-client'
import * as Models from "Models";
import {Observable, from} from 'rxjs'
import {map} from 'rxjs/operators'
import {TopRatedTvShow} from "Models";

export function loadTopTvShows (): Observable<Models.TopRatedTvShow[]> {
    return from(http.get<Models.Response<TopRatedTvShow[]>>('tv/top_rated')).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
