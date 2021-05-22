import React from 'react';

import './Button.scss';

export function Button({
  text = '',
  type = 'button',
  event = null,
  styleButton = 'light',
  size = 's',
}) {
  return (
    <button
      type={type}
      className={`btn btn-${size} btn-${styleButton}`}
      onClick={event}
    >
      {text}
    </button>
  );
}
