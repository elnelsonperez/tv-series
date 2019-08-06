import {Observable} from 'rxjs'
import {TvListObject, TvListType} from "../models";
import {getList} from "../../../shared/api/generic-list-api";
import {ResourceEndpoint} from "../../../shared/api/enums";

export function getTvList (listType: TvListType, page: number = 1) {
    return getList<TvListObject, TvListType>(ResourceEndpoint.TV, listType, page);
}

export function getTopTvShows (page: number = 1): Observable<TvListObject[]> {
    return getTvList(TvListType.TOP_RATED, page);
}
