const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const foundWinner = ({ board }, [a, b, c]) =>
  board[a] && board[a] === board[b] && board[a] === board[c];

export const isTerminal = (state, lines = winningCombinations) => {
  if (lines.length === 0) return null;
  if (foundWinner(state, lines[0])) return state.board[lines[0][0]];
  return isTerminal(state, lines.slice(1));
};

export const availableMoves = state =>
  state.board.reduce((acc, cell, idx) => (cell === '' ? acc.concat(idx) : acc), []);

export const nextState = ({ board, turn }, move) => ({
  board: Object.assign([], board, { [move]: turn === 'X' ? 'X' : 'O' }),
  turn: turn === 'X' ? 'O' : 'X',
});
