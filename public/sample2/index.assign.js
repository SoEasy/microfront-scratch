// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunksample2"] = self["webpackChunksample2"] || []).push([[826],{

/***/ 942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react__WEBPACK_IMPORTED_MODULE_0__]);
react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

console.log('sample2 microfront');
function getComponent() {
  console.log((react__WEBPACK_IMPORTED_MODULE_0___default()));
  return 1234;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 987:
/***/ ((module) => {

"use strict";
module.exports = window.getDependency("react");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(942));
/******/ window.ourMfExports["sample2"] = __webpack_exports__;
/******/ }
]);