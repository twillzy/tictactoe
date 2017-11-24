import { isTerminal } from './gameState';

describe('gameState', () => {
  it('isTerminal', () => {
    const state = {
      board: [
        'X', 'X', 'X',
        'O', 'X', 'O',
        'O', 'O', 'X',
      ],
    };

    expect(isTerminal(state)).toBeTruthy();
  });

  it('isTerminal', () => {
    const state = {
      board: [
        'X', 'X', 'X',
        'O', 'X', 'O',
        'O', 'O', 'X',
      ],
    };

    expect(isTerminal(state)).toBeTruthy();
  });
});
