import { StateType, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import {Services} from "MyTypes";

declare module 'MyTypes' {
  export type Store = StateType<typeof import('./index').default>;
  export type RootState = StateType<
    ReturnType<typeof import('./root-reducer').default>
  >;
  export type RootAction = ActionType<typeof import('./root-action').default>;

  export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}


declare module 'typesafe-actions' {
  import * as MyTypes from "MyTypes";

  interface Types {
    RootAction: MyTypes.RootAction;
  }
}

