import * as React from "react";
import {TvShowCard} from "../../../components/tv-card/TvShowCard";
import styles from './TvListComponent.module.scss'
import {PosterSizes} from "../../../../../shared/api/enums";
import {TvListObject} from "../../../models";

export type TvListProps = {
    tvList: TvListObject[]
}

export const TvListComponent: React.FC<TvListProps> = props => {
    const tvShowsList = props.tvList.map((tvShow, index) =>
        <div key={index} className={styles.item}>
            <TvShowCard posterSize={PosterSizes.SMALL} tvShow={tvShow}/>
        </div>
    );
    return (
        <div className={styles.wrapper}>
            {tvShowsList}
        </div>
    );
}
