import React from 'react';
import MainLayout from '../layouts/Main';

import {
    fetchPopularMoviesAction,
    fetchNowPlayingMoviesAction,
    fetchUpcomingMoviesAction,
    fetchTopRatedMoviesAction,
} from "../features/movie/actions";

import {MovieListType} from "../features/movie/models";
import MovieSearchComponent from "../features/search/components/MovieSearchComponent";
import GenericConnectedMovieList from "../features/movie/components/GenericConnectedMovieList";

export default () => {
    return (
        <MainLayout>
            <h1>Search Movies</h1>
            <MovieSearchComponent/>
            <h1>Top Rated Movies</h1>
            <GenericConnectedMovieList movieActions={fetchTopRatedMoviesAction} movieListType={MovieListType.TOP_RATED} />
            <h1>Popular Movies</h1>
            <GenericConnectedMovieList movieActions={fetchPopularMoviesAction} movieListType={MovieListType.POPULAR} />
            <h1>Now Playing Movies</h1>
            <GenericConnectedMovieList movieActions={fetchNowPlayingMoviesAction} movieListType={MovieListType.NOW_PLAYING} />
            <h1>Upcoming Movies</h1>
            <GenericConnectedMovieList movieActions={fetchUpcomingMoviesAction} movieListType={MovieListType.UPCOMING} />
        </MainLayout>
    );
}

