import React from 'react';

import './ButtonIcon.scss';

export function ButtonIcon({ event = null, children, type = 'button' }) {
  return (
    <button type={type} className={`btn-custom`} onClick={event}>
      {children}
    </button>
  );
}
