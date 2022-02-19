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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_videoBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/videoBtn */ "./src/js/modules/videoBtn.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_albom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/albom */ "./src/js/modules/albom.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");
/* harmony import */ var _modules_overfooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/overfooter */ "./src/js/modules/overfooter.js");






window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  Object(_modules_videoBtn__WEBPACK_IMPORTED_MODULE_0__["default"])('#video-arrow', '.video-btn');
  Object(_modules_counter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_albom__WEBPACK_IMPORTED_MODULE_2__["default"])('.tabheader-item', '.foto', '.tabheader-items');
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_overfooter__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/modules/albom.js":
/*!*********************************!*\
  !*** ./src/js/modules/albom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function albom(tabsItems, tabContentItems, tabsParentItems) {
  const tabs = document.querySelectorAll(tabsItems),
        tabsContent = document.querySelectorAll(tabContentItems),
        span = document.querySelectorAll('.tabs-active'),
        tabsParent = document.querySelector(tabsParentItems);

  function hideTabsContent() {
    tabsContent.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('active');
    });
    span.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('show');
    });
  }

  ;

  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hidden');
    tabs[i].classList.add('active');
    span[i].classList.remove('hidden');
    span[i].classList.add('show');
  }

  ;
  hideTabsContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    const targ = e.target;

    if (targ && targ.classList.contains('tabheader-item')) {
      tabs.forEach((item, i) => {
        if (targ == item) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (albom);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function counter() {
  const counter = document.querySelector('.counter span');
  let count = counter.innerText;

  function isVisible() {
    let coords = counter.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    if (topVisible) {
      startCount();

      isVisible = function () {};
    }

    return topVisible;
  }

  ;
  window.addEventListener('scroll', () => {
    isVisible();
  });

  let startCount = () => {
    let time = setInterval(() => {
      count++;
      counter.innerHTML = `${count}`;

      if (count >= 1787) {
        clearInterval(time);
      }
    }, 30);
  };
}

;
/* harmony default export */ __webpack_exports__["default"] = (counter);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function form() {
  const forms = document.getElementById('form');
  const message = {
    loading: "Loading",
    success: "Thank you, our specialist will contact you shortly",
    error: "upss, something went wrong"
  };
  forms.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(forms);
    const object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    forms.appendChild(statusMessage);
    fetch("assets/server.php", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(object)
    }).then(data => {
      data.text();
      statusMessage.innerHTML = message.success;
    }).then(data => {
      console.log(data.text());
    }).catch(() => {
      statusMessage.innerHTML = message.error;
    }).finally(() => {
      forms.reset();
    });
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function header() {
  // работа с определением типа устройства
  // const isMobile = {
  //     Android: function (){
  //         return navigator.userAgent.match(/Android/i);
  //     },
  //     BlackBerry: function (){
  //         return navigator.userAgent.match(/BlackBerry/i);
  //     },
  //     iOS: function (){
  //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  //     },
  //     Opera: function (){
  //         return navigator.userAgent.match(/Opera Mini/i);
  //     },
  //     Windows: function (){
  //         return navigator.userAgent.match(/IEMobile/i);
  //     },
  //     any: function(){
  //         return (
  //             isMobile.Android() ||
  //             isMobile.BlackBerry() ||
  //             isMobile.iOS() ||
  //             isMobile.Opera() ||
  //             isMobile.Windows()
  //         );
  //     } 
  // };
  // if(isMobile.any()){
  //     document.body.classList.add('_touch');
  // }else{
  //     document.body.classList.add('_pc');
  // }
  // крепим htader при прокрутки страницы разрешением выше 980px
  const header = document.querySelector('.header');

  const showHeader = () => {
    let contentHeight = document.documentElement.clientHeight;
    let pageBegin = document.documentElement.getBoundingClientRect().top;

    if (Math.abs(pageBegin) >= contentHeight) {
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.background = '#fff';
    } else {
      header.style.position = 'absolute';
      header.style.top = '13vh';
      header.style.background = '';
    }
  };

  const mediaQuery = window.matchMedia('(min-width: 980px)');

  if (mediaQuery.matches) {
    window.addEventListener('scroll', showHeader);
  } // работаем с гамбургер меню показываем скрываем контант / анимация


  const menuToggle = document.querySelector('.hamburger-menu');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('hamburger-menu--active');
    document.querySelector('.menu__body').classList.toggle('menu__body--active');
    document.body.classList.toggle('lock');
    const menuLink = document.querySelectorAll('.menu__link');
    menuLink.forEach(item => {
      item.addEventListener('click', () => {
        if (item.getAttribute('href')) {
          console.log(1);
          document.querySelector('.menu__body').classList.remove('menu__body--active');
          menuToggle.classList.remove('hamburger-menu--active');
          document.body.classList.remove('lock');
        }
      });
    });
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal() {
  const modal = document.createElement("div"),
        parent = document.querySelector('.video');
  modal.classList.add('modal');
  parent.append(modal);
  modal.innerHTML = `
        <div class="modal__wrapper">
            <span>X</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9jG-q0pO4g?start=846" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;
  const closeModal = document.querySelector(".modal__wrapper span");
  closeModal.addEventListener('click', () => {
    modal.remove();
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/overfooter.js":
/*!**************************************!*\
  !*** ./src/js/modules/overfooter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function overfooter() {
  const overfooter = document.querySelector('.overfooter');
  let height = overfooter.offsetHeight;
  const standartHeight = 140;
  let newTop = (height + 10) / 2;

  if (height == standartHeight) {
    overfooter.style.top = -newTop + 'px';
    console.log(height);
  } else if (height > standartHeight) {
    overfooter.style.top = -newTop + 'px';
  } else if (height < standartHeight) {
    overfooter.style.top = -75 + "px";
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (overfooter);

/***/ }),

/***/ "./src/js/modules/videoBtn.js":
/*!************************************!*\
  !*** ./src/js/modules/videoBtn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


const videoBtn = (btn, animBtn) => {
  const videoBtn = document.querySelector(btn),
        videBtnCercl = document.querySelectorAll(animBtn);
  videoBtn.addEventListener("click", e => {
    e.preventDefault();
    let index = 2;
    videBtnCercl.forEach(item => {
      setTimeout(() => {
        item.style.background = "#C40B0B";
      }, index * 100);
      index++;
      setTimeout(() => {
        item.style.background = "";
      }, index * 100);
    });
    setTimeout(animComplete, 700);

    function animComplete() {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(); // window.open(e.target.href = "https://www.youtube.com/watch?v=Z9jG-q0pO4g&t=846s", "_blank");
    }

    ;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (videoBtn);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map