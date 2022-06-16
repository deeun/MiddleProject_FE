/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Ours/Our/Detailslist.js":
/*!********************************************!*\
  !*** ./components/Ours/Our/Detailslist.js ***!
  \********************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/Ours/Our/Detailslists.js":
/*!*********************************************!*\
  !*** ./components/Ours/Our/Detailslists.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Detailslist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detailslist */ \"./components/Ours/Our/Detailslist.js\");\n/* harmony import */ var _Detailslist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Detailslist__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar place = {};\nvar Detailslists = function(props) {\n    var detailslists = props.detailslists.map(function(detailslist) {\n        if (props.realName === detailslist.villageName) {\n            place = detailslist;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            place.villageName,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                lineNumber: 14,\n                columnNumber: 38\n            }, _this),\n            place.experienceName\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n        lineNumber: 13,\n        columnNumber: 13\n    }, _this);\n};\n_c = Detailslists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailslists);\nvar _c;\n$RefreshReg$(_c, \"Detailslists\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Q7QUFFdkMsSUFBSUcsS0FBSyxHQUFHLEVBQUU7QUFDZCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3hCLElBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDQyxZQUFZLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsV0FBVyxFQUFJO1FBQ3ZELElBQUlILEtBQUssQ0FBQ0ksUUFBUSxLQUFLRCxXQUFXLENBQUNFLFdBQVcsRUFBQztZQUMzQ1AsS0FBSyxHQUFHSyxXQUFXLENBQUM7U0FDdkI7S0FDSixDQUFDO0lBRUYscUJBQ0ksOERBQUNHLEtBQUc7O1lBQ0VSLEtBQUssQ0FBQ08sV0FBVztZQUFDLEdBQUM7MEJBQUEsOERBQUNFLElBQUU7Ozs7cUJBQUU7WUFDekJULEtBQUssQ0FBQ1UsY0FBYzs7Ozs7O2FBQ25CLENBQ1I7Q0FDTDtBQWJDVCxLQUFBQSxZQUFZO0FBY2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdXJzL091ci9EZXRhaWxzbGlzdHMuanM/MmFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEZXRhaWxzbGlzdCBmcm9tICcuL0RldGFpbHNsaXN0J1xyXG5cclxubGV0IHBsYWNlID0ge307XHJcbmNvbnN0IERldGFpbHNsaXN0cyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHNsaXN0cyA9IHByb3BzLmRldGFpbHNsaXN0cy5tYXAoZGV0YWlsc2xpc3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMucmVhbE5hbWUgPT09IGRldGFpbHNsaXN0LnZpbGxhZ2VOYW1lKXtcclxuICAgICAgICAgICAgICAgIHBsYWNlID0gZGV0YWlsc2xpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAge3BsYWNlLnZpbGxhZ2VOYW1lfSA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3BsYWNlLmV4cGVyaWVuY2VOYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNsaXN0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRGV0YWlsc2xpc3QiLCJwbGFjZSIsIkRldGFpbHNsaXN0cyIsInByb3BzIiwiZGV0YWlsc2xpc3RzIiwibWFwIiwiZGV0YWlsc2xpc3QiLCJyZWFsTmFtZSIsInZpbGxhZ2VOYW1lIiwiZGl2IiwiYnIiLCJleHBlcmllbmNlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Ours/Our/Detailslists.js\n");

/***/ })

});