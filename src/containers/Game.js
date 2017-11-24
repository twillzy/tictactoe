import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { boardShape } from '../data/shapes';
import { click } from '../reducers/game';

const Game = ({ board, onClick }) => <Board board={board} onClick={onClick} />;

const mapStateToProps = state => {
  const { board } = state.game;
  return {
    board,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: (i) => dispatch(click(i)),
});

Game.propTypes = {
  board: boardShape.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
