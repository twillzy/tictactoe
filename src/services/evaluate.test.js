import evaluate from './evaluate';

describe('evaluate', () => {
  it('should return negative 10 minues depth if O wins', () => {
    expect(evaluate('O', 1)).toEqual(-9);
  });

  it('should return negative 10 minues depth if O wins', () => {
    expect(evaluate('O', 4)).toEqual(-6);
  });

  it('should return 10 minus depth if X wins', () => {
    expect(evaluate('X', 2)).toEqual(8);
  });

  it('should return 0 minus if draw', () => {
    expect(evaluate(null, 2)).toEqual(0);
  });
});
