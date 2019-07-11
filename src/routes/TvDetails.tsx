import React from 'react';
import Main from '../layouts/Main';
import {TvShowDetailsComponent} from "../features/tv/tv-details/components/TvShowDetailComponent";
import {match} from "react-router";

interface Props {
    match: match<{tvShowId: string}>
}
 const TvDetails: React.FC<Props> = (props) => (
    <Main>
        <h1>Details Route</h1>
        <TvShowDetailsComponent tvShowId={props.match.params.tvShowId} />
    </Main>
);

export default TvDetails;
