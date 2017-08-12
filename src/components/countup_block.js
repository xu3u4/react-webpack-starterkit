import React from 'react';
import PropTypes from 'prop-types';

import DisplayNum from './display_num';
import Button from './button';

const CountupBlock = ({ number, countUp }) => (
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

CountupBlock.propTypes = {
  number: PropTypes.number.isRequired,
  countUp: PropTypes.func.isRequired
};

export default CountupBlock;
