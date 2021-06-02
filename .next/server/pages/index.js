/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/helpers/featch_data.js":
/*!************************************!*\
  !*** ./src/helpers/featch_data.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // import { PRODUCTS_URL } from \"@/constant/common\";\n\nconst fetchData = async () => {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()(\"https://gist.githubusercontent.com/ytkonaft/73e288815f259f054e7108731418333d/raw/d4a6a692ecfa3a3afe29559e3677df57fc114414/test.json\");\n  return result.data.reduce((newObj, data) => {\n    newObj[data.id] = data;\n    return newObj;\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL2hlbHBlcnMvZmVhdGNoX2RhdGEuanM/MDQzNSJdLCJuYW1lcyI6WyJmZXRjaERhdGEiLCJyZXN1bHQiLCJheGlvcyIsImRhdGEiLCJyZWR1Y2UiLCJuZXdPYmoiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7O0NBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLFlBQVk7QUFDN0IsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLDRDQUFLLENBQUMscUlBQUQsQ0FBMUI7QUFDQSxTQUFPRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBWixDQUFtQixDQUFDQyxNQUFELEVBQVNGLElBQVQsS0FBa0I7QUFFM0NFLFVBQU0sQ0FBQ0YsSUFBSSxDQUFDRyxFQUFOLENBQU4sR0FBa0JILElBQWxCO0FBQ0EsV0FBT0UsTUFBUDtBQUVBLEdBTE0sRUFLSixFQUxJLENBQVA7QUFPQSxDQVREOztBQVdBLCtEQUFlTCxTQUFmIiwiZmlsZSI6Ii4vc3JjL2hlbHBlcnMvZmVhdGNoX2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgeyBQUk9EVUNUU19VUkwgfSBmcm9tIFwiQC9jb25zdGFudC9jb21tb25cIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20veXRrb25hZnQvNzNlMjg4ODE1ZjI1OWYwNTRlNzEwODczMTQxODMzM2QvcmF3L2Q0YTZhNjkyZWNmYTNhM2FmZTI5NTU5ZTM2NzdkZjU3ZmMxMTQ0MTQvdGVzdC5qc29uXCIpO1xuXHRyZXR1cm4gcmVzdWx0LmRhdGEucmVkdWNlKChuZXdPYmosIGRhdGEpID0+IHtcblxuXHRcdG5ld09ialtkYXRhLmlkXSA9IGRhdGFcblx0XHRyZXR1cm4gbmV3T2JqXG5cblx0fSwge30pXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/featch_data.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_set_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/set-products */ \"./src/store/actions/set-products.js\");\n/* harmony import */ var _helpers_featch_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/featch_data */ \"./src/helpers/featch_data.js\");\n/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/ */ \"./src/store/index.js\");\n\nvar _jsxFileName = \"/home/nova-vi/www/test-next-project/src/pages/index.js\";\n\n\n //* Хуки для использования REDUX\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, undefined);\n};\n\nasync function getServerSideProps() {\n  //*иницыализация stor'а на сервере\n  const reduxStore = (0,_store___WEBPACK_IMPORTED_MODULE_6__.initializeStore)();\n  const {\n    dispatch\n  } = reduxStore;\n  const data = await (0,_helpers_featch_data__WEBPACK_IMPORTED_MODULE_5__.default)(); //*получение списка продуктов\n\n  dispatch((0,_store_actions_set_products__WEBPACK_IMPORTED_MODULE_4__.default)(data)); //*вызов action на стороне сервера\n\n  return {\n    props: {\n      initialReduxState: reduxStore.getState()\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlZHV4U3RvcmUiLCJpbml0aWFsaXplU3RvcmUiLCJkaXNwYXRjaCIsImRhdGEiLCJmZWF0Y2hEYXRhIiwic2V0UHJvZHVjdHMiLCJwcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUNzRDs7QUFDdEQ7QUFDQTtBQUNBOztBQUdBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBR2xCLHNCQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFRQSxDQVhEOztBQWFPLGVBQWVDLGtCQUFmLEdBQW9DO0FBQUM7QUFDM0MsUUFBTUMsVUFBVSxHQUFHQyx3REFBZSxFQUFsQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlRixVQUFyQjtBQUVBLFFBQU1HLElBQUksR0FBRyxNQUFNQyw2REFBVSxFQUE3QixDQUowQyxDQUlYOztBQUMvQkYsVUFBUSxDQUFDRyxvRUFBVyxDQUFDRixJQUFELENBQVosQ0FBUixDQUwwQyxDQUtmOztBQUUzQixTQUFPO0FBQUVHLFNBQUssRUFBRTtBQUFFQyx1QkFBaUIsRUFBRVAsVUFBVSxDQUFDUSxRQUFYO0FBQXJCO0FBQVQsR0FBUDtBQUNBO0FBR0QsK0RBQWVWLElBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCcvLyog0KXRg9C60Lgg0LTQu9GPINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIFJFRFVYXG5pbXBvcnQgc2V0UHJvZHVjdHMgZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvc2V0LXByb2R1Y3RzXCJcbmltcG9ydCBmZWF0Y2hEYXRhIGZyb20gXCIuLi9oZWxwZXJzL2ZlYXRjaF9kYXRhXCJcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gJy4uL3N0b3JlLydcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHsvLyrQuNC90LjRhtGL0LDQu9C40LfQsNGG0LjRjyBzdG9yJ9CwINC90LAg0YHQtdGA0LLQtdGA0LVcblx0Y29uc3QgcmVkdXhTdG9yZSA9IGluaXRpYWxpemVTdG9yZSgpXG5cdGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHJlZHV4U3RvcmVcblxuXHRjb25zdCBkYXRhID0gYXdhaXQgZmVhdGNoRGF0YSgpLy8q0L/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQv9GA0L7QtNGD0LrRgtC+0LJcblx0ZGlzcGF0Y2goc2V0UHJvZHVjdHMoZGF0YSkpLy8q0LLRi9C30L7QsiBhY3Rpb24g0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsFxuXG5cdHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCkgfSB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/store/actions/action-types.js":
