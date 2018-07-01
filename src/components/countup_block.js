// @flow
import React from 'react';
import PropTypes from 'prop-types';

import DisplayNum from './display_num';
import Button from './button';

type Props = {
  number: number,
  countUp: () => void
};

const CountupBlock = ({ number, countUp }: Props) => (
  <div className="countup">
    <DisplayNum
      number={number}
      highlightClass={number % 5 ? 'plain' : 'highlight'}
    />
    <Button onCountUp={() => countUp()}>
      Click
    </Button>
  </div>
);

export default CountupBlock;
