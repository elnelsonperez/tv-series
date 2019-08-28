import * as React from "react";
import {RootState} from 'GlobalTypes'

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {Spinner} from '@blueprintjs/core'

import {FetchMoviesType} from "../actions";
import {MovieListObject, MovieListType} from "../models";
import {MovieListComponent} from "../movie-list/components/movies-list-component/MovieListComponent";

interface Props {
    movieActions: FetchMoviesType,
    movieListType: MovieListType,
    quantity?: number;
}

const GenericConnectedMovieList: React.FC<Props> = (props) => {
    const {quantity, movieListType} = props;
    const loading = useSelector<RootState, boolean>((state: any) => state.movies[movieListType].isLoading)
    const movieList = useSelector<RootState, MovieListObject[]>((state: any) => state.movies[movieListType].data.slice(0,quantity ? quantity : 7))
    const dispatch = useDispatch()

    //Equivalent to componentDidMount
    useEffect(() => {
        if (isEmpty(movieList))
            dispatch(props.movieActions.request())
        // eslint-disable-next-line
    }, [])

    return (
        loading ? <Spinner intent={"primary"} /> : <MovieListComponent movieList={movieList} />
    )
}

export {GenericConnectedMovieList}
export default GenericConnectedMovieList;
