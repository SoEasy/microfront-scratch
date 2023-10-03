import React from 'react';

const store = {};

window.sharedStores['page-foo'] = store;

function PageFoo() {
  return <>
    FOo
  </>;
}

export function getComponent() {
  return PageFoo;
}
