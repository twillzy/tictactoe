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
    if (winner) {
      return evaluate(winner, depth(state));
    }
    let value = Number.NEGATIVE_INFINITY;
    const allAvailableMoves = availableMoves(state);

    for (let i = 0; i < allAvailableMoves.length; i++) {
      const currentMove = allAvailableMoves[i];
      value = Math.max(value, this.minPlay(nextState(state, currentMove)));
    }
    return value;
  },

  minPlay(state) {
    const winner = isTerminal(state);
    if (winner) {
      return evaluate(winner, depth(state));
    }
    let value = Number.POSITIVE_INFINITY;
    const allAvailableMoves = availableMoves(state);

    for (let i = 0; i < allAvailableMoves.length; i++) {
      const currentMove = allAvailableMoves[i];
      value = Math.min(value, this.maxPlay(nextState(state, currentMove)));
    }
    return value;
  },
});
