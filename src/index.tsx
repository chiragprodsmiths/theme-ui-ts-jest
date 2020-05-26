import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { App } from 'components/app/app';
import { apiClient } from './api/apiClient';

/**
 * TODO: number of exchanges to configure
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider value={apiClient}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
