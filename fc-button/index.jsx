import React from 'react';

function FcButton(props) {
  return <button {...props} style={{ backgroundColor: 'orange', color: 'white' }}></button>;
}

export function getComponent() {
  return FcButton;
}
