import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { boardShape } from '../data/shapes';

const Board = ({ board, onClick }) => {
  const renderSquare = i => <Square key={`cell-${i}`} value={board[i]} onClick={() => onClick(i)} />;

  const renderRow = i => (
    <div className="board-row" key={`row-${i}`}>
      {[0, 1, 2].map(n => renderSquare((i * 3) + n))}
    </div>
  );

  return (
    <div>
      {[0, 1, 2].map(n => renderRow(n))}
    </div>
  );
};

Board.propTypes = {
  board: boardShape.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
