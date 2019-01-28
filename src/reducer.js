export const reducer = (state = { squares: Array(9).fill(null), xIsNext: true }, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      const squares = state.squares.slice();
      squares[action.squareIndex] = state.xIsNext ? 'X' : 'O';
      return {
        squares,
        xIsNext: !state.xIsNext
      };
    default:
      return state;
  }
};
