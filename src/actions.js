export const makeHuMove = squareIndex => ({
  type: 'MAKE_HU_MOVE',
  squareIndex
});

export const makeAIMove = () => ({
  type: 'MAKE_AI_MOVE'
});

export const restartGame = () => ({
  type: 'RESTART_GAME'
});

export const updateNextPlayer = nextPlayer => ({
  type: 'UPDATE_NEXT_PLAYER',
  nextPlayer
});
