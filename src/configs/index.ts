import * as dotenv from 'dotenv';
import { Config } from './types';

dotenv.config({
  path: process.env.ENV_FILE,
});

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.API_URL || '',
};
