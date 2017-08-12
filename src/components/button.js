import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onCountUp, children }) => <button onClick={onCountUp} className="simple_btn">{children}</button>;

Button.propTypes = {
  onCountUp: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
