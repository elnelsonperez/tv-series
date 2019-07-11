import React from 'react';
import MainLayout from '../layouts/Main';
import TopTvShowsComponent from '../features/tv/tv-top/components/TopTvShowsComponent'
import {TvSearchCompontent} from "../features/search/components/TvSearchComponent";

export default () => {

    return (
        <MainLayout>
            <h1>Search TV Series</h1>
            <TvSearchCompontent/>
            <h1>Top TV Series</h1>
            <TopTvShowsComponent />
        </MainLayout>
    );
}

