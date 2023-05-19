import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, className, handleClick }) => (
  <button type="button" className={className} onClick={handleClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
