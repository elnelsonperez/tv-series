import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import {createBrowserHistory} from "history";
import rootReducer from './root-reducer';
import services from '../services';
import {createEpicMiddleware} from "redux-observable";
import { RootAction, RootState, Services } from 'MyTypes';
// import rootEpic from './root-epic';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
  >({
  dependencies: services,
});

export const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), epicMiddleware];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const initialState = {};

// create store
const store = createStore(
  rootReducer(history),
  initialState,
  enhancer
);

// epicMiddleware.run(rootEpic);

export default store;