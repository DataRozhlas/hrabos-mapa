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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement('div');\n  warn.innerHTML = 'Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\"_blank\" style=\"color:white;\" rel=\"noopener noreferrer\" href=\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\">není bezpečné</a>, zvažte přechod na <a target=\"_blank\" style=\"color:white;\" rel=\"noopener noreferrer\" href=\"https://www.mozilla.org/cs/firefox/new/\">jiný prohlížeč</a>.';\n  warn.style.cssText = 'text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;';\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/gcode.js":
/*!*********************!*\
  !*** ./js/gcode.js ***!
  \*********************/
/*! exports provided: gCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gCode\", function() { return gCode; });\nfunction gCode(map) {\n  var form = document.getElementById('frm-geocode');\n\n  form.onsubmit = function submitForm(event) {\n    event.preventDefault();\n    var text = document.getElementById('inp-geocode').value;\n\n    if (text === '') {\n      map.flyTo({\n        center: [15.3350758, 49.7417517],\n        zoom: 7\n      });\n    } else {\n      fetch(\"https://api.mapy.cz/geocode?query=\".concat(text)) // Mapy.cz geocoder\n      .then(function (res) {\n        return res.text();\n      }).then(function (str) {\n        return new window.DOMParser().parseFromString(str, 'text/xml');\n      }).then(function (results) {\n        var res = results.firstChild.children[0];\n\n        if (res.children.length === 0) {\n          document.getElementById('inp-geocode').style.borderColor = 'red';\n          return;\n        }\n\n        var x = parseFloat(res.children[0].attributes.x.value);\n        var y = parseFloat(res.children[0].attributes.y.value);\n\n        if (x < 12 || x > 19 || y < 48 || y > 52) {\n          // omezení geosearche na česko, plus mínus\n          document.getElementById('inp-geocode').style.borderColor = 'red';\n          return;\n        }\n\n        map.flyTo({\n          center: [x, y],\n          zoom: 10\n        });\n      }).catch(function (err) {\n        throw err;\n      });\n    }\n  };\n}\n\n//# sourceURL=webpack:///./js/gcode.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gcode */ \"./js/gcode.js\");\n // loučíme se s IE\n\n\nvar host = 'https://data.irozhlas.cz';\n\nif (window.location.hostname === 'localhost') {\n  host = 'http://localhost';\n} // mapa\n\n\nvar map = new mapboxgl.Map({\n  container: \"map\",\n  style: \"https://data.irozhlas.cz/mapa-domu/map_styl/style.json\",\n  zoom: 8,\n  maxZoom: 13,\n  attributionControl: false,\n  center: [16.6076956, 49.1934411]\n});\nmap.getCanvas().style.cursor = 'default';\nmap.fitBounds([[15.59, 49.40], [17.67, 48.75]]);\nmap.addControl(new mapboxgl.AttributionControl({\n  compact: true,\n  customAttribution: \"obrazový podkres <a target=\\\"_blank\\\" href=\\\"https://samizdat.cz\\\">Samizdat</a>, data <a target=\\\"_blank\\\" href=\\\"http://eagri.cz/public/web/ukzuz/portal\\\">ÚKZÚZ</a>\"\n}));\nmap.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou\n\nmap.on(\"click\", function (e) {\n  map.scrollZoom.enable();\n});\nmap.addControl(new mapboxgl.NavigationControl(), \"top-left\"); // buttonky pro zoom a rotaci\n\nmap.on(\"load\", function () {\n  //legenda\n  var i;\n  var colors = ['#de2d26', '#3182bd', '#bdbdbd'];\n  var layers = ['možný rozhoz jedu', 'zakázaný rozhoz jedu', 'nezjištěno'];\n\n  for (i = 0; i < layers.length; i++) {\n    var layer = layers[i];\n    var color = colors[i];\n    var item = document.createElement('div');\n    var key = document.createElement('span');\n    key.className = 'legend-key';\n    key.style.backgroundColor = color;\n    var value = document.createElement('span');\n    value.innerHTML = layer;\n    item.appendChild(key);\n    item.appendChild(value);\n    legend.appendChild(item);\n  }\n\n  map.addLayer({\n    id: \"hrabos\",\n    type: \"fill\",\n    source: {\n      type: \"vector\",\n      tiles: [host + \"/hrabos-mapa/tiles/{z}/{x}/{y}.pbf\"]\n    },\n    \"source-layer\": \"to_map\",\n    paint: {\n      \"fill-color\": ['match', ['get', 'prah_skodlivosti'], 'ano', '#de2d26', 'ne', '#3182bd', '#bdbdbd'],\n      \"fill-opacity\": 0.8,\n      \"fill-outline-color\": \"hsla(59, 0%, 0%, 0.15)\"\n    }\n  });\n  map.on('mousemove', function (e) {\n    var dpb = map.queryRenderedFeatures(e.point, {\n      layers: ['hrabos']\n    });\n\n    if (dpb.length > 0) {\n      document.getElementById('pd').innerHTML = \"Hospod\\xE1\\u0159: \".concat(dpb[0].properties.uziv, \"<br>Rozloha pozemku: \").concat(dpb[0].properties.vymera_ha, \" ha<br>Plodina: \").concat(dpb[0].properties.plodina, \"<br>Aktivn\\xED nory hrabo\\u0161e (ha): \").concat(dpb[0].properties.aktivni_nory, \"<br>Aplikace jedu rozhozem: \").concat(dpb[0].properties.prah_skodlivosti);\n    } else {\n      document.getElementById('pd').innerHTML = '<p>Vyberte pozemek na mapě.</p>';\n    }\n  });\n  map.addLayer({\n    id: \"labels\",\n    source: {\n      tiles: [\"https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png\"],\n      type: \"raster\",\n      tileSize: 256\n    },\n    type: \"raster\"\n  });\n});\nObject(_gcode__WEBPACK_IMPORTED_MODULE_1__[\"gCode\"])(map);\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });