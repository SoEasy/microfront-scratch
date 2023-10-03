import { createRoot } from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import {loadManifest, MfComponent} from "./shell";

const rootEl = document.querySelector('#root');
const reactRoot = createRoot(rootEl);

loadManifest().then(() => {
  reactRoot.render(
    <BrowserRouter>
      <MfComponent name={"core-module"} />
    </BrowserRouter>
  );
});
