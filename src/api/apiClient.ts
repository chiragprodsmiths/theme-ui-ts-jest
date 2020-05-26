import { createClient, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { config } from 'configs';
import { NodeEnvironments } from 'configs/types';

const isDev = config.NODE_ENV === NodeEnvironments.DEVELOPMENT;

/**
 * devtools
 */
const devTools = isDev ? [devtoolsExchange] : [];

/**
 * exchanges
 */
const exchanges = [...devTools, ...defaultExchanges];

/**
 * client
 */
export const apiClient = createClient({ url: config.API_URL, exchanges });