/*!*******************************************!*\
  !*** ./src/store/actions/action-types.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//константы типов action\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_PRODUCTS: \"@/PRODUCTS/SET_PRODUCTS\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzLmpzPzVkMmEiXSwibmFtZXMiOlsiU0VUX1BST0RVQ1RTIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFFQSwrREFBZTtBQUNkQSxjQUFZLEVBQUU7QUFEQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/QutC+0L3RgdGC0LDQvdGC0Ysg0YLQuNC/0L7QsiBhY3Rpb25cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRTRVRfUFJPRFVDVFM6IFwiQC9QUk9EVUNUUy9TRVRfUFJPRFVDVFNcIixcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/actions/action-types.js\n");

/***/ }),

/***/ "./src/store/actions/set-products.js":
/*!*******************************************!*\
  !*** ./src/store/actions/set-products.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/store/actions/action-types.js\");\n\n\nconst setProducts = products => ({\n  type: _action_types__WEBPACK_IMPORTED_MODULE_0__.default.SET_PRODUCTS,\n  payload: {\n    products\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL2FjdGlvbnMvc2V0LXByb2R1Y3RzLmpzPzk4ZDkiXSwibmFtZXMiOlsic2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFJQyxRQUFELEtBQWU7QUFDbENDLE1BQUksRUFBRUMsK0RBRDRCO0FBRWxDQyxTQUFPLEVBQUU7QUFDUkg7QUFEUTtBQUZ5QixDQUFmLENBQXBCOztBQU9BLCtEQUFlRCxXQUFmIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2FjdGlvbnMvc2V0LXByb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gXCIuL2FjdGlvbi10eXBlc1wiO1xuXG5jb25zdCBzZXRQcm9kdWN0cyA9IChwcm9kdWN0cykgPT4gKHtcblx0dHlwZTogYWN0aW9uVHlwZXMuU0VUX1BST0RVQ1RTLFxuXHRwYXlsb2FkOiB7XG5cdFx0cHJvZHVjdHMsXG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0UHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/actions/set-products.js\n");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": function() { return /* binding */ initializeStore; },\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/ */ \"./src/store/reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialState */ \"./src/store/initialState.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n //TODO Продолжить правки стора\n\nlet store;\n\nfunction configureStore(initState = _initialState__WEBPACK_IMPORTED_MODULE_4__.default) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)((0,_reducers___WEBPACK_IMPORTED_MODULE_2__.default)(), initState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)()));\n}\n\nconst initializeStore = initialState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : configureStore(initialState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (initialState && store) {\n    _store = configureStore(_objectSpread(_objectSpread({}, store.getState()), initialState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL2luZGV4LmpzPzQzNjAiXSwibmFtZXMiOlsic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUVBLElBQUlBLEtBQUo7O0FBRUEsU0FBU0MsY0FBVCxDQUF3QkMsU0FBUyxHQUFHQyxrREFBcEMsRUFBa0Q7QUFDakQsU0FBT0Msa0RBQVcsQ0FDakJDLG1EQUFpQixFQURBLEVBRWpCSCxTQUZpQixFQUdqQkksNkVBQW1CLENBQUNDLHNEQUFlLEVBQWhCLENBSEYsQ0FBbEI7QUFLQTs7QUFFTSxNQUFNQyxlQUFlLEdBQUlMLFlBQUQsSUFBa0I7QUFBQTs7QUFDaEQsTUFBSU0sTUFBTSxjQUFHVCxLQUFILDZDQUFZQyxjQUFjLENBQUNFLFlBQUQsQ0FBcEMsQ0FEZ0QsQ0FHaEQ7QUFDQTs7O0FBQ0EsTUFBSUEsWUFBWSxJQUFJSCxLQUFwQixFQUEyQjtBQUMxQlMsVUFBTSxHQUFHUixjQUFjLGlDQUNuQkQsS0FBSyxDQUFDVSxRQUFOLEVBRG1CLEdBRW5CUCxZQUZtQixFQUF2QixDQUQwQixDQUsxQjs7QUFDQUgsU0FBSyxHQUFHVyxTQUFSO0FBQ0EsR0FaK0MsQ0FjaEQ7OztBQUNBLFlBQW1DLE9BQU9GLE1BQVAsQ0FmYSxDQWdCaEQ7O0FBQ0EsTUFBSSxDQUFDVCxLQUFMLEVBQVlBLEtBQUssR0FBR1MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDQSxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCVCxZQUFsQixFQUFnQztBQUN0QyxRQUFNSCxLQUFLLEdBQUdhLDhDQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDTCxZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPSCxLQUFQO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tIFwiLi9pbml0aWFsU3RhdGVcIjtcblxuXG4vL1RPRE8g0J/RgNC+0LTQvtC70LbQuNGC0Ywg0L/RgNCw0LLQutC4INGB0YLQvtGA0LBcblxubGV0IHN0b3JlXG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xuXHRyZXR1cm4gY3JlYXRlU3RvcmUoXG5cdFx0Y3JlYXRlUm9vdFJlZHVjZXIoKSxcblx0XHRpbml0U3RhdGUsXG5cdFx0Y29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcblx0bGV0IF9zdG9yZSA9IHN0b3JlID8/IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSlcblxuXHQvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcblx0Ly8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcblx0aWYgKGluaXRpYWxTdGF0ZSAmJiBzdG9yZSkge1xuXHRcdF9zdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcblx0XHRcdC4uLnN0b3JlLmdldFN0YXRlKCksXG5cdFx0XHQuLi5pbml0aWFsU3RhdGUsXG5cdFx0fSlcblx0XHQvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuXHRcdHN0b3JlID0gdW5kZWZpbmVkXG5cdH1cblxuXHQvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcblx0Ly8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcblx0aWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcblxuXHRyZXR1cm4gX3N0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcblx0Y29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcblx0cmV0dXJuIHN0b3JlXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ }),

