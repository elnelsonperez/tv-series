import {useEffect, useState} from "react";
import {loadTvShowDetails} from "../api";
import * as React from "react";
import * as Models from "Models";
import {ConfigContext} from "../../../shared/context/config-context";

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
                    </div>: false}
                </ConfigContext.Consumer>

            </div>
        )
    }

    return null;
}


