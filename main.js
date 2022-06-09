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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-coral: #ec7265;\n}\n\nhtml {\n    margin: 0;\n    border: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: var(--color-coral);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.sidenav {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: var(--color-coral);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nheader {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: var(--color-coral);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tasks-content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\n.task-modal, \n.project-modal {\n    position: absolute;\n    z-index: 1;\n    width: 300px;\n    height: 300px;\n    background-color: blue;\n    left: 300px;\n}\n\n.task-text {\n    display: flex;\n    width: 100%;\n}\n\n.collapse {\n    background-color: #777;\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    border: none;\n    outline: none;\n    font-size: 15px;\n    }\n\n.active, \n.collapse:hover {\n    background-color: #555;\n}\n\n.collapse:after {\n    content: '\\002B';\n    color: white;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\2212\";\n}\n\n.collapse-content {\n    padding: 0 18px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n    background-color: red;\n    display: none;\n}\n\n.delete-task:after {\n    content: \"\\1F5D1\";\n}\n\n.task {\n    display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf;;AAEJ;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oCAAoC;IACpC,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    --color-coral: #ec7265;\n}\n\nhtml {\n    margin: 0;\n    border: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n#content {\n    background-color: var(--color-coral);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.sidenav {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: var(--color-coral);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nheader {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: var(--color-coral);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tasks-content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\n.task-modal, \n.project-modal {\n    position: absolute;\n    z-index: 1;\n    width: 300px;\n    height: 300px;\n    background-color: blue;\n    left: 300px;\n}\n\n.task-text {\n    display: flex;\n    width: 100%;\n}\n\n.collapse {\n    background-color: #777;\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    border: none;\n    outline: none;\n    font-size: 15px;\n    }\n\n.active, \n.collapse:hover {\n    background-color: #555;\n}\n\n.collapse:after {\n    content: '\\002B';\n    color: white;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n.active:after {\n    content: \"\\2212\";\n}\n\n.collapse-content {\n    padding: 0 18px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n    background-color: red;\n    display: none;\n}\n\n.delete-task:after {\n    content: \"\\1F5D1\";\n}\n\n.task {\n    display: flex;\n}\n"],"sourceRoot":""}]);
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
    
    return {name, projectTasks}
}

const Task = (name, dueDate, priority, description, completed = false) => {
 
    return {name, dueDate, priority, description, completed}
}

