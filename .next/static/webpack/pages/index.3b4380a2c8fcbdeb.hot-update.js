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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useCalculator = ()=>{\n    _s();\n    const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [oldNum, setOldNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [operator, setOperator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    console.log({\n        num,\n        oldNum,\n        result\n    });\n    const operators = [\n        \"-\",\n        \"+\",\n        \"/\",\n        \"*\"\n    ];\n    const inputValue = (value)=>{\n        return num === 0 ? setNum(value) : setNum(num + value);\n    };\n    const clear = (value)=>{\n        if (value === \"C\") {\n            setNum(0);\n            setOldNum(0);\n            setResult(0);\n            setOperator(\"\");\n        }\n    };\n    const deleteHandler = (value)=>{\n        if (value === \"DEL\") {\n            const convertNumber = num.toString();\n            const removeLastLetter = convertNumber.slice(0, -1);\n            setNum();\n        }\n    };\n    const porcentage = (value)=>{\n        return value === \"%\" && setNum(num / 100);\n    };\n    const changeSign = (label)=>{\n        if (label === \"-/+\") {\n            return num > 0 ? setNum(-num) : setNum(Math.abs(num));\n        }\n    };\n    const operationHandler = (value)=>{\n        if (operators.includes(value)) {\n            setOperator(value);\n            setOldNum(num);\n            setNum(0);\n        }\n    };\n    const calculate = (label)=>{\n        const calculations = {\n            \"-\": oldNum - num,\n            \"+\": parseFloat(oldNum) + parseFloat(num),\n            \"*\": oldNum * num,\n            \"/\": oldNum / num\n        };\n        if (label === \"=\") {\n            setResult(calculations[operator]);\n        }\n    };\n    return {\n        inputValue,\n        porcentage,\n        changeSign,\n        clear,\n        deleteHandler,\n        num,\n        oldNum,\n        result,\n        operator,\n        operationHandler,\n        calculate\n    };\n};\n_s(useCalculator, \"61iXxawvA6gCs2poQYnOfO5GZN4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCalculator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL3VzZUNhbGN1bGF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBaUM7QUFFakMsTUFBTUMsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0gsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekNVLFFBQVFDLElBQUk7UUFBRVQ7UUFBS0U7UUFBUUU7SUFBTztJQUVsQyxNQUFNTSxZQUFZO1FBQUM7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUV0QyxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCLE9BQU9aLFFBQVEsSUFBSUMsT0FBT1csU0FBU1gsT0FBT0QsTUFBTVk7SUFDbEQ7SUFFQSxNQUFNQyxRQUFRLENBQUNEO1FBQ2IsSUFBSUEsVUFBVSxLQUFLO1lBQ2pCWCxPQUFPO1lBQ1BFLFVBQVU7WUFDVkUsVUFBVTtZQUNWRSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLE1BQU1PLGdCQUFnQixDQUFDRjtRQUNyQixJQUFHQSxVQUFVLE9BQU87WUFDbEIsTUFBTUcsZ0JBQWdCZixJQUFJZ0I7WUFDMUIsTUFBTUMsbUJBQW1CRixjQUFjRyxNQUFNLEdBQUcsQ0FBQztZQUVqRGpCO1FBRUY7SUFDRjtJQUVBLE1BQU1rQixhQUFhLENBQUNQO1FBQ2xCLE9BQU9BLFVBQVUsT0FBT1gsT0FBT0QsTUFBTTtJQUN2QztJQUVBLE1BQU1vQixhQUFhLENBQUNDO1FBQ2xCLElBQUlBLFVBQVUsT0FBTztZQUNuQixPQUFPckIsTUFBTSxJQUFJQyxPQUFPLENBQUNELE9BQU9DLE9BQU9xQixLQUFLQyxJQUFJdkI7UUFDbEQ7SUFDRjtJQUVBLE1BQU13QixtQkFBbUIsQ0FBQ1o7UUFDeEIsSUFBSUYsVUFBVWUsU0FBU2IsUUFBUTtZQUM3QkwsWUFBWUs7WUFDWlQsVUFBVUg7WUFDVkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNeUIsWUFBWSxDQUFDTDtRQUNqQixNQUFNTSxlQUFvQjtZQUN4QixLQUFLekIsU0FBU0Y7WUFDZCxLQUFLNEIsV0FBVzFCLFVBQVUwQixXQUFXNUI7WUFDckMsS0FBS0UsU0FBU0Y7WUFDZCxLQUFLRSxTQUFTRjtRQUNoQjtRQUVBLElBQUlxQixVQUFVLEtBQUs7WUFDakJoQixVQUFVc0IsWUFBWSxDQUFDckIsU0FBUztRQUNsQztJQUNGO0lBRUEsT0FBTztRQUNMSztRQUNBUTtRQUNBQztRQUNBUDtRQUNBQztRQUNBZDtRQUNBRTtRQUNBRTtRQUNBRTtRQUNBa0I7UUFDQUU7SUFDRjtBQUNGO0dBN0VNM0I7QUErRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FsY3VsYXRvci91c2VDYWxjdWxhdG9yLnRzeD8xYzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUNhbGN1bGF0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW29sZE51bSwgc2V0T2xkTnVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtvcGVyYXRvciwgc2V0T3BlcmF0b3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnNvbGUubG9nKHsgbnVtLCBvbGROdW0sIHJlc3VsdCB9KVxuXG4gIGNvbnN0IG9wZXJhdG9ycyA9IFsnLScsICcrJywgJy8nLCAnKiddO1xuXG4gIGNvbnN0IGlucHV0VmFsdWUgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIHJldHVybiBudW0gPT09IDAgPyBzZXROdW0odmFsdWUpIDogc2V0TnVtKG51bSArIHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBjbGVhciA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBcIkNcIikge1xuICAgICAgc2V0TnVtKDApO1xuICAgICAgc2V0T2xkTnVtKDApO1xuICAgICAgc2V0UmVzdWx0KDApO1xuICAgICAgc2V0T3BlcmF0b3IoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVIYW5kbGVyID0gKHZhbHVlIDogYW55KSA9PiB7XG4gICAgaWYodmFsdWUgPT09ICdERUwnKSB7XG4gICAgICBjb25zdCBjb252ZXJ0TnVtYmVyID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCByZW1vdmVMYXN0TGV0dGVyID0gY29udmVydE51bWJlci5zbGljZSgwLCAtMSk7XG5cbiAgICAgIHNldE51bSgpXG4gICAgICBcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb3JjZW50YWdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwiJVwiICYmIHNldE51bShudW0gLyAxMDApO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNpZ24gPSAobGFiZWw6IGFueSkgPT4ge1xuICAgIGlmIChsYWJlbCA9PT0gXCItLytcIikge1xuICAgICAgcmV0dXJuIG51bSA+IDAgPyBzZXROdW0oLW51bSkgOiBzZXROdW0oTWF0aC5hYnMobnVtKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9wZXJhdGlvbkhhbmRsZXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmIChvcGVyYXRvcnMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBzZXRPcGVyYXRvcih2YWx1ZSlcbiAgICAgIHNldE9sZE51bShudW0pXG4gICAgICBzZXROdW0oMClcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlID0gKGxhYmVsOiBhbnkpID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGlvbnM6IGFueSA9IHtcbiAgICAgICctJzogb2xkTnVtIC0gbnVtLFxuICAgICAgJysnOiBwYXJzZUZsb2F0KG9sZE51bSkgKyBwYXJzZUZsb2F0KG51bSksXG4gICAgICAnKic6IG9sZE51bSAqIG51bSxcbiAgICAgICcvJzogb2xkTnVtIC8gbnVtXG4gICAgfVxuXG4gICAgaWYgKGxhYmVsID09PSAnPScpIHtcbiAgICAgIHNldFJlc3VsdChjYWxjdWxhdGlvbnNbb3BlcmF0b3JdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbnB1dFZhbHVlLFxuICAgIHBvcmNlbnRhZ2UsXG4gICAgY2hhbmdlU2lnbixcbiAgICBjbGVhcixcbiAgICBkZWxldGVIYW5kbGVyLFxuICAgIG51bSxcbiAgICBvbGROdW0sXG4gICAgcmVzdWx0LFxuICAgIG9wZXJhdG9yLFxuICAgIG9wZXJhdGlvbkhhbmRsZXIsXG4gICAgY2FsY3VsYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FsY3VsYXRvcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGN1bGF0b3IiLCJudW0iLCJzZXROdW0iLCJvbGROdW0iLCJzZXRPbGROdW0iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvcGVyYXRvciIsInNldE9wZXJhdG9yIiwiY29uc29sZSIsImxvZyIsIm9wZXJhdG9ycyIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImNsZWFyIiwiZGVsZXRlSGFuZGxlciIsImNvbnZlcnROdW1iZXIiLCJ0b1N0cmluZyIsInJlbW92ZUxhc3RMZXR0ZXIiLCJzbGljZSIsInBvcmNlbnRhZ2UiLCJjaGFuZ2VTaWduIiwibGFiZWwiLCJNYXRoIiwiYWJzIiwib3BlcmF0aW9uSGFuZGxlciIsImluY2x1ZGVzIiwiY2FsY3VsYXRlIiwiY2FsY3VsYXRpb25zIiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Calculator/useCalculator.tsx\n"));

/***/ })

});