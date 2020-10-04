module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Calculator/Calculator.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/Calculator/Calculator.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"calculator\": \"Calculator_calculator__HuvtL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IubW9kdWxlLnNjc3M/MTdiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IvQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhbGN1bGF0b3JcIjogXCJDYWxjdWxhdG9yX2NhbGN1bGF0b3JfX0h1dnRMXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calculator/Calculator.module.scss\n");

/***/ }),

/***/ "./src/components/Calculator/index.js":
/*!********************************************!*\
  !*** ./src/components/Calculator/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.scss */ \"./src/components/Calculator/Calculator.module.scss\");\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/leonardo/Documentos/test-next/src/components/Calculator/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Calculator = () => {\n  const {\n    0: altura,\n    1: setAltura\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: peso,\n    1: setPeso\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: imc,\n    1: setImc\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const calculateImc = () => {\n    const alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  };\n\n  const verifyImc = () => {\n    if (imc < 18.5) return \"Abaixo do peso\";\n    if (imc < 24.9) return \"Peso normal\";\n    if (imc < 29.9) return \"Sobrepeso\";\n    if (imc < 34.9) return \"Obesidade grau 1\";\n    if (imc < 39.9) return \"Obesidade grau 2\";\n    return \"Obsesidade grau 3\";\n  };\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: ({\n      target\n    }) => setAltura(target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: ({\n      target\n    }) => setPeso(target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: () => calculateImc(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"Calcular\")), imc && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, \"O seu IMC \\xE9: \", imc, \" kg/m\\xB2 - \", verifyImc(), \" \")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzI0OGYiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsImFsdHVyYSIsInNldEFsdHVyYSIsInVzZVN0YXRlIiwicGVzbyIsInNldFBlc28iLCJpbWMiLCJzZXRJbWMiLCJjYWxjdWxhdGVJbWMiLCJhbHR1cmFtIiwidG9GaXhlZCIsInZlcmlmeUltYyIsInN0eWxlcyIsImNhbGN1bGF0b3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUV2QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxDQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCSixzREFBUSxFQUE5Qjs7QUFFQSxRQUFNSyxZQUFZLEdBQUcsTUFBTTtBQUN6QixVQUFNQyxPQUFPLEdBQUdSLE1BQU0sR0FBQyxHQUF2QjtBQUNBTSxVQUFNLENBQUMsQ0FBQ0gsSUFBSSxJQUFFSyxPQUFPLEdBQUNBLE9BQVYsQ0FBTCxFQUF5QkMsT0FBekIsQ0FBaUMsQ0FBakMsQ0FBRCxDQUFOO0FBQ0QsR0FIRDs7QUFLQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFJTCxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLGdCQUFQO0FBQ2hCLFFBQUlBLEdBQUcsR0FBRyxJQUFWLEVBQWdCLE9BQU8sYUFBUDtBQUNoQixRQUFJQSxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLFdBQVA7QUFDaEIsUUFBSUEsR0FBRyxHQUFHLElBQVYsRUFBZ0IsT0FBTyxrQkFBUDtBQUNoQixRQUFJQSxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLGtCQUFQO0FBQ2hCLFdBQU8sbUJBQVA7QUFDRCxHQVBEOztBQVNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVNLDhEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsYUFBUyxNQUhYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFLRSxTQUFLLEVBQUVaLE1BTFQ7QUFNRSxZQUFRLEVBQUUsQ0FBQztBQUFFYTtBQUFGLEtBQUQsS0FBZ0JaLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDQyxLQUFSLENBTnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBWUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBQyxZQURSO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxhQUFTLE1BSFg7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFNBQUssRUFBRVgsSUFMVDtBQU1FLFlBQVEsRUFBRSxDQUFDO0FBQUVVO0FBQUYsS0FBRCxLQUFnQlQsT0FBTyxDQUFDUyxNQUFNLENBQUNDLEtBQVIsQ0FObkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUF1QkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLE1BSFg7QUFJRSxXQUFPLEVBQUUsTUFBTVAsWUFBWSxFQUo3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdkJGLEVBa0NJRixHQUFHLElBQ0gsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUEwQkEsR0FBMUIsa0JBQXdDSyxTQUFTLEVBQWpELE1BREYsQ0FuQ0osQ0FGRixDQURGLENBREY7QUFpREQsQ0FyRUQ7O0FBdUVlWCx5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2FsdHVyYSwgc2V0QWx0dXJhXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtwZXNvLCBzZXRQZXNvXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3QgY2FsY3VsYXRlSW1jID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsdHVyYW0gPSBhbHR1cmEvMTAwXG4gICAgc2V0SW1jKChwZXNvLyhhbHR1cmFtKmFsdHVyYW0pKS50b0ZpeGVkKDIpKVxuICB9XG5cbiAgY29uc3QgdmVyaWZ5SW1jID0gKCkgPT4ge1xuICAgIGlmIChpbWMgPCAxOC41KSByZXR1cm4gXCJBYmFpeG8gZG8gcGVzb1wiXG4gICAgaWYgKGltYyA8IDI0LjkpIHJldHVybiBcIlBlc28gbm9ybWFsXCJcbiAgICBpZiAoaW1jIDwgMjkuOSkgcmV0dXJuIFwiU29icmVwZXNvXCJcbiAgICBpZiAoaW1jIDwgMzQuOSkgcmV0dXJuIFwiT2Jlc2lkYWRlIGdyYXUgMVwiXG4gICAgaWYgKGltYyA8IDM5LjkpIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDJcIlxuICAgIHJldHVybiBcIk9ic2VzaWRhZGUgZ3JhdSAzXCJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxjdWxhdG9yfT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5DYWxjdWxhZG9yYTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWx0dXJhIGVtIGNtXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2FsdHVyYX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRBbHR1cmEodGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlBlc28gZW0ga2dcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGVzb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQZXNvKHRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FsY3VsYXRlSW1jKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbGN1bGFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1jICYmXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5PIHNldSBJTUMgw6k6IHtpbWN9IGtnL23CsiAtIHt2ZXJpZnlJbWMoKX0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calculator/index.js\n");

