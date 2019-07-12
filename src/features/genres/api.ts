import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ResourceType} from "../../shared/api/enums";
import {Genre, GenreResponse} from "./models";

export function getGenres (type: ResourceType, page: number = 1): Observable<Genre[]> {
    return http.get<GenreResponse>('genre/' + type + '/list', {params: {page}}).pipe(
        map(result => {
            return result.data.genres;
        })
    );
}