const toDoList = (() => {
  
    const addTaskToProject = () => {
        let taskName = document.getElementById('title-input').value
        let dueDate = document.getElementById('due-date').value
        let taskPriority = document.querySelector('input[name="priority"]:checked').value
        let taskDescription = document.getElementById('description').value
        let taskProject = document.getElementById('select-project')
        let taskProjectValue = taskProject.options[taskProject.selectedIndex].value
        let newTask = Task(taskName, dueDate, taskPriority, taskDescription)
        let projectIndex = indexOfProject(taskProjectValue)
        projectsList[projectIndex].projectTasks.push(newTask)
        updateStorage()
    }

    const addProjectToList = () => {
        let projectName = document.getElementById('project-name').value
        if(projectName) {
            let newProject = Project(projectName)
            projectsList.push(newProject)
            updateStorage()
            manageDOM.addProjectToSelector(newProject)
        }
    } 

    const indexOfProject = (projectName) => {
        let projectsListNames = []
        for(let i = 0; i < projectsList.length; i++){
            projectsListNames.push(projectsList[i].name)
        }
        let index = projectsListNames.indexOf(projectName)
        return index
    }

    const sortByPriorityLTH = (project) => {
        project.projectTasks.sort((a, b) => {
            let priorityA = a.priority
            let priorityB = b.priority
            return compare(priorityA, priorityB)
        })
    }

    const sortByPriorityHTL = (project) => {
        project.projectTasks.sort((a, b) => {
            let priorityA = a.priority
            let priorityB = b.priority
            return compare(priorityB, priorityA)  
        })
    }

    const sortByDateLTH = (project) => {
        project.projectTasks.sort((a, b) => {
            let dateA = a.dueDate
            let dateB = b.dueDate
            return compare(dateA, dateB) 
        })
    }

    const sortByDateHTL = (project) => {
        project.projectTasks.sort((a, b) => {
            let dateA = a.dueDate
            let dateB = b.dueDate
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

    const deleteTask = (e, i) => {
        let projectName = findCurrentProjectName()
        let index = indexOfProject(projectName)
        projectsList[index].projectTasks.splice(i, 1)
        e.target.parentNode.parentNode.remove()
        updateStorage()
    }

    const deleteProject = () => {
        let project = findCurrentProjectName()
        let index = indexOfProject(project)
        projectsList.splice(index, 1)
        updateStorage()
    }

    const findCurrentProjectName = () => {
        let selector = document.getElementById('projects')
        let projectName = selector.options[selector.selectedIndex].value 
        return projectName
    }

    const checkTask = (i) => {
        let project = findCurrentProjectName()
        let index = indexOfProject(project)
        let currentTask = projectsList[index].projectTasks[i]
        if(currentTask.completed == true) {
            currentTask.completed = false
        } else {
            currentTask.completed = true
        }
        updateStorage()
    }

    const updateStorage = () => {
        localStorage.setItem('projectsList', JSON.stringify(projectsList))
    }

    const deleteCompleted = () => {
        let project = findCurrentProjectName()
        let index = indexOfProject(project)
        let currentProject = projectsList[index]
        let tasksArray = currentProject.projectTasks
        console.log(currentProject)
        for(let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].completed == true){
                tasksArray.splice(i, 1)
                i--
            }
        }
        console.log(currentProject.projectTasks)
        updateStorage()
    }

    return {addTaskToProject, addProjectToList, indexOfProject, sortByPriorityHTL, sortByPriorityLTH, sortTasks, deleteTask, deleteProject, checkTask, deleteCompleted}
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

        let delCompleted = document.getElementById('delete-completed')
        delCompleted.addEventListener('click', () => {
            toDoList.deleteCompleted()
            displayTasksOfProject()
        })
    }

    const setCheckboxListeners = () => {
        let checkBox = document.getElementsByClassName('checkbox')
        for(let i = 0; i < checkBox.length; i++) {
            checkBox[i].addEventListener('click', (e) => {
                toDoList.checkTask(i)
                let parent = e.target.parentNode
                parent.classList.toggle('completed')
                displayTasksOfProject()
            })
        }
    }

    const setDelBtnListeners = () => {
        let delTaskBtn = document.getElementsByClassName('delete-task')
        for(let i = 0; i < delTaskBtn.length; i++) {
            delTaskBtn[i].addEventListener('click', (e) => {
                toDoList.deleteTask(e, i)
                manageDOM.displayTasksOfProject()
            })
        }

        let delProjectBtn = document.getElementById('delete-project')
        delProjectBtn.addEventListener('click', () => {
            toDoList.deleteProject()
            initializeProjectSelector()
            displayTasksOfProject()
        })

    }

    const initializeProjectSelector = () => {
        if(projectsList.length == 0) {
            return
        } else {
            let projectSelector = document.getElementById('projects')
            projectSelector.textContent = ''
            for(let i = 0; i < projectsList.length; i++) {
                let projectOption = document.createElement('option')
                projectSelector.appendChild(projectOption)
                projectOption.textContent = projectsList[i].name
                projectOption.setAttribute('value', projectsList[i].name)
            }
        }
    }

    const addProjectToSelector = (project) => {
        let projectSelector = document.getElementById('projects')
        let newProjectOption = document.createElement('option')
        projectSelector.appendChild(newProjectOption)
        newProjectOption.textContent = project.name
        newProjectOption.setAttribute('value', project.name)
    }

   const addProjectOptions = (node) => {
       node.textContent = ''
       for(let i = 0; i < projectsList.length; i++) {
           let projectOption = document.createElement('option')
           node.appendChild(projectOption)
           projectOption.textContent = projectsList[i].name
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
        generateTaskList(project)
        makeCollapsibleContent()
        setDelBtnListeners()
        setCheckboxListeners()
    } 

    const generateTaskList = (project) => {
        let tasksContent =  document.getElementById('task-list')
        for(let i = 0; i < project.projectTasks.length; i++) {

            let task = document.createElement('div')
            tasksContent.appendChild(task)
            task.classList.add('task')

            let checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')
            task.appendChild(checkBox)
            checkBox.classList.add('checkbox')
            if(project.projectTasks[i].completed == true) {
                checkBox.checked = true
            }
            let taskText = document.createElement('div')
            task.appendChild(taskText)
            taskText.classList.add('task-text')
            taskText.textContent = `${i + 1}. ${project.projectTasks[i].name}, ${project.projectTasks[i].dueDate}, ${project.projectTasks[i].priority}` 

            let collapsibleBtn = document.createElement('button')
            taskText.appendChild(collapsibleBtn)
            collapsibleBtn.setAttribute('type', 'button')
            collapsibleBtn.classList.add('collapse')

            let delBtn = document.createElement('button')
            delBtn.setAttribute('type', 'button')
            delBtn.classList.add('delete-task')
            taskText.appendChild(delBtn)

            let collapsibleContent = document.createElement('div')
            task.appendChild(collapsibleContent)
            collapsibleContent.textContent = project.projectTasks[i].description
            collapsibleContent.classList.add('collapse-content')
        }
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

    return {setEventListeners, addProjectToSelector, initializeProjectSelector, displayTasksOfProject, setDelBtnListeners }
})()


let projectsList
let serializedProjectsList

if(!localStorage.getItem('projectsList')) {
    projectsList = []
} else {
    serializedProjectsList = JSON.parse(localStorage.getItem('projectsList'))
    projectsList = deserializeProjectsList(serializedProjectsList)
}

manageDOM.initializeProjectSelector()
manageDOM.displayTasksOfProject()
manageDOM.setEventListeners()
manageDOM.setDelBtnListeners()

function deserializeProjectsList(string)  {
    let newArray = []
    for(let i = 0; i < string.length; i++) {
        let project = Project(string[i].name)
        project.projectTasks = deserializeTasksList(string[i].projectTasks)
        newArray.push(project)
    }
    return newArray
}

function deserializeTasksList(string) {
    let newArray = []
    for(let i = 0; i < string.length; i++) {
        let task = Task(string[i].name, string[i].dueDate, string[i].priority, string[i].description, string[i].completed)
        newArray.push(task)
    }
    return newArray
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTSxJQUFJLDZCQUE2QixJQUFJLGdDQUFnQyxJQUFJLGlDQUFpQzs7QUFFdEo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb3JhbDogI2VjNzI2NTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MtY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stbW9kYWwsIFxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbi5hY3RpdmUsIFxcbi5jb2xsYXBzZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5jb2xsYXBzZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDAyQic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFjdGl2ZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjIxMlxcXCI7XFxufVxcblxcbi5jb2xsYXBzZS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwxRjVEMVxcXCI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZjs7QUFFSjs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb3JhbDogI2VjNzI2NTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MtY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stbW9kYWwsIFxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbi5hY3RpdmUsIFxcbi5jb2xsYXBzZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5jb2xsYXBzZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDAyQic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFjdGl2ZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjIxMlxcXCI7XFxufVxcblxcbi5jb2xsYXBzZS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwxRjVEMVxcXCI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtjb21wYXJlQXNjLCBmb3JtYXQsIGZyb21Vbml4VGltZSwgc3VifSBmcm9tICdkYXRlLWZucydcblxuY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHByb2plY3RUYXNrcyA9IFtdXG4gICAgXG4gICAgcmV0dXJuIHtuYW1lLCBwcm9qZWN0VGFza3N9XG59XG5cbmNvbnN0IFRhc2sgPSAobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuIFxuICAgIHJldHVybiB7bmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWR9XG59XG5cbmNvbnN0IHRvRG9MaXN0ID0gKCgpID0+IHtcbiAgXG4gICAgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWVcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZVxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZVxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1wcm9qZWN0JylcbiAgICAgICAgbGV0IHRhc2tQcm9qZWN0VmFsdWUgPSB0YXNrUHJvamVjdC5vcHRpb25zW3Rhc2tQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgIGxldCBuZXdUYXNrID0gVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVzY3JpcHRpb24pXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBpbmRleE9mUHJvamVjdCh0YXNrUHJvamVjdFZhbHVlKVxuICAgICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3MucHVzaChuZXdUYXNrKVxuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0VG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWVcbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpXG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICAgICAgICAgIG1hbmFnZURPTS5hZGRQcm9qZWN0VG9TZWxlY3RvcihuZXdQcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGNvbnN0IGluZGV4T2ZQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0c0xpc3ROYW1lcyA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0TmFtZXMucHVzaChwcm9qZWN0c0xpc3RbaV0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0xpc3ROYW1lcy5pbmRleE9mKHByb2plY3ROYW1lKVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0QnlQcmlvcml0eUxUSCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUEgPSBhLnByaW9yaXR5XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlCID0gYi5wcmlvcml0eVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUocHJpb3JpdHlBLCBwcmlvcml0eUIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydEJ5UHJpb3JpdHlIVEwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlBID0gYS5wcmlvcml0eVxuICAgICAgICAgICAgbGV0IHByaW9yaXR5QiA9IGIucHJpb3JpdHlcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlKHByaW9yaXR5QiwgcHJpb3JpdHlBKSAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydEJ5RGF0ZUxUSCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRlQSA9IGEuZHVlRGF0ZVxuICAgICAgICAgICAgbGV0IGRhdGVCID0gYi5kdWVEYXRlXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShkYXRlQSwgZGF0ZUIpIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRCeURhdGVIVEwgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0ZUEgPSBhLmR1ZURhdGVcbiAgICAgICAgICAgIGxldCBkYXRlQiA9IGIuZHVlRGF0ZVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoZGF0ZUIsIGRhdGVBKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBzb3J0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1zZWxlY3RvcicpXG4gICAgICAgIGxldCBzb3J0VmFsdWUgPSBzb3J0U2VsZWN0b3Iub3B0aW9uc1tzb3J0U2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgc3dpdGNoKHNvcnRWYWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgc29ydEJ5RGF0ZUxUSChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBzb3J0QnlEYXRlSFRMKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5TFRIKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5SFRMKHByb2plY3QpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgICAgICBpZihhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH0gXG4gICAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChlLCBpKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGZpbmRDdXJyZW50UHJvamVjdE5hbWUoKVxuICAgICAgICBsZXQgaW5kZXggPSBpbmRleE9mUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdHNMaXN0W2luZGV4XS5wcm9qZWN0VGFza3Muc3BsaWNlKGksIDEpXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKVxuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGZpbmRDdXJyZW50UHJvamVjdE5hbWUoKVxuICAgICAgICBsZXQgaW5kZXggPSBpbmRleE9mUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kQ3VycmVudFByb2plY3ROYW1lID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBzZWxlY3Rvci5vcHRpb25zW3NlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlIFxuICAgICAgICByZXR1cm4gcHJvamVjdE5hbWVcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja1Rhc2sgPSAoaSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGZpbmRDdXJyZW50UHJvamVjdE5hbWUoKVxuICAgICAgICBsZXQgaW5kZXggPSBpbmRleE9mUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBwcm9qZWN0c0xpc3RbaW5kZXhdLnByb2plY3RUYXNrc1tpXVxuICAgICAgICBpZihjdXJyZW50VGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY3VycmVudFRhc2suY29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZmluZEN1cnJlbnRQcm9qZWN0TmFtZSgpXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZQcm9qZWN0KHByb2plY3QpXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzTGlzdFtpbmRleF1cbiAgICAgICAgbGV0IHRhc2tzQXJyYXkgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0VGFza3NcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YXNrc0FycmF5W2ldLmNvbXBsZXRlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIGktLVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnByb2plY3RUYXNrcylcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRUYXNrVG9Qcm9qZWN0LCBhZGRQcm9qZWN0VG9MaXN0LCBpbmRleE9mUHJvamVjdCwgc29ydEJ5UHJpb3JpdHlIVEwsIHNvcnRCeVByaW9yaXR5TFRILCBzb3J0VGFza3MsIGRlbGV0ZVRhc2ssIGRlbGV0ZVByb2plY3QsIGNoZWNrVGFzaywgZGVsZXRlQ29tcGxldGVkfVxufSkoKVxuXG5jb25zdCBtYW5hZ2VET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlOZXdUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGRpc2FibGVBZGRCdXR0b25zKClcblxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKVxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd0YXNrLW1vZGFsJylcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW1vZGFsJylcblxuICAgICAgICBsZXQgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjbG9zZVRhc2tNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXRhc2stbW9kYWwnKVxuICAgICAgICBjbG9zZVRhc2tNb2RhbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VUYXNrTW9kYWwpXG4gICAgICAgIGNsb3NlVGFza01vZGFsLnRleHRDb250ZW50ID0gJ1gnXG5cbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKVxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJylcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZm9ybScpXG5cbiAgICAgICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1pbnB1dCcpXG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXG5cbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtaW5wdXQnKVxuICAgICAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKVxuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG5cbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJylcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgIGR1ZURhdGUucmVxdWlyZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IHByaW9yaXR5RmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZHNldClcbiAgICAgICAgcHJpb3JpdHlGaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1maWVsZHNldCcpXG5cbiAgICAgICAgbGV0IHByaW9yaXR5TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGVnZW5kKVxuICAgICAgICBwcmlvcml0eUxlZ2VuZC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG5cbiAgICAgICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJpb3JpdHlGaWVsZHNldC5hcHBlbmRDaGlsZChwcmlvcml0eURpdilcblxuICAgICAgICBsZXQgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbClcbiAgICAgICAgbG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3ctcHJpb3JpdHknKVxuICAgICAgICBsb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0xvdydcblxuICAgICAgICBsZXQgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KVxuICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvdy1wcmlvcml0eScpXG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpXG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgIGxvd1ByaW9yaXR5LmNoZWNrZWQgPSB0cnVlXG5cbiAgICAgICAgbGV0IG1lZGl1bVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5TGFiZWwpXG4gICAgICAgIG1lZGl1bVByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVkaXVtLXByaW9yaXR5JylcbiAgICAgICAgbWVkaXVtUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG5cbiAgICAgICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSlcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdtZWRpdW0tcHJpb3JpdHknKVxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzInKVxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuXG4gICAgICAgIGxldCBoaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpXG4gICAgICAgIGhpZ2hQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hpZ2gtcHJpb3JpdHknKVxuICAgICAgICBoaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoJ1xuXG4gICAgICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSlcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gtcHJpb3JpdHknKVxuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICczJylcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG5cbiAgICAgICAgbGV0IHNlbGVjdFByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0TGFiZWwpXG4gICAgICAgIHNlbGVjdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QtcHJvamVjdCcpXG4gICAgICAgIHNlbGVjdFByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdTZWxlY3QgUHJvamVjdCdcblxuICAgICAgICBsZXQgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QtcHJvamVjdCcpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdClcbiAgICAgICAgYWRkUHJvamVjdE9wdGlvbnMoc2VsZWN0UHJvamVjdClcbiAgICAgICAgc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdHMnKVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJylcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpXG5cbiAgICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pXG4gICAgICAgIHN1Ym1pdFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtdGFzaycpXG4gICAgICAgIHN1Ym1pdFRhc2tCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU5ld1Byb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZGlzYWJsZUFkZEJ1dHRvbnMoKVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbClcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1tb2RhbCcpXG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1tb2RhbCcpXG5cbiAgICAgICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKVxuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKVxuICAgICAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtZm9ybScpXG4gICAgICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJylcblxuICAgICAgICBsZXQgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjbG9zZVByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXByb2plY3QtbW9kYWwnKVxuICAgICAgICBjbG9zZVByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VQcm9qZWN0TW9kYWwpXG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLnRleHRDb250ZW50ID0gJ1gnXG5cbiAgICAgICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpXG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbClcblxuICAgICAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpXG4gICAgICAgIG5hbWVJbnB1dC5mb2N1cygpXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWVcblxuICAgICAgICBsZXQgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdG4pXG4gICAgICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtcHJvamVjdCcpXG4gICAgICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgICAgIHN1Ym1pdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnXG4gICAgfVxuXG4gICAgY29uc3QgZW1wdHlQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1tb2RhbCcpXG4gICAgICAgIHByb2plY3RNb2RhbC5yZW1vdmUoKVxuICAgICAgICBlbmFibGVBZGRCdXR0b25zKClcbiAgICB9XG5cbiAgICBjb25zdCBlbXB0eVRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW1vZGFsJylcbiAgICAgICAgdGFza01vZGFsLnJlbW92ZSgpXG4gICAgICAgIGVuYWJsZUFkZEJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVBZGRCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXByb2plY3QnKVxuICAgICAgICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRhc2snKVxuICAgICAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICBhZGRUYXNrQnRuLmRpc2FibGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGVuYWJsZUFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctcHJvamVjdCcpXG4gICAgICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdGFzaycpXG4gICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICBhZGRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10YXNrJylcbiAgICAgICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlOZXdUYXNrTW9kYWwoKVxuICAgICAgICAgICAgbGV0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXRhc2stbW9kYWwnKVxuICAgICAgICAgICAgIGNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1wdHlUYXNrTW9kYWwpXG4gICAgICAgICAgICBsZXQgc3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtdGFzaycpXG4gICAgICAgICAgICBzdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpXG4gICAgICAgICAgICAgICAgdG9Eb0xpc3QuYWRkVGFza1RvUHJvamVjdCgpXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgICAgICAgICAgZW1wdHlUYXNrTW9kYWwoKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctcHJvamVjdCcpXG4gICAgICAgIGFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5TmV3UHJvamVjdE1vZGFsKClcbiAgICAgICAgICAgIGxldCBjbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qZWN0LW1vZGFsJylcbiAgICAgICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW1wdHlQcm9qZWN0TW9kYWwpXG4gICAgICAgICAgICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcHJvamVjdCcpXG4gICAgICAgICAgICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxuICAgICAgICAgICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3RUb0xpc3QoKVxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgICAgICAgICAgIGVtcHR5UHJvamVjdE1vZGFsKClcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3NPZlByb2plY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2VsZWN0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBzZWxlY3RQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3NPZlByb2plY3QoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzb3J0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1zZWxlY3RvcicpXG4gICAgICAgIHNvcnRTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkaXNwbGF5VGFza3NPZlByb2plY3QpXG5cbiAgICAgICAgbGV0IGRlbENvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtY29tcGxldGVkJylcbiAgICAgICAgZGVsQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9Eb0xpc3QuZGVsZXRlQ29tcGxldGVkKClcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q2hlY2tib3hMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrYm94JylcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrQm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGVja0JveFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3QuY2hlY2tUYXNrKGkpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJylcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3NPZlByb2plY3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlbEJ0bkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRlbFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtdGFzaycpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWxUYXNrQnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWxUYXNrQnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdC5kZWxldGVUYXNrKGUsIGkpXG4gICAgICAgICAgICAgICAgbWFuYWdlRE9NLmRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKVxuICAgICAgICBkZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9Eb0xpc3QuZGVsZXRlUHJvamVjdCgpXG4gICAgICAgICAgICBpbml0aWFsaXplUHJvamVjdFNlbGVjdG9yKClcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrc09mUHJvamVjdCgpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXplUHJvamVjdFNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICBpZihwcm9qZWN0c0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHNMaXN0W2ldLm5hbWVcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0c0xpc3RbaV0ubmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RUb1NlbGVjdG9yID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGxldCBuZXdQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPcHRpb24pXG4gICAgICAgIG5ld1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgbmV3UHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdC5uYW1lKVxuICAgIH1cblxuICAgY29uc3QgYWRkUHJvamVjdE9wdGlvbnMgPSAobm9kZSkgPT4ge1xuICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pXG4gICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0xpc3RbaV0ubmFtZVxuICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50KVxuICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFza3NPZlByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGlmKHNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZW5hYmxlQWRkQnV0dG9ucygpXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHNlbGVjdG9yLm9wdGlvbnNbc2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWUgXG4gICAgICAgIGxldCBpbmRleCA9IHRvRG9MaXN0LmluZGV4T2ZQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzTGlzdFtpbmRleF1cbiAgICAgICAgdG9Eb0xpc3Quc29ydFRhc2tzKHByb2plY3QpXG4gICAgICAgIGxldCB0YXNrc0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcbiAgICAgICAgdGFza3NDb250ZW50LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0VGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRhc2tzQ29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBnZW5lcmF0ZVRhc2tMaXN0KHByb2plY3QpXG4gICAgICAgIG1ha2VDb2xsYXBzaWJsZUNvbnRlbnQoKVxuICAgICAgICBzZXREZWxCdG5MaXN0ZW5lcnMoKVxuICAgICAgICBzZXRDaGVja2JveExpc3RlbmVycygpXG4gICAgfSBcblxuICAgIGNvbnN0IGdlbmVyYXRlVGFza0xpc3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgdGFza3NDb250ZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0VGFza3MubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGFza3NDb250ZW50LmFwcGVuZENoaWxkKHRhc2spXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0JveClcbiAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICAgICAgICAgIGlmKHByb2plY3QucHJvamVjdFRhc2tzW2ldLmNvbXBsZXRlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KVxuICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0JylcbiAgICAgICAgICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYCR7aSArIDF9LiAke3Byb2plY3QucHJvamVjdFRhc2tzW2ldLm5hbWV9LCAke3Byb2plY3QucHJvamVjdFRhc2tzW2ldLmR1ZURhdGV9LCAke3Byb2plY3QucHJvamVjdFRhc2tzW2ldLnByaW9yaXR5fWAgXG5cbiAgICAgICAgICAgIGxldCBjb2xsYXBzaWJsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZChjb2xsYXBzaWJsZUJ0bilcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAgICAgY29sbGFwc2libGVCdG4uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuXG4gICAgICAgICAgICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpXG4gICAgICAgICAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZChkZWxCdG4pXG5cbiAgICAgICAgICAgIGxldCBjb2xsYXBzaWJsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjb2xsYXBzaWJsZUNvbnRlbnQpXG4gICAgICAgICAgICBjb2xsYXBzaWJsZUNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUYXNrc1tpXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgY29sbGFwc2libGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlLWNvbnRlbnQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbGxhcHNpYmxlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbGxhcHNpYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sbGFwc2UnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29sbGFwc2libGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay10ZXh0JylcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRhc2tUZXh0W2ldLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgIGlmKGNvbGxhcHNpYmxlW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7c2V0RXZlbnRMaXN0ZW5lcnMsIGFkZFByb2plY3RUb1NlbGVjdG9yLCBpbml0aWFsaXplUHJvamVjdFNlbGVjdG9yLCBkaXNwbGF5VGFza3NPZlByb2plY3QsIHNldERlbEJ0bkxpc3RlbmVycyB9XG59KSgpXG5cblxubGV0IHByb2plY3RzTGlzdFxubGV0IHNlcmlhbGl6ZWRQcm9qZWN0c0xpc3RcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSkge1xuICAgIHByb2plY3RzTGlzdCA9IFtdXG59IGVsc2Uge1xuICAgIHNlcmlhbGl6ZWRQcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSlcbiAgICBwcm9qZWN0c0xpc3QgPSBkZXNlcmlhbGl6ZVByb2plY3RzTGlzdChzZXJpYWxpemVkUHJvamVjdHNMaXN0KVxufVxuXG5tYW5hZ2VET00uaW5pdGlhbGl6ZVByb2plY3RTZWxlY3RvcigpXG5tYW5hZ2VET00uZGlzcGxheVRhc2tzT2ZQcm9qZWN0KClcbm1hbmFnZURPTS5zZXRFdmVudExpc3RlbmVycygpXG5tYW5hZ2VET00uc2V0RGVsQnRuTGlzdGVuZXJzKClcblxuZnVuY3Rpb24gZGVzZXJpYWxpemVQcm9qZWN0c0xpc3Qoc3RyaW5nKSAge1xuICAgIGxldCBuZXdBcnJheSA9IFtdXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdCA9IFByb2plY3Qoc3RyaW5nW2ldLm5hbWUpXG4gICAgICAgIHByb2plY3QucHJvamVjdFRhc2tzID0gZGVzZXJpYWxpemVUYXNrc0xpc3Qoc3RyaW5nW2ldLnByb2plY3RUYXNrcylcbiAgICAgICAgbmV3QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXlcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVUYXNrc0xpc3Qoc3RyaW5nKSB7XG4gICAgbGV0IG5ld0FycmF5ID0gW11cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gVGFzayhzdHJpbmdbaV0ubmFtZSwgc3RyaW5nW2ldLmR1ZURhdGUsIHN0cmluZ1tpXS5wcmlvcml0eSwgc3RyaW5nW2ldLmRlc2NyaXB0aW9uLCBzdHJpbmdbaV0uY29tcGxldGVkKVxuICAgICAgICBuZXdBcnJheS5wdXNoKHRhc2spXG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheVxufVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9