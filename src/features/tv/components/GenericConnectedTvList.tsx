import * as React from "react";

import {RootState} from 'GlobalTypes'

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {Spinner} from '@blueprintjs/core'
import {TvListObject, TvListType} from "../models";
import {TvListComponent} from "../tv-list/components/tv-list-component/TvListComponent";
import {FetchTvType} from "../actions";

interface Props {
    tvActions: FetchTvType,
    tvListType: TvListType
}

const GenericConnectedTvList: React.FC<Props> = (props) => {
        const loading = useSelector<RootState, boolean>((state: any) => state.tv[props.tvListType].data.isLoading)
        const tvList = useSelector<RootState, TvListObject[]>((state: any) => state.tv[props.tvListType].data.slice(0,7))
        const dispatch = useDispatch()

        //Equivalent to componentDidMount
        useEffect(() => {
            if (isEmpty(tvList))
                dispatch(props.tvActions.request())
            // eslint-disable-next-line
        }, [])

        return (
            loading ? <Spinner intent={"primary"} /> : <TvListComponent tvList={tvList} />
        )
}

export {GenericConnectedTvList}
export default GenericConnectedTvList;
