import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {SearchResult} from "Models";
import {ResourceType} from "../../shared/api/enums";

export function getSearchResults<T> (text: string, type: ResourceType): Observable<T[]> {
    return http.get<SearchResult<T>>('/search/' + type, {params: {query: text}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
