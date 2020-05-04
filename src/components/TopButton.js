import React from 'react';

export default function TopButton(props) {
  return (
    <div className="action">
      <button
        className="action-btn m-bottom-small"
        disabled={props.playing}
        onClick={props.onClick}
      >
        Let computer starts
      </button>
    </div>
  );
}
