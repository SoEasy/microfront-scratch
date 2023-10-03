// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunksample2"] = self["webpackChunksample2"] || []).push([[826],{

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getComponent: () => (/* binding */ getComponent)
});

;// CONCATENATED MODULE: external "window.getDependency(\"react\")"
const external_window_getDependency_react_namespaceObject = window.getDependency("react");
var external_window_getDependency_react_default = /*#__PURE__*/__webpack_require__.n(external_window_getDependency_react_namespaceObject);
;// CONCATENATED MODULE: ./sample2/index.jsx

console.log('sample2 microfront');
function getComponent() {
  console.log((external_window_getDependency_react_default()));
  return 1234;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(559));
/******/ window.ourMfExports["sample2"] = __webpack_exports__;
/******/ }
]);