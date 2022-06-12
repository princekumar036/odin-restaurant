/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction createContact() {\n    const section = document.createElement('section')\n    section.classList.add('contact')\n\n    section.innerHTML = `\n    <div>\n        <p>\n            <i class=\"mdi mdi-map-marker\"></i>\n            <span>1024 Oakwood Ave</span>\n            <span>San Diego, CA 22434</span>\n        </p>\n        <p>\n            <i class=\"mdi mdi-clock\"></i>\n            <span>Mon-Thurs: 8am-8pm</span>\n            <span>Fri-Sun: 8am-11pm</span>\n        </p>\n        <p>\n            <i class=\"mdi mdi-phone\"></i>\n            <span>+1 403-392-3046</span>\n        </p>\n        <p>\n            <i class=\"mdi mdi-email\"></i>\n            <span>eat@tribeflatout.com</span>\n        </p>\n    </div>\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.867762785019!2d-118.46850727325761!3d33.99593021863831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bac1c3bed645%3A0x38aaab28ce9c2229!2s1024%20Oakwood%20Ave%2C%20Venice%2C%20CA%2090291%2C%20USA!5e0!3m2!1sen!2sin!4v1654976036048!5m2!1sen!2sin\" width=\"900\" height=\"400\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    `\n\n    return section\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createHeader() {\n    const header = document.createElement('header')\n\n    const div = document.createElement('div')\n    div.classList.add('logo')\n    div.innerText = 'Cart👀n Food'\n\n    const nav = document.createElement('nav')\n\n    const li1 = document.createElement('li')\n    li1.innerText = 'Home'\n    const li2 = document.createElement('li')\n    li2.innerText = 'Menu'\n    const li3 = document.createElement('li')\n    li3.innerText = 'Contact'\n\n    nav.appendChild(li1)\n    nav.appendChild(li2)\n    nav.appendChild(li3)\n\n    header.appendChild(div)\n    header.appendChild(nav)\n\n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://odin-restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createHome() {\n    const section = document.createElement('section')\n    section.classList.add('home')\n\n    const div = document.createElement('div')\n    div.classList.add('hero')\n\n    const p = document.createElement('p')\n    p.innerText = 'Grab delicious foods from your favourite cartoon shows'\n\n    const img = document.createElement('img')\n    img.src = 'images/food.png'\n    img.alt = 'Food'\n\n    div.appendChild(p)\n    div.appendChild(img)\n\n    const btn = document.createElement('button')\n    btn.innerText = 'Explore Menu'\n\n    section.appendChild(div)\n    section.appendChild(btn)\n\n    return section\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\ndocument.body.appendChild( (0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() )\nconst MAIN = document.createElement('main')\ndocument.body.appendChild(MAIN)\n\nMAIN.appendChild( (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() )\ndocument.querySelector('nav li:nth-child(1)').classList.add('active')\n\n\nconst NAVS = document.querySelectorAll('li')\nNAVS.forEach(nav => {\n    nav.addEventListener('pointerdown', (e) => {\n        MAIN.firstChild.remove()\n\n        if (e.target.innerText === 'Home') {\n            MAIN.appendChild( (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() )\n            NAVS.forEach(nav => nav.classList.remove('active'))\n            document.querySelector('nav li:nth-child(1)').classList.add('active')\n        }\n\n        else if (e.target.innerText === 'Menu') {\n            MAIN.appendChild( (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])() )\n            NAVS.forEach(nav => nav.classList.remove('active'))\n            document.querySelector('nav li:nth-child(2)').classList.add('active')\n        }\n        if (e.target.innerText === 'Contact') {\n            MAIN.appendChild( (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() )\n            NAVS.forEach(nav => nav.classList.remove('active'))\n            document.querySelector('nav li:nth-child(3)').classList.add('active')\n        }\n    })\n})\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createMenu() {\n    // Menu Item 1\n    var title = `Homer Simpson's Donut`\n    var price = '$ 1.99'\n    var src = 'images/simpsons.jpg'\n    var description = `Any fan of The Simpsons knows that Homer goes absolutely nuts for donuts with a pretty pink glaze. Make some mouthwatering confections that Homer himself would be drooling over with this recipe from Let's Eat Fiction!`\n    const item1 = createMenuItem(title, price, src, description)\n\n    // Menu Item 2\n    var title = `Bacon Pancakes`\n    var price = '$ 0.99'\n    var src = 'images/adventuretime.jpg'\n    var description = `It's just as easy (and delicious!) as Jake the Dog says: you make some bacon and you put it in a pancake! This is simple and mouth-watering breakfast from The Geeky Chef is perfect for any venturing hero.`\n    const item2 = createMenuItem(title, price, src, description)\n\n    // Menu Item 3\n    var title = `Sandwich of Death`\n    var price = '$ 1.59'\n    var src = 'images/regularshow.jpg'\n    var description = `The Sandwich of Death, as featured on Regular Show, is no ordinary meatball sub. But you won't kick the bucket when you bite in, even though the taste is to die for. This recipe comes courtesy of Fiction-Food Cafe.`\n    const item3 = createMenuItem(title, price, src, description)\n\n    // Menu Item 4\n    var title = `Krabby Patty`\n    var price = '$ 2.99'\n    var src = 'images/spongebob.jpg'\n    var description = `The Krabby Patty is the food of choice in SpongeBob SquarePants. While its secret ingredient remains an elusive mystery in the show, this recipe from Instructables ensures you can make your own Krabby Patty at home.`\n    const item4 = createMenuItem(title, price, src, description)\n\n    const section = document.createElement('section')\n    section.classList.add('menu')\n\n    section.appendChild(item1)\n    section.appendChild(item2)\n    section.appendChild(item3)\n    section.appendChild(item4)\n\n    return section\n}\n\n\n\nfunction createMenuItem(title, price, src, description) {\n    const div1 = document.createElement('div')\n    div1.classList.add('menu-item')\n\n    const img = document.createElement('img')\n    img.src = src\n    img.alt = title\n\n    const div2 = document.createElement('div')\n\n    const h3 = document.createElement('h3')\n    h3.innerText = title\n\n    const p1 = document.createElement('p')\n    p1.innerText = price\n\n    div2.appendChild(h3)\n    div2.appendChild(p1)\n\n    const p2 = document.createElement('p')\n    p2.innerText = description\n\n    div1.appendChild(img)\n    div1.appendChild(div2)\n    div1.appendChild(p2)\n\n    return div1\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;