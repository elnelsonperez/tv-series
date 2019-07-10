import React from 'react';
import Main from '../layouts/Main';
import TopTvShowsComponent from '../features/tv-top/components/TopTvShowsComponent'
import {SearchType} from "../shared/api/enums";
import {GenericSearchComponent} from "../features/search/components/GenericSearchComponent";
import {MovieListObject, TvListObject} from "Models";

export default () => {

    return (
        <Main>
            <h1>Search TV</h1>
            <GenericSearchComponent<TvListObject> searchType={SearchType.TV}>
                { (state) => <div>Test<br/>
                    <ul>
                        {state.map(item => <li key={item.id}> {item.id} -  {item.name} - {item.vote_average}</li>)}
                    </ul>
                </div>}
            </GenericSearchComponent>

            <h1>Search Movies</h1>
            <GenericSearchComponent<MovieListObject> searchType={SearchType.MOVIES}>
                { (state) => <div>Test<br/>
                    <ul>
                        {state.map(item => <li key={item.id}> {item.id} -  {item.title} - {item.vote_average}</li>)}
                    </ul>
                </div>}
            </GenericSearchComponent>

            <h1>Top TV Series</h1>
            <TopTvShowsComponent />
        </Main>
    );
}

