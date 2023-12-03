/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/barista-1.jpg */ "./src/pics/barista-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/chef-1.jpg */ "./src/pics/chef-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/barista-2.jpg */ "./src/pics/barista-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/chef-2.jpg */ "./src/pics/chef-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/barista-3.jpg */ "./src/pics/barista-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/chef-3.jpg */ "./src/pics/chef-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
    --clr-green: #2b9872;
    --clr-gray:  rgb(51, 46, 46);
 }

.about-section .img-flex {
   display: flex;
   flex-wrap: wrap;
   flex-basis: auto;
   justify-content: center;
   gap: 0.5rem;
   padding: 1rem;
}
.about-section .img-flex .img-item {
   max-width: 100%;
   width: max(25%, 250px);
   min-height: 300px;
   object-fit: cover;
   background-size: max(25%, 250px) 300px ;
   background-repeat: no-repeat;
}
.about-section .img-flex .img-item:nth-child(1) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.about-section .img-flex .img-item:nth-child(2) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.about-section .img-flex .img-item:nth-child(3) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.about-section .img-flex .img-item:nth-child(4) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.about-section .img-flex .img-item:nth-child(5) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.about-section .img-flex .img-item:nth-child(6) {
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
.about-section > .section-txt {
   margin: 1rem 0;
   text-align: center;
   text-transform: capitalize;
   text-decoration: underline;
   text-decoration-color: var(--clr-green);
   text-underline-offset: 0.5rem;
   text-decoration-thickness: 0.15rem;
   color: var(--clr-gray);
   line-height: 2;
}`, "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":";AACA;IACI,oBAAoB;IACpB,4BAA4B;CAC/B;;AAED;GACG,aAAa;GACb,eAAe;GACf,gBAAgB;GAChB,uBAAuB;GACvB,WAAW;GACX,aAAa;AAChB;AACA;GACG,eAAe;GACf,sBAAsB;GACtB,iBAAiB;GACjB,iBAAiB;GACjB,uCAAuC;GACvC,4BAA4B;AAC/B;AACA;GACG,yDAA4C;AAC/C;AACA;GACG,yDAAyC;AAC5C;AACA;GACG,yDAA4C;AAC/C;AACA;GACG,yDAAyC;AAC5C;AACA;GACG,yDAA4C;AAC/C;AACA;GACG,yDAAyC;AAC5C;AACA;GACG,cAAc;GACd,kBAAkB;GAClB,0BAA0B;GAC1B,0BAA0B;GAC1B,uCAAuC;GACvC,6BAA6B;GAC7B,kCAAkC;GAClC,sBAAsB;GACtB,cAAc;AACjB","sourcesContent":["\r\n:root {\r\n    --clr-green: #2b9872;\r\n    --clr-gray:  rgb(51, 46, 46);\r\n }\r\n\r\n.about-section .img-flex {\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   flex-basis: auto;\r\n   justify-content: center;\r\n   gap: 0.5rem;\r\n   padding: 1rem;\r\n}\r\n.about-section .img-flex .img-item {\r\n   max-width: 100%;\r\n   width: max(25%, 250px);\r\n   min-height: 300px;\r\n   object-fit: cover;\r\n   background-size: max(25%, 250px) 300px ;\r\n   background-repeat: no-repeat;\r\n}\r\n.about-section .img-flex .img-item:nth-child(1) {\r\n   background-image: url(../pics/barista-1.jpg);\r\n}\r\n.about-section .img-flex .img-item:nth-child(2) {\r\n   background-image: url(../pics/chef-1.jpg);\r\n}\r\n.about-section .img-flex .img-item:nth-child(3) {\r\n   background-image: url(../pics/barista-2.jpg);\r\n}\r\n.about-section .img-flex .img-item:nth-child(4) {\r\n   background-image: url(../pics/chef-2.jpg);\r\n}\r\n.about-section .img-flex .img-item:nth-child(5) {\r\n   background-image: url(../pics/barista-3.jpg);\r\n}\r\n.about-section .img-flex .img-item:nth-child(6) {\r\n   background-image: url(../pics/chef-3.jpg);\r\n}\r\n.about-section > .section-txt {\r\n   margin: 1rem 0;\r\n   text-align: center;\r\n   text-transform: capitalize;\r\n   text-decoration: underline;\r\n   text-decoration-color: var(--clr-green);\r\n   text-underline-offset: 0.5rem;\r\n   text-decoration-thickness: 0.15rem;\r\n   color: var(--clr-gray);\r\n   line-height: 2;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --clr-green: #2b9872;
    --clr-gray:  rgb(51, 46, 46);
    --clr-light-gray: rgb(115, 101, 101);
 }

.menu-wrapper {
    width: 60%;
    height: auto;
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 2px 2px 6px var(--clr-light-gray);
}
.menu-section {
    padding: 0.5rem;
    box-shadow: 2px 2px 6px var(--clr-light-gray);
   background-color: var(--clr-gray);
   display: grid;
   grid-auto-flow: column;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr;
   justify-items: center;
   margin: 0 auto;
   max-width: 60%;
}
.menu-section p {
    color: white;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 2px 2px 2px var(--clr-green);
}`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4BAA4B;IAC5B,oCAAoC;CACvC;;AAED;IACI,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,6CAA6C;AACjD;AACA;IACI,eAAe;IACf,6CAA6C;GAC9C,iCAAiC;GACjC,aAAa;GACb,sBAAsB;GACtB,0BAA0B;GAC1B,2BAA2B;GAC3B,qBAAqB;GACrB,cAAc;GACd,cAAc;AACjB;AACA;IACI,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,yCAAyC;AAC7C","sourcesContent":[":root {\r\n    --clr-green: #2b9872;\r\n    --clr-gray:  rgb(51, 46, 46);\r\n    --clr-light-gray: rgb(115, 101, 101);\r\n }\r\n\r\n.menu-wrapper {\r\n    width: 60%;\r\n    height: auto;\r\n    margin: 1rem auto;\r\n    padding: 1rem;\r\n    box-shadow: 2px 2px 6px var(--clr-light-gray);\r\n}\r\n.menu-section {\r\n    padding: 0.5rem;\r\n    box-shadow: 2px 2px 6px var(--clr-light-gray);\r\n   background-color: var(--clr-gray);\r\n   display: grid;\r\n   grid-auto-flow: column;\r\n   grid-template-columns: 1fr;\r\n   grid-template-rows: 1fr 1fr;\r\n   justify-items: center;\r\n   margin: 0 auto;\r\n   max-width: 60%;\r\n}\r\n.menu-section p {\r\n    color: white;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 2px var(--clr-green);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/header-img.jpg */ "./src/pics/header-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/two.jpg */ "./src/pics/two.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/one.jpg */ "./src/pics/one.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/three.jpg */ "./src/pics/three.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/four.jpg */ "./src/pics/four.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
   --clr-green: #2b9872;
   --clr-gray:  rgb(51, 46, 46);
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#content {
    width: 100%;
    height: 100%;
}
#content > nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    z-index: 1;
    margin: 1rem 0;
}
#content > nav a {
    text-decoration: none;
    color: var(--clr-gray);
}
#content > nav a.current-page {
    text-decoration: underline;
    text-decoration-color: var(--clr-green);
    text-underline-offset: 0.5rem;
    text-decoration-thickness: 0.15rem;
}
#content > nav a:hover {
    text-decoration: underline;
    text-decoration-color: var(--clr-green);
    text-underline-offset: 0.5rem;
    text-decoration-thickness: 0.15rem;
}
header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    object-fit: contain;
    width: 100%;
    height:20vh;
    background-size: 100% 45vw;
    background-repeat: no-repeat;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   
    z-index: 0;
}
header > p {
    margin: 0;
    color: var(--clr-gray);
    box-shadow: -2px 2px 10px 0px rgb(105, 104, 104);
    border: none;
    font-size: xx-large;
    padding: 0.5rem 1rem;
}
#content .wavy-svg {
    transform: translateY(-110%);
   
}
.home-section .under-header-txt {
   margin: 1rem 0;
   text-align: center;
   text-transform: capitalize;
   text-decoration: underline;
   text-decoration-color: var(--clr-green);
   text-underline-offset: 0.5rem;
   text-decoration-thickness: 0.15rem;
   color: var(--clr-gray);
   line-height: 2;
}
.home-section .img-flex {
    display: flex;
   flex-wrap: wrap;
   flex-basis: auto;
   justify-content: center;
   gap: 0.5rem;
   padding: 1rem;
}
.home-section .img-flex .img-item {
    max-width: 100%;
    width: max(25%, 250px);
    min-height: 300px;
    object-fit: cover;
    background-size: max(25%, 250px) 300px ;
    background-repeat: no-repeat;
}
.home-section .img-flex .img-item:nth-child(1) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.home-section .img-flex .img-item:nth-child(2) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.home-section .img-flex .img-item:nth-child(3) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.home-section .img-flex .img-item:nth-child(4) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem;
    box-shadow: 0 -2px 10px 0 var(--clr-gray);
}
footer a {
    color: var(--clr-gray);
    text-decoration: none;

}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":";AACA;GACG,oBAAoB;GACpB,4BAA4B;AAC/B;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wEAAwE;AAC5E;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,6BAA6B;IAC7B,UAAU;IACV,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,sBAAsB;AAC1B;AACA;IACI,0BAA0B;IAC1B,uCAAuC;IACvC,6BAA6B;IAC7B,kCAAkC;AACtC;AACA;IACI,0BAA0B;IAC1B,uCAAuC;IACvC,6BAA6B;IAC7B,kCAAkC;AACtC;AACA;IACI,yDAA6C;IAC7C,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,UAAU;AACd;AACA;IACI,SAAS;IACT,sBAAsB;IACtB,gDAAgD;IAChD,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,4BAA4B;;AAEhC;AACA;GACG,cAAc;GACd,kBAAkB;GAClB,0BAA0B;GAC1B,0BAA0B;GAC1B,uCAAuC;GACvC,6BAA6B;GAC7B,kCAAkC;GAClC,sBAAsB;GACtB,cAAc;AACjB;AACA;IACI,aAAa;GACd,eAAe;GACf,gBAAgB;GAChB,uBAAuB;GACvB,WAAW;GACX,aAAa;AAChB;AACA;IACI,eAAe;IACf,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,uCAAuC;IACvC,4BAA4B;AAChC;AACA;IACI,yDAAsC;AAC1C;AACA;IACI,yDAAsC;AAC1C;AACA;IACI,yDAAwC;AAC5C;AACA;IACI,yDAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,yCAAyC;AAC7C;AACA;IACI,sBAAsB;IACtB,qBAAqB;;AAEzB","sourcesContent":["\r\n:root {\r\n   --clr-green: #2b9872;\r\n   --clr-gray:  rgb(51, 46, 46);\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n#content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n#content > nav {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: transparent;\r\n    z-index: 1;\r\n    margin: 1rem 0;\r\n}\r\n#content > nav a {\r\n    text-decoration: none;\r\n    color: var(--clr-gray);\r\n}\r\n#content > nav a.current-page {\r\n    text-decoration: underline;\r\n    text-decoration-color: var(--clr-green);\r\n    text-underline-offset: 0.5rem;\r\n    text-decoration-thickness: 0.15rem;\r\n}\r\n#content > nav a:hover {\r\n    text-decoration: underline;\r\n    text-decoration-color: var(--clr-green);\r\n    text-underline-offset: 0.5rem;\r\n    text-decoration-thickness: 0.15rem;\r\n}\r\nheader {\r\n    background-image: url(../pics/header-img.jpg);\r\n    object-fit: contain;\r\n    width: 100%;\r\n    height:20vh;\r\n    background-size: 100% 45vw;\r\n    background-repeat: no-repeat;\r\n    margin-bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n   \r\n    z-index: 0;\r\n}\r\nheader > p {\r\n    margin: 0;\r\n    color: var(--clr-gray);\r\n    box-shadow: -2px 2px 10px 0px rgb(105, 104, 104);\r\n    border: none;\r\n    font-size: xx-large;\r\n    padding: 0.5rem 1rem;\r\n}\r\n#content .wavy-svg {\r\n    transform: translateY(-110%);\r\n   \r\n}\r\n.home-section .under-header-txt {\r\n   margin: 1rem 0;\r\n   text-align: center;\r\n   text-transform: capitalize;\r\n   text-decoration: underline;\r\n   text-decoration-color: var(--clr-green);\r\n   text-underline-offset: 0.5rem;\r\n   text-decoration-thickness: 0.15rem;\r\n   color: var(--clr-gray);\r\n   line-height: 2;\r\n}\r\n.home-section .img-flex {\r\n    display: flex;\r\n   flex-wrap: wrap;\r\n   flex-basis: auto;\r\n   justify-content: center;\r\n   gap: 0.5rem;\r\n   padding: 1rem;\r\n}\r\n.home-section .img-flex .img-item {\r\n    max-width: 100%;\r\n    width: max(25%, 250px);\r\n    min-height: 300px;\r\n    object-fit: cover;\r\n    background-size: max(25%, 250px) 300px ;\r\n    background-repeat: no-repeat;\r\n}\r\n.home-section .img-flex .img-item:nth-child(1) {\r\n    background-image: url(../pics/two.jpg);\r\n}\r\n.home-section .img-flex .img-item:nth-child(2) {\r\n    background-image: url(../pics/one.jpg);\r\n}\r\n.home-section .img-flex .img-item:nth-child(3) {\r\n    background-image: url(../pics/three.jpg);\r\n}\r\n.home-section .img-flex .img-item:nth-child(4) {\r\n    background-image: url(../pics/four.jpg);\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 0.5rem;\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    box-shadow: 0 -2px 10px 0 var(--clr-gray);\r\n}\r\nfooter a {\r\n    color: var(--clr-gray);\r\n    text-decoration: none;\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAbout: () => (/* binding */ showAbout)
/* harmony export */ });

