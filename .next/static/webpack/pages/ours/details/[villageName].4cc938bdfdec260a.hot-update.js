"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ours/details/[villageName]",{

/***/ "./components/Ours/Our/Kakaomap.js":
/*!*****************************************!*\
  !*** ./components/Ours/Our/Kakaomap.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Kakaomaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Kakaomaps */ \"./components/Ours/Kakaomaps.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Kakaomap = function(props) {\n    _s();\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Kakaomaps__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Kakaomap.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n    console.log(props.latitude);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mapLoaded = ref[0], setMapLoaded = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var $script = document.createElement(\"script\");\n        console.log($script);\n        $script.src = \"//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3de29374766418da9fc56ce3420b7c73\";\n        $script.type = \"text/javascript\";\n        $script.addEventListener(\"load\", function() {\n            return setMapLoaded(true);\n        });\n        console.log(mapLoaded);\n        document.head.appendChild($script);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!mapLoaded) {\n            console.log(\"not loaded\");\n            return;\n        }\n        kakao.maps.load(function() {\n            var container = document.getElementById(\"map\"); //지도를 담을 영역의 DOM 레퍼런스\n            var options = {\n                center: new kakao.maps.LatLng(34.8109749, 128.3818646),\n                level: 3 //지도의 레벨(확대, 축소 정도)\n            };\n            var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}\n            // 마커가 표시될 위치입니다 \n            var markerPosition = new kakao.maps.LatLng(34.8109749, 128.3818646);\n            // 마커를 생성합니다\n            var marker = new kakao.maps.Marker({\n                position: markerPosition\n            });\n            // 마커가 지도 위에 표시되도록 설정합니다\n            marker.setMap(map);\n        });\n    }, [\n        mapLoaded\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        style: {\n            width: \"35rem\",\n            height: \"30rem\",\n            display: \"flex\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Kakaomap.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(Kakaomap, \"0m2Tn2YgIAxOSMxSXarSzL2nCag=\");\n_c = Kakaomap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kakaomap);\nvar _c;\n$RefreshReg$(_c, \"Kakaomap\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0tha2FvbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFrRDtBQUNkOztBQUdwQyxJQUFNSSxRQUFRLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztrQkFDMUIsOERBQUNGLGtEQUFTOzs7O2FBQUc7SUFDYkcsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDNUIsSUFBa0NQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQbkQsU0FPa0IsR0FBa0JBLEdBQWUsR0FBakMsRUFQbEIsWUFPZ0MsR0FBSUEsR0FBZSxHQUFuQjtJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDaERQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQztRQUNyQkEsT0FBTyxDQUFDRyxHQUFHLEdBQUksd0ZBQXNGO1FBQ3JHSCxPQUFPLENBQUNJLElBQUksR0FBSSxpQkFBZSxDQUFFO1FBQ2pDSixPQUFPLENBQUNLLGdCQUFnQixDQUFDLE1BQU0sRUFBRTttQkFBTU4sWUFBWSxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztRQUMzREosT0FBTyxDQUFDQyxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCRyxRQUFRLENBQUNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDUCxPQUFPLENBQUMsQ0FBQztLQUNwQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBULGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ08sU0FBUyxFQUFFO1lBQ2RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDUjtRQUVEWSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFdBQU07WUFDcEIsSUFBSUMsU0FBUyxHQUFHVixRQUFRLENBQUNXLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFwQkMsT0FBTyxHQUFHO2dCQUNaQyxNQUFNLEVBQUUsSUFBSU4sS0FBSyxDQUFDQyxJQUFJLENBQUNNLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2dCQUN0REMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNZO1lBRXZCLElBQUlDLEdBQUcsR0FBRyxJQUFJVCxLQUFLLENBQUNDLElBQUksQ0FBQ1MsR0FBRyxDQUFDUCxTQUFTLEVBQUVFLE9BQU8sQ0FBQyxFQUFFO1lBRWhDO1lBQ0ksSUFBbEJNLGNBQWMsR0FBSSxJQUFJWCxLQUFLLENBQUNDLElBQUksQ0FBQ00sTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7WUFFdEU7WUFDZ0IsSUFBWkssTUFBTSxHQUFHLElBQUlaLEtBQUssQ0FBQ0MsSUFBSSxDQUFDWSxNQUFNLENBQUM7Z0JBQy9CQyxRQUFRLEVBQUVILGNBQWM7YUFDM0IsQ0FBQztZQUVGO1lBQ0FDLE1BQU0sQ0FBQ0csTUFBTSxDQUFDTixHQUFHLENBQUMsQ0FBQztTQUVsQixDQUFDO0tBQ0gsRUFBRTtRQUFDbkIsU0FBUztLQUFDLENBQUMsQ0FBQztJQUdoQixxQkFDRSw4REFBQzBCLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLEtBQUs7UUFBQ0MsS0FBSyxFQUFFO1lBQUNDLEtBQUssRUFBRSxPQUFPO1lBQUVDLE1BQU0sRUFBRSxPQUFPO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1NBQUM7Ozs7O2FBQVEsQ0FDaEY7Q0FFRjtHQWpES3BDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQW1EZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL091cnMvT3VyL0tha2FvbWFwLmpzPzQ5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEtha2FvbWFwcyBmcm9tICcuLi9LYWthb21hcHMnXHJcblxyXG5cclxuY29uc3QgS2FrYW9tYXAgPSAocHJvcHMpID0+IHtcclxuICA8S2FrYW9tYXBzIC8+XHJcbiAgY29uc29sZS5sb2cocHJvcHMubGF0aXR1ZGUpO1xyXG4gIGNvbnN0IFttYXBMb2FkZWQsIHNldE1hcExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCAkc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBjb25zb2xlLmxvZygkc2NyaXB0KTtcclxuICAgICRzY3JpcHQuc3JjID0gYC8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXV0b2xvYWQ9ZmFsc2UmYXBwa2V5PTNkZTI5Mzc0NzY2NDE4ZGE5ZmM1NmNlMzQyMGI3YzczYFxyXG4gICAgJHNjcmlwdC50eXBlID0gYHRleHQvamF2YXNjcmlwdGA7XHJcbiAgICAkc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHNldE1hcExvYWRlZCh0cnVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhtYXBMb2FkZWQpO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkc2NyaXB0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW1hcExvYWRlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGxvYWRlZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAga2FrYW8ubWFwcy5sb2FkKCgpID0+IHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTsgLy/sp4Drj4Trpbwg64u07J2EIOyYgeyXreydmCBET00g66CI7Y2865+w7IqkXHJcbiAgICAgIHZhciBvcHRpb25zID0geyAvL+yngOuPhOulvCDsg53shLHtlaAg65WMIO2VhOyalO2VnCDquLDrs7gg7Ji17IWYXHJcbiAgICAgICAgY2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzQuODEwOTc0OSwgMTI4LjM4MTg2NDYpLCAvL+yngOuPhOydmCDspJHsi6zsooztkZwuXHJcbiAgICAgICAgbGV2ZWw6IDMgLy/sp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB2YXIgbWFwID0gbmV3IGtha2FvLm1hcHMuTWFwKGNvbnRhaW5lciwgb3B0aW9ucyk7IC8v7KeA64+EIOyDneyEsSDrsI8g6rCd7LK0IOumrO2EtH1cclxuICAgICAgXHJcbiAgICAgIC8vIOuniOy7pOqwgCDtkZzsi5zrkKAg7JyE7LmY7J6F64uI64ukIFxyXG4gICAgICB2YXIgbWFya2VyUG9zaXRpb24gID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKDM0LjgxMDk3NDksIDEyOC4zODE4NjQ2KTsgXHJcbiAgICAgIFxyXG4gICAgLy8g66eI7Luk66W8IOyDneyEse2VqeuLiOuLpFxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBrYWthby5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgcG9zaXRpb246IG1hcmtlclBvc2l0aW9uXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIOuniOy7pOqwgCDsp4Drj4Qg7JyE7JeQIO2RnOyLnOuQmOuPhOuhnSDshKTsoJXtlanri4jri6RcclxuICAgIG1hcmtlci5zZXRNYXAobWFwKTtcclxuICAgIFxyXG4gICAgfSlcclxuICB9LCBbbWFwTG9hZGVkXSk7XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3t3aWR0aDogJzM1cmVtJywgaGVpZ2h0OiAnMzByZW0nLCBkaXNwbGF5OiAnZmxleCd9fT48L2Rpdj5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb21hcCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiS2FrYW9tYXBzIiwiS2FrYW9tYXAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJsYXRpdHVkZSIsIm1hcExvYWRlZCIsInNldE1hcExvYWRlZCIsIiRzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImtha2FvIiwibWFwcyIsImxvYWQiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJjZW50ZXIiLCJMYXRMbmciLCJsZXZlbCIsIm1hcCIsIk1hcCIsIm1hcmtlclBvc2l0aW9uIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJzZXRNYXAiLCJkaXYiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Ours/Our/Kakaomap.js\n");

/***/ })

});