/***/ }),

/***/ "./src/components/Header/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__fqqrS\",\n\t\"header__title\": \"Header_header__title__2JJ0Q\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzPzIyNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX19mcXFyU1wiLFxuXHRcImhlYWRlcl9fdGl0bGVcIjogXCJIZWFkZXJfaGVhZGVyX190aXRsZV9fMkpKMFFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/leonardo/Documentos/test-next/src/components/Header/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = () => {\n  return __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    fixed: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    justify: \"center\",\n    alignItems: \"center\",\n    spacing: 5,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h3\",\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"Calcule o seu IMC\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"O IMC \\xE9 o \\xEDndice de massa corporal, e \\xE9 utilizado para saber se o peso est\\xE1 de acordo com a altura\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/medic.png\",\n    alt: \"M\\xE9dico e paciente\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/NDY3NiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZXMiLCJoZWFkZXIiLCJoZWFkZXJfX3RpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFNBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFDLFFBQXhCO0FBQWlDLGNBQVUsRUFBQyxRQUE1QztBQUFxRCxXQUFPLEVBQUUsQ0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxhQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNIQUZGLENBREYsRUFNRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLE9BQUcsRUFBQyxzQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERixDQURGLENBREY7QUFpQkQsQ0FsQkQ7O0FBb0JlSCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8Q29udGFpbmVyIGZpeGVkPlxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX190aXRsZX0+Q2FsY3VsZSBvIHNldSBJTUM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5PIElNQyDDqSBvIMOtbmRpY2UgZGUgbWFzc2EgY29ycG9yYWwsIGUgw6kgdXRpbGl6YWRvIHBhcmEgc2FiZXIgc2UgbyBwZXNvIGVzdMOhIGRlIGFjb3JkbyBjb20gYSBhbHR1cmE8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL21lZGljLnBuZ1wiIGFsdD1cIk3DqWRpY28gZSBwYWNpZW50ZVwiIC8+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Calculator */ \"./src/components/Calculator/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.js\");\nvar _jsxFileName = \"/home/leonardo/Documentos/test-next/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst HomePage = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Calculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FQRDs7QUFTZUEsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0NhbGN1bGF0b3InO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q2FsY3VsYXRvciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });