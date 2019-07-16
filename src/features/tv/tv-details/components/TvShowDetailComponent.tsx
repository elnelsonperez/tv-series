import {useContext, useEffect, useState} from "react";
import {fetchTvDetails} from "../api";
import * as React from "react";
import {ConfigContext} from "../../../../shared/hooks/config-context";
import PosterImage from "../../components/PosterImage";
import {isEmpty} from 'lodash';
import {TvDetailObject, TvListObject} from "../../models";
import {fetchSimilarTv} from "../../tv-similar/api";
import {TvListComponent} from "../../tv-list/components/tv-list-component/TvListComponent";
import {tap, finalize} from 'rxjs/operators'
import {Spinner} from "@blueprintjs/core";
import {Animated} from "react-animated-css";

interface Props {
    tvShowId: string;
}

export const TvShowDetailsComponent: React.FC<Props> = (props) => {
    const [details, setDetails] = useState<TvDetailObject | null>(null)
    const [similar, setSimilar] = useState<TvListObject[]>([])
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [loadingSimilar, setLoadignSimilar] = useState(true);

    const {tvShowId} = props;

    //Will only run once
    useEffect(() =>  {
        fetchTvDetails(tvShowId).pipe(
            tap(() => setLoadingDetails(true)),
            finalize(() => setLoadingDetails(false))
        ).subscribe(setDetails)

        fetchSimilarTv(tvShowId).pipe(
            tap(() => setLoadignSimilar(true)),
            finalize(() => setLoadignSimilar(false))
        ).subscribe(setSimilar)

        // eslint-disable-next-line
    } , [tvShowId])

    const config = useContext(ConfigContext);
    let detailRender = null;

    if (details && config !== null && !isEmpty(config)) {
        detailRender = loadingDetails ?  <Spinner intent={"primary"} /> : <Animated animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={!loadingDetails}>
            <div>
                <h3>{details.name}</h3>
                <img src={config.images.base_url+'w300/'+ details.poster_path} alt={'Poster'}/>
                <p>{details.overview}</p>
                <h3>Seasons</h3>
                <div style={{display: "flex"}}>
                    {
                        details.seasons.map(season => {
                            return <div style={{display: "inline-block", marginRight: '15px'}} key={season.id}><h4>{season.name}</h4>
                                <PosterImage baseUrl={config.images.base_url} entityWithPoster={season}/>
                            </div>
                        })
                    }
                </div>
            </div>
            </Animated>
    }

    return (
        <div>
            {detailRender}
            {
                loadingSimilar ?
                    <Spinner intent={"primary"} />
                    :
                    <Animated animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={!loadingSimilar}>
                        <h3>Similar TV Shows</h3>
                        <TvListComponent tvList={similar.slice(0,7)} />
                    </Animated>
            }
        </div>
    );

}


