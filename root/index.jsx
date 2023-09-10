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
