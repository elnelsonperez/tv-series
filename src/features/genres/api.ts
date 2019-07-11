import http from '../../services/http-client'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import { Genre, GenreResponse} from "Models";
import {ResourceType} from "../../shared/api/enums";

export function getGenres (type: ResourceType): Observable<Genre[]> {
    return http.get<GenreResponse>('genre/' + type + '/list').pipe(
        map(result => {
            return result.data.genres;
        })
    );
}
