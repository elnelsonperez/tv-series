import * as logger from './logger-service';
import * as topTv from '../features/tv/tv-top/api'
import * as configuration from '../features/configuration/api'
import * as genres from '../features/genres/api'

export default {
  logger,
  api: {
    topTv,
    configuration,
    genres
  }
};
