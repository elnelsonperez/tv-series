import http from '../../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ListObject, ListType} from "../models";
import {Response} from "../../../shared/api/models";


export function getTvList (listType: ListType, page: number = 1): Observable<ListObject[]> {
    return http.get<Response<ListObject[]>>('tv/' + listType, {params: {page}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
export function getTopTvShows (page: number = 1): Observable<ListObject[]> {
    return getTvList(ListType.TOP_RATED, page);
}
