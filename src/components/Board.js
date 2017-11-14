import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { boardShape } from '../data/shapes';

const Board = ({ board, onClick }) => {
  const renderSquare = i => <Square value={board[i]} onClick={() => onClick(i)} />;

  const renderRow = i => (
    <div className="board-row">
      {renderSquare(i * 3)}
      {renderSquare((i * 3) + 1)}
      {renderSquare((i * 3) + 2)}
    </div>
  );

  return (
    <div>
      {renderRow(0)}
      {renderRow(1)}
      {renderRow(2)}
    </div>
  );
};

Board.propTypes = {
  board: boardShape.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
