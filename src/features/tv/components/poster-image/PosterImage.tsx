import * as React from "react";
import {PosterSizes} from "../../../../shared/api/enums";
import {HasPosterPath} from "../../../../shared/models";

type Props = {
    baseUrl: string;
    entityWithPoster: HasPosterPath;
    size?: PosterSizes
}

const PosterImage: React.FC<Props> = (props) => {
    const size = props.size ? props.size : PosterSizes.SMALL;

    if (props.entityWithPoster.poster_path) {
        return (
            <img src={props.baseUrl+size+'/'+props.entityWithPoster.poster_path} alt={'Poster'}/>
        )
    }
    return <div>
        <h4>No Poster</h4>
    </div>
}

export default PosterImage;
export {PosterImage}
