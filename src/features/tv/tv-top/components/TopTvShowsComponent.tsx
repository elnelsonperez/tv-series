import * as React from "react";
import {TvListComponent} from "../../tv-list/components/tv-list-component/TvListComponent";
import {RootState} from 'MyTypes'
import {loadTopTvAsync} from "../actions";
import {useEffect} from "react";
import {connect} from "react-redux";
import {isEmpty} from "lodash";
import {Spinner} from '@blueprintjs/core'
import {withConfigContextProvider} from "../../../../shared/context/config-context";

const mapStateToProps = (state: RootState) => ({
    loading: state.tv.topTv.isLoading,
    tvShowsData: state.tv.topTv.topTvShows.slice(0,7)
});

const dispatchProps = {
    loadTopTvShows: loadTopTvAsync.request
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const TopTvShowsComponent: React.FC<Props> = props => {

    //Equivalent to componentDidMount
    useEffect(() => {
        if (isEmpty(props.tvShowsData))
            props.loadTopTvShows()
        // eslint-disable-next-line
    }, [])

    return (
        props.loading ? <Spinner intent={"primary"} /> : <TvListComponent tvList={props.tvShowsData} />
    )
}

const ConnectedTopTvShowsComponent = connect(
    mapStateToProps,
    dispatchProps
)(TopTvShowsComponent);

export default withConfigContextProvider(ConnectedTopTvShowsComponent);
