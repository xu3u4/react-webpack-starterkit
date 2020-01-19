import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'

import DisplayNum from 'components/display_num';

describe ('<DisplayNum>', () => {
  it ('render components', () => {
    const content = 3
    const { getByTestId } = render(
      <DisplayNum
        number={content}
        highlightClass="highlight"
      />
    );
    expect(getByTestId('number_block').textContent).toEqual("3");
  });
});