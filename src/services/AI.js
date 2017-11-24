import { isTerminal, availableMoves, nextState } from './gameState';
import { evaluation } from './evaluate';

export default () => ({
  getMove(state) {
    return this.minimax(state);
  },

  minimax(state) {
    return state;
  },

  maxPlay(state) {
    if (isTerminal(state)) {
      return 10;
    }
    let value = Number.NEGATIVE_INFINITY;
    const allAvailableMoves = availableMoves(state);

    for (let i = 0; i < allAvailableMoves.length; i++) {
      const currentMove = allAvailableMoves[i];
      value = Math.max(value, this.minPlay(nextState(currentMove, state)));
    }
    return value;
  },

  minPlay(state) {
    if (isTerminal(state)) {
      return 10;
    }
    let value = Number.POSITIVE_INFINITY;
    const allAvailableMoves = availableMoves(state);

    for (let i = 0; i < allAvailableMoves.length; i++) {
      const currentMove = allAvailableMoves[i];
      value = Math.min(value, this.maxPlay(nextState(currentMove, state)));
    }
    return value;
  },
});
