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

  renderSquare(i, className) {
    return (
      <Square
        value={this.props.squares[i]}
        className={className}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderStatus(winner) {
    const value = sign => (
      <span className={sign === 'X' ? 'is-x' : 'is-o'}>&nbsp;{sign}</span>
    );

    let status;
    if (winner) {
      status = <>Winner:{value(winner)}</>;
    } else {
      status = <>Next player:{value(this.props.xIsNext ? 'X' : 'O')}</>;
    }
    return <div className="status">{status}</div>;
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    const status = this.renderStatus(winner);

    return (
      <div>
        {status}
        <table>
          <tbody>
            <tr>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </tr>
            <tr>
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </tr>
            <tr>
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </tr>
          </tbody>
        </table>
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
