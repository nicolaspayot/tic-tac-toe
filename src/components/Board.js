import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import {
  makeHuMove,
  makeAIMove,
  restartGame,
  updateNextPlayer
} from '../actions';
import { calculateWinner, isGameOver } from '../utils';

class Board extends React.Component {
  handleClick(i) {
    const { squares, xIsNext, makeHuMove, makeAIMove } = this.props;

    if (calculateWinner(squares) || squares[i] || !xIsNext) {
      return;
    }

    makeHuMove(i);

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

    return (
      <div className="action">
        <button
          className="action-btn m-bottom-20"
          disabled={this.props.playing}
          onClick={handleClick}
        >
          Let computer starts
        </button>
      </div>
    );
  }

  renderStatus(winner) {
    const value = sign => (
      <span className={sign === 'X' ? 'is-x' : 'is-o'}>&nbsp;{sign}</span>
    );

    let status;
    if (winner) {
      status = <>Winner:{value(winner)}</>;
    } else if (!isGameOver(this.props.squares)) {
      status = <>Next player:{value(this.props.xIsNext ? 'X' : 'O')}</>;
    } else {
      status = `That's a draw!`;
    }
    return <div className="status">{status}</div>;
  }

  renderSquare(square, position) {
    return <Square value={square} onClick={() => this.handleClick(position)} />;
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    const status = this.renderStatus(winner);

    return (
      <div>
        {this.renderTopButton()}
        {status}
        <div className="board">
          {this.props.squares.map((square, position) =>
            this.renderSquare(square, position)
          )}
        </div>
        <div className="action">
          <button
            className="action-btn m-top-50"
            onClick={this.props.restartGame}
          >
            Restart the game
          </button>
        </div>
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
