import { calculateWinner, minimax } from './utils';

describe('utils', () => {
  describe('minimax should return the best move for AI player (O) given some game', () => {
    it('at step 1', () => {
      const squares = ['X', null, null, null, null, null, null, null, null];
      const move = minimax(squares, 'O', 'X', true);
      expect(calculateWinner(squares)).toBeNull();
      expect(move.move).toBe(4);
    });

    it('at step 2', () => {
      const squares = ['X', null, null, 'X', 'O', null, null, null, null];
      const move = minimax(squares, 'O', 'X', true);
      expect(calculateWinner(squares)).toBeNull();
      expect(move.move).toBe(6);
    });

    it('at step 3', () => {
      const squares = ['X', 'X', null, 'X', 'O', null, 'O', null, null];
      const move = minimax(squares, 'O', 'X', true);
      expect(calculateWinner(squares)).toBeNull();
      expect(move.move).toBe(2);
    });
  });

  describe('calculateWinner', () => {
    it('should return AI player (O) as the winner given some game', () => {
      const squares = ['X', 'X', 'O', 'X', 'O', null, 'O', null, null];
      expect(calculateWinner(squares)).toBe('O');
    });
  });
});
