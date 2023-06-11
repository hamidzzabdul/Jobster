/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("// dashboard\r\nconst dashboard = document.querySelector(\".nav-bar\");\r\nconst hamburger = document.querySelector(\".hamburger\");\r\nif (dashboard) {\r\n  hamburger.addEventListener(\"click\", (e) => {\r\n    const sidebar = document.querySelector(\".sidebar\");\r\n    sidebar.classList.toggle(\"slide-in\");\r\n    const navBar = document.querySelector(\".navigation\");\r\n    const mainSection = document.querySelector(\"main\");\r\n\r\n    if (navBar.classList.contains(\"sidebar-active\")) {\r\n      navBar.classList.remove(\"sidebar-active\");\r\n    } else {\r\n      navBar.classList.add(\"sidebar-active\");\r\n    }\r\n    mainSection.classList.toggle(\"side-active\");\r\n  });\r\n\r\n  const dropdown = document.querySelector(\".drop-down\");\r\n  let dropdownIsVisible = false;\r\n  dropdown.addEventListener(\"click\", (e) => {\r\n    document.querySelector(\".dropdown-item\").style.visibility = \"visible\";\r\n    if (!dropdownIsVisible) {\r\n      document.querySelector(\".dropdown-item\").style.visibility = \"visible\";\r\n      dropdownIsVisible = true;\r\n    } else {\r\n      document.querySelector(\".dropdown-item\").style.visibility = \"hidden\";\r\n      dropdownIsVisible = false;\r\n    }\r\n  });\r\n\r\n  //side menu items\r\n  const currentURL = window.location.href;\r\n  const sideMenu = document.querySelectorAll(\".link-item\");\r\n  sideMenu.forEach((item) => {\r\n    const link = item.getAttribute(\"href\");\r\n    if (currentURL.includes(link)) {\r\n      item.classList.add(\"active\");\r\n    } else {\r\n      item.classList.remove(\"active\");\r\n    }\r\n\r\n  });\r\n}\r\n\r\nconst registerbtn = document.querySelector(\".register\");\r\nconst loginbtn = document.querySelector(\".login\");\r\n\r\nconst getRegisterPage = () => {\r\n  const renderedPage = document.querySelectorAll(\"main\");\r\n  renderedPage.forEach((page) => {\r\n    if (page.classList.contains(\"inactive\")) {\r\n      page.classList.remove(\"inactive\");\r\n    } else {\r\n      page.classList.add(\"inactive\");\r\n    }\r\n  });\r\n};\r\nif (loginbtn) {\r\n  loginbtn.addEventListener(\"click\", getRegisterPage);\r\n}\r\nif (registerbtn) {\r\n  registerbtn.addEventListener(\"click\", getRegisterPage);\r\n}\r\n\r\nconst alertContainer = document.querySelector(\".alert-container\");\r\nconst line = document.querySelector(\".line\")\r\n\r\n    alertContainer.classList.add('active')\r\n    setTimeout(() => {\r\n      line.style.animation = \"\"; // Remove the animation\r\n      line.style.display = \"none\";\r\n    }, 4000);\r\n    line.style.display = \"block\";\r\n    setTimeout(() => {\r\n      alertContainer.classList.remove('active')\r\n    }, 4000);\r\n\r\n\n\n//# sourceURL=webpack://jobster/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/index.js"]();
/******/ 	
/******/ })()
;