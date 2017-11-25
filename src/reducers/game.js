import AI from '../services/AI';

const SOMEONE_MOVES = 'SOMEONE_MOVES';

const initialState = {
  board: Array(9).fill(''),
  turn: 'X',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOMEONE_MOVES:
      return {
        ...state,
        board: action.board,
        turn: action.turn,
      };
    default:
      return state;
  }
};

const updateBoard = (game, idx) => Object.assign([], game.board, { [idx]: game.turn });

const swap = turn => (turn === 'X' ? 'O' : 'X');

export const click = i => (dispatch, getState) => {
  const { game } = getState();
  dispatch({
    type: SOMEONE_MOVES,
    board: updateBoard(game, i),
    turn: swap(game.turn),
  });
  dispatch(aiToMove);
};

const aiToMove = (dispatch, getState) => {
  const { game } = getState();
  dispatch({
    type: SOMEONE_MOVES,
    board: updateBoard(game, AI().getMove(game)),
    turn: swap(game.turn),
  });
};
