import * as React from "react";
import {TvListComponent} from "../../tv-list/components/tv-list-component/TvListComponent";
import {RootState} from 'MyTypes'
import {loadTopTvAsync} from "../actions";
import {useEffect} from "react";
import {connect} from "react-redux";
import {Spinner} from '@blueprintjs/core'
import ConfigContext from "../../../shared/context/config-context";

const mapStateToProps = (state: RootState) => ({
    loading: state.tv.topTv.isLoading,
    tvShowsData: state.tv.topTv.topTvShows,
    configuration: state.configuration.data
});

const dispatchProps = {
    loadTopTvShows: loadTopTvAsync.request
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const TopTvShowsComponent: React.FC<Props> = props => {

    //Equivalent to componentDidMount
    useEffect(() => {
        props.loadTopTvShows()
        // eslint-disable-next-line
    }, [])

    return (
        props.loading ? <Spinner intent={"primary"} /> :
            <ConfigContext.Provider value={props.configuration}>
                <TvListComponent tvList={props.tvShowsData} />
            </ConfigContext.Provider>
    )
}

export default connect(
    mapStateToProps,
    dispatchProps
)(TopTvShowsComponent)
