"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Calculator/useCalculator.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Calculator/useCalculator.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useCalculator = ()=>{\n    _s();\n    const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [oldNum, setOldNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [operator, setOperator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    console.log({\n        num,\n        oldNum,\n        result\n    });\n    const operators = [\n        \"-\",\n        \"+\",\n        \"/\",\n        \"*\"\n    ];\n    const inputValue = (value)=>{\n        return num === 0 ? setNum(value) : setNum(num + value);\n    };\n    const clear = (value)=>{\n        if (value === \"C\") {\n            setNum(0);\n            setOldNum(0);\n            setResult(0);\n            setOperator(\"\");\n        }\n    };\n    const deleteHandler = (label)=>{\n        if (label === \"DEL\") {\n            const convertToString = num.toString();\n            const removeLastLetter = convertToString.slice(0, -1);\n            return setNum(Number(removeLastLetter));\n        }\n    };\n    const porcentage = (value)=>{\n        return value === \"%\" && setNum(num / 100);\n    };\n    const changeSign = (label)=>{\n        if (label === \"-/+\") {\n            return num > 0 ? setNum(-num) : setNum(Math.abs(num));\n        }\n    };\n    const operationHandler = (value)=>{\n        if (operators.includes(value)) {\n            setOperator(value);\n            setOldNum(num);\n            setNum(0);\n        }\n    };\n    const calculate = (param)=>{\n        let { label , value  } = param;\n        const calculations = {\n            \"-\": oldNum - num,\n            \"+\": parseFloat(oldNum) + parseFloat(num),\n            \"*\": oldNum * num,\n            \"/\": oldNum / num\n        };\n        if (label === \"=\") {\n            setResult(calculations[operator]);\n        }\n        if (typeof value === \"number\") {\n            setNum(0);\n            setOldNum(0);\n            setResult(0);\n            setOperator(\"\");\n        }\n    };\n    return {\n        inputValue,\n        porcentage,\n        changeSign,\n        clear,\n        deleteHandler,\n        num,\n        oldNum,\n        result,\n        operator,\n        operationHandler,\n        calculate\n    };\n};\n_s(useCalculator, \"61iXxawvA6gCs2poQYnOfO5GZN4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCalculator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL3VzZUNhbGN1bGF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBaUM7QUFFakMsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0gsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekNVLFFBQVFDLElBQUk7UUFBRVQ7UUFBS0U7UUFBUUU7SUFBTztJQUVsQyxNQUFNTSxZQUFZO1FBQUM7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUV0QyxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCLE9BQU9aLFFBQVEsSUFBSUMsT0FBT1csU0FBU1gsT0FBT0QsTUFBTVk7SUFDbEQ7SUFFQSxNQUFNQyxRQUFRLENBQUNEO1FBQ2IsSUFBSUEsVUFBVSxLQUFLO1lBQ2pCWCxPQUFPO1lBQ1BFLFVBQVU7WUFDVkUsVUFBVTtZQUNWRSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLE1BQU1PLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxVQUFVLE9BQU87WUFDbkIsTUFBTUMsa0JBQWtCaEIsSUFBSWlCO1lBQzVCLE1BQU1DLG1CQUFtQkYsZ0JBQWdCRyxNQUFNLEdBQUcsQ0FBQztZQUVuRCxPQUFPbEIsT0FBT21CLE9BQU9GO1FBQ3ZCO0lBQ0Y7SUFFQSxNQUFNRyxhQUFhLENBQUNUO1FBQ2xCLE9BQU9BLFVBQVUsT0FBT1gsT0FBT0QsTUFBTTtJQUN2QztJQUVBLE1BQU1zQixhQUFhLENBQUNQO1FBQ2xCLElBQUlBLFVBQVUsT0FBTztZQUNuQixPQUFPZixNQUFNLElBQUlDLE9BQU8sQ0FBQ0QsT0FBT0MsT0FBT3NCLEtBQUtDLElBQUl4QjtRQUNsRDtJQUNGO0lBRUEsTUFBTXlCLG1CQUFtQixDQUFDYjtRQUN4QixJQUFJRixVQUFVZ0IsU0FBU2QsUUFBUTtZQUM3QkwsWUFBWUs7WUFDWlQsVUFBVUg7WUFDVkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNMEIsWUFBWTtZQUFDLEVBQUNaLE1BQUssRUFBRUgsTUFBSyxFQUFPO1FBQ3JDLE1BQU1nQixlQUFvQjtZQUN4QixLQUFLMUIsU0FBU0Y7WUFDZCxLQUFLNkIsV0FBVzNCLFVBQVUyQixXQUFXN0I7WUFDckMsS0FBS0UsU0FBU0Y7WUFDZCxLQUFLRSxTQUFTRjtRQUNoQjtRQUVBLElBQUllLFVBQVUsS0FBSztZQUNqQlYsVUFBVXVCLFlBQVksQ0FBQ3RCLFNBQVM7UUFDbEM7UUFFQSxJQUFHLE9BQU9NLFVBQVUsVUFBVTtZQUM1QlgsT0FBTztZQUNQRSxVQUFVO1lBQ1ZFLFVBQVU7WUFDVkUsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xJO1FBQ0FVO1FBQ0FDO1FBQ0FUO1FBQ0FDO1FBQ0FkO1FBQ0FFO1FBQ0FFO1FBQ0FFO1FBQ0FtQjtRQUNBRTtJQUNGO0FBQ0Y7R0FuRk01QjtBQXFGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL3VzZUNhbGN1bGF0b3IudHN4PzFjMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlQ2FsY3VsYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb2xkTnVtLCBzZXRPbGROdW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW29wZXJhdG9yLCBzZXRPcGVyYXRvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc29sZS5sb2coeyBudW0sIG9sZE51bSwgcmVzdWx0IH0pXG5cbiAgY29uc3Qgb3BlcmF0b3JzID0gWyctJywgJysnLCAnLycsICcqJ107XG5cbiAgY29uc3QgaW5wdXRWYWx1ZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIG51bSA9PT0gMCA/IHNldE51bSh2YWx1ZSkgOiBzZXROdW0obnVtICsgdmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IFwiQ1wiKSB7XG4gICAgICBzZXROdW0oMCk7XG4gICAgICBzZXRPbGROdW0oMCk7XG4gICAgICBzZXRSZXN1bHQoMCk7XG4gICAgICBzZXRPcGVyYXRvcignJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSAobGFiZWw6IGFueSkgPT4ge1xuICAgIGlmIChsYWJlbCA9PT0gJ0RFTCcpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRUb1N0cmluZyA9IG51bS50b1N0cmluZygpO1xuICAgICAgY29uc3QgcmVtb3ZlTGFzdExldHRlciA9IGNvbnZlcnRUb1N0cmluZy5zbGljZSgwLCAtMSk7XG5cbiAgICAgIHJldHVybiBzZXROdW0oTnVtYmVyKHJlbW92ZUxhc3RMZXR0ZXIpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb3JjZW50YWdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwiJVwiICYmIHNldE51bShudW0gLyAxMDApO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNpZ24gPSAobGFiZWw6IGFueSkgPT4ge1xuICAgIGlmIChsYWJlbCA9PT0gXCItLytcIikge1xuICAgICAgcmV0dXJuIG51bSA+IDAgPyBzZXROdW0oLW51bSkgOiBzZXROdW0oTWF0aC5hYnMobnVtKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9wZXJhdGlvbkhhbmRsZXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmIChvcGVyYXRvcnMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBzZXRPcGVyYXRvcih2YWx1ZSlcbiAgICAgIHNldE9sZE51bShudW0pXG4gICAgICBzZXROdW0oMClcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlID0gKHtsYWJlbCwgdmFsdWUgfTogYW55KSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRpb25zOiBhbnkgPSB7XG4gICAgICAnLSc6IG9sZE51bSAtIG51bSxcbiAgICAgICcrJzogcGFyc2VGbG9hdChvbGROdW0pICsgcGFyc2VGbG9hdChudW0pLFxuICAgICAgJyonOiBvbGROdW0gKiBudW0sXG4gICAgICAnLyc6IG9sZE51bSAvIG51bVxuICAgIH1cblxuICAgIGlmIChsYWJlbCA9PT0gJz0nKSB7XG4gICAgICBzZXRSZXN1bHQoY2FsY3VsYXRpb25zW29wZXJhdG9yXSk7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgc2V0TnVtKDApO1xuICAgICAgc2V0T2xkTnVtKDApO1xuICAgICAgc2V0UmVzdWx0KDApO1xuICAgICAgc2V0T3BlcmF0b3IoJycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlucHV0VmFsdWUsXG4gICAgcG9yY2VudGFnZSxcbiAgICBjaGFuZ2VTaWduLFxuICAgIGNsZWFyLFxuICAgIGRlbGV0ZUhhbmRsZXIsXG4gICAgbnVtLFxuICAgIG9sZE51bSxcbiAgICByZXN1bHQsXG4gICAgb3BlcmF0b3IsXG4gICAgb3BlcmF0aW9uSGFuZGxlcixcbiAgICBjYWxjdWxhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYWxjdWxhdG9yO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsY3VsYXRvciIsIm51bSIsInNldE51bSIsIm9sZE51bSIsInNldE9sZE51bSIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9wZXJhdG9yIiwic2V0T3BlcmF0b3IiLCJjb25zb2xlIiwibG9nIiwib3BlcmF0b3JzIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiY2xlYXIiLCJkZWxldGVIYW5kbGVyIiwibGFiZWwiLCJjb252ZXJ0VG9TdHJpbmciLCJ0b1N0cmluZyIsInJlbW92ZUxhc3RMZXR0ZXIiLCJzbGljZSIsIk51bWJlciIsInBvcmNlbnRhZ2UiLCJjaGFuZ2VTaWduIiwiTWF0aCIsImFicyIsIm9wZXJhdGlvbkhhbmRsZXIiLCJpbmNsdWRlcyIsImNhbGN1bGF0ZSIsImNhbGN1bGF0aW9ucyIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calculator/useCalculator.tsx\n"));

/***/ })

});