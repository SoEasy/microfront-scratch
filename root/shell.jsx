import React, {useEffect, useState} from 'react';
import * as ReactJsxRuntime from 'react/jsx-runtime';
import * as ReactRouterDom from 'react-router-dom';
import * as ReactRouter from 'react-router';

function loadScript(path) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.setAttribute('src', path);
    s.onload = () => {
      document.head.removeChild(s);
      resolve();
    }
    document.head.append(s);
  });
}

const Cache = {
  // mfName: moduleInstance
};

function loadAssignModule(name) {
  window.ourMfExports = window.ourMfExports || {};

  if (!Cache[name]) {
    Cache[name] = Promise.all([
      loadScript(`./${name}/index.assign.js`),
      loadScript(`./${name}/runtime~index.assign.js`),
    ]).then(() => {
      return window.ourMfExports[name];
    });
  }

  return Cache[name];
}

export function loadModule({ name, moduleType }) {
  return loadManifest().then(manifest => {
    if (!manifest[name]) {
      throw new Error('Unknown name to load' + name);
    }

    if (moduleType === 'esm') {
      return window.loadEsmModule(`./${name}/index.esm.js`);
    } else {
      return loadAssignModule(name);
    }
  }).then(m => {
    m.start?.();
    return m;
  });
}

const externalDeps = {
  'react': React,
  'react/jsx-runtime': ReactJsxRuntime,
  'react-router-dom': ReactRouterDom,
  'react-router': ReactRouter,
};

window.getDependency = function(name) {
  console.log('Call getDep ', name);
  return externalDeps[name];
}

let manifestCache;

export function loadManifest() {
  if (!manifestCache) {
    manifestCache = fetch('./manifest.json').then(r => r.json()).then(
      (manifest) => {
        console.log(manifest);
        return manifest;
      }
    );
  }
  return manifestCache;
}

export function MfComponent({ name, fnName = 'getComponent', moduleType = 'esm', ...rest }) {
  const [Component, setComponent] = useState({ value: null });

  useEffect(() => {
    loadModule({ name, moduleType }).then(m => {
      console.log('Module loaded', name);
      const componentFactory = m[fnName];
      const _Component = componentFactory();
      setComponent({ value: _Component });
    });
  }, []);

  return !Component.value ? <>Loading</> : <Component.value {...rest}/>;
}
