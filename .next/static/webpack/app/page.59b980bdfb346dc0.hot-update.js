"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase/config */ \"(app-pages-browser)/./app/firebase/config.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* eslint-disable react/no-unescaped-entities */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.app);\n            const unsubscribe = auth.onAuthStateChanged({\n                \"Home.useEffect.unsubscribe\": (currentUser)=>{\n                    setUser(currentUser);\n                    if (currentUser) {\n                        router.push(\"/dashboard\");\n                    } else {\n                        setUser(null);\n                    }\n                }\n            }[\"Home.useEffect.unsubscribe\"]);\n            return ({\n                \"Home.useEffect\": ()=>unsubscribe()\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"home\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        user: user\n                    }, void 0, false, {\n                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"main\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hero\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"title\",\n                                        children: \"Pantry Tracker!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"subtitle\",\n                                        children: \"Zuhair Abdul Haleem\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"description\",\n                                        children: \"Track and manage your pantry items with ease. Our app offers a comprehensive suite of features designed to simplify your inventory management. Whether you're organizing your kitchen or managing a larger pantry, we've got you covered.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"features\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"Easy Inventory Tracking\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Keep track of all your pantry items with ease. Our app allows you to add, remove, and update items quickly.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"Smart Notifications\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Get notified when items are running low or when it's time to restock. Stay on top of your inventory with smart alerts.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"User-Friendly Interface\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Our intuitive interface makes managing your pantry simple and enjoyable. No more complicated processes – just straightforward functionality.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"Export PDF\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Effortlessly manage and keep track of your pantry items by generating and exporting your pantry list as a PDF, ensuring you have easy access to your inventory anywhere, anytime.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"Data Analysis\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Analyze your pantry data with comprehensive charts and graphs. Visualize your inventory trends with pie charts and bar graphs to make informed decisions about restocking and usage patterns.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"Recipe Suggestions\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Explore mouthwatering recipes crafted from the items already in your pantry. SignUp to discover three incredible recipes customized just for you.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"featureTitle\",\n                                                        children: \"View User Profile\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"featureDescription\",\n                                                        children: \"Access and update your user profile to personalize your pantry management experience. Keep your information up-to-date for a more tailored experience.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"description\",\n                                        children: \"Ready to get started? Sign in with your Google account to access your personalized dashboard and begin managing your pantry effectively.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/zuhair/Desktop/pantry-tracker/app/page.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"ocZTZ8m72GkfgAfkTHk7sW+OJyw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEM7O0FBR0Y7QUFDSjtBQUNJO0FBQ0o7QUFDQztBQUNPO0FBQ25CO0FBQzdCLE1BQU1RLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1XLFNBQVNSLDBEQUFTQTtJQUV4QkYsZ0RBQVNBOzBCQUFDO1lBQ1IsTUFBTVcsT0FBT1Ysc0RBQU9BLENBQUNFLGlEQUFHQTtZQUV4QixNQUFNUyxjQUFjRCxLQUFLRSxrQkFBa0I7OENBQUMsQ0FBQ0M7b0JBQzNDTCxRQUFRSztvQkFFUixJQUFJQSxhQUFhO3dCQUNmSixPQUFPSyxJQUFJLENBQUM7b0JBQ2QsT0FBTzt3QkFDTE4sUUFBUTtvQkFDVjtnQkFDRjs7WUFFQTtrQ0FBTyxJQUFNRzs7UUFDZjt5QkFBRztRQUFDRjtLQUFPO0lBRVgscUJBQ0U7O1lBQ0c7MEJBQ0QsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2IsMERBQU1BO3dCQUFDSSxNQUFNQTs7Ozs7O2tDQUNkLDhEQUFDVTt3QkFBS0QsV0FBVTtrQ0FDZCw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQVE7Ozs7OztrREFDdEIsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUFXOzs7Ozs7a0RBT3hCLDhEQUFDRzt3Q0FBRUgsV0FBVTtrREFBYzs7Ozs7O2tEQU0zQiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNJO3dEQUFHSixXQUFVO2tFQUFlOzs7Ozs7a0VBQzdCLDhEQUFDRzt3REFBRUgsV0FBVTtrRUFBcUI7Ozs7Ozs7Ozs7OzswREFLcEMsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0k7d0RBQUdKLFdBQVU7a0VBQWU7Ozs7OztrRUFDN0IsOERBQUNHO3dEQUFFSCxXQUFVO2tFQUFxQjs7Ozs7Ozs7Ozs7OzBEQUtwQyw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDSTt3REFBR0osV0FBVTtrRUFBZTs7Ozs7O2tFQUM3Qiw4REFBQ0c7d0RBQUVILFdBQVU7a0VBQXFCOzs7Ozs7Ozs7Ozs7MERBTXBDLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNJO3dEQUFHSixXQUFVO2tFQUFlOzs7Ozs7a0VBQzdCLDhEQUFDRzt3REFBRUgsV0FBVTtrRUFBcUI7Ozs7Ozs7Ozs7OzswREFNcEMsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0k7d0RBQUdKLFdBQVU7a0VBQWU7Ozs7OztrRUFDN0IsOERBQUNHO3dEQUFFSCxXQUFVO2tFQUFxQjs7Ozs7Ozs7Ozs7OzBEQU9wQyw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDSTt3REFBR0osV0FBVTtrRUFBZTs7Ozs7O2tFQUM3Qiw4REFBQ0c7d0RBQUVILFdBQVU7a0VBQXFCOzs7Ozs7Ozs7Ozs7MERBTXBDLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNJO3dEQUFHSixXQUFVO2tFQUFlOzs7Ozs7a0VBQzdCLDhEQUFDRzt3REFBRUgsV0FBVTtrRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFPdEMsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUTVCOzBCQUNQLDhEQUFDWiwwREFBY0E7Ozs7Ozs7QUFHckI7R0EvR01FOztRQUVXTCxzREFBU0E7OztLQUZwQks7QUFpSE4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy96dWhhaXIvRGVza3RvcC9wYW50cnktdHJhY2tlci9hcHAvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2ZpcmViYXNlL2NvbmZpZ1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgoY3VycmVudFVzZXIpID0+IHtcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xuXG4gICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1wiIFwifVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBhbnRyeSBUcmFja2VyITwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgWnVoYWlyIEFiZHVsIEhhbGVlbVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgVHJhY2sgYW5kIG1hbmFnZSB5b3VyIHBhbnRyeSBpdGVtcyB3aXRoIGVhc2UuIE91ciBhcHAgb2ZmZXJzIGFcbiAgICAgICAgICAgICAgICBjb21wcmVoZW5zaXZlIHN1aXRlIG9mIGZlYXR1cmVzIGRlc2lnbmVkIHRvIHNpbXBsaWZ5IHlvdXJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkgbWFuYWdlbWVudC4gV2hldGhlciB5b3UncmUgb3JnYW5pemluZyB5b3VyIGtpdGNoZW4gb3JcbiAgICAgICAgICAgICAgICBtYW5hZ2luZyBhIGxhcmdlciBwYW50cnksIHdlJ3ZlIGdvdCB5b3UgY292ZXJlZC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+RWFzeSBJbnZlbnRvcnkgVHJhY2tpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVhdHVyZURlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEtlZXAgdHJhY2sgb2YgYWxsIHlvdXIgcGFudHJ5IGl0ZW1zIHdpdGggZWFzZS4gT3VyIGFwcFxuICAgICAgICAgICAgICAgICAgICBhbGxvd3MgeW91IHRvIGFkZCwgcmVtb3ZlLCBhbmQgdXBkYXRlIGl0ZW1zIHF1aWNrbHkuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+U21hcnQgTm90aWZpY2F0aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgR2V0IG5vdGlmaWVkIHdoZW4gaXRlbXMgYXJlIHJ1bm5pbmcgbG93IG9yIHdoZW4gaXQncyB0aW1lIHRvXG4gICAgICAgICAgICAgICAgICAgIHJlc3RvY2suIFN0YXkgb24gdG9wIG9mIHlvdXIgaW52ZW50b3J5IHdpdGggc21hcnQgYWxlcnRzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZlYXR1cmVUaXRsZVwiPlVzZXItRnJpZW5kbHkgSW50ZXJmYWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlYXR1cmVEZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBPdXIgaW50dWl0aXZlIGludGVyZmFjZSBtYWtlcyBtYW5hZ2luZyB5b3VyIHBhbnRyeSBzaW1wbGVcbiAgICAgICAgICAgICAgICAgICAgYW5kIGVuam95YWJsZS4gTm8gbW9yZSBjb21wbGljYXRlZCBwcm9jZXNzZXMg4oCTIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHRmb3J3YXJkIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+RXhwb3J0IFBERjwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgRWZmb3J0bGVzc2x5IG1hbmFnZSBhbmQga2VlcCB0cmFjayBvZiB5b3VyIHBhbnRyeSBpdGVtcyBieVxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW5nIGFuZCBleHBvcnRpbmcgeW91ciBwYW50cnkgbGlzdCBhcyBhIFBERiwgZW5zdXJpbmdcbiAgICAgICAgICAgICAgICAgICAgeW91IGhhdmUgZWFzeSBhY2Nlc3MgdG8geW91ciBpbnZlbnRvcnkgYW55d2hlcmUsIGFueXRpbWUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+RGF0YSBBbmFseXNpczwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgQW5hbHl6ZSB5b3VyIHBhbnRyeSBkYXRhIHdpdGggY29tcHJlaGVuc2l2ZSBjaGFydHMgYW5kXG4gICAgICAgICAgICAgICAgICAgIGdyYXBocy4gVmlzdWFsaXplIHlvdXIgaW52ZW50b3J5IHRyZW5kcyB3aXRoIHBpZSBjaGFydHMgYW5kXG4gICAgICAgICAgICAgICAgICAgIGJhciBncmFwaHMgdG8gbWFrZSBpbmZvcm1lZCBkZWNpc2lvbnMgYWJvdXQgcmVzdG9ja2luZyBhbmRcbiAgICAgICAgICAgICAgICAgICAgdXNhZ2UgcGF0dGVybnMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+UmVjaXBlIFN1Z2dlc3Rpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlYXR1cmVEZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBFeHBsb3JlIG1vdXRod2F0ZXJpbmcgcmVjaXBlcyBjcmFmdGVkIGZyb20gdGhlIGl0ZW1zIGFscmVhZHlcbiAgICAgICAgICAgICAgICAgICAgaW4geW91ciBwYW50cnkuIFNpZ25VcCB0byBkaXNjb3ZlciB0aHJlZSBpbmNyZWRpYmxlIHJlY2lwZXNcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9taXplZCBqdXN0IGZvciB5b3UuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZVRpdGxlXCI+VmlldyBVc2VyIFByb2ZpbGU8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVhdHVyZURlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEFjY2VzcyBhbmQgdXBkYXRlIHlvdXIgdXNlciBwcm9maWxlIHRvIHBlcnNvbmFsaXplIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgcGFudHJ5IG1hbmFnZW1lbnQgZXhwZXJpZW5jZS4gS2VlcCB5b3VyIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHVwLXRvLWRhdGUgZm9yIGEgbW9yZSB0YWlsb3JlZCBleHBlcmllbmNlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBSZWFkeSB0byBnZXQgc3RhcnRlZD8gU2lnbiBpbiB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQgdG8gYWNjZXNzXG4gICAgICAgICAgICAgICAgeW91ciBwZXJzb25hbGl6ZWQgZGFzaGJvYXJkIGFuZCBiZWdpbiBtYW5hZ2luZyB5b3VyIHBhbnRyeVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZWx5LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0QXV0aCIsInVzZVJvdXRlciIsImFwcCIsIk5hdmJhciIsIlRvYXN0Q29udGFpbmVyIiwiTGluayIsIkhvbWUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImF1dGgiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImN1cnJlbnRVc2VyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJoMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});