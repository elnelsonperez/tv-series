import React from 'react';
import { Provider } from 'react-redux'
import store, {history} from "./store";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import {getPath} from "./router-paths";
import {loadConfigurationAsync} from "./features/configuration/actions";

//Routes
import Home from "./routes/Home";
import TvDetails from "./routes/TvDetails";
import {withConfigContextProvider} from "./shared/context/config-context";

const SwitchWithConfig = withConfigContextProvider(Switch);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SwitchWithConfig>
          <Route exact path={getPath('home')} render={Home} />
          <Route exact
                 path={getPath('tvShowDetails', ':tvShowId')}
                 render={props => <TvDetails {...props}/>} />
        </SwitchWithConfig>
      </ConnectedRouter>
    </Provider>
  );
}

//Every component needs this
store.dispatch(loadConfigurationAsync.request())

export default App;
