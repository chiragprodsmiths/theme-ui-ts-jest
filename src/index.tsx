import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'components/app/app';
import { apiClient } from './api/apiClient';

/**
 * TODO: number of exchanges to configure
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider value={apiClient}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
