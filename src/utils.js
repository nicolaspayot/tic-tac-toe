import maxBy from 'lodash/maxBy';
import minBy from 'lodash/minBy';

export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const emptyPositions = squares =>
  squares
    .map((val, index) => ({ index, val }))
    .filter(s => !s.val)
    .map(s => s.index);

const isGameOver = squares => emptyPositions(squares).length === 0;

const score = (squares, aiPlayer, huPlayer) => {
  const winner = calculateWinner(squares);
  if (winner === aiPlayer) {
    return { score: 10 };
  } else if (winner === huPlayer) {
    return { score: -10 };
  }
  return { score: 0 };
};

export const minimax = (squares, aiPlayer, huPlayer, maximize) => {
  if (isGameOver(squares)) {
    return score(squares, aiPlayer, huPlayer);
  }

  const availableMoves = emptyPositions(squares);
  const moves = availableMoves.map(move => {
    const possibleSquares = squares.slice();
    possibleSquares[move] = maximize ? aiPlayer : huPlayer;
    return {
      move,
      score: minimax(possibleSquares, aiPlayer, huPlayer, !maximize).score
    };
  });

  return maximize ? maxBy(moves, 'score') : minBy(moves, 'score');
};
