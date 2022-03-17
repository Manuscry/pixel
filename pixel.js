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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pixel.js":
/*!*******************************!*\
  !*** ./resources/js/pixel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Cookies functions
function mSetCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function mGetCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function mEraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
} // Tag functions


function mAddPixelImg(action, data, mcampaign, minstance) {
  var mbaseurl = "https://api.manuscry.com/";
  var mtagsrc = null;
  if (action == "score") mtagsrc = mbaseurl + "p-" + mcampaign + "-" + minstance + "-score-" + data + ".jpg";
  if (action == "event") mtagsrc = mbaseurl + "p-" + mcampaign + "-" + minstance + "-event-" + data + ".jpg";

  if (mtagsrc != null) {
    var img = document.createElement("img");
    img.src = mtagsrc;
    img.setAttribute('width', 1);
    img.setAttribute('height', 1);
    img.style.width = "1px";
    img.style.height = "1px";
    img.style.opacity = "0";
    var mtagcontainer = document.getElementById("mpixelimg");
    mtagcontainer.appendChild(img);
  }
} // Get querystring


var qs = function (a) {
  if (a == "") return {};
  var b = {};

  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length == 1) b[p[0]] = "";else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }

  return b;
}(window.location.search.substr(1).split('&')); // Get identifier and campagin


var minstance = qs['minstance'] !== undefined && qs['minstance'] !== null ? qs['minstance'] : null;
var mcampaign = qs['mcampaign'] !== undefined && qs['mcampaign'] !== null ? qs['mcampaign'] : null;
if (minstance != null) mSetCookie('minstance', minstance, 7);
if (mcampaign != null) mSetCookie('mcampaign', mcampaign, 7);
var minstance_from_cookies = mGetCookie('minstance');
if (minstance == null && minstance_from_cookies != null) minstance = minstance_from_cookies;
var mcampaign_from_cookies = mGetCookie('mcampaign');
if (mcampaign == null && mcampaign_from_cookies != null) mcampaign = mcampaign_from_cookies; // Get configuration

var mconfig = document.querySelector('#mpixelsettings');
var mconfig = mconfig != null && mconfig != undefined ? mconfig.innerHTML : null;

if (mconfig != null) {
  try {
    mconfig = JSON.parse(mconfig);
  } catch (e) {
    mconfig = null;
  }
} // If campaign and identifier is present


if (minstance != null && mcampaign != null && mconfig != null) {
  for (var i in mconfig.actions) {
    mAddPixelImg(mconfig.actions[i].action, mconfig.actions[i].data, mcampaign, minstance);
  }
} // Export function


window.ManuscryTrack = function (action, data) {
  if (action != 'score' && action != 'event') {
    console.log('ManuscryTrack - Not a valid event type');
    return false;
  } else {
    mAddPixelImg(action, data, mcampaign, minstance);
    return true;
  }
};

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./resources/js/pixel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tristan/Sites/manuscry/app/resources/js/pixel.js */"./resources/js/pixel.js");


/***/ })

/******/ });