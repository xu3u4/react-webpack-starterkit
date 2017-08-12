import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import CountupBlock from 'components/countup_block';

describe ('<CountupBlock>', () => {
  let countupBlock;
  const onclick = sinon.stub(),
        number = 3;
  it ('render components', () => {
    countupBlock = renderer.create(
      <CountupBlock
        number={number}
        countUp={onclick}
      />
    );
    expect(countupBlock).toMatchSnapshot();
  });
});