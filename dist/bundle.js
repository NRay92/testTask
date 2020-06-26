/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/postcss-loader/src??ref--4-3!./node_modules/sass-loader/dist/cjs.js??ref--4-4!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/postcss-loader/src??ref--4-3!./node_modules/sass-loader/dist/cjs.js??ref--4-4");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_jquery_easytabs_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery.easytabs.min */ \"./src/js/jquery.easytabs.min.js\");\n/* harmony import */ var _js_jquery_easytabs_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_easytabs_min__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/script */ \"./src/js/script.js\");\n/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/jquery.easytabs.min.js":
/*!***************************************!*\
  !*** ./src/js/jquery.easytabs.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * jQuery EasyTabs plugin 3.2.0\n *\n * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)\n *\n * Dual licensed under the MIT and GPL licenses:\n *   http://www.opensource.org/licenses/mit-license.php\n *   http://www.gnu.org/licenses/gpl.html\n *\n * Date: Thu May 09 17:30:00 2013 -0500\n */\n(function(a){a.easytabs=function(j,e){var f=this,q=a(j),i={animate:true,panelActiveClass:\"active\",tabActiveClass:\"active\",defaultTab:\"li:first-child\",animationSpeed:\"normal\",tabs:\"> ul > li\",updateHash:true,cycle:false,collapsible:false,collapsedClass:\"collapsed\",collapsedByDefault:true,uiTabs:false,transitionIn:\"fadeIn\",transitionOut:\"fadeOut\",transitionInEasing:\"swing\",transitionOutEasing:\"swing\",transitionCollapse:\"slideUp\",transitionUncollapse:\"slideDown\",transitionCollapseEasing:\"swing\",transitionUncollapseEasing:\"swing\",containerClass:\"\",tabsClass:\"\",tabClass:\"\",panelClass:\"\",cache:true,event:\"click\",panelContext:q},h,l,v,m,d,t={fast:200,normal:400,slow:600},r;f.init=function(){f.settings=r=a.extend({},i,e);r.bind_str=r.event+\".easytabs\";if(r.uiTabs){r.tabActiveClass=\"ui-tabs-selected\";r.containerClass=\"ui-tabs ui-widget ui-widget-content ui-corner-all\";r.tabsClass=\"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\";r.tabClass=\"ui-state-default ui-corner-top\";r.panelClass=\"ui-tabs-panel ui-widget-content ui-corner-bottom\"}if(r.collapsible&&e.defaultTab!==undefined&&e.collpasedByDefault===undefined){r.collapsedByDefault=false}if(typeof(r.animationSpeed)===\"string\"){r.animationSpeed=t[r.animationSpeed]}a(\"a.anchor\").remove().prependTo(\"body\");q.data(\"easytabs\",{});f.setTransitions();f.getTabs();b();g();w();n();c();q.attr(\"data-easytabs\",true)};f.setTransitions=function(){v=(r.animate)?{show:r.transitionIn,hide:r.transitionOut,speed:r.animationSpeed,collapse:r.transitionCollapse,uncollapse:r.transitionUncollapse,halfSpeed:r.animationSpeed/2}:{show:\"show\",hide:\"hide\",speed:0,collapse:\"hide\",uncollapse:\"show\",halfSpeed:0}};f.getTabs=function(){var x;f.tabs=q.find(r.tabs),f.panels=a(),f.tabs.each(function(){var A=a(this),z=A.children(\"a\"),y=A.children(\"a\").data(\"target\");A.data(\"easytabs\",{});if(y!==undefined&&y!==null){A.data(\"easytabs\").ajax=z.attr(\"href\")}else{y=z.attr(\"href\")}y=y.match(/#([^\\?]+)/)[1];x=r.panelContext.find(\"#\"+y);if(x.length){x.data(\"easytabs\",{position:x.css(\"position\"),visibility:x.css(\"visibility\")});x.not(r.panelActiveClass).hide();f.panels=f.panels.add(x);A.data(\"easytabs\").panel=x}else{f.tabs=f.tabs.not(A);if(\"console\" in window){console.warn(\"Warning: tab without matching panel for selector '#\"+y+\"' removed from set\")}}})};f.selectTab=function(x,C){var y=window.location,B=y.hash.match(/^[^\\?]*/)[0],z=x.parent().data(\"easytabs\").panel,A=x.parent().data(\"easytabs\").ajax;if(r.collapsible&&!d&&(x.hasClass(r.tabActiveClass)||x.hasClass(r.collapsedClass))){f.toggleTabCollapse(x,z,A,C)}else{if(!x.hasClass(r.tabActiveClass)||!z.hasClass(r.panelActiveClass)){o(x,z,A,C)}else{if(!r.cache){o(x,z,A,C)}}}};f.toggleTabCollapse=function(x,y,z,A){f.panels.stop(true,true);if(u(q,\"easytabs:before\",[x,y,r])){f.tabs.filter(\".\"+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);if(x.hasClass(r.collapsedClass)){if(z&&(!r.cache||!x.parent().data(\"easytabs\").cached)){q.trigger(\"easytabs:ajax:beforeSend\",[x,y]);y.load(z,function(C,B,D){x.parent().data(\"easytabs\").cached=true;q.trigger(\"easytabs:ajax:complete\",[x,y,C,B,D])})}x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);y.addClass(r.panelActiveClass)[v.uncollapse](v.speed,r.transitionUncollapseEasing,function(){q.trigger(\"easytabs:midTransition\",[x,y,r]);if(typeof A==\"function\"){A()}})}else{x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);y.removeClass(r.panelActiveClass)[v.collapse](v.speed,r.transitionCollapseEasing,function(){q.trigger(\"easytabs:midTransition\",[x,y,r]);if(typeof A==\"function\"){A()}})}}};f.matchTab=function(x){return f.tabs.find(\"[href='\"+x+\"'],[data-target='\"+x+\"']\").first()};f.matchInPanel=function(x){return(x&&f.validId(x)?f.panels.filter(\":has(\"+x+\")\").first():[])};f.validId=function(x){return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\\-_:\\.].$/)};f.selectTabFromHashChange=function(){var y=window.location.hash.match(/^[^\\?]*/)[0],x=f.matchTab(y),z;if(r.updateHash){if(x.length){d=true;f.selectTab(x)}else{z=f.matchInPanel(y);if(z.length){y=\"#\"+z.attr(\"id\");x=f.matchTab(y);d=true;f.selectTab(x)}else{if(!h.hasClass(r.tabActiveClass)&&!r.cycle){if(y===\"\"||f.matchTab(m).length||q.closest(y).length){d=true;f.selectTab(l)}}}}}};f.cycleTabs=function(x){if(r.cycle){x=x%f.tabs.length;$tab=a(f.tabs[x]).children(\"a\").first();d=true;f.selectTab($tab,function(){setTimeout(function(){f.cycleTabs(x+1)},r.cycle)})}};f.publicMethods={select:function(x){var y;if((y=f.tabs.filter(x)).length===0){if((y=f.tabs.find(\"a[href='\"+x+\"']\")).length===0){if((y=f.tabs.find(\"a\"+x)).length===0){if((y=f.tabs.find(\"[data-target='\"+x+\"']\")).length===0){if((y=f.tabs.find(\"a[href$='\"+x+\"']\")).length===0){a.error(\"Tab '\"+x+\"' does not exist in tab set\")}}}}}else{y=y.children(\"a\").first()}f.selectTab(y)}};var u=function(A,x,z){var y=a.Event(x);A.trigger(y,z);return y.result!==false};var b=function(){q.addClass(r.containerClass);f.tabs.parent().addClass(r.tabsClass);f.tabs.addClass(r.tabClass);f.panels.addClass(r.panelClass)};var g=function(){var y=window.location.hash.match(/^[^\\?]*/)[0],x=f.matchTab(y).parent(),z;if(x.length===1){h=x;r.cycle=false}else{z=f.matchInPanel(y);if(z.length){y=\"#\"+z.attr(\"id\");h=f.matchTab(y).parent()}else{h=f.tabs.parent().find(r.defaultTab);if(h.length===0){a.error(\"The specified default tab ('\"+r.defaultTab+\"') could not be found in the tab set ('\"+r.tabs+\"') out of \"+f.tabs.length+\" tabs.\")}}}l=h.children(\"a\").first();p(x)};var p=function(z){var y,x;if(r.collapsible&&z.length===0&&r.collapsedByDefault){h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)}else{y=a(h.data(\"easytabs\").panel);x=h.data(\"easytabs\").ajax;if(x&&(!r.cache||!h.data(\"easytabs\").cached)){q.trigger(\"easytabs:ajax:beforeSend\",[l,y]);y.load(x,function(B,A,C){h.data(\"easytabs\").cached=true;q.trigger(\"easytabs:ajax:complete\",[l,y,B,A,C])})}h.data(\"easytabs\").panel.show().addClass(r.panelActiveClass);h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)}q.trigger(\"easytabs:initialised\",[l,y])};var w=function(){f.tabs.children(\"a\").bind(r.bind_str,function(x){r.cycle=false;d=false;f.selectTab(a(this));x.preventDefault?x.preventDefault():x.returnValue=false})};var o=function(z,D,E,H){f.panels.stop(true,true);if(u(q,\"easytabs:before\",[z,D,r])){var A=f.panels.filter(\":visible\"),y=D.parent(),F,x,C,G,B=window.location.hash.match(/^[^\\?]*/)[0];if(r.animate){F=s(D);x=A.length?k(A):0;C=F-x}m=B;G=function(){q.trigger(\"easytabs:midTransition\",[z,D,r]);if(r.animate&&r.transitionIn==\"fadeIn\"){if(C<0){y.animate({height:y.height()+C},v.halfSpeed).css({\"min-height\":\"\"})}}if(r.updateHash&&!d){window.location.hash=\"#\"+D.attr(\"id\")}else{d=false}D[v.show](v.speed,r.transitionInEasing,function(){y.css({height:\"\",\"min-height\":\"\"});q.trigger(\"easytabs:after\",[z,D,r]);if(typeof H==\"function\"){H()}})};if(E&&(!r.cache||!z.parent().data(\"easytabs\").cached)){q.trigger(\"easytabs:ajax:beforeSend\",[z,D]);D.load(E,function(J,I,K){z.parent().data(\"easytabs\").cached=true;q.trigger(\"easytabs:ajax:complete\",[z,D,J,I,K])})}if(r.animate&&r.transitionOut==\"fadeOut\"){if(C>0){y.animate({height:(y.height()+C)},v.halfSpeed)}else{y.css({\"min-height\":y.height()})}}f.tabs.filter(\".\"+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);f.tabs.filter(\".\"+r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);f.panels.filter(\".\"+r.panelActiveClass).removeClass(r.panelActiveClass);D.addClass(r.panelActiveClass);if(A.length){A[v.hide](v.speed,r.transitionOutEasing,G)}else{D[v.uncollapse](v.speed,r.transitionUncollapseEasing,G)}}};var s=function(z){if(z.data(\"easytabs\")&&z.data(\"easytabs\").lastHeight){return z.data(\"easytabs\").lastHeight}var B=z.css(\"display\"),y,x;try{y=a(\"<div></div>\",{position:\"absolute\",visibility:\"hidden\",overflow:\"hidden\"})}catch(A){y=a(\"<div></div>\",{visibility:\"hidden\",overflow:\"hidden\"})}x=z.wrap(y).css({position:\"relative\",visibility:\"hidden\",display:\"block\"}).outerHeight();z.unwrap();z.css({position:z.data(\"easytabs\").position,visibility:z.data(\"easytabs\").visibility,display:B});z.data(\"easytabs\").lastHeight=x;return x};var k=function(y){var x=y.outerHeight();if(y.data(\"easytabs\")){y.data(\"easytabs\").lastHeight=x}else{y.data(\"easytabs\",{lastHeight:x})}return x};var n=function(){if(typeof a(window).hashchange===\"function\"){a(window).hashchange(function(){f.selectTabFromHashChange()})}else{if(a.address&&typeof a.address.change===\"function\"){a.address.change(function(){f.selectTabFromHashChange()})}}};var c=function(){var x;if(r.cycle){x=f.tabs.index(h);setTimeout(function(){f.cycleTabs(x+1)},r.cycle)}};f.init()};a.fn.easytabs=function(c){var b=arguments;return this.each(function(){var e=a(this),d=e.data(\"easytabs\");if(undefined===d){d=new a.easytabs(this,c);e.data(\"easytabs\",d)}if(d.publicMethods[c]){return d.publicMethods[c](Array.prototype.slice.call(b,1))}})}})(jQuery);\n\n\n//# sourceURL=webpack:///./src/js/jquery.easytabs.min.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.nav-toggle').on('click', function () {\r\n        $('.nav__wrapper').slideToggle();\r\n    })\r\n\r\n    // progress\r\n    let progress = $('.progpess__load');\r\n    let progressData = $('.progpess__load').data('donate');\r\n    progress.attr('style', 'width:' + progressData)\r\n\r\n    // tabs\r\n    $('.tabs__nav a').on('click', function (event) {\r\n        event.preventDefault();\r\n        $('.tabs__item--active').removeClass('tabs__item--active');\r\n        $(this).parent().addClass('tabs__item--active');\r\n        $('.tabs__content .tabs__content-item').hide();\r\n        $($(this).attr('href')).show();\r\n    });\r\n    $('.tabs__nav a:first').trigger('click'); // Default\r\n})\r\n\r\n$(window).resize(function () {\r\n    if ($(window).width() >= 567) {\r\n        $('.nav__wrapper').removeAttr('style')\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/postcss-loader/src??ref--4-3!../../node_modules/sass-loader/dist/cjs.js??ref--4-4!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });