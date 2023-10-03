// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunkfc_button"] = self["webpackChunkfc_button"] || []).push([[826],{

/***/ 434:
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
;// CONCATENATED MODULE: external "window.getDependency(\"react/jsx-runtime\")"
const jsx_runtime_namespaceObject = window.getDependency("react/jsx-runtime");
;// CONCATENATED MODULE: ./fc-button/index.jsx


function FcButton(props) {
  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsx)("button", {
    ...props,
    style: {
      backgroundColor: 'orange',
      color: 'white'
    }
  });
}
function getComponent() {
  return FcButton;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(434));
/******/ window.ourMfExports["fc-button"] = __webpack_exports__;
/******/ }
]);