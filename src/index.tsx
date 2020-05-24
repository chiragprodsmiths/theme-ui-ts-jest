import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createClient, Provider } from 'urql';
import { App } from './components/app/app';
import { config } from './configs';

/**
 * TODO: number of exchanges to configure
 */
const client = createClient({ url: config.NODE_ENV });

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
