/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Form-container.js":
/*!******************************************!*\
  !*** ./src/components/Form-container.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nova_vi_www_test_next_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ontainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Сontainer */ \"./src/components/Сontainer.js\");\n/* harmony import */ var _constant_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/common */ \"./src/constant/common.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ \"./src/components/Link.js\");\n/* harmony import */ var _Login_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login-form */ \"./src/components/Login-form.js\");\n/* harmony import */ var _Signup_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Signup-form */ \"./src/components/Signup-form.js\");\n/* harmony import */ var _Forgot_password_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Forgot-password-form */ \"./src/components/Forgot-password-form.js\");\n/* harmony import */ var _styles_modules_link_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/modules/link.module.scss */ \"./src/styles/modules/link.module.scss\");\n/* harmony import */ var _styles_modules_link_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_link_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/nova-vi/www/test-next-project/src/components/Form-container.js\",\n    _mapContainer,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar mapContainer = (_mapContainer = {}, (0,_home_nova_vi_www_test_next_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_mapContainer, _constant_common__WEBPACK_IMPORTED_MODULE_4__.SIGNUP_FORM, {\n  title: \"Get on board\",\n  component: _Signup_form__WEBPACK_IMPORTED_MODULE_7__.default,\n  link: {\n    text: \"New here?\",\n    linkText: \"Sing in\"\n  },\n  redirectTo: _constant_common__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM\n}), (0,_home_nova_vi_www_test_next_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_mapContainer, _constant_common__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM, {\n  title: \"Hello there, welcome back\",\n  component: _Login_form__WEBPACK_IMPORTED_MODULE_6__.default,\n  link: {\n    text: \"New here?\",\n    linkText: \"Sing up\"\n  },\n  redirectTo: _constant_common__WEBPACK_IMPORTED_MODULE_4__.SIGNUP_FORM\n}), (0,_home_nova_vi_www_test_next_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_mapContainer, _constant_common__WEBPACK_IMPORTED_MODULE_4__.FORGOTPAS_FORM, {\n  title: \"Forgot your password?\",\n  component: _Forgot_password_form__WEBPACK_IMPORTED_MODULE_8__.default,\n  link: {\n    text: \"New here?\",\n    linkText: \"Sing up\"\n  },\n  redirectTo: _constant_common__WEBPACK_IMPORTED_MODULE_4__.SIGNUP_FORM\n}), _mapContainer);\nfunction FormContainer() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(mapContainer[_constant_common__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM]),\n      currentForm = _useState[0],\n      setCurrentForm = _useState[1];\n\n  var handlFormChenge = function handlFormChenge(formType) {\n    setCurrentForm(formType);\n  };\n\n  var title = currentForm.title,\n      component = currentForm.component,\n      _currentForm$link = currentForm.link,\n      text = _currentForm$link.text,\n      linkText = _currentForm$link.linkText,\n      redirectTo = currentForm.redirectTo;\n  console.log(currentForm);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n    title: title,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_modules_link_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link_wrap),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"links-text\",\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"links\",\n        onClick: function onClick() {\n          return handlFormChenge(redirectTo);\n        },\n        children: linkText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 3\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: currentForm === _constant_common__WEBPACK_IMPORTED_MODULE_4__.FORGOTPAS_FORM ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: \"Forgot your password?\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Forgot_password_form__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_5__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_4__.SIGNUP_FORM);\n        },\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-forgot-pass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }, this) : currentForm === _constant_common__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: \"Hello there, welcome back\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_form__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_5__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_4__.SIGNUP_FORM);\n        },\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-sign\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: \"Get on board\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Signup_form__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_5__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM);\n        },\n        text: \"Already have an account?\",\n        linkText: \"Sing in\",\n        className: \"links-log\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n\n_s(FormContainer, \"rBKPMJ9hYzdWahIusntIyUDEdi8=\");\n\n_c = FormContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"FormContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS1jb250YWluZXIuanM/ODM3OSJdLCJuYW1lcyI6WyJtYXBDb250YWluZXIiLCJTSUdOVVBfRk9STSIsInRpdGxlIiwiY29tcG9uZW50IiwiU2lnblVwRm9ybSIsImxpbmsiLCJ0ZXh0IiwibGlua1RleHQiLCJyZWRpcmVjdFRvIiwiTE9HSU5fRk9STSIsIkxvZ0luRm9ybSIsIkZPUkdPVFBBU19GT1JNIiwiRm9yZ290UGFzc0Zvcm0iLCJGb3JtQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjdXJyZW50Rm9ybSIsInNldEN1cnJlbnRGb3JtIiwiaGFuZGxGb3JtQ2hlbmdlIiwiZm9ybVR5cGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFlBQVksMEtBQ2hCQyx5REFEZ0IsRUFDRjtBQUNkQyxPQUFLLEVBQUUsY0FETztBQUVkQyxXQUFTLEVBQUVDLGlEQUZHO0FBR2RDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsV0FERDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQUhRO0FBT2RDLFlBQVUsRUFBRUMsd0RBQVVBO0FBUFIsQ0FERSxxSkFVaEJBLHdEQVZnQixFQVVIO0FBQ2JQLE9BQUssRUFBRSwyQkFETTtBQUViQyxXQUFTLEVBQUVPLGdEQUZFO0FBR2JMLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsV0FERDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQUhPO0FBT2JDLFlBQVUsRUFBRVAseURBQVdBO0FBUFYsQ0FWRyxxSkFtQmhCVSw0REFuQmdCLEVBbUJDO0FBQ2pCVCxPQUFLLEVBQUUsdUJBRFU7QUFFakJDLFdBQVMsRUFBRVMsMERBRk07QUFHakJQLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsV0FERDtBQUVMQyxZQUFRLEVB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QUEsYSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm0tY29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL9Chb250YWluZXJcIlxuaW1wb3J0IHsgU0lHTlVQX0ZPUk0sIExPR0lOX0ZPUk0sIEZPUkdPVFBBU19GT1JNIH0gZnJvbSBcIi4uL2NvbnN0YW50L2NvbW1vblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IExvZ0luRm9ybSBmcm9tIFwiLi9Mb2dpbi1mb3JtXCJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gXCIuL1NpZ251cC1mb3JtXCJcbmltcG9ydCBGb3Jnb3RQYXNzRm9ybSBmcm9tIFwiLi9Gb3Jnb3QtcGFzc3dvcmQtZm9ybVwiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9tb2R1bGVzL2xpbmsubW9kdWxlLnNjc3NcIlxuXG5cblxuXG5cbmNvbnN0IG1hcENvbnRhaW5lciA9IHtcblx0W1NJR05VUF9GT1JNXToge1xuXHRcdHRpdGxlOiBcIkdldCBvbiBib2FyZFwiLFxuXHRcdGNvbXBvbmVudDogU2lnblVwRm9ybSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0ZXh0OiBcIk5ldyBoZXJlP1wiLFxuXHRcdFx0bGlua1RleHQ6IFwiU2luZyBpblwiLFxuXHRcdH0sXG5cdFx0cmVkaXJlY3RUbzogTE9HSU5fRk9STVxuXHR9LFxuXHRbTE9HSU5fRk9STV06IHtcblx0XHR0aXRsZTogXCJIZWxsbyB0aGVyZSwgd2VsY29tZSBiYWNrXCIsXG5cdFx0Y29tcG9uZW50OiBMb2dJbkZvcm0sXG5cdFx0bGluazoge1xuXHRcdFx0dGV4dDogXCJOZXcgaGVyZT9cIixcblx0XHRcdGxpbmtUZXh0OiBcIlNpbmcgdXBcIixcblx0XHR9LFxuXHRcdHJlZGlyZWN0VG86IFNJR05VUF9GT1JNXG5cdH0sXG5cdFtGT1JHT1RQQVNfRk9STV06IHtcblx0XHR0aXRsZTogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIixcblx0XHRjb21wb25lbnQ6IEZvcmdvdFBhc3NGb3JtLFxuXHRcdGxpbms6IHtcblx0XHRcdHRleHQ6IFwiTmV3IGhlcmU/XCIsXG5cdFx0XHRsaW5rVGV4dDogXCJTaW5nIHVwXCIsXG5cdFx0fSxcblx0XHRyZWRpcmVjdFRvOiBTSUdOVVBfRk9STVxuXHR9LFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Db250YWluZXIoKSB7XG5cdGNvbnN0IFtjdXJyZW50Rm9ybSwgc2V0Q3VycmVudEZvcm1dID0gdXNlU3RhdGUobWFwQ29udGFpbmVyW0xPR0lOX0ZPUk1dKTtcblxuXHRjb25zdCBoYW5kbEZvcm1DaGVuZ2UgPSAoZm9ybVR5cGUpID0+IHtcblx0XHRzZXRDdXJyZW50Rm9ybShmb3JtVHlwZSk7XG5cdH07XG5cblxuXG5cdGNvbnN0IHsgdGl0bGUsIGNvbXBvbmVudCwgbGluazogeyB0ZXh0LCBsaW5rVGV4dCB9LCByZWRpcmVjdFRvIH0gPSBjdXJyZW50Rm9ybTtcblx0Y29uc29sZS5sb2coY3VycmVudEZvcm0pXG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lciB0aXRsZT17dGl0bGV9PlxuXHRcdFx0ey8qIHtjb21wb25lbnR9ICovfVxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5saW5rX3dyYXB9PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaW5rcy10ZXh0XCI+e3RleHR9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImxpbmtzXCIgb25DbGljaz17KCkgPT4gaGFuZGxGb3JtQ2hlbmdlKHJlZGlyZWN0VG8pfT5cblx0XHRcdFx0XHR7bGlua1RleHR9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Db250YWluZXI+XG5cdClcblxuXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2N1cnJlbnRGb3JtID09PSBGT1JHT1RQQVNfRk9STSA/IChcblx0XHRcdFx0PENvbnRhaW5lciB0aXRsZT1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiPlxuXHRcdFx0XHRcdDxGb3Jnb3RQYXNzRm9ybSAvPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxGb3JtQ2hlbmdlKFNJR05VUF9GT1JNKX1cblx0XHRcdFx0XHRcdHRleHQ9XCJOZXcgaGVyZT9cIlxuXHRcdFx0XHRcdFx0bGlua1RleHQ9XCJTaW5nIHVwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpbmtzLWZvcmdvdC1wYXNzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdCkgOiBjdXJyZW50Rm9ybSA9PT0gTE9HSU5fRk9STSA/IChcblx0XHRcdFx0PENvbnRhaW5lciB0aXRsZT1cIkhlbGxvIHRoZXJlLCB3ZWxjb21lIGJhY2tcIj5cblx0XHRcdFx0XHQ8TG9nSW5Gb3JtIC8+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrPXsoKSA9PiBoYW5kbEZvcm1DaGVuZ2UoU0lHTlVQX0ZPUk0pfVxuXHRcdFx0XHRcdFx0dGV4dD1cIk5ldyBoZXJlP1wiXG5cdFx0XHRcdFx0XHRsaW5rVGV4dD1cIlNpbmcgdXBcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGlua3Mtc2lnblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8Q29udGFpbmVyIHRpdGxlPVwiR2V0IG9uIGJvYXJkXCI+XG5cdFx0XHRcdFx0PFNpZ25VcEZvcm0gLz5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2s9eygpID0+IGhhbmRsRm9ybUNoZW5nZShMT0dJTl9GT1JNKX1cblx0XHRcdFx0XHRcdHRleHQ9XCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIlxuXHRcdFx0XHRcdFx0bGlua1RleHQ9XCJTaW5nIGluXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpbmtzLWxvZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Form-container.js\n");

/***/ })

});