import React from 'react';
import { connect } from 'react-redux';
import TopButton from './TopButton';
import Status from './Status';
import Square from './Square';
import Restart from './Restart';
import {
  makeHuMove,
  makeAIMove,
  restartGame,
  updateNextPlayer
} from '../actions';
import { calculateWinner, isGameOver } from '../utils';

class Board extends React.Component {
  handleClick(position) {
    const { squares, xIsNext, makeHuMove, makeAIMove } = this.props;

    if (calculateWinner(squares) || squares[position] || !xIsNext) {
      return;
    }

    makeHuMove(position);

    setTimeout(() => {
      const { squares } = this.props;
      if (calculateWinner(squares)) {
        return;
      }
      makeAIMove();
    }, 1000);
  }

  renderTopButton() {
    const handleClick = () => {
      this.props.updateNextPlayer('O');
      setTimeout(this.props.makeAIMove, 500);
    };

    return <TopButton playing={this.props.playing} onClick={handleClick} />;
  }

  renderSquare(square, position) {
    return <Square value={square} onClick={() => this.handleClick(position)} />;
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    const gameOver = isGameOver(this.props.squares);

    return (
      <div>
        {this.renderTopButton()}
        <Status
          winner={winner}
          gameOver={gameOver}
          xIsNext={this.props.xIsNext}
        />
        <div className="board">
          {this.props.squares.map((square, position) =>
            this.renderSquare(square, position)
          )}
        </div>
        <Restart onClick={this.props.restartGame} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squares: state.squares,
  xIsNext: state.xIsNext,
  playing: state.playing
});

const mapDispatchToProps = dispatch => ({
  makeHuMove: squareIndex => dispatch(makeHuMove(squareIndex)),
  makeAIMove: () => dispatch(makeAIMove()),
  restartGame: () => dispatch(restartGame()),
  updateNextPlayer: nextPlayer => dispatch(updateNextPlayer(nextPlayer))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
