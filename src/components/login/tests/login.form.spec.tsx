/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import * as ThemeUI from 'theme-ui';
// import Login from '../index';
import { theme } from '../../../theme/index';
import Alerts from '../../alerts';

afterEach(cleanup);

const Div: React.FC = (props) => <div {...props} />;

describe('login form submit', () => {
  it('renders', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Alerts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly without theme ui', async () => {
    const { container } = render(<Alerts />);
    expect(container).toBeDefined();
  });

  it('renders throws default context error when used with theme ui', async () => {
    const { container } = render(
      <Div>
        <ThemeUI.ThemeProvider theme={theme}>
          <Alerts />
        </ThemeUI.ThemeProvider>
      </Div>,
    );
    expect(container).toBeDefined();
  });
});
