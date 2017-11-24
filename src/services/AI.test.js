import AI from './AI';
import { isTerminal, availableMoves, nextState } from './gameState';
import evaluate from './evaluate';

jest.mock('./gameState');
jest.mock('./evaluate');

describe('minimax', () => {
  describe('minPlay', () => {
    it('should return utility value when state is terminal', () => {
      const state = {};
      isTerminal.mockImplementation(() => true);
      evaluate.mockImplementation(() => 10);
      expect(AI().minPlay(state)).toEqual(10);
    });

    it('should return the minimum value of utility values of all other possible moves', () => {
      const currentState = {
        board: [],
        turn: 'X',
      };
      const expectedNextState = {
        board: [],
        turn: 'O',
      };
      isTerminal.mockImplementation(state => state.turn === 'O');
      availableMoves.mockImplementation(() => [1]);
      nextState.mockImplementation(() => expectedNextState);
      expect(AI().minPlay(currentState)).toEqual(10);
    });
  });

  describe('maxPlay', () => {
    it('should return utility value when state is terminal', () => {
      const state = {};
      isTerminal.mockImplementation(() => true);
      expect(AI().maxPlay(state)).toEqual(10);
    });

    it('should return the max value of utility values of all other possible moves', () => {
      const currentState = {
        board: [],
        turn: 'O',
      };
      const expectedNextState = {
        board: [],
        turn: 'X',
      };
      isTerminal.mockImplementation(state => state.turn === 'X');
      availableMoves.mockImplementation(() => [1]);
      nextState.mockImplementation(() => expectedNextState);
      expect(AI().maxPlay(currentState)).toEqual(10);
    });
  });
});
