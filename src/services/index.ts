import * as logger from './logger-service';
import * as topTv from '../features/top-tv/api'
import * as configuration from '../features/configuration/api'

export default {
  logger,
  api: {
    topTv,
    configuration
  }
};
