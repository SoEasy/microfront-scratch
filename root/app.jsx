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
    <MfComponent name="fc-button">Hello Microfront</MfComponent>
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
