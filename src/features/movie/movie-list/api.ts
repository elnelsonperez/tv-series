import {MovieListObject, MovieListType} from "../models";
import {getList} from "../../../shared/api/generic-list-api";
import {ResourceEndpoint} from "../../../shared/api/enums";

export function getMovieList (listType: MovieListType, page: number = 1) {
    return getList<MovieListObject, MovieListType> (ResourceEndpoint.MOVIES, listType, page)
}
