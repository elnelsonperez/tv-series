import React, {useEffect} from 'react';
import store, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import {getPath} from "./router-paths";

//Routes
import Home from "./routes/Home";
import TvDetail from "./routes/TvDetail";
import MovieDetail from "./routes/MovieDetail";

import {Provider, useDispatch} from "react-redux";
import {ConfigContext} from "./shared/hooks/config-context";
import {useStoreSelector} from "./shared/hooks/use-store-selector";
import {fetchConfigurationAction} from "./features/configuration/actions";
import {fetchMovieGenresAction, fetchTvGenresAction} from "./features/genres/actions";
import {Configuration} from "./features/configuration/models";

import '@fortawesome/fontawesome-free/css/all.css'

import TvShows from "./routes/TvShows";
import Movies from "./routes/Movies";

const AppWithConfig = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        //Every component needs this
        dispatch(fetchConfigurationAction.request())
        dispatch(fetchTvGenresAction.request())
        dispatch(fetchMovieGenresAction.request())
    }, [dispatch])

    const configuration = useStoreSelector<Configuration>(state => state.configuration.data)
    return (
        <ConfigContext.Provider value={configuration}>
            <Route exact path={getPath('home')} render={Home} />
            <Route exact path={getPath('tvShows')} render={TvShows} />
            <Route exact path={getPath('movies')} render={Movies} />
            <Route exact
                   path={getPath('tvShowDetail', ':tvShowId')}
                   render={props => <TvDetail {...props}/>} />
                   <Route exact
                   path={getPath('movieDetail', ':movieId')}
                   render={props => <MovieDetail {...props}/>} />
        </ConfigContext.Provider>
    )
}

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <AppWithConfig/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
