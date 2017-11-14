export default () => ({
  minimax(state) {
    return state;
  },

  getMove(state) {
    return this.minimax(state);
  },
});