/***/ "./src/store/initialState.js":
/*!***********************************!*\
  !*** ./src/store/initialState.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initialState = {\n  products: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcz8yNjQzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUU7QUFEVSxDQUFyQjtBQUlBLCtEQUFlRCxZQUFmIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0cHJvZHVjdHM6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/initialState.js\n");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.js */ \"./src/store/reducers/products.js\");\n\n\n\nconst createRootReducer = () => (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  products: _products_js__WEBPACK_IMPORTED_MODULE_1__.default\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzPzE1ZjgiXSwibmFtZXMiOlsiY3JlYXRlUm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUcsTUFDekJDLHNEQUFlLENBQUM7QUFDZkMsVUFBUUE7QUFETyxDQUFELENBRGhCOztBQUtBLCtEQUFlRixpQkFBZiIsImZpbGUiOiIuL3NyYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuL3Byb2R1Y3RzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVJvb3RSZWR1Y2VyID0gKCkgPT5cblx0Y29tYmluZVJlZHVjZXJzKHtcblx0XHRwcm9kdWN0cyxcblx0fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/index.js\n");

/***/ }),

/***/ "./src/store/reducers/products.js":
/*!****************************************!*\
  !*** ./src/store/reducers/products.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ \"./src/store/actions/action-types.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ \"./src/store/initialState.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst products = (state = _initialState__WEBPACK_IMPORTED_MODULE_1__.default, action) => {\n  switch (action.type) {\n    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.default.SET_PRODUCTS:\n      return _objectSpread(_objectSpread({}, state), action.payload.products);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzLmpzPzNmYzUiXSwibmFtZXMiOlsicHJvZHVjdHMiLCJzdGF0ZSIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUNDLEtBQUssR0FBR0Msa0RBQVQsRUFBdUJDLE1BQXZCLEtBQWtDO0FBQ2xELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLHVFQUFMO0FBQ0MsNkNBQVlKLEtBQVosR0FBc0JFLE1BQU0sQ0FBQ0csT0FBUCxDQUFlTixRQUFyQzs7QUFFRDtBQUNDLGFBQU9DLEtBQVA7QUFMRjtBQU9BLENBUkQ7O0FBVUEsK0RBQWVELFFBQWYiLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzXCI7XG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gXCIuLi9pbml0aWFsU3RhdGVcIjtcblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5TRVRfUFJPRFVDVFM6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQucHJvZHVjdHMgfTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/products.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();