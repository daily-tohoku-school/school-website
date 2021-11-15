"use strict";
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9008);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5834);





function MyApp(props) {
    const { Component , pageProps  } = props;
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "デーリー東北プログラミング教室"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
MyApp.propTypes = {
    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),
    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};


/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1958);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__["default"] {
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "ja",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: "#556cd6"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
};
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>sheets.collect(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        ...props
                    }))
        })
    ;
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps(ctx);
    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles),
            sheets.getStyleElement()
        ]
    };
};


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/1-ih6uNojcX_bHwjJ4gax/_buildManifest.js","static/1-ih6uNojcX_bHwjJ4gax/_ssgManifest.js","static/1-ih6uNojcX_bHwjJ4gax/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-bbce3cdc1a611f18.js","static/chunks/main-63854ee67f4963c5.js","static/chunks/117-94f8f41493a30493.js","static/chunks/914-02791246e47708cd.js","static/chunks/971-9952852f995df008.js","static/chunks/pages/index-f6e843f9e29752ba.js"],"/_app":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-bbce3cdc1a611f18.js","static/chunks/main-63854ee67f4963c5.js","static/chunks/pages/_app-a38f146e257ad06e.js"],"/_error":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-bbce3cdc1a611f18.js","static/chunks/main-63854ee67f4963c5.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/about":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-bbce3cdc1a611f18.js","static/chunks/main-63854ee67f4963c5.js","static/chunks/117-94f8f41493a30493.js","static/chunks/pages/about-cbaa27d39d989079.js"],"/rsv":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-bbce3cdc1a611f18.js","static/chunks/main-63854ee67f4963c5.js","static/chunks/117-94f8f41493a30493.js","static/chunks/914-02791246e47708cd.js","static/chunks/971-9952852f995df008.js","static/chunks/pages/rsv-eb3554b15fe723bf.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;