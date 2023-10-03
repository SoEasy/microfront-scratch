import { createRoot } from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import {loadModule} from "./shell";

const rootEl = document.querySelector('#root');
const reactRoot = createRoot(rootEl);

reactRoot.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

loadModule({ name: 'fc-button', moduleType: 'assign' }).then((m) => {
  console.log(m.getComponent());
});
