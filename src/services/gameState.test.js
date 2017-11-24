import { isTerminal, availableMoves, nextState, depth } from './gameState';

describe('gameState', () => {
  describe('isTerminal', () => {
    it('should return winner when there is a winning combination', () => {
      const state = {
        board: [
          'X', 'O', 'O',
          'X', 'X', 'O',
          'O', '', 'X',
        ],
      };
      expect(isTerminal(state)).toEqual('X');
    });

    it('should return true when game is a draw', () => {
      const state = {
        board: [
          'X', 'O', 'X',
          'X', 'X', 'O',
          'O', 'X', 'O',
        ],
      };
      expect(isTerminal(state)).toEqual(true);
    });

    it('should return null when all winning combinations have been scanned', () => {
      const state = {
        board: [
          'X', 'O', 'X',
          'X', 'X', 'O',
          '', '', '',
        ],
      };
      expect(isTerminal(state, [])).toBeNull();
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

  describe('depth', () => {
    it('should calculate the depth of the game state', () => {
      const state = {
        board: [
          'X', 'X', '',
          '', '', '',
          '', '', '',
        ],
      };
      expect(depth(state)).toEqual(1);
    });
  });
});
