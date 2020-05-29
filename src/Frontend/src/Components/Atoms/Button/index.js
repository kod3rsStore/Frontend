import React from 'react';
import './button.css';

function Button({clic, name}) {
  return (
    <button onClick={clic} className="ButtonAtom">{name}</button>
  );
}

export default Button;