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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ontainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Сontainer */ \"./src/components/Сontainer.js\");\n/* harmony import */ var _constant_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/common */ \"./src/constant/common.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./src/components/Link.js\");\n/* harmony import */ var _Login_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login-form */ \"./src/components/Login-form.js\");\n/* harmony import */ var _Signup_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signup-form */ \"./src/components/Signup-form.js\");\n/* harmony import */ var _Forgot_password_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forgot-password-form */ \"./src/components/Forgot-password-form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/nova-vi/www/test-next-project/src/components/Form-container.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FormContainer() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constant_common__WEBPACK_IMPORTED_MODULE_3__.LOGIN_FORM),\n      currentForm = _useState[0],\n      setCurrentForm = _useState[1];\n\n  var handlFormChenge = function handlFormChenge(formType) {\n    setCurrentForm(formType);\n  };\n\n  var getContainer = function getContainer(formType) {\n    var options = {\n      title: \"Get on board\",\n      component: _Signup_form__WEBPACK_IMPORTED_MODULE_6__.default,\n      link: {\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-sign\"\n      }\n    };\n\n    switch (formType) {\n      case _constant_common__WEBPACK_IMPORTED_MODULE_3__.FORGOTPAS_FORM:\n        options;\n        break;\n\n      case _constant_common__WEBPACK_IMPORTED_MODULE_3__.FORGOTPAS_FORM:\n        break;\n\n      default:\n    }\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: \"Forgot your password?\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Forgot_password_form__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_3__.SIGNUP_FORM);\n        },\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-forgot-pass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: currentForm === _constant_common__WEBPACK_IMPORTED_MODULE_3__.FORGOTPAS_FORM ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: \"Forgot your password?\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Forgot_password_form__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_3__.SIGNUP_FORM);\n        },\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-forgot-pass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, this) : currentForm === _constant_common__WEBPACK_IMPORTED_MODULE_3__.LOGIN_FORM ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: \"Hello there, welcome back\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_form__WEBPACK_IMPORTED_MODULE_5__.default, {\n        moveToForgot: function moveToForgot() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_3__.FORGOTPAS_FORM);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_3__.SIGNUP_FORM);\n        },\n        text: \"New here?\",\n        linkText: \"Sing up\",\n        className: \"links-sign\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ontainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_4__.default, {\n        handleClick: function handleClick() {\n          return handlFormChenge(_constant_common__WEBPACK_IMPORTED_MODULE_3__.LOGIN_FORM);\n        },\n        text: \"Already have an account?\",\n        linkText: \"Sing in\",\n        className: \"links-log\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n\n_s(FormContainer, \"3s4q31b0PA7pkoajet2mblvbI/c=\");\n\n_c = FormContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"FormContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS1jb250YWluZXIuanM/ODM3OSJdLCJuYW1lcyI6WyJGb3JtQ29udGFpbmVyIiwidXNlU3RhdGUiLCJMT0dJTl9GT1JNIiwiY3VycmVudEZvcm0iLCJzZXRDdXJyZW50Rm9ybSIsImhhbmRsRm9ybUNoZW5nZSIsImZvcm1UeXBlIiwiZ2V0Q29udGFpbmVyIiwib3B0aW9ucyIsInRpdGxlIiwiY29tcG9uZW50IiwiU2lnblVwRm9ybSIsImxpbmsiLCJ0ZXh0IiwibGlua1RleHQiLCJjbGFzc05hbWUiLCJGT1JHT1RQQVNfRk9STSIsIlNJR05VUF9GT1JNIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQ0Msd0RBQUQsQ0FEUDtBQUFBLE1BQ2hDQyxXQURnQztBQUFBLE1BQ25CQyxjQURtQjs7QUFHdkMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxRQUFELEVBQWM7QUFDckNGLGtCQUFjLENBQUNFLFFBQUQsQ0FBZDtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0QsUUFBRCxFQUFjO0FBRWxDLFFBQU1FLE9BQU8sR0FBRztBQUNmQyxXQUFLLEVBQUUsY0FEUTtBQUVmQyxlQUFTLEVBQUVDLGlEQUZJO0FBR2ZDLFVBQUksRUFBRTtBQUNMQyxZQUFJLEVBQUUsV0FERDtBQUVMQyxnQkFBUSxFQUFFLFNBRkw7QUFHTEMsaUJBQVMsRUFBRTtBQUhOO0FBSFMsS0FBaEI7O0FBV0EsWUFBUVQsUUFBUjtBQUNDLFdBQUtVLDREQUFMO0FBQ0NSLGVBQU87QUFDUDs7QUFFRCxXQUFLUSw0REFBTDtBQUVDOztBQUVEO0FBVEQ7O0FBY0Esd0JBQ0MsOERBQUMsOENBQUQ7QUFBVyxXQUFLLEVBQUMsdUJBQWpCO0FBQUEsOEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsMENBQUQ7QUFDQyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1YLGVBQWUsQ0FBQ1kseURBQUQsQ0FBckI7QUFBQSxTQURkO0FBRUMsWUFBSSxFQUFDLFdBRk47QUFHQyxnQkFBUSxFQUFDLFNBSFY7QUFJQyxpQkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBYUEsR0F4Q0Q7O0FBMENBLHNCQUNDO0FBQUEsY0FDRWQsV0FBVyxLQUFLYSw0REFBaEIsZ0JBQ0EsOERBQUMsOENBQUQ7QUFBVyxXQUFLLEVBQUMsdUJBQWpCO0FBQUEsOEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUMsOERBQUMsMENBQUQ7QUFDQyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1YLGVBQWUsQ0FBQ1kseURBQUQsQ0FBckI7QUFBQSxTQURkO0FBRUMsWUFBSSxFQUFDLFdBRk47QUFHQyxnQkFBUSxFQUFDLFNBSFY7QUFJQyxpQkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEdBVUdkLFdBQVcsS0FBS0Qsd0RBQWhCLGdCQUNILDhEQUFDLDhDQUFEO0FBQVcsV0FBSyxFQUFDLDJCQUFqQjtBQUFBLDhCQUNDLDhEQUFDLGdEQUFEO0FBQVcsb0JBQVksRUFBRTtBQUFBLGlCQUFNRyxlQUFlLENBQUNXLDREQUFELENBQXJCO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUMsOERBQUMsMENBQUQ7QUFDQyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1YLGVBQWUsQ0FBQ1kseURBQUQsQ0FBckI7QUFBQSxTQURkO0FBRUMsWUFBSSxFQUFDLFdBRk47QUFHQyxnQkFBUSxFQUFDLFNBSFY7QUFJQyxpQkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGdCQVdILDhEQUFDLDhDQUFEO0FBQVcsV0FBSyxFQUFDLEVBQWpCO0FBQUEsNkJBRUMsOERBQUMsMENBQUQ7QUFDQyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1aLGVBQWUsQ0FBQ0gsd0RBQUQsQ0FBckI7QUFBQSxTQURkO0FBRUMsWUFBSSxFQUFDLDBCQUZOO0FBR0MsZ0JBQVEsRUFBQyxTQUhWO0FBSUMsaUJBQVMsRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJGLG1CQUREO0FBbUNBOztHQXBGdUJGLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLWNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi/QoW9udGFpbmVyXCJcbmltcG9ydCB7IFNJR05VUF9GT1JNLCBMT0dJTl9GT1JNLCBGT1JHT1RQQVNfRk9STSB9IGZyb20gXCIuLi9jb25zdGFudC9jb21tb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBMb2dJbkZvcm0gZnJvbSBcIi4vTG9naW4tZm9ybVwiXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tIFwiLi9TaWdudXAtZm9ybVwiXG5pbXBvcnQgRm9yZ290UGFzc0Zvcm0gZnJvbSBcIi4vRm9yZ290LXBhc3N3b3JkLWZvcm1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQ29udGFpbmVyKCkge1xuXHRjb25zdCBbY3VycmVudEZvcm0sIHNldEN1cnJlbnRGb3JtXSA9IHVzZVN0YXRlKExPR0lOX0ZPUk0pO1xuXG5cdGNvbnN0IGhhbmRsRm9ybUNoZW5nZSA9IChmb3JtVHlwZSkgPT4ge1xuXHRcdHNldEN1cnJlbnRGb3JtKGZvcm1UeXBlKTtcblx0fTtcblxuXHRjb25zdCBnZXRDb250YWluZXIgPSAoZm9ybVR5cGUpID0+IHtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHR0aXRsZTogXCJHZXQgb24gYm9hcmRcIixcblx0XHRcdGNvbXBvbmVudDogU2lnblVwRm9ybSxcblx0XHRcdGxpbms6IHtcblx0XHRcdFx0dGV4dDogXCJOZXcgaGVyZT9cIixcblx0XHRcdFx0bGlua1RleHQ6IFwiU2luZyB1cFwiLFxuXHRcdFx0XHRjbGFzc05hbWU6IFwibGlua3Mtc2lnblwiLFxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0c3dpdGNoIChmb3JtVHlwZSkge1xuXHRcdFx0Y2FzZSBGT1JHT1RQQVNfRk9STTpcblx0XHRcdFx0b3B0aW9uc1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGT1JHT1RQQVNfRk9STTpcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cblxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb250YWluZXIgdGl0bGU9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIj5cblx0XHRcdFx0PEZvcmdvdFBhc3NGb3JtIC8+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0aGFuZGxlQ2xpY2s9eygpID0+IGhhbmRsRm9ybUNoZW5nZShTSUdOVVBfRk9STSl9XG5cdFx0XHRcdFx0dGV4dD1cIk5ldyBoZXJlP1wiXG5cdFx0XHRcdFx0bGlua1RleHQ9XCJTaW5nIHVwXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsaW5rcy1mb3Jnb3QtcGFzc1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQpXG5cblxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2N1cnJlbnRGb3JtID09PSBGT1JHT1RQQVNfRk9STSA/IChcblx0XHRcdFx0PENvbnRhaW5lciB0aXRsZT1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiPlxuXHRcdFx0XHRcdDxGb3Jnb3RQYXNzRm9ybSAvPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxGb3JtQ2hlbmdlKFNJR05VUF9GT1JNKX1cblx0XHRcdFx0XHRcdHRleHQ9XCJOZXcgaGVyZT9cIlxuXHRcdFx0XHRcdFx0bGlua1RleHQ9XCJTaW5nIHVwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpbmtzLWZvcmdvdC1wYXNzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdCkgOiBjdXJyZW50Rm9ybSA9PT0gTE9HSU5fRk9STSA/IChcblx0XHRcdFx0PENvbnRhaW5lciB0aXRsZT1cIkhlbGxvIHRoZXJlLCB3ZWxjb21lIGJhY2tcIj5cblx0XHRcdFx0XHQ8TG9nSW5Gb3JtIG1vdmVUb0ZvcmdvdD17KCkgPT4gaGFuZGxGb3JtQ2hlbmdlKEZPUkdPVFBBU19GT1JNKX0gLz5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2s9eygpID0+IGhhbmRsRm9ybUNoZW5nZShTSUdOVVBfRk9STSl9XG5cdFx0XHRcdFx0XHR0ZXh0PVwiTmV3IGhlcmU/XCJcblx0XHRcdFx0XHRcdGxpbmtUZXh0PVwiU2luZyB1cFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsaW5rcy1zaWduXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxDb250YWluZXIgdGl0bGU9XCJcIj5cblxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxGb3JtQ2hlbmdlKExPR0lOX0ZPUk0pfVxuXHRcdFx0XHRcdFx0dGV4dD1cIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiXG5cdFx0XHRcdFx0XHRsaW5rVGV4dD1cIlNpbmcgaW5cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGlua3MtbG9nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form-container.js\n");

/***/ })

});