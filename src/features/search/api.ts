import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {SearchResult} from "Models";
import {SearchEndpoints} from "../../shared/api/enums";

export function getSearchResults<T> (text: string, type: SearchEndpoints): Observable<T[]> {
    return http.get<SearchResult<T>>('/search/' + type, {params: {query: text}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
