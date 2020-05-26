import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/app/app';
import { apiClient } from './api/apiClient';

/**
 * TODO: number of exchanges to configure
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider value={apiClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
