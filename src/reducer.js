import { minimax } from './utils';

const initialState = {
  squares: Array(9).fill(null),
  xIsFirst: true,
  xIsNext: true,
  playing: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_HU_MOVE': {
      const squares = state.squares.slice();
      squares[action.squareIndex] = 'X';
      return {
        ...state,
        squares,
        xIsNext: false,
        playing: true
      };
    }
    case 'MAKE_AI_MOVE': {
      const squares = state.squares.slice();
      const { move } = minimax(squares, 'O', 'X', true);
      squares[move] = 'O';
      return {
        ...state,
        squares,
        xIsNext: true,
        playing: true
      };
    }
    case 'RESTART_GAME':
      return initialState;
    case 'UPDATE_NEXT_PLAYER':
      return {
        ...state,
        xIsNext: action.nextPlayer === 'X'
      };
    default:
      return state;
  }
};
