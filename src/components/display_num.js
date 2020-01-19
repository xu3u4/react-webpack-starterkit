import React from 'react';
import PropTypes from 'prop-types';

const DisplayNum = ({ number, highlightClass }) => (
  <div className={`number_block ${highlightClass}`} data-testid="number_block">
    {number}
  </div>
);

DisplayNum.propTypes = {
  number: PropTypes.number.isRequired,
  highlightClass: PropTypes.string.isRequired,
};

export default DisplayNum;
