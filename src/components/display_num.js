// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  number: number,
  highlightClass: string
};

const DisplayNum = ({ number, highlightClass }: Props) => (
  <div className={`number_block ${highlightClass}`}>{ number }</div>
);

export default DisplayNum;
