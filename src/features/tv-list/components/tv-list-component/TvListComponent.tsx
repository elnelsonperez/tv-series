import * as React from "react";
import {TvListObject} from "Models";
import {TvShowCard} from "../TvShowCard";
import './styles.scss'

export type TvListProps = {
    tvList: TvListObject[]
}

export const TvListComponent: React.FC<TvListProps> = props => {
    console.log(props)
    const tvShowsList = props.tvList.map((tvShow, index) =>
        <div key={index} className={'tv-list-item'}>
            <TvShowCard tvShow={tvShow}/>
        </div>
    );
    return (
        <div className={'tv-list-wrapper'}>
            {tvShowsList}
        </div>
    );
}
