(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["tvui"] = factory(require("Vue"));
	else
		root["tvui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "public/static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(34)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tScroll;

var _Animate = __webpack_require__(82);

var _Animate2 = _interopRequireDefault(_Animate);

var _Scroller = __webpack_require__(83);

var _Scroller2 = _interopRequireDefault(_Scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderUtil = __webpack_require__(84).default;
/*使用
* new Scroll(container,content,{
* start:function(){},
*  end:function(){},
*   move:function(){},
* })
* */
// Settings
// var contentWidth = 2000;
// var contentHeight = 2000;
// var container = document.getElementById("container");
// var content = document.getElementById("content");
// content.style.width = contentWidth + "px";
// content.style.height = contentHeight + "px";
// window.tScroll=tScroll;
function tScroll(container, content, opt) {
    var scrollingX, scrollingY;
    if (opt.scrollingX === undefined) {
        scrollingX = false;
    } else {
        scrollingX = opt.scrollingX;
    }
    if (opt.scrollingY === undefined) {
        scrollingY = true;
    } else {
        scrollingY = opt.scrollingX;
    }

    var render = renderUtil(content);
    var scroller = new _Scroller2.default(render, {
        zooming: true, scrollingX: scrollingX, scrollingY: scrollingY
    });
    var rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", function (e) {
            // Don't react if initial down happens on a form element
            if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart(e.touches, e.timeStamp);
            opt.start && opt.start.call(this, scroller.getValues());
            e.preventDefault();
        }, false);

        document.addEventListener("touchmove", function (e) {
            scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
            opt.move && opt.move.call(this, scroller.getValues());
        }, false);

        document.addEventListener("touchend", function (e) {
            scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, scroller.getValues());
        }, false);

        // document.addEventListener("touchcancel", function (e) {
        //     opt.cancel && opt.cancel.call(this, e.touches[0])
        //     scroller.doTouchEnd(e.timeStamp);
        // }, false);
    } else {
        var mousedown = false;
        container.addEventListener("mousedown", function (e) {
            if (e.target.tagName.match(/input|textarea|select/i)) {
                return;
            }

            scroller.doTouchStart([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.start && opt.start.call(this, scroller.getValues());
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: e.pageX,
                pageY: e.pageY
            }], e.timeStamp);
            opt.move && opt.move.call(this, scroller.getValues());
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            opt.end && opt.end.call(this, scroller.getValues());
            mousedown = false;
        }, false);
        container.addEventListener(navigator.userAgent.indexOf("Firefox") > -1 ? "DOMMouseScroll" : "mousewheel", function (e) {
            scroller.doMouseZoom(e.detail ? e.detail * -120 : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
        }, false);
    }

    return scroller;
}
// export default ()=>{window.tScroll()};
// var _scroller = tScroll(container, content, {
//     start: function (values) {
//     },
//     move: function (values) {
//         // console.log('move', e)
//     },
//     end: function (values) {
//         console.log('end', values)
//     }
// })


// var scrollTopField = document.getElementById("scrollTop");
// setInterval(function () {
//     /* left
//      top
//      zoom*/
//     var values = _scroller.getValues();
//     scrollTopField.value = values.top.toFixed(2);
// }, 500);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mark = Mark;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _mark = __webpack_require__(86);

