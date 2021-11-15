"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3832);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4310);




// import Typography from '@material-ui/core/Typography';
function Heading(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            maxWidth: "lg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                my: 1,
                textAlign: "center",
                fontSize: "h5.fontSize",
                children: props.heading
            })
        })
    }));
};


/***/ }),

/***/ 7793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CompAppBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5258);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8358);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9659);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2318);







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    toolbarTitle: {
        flex: 1
    }
});
function CompAppBar(props) {
    const classes = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            position: "static",
            color: "default",
            elevation: 0,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    variant: "h5",
                    color: "textPrimary",
                    align: "center",
                    className: classes.toolbarTitle,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        href: "/",
                        color: "inherit",
                        underline: "none",
                        children: "デーリー東北プログラミング教室 と 夏休み学びパーク"
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 4651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(4310);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(9659);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
;// CONCATENATED MODULE: ./src/components/molecules/Copyright.js




function Copyright(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "body2",
        color: "textSecondary",
        align: "center",
        children: [
            'Copyright \xa9 ',
            /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                color: "inherit",
                href: "https://www.daily-tohoku.company/",
                children: "デーリー東北新聞社"
            }),
            ' ',
            new Date().getFullYear(),
            '.'
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__(2516);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Twitter.js
var Twitter = __webpack_require__(4704);
;// CONCATENATED MODULE: ./src/components/organisms/Footer.js











const useStyles = (0,makeStyles/* default */.Z)({
    root: {
        flexGrow: 1
    }
});
function Footer(props) {
    const classes = useStyles();
    return(/*#__PURE__*/ jsx_runtime.jsx(react.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            bgcolor: "lightgrey",
            p: 2,
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    justifyContent: "center",
                    m: 1,
                    p: 1,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                            p: 1,
                            children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                variant: "button",
                                color: "textPrimary",
                                href: "https://delion-dt.com/",
                                className: classes.linkMargin,
                                rel: "noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/images/no_img2.png",
                                    width: "38",
                                    alt: "デリオンくらぶ"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                            p: 1,
                            children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                variant: "button",
                                color: "textPrimary",
                                href: "https://twitter.com/VLpNb0d2usK5N9n",
                                className: classes.linkMargin,
                                rel: "noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(Twitter/* default */.Z, {
                                    fontSize: "large"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                            p: 1,
                            children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                variant: "button",
                                color: "textPrimary",
                                href: "https://github.com/daily-tohoku-school/school-website",
                                className: classes.linkMargin,
                                rel: "noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(GitHub/* default */.Z, {
                                    fontSize: "large"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Divider/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                    m: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Z, {
                        container: true,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                                    align: "center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                        variant: "button",
                                        color: "textSecondary",
                                        href: "https://www.daily-tohoku.company/",
                                        rel: "noopener",
                                        target: "_blank",
                                        children: "会社概要"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                                    align: "center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                        variant: "button",
                                        color: "textSecondary",
                                        href: "https://www.daily-tohoku.company/guide-terms",
                                        rel: "noopener",
                                        target: "_blank",
                                        children: "著作権"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                                    align: "center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                        variant: "button",
                                        color: "textSecondary",
                                        href: "https://www.daily-tohoku.news/personal-info",
                                        rel: "noopener",
                                        target: "_blank",
                                        children: "プライバシーポリシー"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                                    align: "center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Link/* default */.Z, {
                                        variant: "button",
                                        color: "textSecondary",
                                        href: "https://www.daily-tohoku.news/sct",
                                        rel: "noopener",
                                        target: "_blank",
                                        children: "特定商取引法表示"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Divider/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                    m: 2,
                    children: /*#__PURE__*/ jsx_runtime.jsx(Copyright, {
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 4280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Reservation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4310);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7620);





function Reservation(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            bgcolor: "lightblue",
            p: 5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    component: "h2",
                    variant: "h5",
                    align: "center",
                    children: props.reservationTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    textAlign: "center",
                    my: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        href: "/rsv",
                        color: "primary",
                        variant: "outlined",
                        children: props.reservationButton
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 5628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SummaryList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(4310);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
;// CONCATENATED MODULE: ./src/components/molecules/Summary.js









const useStyles = (0,makeStyles/* default */.Z)({
    pic: {
        width: '100%',
        maxHeight: '240px',
        objectFit: 'cover'
    }
});
function Summary(props) {
    const classes = useStyles();
    const { summaryProps  } = props;
    return(/*#__PURE__*/ jsx_runtime.jsx(react.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
            ml: 5,
            mt: 0,
            mr: 5,
            mb: 5,
            children: /*#__PURE__*/ jsx_runtime.jsx(Card/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime.jsx(CardContent/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Z, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                                        component: "h2",
                                        variant: "h5",
                                        children: summaryProps.title1
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(Divider/* default */.Z, {
                                        variant: "middle"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        component: "div",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                                                lineHeight: "normal",
                                                ml: 1,
                                                mt: 1,
                                                mb: 1,
                                                color: "secondary.main",
                                                fontWeight: "fontWeightBold",
                                                fontSize: "h6.fontSize",
                                                children: "完売御礼！"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                                                lineHeight: "normal",
                                                ml: 1,
                                                mb: 2,
                                                fontSize: "h6.fontSize",
                                                fontWeight: "fontWeightBold",
                                                children: "プログラミングでドローンを飛ばそう！（夏休み学びパーク・バージョン）"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                                                lineHeight: "normal",
                                                ml: 1,
                                                mb: 2,
                                                children: "ドローンといえば、DJI 社の「Phantom」が有名。その DJI 社の協力で開発された、Ryze Tech 社の「Tello」という小型ドローンを講座で使用します。簡単なプログラムを作成し、おうちでも飛ばせるドローンを自動操縦してみましょう！"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                lineHeight: "normal",
                                                ml: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                                                        component: "span",
                                                        m: 1,
                                                        fontWeight: "fontWeightBold",
                                                        children: "[開催日]"
                                                    }),
                                                    "８月１日（日）"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                lineHeight: "normal",
                                                ml: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                                                        component: "span",
                                                        m: 1,
                                                        fontWeight: "fontWeightBold",
                                                        children: "[会場]"
                                                    }),
                                                    "デーリー東北 ６階小ホール"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                                item: true,
                                xs: 12,
                                sm: 4,
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: summaryProps.image1,
                                    className: classes.pic
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/organisms/SummaryList.js






const summaryConst = {
    title1: '８月は納涼ドローン祭り: 第一弾は「夏休み学びパーク」',
    description1: '開催日: ８月１日（日）',
    image1: 'https://source.unsplash.com/featured/?drone',
    title2: '９月はマイクラ強化月間',
    description2: '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
    image2: 'https://source.unsplash.com/featured/?minecraft',
    title3: '10月はレゴの秋',
    description3: '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
    image3: 'https://source.unsplash.com/featured/?lego',
    title4: '平日限定: シニアのための IT なんでも相談室',
    description4: '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
    image4: 'https://source.unsplash.com/featured/?smartphone',
    title5: '平日限定: （幼児コース）小学校進学前のプログラミング',
    description5: '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
    image5: 'https://source.unsplash.com/featured/?kindergarten',
    title6: '平日限定: 悩める先生のためのプログラミング相談室',
    description6: '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
    image6: 'https://source.unsplash.com/featured/?school'
};
function SummaryList(props) {
    return(/*#__PURE__*/ jsx_runtime.jsx(react.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
            maxWidth: "lg",
            children: /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                container: true,
                spacing: 3,
                children: /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime.jsx(Summary, {
                        summaryProps: summaryConst
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 3601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TeacherList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(4310);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./src/components/molecules/Teacher.js






const useStyles = (0,makeStyles/* default */.Z)({
    box: {
        display: 'flex',
        backgroundColor: 'lightblue'
    },
    pic: {
        width: '160px',
        maxHeight: '240px',
        objectFit: 'cover',
        borderRadius: '50%'
    }
});
function Teacher(props) {
    const classes = useStyles();
    const { teacherProps  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Z, {
                item: true,
                xs: 12,
                sm: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                        className: classes.box,
                        children: /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                            m: "auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: teacherProps.src1,
                                alt: teacherProps.alt1,
                                className: classes.pic
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                        component: "h2",
                        variant: "h5",
                        align: "center",
                        children: teacherProps.name1
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                        variant: "subtitle1",
                        paragraph: true,
                        align: "left",
                        children: teacherProps.detail1
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Z, {
                item: true,
                xs: 12,
                sm: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                        className: classes.box,
                        children: /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                            m: "auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: teacherProps.src2,
                                alt: teacherProps.alt2,
                                className: classes.pic
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Typography/* default */.Z, {
                        component: "h2",
                        variant: "h5",
                        align: "center",
                        children: teacherProps.name2
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "subtitle1",
                        paragraph: true,
                        align: "left",
                        children: [
                            "デリオン秘密工場の工場長。デリオン名誉教授の一番弟子。オモテの顔は、デーリー東北の社員。本社 ３F にある、読者コミュニケーション部に所属し、各種イベントのお手伝い、チケットの販売などをしているっぽい。また、",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://www.alec.ac.jp/news/%E3%80%8E%E3%83%A9%E3%82%BA%E3%83%99%E3%83%AA%E3%83%BC%E3%83%91%E3%82%A4%E3%80%8F%E3%81%A7%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD",
                                target: "_blank",
                                children: "ALEC 情報ビジネス学院の IT エンジニア科の非常勤講師"
                            }),
                            "として活動することもあるらしい。"
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(9912);
;// CONCATENATED MODULE: ./src/components/organisms/TeacherList.js









const TeacherList_useStyles = (0,makeStyles/* default */.Z)({
    box: {
        display: 'flex',
        backgroundColor: 'lightblue'
    },
    pic: {
        width: '160px',
        maxHeight: '240px',
        objectFit: 'cover',
        borderRadius: '50%'
    }
});
const teacherConst = {
    src1: '/images/professor.jpg',
    alt1: 'デリオン名誉教授',
    name1: 'デリオン名誉教授',
    detail1: 'デーリー東北プログラミング教室のプロデューサー。オモテの顔は新聞記者。世の中をより良くするための IT 技術開発にいそしむウラの顔を持つ「仕事人」。取材がない日は、オーナーでもあるデリオン秘密工場で研究開発をしている。プログラミング教室では、名誉教授として登壇することも、たまにあるかも。',
    src2: '/images/helmet.jpg',
    alt2: '工場長',
    name2: '工場長'
};
function TeacherList(props) {
    const classes = TeacherList_useStyles();
    return(/*#__PURE__*/ jsx_runtime.jsx(react.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Container/* default */.Z, {
            maxWidth: "lg",
            children: /*#__PURE__*/ jsx_runtime.jsx(Box/* default */.Z, {
                m: 5,
                children: /*#__PURE__*/ jsx_runtime.jsx(Card/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(CardContent/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(Grid/* default */.Z, {
                            container: true,
                            spacing: 10,
                            children: /*#__PURE__*/ jsx_runtime.jsx(Teacher, {
                                teacherProps: teacherConst
                            })
                        })
                    })
                })
            })
        })
    }));
};


/***/ })

};
;