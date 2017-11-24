import { isTerminal, availableMoves, nextState, depth } from './gameState';
import evaluate from './evaluate';

export default () => ({
  getMove(state) {
    return this.minimax(state);
  },

  minimax(state) {
    const allAvailableMoves = availableMoves(state);
    const values = allAvailableMoves.map(m => this.maxPlay(nextState(state, m)));
    return allAvailableMoves[values.indexOf(Math.min(...values))];
  },

  maxPlay(state) {
    const winner = isTerminal(state);
    if (winner) return evaluate(winner, depth(state));
    const allAvailableMoves = availableMoves(state);
    return allAvailableMoves.reduce(
      (acc, move) => Math.max(acc, this.minPlay(nextState(state, move)))
      , Number.NEGATIVE_INFINITY,
    );
  },

  minPlay(state) {
    const winner = isTerminal(state);
    if (winner) return evaluate(winner, depth(state));
    const allAvailableMoves = availableMoves(state);
    return allAvailableMoves.reduce(
      (acc, move) => Math.min(acc, this.maxPlay(nextState(state, move)))
      , Number.POSITIVE_INFINITY,
    );
  },
});
