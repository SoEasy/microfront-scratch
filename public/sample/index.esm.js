import * as __WEBPACK_EXTERNAL_MODULE_window_getDependency_react__5e645a03__ from "window.getDependency(\"react\")";
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
  X: () => (/* binding */ getComponent),
  B: () => (/* binding */ start)
});

;// CONCATENATED MODULE: external "window.getDependency(\"react\")"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_window_getDependency_react_namespaceObject = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_window_getDependency_react__5e645a03__["default"] });
;// CONCATENATED MODULE: ./sample/index.jsx

console.log('sample microfront');
function getComponent() {
  console.log(external_window_getDependency_react_namespaceObject["default"]);
  return 123;
}
function start() {
  console.log('Start sample MF');
}
var __webpack_exports__getComponent = __webpack_exports__.X;
var __webpack_exports__start = __webpack_exports__.B;
export { __webpack_exports__getComponent as getComponent, __webpack_exports__start as start };
