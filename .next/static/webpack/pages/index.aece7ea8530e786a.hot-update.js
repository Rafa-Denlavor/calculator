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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useCalculator = ()=>{\n    _s();\n    const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [oldNum, setOldNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [operator, setOperator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    console.log({\n        num,\n        oldNum,\n        result\n    });\n    const operators = [\n        \"-\",\n        \"+\",\n        \"/\",\n        \"*\"\n    ];\n    const inputValue = (value)=>{\n        return num === 0 ? setNum(value) : setNum(num + value);\n    };\n    const clear = (value)=>{\n        if (value === \"C\") {\n            setNum(0);\n            setOldNum(0);\n            setResult(0);\n            setOperator(\"\");\n        }\n    };\n    const deleteHandler = (value)=>{\n        if (value === \"DEL\") {\n            const convertNumber = String(num);\n            console.log(removeLetter);\n        }\n    };\n    const porcentage = (value)=>{\n        return value === \"%\" && setNum(num / 100);\n    };\n    const changeSign = (label)=>{\n        if (label === \"-/+\") {\n            return num > 0 ? setNum(-num) : setNum(Math.abs(num));\n        }\n    };\n    const operationHandler = (value)=>{\n        if (operators.includes(value)) {\n            setOperator(value);\n            setOldNum(num);\n            setNum(0);\n        }\n    };\n    const calculate = (label)=>{\n        const calculations = {\n            \"-\": oldNum - num,\n            \"+\": parseFloat(oldNum) + parseFloat(num),\n            \"*\": oldNum * num,\n            \"/\": oldNum / num\n        };\n        if (label === \"=\") {\n            setResult(calculations[operator]);\n        }\n    };\n    return {\n        inputValue,\n        porcentage,\n        changeSign,\n        clear,\n        deleteHandler,\n        num,\n        oldNum,\n        result,\n        operator,\n        operationHandler,\n        calculate\n    };\n};\n_s(useCalculator, \"61iXxawvA6gCs2poQYnOfO5GZN4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCalculator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL3VzZUNhbGN1bGF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBaUM7QUFFakMsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0gsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekNVLFFBQVFDLElBQUk7UUFBRVQ7UUFBS0U7UUFBUUU7SUFBTztJQUVsQyxNQUFNTSxZQUFZO1FBQUM7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUV0QyxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCLE9BQU9aLFFBQVEsSUFBSUMsT0FBT1csU0FBU1gsT0FBT0QsTUFBTVk7SUFDbEQ7SUFFQSxNQUFNQyxRQUFRLENBQUNEO1FBQ2IsSUFBSUEsVUFBVSxLQUFLO1lBQ2pCWCxPQUFPO1lBQ1BFLFVBQVU7WUFDVkUsVUFBVTtZQUNWRSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLE1BQU1PLGdCQUFnQixDQUFDRjtRQUNyQixJQUFHQSxVQUFVLE9BQU87WUFDbEIsTUFBTUcsZ0JBQWdCQyxPQUFPaEI7WUFFN0JRLFFBQVFDLElBQUlRO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLGFBQWEsQ0FBQ047UUFDbEIsT0FBT0EsVUFBVSxPQUFPWCxPQUFPRCxNQUFNO0lBQ3ZDO0lBRUEsTUFBTW1CLGFBQWEsQ0FBQ0M7UUFDbEIsSUFBSUEsVUFBVSxPQUFPO1lBQ25CLE9BQU9wQixNQUFNLElBQUlDLE9BQU8sQ0FBQ0QsT0FBT0MsT0FBT29CLEtBQUtDLElBQUl0QjtRQUNsRDtJQUNGO0lBRUEsTUFBTXVCLG1CQUFtQixDQUFDWDtRQUN4QixJQUFJRixVQUFVYyxTQUFTWixRQUFRO1lBQzdCTCxZQUFZSztZQUNaVCxVQUFVSDtZQUNWQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU13QixZQUFZLENBQUNMO1FBQ2pCLE1BQU1NLGVBQW9CO1lBQ3hCLEtBQUt4QixTQUFTRjtZQUNkLEtBQUsyQixXQUFXekIsVUFBVXlCLFdBQVczQjtZQUNyQyxLQUFLRSxTQUFTRjtZQUNkLEtBQUtFLFNBQVNGO1FBQ2hCO1FBRUEsSUFBSW9CLFVBQVUsS0FBSztZQUNqQmYsVUFBVXFCLFlBQVksQ0FBQ3BCLFNBQVM7UUFDbEM7SUFDRjtJQUVBLE9BQU87UUFDTEs7UUFDQU87UUFDQUM7UUFDQU47UUFDQUM7UUFDQWQ7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQWlCO1FBQ0FFO0lBQ0Y7QUFDRjtHQTNFTTFCO0FBNkVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IvdXNlQ2FsY3VsYXRvci50c3g/MWMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VDYWxjdWxhdG9yID0gKCkgPT4ge1xuICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtvbGROdW0sIHNldE9sZE51bV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3BlcmF0b3IsIHNldE9wZXJhdG9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zb2xlLmxvZyh7IG51bSwgb2xkTnVtLCByZXN1bHQgfSlcblxuICBjb25zdCBvcGVyYXRvcnMgPSBbJy0nLCAnKycsICcvJywgJyonXTtcblxuICBjb25zdCBpbnB1dFZhbHVlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbnVtID09PSAwID8gc2V0TnVtKHZhbHVlKSA6IHNldE51bShudW0gKyB2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJDXCIpIHtcbiAgICAgIHNldE51bSgwKTtcbiAgICAgIHNldE9sZE51bSgwKTtcbiAgICAgIHNldFJlc3VsdCgwKTtcbiAgICAgIHNldE9wZXJhdG9yKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSGFuZGxlciA9ICh2YWx1ZSA6IGFueSkgPT4ge1xuICAgIGlmKHZhbHVlID09PSAnREVMJykge1xuICAgICAgY29uc3QgY29udmVydE51bWJlciA9IFN0cmluZyhudW0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZW1vdmVMZXR0ZXIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9yY2VudGFnZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcIiVcIiAmJiBzZXROdW0obnVtIC8gMTAwKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTaWduID0gKGxhYmVsOiBhbnkpID0+IHtcbiAgICBpZiAobGFiZWwgPT09IFwiLS8rXCIpIHtcbiAgICAgIHJldHVybiBudW0gPiAwID8gc2V0TnVtKC1udW0pIDogc2V0TnVtKE1hdGguYWJzKG51bSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvcGVyYXRpb25IYW5kbGVyID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAob3BlcmF0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgc2V0T3BlcmF0b3IodmFsdWUpXG4gICAgICBzZXRPbGROdW0obnVtKVxuICAgICAgc2V0TnVtKDApXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZSA9IChsYWJlbDogYW55KSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRpb25zOiBhbnkgPSB7XG4gICAgICAnLSc6IG9sZE51bSAtIG51bSxcbiAgICAgICcrJzogcGFyc2VGbG9hdChvbGROdW0pICsgcGFyc2VGbG9hdChudW0pLFxuICAgICAgJyonOiBvbGROdW0gKiBudW0sXG4gICAgICAnLyc6IG9sZE51bSAvIG51bVxuICAgIH1cblxuICAgIGlmIChsYWJlbCA9PT0gJz0nKSB7XG4gICAgICBzZXRSZXN1bHQoY2FsY3VsYXRpb25zW29wZXJhdG9yXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5wdXRWYWx1ZSxcbiAgICBwb3JjZW50YWdlLFxuICAgIGNoYW5nZVNpZ24sXG4gICAgY2xlYXIsXG4gICAgZGVsZXRlSGFuZGxlcixcbiAgICBudW0sXG4gICAgb2xkTnVtLFxuICAgIHJlc3VsdCxcbiAgICBvcGVyYXRvcixcbiAgICBvcGVyYXRpb25IYW5kbGVyLFxuICAgIGNhbGN1bGF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhbGN1bGF0b3I7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDYWxjdWxhdG9yIiwibnVtIiwic2V0TnVtIiwib2xkTnVtIiwic2V0T2xkTnVtIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib3BlcmF0b3IiLCJzZXRPcGVyYXRvciIsImNvbnNvbGUiLCJsb2ciLCJvcGVyYXRvcnMiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjbGVhciIsImRlbGV0ZUhhbmRsZXIiLCJjb252ZXJ0TnVtYmVyIiwiU3RyaW5nIiwicmVtb3ZlTGV0dGVyIiwicG9yY2VudGFnZSIsImNoYW5nZVNpZ24iLCJsYWJlbCIsIk1hdGgiLCJhYnMiLCJvcGVyYXRpb25IYW5kbGVyIiwiaW5jbHVkZXMiLCJjYWxjdWxhdGUiLCJjYWxjdWxhdGlvbnMiLCJwYXJzZUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calculator/useCalculator.tsx\n"));

/***/ })

});