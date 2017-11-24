export default (state) => {
  if (state.winner === 'X') {
    return 10;
  }
  return 0;
};
