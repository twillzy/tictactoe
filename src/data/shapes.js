import PropTypes from 'prop-types';

export const square = PropTypes.string;
export const boardShape = PropTypes.arrayOf(square);

export default {
  square,
  boardShape,
};
