import { minimax } from './utils';

const initialState = { squares: Array(9).fill(null), xIsNext: true };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_HU_MOVE': {
      const squares = state.squares.slice();
      squares[action.squareIndex] = 'X';
      return {
        squares,
        xIsNext: false
      };
    }
    case 'MAKE_AI_MOVE': {
      const squares = state.squares.slice();
      const { move } = minimax(squares, 'O', 'X', true);
      squares[move] = 'O';
      return {
        squares,
        xIsNext: true
      };
    }
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};
