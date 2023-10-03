import * as __WEBPACK_EXTERNAL_MODULE_window_getDependency_react__5e645a03__ from "window.getDependency(\"react\")";
import * as __WEBPACK_EXTERNAL_MODULE_window_getDependency_react_jsx_runtime__7574182a__ from "window.getDependency(\"react/jsx-runtime\")";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ getComponent)
});

;// CONCATENATED MODULE: external "window.getDependency(\"react\")"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_window_getDependency_react_namespaceObject = x({  });
;// CONCATENATED MODULE: external "window.getDependency(\"react/jsx-runtime\")"
var jsx_runtime_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var jsx_runtime_y = x => () => x
const jsx_runtime_namespaceObject = jsx_runtime_x({ ["jsx"]: () => __WEBPACK_EXTERNAL_MODULE_window_getDependency_react_jsx_runtime__7574182a__.jsx });
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
var __webpack_exports__getComponent = __webpack_exports__.X;
export { __webpack_exports__getComponent as getComponent };
