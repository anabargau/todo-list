/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-coral: #ec7265;\n}\n\nhtml {\n    margin: 0;\n    border: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: var(--color-coral);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.sidenav {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: var(--color-coral);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nheader {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: var(--color-coral);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tasks-content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\n.task-modal, \n.project-modal {\n    position: absolute;\n    z-index: 1;\n    width: 300px;\n    height: 300px;\n    background-color: blue;\n    left: 300px;\n}\n\n.task-text {\n    display: flex;\n    width: 100%;\n}\n\n.collapse {\n    background-color: #777;\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    border: none;\n    outline: none;\n    font-size: 15px;\n    }\n\n.active, \n.collapse:hover {\n    background-color: #555;\n}\n\n.collapse:after {\n    content: '\\002B';\n    color: white;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\2212\";\n}\n\n.collapse-content {\n    padding: 0 18px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n    background-color: red;\n    display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf;;AAEJ;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oCAAoC;IACpC,qBAAqB;IACrB,aAAa;AACjB","sourcesContent":[":root {\n    --color-coral: #ec7265;\n}\n\nhtml {\n    margin: 0;\n    border: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: var(--color-coral);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.sidenav {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: var(--color-coral);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nheader {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: var(--color-coral);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tasks-content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\n.task-modal, \n.project-modal {\n    position: absolute;\n    z-index: 1;\n    width: 300px;\n    height: 300px;\n    background-color: blue;\n    left: 300px;\n}\n\n.task-text {\n    display: flex;\n    width: 100%;\n}\n\n.collapse {\n    background-color: #777;\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    border: none;\n    outline: none;\n    font-size: 15px;\n    }\n\n.active, \n.collapse:hover {\n    background-color: #555;\n}\n\n.collapse:after {\n    content: '\\002B';\n    color: white;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\2212\";\n}\n\n.collapse-content {\n    padding: 0 18px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n    background-color: red;\n    display: none;\n}\n\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const Project = (name) => {
    let projectTasks = []
    
    const getProjectName = () => {
        return name
    }   

    return {getProjectName, projectTasks}
}

const Task = (name, dueDate, priority, description, project) => {
    const getTaskName = () => {
        return name
    }

    const getTaskDueDate = () => {
        return dueDate
    }

    const getTaskPriority = () => {
        return priority
    }

    const getTaskDescription = () => {
        return description
    }

    return {getTaskName, getTaskDueDate, getTaskPriority, getTaskDescription}
}

const toDoList = (() => {
  
    const addTaskToProject = () => {
        let taskName = document.getElementById('title-input').value
        let dueDate = document.getElementById('due-date').value
        let taskPriority = document.querySelector('input[name="priority"]:checked').value
        let taskDescription = document.getElementById('description').value
        let taskProject = document.getElementById('select-project')
        let taskProjectValue = taskProject.options[taskProject.selectedIndex].value
        let newTask = Task(taskName, dueDate, taskPriority, taskDescription, taskProject)
        let projectIndex = indexOfProject(taskProjectValue)
        projectsList[projectIndex].projectTasks.push(newTask)
    }

    const addProjectToList = () => {
        let projectName = document.getElementById('project-name').value
        if(projectName) {
            let newProject = Project(projectName)
            projectsList.push(newProject)
            manageDOM.addProjectToSelector(newProject)
        }
    } 

    const indexOfProject = (projectName) => {
        let projectsListNames = []
        for(let i = 0; i < projectsList.length; i++){
            projectsListNames.push(projectsList[i].getProjectName())
        }
        let index = projectsListNames.indexOf(projectName)
        return index
    }

    const sortByPriorityLTH = (project) => {
        project.projectTasks.sort((a, b) => {
            let priorityA = a.getTaskPriority()
            let priorityB = b.getTaskPriority()
            return compare(priorityA, priorityB)
        })
    }

    const sortByPriorityHTL = (project) => {
        project.projectTasks.sort((a, b) => {
            let priorityA = a.getTaskPriority()
            let priorityB = b.getTaskPriority()
            return compare(priorityB, priorityA)  
        })
    }

    const sortByDateLTH = (project) => {
        project.projectTasks.sort((a, b) => {
            let dateA = a.getTaskDueDate()
            let dateB = b.getTaskDueDate()
            return compare(dateA, dateB) 
        })
    }

    const sortByDateHTL = (project) => {
        project.projectTasks.sort((a, b) => {
            let dateA = a.getTaskDueDate()
            let dateB = b.getTaskDueDate()
            return compare(dateB, dateA)
        })
    }

    const sortTasks = (project) => {
        let sortSelector = document.getElementById('sort-selector')
        let sortValue = sortSelector.options[sortSelector.selectedIndex].value
        switch(sortValue) {
            case '1':
                sortByDateLTH(project)
                break
            case '2':
                sortByDateHTL(project)
                break
            case '3':
                sortByPriorityLTH(project)
                break
            case '4':
                sortByPriorityHTL(project)
                break
        }
    }

    const compare = (a, b) => {
        if(a < b) {
            return -1
        } 
        if(a > b) {
            return 1
        }
        return 0
    }

    return {addTaskToProject, addProjectToList, indexOfProject, sortByPriorityHTL, sortByPriorityLTH, sortTasks}
})()

const manageDOM = (() => {
    const displayNewTaskModal = () => {
        disableAddButtons()

        let content = document.getElementById('content')

        let modal = document.createElement('div')
        content.appendChild(modal)
        modal.classList.add('task-modal')
        modal.setAttribute('id', 'task-modal')

        let closeTaskModal = document.createElement('button')
        closeTaskModal.setAttribute('id', 'close-task-modal')
        closeTaskModal.setAttribute('type', 'button')
        modal.appendChild(closeTaskModal)
        closeTaskModal.textContent = 'X'

        let form = document.createElement('form')
        modal.appendChild(form)
        form.classList.add('task-form')
        form.setAttribute('onsubmit', 'return false')
        form.setAttribute('id', 'task-form')

        let titleLabel = document.createElement('label')
        form.appendChild(titleLabel)
        titleLabel.setAttribute('for', 'title-input')
        titleLabel.textContent = 'Title'

        let titleInput = document.createElement('input')
        form.appendChild(titleInput)
        titleInput.focus()
        titleInput.setAttribute('type', 'text')
        titleInput.setAttribute('id', 'title-input')
        titleInput.required = true

        let dueDateLabel = document.createElement('label')
        form.appendChild(dueDateLabel)
        dueDateLabel.setAttribute('for', 'due-date')
        dueDateLabel.textContent = 'Due Date'

        let dueDate = document.createElement('input')
        form.appendChild(dueDate)
        dueDate.setAttribute('id', 'due-date')
        dueDate.setAttribute('type', 'date')
        dueDate.required = true

        let priorityFieldset = document.createElement('fieldset')
        form.appendChild(priorityFieldset)
        priorityFieldset.classList.add('priority-fieldset')

        let priorityLegend = document.createElement('label')
        priorityFieldset.appendChild(priorityLegend)
        priorityLegend.textContent = 'Priority:'

        let priorityDiv = document.createElement('div')
        priorityFieldset.appendChild(priorityDiv)

        let lowPriorityLabel = document.createElement('label')
        priorityDiv.appendChild(lowPriorityLabel)
        lowPriorityLabel.setAttribute('for', 'low-priority')
        lowPriorityLabel.textContent = 'Low'

        let lowPriority = document.createElement('input')
        priorityDiv.appendChild(lowPriority)
        lowPriority.setAttribute('type', 'radio')
        lowPriority.setAttribute('id', 'low-priority')
        lowPriority.setAttribute('value', '1')
        lowPriority.setAttribute('name', 'priority')
        lowPriority.checked = true

        let mediumPriorityLabel = document.createElement('label')
        priorityDiv.appendChild(mediumPriorityLabel)
        mediumPriorityLabel.setAttribute('for', 'medium-priority')
        mediumPriorityLabel.textContent = 'Medium'

        let mediumPriority = document.createElement('input')
        priorityDiv.appendChild(mediumPriority)
        mediumPriority.setAttribute('type', 'radio')
        mediumPriority.setAttribute('id', 'medium-priority')
        mediumPriority.setAttribute('value', '2')
        mediumPriority.setAttribute('name', 'priority')

        let highPriorityLabel = document.createElement('label')
        priorityDiv.appendChild(highPriorityLabel)
        highPriorityLabel.setAttribute('for', 'high-priority')
        highPriorityLabel.textContent = 'High'

        let highPriority = document.createElement('input')
        priorityDiv.appendChild(highPriority)
        highPriority.setAttribute('type', 'radio')
        highPriority.setAttribute('id', 'high-priority')
        highPriority.setAttribute('value', '3')
        highPriority.setAttribute('name', 'priority')

        let selectProjectLabel = document.createElement('label')
        form.appendChild(selectProjectLabel)
        selectProjectLabel.setAttribute('for', 'select-project')
        selectProjectLabel.textContent = 'Select Project'

        let selectProject = document.createElement('select')
        selectProject.setAttribute('id', 'select-project')
        form.appendChild(selectProject)
        addProjectOptions(selectProject)
        selectProject.setAttribute('name', 'projects')

        let descriptionLabel = document.createElement('label')
        descriptionLabel.setAttribute('for', 'description')
        descriptionLabel.textContent = 'Description'
        form.appendChild(descriptionLabel)

        let description = document.createElement('textarea')
        form.appendChild(description)
        description.setAttribute('id', 'description')

        let submitTaskBtn = document.createElement('button')
        form.appendChild(submitTaskBtn)
        submitTaskBtn.setAttribute('id', 'submit-task')
        submitTaskBtn.setAttribute('type', 'button')
        submitTaskBtn.textContent = 'Create Task'
    }

    const displayNewProjectModal = () => {
        disableAddButtons()
        
        let content = document.getElementById('content')

        let modal = document.createElement('div')
        content.appendChild(modal)
        modal.classList.add('project-modal')
        modal.setAttribute('id', 'project-modal')

        let projectForm = document.createElement('form')
        modal.appendChild(projectForm)
        projectForm.classList.add('project-form')
        projectForm.setAttribute('id', 'project-form')
        projectForm.setAttribute('onsubmit', 'return false')

        let closeProjectModal = document.createElement('button')
        closeProjectModal.setAttribute('id', 'close-project-modal')
        closeProjectModal.setAttribute('type', 'button')
        projectForm.appendChild(closeProjectModal)
        closeProjectModal.textContent = 'X'

        let nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'project-name')
        nameLabel.textContent = 'Project Name'
        projectForm.appendChild(nameLabel)

        let nameInput = document.createElement('input')
        projectForm.appendChild(nameInput)
        nameInput.focus()
        nameInput.setAttribute('id', 'project-name')
        nameInput.setAttribute('type', 'text')
        nameInput.required = true

        let submitProjectBtn = document.createElement('button')
        projectForm.appendChild(submitProjectBtn)
        submitProjectBtn.setAttribute('id', 'submit-project')
        submitProjectBtn.setAttribute('type', 'button')
        submitProjectBtn.textContent = 'Create Project'
    }

    const emptyProjectModal = () => {
        let projectModal = document.getElementById('project-modal')
        projectModal.remove()
        enableAddButtons()
    }

    const emptyTaskModal = () => {
        let taskModal = document.getElementById('task-modal')
        taskModal.remove()
        enableAddButtons()
    }

    const disableAddButtons = () => {
        let addProjectBtn = document.getElementById('add-new-project')
        let addTaskBtn = document.getElementById('add-new-task')
        addProjectBtn.disabled = true
        addTaskBtn.disabled = true
    }

    const enableAddButtons = () => {
        let addProjectBtn = document.getElementById('add-new-project')
        let addTaskBtn = document.getElementById('add-new-task')
        addProjectBtn.disabled = false
        addTaskBtn.disabled = false
    }

    const setEventListeners = () => {
        let addNewTaskBtn = document.getElementById('add-new-task')
        addNewTaskBtn.addEventListener('click', () => {
            displayNewTaskModal()
            let closeTaskModal = document.getElementById('close-task-modal')
             closeTaskModal.addEventListener('click', emptyTaskModal)
            let submitTask = document.getElementById('submit-task')
            submitTask.addEventListener('click', () => {
                let form = document.getElementById('task-form')
                toDoList.addTaskToProject()
                form.reset()
                emptyTaskModal()
                displayTasksOfProject()
            })
        })

        let addNewProjectBtn = document.getElementById('add-new-project')
        addNewProjectBtn.addEventListener('click', () => {
            displayNewProjectModal()
            let closeProjectModal = document.getElementById('close-project-modal')
            closeProjectModal.addEventListener('click', emptyProjectModal)
            let submitProject = document.getElementById('submit-project')
            submitProject.addEventListener('click', () => { 
                let form = document.getElementById('project-form')
                toDoList.addProjectToList()
                form.reset()
                emptyProjectModal()
                displayTasksOfProject()
            })
        })

        let selectProjects = document.getElementById('projects')
        selectProjects.addEventListener('change', () => {
            displayTasksOfProject()
        })

        let sortSelector = document.getElementById('sort-selector')
        sortSelector.addEventListener('change', displayTasksOfProject)
    }

    const addProjectToSelector = (project) => {
        let projectSelector = document.getElementById('projects')
        let newProjectOption = document.createElement('option')
        projectSelector.appendChild(newProjectOption)
        newProjectOption.textContent = project.getProjectName()
        newProjectOption.setAttribute('value', project.getProjectName())
    }

   const addProjectOptions = (node) => {
       node.textContent = ''
       for(let i = 0; i < projectsList.length; i++) {
           let projectOption = document.createElement('option')
           node.appendChild(projectOption)
           projectOption.textContent = projectsList[i].getProjectName()
           projectOption.setAttribute('value', projectOption.textContent)
       }
    }

    const displayTasksOfProject = () => {
        let selector = document.getElementById('projects')
        if(selector.options.length == 0){
            return
        }
        enableAddButtons()
        let projectName = selector.options[selector.selectedIndex].value 
        let index = toDoList.indexOfProject(projectName)
        let project = projectsList[index]
        toDoList.sortTasks(project)
        let tasksContent = document.getElementById('task-list')
        tasksContent.textContent = ''
        if(project.projectTasks.length == 0) {
            tasksContent.textContent = ''
            return
        }
        for(let i = 0; i < project.projectTasks.length; i++) {
            let task = document.createElement('div')
            tasksContent.appendChild(task)
            task.classList.add('task')
            let taskText = document.createElement('div')
            task.appendChild(taskText)
            taskText.classList.add('task-text')
            taskText.textContent = `${i + 1}. ${project.projectTasks[i].getTaskName()}, ${project.projectTasks[i].getTaskDueDate()}, ${project.projectTasks[i].getTaskPriority()}` 
            let collapsibleBtn = document.createElement('button')
            taskText.appendChild(collapsibleBtn)
            collapsibleBtn.setAttribute('type', 'button')
            collapsibleBtn.classList.add('collapse')
            let collapsibleContent = document.createElement('div')
            task.appendChild(collapsibleContent)
            collapsibleContent.textContent = project.projectTasks[i].getTaskDescription()
            collapsibleContent.classList.add('collapse-content')
        }
        makeCollapsibleContent()
    } 

    const makeCollapsibleContent = () => {
        let collapsible = document.getElementsByClassName('collapse')
        for(let i = 0; i < collapsible.length; i++) {
            collapsible[i].addEventListener('click', () => {
                collapsible[i].classList.toggle('active')
                let taskText = document.getElementsByClassName('task-text')
                let content = taskText[i].nextElementSibling
                if(collapsible[i].classList.contains('active')) {
                    content.style.display = 'block'
                } else {
                    content.style.display = 'none'
                }
            })
        }

    }

    return {setEventListeners, addProjectToSelector}
})()

