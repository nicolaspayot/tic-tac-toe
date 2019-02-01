export const MAKE_HU_MOVE = 'MAKE_HU_MOVE';
export const MAKE_AI_MOVE = 'MAKE_AI_MOVE';
export const RESTART_GAME = 'RESTART_GAME';
export const UPDATE_NEXT_PLAYER = 'UPDATE_NEXT_PLAYER';

export const makeHuMove = squareIndex => ({
  type: MAKE_HU_MOVE,
  squareIndex
});

export const makeAIMove = () => ({
  type: MAKE_AI_MOVE
});

export const restartGame = () => ({
  type: RESTART_GAME
});

export const updateNextPlayer = nextPlayer => ({
  type: UPDATE_NEXT_PLAYER,
  nextPlayer
});
