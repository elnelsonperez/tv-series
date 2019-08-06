import { routerActions } from  'connected-react-router';
import * as tv from '../features/tv/actions'
import * as movies from '../features/movie/actions'
import * as configuration from './../features/configuration/actions'
import * as genres from './../features/genres/actions'

export default {
  router: routerActions,
  tv,
  movies,
  configuration,
  genres
};
