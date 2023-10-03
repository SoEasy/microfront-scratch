import React, {useEffect, useState} from 'react';
import {loadManifest, MfComponent} from "../root/shell";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";

function CoreModule() {
  const [routes, setRoutes] = useState([]);
  console.log('Core');
  useEffect(() => {
    loadManifest().then(manifest => {
      const result = Object.entries(manifest).filter(
        (tuple) => tuple[1].type === 'route'
      ).map(
        (tuple) => ({ name: tuple[0], path: tuple[1].path, moduleName: tuple[0] })
      );
      console.log(result);
      setRoutes(result);
    });
  }, []);

  return <>
    <MfComponent name="fc-button" moduleType="assign">Hello Microfront</MfComponent>
    <MfComponent name="fc-button" moduleType="assign">Hello Microfront1</MfComponent>
    <MfComponent name="fc-button" moduleType="assign">Hello Microfront2</MfComponent>

    {routes.map(r => <p><Link to={r.path}>{r.name}</Link></p>)}

    <Routes>
      {routes.map(r => <Route
        path={r.path}
        key={r.name}
        element={
          <MfComponent name={r.moduleName} />
        }
      />)}
    </Routes>
  </>;
}

export function getComponent() {
  return CoreModule;
}