var _mark2 = _interopRequireDefault(_mark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* s使用
Mark(true);
*/
var MarkConstruct = _vue2.default.extend(_mark2.default);
var instance = null;
function Mark() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    MarkConstruct.prototype.closeMark = function () {
        var el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        typeof this.callback === 'function' && this.callback();
    };
    instance = new MarkConstruct({
        el: document.createElement('div')
    });
    document.body.append(instance.$el);
    instance.show = opt.show || true;
    return instance;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-layout"
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-header-back",
  props: {
    title: String
  },
  methods: {
    click_back: function click_back() {
      this.$router.go(-1);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: "t-icon",
  props: {
    icon: String,
    spin: Boolean,
    size: {
      type: String || Number
    }
  },
  computed: {
    style: function style() {
      var self = this;
      return {
        fontSize: self.$props.size + "px"
      };
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: "t-grid-group",
  props: {
    row: {
      type: Number,
      default: 2
    }
  },
  computed: {
    classs: function classs() {
      var self = this;
      return "t-grid-goup t-grid-group-" + this.row;
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: "t-grid-item",
  props: {
    direct: {
      type: String,
      default: "column"
    }
  },
  data: function data() {
    return {
      //   _direct: this.direct || "column"
    };
  },

  computed: {
    style: function style() {
      var self = this;
      return {
        flexDirection: self.$props.direct
      };
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-button",
  props: {
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  computed: {
    disabled: function disabled() {
      return this.$props.type == "disabled";
    },
    style: function style() {
      var _bgcolor = "";
      var _color = "#fff";
      var _border = "none";
      var _size_w = 88;
      var _size_h = 30;
      var _font_size = 15;
      if (this.$props.type == "primary") {
        _bgcolor = "green";
      }
      if (this.$props.type == "danger") {
        _bgcolor = "red";
      }
      if (this.$props.type == "infor") {
        _bgcolor = "#f1e110";
      }
      if (this.$props.type == "disabled") {
        _bgcolor = "#eee";
      }
      if (this.$props.type == "hollow") {
        _bgcolor = "#fff";
        _color = "#222";
        _border = "1px solid #eee";
      }
      if (this.$props.color) {
        _bgcolor = this.$props.color;
      }
      if (this.$props.size == "large") {
        _size_w = " 100%";
        _size_h = 30;
      }
      if (this.$props.size == "mini") {
        _size_w = 32;
        _size_h = 30;
        _font_size = 12;
      }
      return {
        background: _bgcolor,
        color: _color,
        border: _border,
        width: _size_w,
        height: _size_h,
        fontSize: _font_size
      };
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  name: "t-button-group"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-icon-button",
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  computed: {
    disabled: function disabled() {
      return this.$props.type == "disabled";
    },
    style: function style() {
      var _bgcolor = "";
      var _color = "#fff";
      var _border = "none";
      var _size_w = 88;
      var _size_h = 30;
      var _font_size = 15;
      if (this.$props.type == "primary") {
        _bgcolor = "green";
      }
      if (this.$props.type == "danger") {
        _bgcolor = "red";
      }
      if (this.$props.type == "infor") {
        _bgcolor = "#f1e110";
      }
      if (this.$props.type == "disabled") {
        _bgcolor = "#eee";
      }
      if (this.$props.type == "hollow") {
        _bgcolor = "#fff";
        _color = "#222";
        _border = "1px solid #eee";
      }
      if (this.$props.color) {
        _bgcolor = this.$props.color;
      }
      if (this.$props.size == "large") {
        _size_w = " 100%";
        _size_h = 30;
      }
      if (this.$props.size == "mini") {
        _size_w = 32;
        _size_h = 30;
        _font_size = 12;
      }
      return {
        background: _bgcolor,
        color: _color,
        border: _border,
        width: _size_w,
        height: _size_h,
        fontSize: _font_size
      };
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    mes: String
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(76);

var _underscore = __webpack_require__(4);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-nostop-list",
  props: {
    height: Number,
    callback: Function
  },
  data: function data() {
    return {
      loading: false
    };
  },

  computed: {
    style: function style() {
      var _height = this.$props.height;
      if (!this.$props.height) {
        _height = document.body.offsetHeight;
      }
      return {
        height: _height,
        overflowY: "auto",
        userSelect: "none"
      };
    }
  },
  methods: {
    _callback: function _callback() {
      var self = this;
      this.callback && this.callback.call(this);
      setTimeout(function () {
        self.$data.loading = false;
      }, 2000);
    },
    scrollEvent: function scrollEvent() {
      //   console.log("scroll", this.scrollview.scrollTop);
      //   console.log("scrollHeight", this.scrollview.scrollHeight);
      //   console.log("clientHeight", this.scrollview.clientHeight);
      /* 只有在数据没有加载的时候，触发 */
      /* 加入方向判读 */
      console.log("scrollEvent");
      var self = this;
      var afterScrollTop = this.scrollview.scrollTop,
          delta = afterScrollTop - this.beforeScrollTop;
      var direction = null;
      if (delta === 0) return false;
      direction = delta > 0 ? "down" : "up";
      this.beforeScrollTop = afterScrollTop;
      if (direction == "down") {
        if (!this.$data.loading) {
          /* 判断到底部 */
          if (this.scrollview.scrollHeight - 1 <= this.scrollview.clientHeight + this.scrollview.scrollTop) {
            console.log("到底了");
            /* 1.加入放手才加载数据 */
            /* 1.加载数据 */
            self.$data.loading = true;
            this._callback();
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    var allHeight = this.$props.maxHeight ? document.body.offsetHeight : this.$props.maxHeight;
    this.scrollview = (0, _util.getScrollview)(this.$el);
    this.dom_tag = this.$refs["tag"];
    console.log(" this.dom_tag.offsetTop", this.dom_tag.offsetTop);
    console.log(" this.scrollview.offsetTop", this.scrollview.offsetTop);
    console.log(" this.scrollview.offsetHeight", this.scrollview.offsetHeight);
    console.log(" this.scrollview.scrollHeight", this.scrollview.scrollHeight);

    /* 滚动事件 */
    this.beforeScrollTop = this.scrollview.scrollTop;
    this.scrollview.addEventListener("scroll", _underscore2.default.throttle(this.scrollEvent));
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(4);

var _underscore2 = _interopRequireDefault(_underscore);

var _scroll = __webpack_require__(5);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-infinite-scroll2",
  props: {
    loadding: {
      type: Boolean,
      default: false
    },
    setloadding: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      isLoadding: false
    };
  },
  updated: function updated() {
    var self = this;
    /* callback之后，需要重新渲染，
            todo：如何确定callback执行完成之后？？ */
    self.init();
    self.scroll.scrollTo(0, self.currentScrollTop);
  },

  methods: {
    init: function init() {
      var self = this;
      this.dom_container = this.$refs["container"];
      this.dom_content = this.$refs["content"];
      this.dom_container_height = this.dom_container.offsetHeight;
      this.dom_container_width = this.dom_container.offsetWidth;
      this.dom_hook = this.$refs["hook"];
      var hook_offsetTop = this.dom_hook.offsetTop;
      this.scroll = new _scroll2.default(this.dom_container, this.dom_content, {
        start: function start(_ref) {
          var top = _ref.top;
        },
        move: function move(_ref2) {
          var top = _ref2.top;

          if (!self.$props.loadding) {
            if (top + hook_offsetTop > self.dom_content.clientHeight) {
              // console.log("top", top);
              /* 出发加载动画 */
              // console.log("出发加载动画");
              self.$nextTick(function () {
                self.$data.isLoadding = true;
                self.currentScrollTop = top;
              });
            }
          } else {
            self.$data.isLoadding = false;
          }
        },
        end: function end(_ref3) {
          var top = _ref3.top;

          if (self.$data.isLoadding) {
            self.scroll.scrollTo(0, self.currentScrollTop + 60);
          }
          self.$data.isLoadding = false;
          setTimeout(function () {
            self.scroll.setDimensions(self.dom_container_width, self.dom_container_height, self.dom_content.clientWidth, self.dom_content.clientHeight + 60);

            if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {
              //     /* 加入动画完毕之后，才能继续出发callback */
              if (!self.$props.loadding) {
                console.log("可以触发了");
                self.setloadding(true);

                _underscore2.default.throttle(function () {
                  self.$emit("callback");
                });
                setTimeout(function () {
                  self.setloadding(false);
                }, 5000);

                // /* 记录滚动的位置，重新init的时候，重新指定位置 */
                // self.currentScrollTop = top;
              }
            }
          }, 500);

          //top 表示滚动的距离
          //top+最底部的hook的offsetTop > dom_content.clientHeight 就可以加载了
          /*关键点：加入拉到底部，出发加载 
          */
          //   console.log(
          //     "self.dom_content.clientHeight",
          //     self.dom_content.clientHeight
          //   );
          //   console.log("top", top);
          //   console.log("hook_offsetTop", hook_offsetTop);
          /* -40 就更加精确一点 */
          //   if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {
          //     /* 加入动画完毕之后，才能继续出发callback */
          //     if (!self.$props.loadding) {
          //       console.log("可以触发了");
          //       self.$props.setloadding(true);
          //       self.$emit("callback");
          //       /* 记录滚动的位置，重新init的时候，重新指定位置 */
          //       self.currentScrollTop = top;
          //     }
          //   }
        }
      });
      /* scroll特新，设置边界 */
      self.scroll.setDimensions(self.dom_container_width, self.dom_container_height, self.dom_content.clientWidth, self.dom_content.clientHeight);
    }
  },
  mounted: function mounted() {
    this.init();
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  },

  props: {
    show: Boolean
  },
  created: function created() {}
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scroll = __webpack_require__(5);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "t-pick",
  data: function data() {
    return {
      currentPage: 2,
      childContext: null
    };
  },

  props: {
    show: Boolean,
    ListData: Array,
    ListItemKey: String,
    mark: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Object],
      default: null
    }
  },
  methods: {
    findCurrentPageByValue: function findCurrentPageByValue() {
      var self = this;
      var value = this.$props.value;
      var index = false;
      var listItemKey = self.$props.ListItemKey;
      if (value) {
        self.$props.ListData.forEach(function (item, _index) {
          /* 加入listItemKey判断 */
          if (listItemKey) {
            if (item[listItemKey] == value[listItemKey]) {
              index = _index;
            }
          } else {
            if (item == value) {
              index = _index;
            }
          }
        }); //end：foreach
        return index + 1;
      } else {
        return undefined;
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    if (this.$props.mark) {
      this.$mark();
    }
    this.dom_container = this.$refs["container"];
    this.dom_content = this.$refs["content"];
    self.$scroll = new _scroll2.default(this.dom_container, this.dom_content, {
      start: function start(_ref) {
        var top = _ref.top;

        /* 加入方向判断，让操作更加准确 */
        this.currentTop = top;
      },
      move: function move(_ref2) {
        var top = _ref2.top;

        if (top - this.currentTop > 0) {
          this.dire = "up";
        } else {
          this.dire = "down";
        }
        this.currentTop = top;
      },
      end: function end(_ref3) {
        var top = _ref3.top;

        // console.log(this.dire);
        var keli = Math.ceil(top / 40);
        if (this.dire == "down") {
          keli = Math.round(top / 40);
        }

        if (keli <= 0) {
          keli = 1;
        }

        /* 加入最大的拉动长度 */
        if (keli > self.$props.ListData.length) {
          keli = self.$props.ListData.length;
        }

        self.$data.currentPage = keli;
        // console.log("tyop", top);
        // console.log("top / 40", top / 40);
        // console.log("keli", keli);
        self.$scroll.scrollTo(0, keli * 40);
        self.$emit("callback", {
          key: self.$data.currentPage - 1,
          value: self.$props.ListData[self.$data.currentPage - 1]
        });
      }
    });
    self.$scroll.setDimensions(this.dom_container.clientWidth, this.dom_container.clientHeight, this.dom_content.clientWidth, this.dom_content.clientHeight + 30 * 3);
    /* 一开始滚动3个 */
    /* 加入一开始根据value得到currentPage */
    this.$data.currentPage = this.findCurrentPageByValue(this.$props.value) ? this.findCurrentPageByValue(this.$props.value) : 3;
    self.$scroll.scrollTo(0, this.$data.currentPage * 40);
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

/* 1.生成mark */
/* 2.生成底部div */
/* 3.根据数据生成scroll */
/* 4,操作滚动，一个一个滚动 */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-pick-item"
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mark = __webpack_require__(6);

var _mark2 = _interopRequireDefault(_mark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mGetDate(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-date-picker",
  props: {
    show: {
      type: Boolean,
      value: false
    },
    year: {
      type: [String, Number],
      default: new Date().getFullYear()
    },
    month: {
      type: [String, Number],
      default: new Date().getMonth() + 1
    },
    day: {
      type: [String, Number],
      default: new Date().getDay()
    }
  },
  model: {
    prop: "show",
    event: "changeShow"
  },
  data: function data() {
    var currnetDate = new Date();
    var currentYear = this.$props.year;
    var currentMonth = this.$props.month;
    var currentDay = this.$props.day;

    var _fixed_date_list = this.fixed_date_list(currentYear, currentMonth, currentDay),
        years = _fixed_date_list.years,
        months = _fixed_date_list.months,
        days = _fixed_date_list.days;

    return {
      years: years,
      months: months,
      currentYear: currentYear,
      currentMonth: currentMonth,
      currentDay: currentDay,
      days: days
    };
  },
  updated: function updated() {
    this.$emit("callback", {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay
    });
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },

  methods: {
    fixed_date_list: function fixed_date_list(currentYear, currentMonth, currentDay) {
      var years = [];
      for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {
        years.push(i);
      }
      var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var days = [];
      for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {
        days.push(i);
      }
      return {
        years: years,
        months: months,
        days: days
      };
    },
    click_save: function click_save() {
      this.$emit("sure", {
        year: this.currentYear,
        month: this.currentMonth,
        day: this.currentDay
      });
      this.$data.show = false;
      this.$mark_el.closeMark();
      this.$mark_el = null;
      this.$emit("changeShow", !this.$props.show);
    },
    callback1: function callback1(_ref) {
      var value = _ref.value;

      this.currentYear = value;

      var _fixed_date_list2 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list2.years,
          months = _fixed_date_list2.months,
          days = _fixed_date_list2.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback2: function callback2(_ref2) {
      var value = _ref2.value;

      this.currentMonth = value;

      var _fixed_date_list3 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list3.years,
          months = _fixed_date_list3.months,
          days = _fixed_date_list3.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback3: function callback3(_ref3) {
      var value = _ref3.value;

      this.currentDay = value;

      var _fixed_date_list4 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list4.years,
          months = _fixed_date_list4.months,
          days = _fixed_date_list4.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mark = __webpack_require__(6);

var _mark2 = _interopRequireDefault(_mark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mGetDate(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-datetime-picker",
  data: function data() {
    var currnetDate = new Date();
    var currentYear = this.$props.year;
    var currentMonth = this.$props.month;
    var currentDay = this.$props.day;
    var currentHour = this.$props.hour;
    var currentMinutes = this.$props.minutes;

    var _fixed_date_list = this.fixed_date_list(currentYear, currentMonth, currentDay),
        years = _fixed_date_list.years,
        months = _fixed_date_list.months,
        days = _fixed_date_list.days,
        hours = _fixed_date_list.hours,
        minutesArray = _fixed_date_list.minutesArray;

    return {
      years: years,
      months: months,
      currentYear: currentYear,
      currentMonth: currentMonth,
      currentDay: currentDay,
      days: days,
      hours: hours,
      minutesArray: minutesArray
    };
  },

  model: {
    prop: "show",
    event: "changeShow"
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    year: {
      type: [String, Number],
      default: new Date().getFullYear()
    },
    month: {
      type: [String, Number],
      default: new Date().getMonth() + 1
    },
    day: {
      type: [String, Number],
      default: new Date().getDay()
    },
    hour: {
      type: [String, Number],
      default: new Date().getHours()
    },
    minutes: {
      type: [String, Number],
      default: new Date().getMinutes()
    }
  },
  updated: function updated() {
    this.$emit("callback", {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay,
      hour: this.currentHour,
      minutes: this.currentMinutes,
      second: "00"
    });
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },

  methods: {
    fixed_date_list: function fixed_date_list(currentYear, currentMonth, currentDay) {
      var years = [];
      for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {
        years.push(i);
      }
      var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var days = [];
      for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {
        days.push(i);
      }
      var hours = [];
      for (var i = 1; i < 25; i++) {
        hours.push(i);
      }
      var minutesArray = [];
      for (var i = 1; i < 61; i++) {
        minutesArray.push(i);
      }
      return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutesArray: minutesArray
      };
    },
    callback1: function callback1(_ref) {
      var value = _ref.value;

      this.currentYear = value;

      var _fixed_date_list2 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list2.years,
          months = _fixed_date_list2.months,
          days = _fixed_date_list2.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback2: function callback2(_ref2) {
      var value = _ref2.value;

      this.currentMonth = value;

      var _fixed_date_list3 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list3.years,
          months = _fixed_date_list3.months,
          days = _fixed_date_list3.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback3: function callback3(_ref3) {
      var value = _ref3.value;

      this.currentDay = value;

      var _fixed_date_list4 = this.fixed_date_list(this.currentYear, this.currentMonth, this.currentDay),
          years = _fixed_date_list4.years,
          months = _fixed_date_list4.months,
          days = _fixed_date_list4.days;

      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback4: function callback4(_ref4) {
      var value = _ref4.value;

      this.currentHour = value;
    },
    callback5: function callback5(_ref5) {
      var value = _ref5.value;

      this.currentMinutes = value;
    },
    click_save: function click_save() {
      this.$emit("callback", {
        year: this.currentYear,
        month: this.currentMonth,
        day: this.currentDay,
        hour: this.currentHour,
        minutes: this.currentMinutes,
        second: "00"
      });
      this.$data.show = false;
      if (this.$mark_el) {
        this.$mark_el.closeMark();
        this.$mark_el = null;
      }
      this.$emit("changeShow", !this.$props.show);
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scroll = __webpack_require__(5);

var _scroll2 = _interopRequireDefault(_scroll);

var _underscore = __webpack_require__(4);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-swiper",
  data: function data() {
    return {
      currentPage: 0,
      childLength: 0
    };
  },

  props: {
    height: {
      type: [String, Number],
      default: 200
    }
  },
  computed: {
    style_container: function style_container() {
      var height = this.$props.height;
      return {
        height: height
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;
    this.dom_container = this.$refs["container"];
    this.dom_content = this.$refs["content"];
    this.dom_container_height = this.dom_container.offsetHeight;
    this.dom_container_width = this.dom_container.offsetWidth;
    self.scroll = new _scroll2.default(this.dom_container, this.dom_content, {
      start: function start(_ref) {
        var left = _ref.left;

        _this.currentLeft = left;
      },
      move: function move(_ref2) {
        var left = _ref2.left;

        _this.dire = _this.currentLeft - left > 0 ? "right" : "left";
        _this.currentLeft = left;
      },
      end: function end(_ref3) {
        var left = _ref3.left;

        /* 加入dire控制更加精确 */
        if (_this.dire == "left") {
          self.$data.currentPage = Math.ceil(left / _this.dom_container_width);
        } else {
          self.$data.currentPage = Math.round(left / _this.dom_container_width);
          // console.log(
          //   "left / this.dom_container_width",
          //   left / this.dom_container_width
          // );
        }
        if (self.$data.currentPage > self.$data.childLength - 1) {
          self.$data.currentPage = self.$data.childLength - 1;
        }
        // console.log("self.$data.childLength", self.$data.childLength);
        self.scroll.scrollTo(self.$data.currentPage * _this.dom_container_width, 0, false);
      },
      scrollingX: true,
      scrollingY: false
    });
    /* 1.设置content的大小非常大 */
    /* 1.便利children 让所有的child都是父类的大小 */
    this.$data.childLength = this.dom_content.children.length;
    this.dom_content.style.width = this.$data.childLength * self.dom_container_width;
    _underscore2.default.each(this.dom_content.children, function (child) {
      child.style.width = self.dom_container_width;
      child.style.height = self.dom_container_height;
    });
    /* 插件 scroll特新，定义空间大小 */
    self.scroll.setDimensions(self.dom_container_width, self.dom_container_height, self.dom_content.clientWidth, self.dom_content.clientHeight);
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: "t-loading",
  props: {
    loading: Boolean
  },
  created: function created() {}
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-cell-item",
  props: {
    arrow: {
      type: Boolean,
      default: false
    }
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "t-cell-group",
  props: {
    title: String
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(193);

var _underscore = __webpack_require__(4);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* 
验证数字的正则表达式集 
验证数字：^[0-9]*$ 
验证n位的数字：^\d{n}$ 
验证至少n位数字：^\d{n,}$ 
验证m-n位的数字：^\d{m,n}$ 
验证零和非零开头的数字：^(0|[1-9][0-9]*)$ 
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$ 
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$ 
验证非零的正整数：^\+?[1-9][0-9]*$ 
验证非零的负整数：^\-[1-9][0-9]*$ 
验证非负整数（正整数 + 0） ^\d+$ 
验证非正整数（负整数 + 0） ^((-\d+)|(0+))$ 
验证长度为3的字符：^.{3}$ 
验证由26个英文字母组成的字符串：^[A-Za-z]+$ 
验证由26个大写英文字母组成的字符串：^[A-Z]+$ 
验证由26个小写英文字母组成的字符串：^[a-z]+$ 
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ 
验证由数字、26个英文字母或者下划线组成的字符串：^\w+$ 
验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+ 
验证汉字：^[\u4e00-\u9fa5],{0,}$ 
验证Email地址：/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ 
验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。 
验证身份证号（15位或18位数字）：^\d{15}|\d{}18$ 
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” 
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 
整数：^-?\d+$ 
不为空：/\S/

*/
exports.default = {
  name: "t-input",
  data: function data() {
    return {
      defaultValue: ""
    };
  },

  props: {
    validate: {
      type: [String, Array],
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  mounted: function mounted() {
    this.$data.defaultValue = this.$props.value;
  },

  computed: {
    validateInfor: function validateInfor() {
      var _validateInfor = { isError: false, errors: [] };
      var validate = this.$props.validate;
      var defaultValue = this.$data.defaultValue;

      _underscore2.default.each(validate, function (item) {
        var isError = (0, _util.isShit)(item.exp, defaultValue);
        // console.log("item.exp", item.exp);
        // console.log("isError", isError);
        if (isError) {
          _underscore2.default.without(_validateInfor.errors, item.error);
        } else {
          _validateInfor.errors.push(item.error);
          _validateInfor.isError = isError;
        }
      });
      return _validateInfor;
    }
  },
  methods: {
    change_value: function change_value(e) {
      //   console.log("change_value", e.target.value);
      this.$data.defaultValue = e.target.value;
      this.$emit("input", e.target.value);
    }
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(140)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layout = __webpack_require__(30);

var _index = __webpack_require__(36);

var _index2 = __webpack_require__(41);

var _index3 = __webpack_require__(44);

var _index4 = __webpack_require__(53);

var _index5 = __webpack_require__(66);

var _index6 = __webpack_require__(72);

var _mark = __webpack_require__(6);

var _pick = __webpack_require__(90);

var _index7 = __webpack_require__(99);

var _index8 = __webpack_require__(104);

var _index9 = __webpack_require__(109);

var _index10 = __webpack_require__(114);

var _index11 = __webpack_require__(119);

var _index12 = __webpack_require__(128);

window.document.addEventListener('touchstart', function (event) {
    /* Do Nothing */
}, false);

var install = function install(Vue) {
    Vue.component(_layout.Layout.name, _layout.Layout);
    Vue.component(_index.HeaderBack.name, _index.HeaderBack);
    Vue.component(_index2.Icon.name, _index2.Icon);
    Vue.component(_index3.GridGroup.name, _index3.GridGroup);
    Vue.component(_index3.GridItem.name, _index3.GridItem);
    Vue.component(_index4.Button.name, _index4.Button);
    Vue.component(_index4.ButtonGroup.name, _index4.ButtonGroup);
    Vue.component(_index4.IconButton.name, _index4.IconButton);
    Vue.component(_index6.InfiniteScroll.name, _index6.InfiniteScroll);
    Vue.component(_pick.Pick.name, _pick.Pick);
    Vue.component(_pick.PickItem.name, _pick.PickItem);
    Vue.component(_index7.DatePicker.name, _index7.DatePicker);
    Vue.component(_index8.DateTimePicker.name, _index8.DateTimePicker);
    Vue.component(_index9.Swiper.name, _index9.Swiper);
    Vue.component(_index6.InfiniteScroll2.name, _index6.InfiniteScroll2);
    Vue.component(_index11.CellGroup.name, _index11.CellGroup);
    Vue.component(_index11.CellItem.name, _index11.CellItem);
    Vue.component(_index10.Loading.name, _index10.Loading);
    Vue.component(_index12.Input.name, _index12.Input);

    Vue.prototype.$toast = _index5.Toast;
    Vue.prototype.$mark = _mark.Mark;
    Vue.prototype.$expTypes = _index12.ExpTypes;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

exports.default = {
    install: install
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = undefined;

var _layout = __webpack_require__(31);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Layout = _layout2.default;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_2d32c70e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_layout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_2d32c70e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\layout\\layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d32c70e", Component.options)
  } else {
    hotAPI.reload("data-v-2d32c70e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0e9ded66", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d32c70e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d32c70e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-layout {\n  margin: 0 auto;\n  max-width: 720px;\n  min-width: 200px;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.t-layout .top {\n  height: 40px;\n  background: #eee;\n}\n.t-layout .center {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.t-layout .botom {\n  height: 40px;\n  background: #eee;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/layout/layout.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,oBAAQ;EAAR,gBAAQ;UAAR,QAAQ;CACT;AACD;EACE,aAAa;EACb,iBAAiB;CAClB","file":"layout.vue","sourcesContent":[".t-layout {\n  margin: 0 auto;\n  max-width: 720px;\n  min-width: 200px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.t-layout .top {\n  height: 40px;\n  background: #eee;\n}\n.t-layout .center {\n  flex: 1;\n}\n.t-layout .botom {\n  height: 40px;\n  background: #eee;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "t-layout" },
    [
      _vm._t("top"),
      _vm._v(" "),
      _c("div", { staticClass: "center" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm._t("bottom")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-2d32c70e", esExports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBack = undefined;

var _header_back = __webpack_require__(37);

var _header_back2 = _interopRequireDefault(_header_back);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HeaderBack = _header_back2.default;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0588b17d_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_header_back_vue__ = __webpack_require__(40);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_header_back_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0588b17d_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_header_back_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\header\\header_back.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0588b17d", Component.options)
  } else {
    hotAPI.reload("data-v-0588b17d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("56993630", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0588b17d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./header_back.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0588b17d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./header_back.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-header-back {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 40px;\n  color: #fff;\n  background: #009fff;\n}\n.t-header-back .left {\n  width: 50px;\n  cursor: pointer;\n}\n.t-header-back .right {\n  width: 50px;\n}\n.t-header-back .center {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/header/header_back.vue"],"names":[],"mappings":";AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;UAApB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAQ;EAAR,gBAAQ;UAAR,QAAQ;EACR,mBAAmB;CACpB","file":"header_back.vue","sourcesContent":[".t-header-back {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  color: #fff;\n  background: #009fff;\n}\n.t-header-back .left {\n  width: 50px;\n  cursor: pointer;\n}\n.t-header-back .right {\n  width: 50px;\n}\n.t-header-back .center {\n  flex: 1;\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-header-back" }, [
    _c(
      "div",
      { staticClass: "left", on: { click: _vm.click_back } },
      [_c("t-icon", { attrs: { icon: "left" } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "title center" }, [
      _vm._v("\n    " + _vm._s(_vm.title) + "\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "right" })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0588b17d", esExports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _icon = __webpack_require__(42);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Icon = _icon2.default;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_420f64d9_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(43);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_420f64d9_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\icon\\icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-420f64d9", Component.options)
  } else {
    hotAPI.reload("data-v-420f64d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.style }, [
    _c("svg", { staticClass: "icon", attrs: { "aria-hidden": "true" } }, [
      _c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-420f64d9", esExports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GridItem = exports.GridGroup = undefined;

var _gridgroup = __webpack_require__(45);

var _gridgroup2 = _interopRequireDefault(_gridgroup);

var _griditem = __webpack_require__(49);

var _griditem2 = _interopRequireDefault(_griditem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GridGroup = _gridgroup2.default;
exports.GridItem = _griditem2.default;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0116cbd6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_gridgroup_vue__ = __webpack_require__(48);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_gridgroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0116cbd6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_gridgroup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\grid\\gridgroup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0116cbd6", Component.options)
  } else {
    hotAPI.reload("data-v-0116cbd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6df77bab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0116cbd6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./gridgroup.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0116cbd6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./gridgroup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-grid-goup {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 10px;\n}\n.t-grid-group-1 .t-grid-item {\n  width: 100%;\n  box-sizing: border-box;\n}\n.t-grid-group-2 .t-grid-item {\n  width: 50%;\n  box-sizing: border-box;\n}\n.t-grid-group-3 .t-grid-item {\n  width: 33.333%;\n  box-sizing: border-box;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/grid/gridgroup.vue"],"names":[],"mappings":";AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,wBAAgB;UAAhB,gBAAgB;EAChB,cAAc;CACf;AACD;EACE,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,WAAW;EACX,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB","file":"gridgroup.vue","sourcesContent":[".t-grid-goup {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.t-grid-group-1 .t-grid-item {\n  width: 100%;\n  box-sizing: border-box;\n}\n.t-grid-group-2 .t-grid-item {\n  width: 50%;\n  box-sizing: border-box;\n}\n.t-grid-group-3 .t-grid-item {\n  width: 33.333%;\n  box-sizing: border-box;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0116cbd6", esExports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_6a0a2e0c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_griditem_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_griditem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_6a0a2e0c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_griditem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\grid\\griditem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a0a2e0c", Component.options)
  } else {
    hotAPI.reload("data-v-6a0a2e0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6d861dc0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a0a2e0c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./griditem.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a0a2e0c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./griditem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-grid-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid #eee;\n  height: 88px;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-align-self: center;\n          align-self: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/grid/griditem.vue"],"names":[],"mappings":";AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;UAAvB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,0BAAoB;EAApB,4BAAoB;UAApB,oBAAoB;EACpB,2BAAmB;UAAnB,mBAAmB;EACnB,yBAAwB;EAAxB,gCAAwB;UAAxB,wBAAwB;CACzB","file":"griditem.vue","sourcesContent":[".t-grid-item {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #eee;\n  height: 88px;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "t-grid-item", style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-6a0a2e0c", esExports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconButton = exports.ButtonGroup = exports.Button = undefined;

var _button = __webpack_require__(54);

var _button2 = _interopRequireDefault(_button);

var _buttonGrop = __webpack_require__(58);

var _buttonGrop2 = _interopRequireDefault(_buttonGrop);

var _icon_button = __webpack_require__(62);

var _icon_button2 = _interopRequireDefault(_icon_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;
exports.ButtonGroup = _buttonGrop2.default;
exports.IconButton = _icon_button2.default;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_45fb0379_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_45fb0379_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\button\\button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45fb0379", Component.options)
  } else {
    hotAPI.reload("data-v-45fb0379", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("550ffc06", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45fb0379\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45fb0379\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-button {\n  width: 88px;\n  height: 30px;\n  line-height: 30px;\n  border: none;\n  border-radius: 2px;\n}\n.t-button:active {\n  opacity: 0.5;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/button/button.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,aAAa;CACd","file":"button.vue","sourcesContent":[".t-button {\n  width: 88px;\n  height: 30px;\n  line-height: 30px;\n  border: none;\n  border-radius: 2px;\n}\n.t-button:active {\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "t-button",
      style: _vm.style,
      attrs: { disabled: _vm.disabled }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-45fb0379", esExports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4943b525_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_buttonGrop_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_buttonGrop_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4943b525_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_buttonGrop_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\button\\buttonGrop.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4943b525", Component.options)
  } else {
    hotAPI.reload("data-v-4943b525", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d8458418", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4943b525\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./buttonGrop.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4943b525\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./buttonGrop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-button-group {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  -webkit-flex-wrap:wrap;\r\n          flex-wrap:wrap;\n}\n.t-button-group .t-button {\r\n  margin-right: 10px;\r\n   margin-top: 10px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/button/application/index/view/components/button/buttonGrop.vue"],"names":[],"mappings":";AAWA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;EACA,cAAA;EACA,uBAAA;UAAA,eAAA;CACA;AACA;EACA,mBAAA;GACA,iBAAA;CACA","file":"buttonGrop.vue","sourcesContent":["<template>\r\n    <div class=\"t-button-group\">\r\n        <slot></slot>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  name: \"t-button-group\"\r\n};\r\n</script>\r\n<style>\r\n.t-button-group {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  flex-wrap:wrap;\r\n}\r\n.t-button-group .t-button {\r\n  margin-right: 10px;\r\n   margin-top: 10px;\r\n}\r\n</style>\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-button-group" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4943b525", esExports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_5862f701_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_button_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_5862f701_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\button\\icon_button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5862f701", Component.options)
  } else {
    hotAPI.reload("data-v-5862f701", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("086332dd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5862f701\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./icon_button.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5862f701\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./icon_button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: 88px;\n  height: 30px;\n  line-height: 30px;\n  border: none;\n  border-radius: 2px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.t-button:active {\n  opacity: 0.5;\n}\n.t-button ._icon {\n  margin-right: 5px;\n}\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/button/icon_button.vue"],"names":[],"mappings":";AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,cAAc;EACd,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,yBAAwB;EAAxB,gCAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;EAApB,4BAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,aAAa;CACd;AACD;EACE,kBAAkB;CACnB","file":"icon_button.vue","sourcesContent":[".t-button {\n  display: flex;\n  width: 88px;\n  height: 30px;\n  line-height: 30px;\n  border: none;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n}\n.t-button:active {\n  opacity: 0.5;\n}\n.t-button ._icon {\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "t-button",
      style: _vm.style,
      attrs: { disabled: _vm.disabled }
    },
    [
      _c("t-icon", { staticClass: "_icon", attrs: { icon: _vm.icon } }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5862f701", esExports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toast = undefined;

var _toast = __webpack_require__(67);

exports.Toast = _toast.Toast;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toast = Toast;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _toast = __webpack_require__(68);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 使用
Toast({mes:'ad',time:100})
*/
var ToastConstructor = _vue2.default.extend(_toast2.default);

function Toast() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    ToastConstructor.prototype.close = function () {
        var el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        typeof this.callback === 'function' && this.callback();
    };
    var instance = new ToastConstructor({
        el: document.createElement('div')
    });
    instance.callback = opt.callback;
    instance.mes = opt.mes;
    document.body.appendChild(instance.$el);
    setTimeout(function () {
        instance.close();
    }, opt.time || 1000);
    return instance.$el;
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_f64bfade_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_toast_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_toast_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_f64bfade_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_toast_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\dialog\\toast\\toast.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f64bfade", Component.options)
  } else {
    hotAPI.reload("data-v-f64bfade", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7772a4d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f64bfade\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./toast.vue", function() {
     var newContent = require("!!../../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f64bfade\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./toast.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-toast {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  background: #333;\r\n  padding: 15px;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  z-index: 99;\n}\n.slider-enter-active,\r\n.slider-leave-active {\r\n  -webkit-transition: all 1s;\r\n  transition: all 1s;\n}\n.slider-enter,\r\n.slider-leave {\r\n  opacity: 0;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/dialog/toast/application/index/view/components/dialog/toast/toast.vue"],"names":[],"mappings":";AAgBA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;CACA;AACA;;EAEA,2BAAA;EAAA,mBAAA;CACA;AACA;;EAEA,WAAA;CACA","file":"toast.vue","sourcesContent":["<template>\r\n    <transition name=\"slider\">\r\n        <div class=\"t-toast\">\r\n            {{mes}}\r\n        </div>\r\n    </transition>\r\n\r\n</template>\r\n<script>\r\nexport default {\r\n  props: {\r\n    mes: String\r\n  }\r\n};\r\n</script>\r\n<style>\r\n.t-toast {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  background: #333;\r\n  padding: 15px;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  z-index: 99;\r\n}\r\n.slider-enter-active,\r\n.slider-leave-active {\r\n  transition: all 1s;\r\n}\r\n.slider-enter,\r\n.slider-leave {\r\n  opacity: 0;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slider" } }, [
    _c("div", { staticClass: "t-toast" }, [
      _vm._v("\n        " + _vm._s(_vm.mes) + "\n    ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f64bfade", esExports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteScroll2 = exports.InfiniteScroll = undefined;

var _infiniteScroll = __webpack_require__(73);

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _infiniteScroll3 = __webpack_require__(79);

var _infiniteScroll4 = _interopRequireDefault(_infiniteScroll3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.InfiniteScroll = _infiniteScroll2.default;
exports.InfiniteScroll2 = _infiniteScroll4.default;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4f8ee799_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_infiniteScroll_vue__ = __webpack_require__(78);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f8ee799"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4f8ee799_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_infiniteScroll_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\infiniteScroll\\infiniteScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f8ee799", Component.options)
  } else {
    hotAPI.reload("data-v-4f8ee799", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a0839b46", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f8ee799\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./infiniteScroll.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f8ee799\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./infiniteScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.loading[data-v-4f8ee799] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  height: 30px;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/infiniteScroll/application/index/view/components/infiniteScroll/infiniteScroll.vue"],"names":[],"mappings":";AAWA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,aAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;CACA","file":"infiniteScroll.vue","sourcesContent":["<template>\r\n    <div class=\"t-infinite-scroll\" :style=\"style\">\r\n        <slot/>\r\n        <div ref='tag' style=\"height:0\"></div>\r\n        <div class=\"loading\" v-show=\"loading\">\r\n            <t-icon icon=\"loading\"></t-icon>\r\n            loadding...\r\n        </div>\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.loading {\r\n  display: flex;\r\n  height: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n</style>\r\n\r\n<script>\r\nimport { getScrollview } from \"../../util/util\";\r\nimport _ from \"underscore\";\r\nexport default {\r\n  name: \"t-nostop-list\",\r\n  props: {\r\n    height: Number,\r\n    callback: Function\r\n  },\r\n  data() {\r\n    return {\r\n      loading: false\r\n    };\r\n  },\r\n  computed: {\r\n    style: function() {\r\n      var _height = this.$props.height;\r\n      if (!this.$props.height) {\r\n        _height = document.body.offsetHeight;\r\n      }\r\n      return {\r\n        height: _height,\r\n        overflowY: \"auto\",\r\n        userSelect: \"none\"\r\n      };\r\n    }\r\n  },\r\n  methods: {\r\n    _callback() {\r\n      var self = this;\r\n      this.callback && this.callback.call(this);\r\n      setTimeout(() => {\r\n        self.$data.loading = false;\r\n      }, 2000);\r\n    },\r\n    scrollEvent() {\r\n      //   console.log(\"scroll\", this.scrollview.scrollTop);\r\n      //   console.log(\"scrollHeight\", this.scrollview.scrollHeight);\r\n      //   console.log(\"clientHeight\", this.scrollview.clientHeight);\r\n      /* 只有在数据没有加载的时候，触发 */\r\n      /* 加入方向判读 */\r\n      console.log(\"scrollEvent\");\r\n      var self = this;\r\n      var afterScrollTop = this.scrollview.scrollTop,\r\n        delta = afterScrollTop - this.beforeScrollTop;\r\n      var direction = null;\r\n      if (delta === 0) return false;\r\n      direction = delta > 0 ? \"down\" : \"up\";\r\n      this.beforeScrollTop = afterScrollTop;\r\n      if (direction == \"down\") {\r\n        if (!this.$data.loading) {\r\n          /* 判断到底部 */\r\n          if (\r\n            this.scrollview.scrollHeight - 1 <=\r\n            this.scrollview.clientHeight + this.scrollview.scrollTop\r\n          ) {\r\n            console.log(\"到底了\");\r\n            /* 1.加入放手才加载数据 */\r\n            /* 1.加载数据 */\r\n            self.$data.loading = true;\r\n            this._callback();\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    var allHeight = this.$props.maxHeight\r\n      ? document.body.offsetHeight\r\n      : this.$props.maxHeight;\r\n    this.scrollview = getScrollview(this.$el);\r\n    this.dom_tag = this.$refs[\"tag\"];\r\n    console.log(\" this.dom_tag.offsetTop\", this.dom_tag.offsetTop);\r\n    console.log(\" this.scrollview.offsetTop\", this.scrollview.offsetTop);\r\n    console.log(\" this.scrollview.offsetHeight\", this.scrollview.offsetHeight);\r\n    console.log(\" this.scrollview.scrollHeight\", this.scrollview.scrollHeight);\r\n\r\n    /* 滚动事件 */\r\n    this.beforeScrollTop = this.scrollview.scrollTop;\r\n    this.scrollview.addEventListener(\"scroll\", _.throttle(this.scrollEvent));\r\n  }\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uuid = uuid;
exports.dateFtt = dateFtt;
exports.changeCursorPos = changeCursorPos;
exports.getScrollview = getScrollview;

var _constants = __webpack_require__(77);

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
/**************************************时间格式化处理************************************/
"yyyy-MM-dd HH:mm:ss";
function dateFtt(fmt, val) {
    //author: meizz   
    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
}

function changeCursorPos(dom, pos) {
    dom.focus();
    // // 获取选定对象
    // var selection = getSelection()
    // var range = selection.getRangeAt(0)
    // // debugger
    // // 获取光标对象的范围界定对象，一般就是textNode对象
    // var textNode = range.startContainer;
    // // 获取光标位置
    // var rangeStartOffset = range.startOffset;
    // // 文本节点在光标位置处插入新的表情内容
    // //  textNode.insertData(rangeStartOffset, emojiInput.value)
    // // 光标移动到到原来的位置加上新内容的长度
    // range.setStart(textNode, rangeStartOffset + textNode.length)
    // range.collapse(true)
    //  // 插入新的光标对象
    //  selection.addRange(range)

    var selObj = window.getSelection();
    selObj.selectAllChildren(dom);
    selObj.collapseToEnd();
    // console.log(selObj.anchorNode)
    // console.log(selObj.anchorOffset)
    // console.log(selObj.focusNode)
    // console.log(selObj.rangeCount)

}

function getScrollview(el) {
    var currentNode = el;
    var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
    if (currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY') {
        return currentNode;
    }
    if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
    } else {
        return getScrollview(currentNode.parentNode);
    }
}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "t-infinite-scroll", style: _vm.style },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { ref: "tag", staticStyle: { height: "0" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "loading"
        },
        [
          _c("t-icon", { attrs: { icon: "loading" } }),
          _vm._v("\n        loadding...\n    ")
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4f8ee799", esExports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_bb34962e_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_infiniteScroll2_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb34962e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_infiniteScroll2_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_bb34962e_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_infiniteScroll2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\infiniteScroll\\infiniteScroll2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb34962e", Component.options)
  } else {
    hotAPI.reload("data-v-bb34962e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d76d6d3a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb34962e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./infiniteScroll2.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb34962e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./infiniteScroll2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.loading[data-v-bb34962e] {\r\n  border-top: 1px solid #eee;\n}\n.container[data-v-bb34962e] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.container .content[data-v-bb34962e] {\r\n  /* position: absolute; */\n}\n.hook[data-v-bb34962e] {\r\n  height: 0px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/infiniteScroll/application/index/view/components/infiniteScroll/infiniteScroll2.vue"],"names":[],"mappings":";AAcA;EACA,2BAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;CACA;AACA;EACA,yBAAA;CACA;AACA;EACA,YAAA;CACA","file":"infiniteScroll2.vue","sourcesContent":["<template>\r\n    <div class=\"t-infinite-scroll2\">\r\n        <div class=\" container\" ref=\"container\">\r\n            <div class=\"content\" ref=\"content\">\r\n                <slot />\r\n                <t-loading class=\"loading\" :loading=\"isLoadding\">拉取加载</t-loading>\r\n                <t-loading class=\"loading\" :loading=\"loadding\">加载ing</t-loading>\r\n                <div style=\"height:45px\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"hook\" ref=\"hook\"></div>\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.loading {\r\n  border-top: 1px solid #eee;\r\n}\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.container .content {\r\n  /* position: absolute; */\r\n}\r\n.hook {\r\n  height: 0px;\r\n}\r\n</style>\r\n\r\n<script>\r\nimport _ from \"underscore\";\r\nimport Scroll from \"../scroll/scroll\";\r\nexport default {\r\n  name: \"t-infinite-scroll2\",\r\n  props: {\r\n    loadding: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    setloadding: {\r\n      type: Function,\r\n      default: () => {}\r\n    }\r\n  },\r\n  data() {\r\n    return {\r\n      isLoadding: false\r\n    };\r\n  },\r\n  updated() {\r\n    var self = this;\r\n    /* callback之后，需要重新渲染，\r\n            todo：如何确定callback执行完成之后？？ */\r\n    self.init();\r\n    self.scroll.scrollTo(0, self.currentScrollTop);\r\n  },\r\n  methods: {\r\n    init() {\r\n      var self = this;\r\n      this.dom_container = this.$refs[\"container\"];\r\n      this.dom_content = this.$refs[\"content\"];\r\n      this.dom_container_height = this.dom_container.offsetHeight;\r\n      this.dom_container_width = this.dom_container.offsetWidth;\r\n      this.dom_hook = this.$refs[\"hook\"];\r\n      var hook_offsetTop = this.dom_hook.offsetTop;\r\n      this.scroll = new Scroll(this.dom_container, this.dom_content, {\r\n        start: ({ top }) => {},\r\n        move: ({ top }) => {\r\n          if (!self.$props.loadding) {\r\n            if (top + hook_offsetTop > self.dom_content.clientHeight) {\r\n              // console.log(\"top\", top);\r\n              /* 出发加载动画 */\r\n              // console.log(\"出发加载动画\");\r\n              self.$nextTick(function() {\r\n                self.$data.isLoadding = true;\r\n                self.currentScrollTop = top;\r\n              });\r\n            }\r\n          } else {\r\n            self.$data.isLoadding = false;\r\n          }\r\n        },\r\n        end: ({ top }) => {\r\n          if (self.$data.isLoadding) {\r\n            self.scroll.scrollTo(0, self.currentScrollTop + 60);\r\n          }\r\n          self.$data.isLoadding = false;\r\n          setTimeout(() => {\r\n            self.scroll.setDimensions(\r\n              self.dom_container_width,\r\n              self.dom_container_height,\r\n              self.dom_content.clientWidth,\r\n              self.dom_content.clientHeight + 60\r\n            );\r\n\r\n            if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {\r\n              //     /* 加入动画完毕之后，才能继续出发callback */\r\n              if (!self.$props.loadding) {\r\n                console.log(\"可以触发了\");\r\n                self.setloadding(true);\r\n\r\n                _.throttle(() => {\r\n                  self.$emit(\"callback\");\r\n                });\r\n                setTimeout(() => {\r\n                  self.setloadding(false);\r\n                }, 5000);\r\n\r\n                // /* 记录滚动的位置，重新init的时候，重新指定位置 */\r\n                // self.currentScrollTop = top;\r\n              }\r\n            }\r\n          }, 500);\r\n\r\n          //top 表示滚动的距离\r\n          //top+最底部的hook的offsetTop > dom_content.clientHeight 就可以加载了\r\n          /*关键点：加入拉到底部，出发加载 \r\n       */\r\n          //   console.log(\r\n          //     \"self.dom_content.clientHeight\",\r\n          //     self.dom_content.clientHeight\r\n          //   );\r\n          //   console.log(\"top\", top);\r\n          //   console.log(\"hook_offsetTop\", hook_offsetTop);\r\n          /* -40 就更加精确一点 */\r\n          //   if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {\r\n          //     /* 加入动画完毕之后，才能继续出发callback */\r\n          //     if (!self.$props.loadding) {\r\n          //       console.log(\"可以触发了\");\r\n          //       self.$props.setloadding(true);\r\n          //       self.$emit(\"callback\");\r\n          //       /* 记录滚动的位置，重新init的时候，重新指定位置 */\r\n          //       self.currentScrollTop = top;\r\n          //     }\r\n          //   }\r\n        }\r\n      });\r\n      /* scroll特新，设置边界 */\r\n      self.scroll.setDimensions(\r\n        self.dom_container_width,\r\n        self.dom_container_height,\r\n        self.dom_content.clientWidth,\r\n        self.dom_content.clientHeight\r\n      );\r\n    }\r\n  },\r\n  mounted() {\r\n    this.init();\r\n  }\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

/**
 * Generic animation class with support for dropped frames both optional easing and duration.
 *
 * Optional duration is useful when the lifetime is defined by another condition than time
 * e.g. speed of an animating object, etc.
 *
 * Dropped frame logic allows to keep using the same updater logic independent from the actual
 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
 * based on the pure time difference.
 */
(function (global) {
	var time = Date.now || function () {
		return +new Date();
	};
	var desiredFrames = 60;
	var millisecondsPerSecond = 1000;
	var running = {};
	var counter = 1;

	// Create namespaces
	if (!global.core) {
		global.core = { effect: {} };
	} else if (!core.effect) {
		core.effect = {};
	}

	core.effect.Animate = {

		/**
   * A requestAnimationFrame wrapper / polyfill.
   *
   * @param callback {Function} The callback to be invoked before the next repaint.
   * @param root {HTMLElement} The root element for the repaint
   */
		requestAnimationFrame: function () {

			// Check for request animation Frame support
			var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
			var isNative = !!requestFrame;

			if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
				isNative = false;
			}

			if (isNative) {
				return function (callback, root) {
					requestFrame(callback, root);
				};
			}

			var TARGET_FPS = 60;
			var requests = {};
			var requestCount = 0;
			var rafHandle = 1;
			var intervalHandle = null;
			var lastActive = +new Date();

			return function (callback, root) {
				var callbackHandle = rafHandle++;

				// Store callback
				requests[callbackHandle] = callback;
				requestCount++;

				// Create timeout at first request
				if (intervalHandle === null) {

					intervalHandle = setInterval(function () {

						var time = +new Date();
						var currentRequests = requests;

						// Reset data structure before executing callbacks
						requests = {};
						requestCount = 0;

						for (var key in currentRequests) {
							if (currentRequests.hasOwnProperty(key)) {
								currentRequests[key](time);
								lastActive = time;
							}
						}

						// Disable the timeout when nothing happens for a certain
						// period of time
						if (time - lastActive > 2500) {
							clearInterval(intervalHandle);
							intervalHandle = null;
						}
					}, 1000 / TARGET_FPS);
				}

				return callbackHandle;
			};
		}(),

		/**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
		stop: function stop(id) {
			var cleared = running[id] != null;
			if (cleared) {
				running[id] = null;
			}

			return cleared;
		},

		/**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
		isRunning: function isRunning(id) {
			return running[id] != null;
		},

		/**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @param root {Element ? document.body} Render root, when available. Used for internal
   *   usage of requestAnimationFrame.
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
		start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {

			var start = time();
			var lastFrame = start;
			var percent = 0;
			var dropCounter = 0;
			var id = counter++;

			if (!root) {
				root = document.body;
			}

			// Compacting running db automatically every few new animations
			if (id % 20 === 0) {
				var newRunning = {};
				for (var usedId in running) {
					newRunning[usedId] = true;
				}
				running = newRunning;
			}

			// This is the internal step method which is called every few milliseconds
			var step = function step(virtual) {

				// Normalize virtual value
				var render = virtual !== true;

				// Get current time
				var now = time();

				// Verification is executed before next animation step
				if (!running[id] || verifyCallback && !verifyCallback(id)) {

					running[id] = null;
					completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
					return;
				}

				// For the current rendering to apply let's update omitted steps in memory.
				// This is important to bring internal state variables up-to-date with progress in time.
				if (render) {

					var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
					for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
						step(true);
						dropCounter++;
					}
				}

				// Compute percent value
				if (duration) {
					percent = (now - start) / duration;
					if (percent > 1) {
						percent = 1;
					}
				}

				// Execute step callback, then...
				var value = easingMethod ? easingMethod(percent) : percent;
				if ((stepCallback(value, now, render) === false || percent === 1) && render) {
					running[id] = null;
					completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
				} else if (render) {
					lastFrame = now;
					core.effect.Animate.requestAnimationFrame(step, root);
				}
			};

			// Mark as running
			running[id] = true;

			// Init first step
			core.effect.Animate.requestAnimationFrame(step, root);

			// Return unique animation ID
			return id;
		}
	};
})(window);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});
/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

var Scroller;

(function () {
			var NOOP = function NOOP() {};

			/**
    * A pure logic 'component' for 'virtual' scrolling/zooming.
    */
			/*callback   有什么用*/
			Scroller = function Scroller(callback, options) {

						this.__callback = callback;

						this.options = {

									/** Enable scrolling on x-axis */
									scrollingX: true,

									/** Enable scrolling on y-axis */
									scrollingY: true,

									/** Enable animations for deceleration, snap back, zooming and scrolling */
									animating: true,

									/** duration for animations triggered by scrollTo/zoomTo */
									animationDuration: 250,

									/** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
									bouncing: true,

									/** Enable locking to the main axis if user moves only slightly on one of them at start */
									locking: true,

									/** Enable pagination mode (switching between full page content panes) */
									paging: false,

									/** Enable snapping of content to a configured pixel grid */
									snapping: false,

									/** Enable zooming of content via API, fingers and mouse wheel */
									zooming: false,

									/** Minimum zoom level */
									minZoom: 0.5,

									/** Maximum zoom level */
									maxZoom: 3,

									/** Multiply or decrease scrolling speed **/
									speedMultiplier: 1,

									/** Callback that is fired on the later of touch end or deceleration end,
         	provided that another scrolling action has not begun. Used to know
         	when to fade out a scrollbar. */
									scrollingComplete: NOOP,

									/** This configures the amount of change applied to deceleration when reaching boundaries  **/
									penetrationDeceleration: 0.03,

									/** This configures the amount of change applied to acceleration when reaching boundaries  **/
									penetrationAcceleration: 0.08

						};

						for (var key in options) {
									this.options[key] = options[key];
						}
			};

			// Easing Equations (c) 2003 Robert Penner, all rights reserved.
			// Open source under the BSD License.

			/**
    * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
   **/
			var easeOutCubic = function easeOutCubic(pos) {
						return Math.pow(pos - 1, 3) + 1;
			};

			/**
    * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
   **/
			var easeInOutCubic = function easeInOutCubic(pos) {
						if ((pos /= 0.5) < 1) {
									return 0.5 * Math.pow(pos, 3);
						}

						return 0.5 * (Math.pow(pos - 2, 3) + 2);
			};

			var members = {

						/*
      ---------------------------------------------------------------------------
      	INTERNAL FIELDS :: STATUS
      ---------------------------------------------------------------------------
      */

						/** {Boolean} Whether only a single finger is used in touch handling */
						__isSingleTouch: false,

						/** {Boolean} Whether a touch event sequence is in progress */
						__isTracking: false,

						/** {Boolean} Whether a deceleration animation went to completion. */
						__didDecelerationComplete: false,

						/**
       * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
       * a gesturestart event happens. This has higher priority than dragging.
       */
						__isGesturing: false,

						/**
       * {Boolean} Whether the user has moved by such a distance that we have enabled
       * dragging mode. Hint: It's only enabled after some pixels of movement to
       * not interrupt with clicks etc.
       */
						__isDragging: false,

						/**
       * {Boolean} Not touching and dragging anymore, and smoothly animating the
       * touch sequence using deceleration.
       */
						__isDecelerating: false,

						/**
       * {Boolean} Smoothly animating the currently configured change
       */
						__isAnimating: false,

						/*
      ---------------------------------------------------------------------------
      	INTERNAL FIELDS :: DIMENSIONS
      ---------------------------------------------------------------------------
      */

						/** {Integer} Available outer left position (from document perspective) */
						__clientLeft: 0,

						/** {Integer} Available outer top position (from document perspective) */
						__clientTop: 0,

						/** {Integer} Available outer width */
						__clientWidth: 0,

						/** {Integer} Available outer height */
						__clientHeight: 0,

						/** {Integer} Outer width of content */
						__contentWidth: 0,

						/** {Integer} Outer height of content */
						__contentHeight: 0,

						/** {Integer} Snapping width for content */
						__snapWidth: 100,

						/** {Integer} Snapping height for content */
						__snapHeight: 100,

						/** {Integer} Height to assign to refresh area */
						__refreshHeight: null,

						/** {Boolean} Whether the refresh process is enabled when the event is released now */
						__refreshActive: false,

						/** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
						__refreshActivate: null,

						/** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
						__refreshDeactivate: null,

						/** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
						__refreshStart: null,

						/** {Number} Zoom level */
						__zoomLevel: 1,

						/** {Number} Scroll position on x-axis */
						__scrollLeft: 0,

						/** {Number} Scroll position on y-axis */
						__scrollTop: 0,

						/** {Integer} Maximum allowed scroll position on x-axis */
						__maxScrollLeft: 0,

						/** {Integer} Maximum allowed scroll position on y-axis */
						__maxScrollTop: 0,

						/* {Number} Scheduled left position (final position when animating) */
						__scheduledLeft: 0,

						/* {Number} Scheduled top position (final position when animating) */
						__scheduledTop: 0,

						/* {Number} Scheduled zoom level (final scale when animating) */
						__scheduledZoom: 0,

						/*
      ---------------------------------------------------------------------------
      	INTERNAL FIELDS :: LAST POSITIONS
      ---------------------------------------------------------------------------
      */

						/** {Number} Left position of finger at start */
						__lastTouchLeft: null,

						/** {Number} Top position of finger at start */
						__lastTouchTop: null,

						/** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
						__lastTouchMove: null,

						/** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
						__positions: null,

						/*
      ---------------------------------------------------------------------------
      	INTERNAL FIELDS :: DECELERATION SUPPORT
      ---------------------------------------------------------------------------
      */

						/** {Integer} Minimum left scroll position during deceleration */
						__minDecelerationScrollLeft: null,

						/** {Integer} Minimum top scroll position during deceleration */
						__minDecelerationScrollTop: null,

						/** {Integer} Maximum left scroll position during deceleration */
						__maxDecelerationScrollLeft: null,

						/** {Integer} Maximum top scroll position during deceleration */
						__maxDecelerationScrollTop: null,

						/** {Number} Current factor to modify horizontal scroll position with on every step */
						__decelerationVelocityX: null,

						/** {Number} Current factor to modify vertical scroll position with on every step */
						__decelerationVelocityY: null,

						/*
      ---------------------------------------------------------------------------
      	PUBLIC API
      ---------------------------------------------------------------------------
      */

						/**
       * Configures the dimensions of the client (outer) and content (inner) elements.
       * Requires the available space for the outer element and the outer size of the inner element.
       * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
       *
       * @param clientWidth {Integer ? null} Inner width of outer element
       * @param clientHeight {Integer ? null} Inner height of outer element
       * @param contentWidth {Integer ? null} Outer width of inner element
       * @param contentHeight {Integer ? null} Outer height of inner element
       */
						setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {

									var self = this;

									// Only update values which are defined
									if (clientWidth === +clientWidth) {
												self.__clientWidth = clientWidth;
									}

									if (clientHeight === +clientHeight) {
												self.__clientHeight = clientHeight;
									}

									if (contentWidth === +contentWidth) {
												self.__contentWidth = contentWidth;
									}

									if (contentHeight === +contentHeight) {
												self.__contentHeight = contentHeight;
									}

									// Refresh maximums
									self.__computeScrollMax();

									// Refresh scroll position
									self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
						},

						/**
       * Sets the client coordinates in relation to the document.
       *
       * @param left {Integer ? 0} Left position of outer element
       * @param top {Integer ? 0} Top position of outer element
       */
						setPosition: function setPosition(left, top) {

									var self = this;

									self.__clientLeft = left || 0;
									self.__clientTop = top || 0;
						},

						/**
       * Configures the snapping (when snapping is active)
       *
       * @param width {Integer} Snapping width
       * @param height {Integer} Snapping height
       */
						setSnapSize: function setSnapSize(width, height) {

									var self = this;

									self.__snapWidth = width;
									self.__snapHeight = height;
						},

						/**
       * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
       * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
       * the official Twitter client.
       *
       * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
       * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
       * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
       * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
       */
						activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {

									var self = this;

									self.__refreshHeight = height;
									self.__refreshActivate = activateCallback;
									self.__refreshDeactivate = deactivateCallback;
									self.__refreshStart = startCallback;
						},

						/**
       * Starts pull-to-refresh manually.
       */
						triggerPullToRefresh: function triggerPullToRefresh() {
									// Use publish instead of scrollTo to allow scrolling to out of boundary position
									// We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
									this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

									if (this.__refreshStart) {
												this.__refreshStart();
									}
						},

						/**
       * Signalizes that pull-to-refresh is finished.
       */
						finishPullToRefresh: function finishPullToRefresh() {

									var self = this;

									self.__refreshActive = false;
									if (self.__refreshDeactivate) {
												self.__refreshDeactivate();
									}

									self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
						},

						/**
       * Returns the scroll position and zooming values
       *
       * @return {Map} `left` and `top` scroll position and `zoom` level
       */
						getValues: function getValues() {

									var self = this;

									return {
												left: self.__scrollLeft,
												top: self.__scrollTop,
												zoom: self.__zoomLevel
									};
						},

						/**
       * Returns the maximum scroll values
       *
       * @return {Map} `left` and `top` maximum scroll values
       */
						getScrollMax: function getScrollMax() {

									var self = this;

									return {
												left: self.__maxScrollLeft,
												top: self.__maxScrollTop
									};
						},

						/**
       * Zooms to the given level. Supports optional animation. Zooms
       * the center when no coordinates are given.
       *
       * @param level {Number} Level to zoom to
       * @param animate {Boolean ? false} Whether to use animation
       * @param originLeft {Number ? null} Zoom in at given left coordinate
       * @param originTop {Number ? null} Zoom in at given top coordinate
       * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
       */
						zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {

									var self = this;

									if (!self.options.zooming) {
												throw new Error("Zooming is not enabled!");
									}

									// Add callback if exists
									if (callback) {
												self.__zoomComplete = callback;
									}

									// Stop deceleration
									if (self.__isDecelerating) {
												core.effect.Animate.stop(self.__isDecelerating);
												self.__isDecelerating = false;
									}

									var oldLevel = self.__zoomLevel;

									// Normalize input origin to center of viewport if not defined
									if (originLeft == null) {
												originLeft = self.__clientWidth / 2;
									}

									if (originTop == null) {
												originTop = self.__clientHeight / 2;
									}

									// Limit level according to configuration
									level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

									// Recompute maximum values while temporary tweaking maximum scroll ranges
									self.__computeScrollMax(level);

									// Recompute left and top coordinates based on new zoom level
									var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
									var top = (originTop + self.__scrollTop) * level / oldLevel - originTop;

									// Limit x-axis
									if (left > self.__maxScrollLeft) {
												left = self.__maxScrollLeft;
									} else if (left < 0) {
												left = 0;
									}

									// Limit y-axis
									if (top > self.__maxScrollTop) {
												top = self.__maxScrollTop;
									} else if (top < 0) {
												top = 0;
									}

									// Push values out
									self.__publish(left, top, level, animate);
						},

						/**
       * Zooms the content by the given factor.
       *
       * @param factor {Number} Zoom by given factor
       * @param animate {Boolean ? false} Whether to use animation
       * @param originLeft {Number ? 0} Zoom in at given left coordinate
       * @param originTop {Number ? 0} Zoom in at given top coordinate
       * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
       */
						zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {

									var self = this;

									self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
						},

						/**
       * Scrolls to the given position. Respect limitations and snapping automatically.
       *
       * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
       * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
       * @param animate {Boolean?false} Whether the scrolling should happen using an animation
       * @param zoom {Number?null} Zoom level to go to
       */
						scrollTo: function scrollTo(left, top, animate, zoom) {

									var self = this;

									// Stop deceleration
									if (self.__isDecelerating) {
												core.effect.Animate.stop(self.__isDecelerating);
												self.__isDecelerating = false;
									}

									// Correct coordinates based on new zoom level
									if (zoom != null && zoom !== self.__zoomLevel) {

												if (!self.options.zooming) {
															throw new Error("Zooming is not enabled!");
												}

												left *= zoom;
												top *= zoom;

												// Recompute maximum values while temporary tweaking maximum scroll ranges
												self.__computeScrollMax(zoom);
									} else {

												// Keep zoom when not defined
												zoom = self.__zoomLevel;
									}

									if (!self.options.scrollingX) {

												left = self.__scrollLeft;
									} else {

												if (self.options.paging) {
															left = Math.round(left / self.__clientWidth) * self.__clientWidth;
												} else if (self.options.snapping) {
															left = Math.round(left / self.__snapWidth) * self.__snapWidth;
												}
									}

									if (!self.options.scrollingY) {

												top = self.__scrollTop;
									} else {

												if (self.options.paging) {
															top = Math.round(top / self.__clientHeight) * self.__clientHeight;
												} else if (self.options.snapping) {
															top = Math.round(top / self.__snapHeight) * self.__snapHeight;
												}
									}

									// Limit for allowed ranges
									left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
									top = Math.max(Math.min(self.__maxScrollTop, top), 0);

									// Don't animate when no change detected, still call publish to make sure
									// that rendered position is really in-sync with internal data
									if (left === self.__scrollLeft && top === self.__scrollTop) {
												animate = false;
									}

									// Publish new values
									if (!self.__isTracking) {
												self.__publish(left, top, zoom, animate);
									}
						},

						/**
       * Scroll by the given offset
       *
       * @param left {Number ? 0} Scroll x-axis by given offset
       * @param top {Number ? 0} Scroll x-axis by given offset
       * @param animate {Boolean ? false} Whether to animate the given change
       */
						scrollBy: function scrollBy(left, top, animate) {

									var self = this;

									var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
									var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;

									self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
						},

						/*
      ---------------------------------------------------------------------------
      	EVENT CALLBACKS
      ---------------------------------------------------------------------------
      */

						/**
       * Mouse wheel handler for zooming support
       */
						doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {

									var self = this;
									var change = wheelDelta > 0 ? 0.97 : 1.03;

									return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
						},

						/**
       * Touch start handler for scrolling support
       */
						doTouchStart: function doTouchStart(touches, timeStamp) {

									// Array-like check is enough here
									if (touches.length == null) {
												throw new Error("Invalid touch list: " + touches);
									}

									if (timeStamp instanceof Date) {
												timeStamp = timeStamp.valueOf();
									}
									if (typeof timeStamp !== "number") {
												throw new Error("Invalid timestamp value: " + timeStamp);
									}

									var self = this;

									// Reset interruptedAnimation flag
									self.__interruptedAnimation = true;

									// Stop deceleration
									if (self.__isDecelerating) {
												core.effect.Animate.stop(self.__isDecelerating);
												self.__isDecelerating = false;
												self.__interruptedAnimation = true;
									}

									// Stop animation
									if (self.__isAnimating) {
												core.effect.Animate.stop(self.__isAnimating);
												self.__isAnimating = false;
												self.__interruptedAnimation = true;
									}

									// Use center point when dealing with two fingers
									var currentTouchLeft, currentTouchTop;
									var isSingleTouch = touches.length === 1;
									if (isSingleTouch) {
												currentTouchLeft = touches[0].pageX;
												currentTouchTop = touches[0].pageY;
									} else {
												currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
												currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
									}

									// Store initial positions
									self.__initialTouchLeft = currentTouchLeft;
									self.__initialTouchTop = currentTouchTop;

									// Store current zoom level
									self.__zoomLevelStart = self.__zoomLevel;

									// Store initial touch positions
									self.__lastTouchLeft = currentTouchLeft;
									self.__lastTouchTop = currentTouchTop;

									// Store initial move time stamp
									self.__lastTouchMove = timeStamp;

									// Reset initial scale
									self.__lastScale = 1;

									// Reset locking flags
									self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
									self.__enableScrollY = !isSingleTouch && self.options.scrollingY;

									// Reset tracking flag
									self.__isTracking = true;

									// Reset deceleration complete flag
									self.__didDecelerationComplete = false;

									// Dragging starts directly with two fingers, otherwise lazy with an offset
									self.__isDragging = !isSingleTouch;

									// Some features are disabled in multi touch scenarios
									self.__isSingleTouch = isSingleTouch;

									// Clearing data structure
									self.__positions = [];
						},

						/**
       * Touch move handler for scrolling support
       */
						doTouchMove: function doTouchMove(touches, timeStamp, scale) {

									// Array-like check is enough here
									if (touches.length == null) {
												throw new Error("Invalid touch list: " + touches);
									}

									if (timeStamp instanceof Date) {
												timeStamp = timeStamp.valueOf();
									}
									if (typeof timeStamp !== "number") {
												throw new Error("Invalid timestamp value: " + timeStamp);
									}

									var self = this;

									// Ignore event when tracking is not enabled (event might be outside of element)
									if (!self.__isTracking) {
												return;
									}

									var currentTouchLeft, currentTouchTop;

									// Compute move based around of center of fingers
									if (touches.length === 2) {
												currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
												currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
									} else {
												currentTouchLeft = touches[0].pageX;
												currentTouchTop = touches[0].pageY;
									}

									var positions = self.__positions;

									// Are we already is dragging mode?
									if (self.__isDragging) {

												// Compute move distance
												var moveX = currentTouchLeft - self.__lastTouchLeft;
												var moveY = currentTouchTop - self.__lastTouchTop;

												// Read previous scroll position and zooming
												var scrollLeft = self.__scrollLeft;
												var scrollTop = self.__scrollTop;
												var level = self.__zoomLevel;

												// Work with scaling
												if (scale != null && self.options.zooming) {

															var oldLevel = level;

															// Recompute level based on previous scale and new scale
															level = level / self.__lastScale * scale;

															// Limit level according to configuration
															level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

															// Only do further compution when change happened
															if (oldLevel !== level) {

																		// Compute relative event position to container
																		var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
																		var currentTouchTopRel = currentTouchTop - self.__clientTop;

																		// Recompute left and top coordinates based on new zoom level
																		scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
																		scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

																		// Recompute max scroll values
																		self.__computeScrollMax(level);
															}
												}

												if (self.__enableScrollX) {

															scrollLeft -= moveX * this.options.speedMultiplier;
															var maxScrollLeft = self.__maxScrollLeft;

															if (scrollLeft > maxScrollLeft || scrollLeft < 0) {

																		// Slow down on the edges
																		if (self.options.bouncing) {

																					scrollLeft += moveX / 2 * this.options.speedMultiplier;
																		} else if (scrollLeft > maxScrollLeft) {

																					scrollLeft = maxScrollLeft;
																		} else {

																					scrollLeft = 0;
																		}
															}
												}

												// Compute new vertical scroll position
												if (self.__enableScrollY) {

															scrollTop -= moveY * this.options.speedMultiplier;
															var maxScrollTop = self.__maxScrollTop;

															if (scrollTop > maxScrollTop || scrollTop < 0) {

																		// Slow down on the edges
																		if (self.options.bouncing) {

																					scrollTop += moveY / 2 * this.options.speedMultiplier;

																					// Support pull-to-refresh (only when only y is scrollable)
																					if (!self.__enableScrollX && self.__refreshHeight != null) {

																								if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {

																											self.__refreshActive = true;
																											if (self.__refreshActivate) {
																														self.__refreshActivate();
																											}
																								} else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {

																											self.__refreshActive = false;
																											if (self.__refreshDeactivate) {
																														self.__refreshDeactivate();
																											}
																								}
																					}
																		} else if (scrollTop > maxScrollTop) {

																					scrollTop = maxScrollTop;
																		} else {

																					scrollTop = 0;
																		}
															}
												}

												// Keep list from growing infinitely (holding min 10, max 20 measure points)
												if (positions.length > 60) {
															positions.splice(0, 30);
												}

												// Track scroll movement for decleration
												positions.push(scrollLeft, scrollTop, timeStamp);

												// Sync scroll position
												self.__publish(scrollLeft, scrollTop, level);

												// Otherwise figure out whether we are switching into dragging mode now.
									} else {

												var minimumTrackingForScroll = self.options.locking ? 3 : 0;
												var minimumTrackingForDrag = 5;

												var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
												var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

												self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
												self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;

												positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);

												self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
												if (self.__isDragging) {
															self.__interruptedAnimation = false;
												}
									}

									// Update last touch positions and time stamp for next event
									self.__lastTouchLeft = currentTouchLeft;
									self.__lastTouchTop = currentTouchTop;
									self.__lastTouchMove = timeStamp;
									self.__lastScale = scale;
						},

						/**
       * Touch end handler for scrolling support
       */
						doTouchEnd: function doTouchEnd(timeStamp) {

									if (timeStamp instanceof Date) {
												timeStamp = timeStamp.valueOf();
									}
									if (typeof timeStamp !== "number") {
												throw new Error("Invalid timestamp value: " + timeStamp);
									}

									var self = this;

									// Ignore event when tracking is not enabled (no touchstart event on element)
									// This is required as this listener ('touchmove') sits on the document and not on the element itself.
									if (!self.__isTracking) {
												return;
									}

									// Not touching anymore (when two finger hit the screen there are two touch end events)
									self.__isTracking = false;

									// Be sure to reset the dragging flag now. Here we also detect whether
									// the finger has moved fast enough to switch into a deceleration animation.
									if (self.__isDragging) {

												// Reset dragging flag
												self.__isDragging = false;

												// Start deceleration
												// Verify that the last move detected was in some relevant time frame
												if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {

															// Then figure out what the scroll position was about 100ms ago
															var positions = self.__positions;
															var endPos = positions.length - 1;
															var startPos = endPos;

															// Move pointer to position measured 100ms ago
															for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
																		startPos = i;
															}

															// If start and stop position is identical in a 100ms timeframe,
															// we cannot compute any useful deceleration.
															if (startPos !== endPos) {

																		// Compute relative movement between these two points
																		var timeOffset = positions[endPos] - positions[startPos];
																		var movedLeft = self.__scrollLeft - positions[startPos - 2];
																		var movedTop = self.__scrollTop - positions[startPos - 1];

																		// Based on 50ms compute the movement to apply for each render step
																		self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
																		self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

																		// How much velocity is required to start the deceleration
																		var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1;

																		// Verify that we have enough velocity to start deceleration
																		if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {

																					// Deactivate pull-to-refresh when decelerating
																					if (!self.__refreshActive) {
																								self.__startDeceleration(timeStamp);
																					}
																		} else {
																					self.options.scrollingComplete();
																		}
															} else {
																		self.options.scrollingComplete();
															}
												} else if (timeStamp - self.__lastTouchMove > 100) {
															self.options.scrollingComplete();
												}
									}

									// If this was a slower move it is per default non decelerated, but this
									// still means that we want snap back to the bounds which is done here.
									// This is placed outside the condition above to improve edge case stability
									// e.g. touchend fired without enabled dragging. This should normally do not
									// have modified the scroll positions or even showed the scrollbars though.
									if (!self.__isDecelerating) {

												if (self.__refreshActive && self.__refreshStart) {

															// Use publish instead of scrollTo to allow scrolling to out of boundary position
															// We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
															self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);

															if (self.__refreshStart) {
																		self.__refreshStart();
															}
												} else {

															if (self.__interruptedAnimation || self.__isDragging) {
																		self.options.scrollingComplete();
															}
															self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel);

															// Directly signalize deactivation (nothing todo on refresh?)
															if (self.__refreshActive) {

																		self.__refreshActive = false;
																		if (self.__refreshDeactivate) {
																					self.__refreshDeactivate();
																		}
															}
												}
									}

									// Fully cleanup list
									self.__positions.length = 0;
						},

						/*
      ---------------------------------------------------------------------------
      	PRIVATE API
      ---------------------------------------------------------------------------
      */

						/**
       * Applies the scroll position to the content element
       *
       * @param left {Number} Left scroll position
       * @param top {Number} Top scroll position
       * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
       */
						__publish: function __publish(left, top, zoom, animate) {

									var self = this;

									// Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
									var wasAnimating = self.__isAnimating;
									if (wasAnimating) {
												core.effect.Animate.stop(wasAnimating);
												self.__isAnimating = false;
									}

									if (animate && self.options.animating) {

												// Keep scheduled positions for scrollBy/zoomBy functionality
												self.__scheduledLeft = left;
												self.__scheduledTop = top;
												self.__scheduledZoom = zoom;

												var oldLeft = self.__scrollLeft;
												var oldTop = self.__scrollTop;
												var oldZoom = self.__zoomLevel;

												var diffLeft = left - oldLeft;
												var diffTop = top - oldTop;
												var diffZoom = zoom - oldZoom;

												var step = function step(percent, now, render) {

															if (render) {

																		self.__scrollLeft = oldLeft + diffLeft * percent;
																		self.__scrollTop = oldTop + diffTop * percent;
																		self.__zoomLevel = oldZoom + diffZoom * percent;

																		// Push values out
																		if (self.__callback) {
																					self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
																		}
															}
												};

												var verify = function verify(id) {
															return self.__isAnimating === id;
												};

												var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
															if (animationId === self.__isAnimating) {
																		self.__isAnimating = false;
															}
															if (self.__didDecelerationComplete || wasFinished) {
																		self.options.scrollingComplete();
															}

															if (self.options.zooming) {
																		self.__computeScrollMax();
																		if (self.__zoomComplete) {
																					self.__zoomComplete();
																					self.__zoomComplete = null;
																		}
															}
												};

												// When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
												self.__isAnimating = core.effect.Animate.start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
									} else {

												self.__scheduledLeft = self.__scrollLeft = left;
												self.__scheduledTop = self.__scrollTop = top;
												self.__scheduledZoom = self.__zoomLevel = zoom;

												// Push values out
												if (self.__callback) {
															self.__callback(left, top, zoom);
												}

												// Fix max scroll ranges
												if (self.options.zooming) {
															self.__computeScrollMax();
															if (self.__zoomComplete) {
																		self.__zoomComplete();
																		self.__zoomComplete = null;
															}
												}
									}
						},

						/**
       * Recomputes scroll minimum values based on client dimensions and content dimensions.
       */
						__computeScrollMax: function __computeScrollMax(zoomLevel) {

									var self = this;

									if (zoomLevel == null) {
												zoomLevel = self.__zoomLevel;
									}

									self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
									self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
						},

						/*
      ---------------------------------------------------------------------------
      	ANIMATION (DECELERATION) SUPPORT
      ---------------------------------------------------------------------------
      */

						/**
       * Called when a touch sequence end and the speed of the finger was high enough
       * to switch into deceleration mode.
       */
						__startDeceleration: function __startDeceleration(timeStamp) {

									var self = this;

									if (self.options.paging) {

												var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
												var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
												var clientWidth = self.__clientWidth;
												var clientHeight = self.__clientHeight;

												// We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
												// Each page should have exactly the size of the client area.
												self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
												self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
												self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
												self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
									} else {

												self.__minDecelerationScrollLeft = 0;
												self.__minDecelerationScrollTop = 0;
												self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
												self.__maxDecelerationScrollTop = self.__maxScrollTop;
									}

									// Wrap class method
									var step = function step(percent, now, render) {
												self.__stepThroughDeceleration(render);
									};

									// How much velocity is required to keep the deceleration running
									var minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001;

									// Detect whether it's still worth to continue animating steps
									// If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
									var verify = function verify() {
												var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
												if (!shouldContinue) {
															self.__didDecelerationComplete = true;
												}
												return shouldContinue;
									};

									var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
												self.__isDecelerating = false;
												if (self.__didDecelerationComplete) {
															self.options.scrollingComplete();
												}

												// Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
												self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping);
									};

									// Start animation and switch on flag
									self.__isDecelerating = core.effect.Animate.start(step, verify, completed);
						},

						/**
       * Called on every step of the animation
       *
       * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
       */
						__stepThroughDeceleration: function __stepThroughDeceleration(render) {

									var self = this;

									//
									// COMPUTE NEXT SCROLL POSITION
									//

									// Add deceleration to scroll position
									var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
									var scrollTop = self.__scrollTop + self.__decelerationVelocityY;

									//
									// HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
									//

									if (!self.options.bouncing) {

												var scrollLeftFixed = Math.max(Math.min(self.__maxDecelerationScrollLeft, scrollLeft), self.__minDecelerationScrollLeft);
												if (scrollLeftFixed !== scrollLeft) {
															scrollLeft = scrollLeftFixed;
															self.__decelerationVelocityX = 0;
												}

												var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);
												if (scrollTopFixed !== scrollTop) {
															scrollTop = scrollTopFixed;
															self.__decelerationVelocityY = 0;
												}
									}

									//
									// UPDATE SCROLL POSITION
									//

									if (render) {

												self.__publish(scrollLeft, scrollTop, self.__zoomLevel);
									} else {

												self.__scrollLeft = scrollLeft;
												self.__scrollTop = scrollTop;
									}

									//
									// SLOW DOWN
									//

									// Slow down velocity on every iteration
									if (!self.options.paging) {

												// This is the factor applied to every iteration of the animation
												// to slow down the process. This should emulate natural behavior where
												// objects slow down when the initiator of the movement is removed
												var frictionFactor = 0.95;

												self.__decelerationVelocityX *= frictionFactor;
												self.__decelerationVelocityY *= frictionFactor;
									}

									//
									// BOUNCING SUPPORT
									//

									if (self.options.bouncing) {

												var scrollOutsideX = 0;
												var scrollOutsideY = 0;

												// This configures the amount of change applied to deceleration/acceleration when reaching boundaries
												var penetrationDeceleration = self.options.penetrationDeceleration;
												var penetrationAcceleration = self.options.penetrationAcceleration;

												// Check limits
												if (scrollLeft < self.__minDecelerationScrollLeft) {
															scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
												} else if (scrollLeft > self.__maxDecelerationScrollLeft) {
															scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
												}

												if (scrollTop < self.__minDecelerationScrollTop) {
															scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
												} else if (scrollTop > self.__maxDecelerationScrollTop) {
															scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
												}

												// Slow down until slow enough, then flip back to snap position
												if (scrollOutsideX !== 0) {
															if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
																		self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
															} else {
																		self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
															}
												}

												if (scrollOutsideY !== 0) {
															if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
																		self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
															} else {
																		self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
															}
												}
									}
						}
			};

			// Copy over members to prototype
			for (var key in members) {
						Scroller.prototype[key] = members[key];
			}
})();

exports.default = Scroller;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = renderUtil;
function renderUtil(content) {
    var global = window;
    var docStyle = document.documentElement.style;
    var engine;
    if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
        engine = 'presto';
    } else if ('MozAppearance' in docStyle) {
        engine = 'gecko';
    } else if ('WebkitAppearance' in docStyle) {
        engine = 'webkit';
    } else if (typeof navigator.cpuClass === 'string') {
        engine = 'trident';
    }

    var vendorPrefix = {
        trident: 'ms',
        gecko: 'Moz',
        webkit: 'Webkit',
        presto: 'O'
    }[engine];

    var helperElem = document.createElement("div");
    var undef;

    var perspectiveProperty = vendorPrefix + "Perspective";
    var transformProperty = vendorPrefix + "Transform";

    if (helperElem.style[perspectiveProperty] !== undef) {

        return function (left, top, zoom) {
            content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')';
        };
    } else if (helperElem.style[transformProperty] !== undef) {
        return function (left, top, zoom) {
            content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px) scale(' + zoom + ')';
        };
    } else {
        return function (left, top, zoom) {
            content.style.marginLeft = left ? -left / zoom + 'px' : '';
            content.style.marginTop = top ? -top / zoom + 'px' : '';
            content.style.zoom = zoom || '';
        };
    }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-infinite-scroll2" }, [
    _c("div", { ref: "container", staticClass: " container" }, [
      _c(
        "div",
        { ref: "content", staticClass: "content" },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "t-loading",
            { staticClass: "loading", attrs: { loading: _vm.isLoadding } },
            [_vm._v("拉取加载")]
          ),
          _vm._v(" "),
          _c(
            "t-loading",
            { staticClass: "loading", attrs: { loading: _vm.loadding } },
            [_vm._v("加载ing")]
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { height: "45px" } })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { ref: "hook", staticClass: "hook" })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-bb34962e", esExports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_09367959_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_mark_vue__ = __webpack_require__(89);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09367959"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_mark_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_09367959_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_mark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\mark\\mark.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09367959", Component.options)
  } else {
    hotAPI.reload("data-v-09367959", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("acc3bc70", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09367959\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./mark.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09367959\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./mark.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-mark[data-v-09367959] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 98;\r\n  background: #333;\r\n  opacity: 0.5;\r\n  bottom: 0;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/mark/application/index/view/components/mark/mark.vue"],"names":[],"mappings":";AAgBA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,UAAA;CACA","file":"mark.vue","sourcesContent":["<template>\r\n  <div class=\"t-mark\" :show=\"show\">\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  props: {\r\n    show: Boolean\r\n  },\r\n  created() {}\r\n};\r\n</script>\r\n<style scoped>\r\n.t-mark {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 98;\r\n  background: #333;\r\n  opacity: 0.5;\r\n  bottom: 0;\r\n}\r\n</style>\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-mark", attrs: { show: _vm.show } })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-09367959", esExports)
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickItem = exports.Pick = undefined;

var _pick = __webpack_require__(91);

var _pick2 = _interopRequireDefault(_pick);

var _pick_item = __webpack_require__(95);

var _pick_item2 = _interopRequireDefault(_pick_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Pick = _pick2.default;
exports.PickItem = _pick_item2.default;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_1e22edd9_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e22edd9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_1e22edd9_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\pick\\pick.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e22edd9", Component.options)
  } else {
    hotAPI.reload("data-v-1e22edd9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e499c174", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e22edd9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./pick.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e22edd9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./pick.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n._center_mark[data-v-1e22edd9] {\r\n  position: absolute;\r\n  height: 40px;\r\n  background: #222;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n  top: 80px;\n}\n.t-pick-container[data-v-1e22edd9] {\r\n  height: 200px;\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  bottom: 0px;\r\n  background: #eeee;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\n}\n.t-pick-content[data-v-1e22edd9] {\r\n  -webkit-transform-origin: left top;\r\n  -webkit-transform: translateZ(0);\r\n  -moz-transform-origin: left top;\r\n  -moz-transform: translateZ(0);\r\n  -ms-transform-origin: left top;\r\n  -ms-transform: translateZ(0);\r\n  -o-transform-origin: left top;\r\n  -o-transform: translateZ(0);\r\n  transform-origin: left top;\r\n  transform: translateZ(0);\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/pick/application/index/view/components/pick/pick.vue"],"names":[],"mappings":";AA+HA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;CACA;AACA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,0BAAA;EAGA,qBAAA;EACA,kBAAA;CACA;AACA;EACA,mCAAA;EACA,iCAAA;EACA,gCAAA;EACA,8BAAA;EACA,+BAAA;EACA,6BAAA;EACA,8BAAA;EACA,4BAAA;EACA,2BAAA;EACA,yBAAA;CACA","file":"pick.vue","sourcesContent":["<template>\r\n  <div class=\"t-pick t-pick-container\" ref=\"container\" :show=\"show\">\r\n    <div class=\"t-pick-content\" ref=\"content\">\r\n      <t-pick-item v-for=\"(item,key) in 3\" :key=\"key+'none'\"> </t-pick-item>\r\n      <t-pick-item v-for=\"(item,key) in ListData\" :key=\"key\">\r\n        {{ListItemKey?item[ListItemKey]:item}}\r\n      </t-pick-item>\r\n    </div>\r\n    <div class=\"_center_mark\"></div>\r\n  </div>\r\n\r\n</template>\r\n<script>\r\n/* 1.生成mark */\r\n/* 2.生成底部div */\r\n/* 3.根据数据生成scroll */\r\n/* 4,操作滚动，一个一个滚动 */\r\nimport Scroll from \"../scroll/scroll\";\r\nexport default {\r\n  name: \"t-pick\",\r\n  data() {\r\n    return {\r\n      currentPage: 2,\r\n      childContext: null\r\n    };\r\n  },\r\n  props: {\r\n    show: Boolean,\r\n    ListData: Array,\r\n    ListItemKey: String,\r\n    mark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    value: {\r\n      type: [String, Number, Object],\r\n      default: null\r\n    }\r\n  },\r\n  methods: {\r\n    findCurrentPageByValue() {\r\n      var self = this;\r\n      var value = this.$props.value;\r\n      var index = false;\r\n      var listItemKey = self.$props.ListItemKey;\r\n      if (value) {\r\n        self.$props.ListData.forEach((item, _index) => {\r\n          /* 加入listItemKey判断 */\r\n          if (listItemKey) {\r\n            if (item[listItemKey] == value[listItemKey]) {\r\n              index = _index;\r\n            }\r\n          } else {\r\n            if (item == value) {\r\n              index = _index;\r\n            }\r\n          }\r\n        }); //end：foreach\r\n        return index + 1;\r\n      } else {\r\n        return undefined;\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (this.$props.mark) {\r\n      this.$mark();\r\n    }\r\n    this.dom_container = this.$refs[\"container\"];\r\n    this.dom_content = this.$refs[\"content\"];\r\n    self.$scroll = new Scroll(this.dom_container, this.dom_content, {\r\n      start({ top }) {\r\n        /* 加入方向判断，让操作更加准确 */\r\n        this.currentTop = top;\r\n      },\r\n      move({ top }) {\r\n        if (top - this.currentTop > 0) {\r\n          this.dire = \"up\";\r\n        } else {\r\n          this.dire = \"down\";\r\n        }\r\n        this.currentTop = top;\r\n      },\r\n      end({ top }) {\r\n        // console.log(this.dire);\r\n        var keli = Math.ceil(top / 40);\r\n        if (this.dire == \"down\") {\r\n          keli = Math.round(top / 40);\r\n        }\r\n\r\n        if (keli <= 0) {\r\n          keli = 1;\r\n        }\r\n\r\n        /* 加入最大的拉动长度 */\r\n        if (keli > self.$props.ListData.length) {\r\n          keli = self.$props.ListData.length;\r\n        }\r\n\r\n        self.$data.currentPage = keli;\r\n        // console.log(\"tyop\", top);\r\n        // console.log(\"top / 40\", top / 40);\r\n        // console.log(\"keli\", keli);\r\n        self.$scroll.scrollTo(0, keli * 40);\r\n        self.$emit(\"callback\", {\r\n          key: self.$data.currentPage - 1,\r\n          value: self.$props.ListData[self.$data.currentPage - 1]\r\n        });\r\n      }\r\n    });\r\n    self.$scroll.setDimensions(\r\n      this.dom_container.clientWidth,\r\n      this.dom_container.clientHeight,\r\n      this.dom_content.clientWidth,\r\n      this.dom_content.clientHeight + 30 * 3\r\n    );\r\n    /* 一开始滚动3个 */\r\n    /* 加入一开始根据value得到currentPage */\r\n    this.$data.currentPage = this.findCurrentPageByValue(this.$props.value)\r\n      ? this.findCurrentPageByValue(this.$props.value)\r\n      : 3;\r\n    self.$scroll.scrollTo(0, this.$data.currentPage * 40);\r\n  }\r\n};\r\n</script>\r\n<style scoped>\r\n._center_mark {\r\n  position: absolute;\r\n  height: 40px;\r\n  background: #222;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n  top: 80px;\r\n}\r\n.t-pick-container {\r\n  height: 200px;\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  bottom: 0px;\r\n  background: #eeee;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n.t-pick-content {\r\n  -webkit-transform-origin: left top;\r\n  -webkit-transform: translateZ(0);\r\n  -moz-transform-origin: left top;\r\n  -moz-transform: translateZ(0);\r\n  -ms-transform-origin: left top;\r\n  -ms-transform: translateZ(0);\r\n  -o-transform-origin: left top;\r\n  -o-transform: translateZ(0);\r\n  transform-origin: left top;\r\n  transform: translateZ(0);\r\n}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "t-pick t-pick-container",
      attrs: { show: _vm.show }
    },
    [
      _c(
        "div",
        { ref: "content", staticClass: "t-pick-content" },
        [
          _vm._l(3, function(item, key) {
            return _c("t-pick-item", { key: key + "none" })
          }),
          _vm._v(" "),
          _vm._l(_vm.ListData, function(item, key) {
            return _c("t-pick-item", { key: key }, [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.ListItemKey ? item[_vm.ListItemKey] : item) +
                  "\n    "
              )
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "_center_mark" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1e22edd9", esExports)
  }
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_31cf42e9_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_item_vue__ = __webpack_require__(98);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31cf42e9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_31cf42e9_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\pick\\pick_item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31cf42e9", Component.options)
  } else {
    hotAPI.reload("data-v-31cf42e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6bcd8201", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31cf42e9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./pick_item.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31cf42e9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./pick_item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-pick-item[data-v-31cf42e9] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  width: 100%;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/pick/application/index/view/components/pick/pick_item.vue"],"names":[],"mappings":";AAMA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;CACA","file":"pick_item.vue","sourcesContent":["<template>\r\n    <div class=\"t-pick-item\">\r\n        <slot />\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.t-pick-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n</style>\r\n\r\n<script>\r\nexport default {\r\n  name: \"t-pick-item\"\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-pick-item" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-31cf42e9", esExports)
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = undefined;

var _datePicker = __webpack_require__(100);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DatePicker = _datePicker2.default;

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_18819b39_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datePicker_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_18819b39_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\datePicker\\datePicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18819b39", Component.options)
  } else {
    hotAPI.reload("data-v-18819b39", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4feb0e3b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18819b39\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./datePicker.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18819b39\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./datePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-date-picker {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  z-index: 99;\n}\n.t-date-pickers {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  width: 100%;\n}\n.t-date-pickers .item {\r\n  width: 30%;\r\n  height: 200px;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #eeee;\n}\n.t-date-toolbtns {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  bottom: 200px;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding: 5px;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\n.t-date-toolbtns .t-button {\r\n  margin-right: 10px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/datePicker/application/index/view/components/datePicker/datePicker.vue"],"names":[],"mappings":";AACA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;CACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,sBAAA;EAAA,kCAAA;UAAA,0BAAA;CACA;AACA;EACA,mBAAA;CACA","file":"datePicker.vue","sourcesContent":["<style >\r\n.t-date-picker {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  z-index: 99;\r\n}\r\n.t-date-pickers {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.t-date-pickers .item {\r\n  width: 30%;\r\n  height: 200px;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #eeee;\r\n}\r\n.t-date-toolbtns {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  bottom: 200px;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.t-date-toolbtns .t-button {\r\n  margin-right: 10px;\r\n}\r\n</style>\r\n\r\n<template>\r\n  <div class=\"t-date-picker\" v-if=\"show\">\r\n    <div class=\"t-date-toolbtns\">\r\n      <t-button type='hollow'>取消</t-button>\r\n      <t-button @click.native=\"click_save\">确定</t-button>\r\n    </div>\r\n\r\n    <div class=\"t-date-pickers\">\r\n      <div class=\"item item-year\">\r\n        <t-pick :ListData=\"years\" :value=\"currentYear\" @callback=\"callback1\"></t-pick>\r\n      </div>\r\n      <div class=\"item item-month\">\r\n        <t-pick :ListData=\"months\" :value=\"currentMonth\" @callback=\"callback2\"></t-pick>\r\n      </div>\r\n      <div class=\"item item-day\">\r\n        <t-pick :ListData=\"days\" :value=\"currentDay\" @callback=\"callback3\"></t-pick>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</template>\r\n<script>\r\nimport Mark from \"../mark/mark.js\";\r\nfunction mGetDate(year, month) {\r\n  var d = new Date(year, month, 0);\r\n  return d.getDate();\r\n}\r\nexport default {\r\n  name: \"t-date-picker\",\r\n  props: {\r\n    show: {\r\n      type: Boolean,\r\n      value: false\r\n    },\r\n    year: {\r\n      type: [String, Number],\r\n      default: new Date().getFullYear()\r\n    },\r\n    month: {\r\n      type: [String, Number],\r\n      default: new Date().getMonth() + 1\r\n    },\r\n    day: {\r\n      type: [String, Number],\r\n      default: new Date().getDay()\r\n    }\r\n  },\r\n  model: {\r\n    prop: \"show\",\r\n    event: \"changeShow\"\r\n  },\r\n  data() {\r\n    var currnetDate = new Date();\r\n    var currentYear = this.$props.year;\r\n    var currentMonth = this.$props.month;\r\n    var currentDay = this.$props.day;\r\n    var { years, months, days } = this.fixed_date_list(\r\n      currentYear,\r\n      currentMonth,\r\n      currentDay\r\n    );\r\n    return {\r\n      years,\r\n      months,\r\n      currentYear,\r\n      currentMonth,\r\n      currentDay,\r\n      days\r\n    };\r\n  },\r\n  updated() {\r\n    this.$emit(\"callback\", {\r\n      year: this.currentYear,\r\n      month: this.currentMonth,\r\n      day: this.currentDay\r\n    });\r\n    var self = this;\r\n    if (self.$props.show) {\r\n      if (!self.$mark_el) {\r\n        self.$mark_el = self.$mark();\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (self.$props.show) {\r\n      if (!self.$mark_el) {\r\n        self.$mark_el = self.$mark();\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    fixed_date_list(currentYear, currentMonth, currentDay) {\r\n      var years = [];\r\n      for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {\r\n        years.push(i);\r\n      }\r\n      var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\r\n      var days = [];\r\n      for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {\r\n        days.push(i);\r\n      }\r\n      return {\r\n        years,\r\n        months,\r\n        days\r\n      };\r\n    },\r\n    click_save() {\r\n      this.$emit(\"sure\", {\r\n        year: this.currentYear,\r\n        month: this.currentMonth,\r\n        day: this.currentDay\r\n      });\r\n      this.$data.show = false;\r\n      this.$mark_el.closeMark();\r\n      this.$mark_el = null;\r\n      this.$emit(\"changeShow\", !this.$props.show);\r\n    },\r\n    callback1({ value }) {\r\n      this.currentYear = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    },\r\n    callback2({ value }) {\r\n      this.currentMonth = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    },\r\n    callback3({ value }) {\r\n      this.currentDay = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    }\r\n  }\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c("div", { staticClass: "t-date-picker" }, [
        _c(
          "div",
          { staticClass: "t-date-toolbtns" },
          [
            _c("t-button", { attrs: { type: "hollow" } }, [_vm._v("取消")]),
            _vm._v(" "),
            _c(
              "t-button",
              {
                nativeOn: {
                  click: function($event) {
                    return _vm.click_save($event)
                  }
                }
              },
              [_vm._v("确定")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "t-date-pickers" }, [
          _c(
            "div",
            { staticClass: "item item-year" },
            [
              _c("t-pick", {
                attrs: { ListData: _vm.years, value: _vm.currentYear },
                on: { callback: _vm.callback1 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-month" },
            [
              _c("t-pick", {
                attrs: { ListData: _vm.months, value: _vm.currentMonth },
                on: { callback: _vm.callback2 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-day" },
            [
              _c("t-pick", {
                attrs: { ListData: _vm.days, value: _vm.currentDay },
                on: { callback: _vm.callback3 }
              })
            ],
            1
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-18819b39", esExports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateTimePicker = undefined;

var _datetimePicker = __webpack_require__(105);

var _datetimePicker2 = _interopRequireDefault(_datetimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DateTimePicker = _datetimePicker2.default;

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_326b5a99_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datetimePicker_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetimePicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_326b5a99_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datetimePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\datetimePicker\\datetimePicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-326b5a99", Component.options)
  } else {
    hotAPI.reload("data-v-326b5a99", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4a407810", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-326b5a99\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./datetimePicker.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-326b5a99\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./datetimePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-datetime-picker {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  z-index: 99;\n}\n.t-datetime-pickers {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  width: 100%;\n}\n.t-datetime-pickers .item {\r\n  width: 20%;\r\n  height: 200px;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #eeee;\n}\n.t-date-toolbtns {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  bottom: 200px;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding: 5px;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\n.t-date-toolbtns .t-button {\r\n  margin-right: 10px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/datetimePicker/application/index/view/components/datetimePicker/datetimePicker.vue"],"names":[],"mappings":";AACA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;CACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,sBAAA;EAAA,kCAAA;UAAA,0BAAA;CACA;AACA;EACA,mBAAA;CACA","file":"datetimePicker.vue","sourcesContent":["<style>\r\n.t-datetime-picker {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  z-index: 99;\r\n}\r\n.t-datetime-pickers {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.t-datetime-pickers .item {\r\n  width: 20%;\r\n  height: 200px;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #eeee;\r\n}\r\n.t-date-toolbtns {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  bottom: 200px;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.t-date-toolbtns .t-button {\r\n  margin-right: 10px;\r\n}\r\n</style>\r\n\r\n<template>\r\n    <div class=\"t-datetime-picker\" v-if=\"show\">\r\n        <div class=\"t-date-toolbtns\">\r\n            <t-button type='hollow'>取消</t-button>\r\n            <t-button @click.native=\"click_save\">确定</t-button>\r\n        </div>\r\n        <div class=\"t-datetime-pickers\">\r\n            <div class=\"item item-year\">\r\n                <t-pick :value=\"2018\" @callback='callback1' :ListData=\"years\"></t-pick>\r\n            </div>\r\n            <div class=\"item item-month\">\r\n                <t-pick :value=\"11\" @callback='callback2' :ListData=\"months\"></t-pick>\r\n            </div>\r\n            <div class=\"item item-day\">\r\n                <t-pick :value=\"21\" @callback='callback3' :ListData=\"days\"></t-pick>\r\n            </div>\r\n            <div class=\"item item-hour\">\r\n                <t-pick :value=\"12\" @callback='callback4' :ListData=\"hours\"></t-pick>\r\n            </div>\r\n            <div class=\"item item-minutes\">\r\n                <t-pick :value=\"20\" @callback='callback5' :ListData=\"minutesArray\"></t-pick>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n<script>\r\nimport Mark from \"../mark/mark.js\";\r\nfunction mGetDate(year, month) {\r\n  var d = new Date(year, month, 0);\r\n  return d.getDate();\r\n}\r\nexport default {\r\n  name: \"t-datetime-picker\",\r\n  data() {\r\n    var currnetDate = new Date();\r\n    var currentYear = this.$props.year;\r\n    var currentMonth = this.$props.month;\r\n    var currentDay = this.$props.day;\r\n    var currentHour = this.$props.hour;\r\n    var currentMinutes = this.$props.minutes;\r\n    var { years, months, days, hours, minutesArray } = this.fixed_date_list(\r\n      currentYear,\r\n      currentMonth,\r\n      currentDay\r\n    );\r\n    return {\r\n      years,\r\n      months,\r\n      currentYear,\r\n      currentMonth,\r\n      currentDay,\r\n      days,\r\n      hours,\r\n      minutesArray\r\n    };\r\n  },\r\n  model: {\r\n    prop: \"show\",\r\n    event: \"changeShow\"\r\n  },\r\n  props: {\r\n    show: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    year: {\r\n      type: [String, Number],\r\n      default: new Date().getFullYear()\r\n    },\r\n    month: {\r\n      type: [String, Number],\r\n      default: new Date().getMonth() + 1\r\n    },\r\n    day: {\r\n      type: [String, Number],\r\n      default: new Date().getDay()\r\n    },\r\n    hour: {\r\n      type: [String, Number],\r\n      default: new Date().getHours()\r\n    },\r\n    minutes: {\r\n      type: [String, Number],\r\n      default: new Date().getMinutes()\r\n    }\r\n  },\r\n  updated() {\r\n    this.$emit(\"callback\", {\r\n      year: this.currentYear,\r\n      month: this.currentMonth,\r\n      day: this.currentDay,\r\n      hour: this.currentHour,\r\n      minutes: this.currentMinutes,\r\n      second: \"00\"\r\n    });\r\n    var self = this;\r\n    if (self.$props.show) {\r\n      if (!self.$mark_el) {\r\n        self.$mark_el = self.$mark();\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (self.$props.show) {\r\n      if (!self.$mark_el) {\r\n        self.$mark_el = self.$mark();\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    fixed_date_list(currentYear, currentMonth, currentDay) {\r\n      var years = [];\r\n      for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {\r\n        years.push(i);\r\n      }\r\n      var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\r\n      var days = [];\r\n      for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {\r\n        days.push(i);\r\n      }\r\n      var hours = [];\r\n      for (var i = 1; i < 25; i++) {\r\n        hours.push(i);\r\n      }\r\n      var minutesArray = [];\r\n      for (var i = 1; i < 61; i++) {\r\n        minutesArray.push(i);\r\n      }\r\n      return {\r\n        years,\r\n        months,\r\n        days,\r\n        hours,\r\n        minutesArray\r\n      };\r\n    },\r\n    callback1({ value }) {\r\n      this.currentYear = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    },\r\n    callback2({ value }) {\r\n      this.currentMonth = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    },\r\n    callback3({ value }) {\r\n      this.currentDay = value;\r\n      var { years, months, days } = this.fixed_date_list(\r\n        this.currentYear,\r\n        this.currentMonth,\r\n        this.currentDay\r\n      );\r\n      this.$data.years = years;\r\n      this.$data.months = months;\r\n      this.$data.days = days;\r\n    },\r\n    callback4({ value }) {\r\n      this.currentHour = value;\r\n    },\r\n    callback5({ value }) {\r\n      this.currentMinutes = value;\r\n    },\r\n    click_save() {\r\n      this.$emit(\"callback\", {\r\n        year: this.currentYear,\r\n        month: this.currentMonth,\r\n        day: this.currentDay,\r\n        hour: this.currentHour,\r\n        minutes: this.currentMinutes,\r\n        second: \"00\"\r\n      });\r\n      this.$data.show = false;\r\n      if (this.$mark_el) {\r\n        this.$mark_el.closeMark();\r\n        this.$mark_el = null;\r\n      }\r\n      this.$emit(\"changeShow\", !this.$props.show);\r\n    }\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c("div", { staticClass: "t-datetime-picker" }, [
        _c(
          "div",
          { staticClass: "t-date-toolbtns" },
          [
            _c("t-button", { attrs: { type: "hollow" } }, [_vm._v("取消")]),
            _vm._v(" "),
            _c(
              "t-button",
              {
                nativeOn: {
                  click: function($event) {
                    return _vm.click_save($event)
                  }
                }
              },
              [_vm._v("确定")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "t-datetime-pickers" }, [
          _c(
            "div",
            { staticClass: "item item-year" },
            [
              _c("t-pick", {
                attrs: { value: 2018, ListData: _vm.years },
                on: { callback: _vm.callback1 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-month" },
            [
              _c("t-pick", {
                attrs: { value: 11, ListData: _vm.months },
                on: { callback: _vm.callback2 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-day" },
            [
              _c("t-pick", {
                attrs: { value: 21, ListData: _vm.days },
                on: { callback: _vm.callback3 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-hour" },
            [
              _c("t-pick", {
                attrs: { value: 12, ListData: _vm.hours },
                on: { callback: _vm.callback4 }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item item-minutes" },
            [
              _c("t-pick", {
                attrs: { value: 20, ListData: _vm.minutesArray },
                on: { callback: _vm.callback5 }
              })
            ],
            1
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-326b5a99", esExports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Swiper = undefined;

var _swiper = __webpack_require__(110);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Swiper = _swiper2.default;

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_5714ee8e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_5714ee8e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\swiper\\swiper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5714ee8e", Component.options)
  } else {
    hotAPI.reload("data-v-5714ee8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("34c72c5a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5714ee8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5714ee8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-swiper {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  position: relative;\n}\n.t-swiper .content {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\n}\n.t-swiper-page {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  width: 100%;\r\n  bottom: 5;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\n}\n.t-swiper-page .item {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/swiper/application/index/view/components/swiper/swiper.vue"],"names":[],"mappings":";AAWA;EACA,iBAAA;EACA,YAAA;EACA,0BAAA;UAAA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,wBAAA;UAAA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,YAAA;EACA,UAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;CACA","file":"swiper.vue","sourcesContent":["<template>\r\n  <div class=\"t-swiper container\" ref=\"container\" :style=\"style_container\">\r\n    <div class=\"content\" ref=\"content\">\r\n      <slot />\r\n    </div>\r\n    <div class=\"t-swiper-page\">\r\n      <div class=\"item\" v-for=\"(item,index) in childLength\" :key=\"index\" :style=\"{'background':currentPage==index?'blue':'#ccc'}\"></div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<style>\r\n.t-swiper {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  user-select: none;\r\n  position: relative;\r\n}\r\n.t-swiper .content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.t-swiper-page {\r\n  position: absolute;\r\n  display: flex;\r\n  width: 100%;\r\n  bottom: 5;\r\n  justify-content: center;\r\n}\r\n.t-swiper-page .item {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n}\r\n</style>\r\n\r\n<script>\r\nimport Scroll from \"../scroll/scroll\";\r\nimport _ from \"underscore\";\r\nexport default {\r\n  name: \"t-swiper\",\r\n  data() {\r\n    return {\r\n      currentPage: 0,\r\n      childLength: 0\r\n    };\r\n  },\r\n  props: {\r\n    height: {\r\n      type: [String, Number],\r\n      default: 200\r\n    }\r\n  },\r\n  computed: {\r\n    style_container() {\r\n      var height = this.$props.height;\r\n      return {\r\n        height\r\n      };\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    this.dom_container = this.$refs[\"container\"];\r\n    this.dom_content = this.$refs[\"content\"];\r\n    this.dom_container_height = this.dom_container.offsetHeight;\r\n    this.dom_container_width = this.dom_container.offsetWidth;\r\n    self.scroll = new Scroll(this.dom_container, this.dom_content, {\r\n      start: ({ left }) => {\r\n        this.currentLeft = left;\r\n      },\r\n      move: ({ left }) => {\r\n        this.dire = this.currentLeft - left > 0 ? \"right\" : \"left\";\r\n        this.currentLeft = left;\r\n      },\r\n      end: ({ left }) => {\r\n        /* 加入dire控制更加精确 */\r\n        if (this.dire == \"left\") {\r\n          self.$data.currentPage = Math.ceil(left / this.dom_container_width);\r\n        } else {\r\n          self.$data.currentPage = Math.round(left / this.dom_container_width);\r\n          // console.log(\r\n          //   \"left / this.dom_container_width\",\r\n          //   left / this.dom_container_width\r\n          // );\r\n        }\r\n        if (self.$data.currentPage > self.$data.childLength - 1) {\r\n          self.$data.currentPage = self.$data.childLength - 1;\r\n        }\r\n        // console.log(\"self.$data.childLength\", self.$data.childLength);\r\n        self.scroll.scrollTo(\r\n          self.$data.currentPage * this.dom_container_width,\r\n          0,\r\n          false\r\n        );\r\n      },\r\n      scrollingX: true,\r\n      scrollingY: false\r\n    });\r\n    /* 1.设置content的大小非常大 */\r\n    /* 1.便利children 让所有的child都是父类的大小 */\r\n    this.$data.childLength = this.dom_content.children.length;\r\n    this.dom_content.style.width =\r\n      this.$data.childLength * self.dom_container_width;\r\n    _.each(this.dom_content.children, child => {\r\n      child.style.width = self.dom_container_width;\r\n      child.style.height = self.dom_container_height;\r\n    });\r\n    /* 插件 scroll特新，定义空间大小 */\r\n    self.scroll.setDimensions(\r\n      self.dom_container_width,\r\n      self.dom_container_height,\r\n      self.dom_content.clientWidth,\r\n      self.dom_content.clientHeight\r\n    );\r\n  }\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "t-swiper container",
      style: _vm.style_container
    },
    [
      _c(
        "div",
        { ref: "content", staticClass: "content" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "t-swiper-page" },
        _vm._l(_vm.childLength, function(item, index) {
          return _c("div", {
            key: index,
            staticClass: "item",
            style: { background: _vm.currentPage == index ? "blue" : "#ccc" }
          })
        })
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5714ee8e", esExports)
  }
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = undefined;

var _loading = __webpack_require__(115);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Loading = _loading2.default;

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_28b1c48e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_loading_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_loading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_28b1c48e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\loading\\loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28b1c48e", Component.options)
  } else {
    hotAPI.reload("data-v-28b1c48e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("329b0c43", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28b1c48e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28b1c48e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fade-enter-active,\r\n.fade-leave-active {\r\n  -webkit-transition: opacity 0.5s;\r\n  transition: opacity 0.5s;\n}\n.fade-enter,\r\n.fade-leave-to {\r\n  opacity: 0;\n}\n.tai_loading {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  font-size: 22px;\r\n  text-align: center;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/loading/application/index/view/components/loading/loading.vue"],"names":[],"mappings":";AAiBA;;EAEA,iCAAA;EAAA,yBAAA;CACA;AACA;;EAEA,WAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;CACA","file":"loading.vue","sourcesContent":["<template>\r\n  <div class=\"tai_loading\" v-show=\"loading\">\r\n    <t-icon icon=\"loading\"></t-icon>\r\n    <slot />\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \"t-loading\",\r\n  props: {\r\n    loading: Boolean\r\n  },\r\n  created() {}\r\n};\r\n</script>\r\n<style>\r\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity 0.5s;\r\n}\r\n.fade-enter,\r\n.fade-leave-to {\r\n  opacity: 0;\r\n}\r\n.tai_loading {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  font-size: 22px;\r\n  text-align: center;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "tai_loading"
    },
    [
      _c("t-icon", { attrs: { icon: "loading" } }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-28b1c48e", esExports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CellGroup = exports.CellItem = undefined;

var _cellItem = __webpack_require__(120);

var _cellItem2 = _interopRequireDefault(_cellItem);

var _cellGroup = __webpack_require__(124);

var _cellGroup2 = _interopRequireDefault(_cellGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CellItem = _cellItem2.default;
exports.CellGroup = _cellGroup2.default;

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b81cf8a8_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cellItem_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b81cf8a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b81cf8a8_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cellItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\cell\\cellItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b81cf8a8", Component.options)
  } else {
    hotAPI.reload("data-v-b81cf8a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("12d1d644", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b81cf8a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cellItem.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b81cf8a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cellItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-cell-item[data-v-b81cf8a8] {\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-align-self: center;\r\n          align-self: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  height: 75px;\r\n  border: 1px solid #eee;\r\n  /* line-height: 45px; */\n}\n.t-cell-item .icon[data-v-b81cf8a8] {\r\n  width: 30px;\r\n  height: 30px;\n}\n.t-cell-item .left[data-v-b81cf8a8] {\r\n  min-width: 30px;\r\n  padding-right: 5px;\n}\n.t-cell-item .right[data-v-b81cf8a8] {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1;\r\n          flex: 1;\n}\n.t-cell-item .arrow[data-v-b81cf8a8] {\r\n  width: 30px;\r\n  height: 30px;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/cell/application/index/view/components/cell/cellItem.vue"],"names":[],"mappings":";AAiBA;EACA,iBAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,2BAAA;UAAA,mBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;EACA,aAAA;EACA,uBAAA;EACA,wBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,gBAAA;EACA,mBAAA;CACA;AACA;EACA,oBAAA;EAAA,gBAAA;UAAA,QAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;CACA","file":"cellItem.vue","sourcesContent":["<template>\r\n    <div class=\"t-cell-item\">\r\n        <div class=\"icon\">\r\n            <slot name=\"icon\" />\r\n        </div>\r\n        <div class=\"left\">\r\n            <slot name=\"left\" />\r\n        </div>\r\n        <div class=\"right\">\r\n            <slot name=\"right\" />\r\n        </div>\r\n        <div class=\"arrow\" :show=\"arrow\">\r\n            <t-icon icon=\"right-arrow\"></t-icon>\r\n        </div>\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.t-cell-item {\r\n  background: #fff;\r\n  display: flex;\r\n  align-self: center;\r\n  align-items: center;\r\n  height: 75px;\r\n  border: 1px solid #eee;\r\n  /* line-height: 45px; */\r\n}\r\n.t-cell-item .icon {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n.t-cell-item .left {\r\n  min-width: 30px;\r\n  padding-right: 5px;\r\n}\r\n.t-cell-item .right {\r\n  flex: 1;\r\n}\r\n.t-cell-item .arrow {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n</style>\r\n\r\n<script>\r\nexport default {\r\n  name: \"t-cell-item\",\r\n  props: {\r\n    arrow: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  }\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-cell-item" }, [
    _c("div", { staticClass: "icon" }, [_vm._t("icon")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "left" }, [_vm._t("left")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "right" }, [_vm._t("right")], 2),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "arrow", attrs: { show: _vm.arrow } },
      [_c("t-icon", { attrs: { icon: "right-arrow" } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b81cf8a8", esExports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_041a2a36_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cellGroup_vue__ = __webpack_require__(197);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cellGroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_041a2a36_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cellGroup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\cell\\cellGroup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-041a2a36", Component.options)
  } else {
    hotAPI.reload("data-v-041a2a36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpTypes = exports.Input = undefined;

var _input = __webpack_require__(129);

var _input2 = _interopRequireDefault(_input);

var _exps = __webpack_require__(194);

var ExpTypes = _interopRequireWildcard(_exps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Input = _input2.default;
exports.ExpTypes = ExpTypes;

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_56d79cd5_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56d79cd5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_56d79cd5_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\input\\input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56d79cd5", Component.options)
  } else {
    hotAPI.reload("data-v-56d79cd5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7b67c69c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56d79cd5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56d79cd5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-input input[data-v-56d79cd5] {\r\n  border: none;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-indent: 5px;\r\n  outline: none;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  margin-top: 13px;\n}\n.t-input .error[data-v-56d79cd5] {\r\n  font-size: 12px;\r\n  height: 12px;\r\n  color: brown;\r\n  text-align: right;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/input/application/index/view/components/input/input.vue"],"names":[],"mappings":";AAWA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;CACA;AACA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;CACA","file":"input.vue","sourcesContent":["<template>\r\n    <div class=\"t-input\">\r\n        <input type=\"text\" :placeholder=\"placeholder\" @input=\"change_value\" />\r\n        <div class=\"error\">\r\n            <div v-show=\"!validateInfor.isError\">\r\n                {{validateInfor.errors.toString()}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.t-input input {\r\n  border: none;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-indent: 5px;\r\n  outline: none;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  margin-top: 13px;\r\n}\r\n.t-input .error {\r\n  font-size: 12px;\r\n  height: 12px;\r\n  color: brown;\r\n  text-align: right;\r\n}\r\n</style>\r\n\r\n<script>\r\n/* \r\n验证数字的正则表达式集 \r\n验证数字：^[0-9]*$ \r\n验证n位的数字：^\\d{n}$ \r\n验证至少n位数字：^\\d{n,}$ \r\n验证m-n位的数字：^\\d{m,n}$ \r\n验证零和非零开头的数字：^(0|[1-9][0-9]*)$ \r\n验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$ \r\n验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$ \r\n验证非零的正整数：^\\+?[1-9][0-9]*$ \r\n验证非零的负整数：^\\-[1-9][0-9]*$ \r\n验证非负整数（正整数 + 0） ^\\d+$ \r\n验证非正整数（负整数 + 0） ^((-\\d+)|(0+))$ \r\n验证长度为3的字符：^.{3}$ \r\n验证由26个英文字母组成的字符串：^[A-Za-z]+$ \r\n验证由26个大写英文字母组成的字符串：^[A-Z]+$ \r\n验证由26个小写英文字母组成的字符串：^[a-z]+$ \r\n验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ \r\n验证由数字、26个英文字母或者下划线组成的字符串：^\\w+$ \r\n验证用户密码:^[a-zA-Z]\\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 \r\n验证是否含有 ^%&',;=?$\\\" 等字符：[^%&',;=?$\\x22]+ \r\n验证汉字：^[\\u4e00-\\u9fa5],{0,}$ \r\n验证Email地址：/^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/\r\n验证InternetURL：^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ \r\n验证电话号码：^(\\(\\d{3,4}\\)|\\d{3,4}-)?\\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。 \r\n验证身份证号（15位或18位数字）：^\\d{15}|\\d{}18$ \r\n验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” \r\n验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 \r\n整数：^-?\\d+$ \r\n不为空：/\\S/\r\n\r\n*/\r\nimport { isEmail, isShit } from \"./util\";\r\nimport _ from \"underscore\";\r\nexport default {\r\n  name: \"t-input\",\r\n  data() {\r\n    return {\r\n      defaultValue: \"\"\r\n    };\r\n  },\r\n  props: {\r\n    validate: {\r\n      type: [String, Array],\r\n      default: () => {\r\n        return [];\r\n      }\r\n    },\r\n    value: {\r\n      type: [String, Number],\r\n      default: \"\"\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: \"请输入\"\r\n    }\r\n  },\r\n  mounted() {\r\n    this.$data.defaultValue = this.$props.value;\r\n  },\r\n  computed: {\r\n    validateInfor() {\r\n      var _validateInfor = { isError: false, errors: [] };\r\n      var { validate } = this.$props;\r\n      var { defaultValue } = this.$data;\r\n      _.each(validate, function(item) {\r\n        var isError = isShit(item.exp, defaultValue);\r\n        // console.log(\"item.exp\", item.exp);\r\n        // console.log(\"isError\", isError);\r\n        if (isError) {\r\n          _.without(_validateInfor.errors, item.error);\r\n        } else {\r\n          _validateInfor.errors.push(item.error);\r\n          _validateInfor.isError = isError;\r\n        }\r\n      });\r\n      return _validateInfor;\r\n    }\r\n  },\r\n  methods: {\r\n    change_value(e) {\r\n      //   console.log(\"change_value\", e.target.value);\r\n      this.$data.defaultValue = e.target.value;\r\n      this.$emit(\"input\", e.target.value);\r\n    }\r\n  }\r\n};\r\n</script>\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "t-input" }, [
    _c("input", {
      attrs: { type: "text", placeholder: _vm.placeholder },
      on: { input: _vm.change_value }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "error" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.validateInfor.isError,
              expression: "!validateInfor.isError"
            }
          ]
        },
        [
          _vm._v(
            "\n            " +
              _vm._s(_vm.validateInfor.errors.toString()) +
              "\n        "
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-56d79cd5", esExports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(135)))

/***/ }),
/* 135 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    init: function init() {
      var self = this;
    }
  },
  components: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 138 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(166);
var IE8_DOM_DEFINE = __webpack_require__(167);
var toPrimitive = __webpack_require__(169);
var dP = Object.defineProperty;

exports.f = __webpack_require__(28) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  methods: {
    toast: function toast() {
      var a = this.$toast({ mes: "toast" });
    }
  }
};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_37e04700_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_nostoplist_vue__ = __webpack_require__(177);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostoplist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_37e04700_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_nostoplist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\nostoplist.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37e04700", Component.options)
  } else {
    hotAPI.reload("data-v-37e04700", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      lists: 100
    };
  },

  methods: {
    callback: function callback() {
      var self = this;
      setTimeout(function () {
        self.$toast({ mes: "加载结束" });
        self.lists = self.lists + 100;
      }, 2000);
    }
  }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      lists: 100,
      loadding: false
    };
  },

  methods: {
    callback: function callback() {
      var self = this;
      setTimeout(function () {
        self.$data.lists = self.$data.lists + 10;
        self.$data.loadding = false;
        self.$toast({ mes: "加载完毕" });
      }, 1000);
    },
    setloadding: function setloadding(loadding) {
      this.$data.loadding = loadding;
    }
  }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = __webpack_require__(181);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      lists: [{ id: 0, value: 0 }, { id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }, { id: 4, value: 4 }, { id: 5, value: 5 }, { id: 6, value: 6 }, { id: 7, value: 7 }, { id: 8, value: 8 }, { id: 9, value: 9 }],
      result: { value: 0, key: 0 },
      pick_value: { id: 9, value: 9 }
    };
  },
  created: function created() {},

  methods: {
    sure: function sure(_ref) {
      var value = _ref.value,
          key = _ref.key;

      console.log(this);
      console.log("key", key);
      console.log("value", value);
      this.$data.result.value = value;
      this.$data.result.key = key;
    },
    callback: function callback(_ref2) {
      var value = _ref2.value,
          key = _ref2.key;

      console.log(this);
      console.log("key", key);
      console.log("value", value);
      this.$data.result.value = value;
      this.$data.result.key = key;
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      show: false,
      value: null
    };
  },

  methods: {
    callback: function callback(val) {
      this.value = val;
    },
    click_date_btn: function click_date_btn() {
      this.$data.year = 2011;
    }
  },
  mounted: function mounted() {}
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      result: "",
      show: false
    };
  },

  methods: {
    callback: function callback(value) {
      this.$data.result = value;
      console.log(value);
    }
  }
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(134);

var _vuex2 = _interopRequireDefault(_vuex);

var _app = __webpack_require__(152);

var _app2 = _interopRequireDefault(_app);

var _vueRouter = __webpack_require__(156);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _store = __webpack_require__(157);

var _tai = __webpack_require__(29);

var _tai2 = _interopRequireDefault(_tai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_tai2.default);

var routes = [{
    path: '/app', component: _app2.default
}, {
    path: '/button',
    component: __webpack_require__(171).default
}, {
    path: '/dialog',
    component: __webpack_require__(173).default
}, {
    path: '/nostop_list',
    component: __webpack_require__(143).default
}, {
    path: '/nostop_list',
    component: __webpack_require__(143).default
}, {
    path: '/nostop_list2',
    component: __webpack_require__(178).default
}, {
    path: '/pick',
    component: __webpack_require__(180).default
}, {
    path: '/date-picker',
    component: __webpack_require__(183).default
}, {
    path: '/datetime-picker',
    component: __webpack_require__(185).default
}, {
    path: '/swiper',
    component: __webpack_require__(187).default
}, {
    path: '/cell',
    component: __webpack_require__(189).default
}, {
    path: '/',
    redirect: '/app'
}];
var router = new _vueRouter2.default({
    routes: routes
});

var $vm = new _vue2.default({
    el: "#root", router: router, store: _store.store
    // template: "<User/>",
    // components: { User },
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4d4c9384_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_4d4c9384_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d4c9384", Component.options)
  } else {
    hotAPI.reload("data-v-4d4c9384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4f452094", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d4c9384\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d4c9384\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-grid-item a {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/index/application/index/view/index/app.vue"],"names":[],"mappings":";AAuHA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,6BAAA;EAAA,8BAAA;EAAA,+BAAA;UAAA,uBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;CACA","file":"app.vue","sourcesContent":["<template>\r\n  <div>\r\n    <t-layout>\r\n      <div slot=\"top\">\r\n        <t-header-back title=\"t-vue-ui\"></t-header-back>\r\n      </div>\r\n      <div>\r\n        <t-grid-group :row=\"3\">\r\n          <t-grid-item>\r\n            <router-link to=\"/button\">\r\n              <t-icon icon=\"anniu\" size='44' />\r\n              <div>button</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <router-link to=\"/dialog\">\r\n              <t-icon icon=\"duihuakuang\" size='44' />\r\n              <div>dialog</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"icon-test2\" size='44' />\r\n            <div>icon</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"grids\" size='44' />\r\n            <div>Grids</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"symbols\" size='44' />\r\n            <div>List</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <router-link to=\"/nostop_list\">\r\n              <t-icon icon=\"symbols\" size='44' />\r\n              <div>无限加载列表</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <!-- <t-grid-item>\r\n            <router-link to=\"/nostop_list2\">\r\n              <t-icon icon=\"symbols\" size='44' />\r\n              <div>无限加载列表scoll</div>\r\n            </router-link>\r\n          </t-grid-item> -->\r\n          <t-grid-item>\r\n            <t-icon icon=\"nav\" size='44' />\r\n            <div>nav</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"tabs\" size='44' />\r\n            <div>tab</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"iconset0497\" size='44' />\r\n            <div>actionSheet</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"jindutiao\" size='44' />\r\n            <div>进度条</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <router-link to=\"/swiper\">\r\n              <t-icon icon=\"slider\" size='44' />\r\n              <div>图片silder</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"chengshijianshe\" size='44' />\r\n            <div>城市选择</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"heart-copy\" size='44' />\r\n            <div>等级</div>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <router-link to='/cell'>\r\n              <t-icon icon=\"lianxiangshuru\" size='44' />\r\n              <div>输入</div>\r\n            </router-link>\r\n\r\n          </t-grid-item>\r\n        <!--   <t-grid-item>\r\n            <t-icon icon=\"404\" size='44' />\r\n            <div>布局</div>\r\n          </t-grid-item> -->\r\n\r\n          <t-grid-item>\r\n            <router-link to=\"/pick\">\r\n              <t-icon icon=\"picklist\" size='44' />\r\n              <div>pick</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <router-link to=\"/date-picker\">\r\n              <t-icon icon=\"date\" size='44' />\r\n              <div>日期选择</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"LC_icon_date_line_2\" size='44' />\r\n            <router-link to=\"/datetime-picker\">\r\n              <div>日期时间选择</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n          <t-grid-item>\r\n            <t-icon icon=\"LC_icon_date_line_2\" size='44' />\r\n            <router-link to=\"/cell\">\r\n              <div>左右布局</div>\r\n            </router-link>\r\n          </t-grid-item>\r\n\r\n        </t-grid-group>\r\n\r\n      </div>\r\n      <!-- <div slot=\"bottom\">1</div> -->\r\n    </t-layout>\r\n  </div>\r\n</template>\r\n<style>\r\n.t-grid-item a {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n</style>\r\n\r\n<script>\r\nimport Vue from \"vue\";\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  mounted() {\r\n    this.init();\r\n  },\r\n  methods: {\r\n    init() {\r\n      var self = this;\r\n    }\r\n  },\r\n  components: {}\r\n};\r\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("t-layout", [
        _c(
          "div",
          { attrs: { slot: "top" }, slot: "top" },
          [_c("t-header-back", { attrs: { title: "t-vue-ui" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "t-grid-group",
              { attrs: { row: 3 } },
              [
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/button" } },
                      [
                        _c("t-icon", { attrs: { icon: "anniu", size: "44" } }),
                        _vm._v(" "),
                        _c("div", [_vm._v("button")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/dialog" } },
                      [
                        _c("t-icon", {
                          attrs: { icon: "duihuakuang", size: "44" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("dialog")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "icon-test2", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("icon")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "grids", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("Grids")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "symbols", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("List")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/nostop_list" } },
                      [
                        _c("t-icon", {
                          attrs: { icon: "symbols", size: "44" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("无限加载列表")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "nav", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("nav")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "tabs", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("tab")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", {
                      attrs: { icon: "iconset0497", size: "44" }
                    }),
                    _vm._v(" "),
                    _c("div", [_vm._v("actionSheet")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "jindutiao", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("进度条")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/swiper" } },
                      [
                        _c("t-icon", { attrs: { icon: "slider", size: "44" } }),
                        _vm._v(" "),
                        _c("div", [_vm._v("图片silder")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", {
                      attrs: { icon: "chengshijianshe", size: "44" }
                    }),
                    _vm._v(" "),
                    _c("div", [_vm._v("城市选择")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", { attrs: { icon: "heart-copy", size: "44" } }),
                    _vm._v(" "),
                    _c("div", [_vm._v("等级")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/cell" } },
                      [
                        _c("t-icon", {
                          attrs: { icon: "lianxiangshuru", size: "44" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("输入")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/pick" } },
                      [
                        _c("t-icon", {
                          attrs: { icon: "picklist", size: "44" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("pick")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/date-picker" } },
                      [
                        _c("t-icon", { attrs: { icon: "date", size: "44" } }),
                        _vm._v(" "),
                        _c("div", [_vm._v("日期选择")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", {
                      attrs: { icon: "LC_icon_date_line_2", size: "44" }
                    }),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/datetime-picker" } }, [
                      _c("div", [_vm._v("日期时间选择")])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-grid-item",
                  [
                    _c("t-icon", {
                      attrs: { icon: "LC_icon_date_line_2", size: "44" }
                    }),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/cell" } }, [
                      _c("div", [_vm._v("左右布局")])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4d4c9384", esExports)
  }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(135)))

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = exports.actionTypes = undefined;

var _defineProperty2 = __webpack_require__(158);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(134);

var _vuex2 = _interopRequireDefault(_vuex);

var _underscore = __webpack_require__(4);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionTypes = {};
actionTypes.set_good = "set_good";
actionTypes.set_search_option = "set_search_option";
actionTypes.set_index_lists = "set_index_lists";
actionTypes.set_user = "set_user";
actionTypes.set_detail_good = "set_detail_good";

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, actionTypes.set_good, function (state, _ref) {
    var good = _ref.good;

    state.good = good;
}), (0, _defineProperty3.default)(_mutations, actionTypes.set_search_option, function (state, _ref2) {
    var search_option = _ref2.search_option;

    _underscore2.default.each(search_option, function (item, key) {
        state.search_option[key] = item;
    });
}), (0, _defineProperty3.default)(_mutations, actionTypes.set_index_lists, function (state, _ref3) {
    var index_lists = _ref3.index_lists;

    state.index_lists = index_lists;
}), (0, _defineProperty3.default)(_mutations, actionTypes.set_user, function (state, _ref4) {
    var user = _ref4.user;

    _underscore2.default.each(user, function (item, key) {
        state.user[key] = item;
    });
}), (0, _defineProperty3.default)(_mutations, actionTypes.set_detail_good, function (state, _ref5) {
    var detail_good = _ref5.detail_good;

    _underscore2.default.each(detail_good, function (item, key) {
        state.detail_good[key] = item;
    });
}), _mutations);
var actions = {};
_underscore2.default.each(actionTypes, function (value, key) {
    actions[key] = function (_ref6, payload) {
        var commit = _ref6.commit;

        commit(key, payload);
    };
});

exports.actionTypes = actionTypes;
var store = exports.store = new _vuex2.default.Store({
    state: {
        index_lists: [],
        good: {
            title: "",
            desc: '',
            a_sheng: '',
            a_shi: '',
            a_xain: '',
            a_address: "",
            price: "",
            image_url: ""
        },
        search_option: {
            max_price: 0,
            min_price: 0,
            title: "",
            address_sheng: "",
            address_shi: "",
            address_xian: "",
            time: "",
            s_s_x: ""
        },
        user: {
            name: '',
            password: '',
            address: "",
            address_sheng: "",
            address_shi: "",
            address_xian: "",
            image_url: "",
            status: 0 // 0是没有登录。1是登录
        },
        detail_good: {
            title: "",
            desc: '',
            a_sheng: '',
            a_shi: '',
            a_xain: '',
            a_address: "",
            price: "",
            image_url: ""
        }
    },
    mutations: mutations,
    actions: actions
});
_vue2.default.prototype.$dispatch = store.dispatch;
_vue2.default.prototype.$state = store.state;
_vue2.default.prototype.$actionTypes = actionTypes;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(159);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
var $Object = __webpack_require__(138).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(162);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(28), 'Object', { defineProperty: __webpack_require__(139).f });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(137);
var core = __webpack_require__(138);
var ctx = __webpack_require__(163);
var hide = __webpack_require__(165);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(164);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(139);
var createDesc = __webpack_require__(170);
module.exports = __webpack_require__(28) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(133);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(28) && !__webpack_require__(140)(function () {
  return Object.defineProperty(__webpack_require__(168)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(133);
var document = __webpack_require__(137).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(133);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0b7caa51_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(172);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0b7caa51_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b7caa51", Component.options)
  } else {
    hotAPI.reload("data-v-0b7caa51", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _c("t-header-back", { attrs: { title: "button" } }),
      _vm._v(" "),
      _c(
        "t-button-group",
        [
          _c("t-button", [_vm._v("default")]),
          _vm._v(" "),
          _c("t-button", { attrs: { type: "primary" } }, [_vm._v("primary")]),
          _vm._v(" "),
          _c("t-button", { attrs: { type: "danger" } }, [_vm._v("danger")]),
          _vm._v(" "),
          _c("t-button", { attrs: { type: "infor" } }, [_vm._v("infor")]),
          _vm._v(" "),
          _c("t-button", { attrs: { type: "hollow" } }, [_vm._v("hollow")]),
          _vm._v(" "),
          _c("t-button", { attrs: { type: "disabled" } }, [_vm._v("disable")]),
          _vm._v(" "),
          _c("t-button", { attrs: { color: "#222" } }, [_vm._v("color")])
        ],
        1
      ),
      _vm._v(" "),
      _c("t-button-group", [_c("t-button", [_vm._v("default")])], 1),
      _vm._v(" "),
      _c(
        "t-button-group",
        [_c("t-button", { attrs: { size: "large" } }, [_vm._v("large")])],
        1
      ),
      _vm._v(" "),
      _c(
        "t-button-group",
        [_c("t-button", { attrs: { size: "mini" } }, [_vm._v("mini")])],
        1
      ),
      _vm._v(" "),
      _c(
        "t-button-group",
        [
          _c("t-icon-button", { attrs: { icon: "shouji" } }, [_vm._v("icon")]),
          _vm._v(" "),
          _c("t-icon-button", { attrs: { icon: "icon-test2" } }, [
            _vm._v("icon")
          ]),
          _vm._v(" "),
          _c("t-icon-button", { attrs: { icon: "shijian2" } }, [
            _vm._v("icon")
          ]),
          _vm._v(" "),
          _c("t-icon-button", { attrs: { icon: "grids" } }, [_vm._v("icon")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0b7caa51", esExports)
  }
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b8e0f532_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_dialog_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_dialog_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b8e0f532_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_dialog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\dialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8e0f532", Component.options)
  } else {
    hotAPI.reload("data-v-b8e0f532", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d161b896", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b8e0f532\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b8e0f532\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"dialog.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _c(
        "t-button",
        {
          nativeOn: {
            click: function($event) {
              return _vm.toast($event)
            }
          }
        },
        [_vm._v(" toast")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b8e0f532", esExports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _c("t-header-back", { attrs: { title: "无限加载" } }),
      _vm._v(" "),
      _c(
        "t-nostop-list",
        { attrs: { height: 400, callback: _vm.callback } },
        _vm._l(_vm.lists, function(n) {
          return _c("div", { key: n }, [_c("div", [_vm._v(_vm._s(n))])])
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-37e04700", esExports)
  }
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b6ff5792_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_nostop_list2_vue__ = __webpack_require__(179);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_nostop_list2_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b6ff5792_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_nostop_list2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\nostop_list2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6ff5792", Component.options)
  } else {
    hotAPI.reload("data-v-b6ff5792", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _c("t-header-back", { attrs: { title: "无限加载" } }),
      _vm._v(" "),
      _c(
        "t-infinite-scroll2",
        {
          attrs: { loadding: _vm.loadding, setloadding: _vm.setloadding },
          on: { callback: _vm.callback }
        },
        _vm._l(_vm.lists, function(item) {
          return _c("div", { key: item }, [_vm._v(_vm._s(item))])
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b6ff5792", esExports)
  }
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_f0acad00_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_vue__ = __webpack_require__(182);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_pick_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_f0acad00_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_pick_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\pick.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0acad00", Component.options)
  } else {
    hotAPI.reload("data-v-f0acad00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _vue2.default();

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._v("\n  result: key:" + _vm._s(_vm.result) + "\n  "),
      _c("t-pick", {
        attrs: {
          ListData: _vm.lists,
          ListItemKey: "value",
          value: _vm.pick_value
        },
        on: { sure: _vm.sure, callback: _vm.callback }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f0acad00", esExports)
  }
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_cd1f1864_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datePick_vue__ = __webpack_require__(184);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datePick_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_cd1f1864_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datePick_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\datePick.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd1f1864", Component.options)
  } else {
    hotAPI.reload("data-v-cd1f1864", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("t-layout", [
    _c(
      "div",
      { staticClass: "datepick" },
      [
        _vm._v("\n    result:" + _vm._s(_vm.value) + "\n    "),
        _c(
          "t-button",
          {
            nativeOn: {
              click: function($event) {
                _vm.show = !_vm.show
              }
            }
          },
          [_vm._v("show date")]
        ),
        _vm._v(" "),
        _c("t-date-picker", {
          attrs: { year: "2018", month: "11", day: "4" },
          on: { callback: _vm.callback },
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-cd1f1864", esExports)
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_45d6ac5a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datetime_vue__ = __webpack_require__(186);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_datetime_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_45d6ac5a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_datetime_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\datetime.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45d6ac5a", Component.options)
  } else {
    hotAPI.reload("data-v-45d6ac5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _vm._v("\n    result:" + _vm._s(_vm.result) + "\n    "),
      _c(
        "t-button",
        {
          nativeOn: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        },
        [_vm._v("点击选择时间")]
      ),
      _vm._v(" "),
      _c("t-datetime-picker", {
        on: { callback: _vm.callback },
        model: {
          value: _vm.show,
          callback: function($$v) {
            _vm.show = $$v
          },
          expression: "show"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-45d6ac5a", esExports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_11c81897_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(188);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_swiper_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_11c81897_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\swiper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11c81897", Component.options)
  } else {
    hotAPI.reload("data-v-11c81897", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    [
      _c("t-swiper", { attrs: { height: "200" } }, [
        _c("div", { staticStyle: { background: "#eee" } }, [_vm._v("1")]),
        _vm._v(" "),
        _c("div", { staticStyle: { background: "green" } }, [_vm._v("2")]),
        _vm._v(" "),
        _c("div", { staticStyle: { background: "yellow" } }, [_vm._v("3")]),
        _vm._v(" "),
        _c("div", { staticStyle: { background: "orange" } }, [_vm._v("4")]),
        _vm._v(" "),
        _c("div", { staticStyle: { background: "yellow" } }, [_vm._v("5")])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-11c81897", esExports)
  }
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_7d0b2a41_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cell_vue__ = __webpack_require__(192);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_cell_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_7d0b2a41_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_cell_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\index\\example\\cell.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d0b2a41", Component.options)
  } else {
    hotAPI.reload("data-v-7d0b2a41", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("623013a5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d0b2a41\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cell.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d0b2a41\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cell.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.body {\r\n  background: #eeee;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/index/example/application/index/view/index/example/cell.vue"],"names":[],"mappings":";AA2CA;EACA,kBAAA;CACA","file":"cell.vue","sourcesContent":["<template>\r\n    <t-layout class=\"body\">\r\n        <t-header-back title=\"左右佈局\"></t-header-back>\r\n        <t-cell-group title=\"账号密码\">\r\n            <t-cell-item>\r\n                <div slot=\"icon\"></div>\r\n                <div slot=\"left\">名字</div>\r\n                <div slot=\"right\">\r\n                    <t-input :validate=\"[{type:'length',exp:$expTypes.exp_length6,error:'字数不能小于6' },\r\n                    {type:'required',exp:$expTypes.exp_not_null,error:'不能为空' } ]\"></t-input>\r\n                </div>\r\n            </t-cell-item>\r\n            <t-cell-item>\r\n                <div slot=\"icon\"></div>\r\n                <div slot=\"left\">邮箱</div>\r\n                <div slot=\"right\">\r\n                    <t-input :validate=\"[{exp:$expTypes.exp_email,error:'不是邮箱' },\r\n                  ]\"></t-input>\r\n                </div>\r\n            </t-cell-item>\r\n        </t-cell-group>\r\n\r\n        <t-cell-group title=\"账号密码\">\r\n            <t-cell-item>\r\n                <div slot=\"icon\"></div>\r\n                <div slot=\"left\">名字</div>\r\n                <div slot=\"right\">\r\n                    <t-input :validate=\"[{type:'length',exp:$expTypes.exp_length6,error:'字数不能小于6' },\r\n                    {type:'required',exp:$expTypes.exp_not_null,error:'不能为空' } ]\"></t-input>\r\n                </div>\r\n            </t-cell-item>\r\n            <t-cell-item>\r\n                <div slot=\"icon\"></div>\r\n                <div slot=\"left\">邮箱</div>\r\n                <div slot=\"right\">\r\n                    <t-input :validate=\"[{exp:$expTypes.exp_email,error:'不是邮箱' },\r\n                  ]\"></t-input>\r\n                </div>\r\n            </t-cell-item>\r\n        </t-cell-group>\r\n    </t-layout>\r\n</template>\r\n<style>\r\n.body {\r\n  background: #eeee;\r\n}\r\n</style>\r\n\r\n<script>\r\nexport default {};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    { staticClass: "body" },
    [
      _c("t-header-back", { attrs: { title: "左右佈局" } }),
      _vm._v(" "),
      _c(
        "t-cell-group",
        { attrs: { title: "账号密码" } },
        [
          _c("t-cell-item", [
            _c("div", { attrs: { slot: "icon" }, slot: "icon" }),
            _vm._v(" "),
            _c("div", { attrs: { slot: "left" }, slot: "left" }, [
              _vm._v("名字")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "right" }, slot: "right" },
              [
                _c("t-input", {
                  attrs: {
                    validate: [
                      {
                        type: "length",
                        exp: _vm.$expTypes.exp_length6,
                        error: "字数不能小于6"
                      },
                      {
                        type: "required",
                        exp: _vm.$expTypes.exp_not_null,
                        error: "不能为空"
                      }
                    ]
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("t-cell-item", [
            _c("div", { attrs: { slot: "icon" }, slot: "icon" }),
            _vm._v(" "),
            _c("div", { attrs: { slot: "left" }, slot: "left" }, [
              _vm._v("邮箱")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "right" }, slot: "right" },
              [
                _c("t-input", {
                  attrs: {
                    validate: [
                      { exp: _vm.$expTypes.exp_email, error: "不是邮箱" }
                    ]
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "t-cell-group",
        { attrs: { title: "账号密码" } },
        [
          _c("t-cell-item", [
            _c("div", { attrs: { slot: "icon" }, slot: "icon" }),
            _vm._v(" "),
            _c("div", { attrs: { slot: "left" }, slot: "left" }, [
              _vm._v("名字")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "right" }, slot: "right" },
              [
                _c("t-input", {
                  attrs: {
                    validate: [
                      {
                        type: "length",
                        exp: _vm.$expTypes.exp_length6,
                        error: "字数不能小于6"
                      },
                      {
                        type: "required",
                        exp: _vm.$expTypes.exp_not_null,
                        error: "不能为空"
                      }
                    ]
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("t-cell-item", [
            _c("div", { attrs: { slot: "icon" }, slot: "icon" }),
            _vm._v(" "),
            _c("div", { attrs: { slot: "left" }, slot: "left" }, [
              _vm._v("邮箱")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "right" }, slot: "right" },
              [
                _c("t-input", {
                  attrs: {
                    validate: [
                      { exp: _vm.$expTypes.exp_email, error: "不是邮箱" }
                    ]
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7d0b2a41", esExports)
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmail = isEmail;
exports.isShit = isShit;
function isEmail(strEmail) {
    //声明邮箱正则
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //对输入的值进行判断
    if (!myreg.test(strEmail)) {
        return false;
    } else {
        return true;
    }
}
function isShit(myreg, str) {
    //声明邮箱正则
    //对输入的值进行判断
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var exp_length6 = exports.exp_length6 = /^\d{6,}$/;
var exp_not_null = exports.exp_not_null = /\S/;
var exp_email = exports.exp_email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var exp_num = exports.exp_num = /^[0-9]*$/;
var exp_phone = exports.exp_phone = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
// --正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e01a4b04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-041a2a36\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cellGroup.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-041a2a36\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./cellGroup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.t-cell-group {\r\n  padding: 10px;\r\n  margin-top: 25px;\n}\n.t-cell-group-title {\r\n  font-size: 15px;\r\n  color: #ccc;\r\n  margin-bottom: 5px;\n}\n.t-cell-group .t-cell-item:last-child {\r\n  border-bottom: none;\n}\r\n", "", {"version":3,"sources":["C:/phpStudy/WWW/tai-vue-ui/application/index/view/components/cell/application/index/view/components/cell/cellGroup.vue"],"names":[],"mappings":";AAUA;EACA,cAAA;EACA,iBAAA;CACA;AACA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;CACA;AACA;EACA,oBAAA;CACA","file":"cellGroup.vue","sourcesContent":["<template>\r\n  <div class=\"t-cell-group\">\r\n    <div class=\"t-cell-group-title\">\r\n      {{$props.title}}\r\n    </div>\r\n    <slot />\r\n  </div>\r\n</template>\r\n\r\n<style>\r\n.t-cell-group {\r\n  padding: 10px;\r\n  margin-top: 25px;\r\n}\r\n.t-cell-group-title {\r\n  font-size: 15px;\r\n  color: #ccc;\r\n  margin-bottom: 5px;\r\n}\r\n.t-cell-group .t-cell-item:last-child {\r\n  border-bottom: none;\r\n}\r\n</style>\r\n\r\n<script>\r\nexport default {\r\n  name: \"t-cell-group\",\r\n  props: {\r\n    title: String\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "t-cell-group" },
    [
      _c("div", { staticClass: "t-cell-group-title" }, [
        _vm._v("\n    " + _vm._s(_vm.$props.title) + "\n  ")
      ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-041a2a36", esExports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map