const content = document.getElementById("content");
const showAbout = (() => {
    
    const clear = () => {
        content.innerHTML = "";
    }
    const createNav = () => {
        const nav = document.createElement("nav");
        content.appendChild(nav);
        const homeNav = document.createElement("a");
        homeNav.textContent = "Home";
        homeNav.setAttribute("href", "");
        homeNav.classList.add("nav-btn");
        nav.appendChild(homeNav);
        const menuNav = document.createElement("a");
        menuNav.textContent = "Menu";
        menuNav.setAttribute("href", "");
        menuNav.classList.add("nav-btn");
        nav.appendChild(menuNav);
        const aboutNav = document.createElement("a");
        aboutNav.classList.add("nav-btn", "current-page");
        aboutNav.setAttribute("href", "");
        aboutNav.textContent = "About";
        nav.appendChild(aboutNav);
    };
    const createHeader = () => {
        const header = document.createElement("header");
        content.appendChild(header);
        const headerTxt = document.createElement("p");
        headerTxt.textContent = "Italiano Food";
        header.appendChild(headerTxt);
    }
    const createSection = () => {
        const aboutSection = document.createElement("section");
        aboutSection.classList.add("about-section")
        content.appendChild(aboutSection);
        const sectionTxt = document.createElement("div");
        sectionTxt.classList.add("section-txt");
        sectionTxt.textContent = `since 1926, we serve our customers with
        delicious food and coffee from italia with the best italian chefs
        and baristas.`
        aboutSection.appendChild(sectionTxt);
        const imgFlex = document.createElement("div");
        imgFlex.classList.add("img-flex");
        aboutSection.appendChild(imgFlex);
        const imgHtml =  `<div class = "img-item"></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>`
        imgFlex.insertAdjacentHTML("afterbegin", imgHtml);
       
        
    }
    const createFooter = () => {
        const footer = document.createElement("footer");
        content.appendChild(footer);
        const contact = document.createElement("a");
        contact.setAttribute("href", "#");
        contact.textContent = "Contant Us";
        footer.appendChild(contact);
        const gmail = document.createElement("a");
        gmail.setAttribute("href", "#");
        gmail.textContent = "Gmail: Italiano55@gmail.com";
        footer.appendChild(gmail);
        const phone = document.createElement("a");
        phone.setAttribute("href", "#");
        phone.textContent = "Phone: 0111895522";
        footer.appendChild(phone);
        
    }
    return {
        createNav,
        createHeader,
        createSection,
        createFooter,
        clear
    }
})();


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
const content = document.getElementById("content");
const showMenu = (() => {
    
    const clear = () => {
        content.innerHTML = "";
    }
    const createNav = () => {
        const nav = document.createElement("nav");
        content.appendChild(nav);
        const homeNav = document.createElement("a");
        homeNav.textContent = "Home";
        homeNav.setAttribute("href", "");
        homeNav.classList.add("nav-btn");
        nav.appendChild(homeNav);
        const menuNav = document.createElement("a");
        menuNav.textContent = "Menu";
        menuNav.setAttribute("href", "");
        menuNav.classList.add("nav-btn", "current-page");
        nav.appendChild(menuNav);
        const aboutNav = document.createElement("a");
        aboutNav.classList.add("nav-btn");
        aboutNav.setAttribute("href", "");
        aboutNav.textContent = "About";
        nav.appendChild(aboutNav);
    };
    const createHeader = () => {
        const header = document.createElement("header");
        content.appendChild(header);
        const headerTxt = document.createElement("p");
        headerTxt.textContent = "Italiano Food";
        header.appendChild(headerTxt);
    }
    const createSection = () => {
       
        console.log("menu")
       
        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        content.appendChild(menuWrapper);
        const menuSection = document.createElement("section");
        menuSection.classList.add("menu-section")
        menuWrapper.appendChild(menuSection);
       
        const coffeeMenu = document.createElement("div");
        coffeeMenu.classList.add("coffee");
        menuSection.appendChild(coffeeMenu);
        // add coffee menu items
        const coffee = document.createElement("p");
        coffee.textContent = "coffee: ";
        coffeeMenu.appendChild(coffee);
        const espresso = document.createElement("p");
        espresso.textContent = "espresso: 1$ ";
        coffeeMenu.appendChild(espresso);
        const french = document.createElement("p");
        french.textContent = "french: 2$";
        coffeeMenu.appendChild(french);
        const latte = document.createElement("p");
        latte.textContent = "latte: 2.5$";
        coffeeMenu.appendChild(latte);
        // breakfast
        const breakfastMenu = document.createElement("div");
        breakfastMenu.classList.add("breakfast");
        menuSection.appendChild(breakfastMenu);
        // add breakfast menu items
        const breakfast = document.createElement("p");
        breakfast.textContent = "breakfast: ";
        breakfastMenu.appendChild(breakfast);
        const pancakes = document.createElement("p");
        pancakes.textContent = "pancakes(4): 2$ ";
        breakfastMenu.appendChild(pancakes);
        const pancakes2 = document.createElement("p");
        pancakes2.textContent = "pancakes(8): 3.5$";
        breakfastMenu.appendChild(pancakes2);
        const waffles = document.createElement("p");
        waffles.textContent = "waffles: 3$";
        breakfastMenu.appendChild(waffles);

        
    }
    const createFooter = () => {
        const footer = document.createElement("footer");
        content.appendChild(footer);
        const contact = document.createElement("a");
        contact.setAttribute("href", "#");
        contact.textContent = "Contant Us";
        footer.appendChild(contact);
        const gmail = document.createElement("a");
        gmail.setAttribute("href", "#");
        gmail.textContent = "Gmail: Italiano55@gmail.com";
        footer.appendChild(gmail);
        const phone = document.createElement("a");
        phone.setAttribute("href", "#");
        phone.textContent = "Phone: 0111895522";
        footer.appendChild(phone);
        
    }
    return {
        createNav,
        createHeader,
        createSection,
        createFooter,
        clear
    }
})();


