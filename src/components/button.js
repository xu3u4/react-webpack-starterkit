// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onCountUp: () => void,
  children: string
};

const Button = ({ onCountUp, children }: Props) => (
  <button onClick={onCountUp} className="simple_btn">
    {children}
  </button>
);

export default Button;
