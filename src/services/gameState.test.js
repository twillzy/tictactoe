import { isTerminal, availableMoves, nextState } from './gameState';

describe('gameState', () => {
  describe('isTerminal', () => {
    it('should return null when there all winning combinations have been scanned', () => {
      expect(isTerminal({}, [])).toBeNull();
    });

    it('should return winner when there is a winning combination', () => {
      const state = {
        board: [
          'X', 'X', 'X',
        ],
      };
      expect(isTerminal(state)).toEqual('X');
    });

    it('should return null when there is no where to move', () => {
      const state = {
        board: [
          '1', '2', '3',
          '4', '5', '6',
          '7', '8', '9',
        ],
      };

      expect(isTerminal(state)).toBeNull();
    });
  });

  describe('availableMoves', () => {
    it('should return all available moves', () => {
      const state = {
        board: [
          'X', 'X', 'X',
          'X', '', '',
          '', 'X', 'X',
        ],
      };
      expect(availableMoves(state)).toEqual([4, 5, 6]);
    });

    it('should empty array when no available moves', () => {
      const state = {
        board: [
          'X', 'X', 'X',
          'X', 'X', 'X',
          'X', 'X', 'X',
        ],
      };
      expect(availableMoves(state)).toEqual([]);
    });
  });

  describe('nextState', () => {
    it('should return the next state of the game given current state and move', () => {
      const state = {
        board: [
          '', '', '',
          '', '', '',
          '', '', '',
        ],
        turn: 'X',
      };
      const move = 0;
      const expectedNextState = {
        board: [
          'X', '', '',
          '', '', '',
          '', '', '',
        ],
        turn: 'O',
      };
      expect(nextState(state, move)).toEqual(expectedNextState);
    });
  });
});
