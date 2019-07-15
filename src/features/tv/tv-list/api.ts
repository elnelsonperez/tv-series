import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {TvListObject, TvListType} from "../models";
import {Response} from "../../../shared/api/models";


export function getTvList (listType: TvListType, page: number = 1): Observable<TvListObject[]> {
    return http.get<Response<TvListObject[]>>('tv/' + listType, {params: {page}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
export function getTopTvShows (page: number = 1): Observable<TvListObject[]> {
    return getTvList(TvListType.TOP_RATED, page);
}
