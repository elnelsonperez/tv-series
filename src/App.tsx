import React from 'react';
import store, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import {getPath} from "./router-paths";
import './App.scss'

//Routes
import Home from "./routes/Home";
import TvDetails from "./routes/TvDetails";
import {Provider} from "react-redux";
import {ConfigContext} from "./shared/hooks/config-context";
import {Configuration} from "Models";
import {useStoreSelector} from "./shared/hooks/useStoreSelector";

const AppWithConfig = () => {
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
