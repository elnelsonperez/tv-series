import * as React from "react";
import {TvListObject} from "Models";
import {PosterSizes} from "../../../../shared/api/enums";

type Props = {
    baseUrl: string;
    tvShow: TvListObject;
    size?: PosterSizes
}

const PosterImage: React.FC<Props> = (props) => {
    const size = props.size ? props.size : PosterSizes.SMALL;

    if (props.tvShow.poster_path) {
        return (
            <img src={props.baseUrl+size+'/'+props.tvShow.poster_path} alt={'Poster'}/>
        )
    }
    return <div>
        <h4>No Poster</h4>
    </div>
}

export default PosterImage;
export {PosterImage}
