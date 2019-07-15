import * as React from "react";
import {TvListComponent} from "../../tv-list/components/tv-list-component/TvListComponent";
import {RootState} from 'GlobalTypes'

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {Spinner} from '@blueprintjs/core'

import {fetchTopTvAction} from "../actions";
import {ListObject} from "../../models";

const TopTvShowsComponent: React.FC = () => {
    const loading = useSelector<RootState, boolean>(state => state.tv.topTv.isLoading)
    const tvShowsData = useSelector<RootState, ListObject[]>(state => state.tv.topTv.topTvShows.slice(0,7))
    const dispatch = useDispatch()

    //Equivalent to componentDidMount
    useEffect(() => {
        if (isEmpty(tvShowsData))
            dispatch(fetchTopTvAction.request())
        // eslint-disable-next-line
    }, [])

    return (
        loading ? <Spinner intent={"primary"} /> : <TvListComponent tvList={tvShowsData} />
    )
}

export {TopTvShowsComponent}
export default TopTvShowsComponent;
