import * as logger from './logger-service';
import * as topTv from '../features/tv/tv-top/api'
import * as configuration from '../features/configuration/api'

export default {
  logger,
  api: {
    topTv,
    configuration
  }
};
