import React from 'react';
import MainLayout from '../layouts/Main';
import {GenericConnectedTvList} from "../features/tv/components/GenericConnectedTvList";
import {TvSearchCompontent} from "../features/search/components/TvSearchComponent";
import {
    fetchAiringTodayTvAction,
    fetchOnAirTvAction,
    fetchPopularTvAction,
    fetchTopTvAction
} from "../features/tv/actions";
import {TvListType} from "../features/tv/models";

export default () => {

    return (
        <MainLayout>
            <h1>Search TV Series</h1>
            <TvSearchCompontent/>
            <h1>Top TV</h1>
            <GenericConnectedTvList tvActions={fetchTopTvAction} tvListType={TvListType.TOP_RATED} />
            <h1>Popular TV</h1>
            <GenericConnectedTvList tvActions={fetchPopularTvAction} tvListType={TvListType.POPULAR}/>
            <h1>On Air TV</h1>
            <GenericConnectedTvList tvActions={fetchOnAirTvAction} tvListType={TvListType.ON_THE_AIR}/>
            <h1>Airing Today TV</h1>
            <GenericConnectedTvList tvActions={fetchAiringTodayTvAction} tvListType={TvListType.AIRING_TODAY}/>
        </MainLayout>
    );
}

