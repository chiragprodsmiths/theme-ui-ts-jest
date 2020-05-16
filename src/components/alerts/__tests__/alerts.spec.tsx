import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { render, fireEvent } from '@testing-library/react';
import { Alerts } from '../index';

it('renders', () => {
  const div = document.createElement('data-test-id');
  ReactDOM.render(<Alerts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
