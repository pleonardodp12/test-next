webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Calculator/index.js":
/*!********************************************!*\
  !*** ./src/components/Calculator/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.scss */ \"./src/components/Calculator/Calculator.module.scss\");\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/leonardo/Documentos/test-next/src/components/Calculator/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Calculator = function Calculator() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      altura = _useState[0],\n      setAltura = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      peso = _useState2[0],\n      setPeso = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      imc = _useState3[0],\n      setImc = _useState3[1];\n\n  var calculateImc = function calculateImc() {\n    var alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  };\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: function onChange(_ref) {\n      var target = _ref.target;\n      return setAltura(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: function onChange(_ref2) {\n      var target = _ref2.target;\n      return setPeso(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: function onClick() {\n      return calculateImc();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Calcular\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"O seu IMC \\xE9: \", imc, \" kg/m\\xB2\")))));\n};\n\n_s(Calculator, \"Snj5Kyg30/inE1BnLv9bjSLfQuU=\");\n\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\nvar _c;\n\n$RefreshReg$(_c, \"Calculator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9pbmRleC5qcz8yNDhmIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImFsdHVyYSIsInNldEFsdHVyYSIsInBlc28iLCJzZXRQZXNvIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSW1jIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsQ0FBRCxDQUZiO0FBQUEsTUFFaEJDLE1BRmdCO0FBQUEsTUFFUkMsU0FGUTs7QUFBQSxtQkFHQ0Ysc0RBQVEsQ0FBQyxDQUFELENBSFQ7QUFBQSxNQUdoQkcsSUFIZ0I7QUFBQSxNQUdWQyxPQUhVOztBQUFBLG1CQUlESixzREFBUSxFQUpQO0FBQUEsTUFJaEJLLEdBSmdCO0FBQUEsTUFJWEMsTUFKVzs7QUFNdkIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFNQyxPQUFPLEdBQUdQLE1BQU0sR0FBQyxHQUF2QjtBQUNBSyxVQUFNLENBQUMsQ0FBQ0gsSUFBSSxJQUFFSyxPQUFPLEdBQUNBLE9BQVYsQ0FBTCxFQUF5QkMsT0FBekIsQ0FBaUMsQ0FBakMsQ0FBRCxDQUFOO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxXQUFPLEVBQUMsUUFGVjtBQUdFLGFBQVMsTUFIWDtBQUlFLFFBQUksRUFBQyxRQUpQO0FBS0UsU0FBSyxFQUFFVixNQUxUO0FBTUUsWUFBUSxFQUFFO0FBQUEsVUFBR1csTUFBSCxRQUFHQSxNQUFIO0FBQUEsYUFBZ0JWLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDQyxLQUFSLENBQXpCO0FBQUEsS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVlFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUMsWUFEUjtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsYUFBUyxNQUhYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFLRSxTQUFLLEVBQUVWLElBTFQ7QUFNRSxZQUFRLEVBQUU7QUFBQSxVQUFHUyxNQUFILFNBQUdBLE1BQUg7QUFBQSxhQUFnQlIsT0FBTyxDQUFDUSxNQUFNLENBQUNDLEtBQVIsQ0FBdkI7QUFBQSxLQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLEVBdUJFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxNQUhYO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTU4sWUFBWSxFQUFsQjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQXZCRixFQWtDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTBCRixHQUExQixjQURGLENBbENGLENBRkYsQ0FERixDQURGO0FBOENELENBekREOztHQUFNTixVOztLQUFBQSxVO0FBMkRTQSx5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2FsdHVyYSwgc2V0QWx0dXJhXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtwZXNvLCBzZXRQZXNvXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3QgY2FsY3VsYXRlSW1jID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsdHVyYW0gPSBhbHR1cmEvMTAwXG4gICAgc2V0SW1jKChwZXNvLyhhbHR1cmFtKmFsdHVyYW0pKS50b0ZpeGVkKDIpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkNhbGN1bGFkb3JhPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJBbHR1cmEgZW0gY21cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17YWx0dXJhfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEFsdHVyYSh0YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGVzbyBlbSBrZ1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwZXNvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFBlc28odGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYWxjdWxhdGVJbWMoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FsY3VsYXJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5PIHNldSBJTUMgw6k6IHtpbWN9IGtnL23CsjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Calculator/index.js\n");

/***/ })

})