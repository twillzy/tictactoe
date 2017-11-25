import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ onClick, value }) => (
  <button onClick={onClick} className="square" disabled={value !== ''}>
    {value}
  </button>);

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Square;
