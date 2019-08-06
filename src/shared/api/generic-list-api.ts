
import http from "../../services/http-client";
import {Response} from "./models";
import {ResourceEndpoint} from "./enums";
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

export function getList<RType, LType> (resourceType: ResourceEndpoint, listType: LType, page: number = 1): Observable<RType[]> {
    return http.get<Response<RType[]>>(resourceType + '/' + listType, {params: {page}}).pipe(
        map(result => {
            return result.data.results;
        })
    );
}
