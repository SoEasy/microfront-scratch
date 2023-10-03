function loadScript(path) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.setAttribute('src', path);
    s.onload = () => { resolve(); }
    document.head.append(s);
  });
}

function loadAssignModule(name) {
  window.ourMfExports = window.ourMfExports || {};

  return Promise.all([
    loadScript(`./${name}/index.assign.js`),
    loadScript(`./${name}/runtime~index.assign.js`),
  ]).then(() => {
    return window.ourMfExports[name];
  });
}

export function loadModule({ name, moduleType }) {
  if (moduleType === 'esm') {
    return window.loadEsmModule(`./${name}/index.esm.js`);
  } else {
    return loadAssignModule(name);
  }
}
