import React from 'react';
import Main from '../layouts/Main';
import {TvShowDetailsComponent} from "../features/tv/tv-details/components/TvShowDetailComponent";
import {match} from "react-router";

import 'animate.css/animate.css'

interface Props {
    match: match<{tvShowId: string}>
}
 const TvDetail: React.FC<Props> = (props) => (
    <Main>
        <h1>Tv Show Details</h1>
        <TvShowDetailsComponent tvShowId={props.match.params.tvShowId} />
    </Main>
);

export default TvDetail;