manageDOM.setEventListeners()
let projectsList = []
window.addEventListener('open', () => {
    if(projectsList.length == 0) {
        let addTaskBtn = document.getElementById('add-new-task')
        addTaskBtn.disabled = tru
    }
    manageDOM.displayTasksOfProject
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix5QkFBeUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTSxJQUFJLHNDQUFzQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQztBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb3JhbDogI2VjNzI2NTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MtY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stbW9kYWwsIFxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbi5hY3RpdmUsIFxcbi5jb2xsYXBzZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5jb2xsYXBzZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDAyQic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFjdGl2ZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjIxMlxcXCI7XFxufVxcblxcbi5jb2xsYXBzZS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZjs7QUFFSjs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWNvcmFsOiAjZWM3MjY1O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZW5hdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1tb2RhbCwgXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgbGVmdDogMzAwcHg7XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbGxhcHNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuLmFjdGl2ZSwgXFxuLmNvbGxhcHNlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuLmNvbGxhcHNlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMDJCJztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uYWN0aXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyMjEyXFxcIjtcXG59XFxuXFxuLmNvbGxhcHNlLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge2NvbXBhcmVBc2MsIGZvcm1hdCwgZnJvbVVuaXhUaW1lLCBzdWJ9IGZyb20gJ2RhdGUtZm5zJ1xuXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdFRhc2tzID0gW11cbiAgICBcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9ICAgXG5cbiAgICByZXR1cm4ge2dldFByb2plY3ROYW1lLCBwcm9qZWN0VGFza3N9XG59XG5cbmNvbnN0IFRhc2sgPSAobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZ2V0VGFza05hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0R1ZURhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkdWVEYXRlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza1ByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VGFza05hbWUsIGdldFRhc2tEdWVEYXRlLCBnZXRUYXNrUHJpb3JpdHksIGdldFRhc2tEZXNjcmlwdGlvbn1cbn1cblxuY29uc3QgdG9Eb0xpc3QgPSAoKCkgPT4ge1xuICBcbiAgICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlXG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgICAgICBsZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXByb2plY3QnKVxuICAgICAgICBsZXQgdGFza1Byb2plY3RWYWx1ZSA9IHRhc2tQcm9qZWN0Lm9wdGlvbnNbdGFza1Byb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRhc2tOYW1lLCBkdWVEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tEZXNjcmlwdGlvbiwgdGFza1Byb2plY3QpXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBpbmRleE9mUHJvamVjdCh0YXNrUHJvamVjdFZhbHVlKVxuICAgICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RUb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZVxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdClcbiAgICAgICAgICAgIG1hbmFnZURPTS5hZGRQcm9qZWN0VG9TZWxlY3RvcihuZXdQcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGNvbnN0IGluZGV4T2ZQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0c0xpc3ROYW1lcyA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0TmFtZXMucHVzaChwcm9qZWN0c0xpc3RbaV0uZ2V0UHJvamVjdE5hbWUoKSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0xpc3ROYW1lcy5pbmRleE9mKHByb2plY3ROYW1lKVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0QnlQcmlvcml0eUxUSCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUEgPSBhLmdldFRhc2tQcmlvcml0eSgpXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlCID0gYi5nZXRUYXNrUHJpb3JpdHkoKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUocHJpb3JpdHlBLCBwcmlvcml0eUIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydEJ5UHJpb3JpdHlIVEwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlBID0gYS5nZXRUYXNrUHJpb3JpdHkoKVxuICAgICAgICAgICAgbGV0IHByaW9yaXR5QiA9IGIuZ2V0VGFza1ByaW9yaXR5KClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlKHByaW9yaXR5QiwgcHJpb3JpdHlBKSAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydEJ5RGF0ZUxUSCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRlQSA9IGEuZ2V0VGFza0R1ZURhdGUoKVxuICAgICAgICAgICAgbGV0IGRhdGVCID0gYi5nZXRUYXNrRHVlRGF0ZSgpXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShkYXRlQSwgZGF0ZUIpIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRCeURhdGVIVEwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0ZUEgPSBhLmdldFRhc2tEdWVEYXRlKClcbiAgICAgICAgICAgIGxldCBkYXRlQiA9IGIuZ2V0VGFza0R1ZURhdGUoKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoZGF0ZUIsIGRhdGVBKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBzb3J0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1zZWxlY3RvcicpXG4gICAgICAgIGxldCBzb3J0VmFsdWUgPSBzb3J0U2VsZWN0b3Iub3B0aW9uc1tzb3J0U2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgc3dpdGNoKHNvcnRWYWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgc29ydEJ5RGF0ZUxUSChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBzb3J0QnlEYXRlSFRMKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5TFRIKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5SFRMKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgICAgICBpZihhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH0gXG4gICAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRUYXNrVG9Qcm9qZWN0LCBhZGRQcm9qZWN0VG9MaXN0LCBpbmRleE9mUHJvamVjdCwgc29ydEJ5UHJpb3JpdHlIVEwsIHNvcnRCeVByaW9yaXR5TFRILCBzb3J0VGFza3N9XG59KSgpXG5cbmNvbnN0IG1hbmFnZURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheU5ld1Rhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZGlzYWJsZUFkZEJ1dHRvbnMoKVxuXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwpXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbW9kYWwnKVxuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbW9kYWwnKVxuXG4gICAgICAgIGxldCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNsb3NlVGFza01vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtdGFzay1tb2RhbCcpXG4gICAgICAgIGNsb3NlVGFza01vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZVRhc2tNb2RhbClcbiAgICAgICAgY2xvc2VUYXNrTW9kYWwudGV4dENvbnRlbnQgPSAnWCdcblxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKVxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1mb3JtJylcblxuICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlLWlucHV0JylcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSdcblxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuICAgICAgICB0aXRsZUlucHV0LmZvY3VzKClcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1pbnB1dCcpXG4gICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG4gICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpXG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcblxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlLWRhdGUnKVxuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICAgICAgZHVlRGF0ZS5yZXF1aXJlZCA9IHRydWVcblxuICAgICAgICBsZXQgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUZpZWxkc2V0KVxuICAgICAgICBwcmlvcml0eUZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWZpZWxkc2V0JylcblxuICAgICAgICBsZXQgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMZWdlbmQpXG4gICAgICAgIHByaW9yaXR5TGVnZW5kLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OidcblxuICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuXG4gICAgICAgIGxldCBsb3dQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUxhYmVsKVxuICAgICAgICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvdy1wcmlvcml0eScpXG4gICAgICAgIGxvd1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnTG93J1xuXG4gICAgICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpXG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG93LXByaW9yaXR5JylcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJylcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgICAgbG93UHJpb3JpdHkuY2hlY2tlZCA9IHRydWVcblxuICAgICAgICBsZXQgbWVkaXVtUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlMYWJlbClcbiAgICAgICAgbWVkaXVtUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZWRpdW0tcHJpb3JpdHknKVxuICAgICAgICBtZWRpdW1Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ01lZGl1bSdcblxuICAgICAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KVxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lZGl1bS1wcmlvcml0eScpXG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMicpXG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG5cbiAgICAgICAgbGV0IGhpZ2hQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlMYWJlbClcbiAgICAgICAgaGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnaGlnaC1wcmlvcml0eScpXG4gICAgICAgIGhpZ2hQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0hpZ2gnXG5cbiAgICAgICAgbGV0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KVxuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlnaC1wcmlvcml0eScpXG4gICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzMnKVxuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcblxuICAgICAgICBsZXQgc2VsZWN0UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RMYWJlbClcbiAgICAgICAgc2VsZWN0UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgc2VsZWN0UHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBQcm9qZWN0J1xuXG4gICAgICAgIGxldCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KVxuICAgICAgICBhZGRQcm9qZWN0T3B0aW9ucyhzZWxlY3RQcm9qZWN0KVxuICAgICAgICBzZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0cycpXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKVxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJylcblxuICAgICAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bilcbiAgICAgICAgc3VibWl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC10YXNrJylcbiAgICAgICAgc3VibWl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzaydcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TmV3UHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgICAgICBkaXNhYmxlQWRkQnV0dG9ucygpXG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKVxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW1vZGFsJylcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW1vZGFsJylcblxuICAgICAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpXG4gICAgICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1mb3JtJylcbiAgICAgICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcsICdyZXR1cm4gZmFsc2UnKVxuXG4gICAgICAgIGxldCBjbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtcHJvamVjdC1tb2RhbCcpXG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjbG9zZVByb2plY3RNb2RhbClcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwudGV4dENvbnRlbnQgPSAnWCdcblxuICAgICAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lJylcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKVxuXG4gICAgICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dClcbiAgICAgICAgbmFtZUlucHV0LmZvY3VzKClcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lJylcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgICAgIGxldCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ0bilcbiAgICAgICAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1wcm9qZWN0JylcbiAgICAgICAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgc3VibWl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCdcbiAgICB9XG5cbiAgICBjb25zdCBlbXB0eVByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJylcbiAgICAgICAgcHJvamVjdE1vZGFsLnJlbW92ZSgpXG4gICAgICAgIGVuYWJsZUFkZEJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGNvbnN0IGVtcHR5VGFza01vZGFsID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbW9kYWwnKVxuICAgICAgICB0YXNrTW9kYWwucmVtb3ZlKClcbiAgICAgICAgZW5hYmxlQWRkQnV0dG9ucygpXG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZUFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctcHJvamVjdCcpXG4gICAgICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdGFzaycpXG4gICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgZW5hYmxlQWRkQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy1wcm9qZWN0JylcbiAgICAgICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10YXNrJylcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRhc2snKVxuICAgICAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheU5ld1Rhc2tNb2RhbCgpXG4gICAgICAgICAgICBsZXQgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzay1tb2RhbCcpXG4gICAgICAgICAgICAgY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbXB0eVRhc2tNb2RhbClcbiAgICAgICAgICAgIGxldCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJylcbiAgICAgICAgICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJylcbiAgICAgICAgICAgICAgICB0b0RvTGlzdC5hZGRUYXNrVG9Qcm9qZWN0KClcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KClcbiAgICAgICAgICAgICAgICBlbXB0eVRhc2tNb2RhbCgpXG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzT2ZQcm9qZWN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy1wcm9qZWN0JylcbiAgICAgICAgYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0TW9kYWwoKVxuICAgICAgICAgICAgbGV0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QtbW9kYWwnKVxuICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbXB0eVByb2plY3RNb2RhbClcbiAgICAgICAgICAgIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1wcm9qZWN0JylcbiAgICAgICAgICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG4gICAgICAgICAgICAgICAgdG9Eb0xpc3QuYWRkUHJvamVjdFRvTGlzdCgpXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgICAgICAgICAgZW1wdHlQcm9qZWN0TW9kYWwoKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZWxlY3RQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIHNlbGVjdFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHNvcnRTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LXNlbGVjdG9yJylcbiAgICAgICAgc29ydFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlUYXNrc09mUHJvamVjdClcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0VG9TZWxlY3RvciA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBsZXQgbmV3UHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3B0aW9uKVxuICAgICAgICBuZXdQcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpXG4gICAgICAgIG5ld1Byb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSlcbiAgICB9XG5cbiAgIGNvbnN0IGFkZFByb2plY3RPcHRpb25zID0gKG5vZGUpID0+IHtcbiAgICAgICBub2RlLnRleHRDb250ZW50ID0gJydcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKVxuICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHNMaXN0W2ldLmdldFByb2plY3ROYW1lKClcbiAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudClcbiAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRhc2tzT2ZQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBpZihzZWxlY3Rvci5vcHRpb25zLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVuYWJsZUFkZEJ1dHRvbnMoKVxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBzZWxlY3Rvci5vcHRpb25zW3NlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlIFxuICAgICAgICBsZXQgaW5kZXggPSB0b0RvTGlzdC5pbmRleE9mUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c0xpc3RbaW5kZXhdXG4gICAgICAgIHRvRG9MaXN0LnNvcnRUYXNrcyhwcm9qZWN0KVxuICAgICAgICBsZXQgdGFza3NDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpXG4gICAgICAgIHRhc2tzQ29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGlmKHByb2plY3QucHJvamVjdFRhc2tzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0YXNrc0NvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QucHJvamVjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0YXNrc0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgICAgICAgICBsZXQgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dClcbiAgICAgICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpXG4gICAgICAgICAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IGAke2kgKyAxfS4gJHtwcm9qZWN0LnByb2plY3RUYXNrc1tpXS5nZXRUYXNrTmFtZSgpfSwgJHtwcm9qZWN0LnByb2plY3RUYXNrc1tpXS5nZXRUYXNrRHVlRGF0ZSgpfSwgJHtwcm9qZWN0LnByb2plY3RUYXNrc1tpXS5nZXRUYXNrUHJpb3JpdHkoKX1gIFxuICAgICAgICAgICAgbGV0IGNvbGxhcHNpYmxlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHRhc2tUZXh0LmFwcGVuZENoaWxkKGNvbGxhcHNpYmxlQnRuKVxuICAgICAgICAgICAgY29sbGFwc2libGVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgICAgICBjb2xsYXBzaWJsZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgICAgICAgICBsZXQgY29sbGFwc2libGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY29sbGFwc2libGVDb250ZW50KVxuICAgICAgICAgICAgY29sbGFwc2libGVDb250ZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGFza3NbaV0uZ2V0VGFza0Rlc2NyaXB0aW9uKClcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZS1jb250ZW50JylcbiAgICAgICAgfVxuICAgICAgICBtYWtlQ29sbGFwc2libGVDb250ZW50KClcbiAgICB9IFxuXG4gICAgY29uc3QgbWFrZUNvbGxhcHNpYmxlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbGxhcHNpYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sbGFwc2UnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29sbGFwc2libGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay10ZXh0JylcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRhc2tUZXh0W2ldLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgIGlmKGNvbGxhcHNpYmxlW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7c2V0RXZlbnRMaXN0ZW5lcnMsIGFkZFByb2plY3RUb1NlbGVjdG9yfVxufSkoKVxuXG5tYW5hZ2VET00uc2V0RXZlbnRMaXN0ZW5lcnMoKVxubGV0IHByb2plY3RzTGlzdCA9IFtdXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICBpZihwcm9qZWN0c0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10YXNrJylcbiAgICAgICAgYWRkVGFza0J0bi5kaXNhYmxlZCA9IHRydVxuICAgIH1cbiAgICBtYW5hZ2VET00uZGlzcGxheVRhc2tzT2ZQcm9qZWN0XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=