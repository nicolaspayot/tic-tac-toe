import React from 'react';

export default function Status(props) {
  const value = sign => (
    <span className={sign === 'X' ? 'is-x' : 'is-o'}>&nbsp;{sign}</span>
  );

  let status;
  if (props.winner) {
    status = <>Winner:{value(props.winner)}</>;
  } else if (!props.gameOver) {
    status = <>Next player:{value(props.xIsNext ? 'X' : 'O')}</>;
  } else {
    status = `That's a draw!`;
  }
  return <div className="status">{status}</div>;
}
