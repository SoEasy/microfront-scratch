import React, {useEffect, useState} from 'react';
import * as ReactJsxRuntime from 'react/jsx-runtime';

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
  let result;
  if (moduleType === 'esm') {
    result = window.loadEsmModule(`./${name}/index.esm.js`);
  } else {
    result = loadAssignModule(name);
  }
  return result.then(m => {
    m.start?.();
    return m;
  })
}

const externalDeps = {
  'react': new Promise(r => {
    window.resolveReact = () => {
      console.log('Resolve react');
      r(React);
    }
  }),
  'react/jsx-runtime': ReactJsxRuntime
};

window.getDependency = function(name) {
  console.log('Call getDep ', name);
  return externalDeps[name];
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
