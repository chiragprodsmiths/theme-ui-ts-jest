import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import Login from '../index';
import { theme } from '../../../theme/index';

afterEach(cleanup);

describe('login form submit', () => {
  it('should submit when data filled', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    console.log(container);
    const submit = container.querySelector('button[(type = "submit")]');
    console.log(submit, container);
    expect(submit).toBeDefined();
    // await fireEvent.click(submit);
  });
});
