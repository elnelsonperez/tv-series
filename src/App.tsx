import React, {useEffect} from 'react';
import store, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import {getPath} from "./router-paths";

//Routes
import Home from "./routes/Home";
import TvDetails from "./routes/TvDetails";
import {Provider, useDispatch} from "react-redux";
import {ConfigContext} from "./shared/hooks/config-context";
import {useStoreSelector} from "./shared/hooks/use-store-selector";
import {fetchConfigurationAction} from "./features/configuration/actions";
import {fetchMovieGenresAction, fetchTvGenresAction} from "./features/genres/actions";
import {Configuration} from "./features/configuration/models";

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
            <Route exact
                   path={getPath('tvShowDetails', ':tvShowId')}
                   render={props => <TvDetails {...props}/>} />
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
