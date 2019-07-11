import {useEffect, useState} from "react";
import {loadTvShowDetails} from "../api";
import * as React from "react";
import * as Models from "Models";
import {ConfigContext} from "../../../../shared/context/config-context";
import PosterImage from "../../components/poster-image/PosterImage";

interface Props {
    tvShowId: string;
}

export const TvShowDetailsComponent: React.FC<Props> = (props) => {
    const [details, setDetails] = useState<Models.TvShowDetailObject | null>(null)

    const tvShowId = props.tvShowId;

    //Will only run once
    useEffect(() =>  {
        loadTvShowDetails(tvShowId).subscribe(setDetails)
        // eslint-disable-next-line
    } , [])

    if (details) {
        return (
            <div>
                <ConfigContext.Consumer>
                    {config => config ? <div>
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
                    </div>: false}
                </ConfigContext.Consumer>
            </div>
        )
    }

    return null;
}


