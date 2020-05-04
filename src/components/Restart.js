import React from 'react';

export default function Restart(props) {
  return (
    <div className="action">
      <button className="action-btn m-top-big" onClick={props.onClick}>
        Restart the game
      </button>
    </div>
  );
}
