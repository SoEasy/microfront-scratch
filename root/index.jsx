import { createRoot } from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from "react-router-dom";
import React from 'react';

const rootEl = document.querySelector('#root');
const reactRoot = createRoot(rootEl);

reactRoot.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

window.ourMfExports = {};
window.exports = {};
window.module = { exports };

const s = document.createElement('script');
s.setAttribute('src', './sample/index.js');
s.onload = () => {
  console.log('Loaded');
}
document.head.append(s);
