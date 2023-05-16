import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, className }) => (
  <button type="button" className={className}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
