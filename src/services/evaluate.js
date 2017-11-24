export default (winner, depth) => {
  if (winner === 'X') return 10 - depth;
  if (winner === 'O') return depth - 10;
  return 0;
};
