import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import { updateBoard } from '../actions';
import { calculateWinner } from '../utils';

class Board extends React.Component {
  handleClick(i) {
    const { squares, updateBoard } = this.props;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    updateBoard(i);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squares: state.squares,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  updateBoard: squareIndex => dispatch(updateBoard(squareIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
