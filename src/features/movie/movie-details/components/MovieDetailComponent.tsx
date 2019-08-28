import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {fetchMovieDetails} from "../api";
import {ConfigContext} from "../../../../shared/hooks/config-context";
import PosterImage from "../../../../shared/components/PosterImage";
import {isEmpty} from 'lodash';
import {MovieDetailObject} from "../../models";
import {finalize, tap} from 'rxjs/operators'
import {Spinner} from "@blueprintjs/core";
import {Animated} from "react-animated-css";
import {PosterSizes} from "../../../../shared/api/enums";

interface Props {
    movieId: string;
}

export const MovieDetailComponent: React.FC<Props> = (props) => {
    const [details, setDetails] = useState<MovieDetailObject | null>(null)
    const [loadingDetails, setLoadingDetails] = useState(true);

    const {movieId} = props;

    //Will only run once
    useEffect(() =>  {
        fetchMovieDetails(movieId).pipe(
            tap(() => setLoadingDetails(true)),
            finalize(() => setLoadingDetails(false))
        ).subscribe(setDetails)
    } , [movieId])

    const config = useContext(ConfigContext);
    let detailRender = null;

    if (details && config !== null && !isEmpty(config)) {
        detailRender = loadingDetails ?  <Spinner intent={"primary"} /> : <Animated animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={!loadingDetails}>
            <div>
                <h3>{details.title}</h3>
                <PosterImage entityWithPoster={details} baseUrl={config.images.base_url} size={PosterSizes.MEDIUM}/>
                <p>{details.overview}</p>
                <b>Budget:</b> {details.budget} <br/>
                <b>Revenue:</b>  {details.revenue}
            </div>
            </Animated>
    }

    return (
        <div>
            {detailRender}
        </div>
    );

}