/***/ }),

/***/ "./src/pics/barista-1.jpg":
/*!********************************!*\
  !*** ./src/pics/barista-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e727a319f6867f24edb.jpg";

/***/ }),

/***/ "./src/pics/barista-2.jpg":
/*!********************************!*\
  !*** ./src/pics/barista-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32d13187926be77034e8.jpg";

/***/ }),

/***/ "./src/pics/barista-3.jpg":
/*!********************************!*\
  !*** ./src/pics/barista-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b85b67d70c3b58f7672.jpg";

/***/ }),

/***/ "./src/pics/chef-1.jpg":
/*!*****************************!*\
  !*** ./src/pics/chef-1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aa0a96cd3b0351a2adb.jpg";

/***/ }),

/***/ "./src/pics/chef-2.jpg":
/*!*****************************!*\
  !*** ./src/pics/chef-2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "256f41bd50306f9c6471.jpg";

/***/ }),

/***/ "./src/pics/chef-3.jpg":
/*!*****************************!*\
  !*** ./src/pics/chef-3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58d75431945123d05ed8.jpg";

/***/ }),

/***/ "./src/pics/four.jpg":
/*!***************************!*\
  !*** ./src/pics/four.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0abefc0fd468b0c52da3.jpg";

/***/ }),

/***/ "./src/pics/header-img.jpg":
/*!*********************************!*\
  !*** ./src/pics/header-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c72dcf60c8fb78ff5e4.jpg";

/***/ }),

