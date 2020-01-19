import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

import Button from 'components/button';

describe ('<Button>', () => {
  const onclick = jest.fn();

  it ('should render button properly', () => {
    const value = 'Click';
    const { getByText } = render(
      <Button onClick={ onclick } >{ value }</Button>
    );

    expect(getByText(value)).toBeDefined()
  });

  it ('should render onClick when click', () => {
    const value = 'Click';
    const { getByText } = render(
      <Button onClick={ onclick } >{ value }</Button>
    );

    fireEvent.click(getByText('Click'))
    expect(onclick).toHaveBeenCalledTimes(1)
  });
});