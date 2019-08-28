import * as logger from './logger-service';
import * as topTv from '../features/tv/tv-list/api'
import * as movies from '../features/movie/movie-list/api'
import * as configuration from '../features/configuration/api'
import * as genres from '../features/genres/api'

export default {
  logger,
  api: {
    topTv,
    movies,
    configuration,
    genres
  }
};
