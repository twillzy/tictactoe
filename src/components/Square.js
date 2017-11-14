import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Square;
