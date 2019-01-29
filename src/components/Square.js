import React from 'react';

export default function Square(props) {
  const className = 'square ' + (props.value === 'X' ? 'is-x' : 'is-o');
  return (
    <td>
      <button className={className} onClick={props.onClick}>
        {props.value}
      </button>
    </td>
  );
}
