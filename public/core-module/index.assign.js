// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunkcore_module"] = self["webpackChunkcore_module"] || []).push([[826],{

/***/ 169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(987);
/* harmony import */ var _root_shell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(496);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react__WEBPACK_IMPORTED_MODULE_0__, _root_shell__WEBPACK_IMPORTED_MODULE_1__, react_router_dom__WEBPACK_IMPORTED_MODULE_2__, react_router__WEBPACK_IMPORTED_MODULE_3__]);
([react__WEBPACK_IMPORTED_MODULE_0__, _root_shell__WEBPACK_IMPORTED_MODULE_1__, react_router_dom__WEBPACK_IMPORTED_MODULE_2__, react_router__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);







function CoreModule() {
  const [routes, setRoutes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  console.log('Core');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_root_shell__WEBPACK_IMPORTED_MODULE_1__/* .loadManifest */ .UG)().then(manifest => {
      const result = Object.entries(manifest).filter(tuple => tuple[1].type === 'route').map(tuple => ({
        name: tuple[0],
        path: tuple[1].path,
        moduleName: tuple[0]
      }));
      console.log(result);
      setRoutes(result);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_root_shell__WEBPACK_IMPORTED_MODULE_1__/* .MfComponent */ .aC, {
      name: "fc-button",
      moduleType: "assign",
      children: "Hello Microfront"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_root_shell__WEBPACK_IMPORTED_MODULE_1__/* .MfComponent */ .aC, {
      name: "fc-button",
      moduleType: "assign",
      children: "Hello Microfront1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_root_shell__WEBPACK_IMPORTED_MODULE_1__/* .MfComponent */ .aC, {
      name: "fc-button",
      moduleType: "assign",
      children: "Hello Microfront2"
    }), routes.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: r.path,
        children: r.name
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Routes, {
      children: routes.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: r.path,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_root_shell__WEBPACK_IMPORTED_MODULE_1__/* .MfComponent */ .aC, {
          name: r.moduleName
        })
      }, r.name))
    })]
  });
}
function getComponent() {
  return CoreModule;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(987),
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(25);
} else {}

/***/ }),

/***/ 158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UG: () => (/* binding */ loadManifest),
/* harmony export */   aC: () => (/* binding */ MfComponent)
/* harmony export */ });
/* unused harmony export loadModule */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(899);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(496);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react__WEBPACK_IMPORTED_MODULE_0__, react_router_dom__WEBPACK_IMPORTED_MODULE_2__, react_router__WEBPACK_IMPORTED_MODULE_3__]);
([react__WEBPACK_IMPORTED_MODULE_0__, react_router_dom__WEBPACK_IMPORTED_MODULE_2__, react_router__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);






function loadScript(path) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.setAttribute('src', path);
    s.onload = () => {
      document.head.removeChild(s);
      resolve();
    };
    document.head.append(s);
  });
}
const Cache = {
  // mfName: moduleInstance
};
function loadAssignModule(name) {
  window.ourMfExports = window.ourMfExports || {};
  if (!Cache[name]) {
    Cache[name] = Promise.all([loadScript(`./${name}/index.assign.js`), loadScript(`./${name}/runtime~index.assign.js`)]).then(() => {
      return window.ourMfExports[name];
    });
  }
  return Cache[name];
}
function loadModule({
  name,
  moduleType
}) {
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
  'react': (react__WEBPACK_IMPORTED_MODULE_0___default()),
  'react/jsx-runtime': /*#__PURE__*/ (react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__, 2))),
  'react-router-dom': react_router_dom__WEBPACK_IMPORTED_MODULE_2__,
  'react-router': react_router__WEBPACK_IMPORTED_MODULE_3__
};
window.getDependency = function (name) {
  console.log('Call getDep ', name);
  return externalDeps[name];
};
let manifestCache;
function loadManifest() {
  if (!manifestCache) {
    manifestCache = fetch('./manifest.json').then(r => r.json()).then(manifest => {
      console.log(manifest);
      return manifest;
    });
  }
  return manifestCache;
}
function MfComponent({
  name,
  fnName = 'getComponent',
  moduleType = 'esm',
  ...rest
}) {
  const [Component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    value: null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadModule({
      name,
      moduleType
    }).then(m => {
      console.log('Module loaded', name);
      const componentFactory = m[fnName];
      const _Component = componentFactory();
      setComponent({
        value: _Component
      });
    });
  }, []);
  return !Component.value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Loading"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component.value, {
    ...rest
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 496:
/***/ ((module) => {

"use strict";
module.exports = window.getDependency("react-router-dom");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = window.getDependency("react-router");

/***/ }),

/***/ 987:
/***/ ((module) => {

"use strict";
module.exports = window.getDependency("react");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(169));
/******/ window.ourMfExports["core-module"] = __webpack_exports__;
/******/ }
]);