import React from 'react';
import MainLayout from '../layouts/Main';
import {GenericConnectedTvList} from "../features/tv/components/GenericConnectedTvList";
import {TvSearchCompontent} from "../features/search/components/TvSearchComponent";
import {fetchPopularTvAction, fetchTopTvAction} from "../features/tv/actions";
import {TvListType} from "../features/tv/models";

export default () => {

    return (
        <MainLayout>
            <h1>Search TV Series</h1>
            <TvSearchCompontent/>
            <h1>Top TV Series</h1>
            <GenericConnectedTvList tvActions={fetchTopTvAction} tvListType={TvListType.TOP_RATED}/>
            <h1>Popular TV Series</h1>
            <GenericConnectedTvList tvActions={fetchPopularTvAction} tvListType={TvListType.POPULAR}/>
        </MainLayout>
    );
}

