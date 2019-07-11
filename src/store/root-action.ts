import { routerActions } from  'connected-react-router';
import * as toptv from '../features/tv/tv-top/actions'
import * as configuration from './../features/configuration/actions'
import * as genres from './../features/genres/actions'

export default {
  router: routerActions,
  toptv: toptv,
  configuration,
  genres
};
