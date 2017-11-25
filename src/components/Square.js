import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick, disabled }) => (
  <button onClick={onClick} className="square" disabled={disabled}>
    {value}
  </button>
);

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Square;
