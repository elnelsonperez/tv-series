import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ResourceType} from "../../shared/api/enums";
import {SearchResult} from "./types";

export function getSearchResults<T> (query: string, type: ResourceType, page: number = 1): Observable<T[]> {
    return http.get<SearchResult<T>>('/search/' + type, {params: {query, page}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
