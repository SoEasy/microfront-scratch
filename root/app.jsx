import React from 'react';
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import {MfComponent} from "./shell";

function Home() {
  return <div>
    Home
  </div>
}

export function App() {
  return <>
    <MfComponent name="fc-button" key="f1" moduleType="assign">Hello Microfront</MfComponent>
    <MfComponent name="fc-button" key={"f2"} moduleType="assign">Hello Microfront1</MfComponent>
    <MfComponent name="fc-button" key={"f3"} moduleType="assign">Hello Microfront2</MfComponent>
    <Link to="/">Home</Link>
    <Link to="/foo">Foo</Link>

    <Routes>
      <Route
        path="/"
        element={
          <Home/>
        }
      />
      <Route
        path="/foo"
        element={
          <div>foo</div>
        }
      />
    </Routes>
  </>;
}
