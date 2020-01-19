import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

import CountupBlock from 'components/countup_block';

describe('<CountupBlock>', () => {
  afterEach(cleanup);

  it ('click to change number', () => {
    const { container, getByText, getByTestId } = render(<CountupBlock />)
    expect(getByTestId('number_block').textContent).toEqual("0");
    fireEvent.click(getByText('Click'))
    expect(getByTestId('number_block').textContent).toEqual("1");
  });
});