/***/ "./src/pics/one.jpg":
/*!**************************!*\
  !*** ./src/pics/one.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55610c0fae33785fc486.jpg";

/***/ }),

/***/ "./src/pics/three.jpg":
/*!****************************!*\
  !*** ./src/pics/three.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12398c5f55259f7e2a58.jpg";

/***/ }),

/***/ "./src/pics/two.jpg":
/*!**************************!*\
  !*** ./src/pics/two.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18be327c51e63386d7d8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/js/about.js");




// change all imges with css url


const content = document.getElementById("content");
const showHome = (() => {
    const clear = () => {
        content.innerHTML = "";
    }
    const createNav = () => {
        const nav = document.createElement("nav");
        content.appendChild(nav);
        const homeNav = document.createElement("a");
        homeNav.textContent = "Home";
        homeNav.setAttribute("href", "");
        homeNav.classList.add("nav-btn", "current-page");
        nav.appendChild(homeNav);
        const menuNav = document.createElement("a");
        menuNav.textContent = "Menu";
        menuNav.setAttribute("href", "");
        menuNav.classList.add("nav-btn");
        nav.appendChild(menuNav);
        const aboutNav = document.createElement("a");
        aboutNav.classList.add("nav-btn");
        aboutNav.setAttribute("href", "");
        aboutNav.textContent = "About";
        nav.appendChild(aboutNav);
    };
    const createHeader = () => {
        const header = document.createElement("header");
        content.appendChild(header);
        const headerTxt = document.createElement("p");
        headerTxt.textContent = "Italiano Food";
        header.appendChild(headerTxt);
    }
    const createSection = () => {
        const homeSection = document.createElement("section");
        homeSection.classList.add("home-section");
        content.appendChild(homeSection);
        const sectionTxt = document.createElement("div");
        sectionTxt.textContent = "breakfast, lunch and dinner with italian chefs!";
        sectionTxt.classList.add("under-header-txt");
        homeSection.appendChild(sectionTxt);
        const imgFlex = document.createElement("div");
        imgFlex.classList.add("img-flex");
        homeSection.appendChild(imgFlex);
        const imgHtml = `<div class = "img-item"></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>`
        imgFlex.insertAdjacentHTML("afterbegin", imgHtml);
    }
    const createFooter = () => {
        const footer = document.createElement("footer");
        content.appendChild(footer);
        const contact = document.createElement("a");
        contact.setAttribute("href", "#");
        contact.textContent = "Contant Us";
        footer.appendChild(contact);
        const gmail = document.createElement("a");
        gmail.setAttribute("href", "#");
        gmail.textContent = "Gmail: Italiano55@gmail.com";
        footer.appendChild(gmail);
        const phone = document.createElement("a");
        phone.setAttribute("href", "#");
        phone.textContent = "Phone: 0111895522";
        footer.appendChild(phone);
        
    }
    return {
        createNav,
        createHeader,
        createSection,
        createFooter,
        clear
    }
})();
showHome.clear();
showHome.createNav();
showHome.createHeader();
showHome.createSection();
showHome.createFooter();
const navBtns = Array.from(document.querySelectorAll(".nav-btn"));

navBtns.forEach(nav => nav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === navBtns[0]) {
        showHome.clear();
        showHome.createNav();
        showHome.createHeader();
        showHome.createSection();
        showHome.createFooter();
    } else if (e.target === navBtns[1]) {
        _menu__WEBPACK_IMPORTED_MODULE_3__.showMenu.clear();
        _menu__WEBPACK_IMPORTED_MODULE_3__.showMenu.createNav();
        _menu__WEBPACK_IMPORTED_MODULE_3__.showMenu.createHeader();
        _menu__WEBPACK_IMPORTED_MODULE_3__.showMenu.createSection();
        _menu__WEBPACK_IMPORTED_MODULE_3__.showMenu.createFooter();
    } else if (e.target === navBtns[2]) {
        _about__WEBPACK_IMPORTED_MODULE_4__.showAbout.clear();
        _about__WEBPACK_IMPORTED_MODULE_4__.showAbout.createNav();
        _about__WEBPACK_IMPORTED_MODULE_4__.showAbout.createHeader();
        _about__WEBPACK_IMPORTED_MODULE_4__.showAbout.createSection();
        _about__WEBPACK_IMPORTED_MODULE_4__.showAbout.createFooter();
    }
}))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2R0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNEO0FBQ0M7QUFDN0I7QUFDQTtBQUNrQztBQUNFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSwyQ0FBUTtBQUNoQixRQUFRLDJDQUFRO0FBQ2hCLFFBQVEsMkNBQVE7QUFDaEIsUUFBUSwyQ0FBUTtBQUNoQixRQUFRLDJDQUFRO0FBQ2hCLE1BQU07QUFDTixRQUFRLDZDQUFTO0FBQ2pCLFFBQVEsNkNBQVM7QUFDakIsUUFBUSw2Q0FBUztBQUNqQixRQUFRLDZDQUFTO0FBQ2pCLFFBQVEsNkNBQVM7QUFDakI7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9hYm91dC5jc3M/ZDExNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcz83MDBhIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2JhcmlzdGEtMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2NoZWYtMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2JhcmlzdGEtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2NoZWYtMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2JhcmlzdGEtMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2NoZWYtMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbjpyb290IHtcclxuICAgIC0tY2xyLWdyZWVuOiAjMmI5ODcyO1xyXG4gICAgLS1jbHItZ3JheTogIHJnYig1MSwgNDYsIDQ2KTtcclxuIH1cclxuXHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgZmxleC1iYXNpczogYXV0bztcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGdhcDogMC41cmVtO1xyXG4gICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW0ge1xyXG4gICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgIHdpZHRoOiBtYXgoMjUlLCAyNTBweCk7XHJcbiAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgYmFja2dyb3VuZC1zaXplOiBtYXgoMjUlLCAyNTBweCkgMzAwcHggO1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDMpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDQpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDUpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDYpIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xyXG59XHJcbi5hYm91dC1zZWN0aW9uID4gLnNlY3Rpb24tdHh0IHtcclxuICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1ncmVlbik7XHJcbiAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC41cmVtO1xyXG4gICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjE1cmVtO1xyXG4gICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xyXG4gICBsaW5lLWhlaWdodDogMjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtDQUMvQjs7QUFFRDtHQUNHLGFBQWE7R0FDYixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixXQUFXO0dBQ1gsYUFBYTtBQUNoQjtBQUNBO0dBQ0csZUFBZTtHQUNmLHNCQUFzQjtHQUN0QixpQkFBaUI7R0FDakIsaUJBQWlCO0dBQ2pCLHVDQUF1QztHQUN2Qyw0QkFBNEI7QUFDL0I7QUFDQTtHQUNHLHlEQUE0QztBQUMvQztBQUNBO0dBQ0cseURBQXlDO0FBQzVDO0FBQ0E7R0FDRyx5REFBNEM7QUFDL0M7QUFDQTtHQUNHLHlEQUF5QztBQUM1QztBQUNBO0dBQ0cseURBQTRDO0FBQy9DO0FBQ0E7R0FDRyx5REFBeUM7QUFDNUM7QUFDQTtHQUNHLGNBQWM7R0FDZCxrQkFBa0I7R0FDbEIsMEJBQTBCO0dBQzFCLDBCQUEwQjtHQUMxQix1Q0FBdUM7R0FDdkMsNkJBQTZCO0dBQzdCLGtDQUFrQztHQUNsQyxzQkFBc0I7R0FDdEIsY0FBYztBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2xyLWdyZWVuOiAjMmI5ODcyO1xcclxcbiAgICAtLWNsci1ncmF5OiAgcmdiKDUxLCA0NiwgNDYpO1xcclxcbiB9XFxyXFxuXFxyXFxuLmFib3V0LXNlY3Rpb24gLmltZy1mbGV4IHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICBmbGV4LWJhc2lzOiBhdXRvO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgIGdhcDogMC41cmVtO1xcclxcbiAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW0ge1xcclxcbiAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICB3aWR0aDogbWF4KDI1JSwgMjUwcHgpO1xcclxcbiAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgIGJhY2tncm91bmQtc2l6ZTogbWF4KDI1JSwgMjUwcHgpIDMwMHB4IDtcXHJcXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uYWJvdXQtc2VjdGlvbiAuaW1nLWZsZXggLmltZy1pdGVtOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3BpY3MvYmFyaXN0YS0xLmpwZyk7XFxyXFxufVxcclxcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDIpIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcGljcy9jaGVmLTEuanBnKTtcXHJcXG59XFxyXFxuLmFib3V0LXNlY3Rpb24gLmltZy1mbGV4IC5pbWctaXRlbTpudGgtY2hpbGQoMykge1xcclxcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9waWNzL2JhcmlzdGEtMi5qcGcpO1xcclxcbn1cXHJcXG4uYWJvdXQtc2VjdGlvbiAuaW1nLWZsZXggLmltZy1pdGVtOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3BpY3MvY2hlZi0yLmpwZyk7XFxyXFxufVxcclxcbi5hYm91dC1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDUpIHtcXHJcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcGljcy9iYXJpc3RhLTMuanBnKTtcXHJcXG59XFxyXFxuLmFib3V0LXNlY3Rpb24gLmltZy1mbGV4IC5pbWctaXRlbTpudGgtY2hpbGQoNikge1xcclxcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9waWNzL2NoZWYtMy5qcGcpO1xcclxcbn1cXHJcXG4uYWJvdXQtc2VjdGlvbiA+IC5zZWN0aW9uLXR4dCB7XFxyXFxuICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY2xyLWdyZWVuKTtcXHJcXG4gICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNXJlbTtcXHJcXG4gICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjE1cmVtO1xcclxcbiAgIGNvbG9yOiB2YXIoLS1jbHItZ3JheSk7XFxyXFxuICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1jbHItZ3JlZW46ICMyYjk4NzI7XHJcbiAgICAtLWNsci1ncmF5OiAgcmdiKDUxLCA0NiwgNDYpO1xyXG4gICAgLS1jbHItbGlnaHQtZ3JheTogcmdiKDExNSwgMTAxLCAxMDEpO1xyXG4gfVxyXG5cclxuLm1lbnUtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggdmFyKC0tY2xyLWxpZ2h0LWdyYXkpO1xyXG59XHJcbi5tZW51LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggdmFyKC0tY2xyLWxpZ2h0LWdyYXkpO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZ3JheSk7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG1heC13aWR0aDogNjAlO1xyXG59XHJcbi5tZW51LXNlY3Rpb24gcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1jbHItZ3JlZW4pO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkNBQTZDO0dBQzlDLGlDQUFpQztHQUNqQyxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDBCQUEwQjtHQUMxQiwyQkFBMkI7R0FDM0IscUJBQXFCO0dBQ3JCLGNBQWM7R0FDZCxjQUFjO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWNsci1ncmVlbjogIzJiOTg3MjtcXHJcXG4gICAgLS1jbHItZ3JheTogIHJnYig1MSwgNDYsIDQ2KTtcXHJcXG4gICAgLS1jbHItbGlnaHQtZ3JheTogcmdiKDExNSwgMTAxLCAxMDEpO1xcclxcbiB9XFxyXFxuXFxyXFxuLm1lbnUtd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHZhcigtLWNsci1saWdodC1ncmF5KTtcXHJcXG59XFxyXFxuLm1lbnUtc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggdmFyKC0tY2xyLWxpZ2h0LWdyYXkpO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1ncmF5KTtcXHJcXG4gICBkaXNwbGF5OiBncmlkO1xcclxcbiAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICBtYXgtd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuLm1lbnUtc2VjdGlvbiBwIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tY2xyLWdyZWVuKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2hlYWRlci1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vcGljcy90d28uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vcGljcy9vbmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vcGljcy90aHJlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2ZvdXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbjpyb290IHtcclxuICAgLS1jbHItZ3JlZW46ICMyYjk4NzI7XHJcbiAgIC0tY2xyLWdyYXk6ICByZ2IoNTEsIDQ2LCA0Nik7XHJcbn1cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jY29udGVudCA+IG5hdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG4jY29udGVudCA+IG5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItZ3JheSk7XHJcbn1cclxuI2NvbnRlbnQgPiBuYXYgYS5jdXJyZW50LXBhZ2Uge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1ncmVlbik7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDAuMTVyZW07XHJcbn1cclxuI2NvbnRlbnQgPiBuYXYgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY2xyLWdyZWVuKTtcclxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC41cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xNXJlbTtcclxufVxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDV2dztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgXHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbmhlYWRlciA+IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNsci1ncmF5KTtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDEwcHggMHB4IHJnYigxMDUsIDEwNCwgMTA0KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG4jY29udGVudCAud2F2eS1zdmcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcclxuICAgXHJcbn1cclxuLmhvbWUtc2VjdGlvbiAudW5kZXItaGVhZGVyLXR4dCB7XHJcbiAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZ3JlZW4pO1xyXG4gICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNXJlbTtcclxuICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xNXJlbTtcclxuICAgY29sb3I6IHZhcigtLWNsci1ncmF5KTtcclxuICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuLmhvbWUtc2VjdGlvbiAuaW1nLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgZ2FwOiAwLjVyZW07XHJcbiAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmhvbWUtc2VjdGlvbiAuaW1nLWZsZXggLmltZy1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiBtYXgoMjUlLCAyNTBweCk7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBtYXgoMjUlLCAyNTBweCkgMzAwcHggO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDMpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDQpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgLTJweCAxMHB4IDAgdmFyKC0tY2xyLWdyYXkpO1xyXG59XHJcbmZvb3RlciBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItZ3JheSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0dBQ0csb0JBQW9CO0dBQ3BCLDRCQUE0QjtBQUMvQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsd0VBQXdFO0FBQzVFO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0kseURBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSw0QkFBNEI7O0FBRWhDO0FBQ0E7R0FDRyxjQUFjO0dBQ2Qsa0JBQWtCO0dBQ2xCLDBCQUEwQjtHQUMxQiwwQkFBMEI7R0FDMUIsdUNBQXVDO0dBQ3ZDLDZCQUE2QjtHQUM3QixrQ0FBa0M7R0FDbEMsc0JBQXNCO0dBQ3RCLGNBQWM7QUFDakI7QUFDQTtJQUNJLGFBQWE7R0FDZCxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixXQUFXO0dBQ1gsYUFBYTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2Qyw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHlEQUFzQztBQUMxQztBQUNBO0lBQ0kseURBQXNDO0FBQzFDO0FBQ0E7SUFDSSx5REFBd0M7QUFDNUM7QUFDQTtJQUNJLHlEQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjs7QUFFekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuOnJvb3Qge1xcclxcbiAgIC0tY2xyLWdyZWVuOiAjMmI5ODcyO1xcclxcbiAgIC0tY2xyLWdyYXk6ICByZ2IoNTEsIDQ2LCA0Nik7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4jY29udGVudCA+IG5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBuYXYgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1ncmF5KTtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBuYXYgYS5jdXJyZW50LXBhZ2Uge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZ3JlZW4pO1xcclxcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuNXJlbTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xNXJlbTtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBuYXYgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1ncmVlbik7XFxyXFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC41cmVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjE1cmVtO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcGljcy9oZWFkZXItaW1nLmpwZyk7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6MjB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDQ1dnc7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIFxcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xcclxcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IDBweCByZ2IoMTA1LCAxMDQsIDEwNCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcbiNjb250ZW50IC53YXZ5LXN2ZyB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XFxyXFxuICAgXFxyXFxufVxcclxcbi5ob21lLXNlY3Rpb24gLnVuZGVyLWhlYWRlci10eHQge1xcclxcbiAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1ncmVlbik7XFxyXFxuICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjVyZW07XFxyXFxuICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xNXJlbTtcXHJcXG4gICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xcclxcbiAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbn1cXHJcXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgIGZsZXgtYmFzaXM6IGF1dG87XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuLmhvbWUtc2VjdGlvbiAuaW1nLWZsZXggLmltZy1pdGVtIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB3aWR0aDogbWF4KDI1JSwgMjUwcHgpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogbWF4KDI1JSwgMjUwcHgpIDMwMHB4IDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLmhvbWUtc2VjdGlvbiAuaW1nLWZsZXggLmltZy1pdGVtOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9waWNzL3R3by5qcGcpO1xcclxcbn1cXHJcXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3BpY3Mvb25lLmpwZyk7XFxyXFxufVxcclxcbi5ob21lLXNlY3Rpb24gLmltZy1mbGV4IC5pbWctaXRlbTpudGgtY2hpbGQoMykge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcGljcy90aHJlZS5qcGcpO1xcclxcbn1cXHJcXG4uaG9tZS1zZWN0aW9uIC5pbWctZmxleCAuaW1nLWl0ZW06bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3BpY3MvZm91ci5qcGcpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIC0ycHggMTBweCAwIHZhcigtLWNsci1ncmF5KTtcXHJcXG59XFxyXFxuZm9vdGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWdyYXkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5jb25zdCBzaG93QWJvdXQgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICAgICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGhvbWVOYXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgICAgICBob21lTmF2LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICAgICAgaG9tZU5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XHJcbiAgICAgICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICAgICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobWVudU5hdik7XHJcbiAgICAgICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhYm91dE5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiLCBcImN1cnJlbnQtcGFnZVwiKTtcclxuICAgICAgICBhYm91dE5hdi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgICAgIGFib3V0TmF2LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dE5hdik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGhlYWRlclR4dC50ZXh0Q29udGVudCA9IFwiSXRhbGlhbm8gRm9vZFwiO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUeHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXNlY3Rpb25cIilcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvblR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VjdGlvblR4dC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10eHRcIik7XHJcbiAgICAgICAgc2VjdGlvblR4dC50ZXh0Q29udGVudCA9IGBzaW5jZSAxOTI2LCB3ZSBzZXJ2ZSBvdXIgY3VzdG9tZXJzIHdpdGhcclxuICAgICAgICBkZWxpY2lvdXMgZm9vZCBhbmQgY29mZmVlIGZyb20gaXRhbGlhIHdpdGggdGhlIGJlc3QgaXRhbGlhbiBjaGVmc1xyXG4gICAgICAgIGFuZCBiYXJpc3Rhcy5gXHJcbiAgICAgICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UeHQpO1xyXG4gICAgICAgIGNvbnN0IGltZ0ZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltZ0ZsZXguY2xhc3NMaXN0LmFkZChcImltZy1mbGV4XCIpO1xyXG4gICAgICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChpbWdGbGV4KTtcclxuICAgICAgICBjb25zdCBpbWdIdG1sID0gIGA8ZGl2IGNsYXNzID0gXCJpbWctaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PmBcclxuICAgICAgICBpbWdGbGV4Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaW1nSHRtbCk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YW50IFVzXCI7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgICAgIGNvbnN0IGdtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgZ21haWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgICAgICAgZ21haWwudGV4dENvbnRlbnQgPSBcIkdtYWlsOiBJdGFsaWFubzU1QGdtYWlsLmNvbVwiO1xyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnbWFpbCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgICAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDAxMTE4OTU1MjJcIjtcclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVOYXYsXHJcbiAgICAgICAgY3JlYXRlSGVhZGVyLFxyXG4gICAgICAgIGNyZWF0ZVNlY3Rpb24sXHJcbiAgICAgICAgY3JlYXRlRm9vdGVyLFxyXG4gICAgICAgIGNsZWFyXHJcbiAgICB9XHJcbn0pKCk7XHJcbmV4cG9ydCAge3Nob3dBYm91dH07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuY29uc3Qgc2hvd01lbnUgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICAgICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGhvbWVOYXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgICAgICBob21lTmF2LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICAgICAgaG9tZU5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XHJcbiAgICAgICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICAgICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiLCBcImN1cnJlbnQtcGFnZVwiKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobWVudU5hdik7XHJcbiAgICAgICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhYm91dE5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICAgICAgICBhYm91dE5hdi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xyXG4gICAgICAgIGFib3V0TmF2LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dE5hdik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGhlYWRlclR4dC50ZXh0Q29udGVudCA9IFwiSXRhbGlhbm8gRm9vZFwiO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUeHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudVwiKVxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXdyYXBwZXJcIik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51V3JhcHBlcik7XHJcbiAgICAgICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpXHJcbiAgICAgICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgY29mZmVlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29mZmVlTWVudS5jbGFzc0xpc3QuYWRkKFwiY29mZmVlXCIpO1xyXG4gICAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNvZmZlZU1lbnUpO1xyXG4gICAgICAgIC8vIGFkZCBjb2ZmZWUgbWVudSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGNvZmZlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvZmZlZS50ZXh0Q29udGVudCA9IFwiY29mZmVlOiBcIjtcclxuICAgICAgICBjb2ZmZWVNZW51LmFwcGVuZENoaWxkKGNvZmZlZSk7XHJcbiAgICAgICAgY29uc3QgZXNwcmVzc28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBlc3ByZXNzby50ZXh0Q29udGVudCA9IFwiZXNwcmVzc286IDEkIFwiO1xyXG4gICAgICAgIGNvZmZlZU1lbnUuYXBwZW5kQ2hpbGQoZXNwcmVzc28pO1xyXG4gICAgICAgIGNvbnN0IGZyZW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGZyZW5jaC50ZXh0Q29udGVudCA9IFwiZnJlbmNoOiAyJFwiO1xyXG4gICAgICAgIGNvZmZlZU1lbnUuYXBwZW5kQ2hpbGQoZnJlbmNoKTtcclxuICAgICAgICBjb25zdCBsYXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGxhdHRlLnRleHRDb250ZW50ID0gXCJsYXR0ZTogMi41JFwiO1xyXG4gICAgICAgIGNvZmZlZU1lbnUuYXBwZW5kQ2hpbGQobGF0dGUpO1xyXG4gICAgICAgIC8vIGJyZWFrZmFzdFxyXG4gICAgICAgIGNvbnN0IGJyZWFrZmFzdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJyZWFrZmFzdE1lbnUuY2xhc3NMaXN0LmFkZChcImJyZWFrZmFzdFwiKTtcclxuICAgICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChicmVha2Zhc3RNZW51KTtcclxuICAgICAgICAvLyBhZGQgYnJlYWtmYXN0IG1lbnUgaXRlbXNcclxuICAgICAgICBjb25zdCBicmVha2Zhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBicmVha2Zhc3QudGV4dENvbnRlbnQgPSBcImJyZWFrZmFzdDogXCI7XHJcbiAgICAgICAgYnJlYWtmYXN0TWVudS5hcHBlbmRDaGlsZChicmVha2Zhc3QpO1xyXG4gICAgICAgIGNvbnN0IHBhbmNha2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFuY2FrZXMudGV4dENvbnRlbnQgPSBcInBhbmNha2VzKDQpOiAyJCBcIjtcclxuICAgICAgICBicmVha2Zhc3RNZW51LmFwcGVuZENoaWxkKHBhbmNha2VzKTtcclxuICAgICAgICBjb25zdCBwYW5jYWtlczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwYW5jYWtlczIudGV4dENvbnRlbnQgPSBcInBhbmNha2VzKDgpOiAzLjUkXCI7XHJcbiAgICAgICAgYnJlYWtmYXN0TWVudS5hcHBlbmRDaGlsZChwYW5jYWtlczIpO1xyXG4gICAgICAgIGNvbnN0IHdhZmZsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB3YWZmbGVzLnRleHRDb250ZW50ID0gXCJ3YWZmbGVzOiAzJFwiO1xyXG4gICAgICAgIGJyZWFrZmFzdE1lbnUuYXBwZW5kQ2hpbGQod2FmZmxlcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhbnQgVXNcIjtcclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgICAgICAgY29uc3QgZ21haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBnbWFpbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgICAgICBnbWFpbC50ZXh0Q29udGVudCA9IFwiR21haWw6IEl0YWxpYW5vNTVAZ21haWwuY29tXCI7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGdtYWlsKTtcclxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHBob25lLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogMDExMTg5NTUyMlwiO1xyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwaG9uZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZU5hdixcclxuICAgICAgICBjcmVhdGVIZWFkZXIsXHJcbiAgICAgICAgY3JlYXRlU2VjdGlvbixcclxuICAgICAgICBjcmVhdGVGb290ZXIsXHJcbiAgICAgICAgY2xlYXJcclxuICAgIH1cclxufSkoKTtcclxuZXhwb3J0ICB7c2hvd01lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbWVudS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LmNzc1wiO1xyXG5cclxuLy8gY2hhbmdlIGFsbCBpbWdlcyB3aXRoIGNzcyB1cmxcclxuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IHNob3dBYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IHNob3dIb21lID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgICAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaG9tZU5hdi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgICAgIGhvbWVOYXYuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcclxuICAgICAgICBob21lTmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIsIFwiY3VycmVudC1wYWdlXCIpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChob21lTmF2KTtcclxuICAgICAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbWVudU5hdi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIG1lbnVOYXYuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcclxuICAgICAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChtZW51TmF2KTtcclxuICAgICAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGFib3V0TmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xyXG4gICAgICAgIGFib3V0TmF2LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XHJcbiAgICAgICAgYWJvdXROYXYudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgaGVhZGVyVHh0LnRleHRDb250ZW50ID0gXCJJdGFsaWFubyBGb29kXCI7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclR4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICAgICAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvblwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZWN0aW9uVHh0LnRleHRDb250ZW50ID0gXCJicmVha2Zhc3QsIGx1bmNoIGFuZCBkaW5uZXIgd2l0aCBpdGFsaWFuIGNoZWZzIVwiO1xyXG4gICAgICAgIHNlY3Rpb25UeHQuY2xhc3NMaXN0LmFkZChcInVuZGVyLWhlYWRlci10eHRcIik7XHJcbiAgICAgICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblR4dCk7XHJcbiAgICAgICAgY29uc3QgaW1nRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1nRmxleC5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsZXhcIik7XHJcbiAgICAgICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nRmxleCk7XHJcbiAgICAgICAgY29uc3QgaW1nSHRtbCA9IGA8ZGl2IGNsYXNzID0gXCJpbWctaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImltZy1pdGVtXCIgPjwvZGl2PmBcclxuICAgICAgICBpbWdGbGV4Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaW1nSHRtbCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFudCBVc1wiO1xyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICAgICAgICBjb25zdCBnbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGdtYWlsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICAgIGdtYWlsLnRleHRDb250ZW50ID0gXCJHbWFpbDogSXRhbGlhbm81NUBnbWFpbC5jb21cIjtcclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ21haWwpO1xyXG4gICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgcGhvbmUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgICAgICAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiAwMTExODk1NTIyXCI7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHBob25lKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTmF2LFxyXG4gICAgICAgIGNyZWF0ZUhlYWRlcixcclxuICAgICAgICBjcmVhdGVTZWN0aW9uLFxyXG4gICAgICAgIGNyZWF0ZUZvb3RlcixcclxuICAgICAgICBjbGVhclxyXG4gICAgfVxyXG59KSgpO1xyXG5zaG93SG9tZS5jbGVhcigpO1xyXG5zaG93SG9tZS5jcmVhdGVOYXYoKTtcclxuc2hvd0hvbWUuY3JlYXRlSGVhZGVyKCk7XHJcbnNob3dIb21lLmNyZWF0ZVNlY3Rpb24oKTtcclxuc2hvd0hvbWUuY3JlYXRlRm9vdGVyKCk7XHJcbmNvbnN0IG5hdkJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ0blwiKSk7XHJcblxyXG5uYXZCdG5zLmZvckVhY2gobmF2ID0+IG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gbmF2QnRuc1swXSkge1xyXG4gICAgICAgIHNob3dIb21lLmNsZWFyKCk7XHJcbiAgICAgICAgc2hvd0hvbWUuY3JlYXRlTmF2KCk7XHJcbiAgICAgICAgc2hvd0hvbWUuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgc2hvd0hvbWUuY3JlYXRlU2VjdGlvbigpO1xyXG4gICAgICAgIHNob3dIb21lLmNyZWF0ZUZvb3RlcigpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gbmF2QnRuc1sxXSkge1xyXG4gICAgICAgIHNob3dNZW51LmNsZWFyKCk7XHJcbiAgICAgICAgc2hvd01lbnUuY3JlYXRlTmF2KCk7XHJcbiAgICAgICAgc2hvd01lbnUuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgc2hvd01lbnUuY3JlYXRlU2VjdGlvbigpO1xyXG4gICAgICAgIHNob3dNZW51LmNyZWF0ZUZvb3RlcigpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gbmF2QnRuc1syXSkge1xyXG4gICAgICAgIHNob3dBYm91dC5jbGVhcigpO1xyXG4gICAgICAgIHNob3dBYm91dC5jcmVhdGVOYXYoKTtcclxuICAgICAgICBzaG93QWJvdXQuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgc2hvd0Fib3V0LmNyZWF0ZVNlY3Rpb24oKTtcclxuICAgICAgICBzaG93QWJvdXQuY3JlYXRlRm9vdGVyKCk7XHJcbiAgICB9XHJcbn0pKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==