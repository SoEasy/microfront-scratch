import React from 'react';
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  return <div>
    Home
  </div>
}

export function App() {
  return <>
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
