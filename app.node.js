module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(148);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(34);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(55);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(61);
    }, '/500': function _() {
      return __webpack_require__(62);
    }, '/about': function about() {
      return __webpack_require__(63);
    }, '/blog': function blog() {
      return __webpack_require__(64);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(65);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(66);
    }, '/booking-confirmation': function bookingConfirmation() {
      return __webpack_require__(67);
    }, '/booking-manage': function bookingManage() {
      return __webpack_require__(68);
    }, '/booking': function booking() {
      return __webpack_require__(69);
    }, '/booking1': function booking1() {
      return __webpack_require__(70);
    }, '/booking2-bak': function booking2Bak() {
      return __webpack_require__(71);
    }, '/booking2': function booking2() {
      return __webpack_require__(72);
    }, '/booking3a-bak': function booking3aBak() {
      return __webpack_require__(73);
    }, '/booking3a': function booking3a() {
      return __webpack_require__(74);
    }, '/booking3b-bak': function booking3bBak() {
      return __webpack_require__(75);
    }, '/booking3b': function booking3b() {
      return __webpack_require__(76);
    }, '/booking3c-ba': function booking3cBa() {
      return __webpack_require__(77);
    }, '/booking3c': function booking3c() {
      return __webpack_require__(78);
    }, '/booking4-bak': function booking4Bak() {
      return __webpack_require__(79);
    }, '/contact': function contact() {
      return __webpack_require__(80);
    }, '/faq': function faq() {
      return __webpack_require__(81);
    }, '/forgot-password': function forgotPassword() {
      return __webpack_require__(82);
    }, '/': function _() {
      return __webpack_require__(83);
    }, '/privacy-policy': function privacyPolicy() {
      return __webpack_require__(84);
    }, '/services': function services() {
      return __webpack_require__(85);
    }, '/terms-of-service': function termsOfService() {
      return __webpack_require__(86);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(location, callback) {
    var path, handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          path = location.pathname;
          handler = path && path.indexOf('/booking') > -1 ? routes['/booking'] : routes[path] || routes['/404'];
          context$1$0.next = 4;
          return regeneratorRuntime.awrap(handler());

        case 4:
          component = context$1$0.sent;
          context$1$0.next = 7;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            { location: location, path: path },
            _react2['default'].createElement(component, { location: location, path: path })
          )));

        case 7:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      // console.log(location);
      route(location, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(114);

  var Container = (function (_Component) {
    _inherits(Container, _Component);

    function Container() {
      _classCallCheck(this, Container);

      _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Container, [{
      key: 'render',

      // static propTypes = {
      //   children: PropTypes.element.isRequired,
      // };

      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Container' },
          this.props.children
        );
      }
    }]);

    return Container;
  })(_react.Component);

  exports['default'] = Container;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(118);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _libLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  var AppDispatcher = __webpack_require__(28);
  var BookingConstants = __webpack_require__(27);

  var BookingActions = {

    /**
     * @param  {string} services The services
     */
    setServices: function(services) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_SERVICES,
        services: services
      });
    },

    /**
     * @param  {string} service The ID of the Service
     */
    setService: function(service) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_SERVICE,
        service: service
      });
    },

    /**
     * @param  {string} location The location
     */
    setLocation: function(location) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_LOCATION,
        location: location
      });
    },

    /**
     * @param  {string} dates { dateStart, dateEnd }
     */
    setDates: function(dates) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_DATES,
        range: dates
      });
    },

    /**
     * @param  {string} timings Array of 'Morning', 'Afternoon' or 'Evening'
     */
    setTimeslots: function(timeslots) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_TIMESLOTS,
        timeslots: timeslots
      });
    },

    /**
     * @param  {string} sessions The booked sessions
     */
    setSessions: function(sessions) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_SESSIONS,
        sessions: sessions
      });
    },

    /**
     * @param  {string} sum The total sum
     */
    setSum: function(sum) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_SUM,
        sum: sum
      });
    },

    /**
     * @param  {string} booker The booker object containing contact and patient details
     */
    setBooker: function(booker) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_BOOKER,
        booker: booker
      });
    },

    /**
     * @param  {string} booking The completed booking
     */
    setBooking: function(booking) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_BOOKING,
        booking: booking
      });
    },

    /**
     * @param  {string} user The logged-in user
     */
    setUser: function(user) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_USER,
        user: user
      });
    },

    /**
     * @param  {string} patient The patient
     */
    setPatient: function(patient) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_PATIENT,
        patient: patient
      });
    },

    /**
     * @param  {string} last The last page
     */
    setLast: function(last) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_LAST,
        last: last
      });
    },

    /**
     * Destroy booking
     */
    destroyBooking: function() {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_DESTROY
      });
    },

    /**
     * @param  {string} last The last page
     */
    setPostStatus: function(postStatus) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.BOOKING_SET_POST_STATUS,
        postStatus: postStatus
      });
    },

    /**
     * @param  {string} text
     */
    create: function(text) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.TODO_CREATE,
        text: text
      });
    },

    /**
     * @param  {string} id The ID of the ToDo item
     * @param  {string} text
     */
    updateText: function(id, text) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.TODO_UPDATE_TEXT,
        id: id,
        text: text
      });
    },

    /**
     * Toggle whether a single ToDo is complete
     * @param  {object} todo
     */
    toggleComplete: function(todo) {
      var id = todo.id;
      var actionType = todo.complete ?
          BookingConstants.TODO_UNDO_COMPLETE :
          BookingConstants.TODO_COMPLETE;

      AppDispatcher.dispatch({
        actionType: actionType,
        id: id
      });
    },

    /**
     * Mark all ToDos as complete
     */
    toggleCompleteAll: function() {
      AppDispatcher.dispatch({
        actionType: BookingConstants.TODO_TOGGLE_COMPLETE_ALL
      });
    },

    /**
     * @param  {string} id
     */
    destroy: function(id) {
      AppDispatcher.dispatch({
        actionType: BookingConstants.TODO_DESTROY,
        id: id
      });
    },

    /**
     * Delete all the completed ToDos
     */
    destroyCompleted: function() {
      AppDispatcher.dispatch({
        actionType: BookingConstants.TODO_DESTROY_COMPLETED
      });
    }

  };

  module.exports = BookingActions;


/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("react-loader");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(102);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _BookingNavigationItem = __webpack_require__(45);

  var _BookingNavigationItem2 = _interopRequireDefault(_BookingNavigationItem);

  var BookingNavigation = (function (_Component) {
    _inherits(BookingNavigation, _Component);

    function BookingNavigation() {
      _classCallCheck(this, BookingNavigation);

      _get(Object.getPrototypeOf(BookingNavigation.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingNavigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BookingNavigation-wrapper' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'ul',
              { className: 'BookingNavigation' },
              _react2['default'].createElement(_BookingNavigationItem2['default'], { path: this.props.path, active: 'booking1', link: 'booking1', icon: '1', text: 'Select Service' }),
              _react2['default'].createElement(_BookingNavigationItem2['default'], { path: this.props.path, active: 'booking2', link: 'booking2', icon: '2', text: 'Select Location' }),
              _react2['default'].createElement(_BookingNavigationItem2['default'], { path: this.props.path, active: 'booking3', link: 'booking3a', icon: '3', text: 'Select Date & Time' })
            )
          )
        );
      }
    }]);

    return BookingNavigation;
  })(_react.Component);

  exports['default'] = BookingNavigation;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var util = {
    host: window.location.hostname.indexOf('ebeecare.com') > -1 ? 'https://api.ebeecare.com' : 'http://dev.ebeecare.com',
    authKey: 'secret',
    authSecret: 'secret0nlyWeilsonKnowsShhh852~'
  };

  exports['default'] = util;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("react-link-state");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactSkylight = __webpack_require__(26);

  var _reactSkylight2 = _interopRequireDefault(_reactSkylight);

  __webpack_require__(89);

  var AlertPopup = (function (_Component) {
    _inherits(AlertPopup, _Component);

    function AlertPopup() {
      _classCallCheck(this, AlertPopup);

      _get(Object.getPrototypeOf(AlertPopup.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AlertPopup, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var styles = {
          dialogStyles: {
            width: '50%',
            height: 'auto',
            marginTop: '0',
            marginLeft: '-25%',
            top: '100px',
            textAlign: 'center'
          },
          title: {
            color: '#f78d00'
          },
          closeButtonStyle: {
            color: '#f78d00',
            textDecoration: 'none'
          }
        };

        return _react2['default'].createElement(
          _reactSkylight2['default'],
          { dialogStyles: styles.dialogStyles, title: styles.title, closeButtonStyle: styles.closeButtonStyle, hideOnOverlayClicked: true, ref: function (c) {
              return _this._alertDialog = c;
            }, title: 'Alert' },
          _react2['default'].createElement(
            'div',
            { className: 'AlertPopup' },
            this.props.children,
            _react2['default'].createElement(
              'div',
              { className: 'AlertPopup-footer' },
              _react2['default'].createElement(
                'a',
                { className: 'btn btn-primary btn-small', href: '#', onClick: this._onClickClose.bind(this) },
                'OK'
              )
            )
          )
        );
      }
    }, {
      key: '_onClickClose',
      value: function _onClickClose(event) {
        this._alertDialog.hide();
      }
    }, {
      key: 'show',
      value: function show() {
        this._alertDialog.show();
      }
    }]);

    return AlertPopup;
  })(_react.Component);

  exports['default'] = AlertPopup;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("classNames");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  var AppDispatcher = __webpack_require__(28);
  var EventEmitter = __webpack_require__(141).EventEmitter;
  var BookingConstants = __webpack_require__(27);
  var assign = __webpack_require__(35);

  var CHANGE_EVENT = 'change';

  var _user;
  var _patient;
  var _services;
  var _servicesHash;
  var _booking = {};
  var _case = {};
  var _last = '';
  var _postStatus = 'confirmation';

  var orders = [
    '',
    'booking1',
    'booking2',
    'booking3a',
    'booking3b',
    'booking3c',
    'booking-confirmation',
    'booking-payment'
  ];

  var BookingStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the state.
     * @return {object}
     */
    getState: function() {
      return {
        allServices: _services,
        allServicesHash: _servicesHash,
        booking: _booking,
        postStatus: _postStatus,
        user: _user,
        case: _case,
        patient: _patient
      };
    },

    /**
     * Get the services.
     * @return {object}
     */
    getServices: function() {
      return _services;
    },

    /**
     * Get the services hash.
     * @return {object}
     */
    getServicesHash: function() {
      return _servicesHash;
    },

    /**
     * Get the booking.
     * @return {object}
     */
    getBooking: function() {
      return _booking;
    },

    /**
     * Get the last booking page.
     * @return {string}
     */
    getLastBookingPage: function() {
      return _last;
    },

    /**
     * Get whether navigation is allowed.
     * @return {object}
     */
    isNavigationAllowed: function(path) {
      if (path.charAt(0) === '/') {
        path = path.substring(1);
      }
      return (orders.indexOf(_last) + 1) >= orders.indexOf(path);
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    var text;

    switch(action.actionType) {
      case BookingConstants.BOOKING_SET_SERVICES:
        _services = action.services;
        BookingStore.emitChange();
        _servicesHash = {};
        _services.forEach(function(service) {
          _servicesHash[service.id] = service;
        });
        break;

      case BookingConstants.BOOKING_SET_SERVICE:
        _booking.service = action.service;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_LOCATION:
        _booking.location = action.location;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_DATES:
        _booking.range = action.range;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_TIMESLOTS:
        _booking.timeslots = action.timeslots;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_BOOKER:
        _booking.booker = action.booker;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_SESSIONS:
        _booking.sessions = action.sessions;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_SUM:
        _booking.sum = action.sum;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_BOOKING:
        _booking = action.booking;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_USER:
        _user = action.user;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_PATIENT:
        _patient = action.patient;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_LAST:
        _last = action.last;
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_DESTROY:
        _booking = {};
        _case = {};
        _last = '';
        _patient = null;
        _postStatus = 'confirmation'
        BookingStore.emitChange();
        break;

      case BookingConstants.BOOKING_SET_POST_STATUS:
        _postStatus = action.postStatus;
        BookingStore.emitChange();
        break;

      default:
        // no op
    }
  });

  module.exports = BookingStore;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(97);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _BookingDateTimeNavItem = __webpack_require__(43);

  var _BookingDateTimeNavItem2 = _interopRequireDefault(_BookingDateTimeNavItem);

  var BookingDateTime = (function (_Component) {
    _inherits(BookingDateTime, _Component);

    function BookingDateTime() {
      _classCallCheck(this, BookingDateTime);

      _get(Object.getPrototypeOf(BookingDateTime.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingDateTime, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BookingDateTime' },
          _react2['default'].createElement(
            'div',
            { className: 'BookingDateTimeNav-wrapper' },
            _react2['default'].createElement(
              _Container2['default'],
              null,
              _react2['default'].createElement(
                'ul',
                { className: 'BookingDateTimeNav' },
                _react2['default'].createElement(_BookingDateTimeNavItem2['default'], { path: this.props.path, active: 'booking3a', link: 'booking3a', name: 'Select Service Dates' }),
                _react2['default'].createElement(_BookingDateTimeNavItem2['default'], { path: this.props.path, active: 'booking3b', link: 'booking3b', name: 'Select Timeslots' }),
                _react2['default'].createElement(_BookingDateTimeNavItem2['default'], { path: this.props.path, active: 'booking3c', link: 'booking3c', name: 'Select Sessions' })
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _Container2['default'],
              null,
              _react2['default'].createElement(
                'div',
                { className: 'BookingDateTimeBody' },
                this.props.children
              )
            )
          )
        );
      }
    }]);

    return BookingDateTime;
  })(_react.Component);

  exports['default'] = BookingDateTime;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(34);

  var _historyLibCreateBrowserHistory = __webpack_require__(143);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(144);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("moment");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "43f565f8e0ed24ca60f85dc6ce1c48b4.png";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "0def4601a4b1a46863c80ddaadc3eb3a.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  __webpack_require__(87);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var Account = (function (_Component) {
    _inherits(Account, _Component);

    function Account(props) {
      _classCallCheck(this, Account);

      _get(Object.getPrototypeOf(Account.prototype), 'constructor', this).call(this, props);
      this.state = {
        bid: undefined,
        email: undefined
      };
    }

    _createClass(Account, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest1 && this.serverRequest1.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var components;
        if (this.props.type === 'login') {
          components = _react2['default'].createElement(
            'div',
            { className: 'Account-container' },
            _react2['default'].createElement(
              'div',
              { className: 'Account-find Account-container-item' },
              _react2['default'].createElement(
                _reactLoader2['default'],
                { className: 'spinner', loaded: !(this.props.booking && this.props.booking.id) && this.props.location.query.bid && this.props.location.query.email ? false : true },
                _react2['default'].createElement(
                  'form',
                  { ref: function (c) {
                      return _this._accountManageBookingForm = c;
                    } },
                  _react2['default'].createElement(
                    'h3',
                    null,
                    'Have Booking ID?'
                  ),
                  _react2['default'].createElement('input', { className: 'BookingIdInput', type: 'text', valueLink: (0, _reactLinkState2['default'])(this, 'bid'), placeholder: 'Booking ID*', required: true }),
                  _react2['default'].createElement('input', { className: 'EmailInput', type: 'email', valueLink: (0, _reactLinkState2['default'])(this, 'email'), placeholder: 'Enter Email*', required: true }),
                  _react2['default'].createElement('div', { className: 'Account-container-item-middle' }),
                  _react2['default'].createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this._onClickFindBooking.bind(this) },
                    'Find Booking'
                  )
                )
              )
            )
          );
        } else if (this.props.type === 'forgot-password') {
          components = _react2['default'].createElement(
            'div',
            { className: 'Account-container' },
            _react2['default'].createElement(
              'div',
              { className: 'Account-login Account-container-item' },
              _react2['default'].createElement(
                'form',
                { ref: function (c) {
                    return _this._accountForgotPasswordForm = c;
                  } },
                _react2['default'].createElement(
                  'h3',
                  null,
                  'Forgot Password?'
                ),
                _react2['default'].createElement('input', { className: 'EmailInput', type: 'email', placeholder: 'Enter Email*' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Account-container-item-middle' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'ForgotPasswordContainer' },
                    _react2['default'].createElement(
                      'a',
                      { href: '/manage-booking', className: 'ForgotPasswordLink', onClick: _Link2['default'].handleClick },
                      'Remembered Password?'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary' },
                  'Submit'
                )
              )
            )
          );
        }
        return _react2['default'].createElement(
          'div',
          { className: 'Account' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            components
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please fill up all required fields.'
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._noBookingAlertPopup = c;
              } },
            'Sorry, we are not able to find your booking.'
          )
        );
      }
    }, {
      key: '_onClickFindBooking',
      value: function _onClickFindBooking(event) {
        var _this2 = this;

        if (this._accountManageBookingForm.checkValidity()) {
          event.preventDefault();

          this.serverRequest1 = _superagent2['default'].get(_libUtil2['default'].host + '/api/getBooking').query({
            bid: this.state.bid,
            email: this.state.email
          }).auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/getBooking', status, err.toString());
            }
            if (res.body && res.body.booking && res.body.status) {
              console.log(res.body.booking);
              // if booking has already been completed
              if (res.body.booking && res.body.booking['case']) {
                _actionsBookingActions2['default'].setBooking(res.body.booking);
              }
            } else {
              console.error('Failed to obtain booking data.');
              _this2._noBookingAlertPopup.show();
            }
          });
        } else {
          event.preventDefault();
          this._alertPopup.show();
        }
      }
    }]);

    return Account;
  })(_react.Component);

  exports['default'] = Account;
  module.exports = exports['default'];
  /*
  <div className="Account-login Account-container-item">
   <form id="AccountLoginForm" action="https://app.ebecare.com/login/" method="POST">
     <h3>Already a Member?</h3>
     <input className="EmailInput" type="email" name="email" placeholder="Enter Email" />
     <input className="PasswordInput" type="password" name="password" placeholder="Enter Password" />
     <div className="Account-container-item-middle">
       <div className="ForgotPasswordContainer">
         <a href="/forgot-password" className="ForgotPasswordLink" onClick={Link.handleClick}>Forgot Password?</a>
       </div>
       <div>
         <input className="RememberMeCheckbox" type="checkbox" id="remember" name="remember" />
         <label className="RememberMeCheckboxLabel" htmlFor="remember">
           <span></span><span>Remember me</span>
         </label>
       </div>
     </div>
     <a href="#" className="btn btn-primary" onClick={this._onClickLogin.bind(this)}>Login</a>
   </form>
  </div>
  */

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDaterangePicker = __webpack_require__(147);

  var _reactDaterangePicker2 = _interopRequireDefault(_reactDaterangePicker);

  __webpack_require__(96);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingDate = (function (_Component) {
    _inherits(BookingDate, _Component);

    function BookingDate(props) {
      _classCallCheck(this, BookingDate);

      _get(Object.getPrototypeOf(BookingDate.prototype), 'constructor', this).call(this, props);
      this.state = {
        range: this.props.booking && this.props.booking.range // { start: Moment, end: Moment }
      };
    }

    _createClass(BookingDate, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var minimumDate = new Date();
        minimumDate.setDate(minimumDate.getDate() + 3);
        return _react2['default'].createElement(
          'div',
          { className: 'BookingDate' },
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            _react2['default'].createElement(_reactDaterangePicker2['default'], { numberOfCalendars: 2, selectionType: 'range', singleDateRange: true, minimumDate: minimumDate, value: this.state.range, onSelect: this._handleSelect.bind(this) })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            _react2['default'].createElement(
              'form',
              { id: 'BookingDateForm' },
              _react2['default'].createElement('input', { className: 'btn-inline', type: 'text', id: 'startDate', name: 'startDate', value: this.state.range && this.state.range.start && this.state.range.start.format('ll'), required: true, readOnly: true }),
              _react2['default'].createElement(
                'div',
                { className: 'BookingDateTo' },
                _react2['default'].createElement(
                  'i',
                  null,
                  'to'
                )
              ),
              _react2['default'].createElement('input', { className: 'btn-inline', type: 'text', id: 'endDate', name: 'endDate', value: this.state.range && this.state.range.end && this.state.range.end.format('ll'), required: true, readOnly: true })
            )
          ),
          _react2['default'].createElement('p', null),
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            _react2['default'].createElement(
              'a',
              { href: '/booking3b', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
              'NEXT'
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please select a date range.'
          )
        );
      }
    }, {
      key: '_handleSelect',
      value: function _handleSelect(range) {
        this.setState({
          range: range
        });
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        var form = document.getElementById('BookingDateForm');
        if (form.checkValidity()) {
          _Link2['default'].handleClick(event);

          // this.props.booking.range = this.state.range;
          _actionsBookingActions2['default'].setDates(this.state.range);
          _actionsBookingActions2['default'].setLast('booking3a');
        } else {
          event.preventDefault();
          // alert('Please select a date range.');
          this._alertPopup.show();
        }
      }
    }]);

    return BookingDate;
  })(_react.Component);

  exports['default'] = BookingDate;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _reactDatepicker = __webpack_require__(25);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  __webpack_require__(100);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _LoginPopup = __webpack_require__(56);

  var _LoginPopup2 = _interopRequireDefault(_LoginPopup);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingLocation = (function (_Component) {
    _inherits(BookingLocation, _Component);

    function BookingLocation(props) {
      _classCallCheck(this, BookingLocation);

      _get(Object.getPrototypeOf(BookingLocation.prototype), 'constructor', this).call(this, props);
      this.state = {
        client_contactEmail: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactEmail,
        client_contactNumber: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactNumber,
        client_firstName: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_firstName,
        client_lastName: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_lastName,
        patient_contactEmail: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactEmail,
        patient_contactNumber: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactNumber,
        patient_firstName: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_firstName,
        patient_lastName: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_lastName,
        patient_dob: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_dob,
        patient_gender: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_gender,
        additionalInfo: this.props.booking && this.props.booking.booker && this.props.booking.booker.additionalInfo,
        postalCode: this.props.booking && this.props.booking.location && this.props.booking.location.postalCode,
        address: this.props.booking && this.props.booking.location && this.props.booking.location.address,
        unitNumber: this.props.booking && this.props.booking.location && this.props.booking.location.unitNumber
      };
    }

    _createClass(BookingLocation, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var component, userDetails, patientDetails;
        component = _react2['default'].createElement(
          'form',
          { ref: function (c) {
              return _this._bookingLocationForm = c;
            } },
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationBodySection' },
            _react2['default'].createElement(
              'span',
              null,
              'I\'m an existing customer'
            ),
            _react2['default'].createElement(
              'a',
              { href: '#', className: 'btn btn-primary btn-small btn-inline', onClick: this._onClickLogin.bind(this) },
              'LOGIN'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationBodySection' },
            _react2['default'].createElement(
              'div',
              null,
              'Continue booking as guest'
            ),
            _react2['default'].createElement('input', { type: 'text', id: 'client_firstName', name: 'client_firstName', valueLink: (0, _reactLinkState2['default'])(this, 'client_firstName'), placeholder: 'First Name*', maxLength: '50', required: true }),
            _react2['default'].createElement('input', { type: 'text', id: 'client_lastName', name: 'client_lastName', valueLink: (0, _reactLinkState2['default'])(this, 'client_lastName'), placeholder: 'Last Name*', maxLength: '50', required: true }),
            _react2['default'].createElement('input', { type: 'email', id: 'client_contactEmail', name: 'client_contactEmail', valueLink: (0, _reactLinkState2['default'])(this, 'client_contactEmail'), placeholder: 'Email*', maxLength: '50', required: true }),
            _react2['default'].createElement('input', { type: 'text', id: 'client_contactNumber', name: 'client_contactNumber', valueLink: (0, _reactLinkState2['default'])(this, 'client_contactNumber'), placeholder: 'Contact Number*', maxLength: '8', required: true })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationBodySection' },
            _react2['default'].createElement(
              'div',
              null,
              'Patient Details (',
              _react2['default'].createElement('input', { className: 'RememberMeCheckbox', type: 'checkbox', id: 'isPatient', name: 'isPatient', onChange: this._onCheckedPatient.bind(this) }),
              _react2['default'].createElement(
                'label',
                { className: 'RememberMeCheckboxLabel', htmlFor: 'isPatient' },
                _react2['default'].createElement('span', null),
                _react2['default'].createElement(
                  'span',
                  null,
                  'Are you the patient?'
                )
              ),
              ' )'
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('input', { type: 'text', id: 'patient_firstName', name: 'patient_firstName', valueLink: (0, _reactLinkState2['default'])(this, 'patient_firstName'), placeholder: 'First Name*', maxLength: '50', required: true }),
              _react2['default'].createElement('input', { type: 'text', id: 'patient_lastName', name: 'patient_lastName', valueLink: (0, _reactLinkState2['default'])(this, 'patient_lastName'), placeholder: 'Last Name*', maxLength: '50', required: true }),
              _react2['default'].createElement(_reactDatepicker2['default'], { selected: this.state.patient_dob, maxDate: (0, _moment2['default'])(), dateFormat: 'YYYY-MM-DD', showYearDropdown: true, onChange: this._onSelectDob.bind(this), placeholderText: 'Date of Birth* (Y-M-D)' }),
              _react2['default'].createElement('input', { type: 'text', value: this.state.patient_dob, required: true, style: { 'display': 'none' } }),
              _react2['default'].createElement(
                'div',
                { className: 'radio radio-inline' },
                _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_male', name: 'patient_gender', checked: this.state.patient_gender === 'Male', onChange: this._onSelectGender.bind(this), value: 'Male', required: true }),
                _react2['default'].createElement(
                  'label',
                  { htmlFor: 'patient_gender_male' },
                  _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement('span', null)
                  ),
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Male'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'radio radio-inline' },
                _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_female', name: 'patient_gender', checked: this.state.patient_gender === 'Female', onChange: this._onSelectGender.bind(this), value: 'Female', required: true }),
                _react2['default'].createElement(
                  'label',
                  { htmlFor: 'patient_gender_female' },
                  _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement('span', null)
                  ),
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Female'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { style: { marginTop: '40px' } },
              _react2['default'].createElement(
                'div',
                null,
                'Additional Info:'
              ),
              _react2['default'].createElement('textarea', { name: 'additionalInfo', valueLink: (0, _reactLinkState2['default'])(this, 'additionalInfo'), placeholder: 'Please provide important notes about patient here.' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationBodySection' },
            _react2['default'].createElement(
              'div',
              null,
              'Patient Location / Address'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'PatientAddress' },
              _react2['default'].createElement(
                'div',
                { className: 'PatientAddressLeft inline' },
                _react2['default'].createElement('input', { type: 'text', id: 'postalCode', name: 'postalCode', value: this.state.postalCode, onChange: this._onChangePostalCode.bind(this), placeholder: 'Enter Postal Code*', required: true }),
                _react2['default'].createElement('input', { type: 'text', id: 'unitNumber', name: 'unitNumber', valueLink: (0, _reactLinkState2['default'])(this, 'unitNumber'), placeholder: 'Enter Unit Number' })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'PatientAddressRight inline' },
                _react2['default'].createElement('textarea', { id: 'address', name: 'address', valueLink: (0, _reactLinkState2['default'])(this, 'address'), placeholder: 'Enter Address*', required: true })
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'small' },
              'This information will only be used to contact you regarding your booking.'
            ),
            _react2['default'].createElement(
              'a',
              { href: '/booking3a', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
              'NEXT'
            )
          )
        );
        return _react2['default'].createElement(
          'div',
          { className: 'BookingLocation' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationWrapper' },
              _react2['default'].createElement(
                'div',
                { className: 'BookingLocationBody' },
                component
              ),
              this.props.children
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please fill up all required fields.'
          ),
          _react2['default'].createElement(_LoginPopup2['default'], { ref: function (c) {
              return _this._loginPopup = c;
            } })
        );
      }
    }, {
      key: '_onSelectDob',
      value: function _onSelectDob(date) {
        this.setState({
          patient_dob: date
        });
      }
    }, {
      key: '_onSelectGender',
      value: function _onSelectGender(event) {
        this.setState({
          patient_gender: event.target.value
        });
      }
    }, {
      key: '_onChangePostalCode',
      value: function _onChangePostalCode(event) {
        var that = this;
        var postalCodeInput = event.target;
        this.setState({
          postalCode: postalCodeInput.value
        });
        if (postalCodeInput.value.length === 6) {
          // console.log(postalCodeInput.value);
          try {
            // postalCodeInput.disabled = true;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': postalCodeInput.value,
              'region': 'SG'
            }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var position = results[0].geometry.location;
                geocoder.geocode({
                  latLng: position
                }, function (responses) {
                  if (responses && responses.length > 0) {
                    that.setState({
                      address: responses[0].formatted_address
                    });
                    // postalCodeInput.disabled = false;
                  } else {
                      // postalCodeInput.disabled = false;
                      console.error('Invalid postal code.');
                    }
                });
              } else {
                // postalCodeInput.disabled = false;
                console.error('Invalid postal code.');
              }
            });
          } catch (e) {
            // postalCodeInput.disabled = false;
            console.error('Unable to find your address.');
          }
        }
      }
    }, {
      key: '_onClickLogin',
      value: function _onClickLogin(event) {
        var _this2 = this;

        event.preventDefault();

        this._loginPopup.show(function (user) {
          if (user.type === 'Client') {
            _actionsBookingActions2['default'].setUser(user);
          } else {
            _this2.setState({
              error: true
            });
            console.error('Failed to login as you do not have a caregiver account.');
          }
        });
      }
    }, {
      key: '_onCheckedPatient',
      value: function _onCheckedPatient(event) {
        if (event.target.checked === true) {
          this.setState({
            patient_firstName: this.state.client_firstName,
            patient_lastName: this.state.client_lastName
          });
        } else {
          this.setState({
            patient_firstName: undefined,
            patient_lastName: undefined
          });
        }
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        if (this._bookingLocationForm.checkValidity()) {
          _Link2['default'].handleClick(event);

          var user = {
            client_contactEmail: this.state.client_contactEmail,
            client_contactNumber: this.state.client_contactNumber,
            client_firstName: this.state.client_firstName,
            client_lastName: this.state.client_lastName,
            patient_contactEmail: this.state.client_contactEmail,
            patient_contactNumber: this.state.client_contactNumber,
            patient_firstName: this.state.patient_firstName,
            patient_lastName: this.state.patient_lastName,
            patient_dob: this.state.patient_dob,
            patient_gender: this.state.patient_gender,
            additionalInfo: this.state.additionalInfo
          };
          // console.log(user);
          var location = {
            postalCode: this.state.postalCode,
            address: this.state.address,
            unitNumber: this.state.unitNumber
          };
          _actionsBookingActions2['default'].setBooker(user);
          _actionsBookingActions2['default'].setLocation(location);
          _actionsBookingActions2['default'].setLast('booking2');
        } else {
          event.preventDefault();
          // alert('Please fill up all required fields.');
          this._alertPopup.show();
        }
      }
    }]);

    return BookingLocation;
  })(_react.Component);

  exports['default'] = BookingLocation;
  module.exports = exports['default'];
  /*
  <span>or</span>
  <a href="/booking2" className="btn btn-primary btn-small btn-inline">REGISTER</a>
  */ /*
     <div className="select">
      <span></span>
      <select name="salutation">
        <option value="">Salutation</option>
      </select>
     </div>
     */

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _objectAssign = __webpack_require__(35);

  var _objectAssign2 = _interopRequireDefault(_objectAssign);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(109);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _ConfirmPopup = __webpack_require__(52);

  var _ConfirmPopup2 = _interopRequireDefault(_ConfirmPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingResults = (function (_Component) {
    _inherits(BookingResults, _Component);

    function BookingResults(props) {
      _classCallCheck(this, BookingResults);

      _get(Object.getPrototypeOf(BookingResults.prototype), 'constructor', this).call(this, props);
      this.state = {
        sessions: undefined,
        slots: undefined
      };
    }

    _createClass(BookingResults, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        // Reset sum displayed on sidebar
        _actionsBookingActions2['default'].setSum();

        this.serverRequest = _superagent2['default'].get(_libUtil2['default'].host + '/api/getAvailableSchedule').query({
          service: this.props.booking.service,
          dateStart: this.props.booking.range.start.format('YYYY-MM-DD'),
          dateEnd: this.props.booking.range.end.format('YYYY-MM-DD'),
          preferredPostalCode: this.props.booking.location.postalCode,
          'preferredTimes[]': this.props.booking.timeslots // hack to send PHP style arrays
        }).auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).end(function (err, res) {
          if (err) {
            return console.error(_libUtil2['default'].host + '/api/getAvailableSchedule', status, err.toString());
          }
          if (res.body && res.body.timeSlots && Array.isArray(res.body.timeSlots)) {
            // console.log(res.body.timeSlots);
            var sessions = [],
                checkedData = [],
                sum = 0;
            for (var i = 0; i < res.body.timeSlots.length; i++) {
              var timeslot = res.body.timeSlots[i];
              var session = {};
              for (var j = 0; j < timeslot.slots.length; j++) {
                if (timeslot.slots[j]['selected'] && timeslot.slots[j]['preferred']) {
                  session = timeslot.slots[j];
                  break;
                }
              }
              if (!session.time) {
                for (var j = 0; j < timeslot.slots.length; j++) {
                  if (timeslot.slots[j]['selected']) {
                    session = timeslot.slots[j];
                    break;
                  }
                }
              }
              sessions[i] = (0, _objectAssign2['default'])(session, { date: timeslot.date });
              if (session.time) {
                checkedData['session' + i] = true;
                sum += parseFloat(sessions[i]['price']);
              } else {
                session.disabled = true;
              }
            }
            var state = (0, _objectAssign2['default'])({
              slots: res.body.timeSlots,
              sessions: sessions
            }, checkedData);
            _this.setState(state);
            _actionsBookingActions2['default'].setSum(sum);
          } else {
            console.error('Failed to obtain timeslots data.');
          }
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var checkedLink = function checkedLink(key) {
          return (0, _reactLinkState2['default'])(_this2, key);
        };
        var handleChange = function handleChange(key) {
          return function (e) {
            checkedLink(key).requestChange(e.target.checked);

            var sum = 0;
            for (var i = 0; i < _this2.state.sessions.length; i++) {
              if (_this2.state['session' + i]) {
                sum += parseFloat(_this2.state.sessions[i].price);
              }
            }
            // this.props.booking.sum = this.state.sum;
            _actionsBookingActions2['default'].setSum(sum);
          };
        };
        return _react2['default'].createElement(
          'div',
          { className: 'BookingResults' },
          _react2['default'].createElement(
            _reactLoader2['default'],
            { className: 'spinner', loaded: this.state.sessions ? true : false },
            _react2['default'].createElement(
              'div',
              null,
              this.state.sessions && this.state.sessions.map(function (session, index) {
                return _react2['default'].createElement(
                  'div',
                  { className: 'BookingResultsItem', key: index },
                  _react2['default'].createElement('input', { className: 'BookingResultsCheckbox', type: 'checkbox', id: index, name: 'time', checked: checkedLink('session' + index).value, disabled: session.disabled, onChange: handleChange('session' + index) }),
                  _react2['default'].createElement(
                    'label',
                    { className: 'BookingResultsCheckboxLabel', htmlFor: index },
                    _react2['default'].createElement('span', null),
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingResultsCheckboxLabelMetaWrapper' },
                      _react2['default'].createElement(
                        'div',
                        { className: 'BookingResultsCheckboxLabelMeta' },
                        _react2['default'].createElement(
                          'span',
                          null,
                          session ? (0, _moment2['default'])(session.date, 'YYYY-MM-DD').format('DD MMM') : ''
                        ),
                        _react2['default'].createElement(
                          'span',
                          null,
                          session.time ? session.time : 'Not Available'
                        ),
                        _react2['default'].createElement(
                          'span',
                          null,
                          session.time ? '$ ' + session.price : ''
                        )
                      )
                    )
                  )
                );
              })
            ),
            _react2['default'].createElement('p', null),
            _react2['default'].createElement(
              'div',
              { className: 'text-center' },
              _react2['default'].createElement(
                'a',
                { href: '/booking4', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
                'BOOK NOW'
              )
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this2._alertPopup = c;
              } },
            'Please select at least one session.'
          ),
          _react2['default'].createElement(
            _ConfirmPopup2['default'],
            { ref: function (c) {
                return _this2._confirmPopup = c;
              } },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'form',
                { ref: function (c) {
                    return _this2._agreeForm = c;
                  } },
                _react2['default'].createElement('input', { className: 'AgreeCheckbox', type: 'checkbox', id: 'agree', name: 'agree', value: false, required: true }),
                _react2['default'].createElement(
                  'label',
                  { className: 'AgreeCheckboxLabel', htmlFor: 'agree' },
                  _react2['default'].createElement('span', null),
                  _react2['default'].createElement(
                    'span',
                    null,
                    'By making this booking, I agree to the ',
                    _react2['default'].createElement(
                      'a',
                      { href: '/terms-of-service', target: '_blank' },
                      'Terms of Service'
                    ),
                    ' and ',
                    _react2['default'].createElement(
                      'a',
                      { href: '/privacy-policy', target: '_blank' },
                      'Privacy Policy'
                    ),
                    '.'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this2._rejectPopup = c;
              } },
            'To continue, please accept our Terms of Service and Privacy Policy.'
          )
        );
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        var _this3 = this;

        var sessions = [];
        for (var i = 0; i < this.state.sessions.length; i++) {
          if (this.state['session' + i]) {
            sessions.push(this.state.sessions[i]);
          }
        }

        if (sessions.length === 0) {
          // alert('Please choose at least one session.');
          this._alertPopup.show();
          return event.preventDefault();
        }

        // if (confirm('Would you like to confirm the sessions?')) {
        this._confirmPopup.show(function () {
          if (_this3._agreeForm.checkValidity()) {
            // Link.handleClick(event);
            _libLocation2['default'].push({ pathname: '/booking4' });

            // console.log(sessions);
            _actionsBookingActions2['default'].setSessions(sessions);
            // console.log(this.state);
            _actionsBookingActions2['default'].setLast('booking3c');
          } else {
            _this3._rejectPopup.show();
          }
        });

        // } else {
        event.preventDefault();
        // }
      }
    }]);

    return BookingResults;
  })(_react.Component);

  exports['default'] = BookingResults;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _reactIconsLibFaSpinner = __webpack_require__(36);

  var _reactIconsLibFaSpinner2 = _interopRequireDefault(_reactIconsLibFaSpinner);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(110);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var ALL_SERVICES = 'All Services';

  var BookingServices = (function (_Component) {
    _inherits(BookingServices, _Component);

    function BookingServices(props) {
      _classCallCheck(this, BookingServices);

      _get(Object.getPrototypeOf(BookingServices.prototype), 'constructor', this).call(this, props);
      this.state = {
        filter: ALL_SERVICES,
        selectedService: undefined
      };
      if (this.props.booking && this.props.booking.service) {
        this.state.selectedService = this.props.booking.service;
      } else if (this.props.allServices && this.props.location.query && this.props.location.query.sid) {
        for (var i = 0; i < this.props.allServices.length; i++) {
          if (parseInt(this.props.allServices[i].id) === parseInt(this.props.location.query.sid)) {
            this.state.selectedService = this.props.allServices[i].id;
            break;
          }
        }
      }
    }

    _createClass(BookingServices, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (props.booking && props.booking.service) {
          this.setState({
            selectedService: props.booking.service
          });
        } else if (props.allServices && props.location.query && props.location.query.sid) {
          for (var i = 0; i < props.allServices.length; i++) {
            if (parseInt(props.allServices[i].id) === parseInt(props.location.query.sid)) {
              this.setState({
                selectedService: props.allServices[i].id
              });
              break;
            }
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(
          'div',
          { className: 'BookingServices' },
          _react2['default'].createElement(
            _reactLoader2['default'],
            { className: 'spinner', loaded: this.props.allServices ? true : false },
            _react2['default'].createElement(
              'div',
              { className: 'BookingServicesNav-wrapper' },
              _react2['default'].createElement(
                _Container2['default'],
                null,
                _react2['default'].createElement(
                  'ul',
                  { className: 'BookingServicesNav' },
                  _react2['default'].createElement(
                    'li',
                    { className: 'BookingServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('BookingServicesNav-link', this.state.filter === ALL_SERVICES ? 'active' : ''), href: '/', onClick: this._onClickFilter.bind(this, ALL_SERVICES) },
                      'All Services',
                      _react2['default'].createElement(
                        'span',
                        { className: 'BookingServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'BookingServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('BookingServicesNav-link', this.state.filter === 'Home Nursing' ? 'active' : ''), href: '/about', onClick: this._onClickFilter.bind(this, 'Home Nursing') },
                      'Home Nursing',
                      _react2['default'].createElement(
                        'span',
                        { className: 'BookingServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'BookingServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('BookingServicesNav-link', this.state.filter === 'Home Social Care' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home Social Care') },
                      'Home Social Care',
                      _react2['default'].createElement(
                        'span',
                        { className: 'BookingServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'BookingServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('BookingServicesNav-link', this.state.filter === 'Home Medical' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home Medical') },
                      'Home Medical',
                      _react2['default'].createElement(
                        'span',
                        { className: 'BookingServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'BookingServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('BookingServicesNav-link', this.state.filter === 'Home TCM' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home TCM') },
                      'Home TCM',
                      _react2['default'].createElement(
                        'span',
                        { className: 'BookingServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                _Container2['default'],
                null,
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingServicesBody' },
                  _react2['default'].createElement(
                    'form',
                    { ref: function (c) {
                        return _this._bookingServicesForm = c;
                      } },
                    this.props.allServices && this._filterServices(this.props.allServices, this.state.filter).map(function (service) {
                      var id = "BookingServicesRadio" + service.id;
                      return _react2['default'].createElement(
                        'div',
                        { className: 'BookingServicesItem', key: service.id },
                        _react2['default'].createElement('input', { className: 'BookingServicesRadio', type: 'radio', id: id, name: 'service', value: service.id, checked: service.id === _this.state.selectedService, onChange: _this._onSelect.bind(_this), required: true }),
                        _react2['default'].createElement(
                          'label',
                          { className: 'BookingServicesRadioLabel', htmlFor: id },
                          _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement('span', null)
                          ),
                          _react2['default'].createElement(
                            'span',
                            null,
                            service.name
                          )
                        )
                      );
                    })
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingServicesFooter' },
                  _react2['default'].createElement(
                    'a',
                    { href: '/booking2', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
                    'NEXT'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please select a service.'
          )
        );
      }
    }, {
      key: '_onClickFilter',
      value: function _onClickFilter(filter, event) {
        event.preventDefault();

        this.setState({
          filter: filter
        });
      }
    }, {
      key: '_onSelect',
      value: function _onSelect(event) {
        this.setState({
          selectedService: parseInt(event.target.value)
        });
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        if (this._bookingServicesForm.checkValidity()) {
          _Link2['default'].handleClick(event);
          _actionsBookingActions2['default'].setService(this.state.selectedService);
          _actionsBookingActions2['default'].setLast('booking1');
        } else {
          event.preventDefault();
          // alert('Please select a service');
          this._alertPopup.show();
        }
      }
    }, {
      key: '_filterServices',
      value: function _filterServices(services, filter) {
        return services.filter(function (service) {
          if (filter === ALL_SERVICES) return true;
          return service.category === filter;
        }).sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      }
    }]);

    return BookingServices;
  })(_react.Component);

  exports['default'] = BookingServices;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  __webpack_require__(112);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingTime = (function (_Component) {
    _inherits(BookingTime, _Component);

    function BookingTime(props) {
      _classCallCheck(this, BookingTime);

      _get(Object.getPrototypeOf(BookingTime.prototype), 'constructor', this).call(this, props);
      this.state = {
        Morning: this.props.booking && this.props.booking.timeslots && this.props.booking.timeslots.indexOf('Morning') > -1,
        Afternoon: this.props.booking && this.props.booking.timeslots && this.props.booking.timeslots.indexOf('Afternoon') > -1,
        Evening: this.props.booking && this.props.booking.timeslots && this.props.booking.timeslots.indexOf('Evening') > -1
      };
    }

    _createClass(BookingTime, [{
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(
          'div',
          { className: 'BookingTime' },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'BookingTimeItem' },
              _react2['default'].createElement('input', { className: 'BookingTimeCheckbox', type: 'checkbox', id: 'timeMorning', name: 'time', checkedLink: (0, _reactLinkState2['default'])(this, 'Morning'), value: 'Morning' }),
              _react2['default'].createElement(
                'label',
                { className: 'BookingTimeCheckboxLabel', htmlFor: 'timeMorning' },
                _react2['default'].createElement('span', null),
                _react2['default'].createElement(
                  'span',
                  null,
                  'Morning: 8.00am - 11:00am'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingTimeItem' },
              _react2['default'].createElement('input', { className: 'BookingTimeCheckbox', type: 'checkbox', id: 'timeAfternoon', name: 'time', checkedLink: (0, _reactLinkState2['default'])(this, 'Afternoon'), value: 'Afternoon' }),
              _react2['default'].createElement(
                'label',
                { className: 'BookingTimeCheckboxLabel', htmlFor: 'timeAfternoon' },
                _react2['default'].createElement('span', null),
                _react2['default'].createElement(
                  'span',
                  null,
                  'Afternoon: 12:00pm - 5:00pm'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingTimeItem' },
              _react2['default'].createElement('input', { className: 'BookingTimeCheckbox', type: 'checkbox', id: 'timeEvening', name: 'time', checkedLink: (0, _reactLinkState2['default'])(this, 'Evening'), value: 'Evening' }),
              _react2['default'].createElement(
                'label',
                { className: 'BookingTimeCheckboxLabel', htmlFor: 'timeEvening' },
                _react2['default'].createElement('span', null),
                _react2['default'].createElement(
                  'span',
                  null,
                  'Evening: 7:00pm - 10:00pm'
                )
              )
            )
          ),
          _react2['default'].createElement('p', null),
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            _react2['default'].createElement(
              'a',
              { href: '/booking3c', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
              'NEXT'
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please select at least one timeslot.'
          )
        );
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        var timeslots = [];
        for (var timeslot in this.state) {
          if (this.state[timeslot]) {
            timeslots.push(timeslot);
          }
        }

        if (timeslots.length === 0) {
          // alert('Please choose at least one timeslot.');
          this._alertPopup.show();
          return event.preventDefault();
        }

        _Link2['default'].handleClick(event);

        // this.props.booking.timeslots = timeslots;
        _actionsBookingActions2['default'].setTimeslots(timeslots);
        _actionsBookingActions2['default'].setLast('booking3b');
      }
    }]);

    return BookingTime;
  })(_react.Component);

  exports['default'] = BookingTime;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("react-datepicker");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("react-skylight");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  var keyMirror = __webpack_require__(145);

  module.exports = keyMirror({
    BOOKING_SET_SERVICE: null,
    BOOKING_SET_BOOKER: null,
    BOOKING_SET_LOCATION: null,
    BOOKING_SET_DATES: null,
    BOOKING_SET_TIMINGS: null,
    BOOKING_SET_SERVICES: null,
    BOOKING_SET_SESSIONS: null,
    BOOKING_SET_SUM: null,
    BOOKING_SET_BOOKING: null,
    BOOKING_SET_LAST: null,
    BOOKING_SET_USER: null,
    BOOKING_SET_PATIENT: null,
    BOOKING_DESTROY: null,
    BOOKING_SET_POST_STATUS: null
  });


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  var Dispatcher = __webpack_require__(142).Dispatcher;

  module.exports = new Dispatcher();


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  __webpack_require__(91);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _BookingNavigation = __webpack_require__(8);

  var _BookingNavigation2 = _interopRequireDefault(_BookingNavigation);

  var _BookingServices = __webpack_require__(23);

  var _BookingServices2 = _interopRequireDefault(_BookingServices);

  var _BookingLocation = __webpack_require__(21);

  var _BookingLocation2 = _interopRequireDefault(_BookingLocation);

  var _BookingLocationUser = __webpack_require__(44);

  var _BookingLocationUser2 = _interopRequireDefault(_BookingLocationUser);

  var _BookingDateTime = __webpack_require__(14);

  var _BookingDateTime2 = _interopRequireDefault(_BookingDateTime);

  var _BookingDate = __webpack_require__(20);

  var _BookingDate2 = _interopRequireDefault(_BookingDate);

  var _BookingTime = __webpack_require__(24);

  var _BookingTime2 = _interopRequireDefault(_BookingTime);

  var _BookingResults = __webpack_require__(22);

  var _BookingResults2 = _interopRequireDefault(_BookingResults);

  var _BookingComplete = __webpack_require__(40);

  var _BookingComplete2 = _interopRequireDefault(_BookingComplete);

  var _BookingPostNavigation = __webpack_require__(49);

  var _BookingPostNavigation2 = _interopRequireDefault(_BookingPostNavigation);

  var _BookingConfirmation = __webpack_require__(41);

  var _BookingConfirmation2 = _interopRequireDefault(_BookingConfirmation);

  var _BookingPayment = __webpack_require__(46);

  var _BookingPayment2 = _interopRequireDefault(_BookingPayment);

  var _BookingPaypal = __webpack_require__(47);

  var _BookingPaypal2 = _interopRequireDefault(_BookingPaypal);

  var _BookingBankTransfer = __webpack_require__(39);

  var _BookingBankTransfer2 = _interopRequireDefault(_BookingBankTransfer);

  var _BookingCredits = __webpack_require__(42);

  var _BookingCredits2 = _interopRequireDefault(_BookingCredits);

  var _BookingPostComplete = __webpack_require__(48);

  var _BookingPostComplete2 = _interopRequireDefault(_BookingPostComplete);

  var _BookingSidebar = __webpack_require__(51);

  var _BookingSidebar2 = _interopRequireDefault(_BookingSidebar);

  var _BookingPostSidebar = __webpack_require__(50);

  var _BookingPostSidebar2 = _interopRequireDefault(_BookingPostSidebar);

  var _BookingDetails = __webpack_require__(30);

  var _BookingDetails2 = _interopRequireDefault(_BookingDetails);

  var _Account = __webpack_require__(19);

  var _Account2 = _interopRequireDefault(_Account);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingApp = (function (_Component) {
    _inherits(BookingApp, _Component);

    function BookingApp(props) {
      _classCallCheck(this, BookingApp);

      _get(Object.getPrototypeOf(BookingApp.prototype), 'constructor', this).call(this, props);
      if (this.props.path.indexOf('booking-confirmation') === -1 && !_storesBookingStore2['default'].isNavigationAllowed(this.props.path)) {
        _libLocation2['default'].replace('');
      } else {
        this.state = _storesBookingStore2['default'].getState();
      }
    }

    _createClass(BookingApp, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        _storesBookingStore2['default'].addChangeListener(this._onChange.bind(this));

        if (!_storesBookingStore2['default'].getServices()) {
          this.serverRequest1 = _superagent2['default'].get(_libUtil2['default'].host + '/api/getServices').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/getServices', err.toString());
            }
            if (res.body && res.body.services && Array.isArray(res.body.services)) {
              // console.log(res.body.services);
              _actionsBookingActions2['default'].setServices(res.body.services);
            } else {
              console.error('Failed to obtain services data.');
            }
          });
        }

        // if "bid" query parameter exists, must be booking confirmation
        if (this.props.location && this.props.location.query && this.props.location.query.bid && this.props.location.query.email) {
          if (this.props.location.query.token) {
            _actionsBookingActions2['default'].setPostStatus('payment-paypal');
          }

          this.serverRequest2 = _superagent2['default'].get(_libUtil2['default'].host + '/api/getBooking').query({
            bid: this.props.location.query.bid,
            email: this.props.location.query.email
          }).auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/getBooking', status, err.toString());
            }
            if (res.body && res.body.booking && res.body.status) {
              console.log(res.body.booking);
              if (res.body.booking && res.body.booking['case'] && res.body.booking['case'].isPaid) {
                // if booking has already been completed
                _actionsBookingActions2['default'].setPostStatus('success');
              } else if (res.body.booking && res.body.booking['case'] && res.body.booking['case'].status === 'Accepting Quotes') {
                // if booking is still pending service providers
                _libLocation2['default'].replace({ pathname: '/booking-manage', query: { bid: _this.props.location.query.bid, email: _this.props.location.query.email } });
                // Location.replace({ pathname: '/manage-booking', query: { bid: this.props.location.query.bid, email: this.props.location.query.email } });
              }
              _actionsBookingActions2['default'].setBooking(res.body.booking);
            } else {
              console.error('Failed to obtain booking data.');
            }
          });
        }

        // if "uid" query parameter exists, login automatically
        if (this.props.location && this.props.location.query && this.props.location.query.uid && this.props.location.query.token) {
          this.serverRequest3 = _superagent2['default'].get(_libUtil2['default'].host + '/api/getUser').auth(this.props.location.query.uid, this.props.location.query.token).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/getUser', status, err.toString());
            }
            if (res.body && res.body.status === 1) {
              console.log(res.body.user);
              _actionsBookingActions2['default'].setUser(res.body.user);
            } else {
              console.error('Failed to get user data.');
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _storesBookingStore2['default'].removeChangeListener(this._onChange.bind(this));

        this.serverRequest1 && this.serverRequest1.abort();
        this.serverRequest2 && this.serverRequest2.abort();
        this.serverRequest3 && this.serverRequest3.abort();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (props.path.indexOf('booking-confirmation') === -1 && !_storesBookingStore2['default'].isNavigationAllowed(props.path)) {
          _libLocation2['default'].replace('');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('rendered ' + this.props.path + ' ' + this.state.postStatus);
        var component;
        if (this.state) {
          if (this.props.location && this.props.path === '/booking1') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
              _react2['default'].createElement(_BookingServices2['default'], { location: this.props.location, allServices: this.state.allServices, booking: this.state.booking })
            );
          } else if (this.props.location && this.props.path === '/booking2') {
            if (this.state.user) {
              component = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
                _react2['default'].createElement(
                  _BookingLocationUser2['default'],
                  { allServicesHash: this.state.allServicesHash, booking: this.state.booking, user: this.state.user, patient: this.state.patient },
                  _react2['default'].createElement(_BookingSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
                )
              );
            } else {
              component = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
                _react2['default'].createElement(
                  _BookingLocation2['default'],
                  { allServicesHash: this.state.allServicesHash, booking: this.state.booking },
                  _react2['default'].createElement(_BookingSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
                )
              );
            }
          } else if (this.props.location && (this.props.path === '/booking3' || this.props.path === '/booking3a')) {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
              _react2['default'].createElement(
                _BookingDateTime2['default'],
                { booking: this.state.booking, path: this.props.path },
                _react2['default'].createElement(_BookingDate2['default'], { booking: this.state.booking }),
                _react2['default'].createElement(_BookingSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking3b') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
              _react2['default'].createElement(
                _BookingDateTime2['default'],
                { booking: this.state.booking, path: this.props.path },
                _react2['default'].createElement(_BookingTime2['default'], { booking: this.state.booking }),
                _react2['default'].createElement(_BookingSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking3c') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingNavigation2['default'], { path: this.props.path }),
              _react2['default'].createElement(
                _BookingDateTime2['default'],
                { booking: this.state.booking, path: this.props.path },
                _react2['default'].createElement(_BookingResults2['default'], { booking: this.state.booking }),
                _react2['default'].createElement(_BookingSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking4') {
            component = _react2['default'].createElement(_BookingComplete2['default'], { booking: this.state.booking, user: this.state.user, patient: this.state.patient });
          } else if (this.props.location && this.props.path === '/booking-confirmation' && this.state.postStatus === 'confirmation') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingPostNavigation2['default'], { path: this.props.path, postStatus: this.state.postStatus }),
              _react2['default'].createElement(
                _BookingConfirmation2['default'],
                { location: this.props.location, booking: this.state.booking },
                _react2['default'].createElement(_BookingPostSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking-confirmation' && this.state.postStatus === 'payment-paypal') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingPostNavigation2['default'], { path: this.props.path, postStatus: this.state.postStatus }),
              _react2['default'].createElement(
                _BookingPayment2['default'],
                { path: this.props.path, postStatus: this.state.postStatus },
                _react2['default'].createElement(_BookingPaypal2['default'], { location: this.props.location, booking: this.state.booking }),
                _react2['default'].createElement(_BookingPostSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking-confirmation' && this.state.postStatus === 'payment-bank') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingPostNavigation2['default'], { path: this.props.path, postStatus: this.state.postStatus }),
              _react2['default'].createElement(
                _BookingPayment2['default'],
                { path: this.props.path, postStatus: this.state.postStatus },
                _react2['default'].createElement(_BookingBankTransfer2['default'], { booking: this.state.booking }),
                _react2['default'].createElement(_BookingPostSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking-confirmation' && this.state.postStatus === 'payment-credits') {
            component = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_BookingPostNavigation2['default'], { path: this.props.path, postStatus: this.state.postStatus }),
              _react2['default'].createElement(
                _BookingPayment2['default'],
                { path: this.props.path, postStatus: this.state.postStatus },
                _react2['default'].createElement(_BookingCredits2['default'], { booking: this.state.booking }),
                _react2['default'].createElement(_BookingPostSidebar2['default'], { allServicesHash: this.state.allServicesHash, booking: this.state.booking })
              )
            );
          } else if (this.props.location && this.props.path === '/booking-confirmation' && this.state.postStatus === 'success') {
            component = _react2['default'].createElement(_BookingPostComplete2['default'], { booking: this.state.booking });
          } else if (this.props.location && this.props.path === '/booking-manage') {
            if (this.state.booking && this.state.booking.id) {
              component = _react2['default'].createElement(_BookingDetails2['default'], { location: this.props.location, booking: this.state.booking });
            } else {
              component = _react2['default'].createElement(_Account2['default'], { type: 'login', location: this.props.location, booking: this.props.booking });
            }
          }
        }
        return _react2['default'].createElement(
          'div',
          { className: 'BookingApp' },
          component
        );
      }

      /**
       * Event handler for 'change' events coming from the BookingStore
       */
    }, {
      key: '_onChange',
      value: function _onChange() {
        this.setState(_storesBookingStore2['default'].getState());
        // console.log(this.state);
      }
    }]);

    return BookingApp;
  })(_react.Component);

  exports['default'] = BookingApp;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(99);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingDetails = (function (_Component) {
    _inherits(BookingDetails, _Component);

    function BookingDetails(props) {
      _classCallCheck(this, BookingDetails);

      _get(Object.getPrototypeOf(BookingDetails.prototype), 'constructor', this).call(this, props);
      this.state = {
        booking: this.props.booking,
        editingUser: false,
        editingPatient: false,
        editingAddress: false
      };
    }

    _createClass(BookingDetails, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var userDetails, patientDetails, addressDetails, sessionDetails, caregiverSection, paymentButton;
        if (this.state.editingUser) {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._userDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'First Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'client_firstName', name: 'client_firstName', valueLink: (0, _reactLinkState2['default'])(this, 'client_firstName'), placeholder: 'First Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Last Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'client_lastName', name: 'client_lastName', valueLink: (0, _reactLinkState2['default'])(this, 'client_lastName'), placeholder: 'Last Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Contact Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'client_contactNumber', name: 'client_contactNumber', valueLink: (0, _reactLinkState2['default'])(this, 'client_contactNumber'), placeholder: 'Contact Number*', maxLength: '8', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'user') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'user') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'First Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_firstName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Last Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_lastName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Email'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_contactEmail
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Contact Number'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_contactNumber
              )
            )
          );
        }
        if (this.state.editingPatient) {
          patientDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._patientDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'First Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'patient_firstName', name: 'patient_firstName', value: this.props.booking.patient_firstName, placeholder: 'First Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Last Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'patient_lastName', name: 'patient_lastName', value: this.props.booking.patient_lastName, placeholder: 'Last Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Gender'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_male', name: 'patient_gender', checked: this.props.booking.patient_gender === 'Male', value: 'Male', required: true }),
                    _react2['default'].createElement(
                      'label',
                      { htmlFor: 'patient_gender_male' },
                      _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement('span', null)
                      ),
                      _react2['default'].createElement(
                        'span',
                        null,
                        'Male'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_female', name: 'patient_gender', checked: this.props.booking.patient_gender === 'Female', value: 'Female', required: true }),
                    _react2['default'].createElement(
                      'label',
                      { htmlFor: 'patient_gender_female' },
                      _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement('span', null)
                      ),
                      _react2['default'].createElement(
                        'span',
                        null,
                        'Female'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Date of Birth'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement(DatePicker, { selected: (0, _moment2['default'])(this.props.booking.patient_dob), maxDate: (0, _moment2['default'])(), dateFormat: 'YYYY-MM-DD', showYearDropdown: true, onChange: this._onSelectDob.bind(this), placeholderText: 'Date of Birth* (Y-M-D)' })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'patient') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'patient') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          patientDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'First Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_firstName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Last Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_lastName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Gender'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_gender
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Date of Birth'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                (0, _moment2['default'])(this.props.booking.patient_dob, 'YYYY-MM-DD').format('ll')
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Additional Notes'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking['case'].notes
              )
            )
          );
        }
        if (this.state.editingAddress) {
          addressDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._addressDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Postal Code'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'postalCode', name: 'postalCode', onChange: this._onChangePostalCode.bind(this), value: this.state.postalCode, placeholder: 'Enter Postal Code*', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Address'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('textarea', { id: 'address', name: 'address', valueLink: (0, _reactLinkState2['default'])(this, 'address'), placeholder: 'Enter Address*', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Unit Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'unitNumber', name: 'unitNumber', valueLinkg: (0, _reactLinkState2['default'])(this, 'unitNumber'), placeholder: 'Enter Unit Number' })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'address') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'address') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          addressDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              null,
              this.props.booking['case'] && this.props.booking['case'].addresses[0].address
            ),
            _react2['default'].createElement(
              'div',
              null,
              this.props.booking['case'] && this.props.booking['case'].addresses[0].unitNumber
            )
          );
        }
        sessionDetails = _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'TableRow TableRowHeader' },
            _react2['default'].createElement(
              'div',
              { className: 'TableRowItem1' },
              'Date'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRowItem1' },
              'Session'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRowItem1' },
              this.props.booking['case'].isPaid ? '' : 'Estimated ',
              'Costs'
            )
          ),
          this.props.booking['case'].dates.map(function (session) {
            return _react2['default'].createElement(
              'div',
              { className: 'TableRow', key: session.id },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                (0, _moment2['default'])(session.dateTimeStart).format('D MMM')
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                session.estTime
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                '$ ',
                session.price
              )
            );
          })
        );
        // show caregiver section only if case has been paid
        if (this.props.booking && this.props.booking['case'] && this.props.booking['case'].isPaid) {
          caregiverSection = _react2['default'].createElement(
            'div',
            { className: 'BookingDetailsBodySection' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingDetailsBodySectionTitle' },
              _react2['default'].createElement(
                'h3',
                null,
                'Caregiver Details'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.props.booking['case'].quotes[0].fullName
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Email'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.props.booking['case'].quotes[0].user.email
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Contact Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.props.booking['case'].quotes[0].user.mobilePhone
                )
              )
            )
          );
        }
        // show payment button only if booking is "Closed" and not yet paid, and if not editing
        if (this.props.booking && this.props.booking['case'] && this.props.booking['case'].status === 'Closed' && !this.props.booking['case'].isPaid && !this.state.editingUser && !this.state.editingPatient && !this.state.editingAddress) {
          paymentButton = _react2['default'].createElement(
            'a',
            { href: '#', className: 'btn btn-primary', onClick: this._onClickPay.bind(this) },
            'GO TO PAYMENT'
          );
        }

        // set booking status
        var bookingStatus = '';
        if (this.props.booking['case'].status === 'Accepting Quotes') {
          bookingStatus = 'Pending Confirmation';
        } else if (this.props.booking['case'].status === 'Closed' && this.props.booking['case'].isPaid) {
          bookingStatus = 'Paid & Confirmed';
        } else if (this.props.booking['case'].status === 'Closed' && !this.props.booking['case'].isPaid) {
          bookingStatus = 'Awaiting Payment for Confirmation';
        } else {
          bookingStatus = this.props.booking['case'].status;
        }

        return _react2['default'].createElement(
          'div',
          { className: 'BookingDetails' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              _reactLoader2['default'],
              { className: 'spinner', loaded: this.props.booking.id ? true : false },
              _react2['default'].createElement(
                'div',
                { className: 'BookingDetailsWrapper' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingDetailsBody' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingDetailsBodyActions' },
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingDetailsFooter' },
                      paymentButton
                    ),
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingDetailsFooter' },
                      _react2['default'].createElement(
                        'a',
                        { href: '/booking-manage', className: 'btn btn-primary', onClick: this._onClickManageBooking.bind(this) },
                        'ANOTHER BOOKING'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'Booking ID: #',
                    this.state.booking.id
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: '' },
                    _react2['default'].createElement(
                      'div',
                      null,
                      _react2['default'].createElement(
                        'div',
                        { className: 'TableRow' },
                        _react2['default'].createElement(
                          'div',
                          { className: 'TableRowItem1' },
                          'Status'
                        ),
                        _react2['default'].createElement(
                          'div',
                          { className: 'TableRowItem3' },
                          bookingStatus
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingDetailsBodyColumnWrapper' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingDetailsBodyColumn' },
                      _react2['default'].createElement(
                        'div',
                        { className: 'BookingDetailsBodySection' },
                        _react2['default'].createElement(
                          'div',
                          { className: 'BookingDetailsBodySectionTitle' },
                          _react2['default'].createElement(
                            'h3',
                            null,
                            'Contact Person Details'
                          ),
                          _react2['default'].createElement(
                            'a',
                            { href: '#', className: this.state.editingUser || this.props.booking['case'].isPaid ? 'hidden' : '', onClick: this._onClickEdit.bind(this, 'user') },
                            _react2['default'].createElement('img', { src: __webpack_require__(17) })
                          )
                        ),
                        _react2['default'].createElement(
                          _reactLoader2['default'],
                          { className: 'spinner', loaded: !this.state.updatingUser ? true : false },
                          userDetails
                        )
                      ),
                      _react2['default'].createElement(
                        'div',
                        { className: 'BookingDetailsBodySection' },
                        _react2['default'].createElement(
                          'div',
                          { className: 'BookingDetailsBodySectionTitle' },
                          _react2['default'].createElement(
                            'h3',
                            null,
                            'Patient Details'
                          )
                        ),
                        patientDetails
                      ),
                      _react2['default'].createElement(
                        'div',
                        { className: 'BookingDetailsBodySection' },
                        _react2['default'].createElement(
                          'div',
                          { className: 'BookingDetailsBodySectionTitle' },
                          _react2['default'].createElement(
                            'h3',
                            null,
                            'Patient Location / Address'
                          )
                        ),
                        _react2['default'].createElement(
                          _reactLoader2['default'],
                          { className: 'spinner', loaded: !this.state.updatingAddress ? true : false },
                          addressDetails
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingDetailsBodyColumn' },
                      caregiverSection,
                      _react2['default'].createElement(
                        'div',
                        { className: 'BookingDetailsBodySection' },
                        _react2['default'].createElement(
                          'div',
                          { className: 'BookingDetailsBodySectionTitle' },
                          _react2['default'].createElement(
                            'h3',
                            null,
                            'Session Details'
                          )
                        ),
                        sessionDetails
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingDetailsFooter' },
                    _react2['default'].createElement(
                      'span',
                      null,
                      paymentButton
                    ),
                    _react2['default'].createElement(
                      'span',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/booking-manage', className: 'btn btn-primary', onClick: this._onClickManageBooking.bind(this) },
                        'ANOTHER BOOKING'
                      )
                    )
                  )
                ),
                this.props.children
              )
            )
          )
        );
      }
    }, {
      key: '_onClickEdit',
      value: function _onClickEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({
              client_firstName: this.props.booking.client_firstName,
              client_lastName: this.props.booking.client_lastName,
              client_contactNumber: this.props.booking.client_contactNumber,

              editingUser: true });
            break;
          case 'patient':
            this.setState({ editingPatient: true });
            break;
          case 'address':
            this.setState({
              postalCode: this.props.booking['case'].addresses[0].postalCode,
              address: this.props.booking['case'].addresses[0].address,
              unitNumber: this.props.booking['case'].addresses[0].unitNumber,

              editingAddress: true
            });
            break;
        }
      }
    }, {
      key: '_onClickStopEdit',
      value: function _onClickStopEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({ editingUser: false });
            break;
          case 'patient':
            this.setState({ editingPatient: false });
            break;
          case 'address':
            this.setState({ editingAddress: false });
            break;
        }
      }
    }, {
      key: '_onClickSave',
      value: function _onClickSave(entity, event) {
        var _this2 = this;

        event.preventDefault();

        switch (entity) {
          case 'user':
            if (this._userDetailsForm.checkValidity()) {
              this.setState({ updatingUser: true });
              this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/editBooking').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
                bid: this.props.booking && this.props.booking.id,
                token: this.props.booking && this.props.booking.token,
                booking: {
                  client_firstName: this.state.client_firstName,
                  client_lastName: this.state.client_lastName,
                  client_contactNumber: this.state.client_contactNumber
                }
              }).end(function (err, res) {
                if (err) {
                  return console.error(_libUtil2['default'].host + '/api/editBooking', err.toString());
                }
                // console.log(res.body);
                if (res.body && res.body.status === 1) {
                  _this2.setState({
                    editingUser: false,
                    updatingUser: false
                  });
                  _actionsBookingActions2['default'].setBooking(res.body.booking);
                } else {
                  console.error('Failed to edit booking.');
                }
              });
            }
            break;
          case 'patient':
            if (this._patientDetailsForm.checkValidity()) {
              this.setState({ editingPatient: false });
            }
            break;
          case 'address':
            if (this._addressDetailsForm.checkValidity()) {
              this.setState({ updatingAddress: true });
              this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/editBooking').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
                bid: this.props.booking && this.props.booking.id,
                token: this.props.booking && this.props.booking.token,
                'case': {
                  addresses: [{
                    id: this.props.booking && this.props.booking['case'] && this.props.booking['case'].addresses && this.props.booking['case'].addresses[0] && this.props.booking['case'].addresses[0].id,
                    address: this.state.address,
                    postalCode: this.state.postalCode,
                    unitNumber: this.state.unitNumber
                  }]
                }
              }).end(function (err, res) {
                if (err) {
                  return console.error(_libUtil2['default'].host + '/api/editBooking', err.toString());
                }
                // console.log(res.body);
                if (res.body && res.body.status === 1) {
                  _this2.setState({
                    editingAddress: false,
                    updatingAddress: false
                  });
                  _actionsBookingActions2['default'].setBooking(res.body.booking);
                } else {
                  console.error('Failed to edit booking.');
                }
              });
            }
            break;
        }
      }
    }, {
      key: '_onSelectDob',
      value: function _onSelectDob(date) {
        this.setState({
          patient_dob: date
        });
      }
    }, {
      key: '_onChangePostalCode',
      value: function _onChangePostalCode(event) {
        var that = this;
        var postalCodeInput = event.target;
        this.setState({
          postalCode: postalCodeInput.value
        });
        if (postalCodeInput.value.length === 6) {
          // console.log(postalCodeInput.value);
          try {
            // postalCodeInput.disabled = true;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': postalCodeInput.value,
              'region': 'SG'
            }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var position = results[0].geometry.location;
                geocoder.geocode({
                  latLng: position
                }, function (responses) {
                  if (responses && responses.length > 0) {
                    that.setState({
                      address: responses[0].formatted_address
                    });
                    // postalCodeInput.disabled = false;
                  } else {
                      // postalCodeInput.disabled = false;
                      console.error('Invalid postal code.');
                    }
                });
              } else {
                // postalCodeInput.disabled = false;
                console.error('Invalid postal code.');
              }
            });
          } catch (e) {
            // postalCodeInput.disabled = false;
            console.error('Unable to find your address.');
          }
        }
      }
    }, {
      key: '_onClickManageBooking',
      value: function _onClickManageBooking(event) {
        _Link2['default'].handleClick(event);

        _actionsBookingActions2['default'].destroyBooking();
      }
    }, {
      key: '_onClickPay',
      value: function _onClickPay(event) {
        // Link.handleClick(event);
        event.preventDefault();
        _libLocation2['default'].push({ pathname: '/booking-confirmation', query: this.props.location.query });

        _actionsBookingActions2['default'].setPostStatus('confirmation');
      }
    }]);

    return BookingDetails;
  })(_react.Component);

  exports['default'] = BookingDetails;
  module.exports = exports['default'];
  /*
  <div className="TableRow">
   <div className="TableRowItem1">Email</div>
   <div className="TableRowItem3">
     <input type="email" id="client_contactEmail" name="client_contactEmail" value={this.props.booking.client_contactEmail} placeholder="Email*" maxLength="50" required />
   </div>
  </div>
  */ /*<a href="#" className={this.state.editingPatient ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'patient')}><img src={require('../pencil.png')} /></a>*/ /*<a href="#" className={this.state.editingAddress ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'address')}><img src={require('../pencil.png')} /></a>*/ /*<a href="#" className={this.state.editingPatient ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'patient')}><img src={require('../pencil.png')} /></a>*/

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7ad2245e83d3de7f615169027e4b23b5.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "45d2446a2feec0d18320019ff910580f.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "dd233d698a06a19cbf8c6aca0990d310.png";

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("object-assign");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/spinner");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(88);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var Features = (function (_Component) {
    _inherits(Features, _Component);

    function Features() {
      _classCallCheck(this, Features);

      _get(Object.getPrototypeOf(Features.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Features, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Actions' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'Actions-list' },
              _react2['default'].createElement(
                'div',
                { className: 'Actions-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(125) }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Actions-item-title' },
                  'Book A Caregiver Online'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: '/booking1', className: 'btn Actions-item-button', onClick: _Link2['default'].handleClick },
                    'Book A Caregiver'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Actions-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(126) }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Actions-item-title' },
                  'Call Ebeecare Hotline'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: '#', className: 'btn Actions-item-button', onClick: function (e) {
                        e.preventDefault();
                      } },
                    '6873 0132'
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return Features;
  })(_react.Component);

  exports['default'] = Features;
  module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(90);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var Banner = (function (_Component) {
    _inherits(Banner, _Component);

    function Banner() {
      _classCallCheck(this, Banner);

      _get(Object.getPrototypeOf(Banner.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Banner, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Banner' },
          _react2['default'].createElement(
            'div',
            { className: 'Banner-item', id: 'Banner-item-1' },
            _react2['default'].createElement(
              'div',
              { className: 'Banner-item-text-wrapper text-center' },
              _react2['default'].createElement(
                'div',
                { className: 'Banner-item-text Banner-item-text-1' },
                'The Best Homecare Option'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Banner-item-text Banner-item-text-2' },
                'Family Caregivers'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Banner-item-text Banner-item-text-3' },
                'From SGD 30 / Visit'
              ),
              _react2['default'].createElement(
                'a',
                { href: '/booking1', className: 'btn btn-primary Banner-item-button Banner-item-text-4', onClick: _Link2['default'].handleClick },
                'BOOK A CAREGIVER'
              )
            )
          )
        );
      }
    }]);

    return Banner;
  })(_react.Component);

  exports['default'] = Banner;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(92);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingBankTransfer = (function (_Component) {
    _inherits(BookingBankTransfer, _Component);

    function BookingBankTransfer(props) {
      _classCallCheck(this, BookingBankTransfer);

      _get(Object.getPrototypeOf(BookingBankTransfer.prototype), 'constructor', this).call(this, props);
      this.state = {
        pending: false,
        error: false,
        ref: undefined
      };
    }

    _createClass(BookingBankTransfer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(
          'div',
          { className: 'BookingBankTransfer' },
          _react2['default'].createElement(
            _reactLoader2['default'],
            { className: 'spinner', loaded: this.state.pending ? false : true },
            _react2['default'].createElement(
              'form',
              { id: 'BookingBankTransferForm' },
              _react2['default'].createElement(
                'p',
                { className: (0, _classNames2['default'])('error', this.state.error ? '' : 'hidden') },
                'Your bank transfer reference number was not accepted.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'b',
                  null,
                  'Your Total Amount is SGD ',
                  this.props.booking['case'].price
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Please transfer the total amount to',
                _react2['default'].createElement('br', null),
                'Bank: ',
                _react2['default'].createElement(
                  'b',
                  null,
                  'UOB'
                ),
                _react2['default'].createElement('br', null),
                'Type: ',
                _react2['default'].createElement(
                  'b',
                  null,
                  'Current'
                ),
                _react2['default'].createElement('br', null),
                'Account Number: ',
                _react2['default'].createElement(
                  'b',
                  null,
                  '341-306-307-6'
                ),
                _react2['default'].createElement('br', null)
              ),
              _react2['default'].createElement(
                'ol',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  'Transfer the total amount via bank transfer (ATM / iBanking).'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Take note of the ',
                  _react2['default'].createElement(
                    'b',
                    null,
                    'reference number'
                  ),
                  ' of the bank transfer.'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Fill in the input box below with the ',
                  _react2['default'].createElement(
                    'b',
                    null,
                    'reference number'
                  ),
                  '.'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'It will take around 1 working day to verify your payment. We will notify you via email.'
                )
              ),
              _react2['default'].createElement('input', { type: 'text', id: 'ref', name: 'ref', valueLink: (0, _reactLinkState2['default'])(this, 'ref'), placeholder: 'Reference Number*', required: true }),
              _react2['default'].createElement('p', null),
              _react2['default'].createElement('p', null),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onConfirm.bind(this) },
                  'CONFIRM BOOKING'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this._alertPopup = c;
              } },
            'Please fill up your bank transfer reference number.'
          )
        );
      }
    }, {
      key: '_onConfirm',
      value: function _onConfirm(event) {
        var _this2 = this;

        var form = document.getElementById('BookingBankTransferForm');
        if (form.checkValidity()) {
          event.preventDefault();

          this.setState({
            pending: true,
            ref: undefined
          });

          this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/verifyBankTransaction').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
            amount: this.props.booking['case'].price,
            type: 'Payment',
            ref: this.state.ref,
            sku: 'ebc-case-' + this.props.booking['case'].id
          }).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/verifyBankTransaction', status, err.toString());
            }
            if (res.body && res.body.status === 1) {
              console.log(res.body);
              _actionsBookingActions2['default'].setPostStatus('success');
            } else {
              _this2.setState({
                pending: false,
                error: true
              });
              console.error('Failed to verify bank transfer payment.');
            }
          });
        } else {
          event.preventDefault();
          this._alertPopup.show();
        }
      }
    }]);

    return BookingBankTransfer;
  })(_react.Component);

  exports['default'] = BookingBankTransfer;
  module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(93);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingComplete = (function (_Component) {
    _inherits(BookingComplete, _Component);

    function BookingComplete(props) {
      _classCallCheck(this, BookingComplete);

      _get(Object.getPrototypeOf(BookingComplete.prototype), 'constructor', this).call(this, props);
      this.state = {
        bookingStatus: undefined,
        bookingId: undefined,
        bookingAmt: undefined,
        caseId: undefined
      };
    }

    _createClass(BookingComplete, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        if (this.props.user && this.props.patient) {
          var dates = [];
          for (var i = 0; i < this.props.booking.sessions.length; i++) {
            dates.push({
              type: 'Schedule',
              dateTimeStart: this.props.booking.sessions[i].date + ' 00:00:00',
              estTime: this.props.booking.sessions[i].time,
              price: this.props.booking.sessions[i].price
            });
          }
          this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/createCase').auth(this.props.user.id, this.props.user.token).send({
            notes: this.props.booking && this.props.booking.booker && this.props.booking.booker.additionalInfo,
            price: this.props.booking && this.props.booking.sum && this.props.booking.sum.toFixed(2),
            pid: this.props.patient.id,
            sid: this.props.booking && this.props.booking.service,
            dates: dates,
            addresses: [{
              address: this.props.booking && this.props.booking.location && this.props.booking.location.address,
              postalCode: this.props.booking && this.props.booking.location && this.props.booking.location.postalCode,
              unitNumber: this.props.booking && this.props.booking.location && this.props.booking.location.unitNumber
            }]
          }).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/createCase', err.toString());
            }
            // console.log(res.body);
            if (res.body && res.body['case']) {
              // Destroy booking
              _actionsBookingActions2['default'].destroyBooking();

              _this.setState({
                bookingStatus: res.body.status,
                bookingAmt: res.body['case'].price,
                caseId: res.body['case'].id
              });
            } else {
              console.error('Failed to create case.');
            }
          });
        } else if (this.props.booking) {
          var dates = [];
          for (var i = 0; i < this.props.booking.sessions.length; i++) {
            dates.push({
              type: 'Schedule',
              dateTimeStart: this.props.booking.sessions[i].date + ' 00:00:00',
              estTime: this.props.booking.sessions[i].time,
              price: this.props.booking.sessions[i].price
            });
          }
          this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/createBooking').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
            booking: {
              client_contactEmail: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactEmail,
              client_contactNumber: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactNumber,
              client_firstName: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_firstName,
              client_lastName: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_lastName,
              patient_contactEmail: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactEmail,
              patient_contactNumber: this.props.booking && this.props.booking.booker && this.props.booking.booker.client_contactNumber,
              patient_firstName: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_firstName,
              patient_lastName: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_lastName,
              patient_dob: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_dob.format('YYYY-MM-DD'),
              patient_gender: this.props.booking && this.props.booking.booker && this.props.booking.booker.patient_gender
            },
            'case': {
              sid: this.props.booking && this.props.booking.service,
              notes: this.props.booking && this.props.booking.booker && this.props.booking.booker.additionalInfo,
              price: this.props.booking && this.props.booking.sum && this.props.booking.sum.toFixed(2),
              dates: dates,
              addresses: [{
                address: this.props.booking && this.props.booking.location && this.props.booking.location.address,
                postalCode: this.props.booking && this.props.booking.location && this.props.booking.location.postalCode,
                unitNumber: this.props.booking && this.props.booking.location && this.props.booking.location.unitNumber
              }]
            }
          }).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/createBooking', err.toString());
            }
            // console.log(res.body);
            if (res.body && res.body.booking && res.body.booking['case']) {
              // Destroy booking
              _actionsBookingActions2['default'].destroyBooking();

              _this.setState({
                bookingStatus: res.body.status,
                bookingId: res.body.booking.id,
                bookingAmt: res.body.booking['case'].price
              });
            } else {
              console.error('Failed to create booking.');
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        if (!this.props.booking) return null;

        var component, identity;

        if (this.state.bookingStatus) {
          if (this.state.bookingId) {
            identity = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'b',
                null,
                'BOOKING ID : ',
                this.state.bookingId
              )
            );
          } else if (this.state.caseId) {
            identity = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'b',
                null,
                'CASE ID : ',
                this.state.caseId
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://www.ebeecare.com/cases/' + this.state.caseId },
                  'View Case'
                )
              )
            );
          }

          component = _react2['default'].createElement(
            'div',
            { className: 'BookingCompleteBody' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingCompleteHeader' },
              'THANK YOU'
            ),
            _react2['default'].createElement(
              'div',
              null,
              'Please check your email for your booking summary. We will notify you again once your booking is confirmed.'
            ),
            identity,
            _react2['default'].createElement(
              'div',
              null,
              'ESTIMATED AMOUNT : SGD ',
              this.state.bookingAmt
            ),
            _react2['default'].createElement(
              'div',
              null,
              'For inquiries on your order, please email ',
              _react2['default'].createElement(
                'a',
                { href: 'mailto:contact@ebeecare.com' },
                'contact@ebeecare.com'
              ),
              ' or call us at 6873 0132, Mon-Fri (9.00am - 6.00pm).'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingCompleteFooter' },
              _react2['default'].createElement(
                'a',
                { href: '/booking1', className: 'btn btn-primary', onClick: _Link2['default'].handleClick },
                'Make Another Booking'
              ),
              _react2['default'].createElement(
                'a',
                { href: '/', className: 'btn btn-primary', onClick: _Link2['default'].handleClick },
                'Back To Homepage'
              )
            )
          );
        } else if (this.state.bookingStatus < 1) {
          component = _react2['default'].createElement(
            'div',
            { className: 'BookingCompleteBody' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingCompleteHeader' },
              'TECHNICAL ERROR'
            ),
            _react2['default'].createElement(
              'div',
              null,
              'Oops, there was an error creating your booking. Please contact us at ',
              _react2['default'].createElement(
                'a',
                { href: 'mailto:contact@ebeecare.com' },
                'contact@ebeecare.com'
              ),
              ' or 6873 0132 immediately.'
            )
          );
        } else {
          component = _react2['default'].createElement(
            'div',
            { className: 'BookingCompleteBody' },
            _react2['default'].createElement(_reactLoader2['default'], { className: 'spinner', loaded: this.state.bookingId ? true : false })
          );
        }

        return _react2['default'].createElement(
          'div',
          { className: 'BookingComplete' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            component
          )
        );
      }
    }]);

    return BookingComplete;
  })(_react.Component);

  exports['default'] = BookingComplete;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _reactDatepicker = __webpack_require__(25);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(94);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingConfirmation = (function (_Component) {
    _inherits(BookingConfirmation, _Component);

    function BookingConfirmation(props) {
      _classCallCheck(this, BookingConfirmation);

      _get(Object.getPrototypeOf(BookingConfirmation.prototype), 'constructor', this).call(this, props);
      this.state = {
        booking: this.props.booking,
        editingUser: false,
        editingPatient: false,
        editingAddress: false
      };
    }

    _createClass(BookingConfirmation, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var userDetails, patientDetails, addressDetails, paymentButton;
        if (this.state.editingUser) {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._userDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Contact Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'client_contactNumber', name: 'client_contactNumber', valueLink: (0, _reactLinkState2['default'])(this, 'client_contactNumber'), placeholder: 'Contact Number*', maxLength: '8', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'user') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'user') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'First Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_firstName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Last Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_lastName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Email'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_contactEmail
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Contact Number'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.client_contactNumber
              )
            )
          );
        }
        if (this.state.editingPatient) {
          patientDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._patientDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'First Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'patient_firstName', name: 'patient_firstName', value: this.props.booking.patient_firstName, placeholder: 'First Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Last Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'patient_lastName', name: 'patient_lastName', value: this.props.booking.patient_lastName, placeholder: 'Last Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Gender'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_male', name: 'patient_gender', checked: this.props.booking.patient_gender === 'Male', value: 'Male', required: true }),
                    _react2['default'].createElement(
                      'label',
                      { htmlFor: 'patient_gender_male' },
                      _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement('span', null)
                      ),
                      _react2['default'].createElement(
                        'span',
                        null,
                        'Male'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_female', name: 'patient_gender', checked: this.props.booking.patient_gender === 'Female', value: 'Female', required: true }),
                    _react2['default'].createElement(
                      'label',
                      { htmlFor: 'patient_gender_female' },
                      _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement('span', null)
                      ),
                      _react2['default'].createElement(
                        'span',
                        null,
                        'Female'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Date of Birth'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement(_reactDatepicker2['default'], { selected: (0, _moment2['default'])(this.props.booking.patient_dob), maxDate: (0, _moment2['default'])(), dateFormat: 'YYYY-MM-DD', showYearDropdown: true, onChange: this._onSelectDob.bind(this), placeholderText: 'Date of Birth* (Y-M-D)' })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'patient') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'patient') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          patientDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'First Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_firstName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Last Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_lastName
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Gender'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.booking.patient_gender
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Date of Birth'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                (0, _moment2['default'])(this.props.booking.patient_dob, 'YYYY-MM-DD').format('ll')
              )
            )
          );
        }
        if (this.state.editingAddress) {
          addressDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this._addressDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Postal Code'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'postalCode', name: 'postalCode', onChange: this._onChangePostalCode.bind(this), value: this.state.postalCode, placeholder: 'Enter Postal Code*', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Address'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('textarea', { id: 'address', name: 'address', valueLink: (0, _reactLinkState2['default'])(this, 'address'), placeholder: 'Enter Address*', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Unit Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'unitNumber', name: 'unitNumber', valueLinkg: (0, _reactLinkState2['default'])(this, 'unitNumber'), placeholder: 'Enter Unit Number' })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'address') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'address') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          addressDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              null,
              this.props.booking['case'] && this.props.booking['case'].addresses[0].address
            ),
            _react2['default'].createElement(
              'div',
              null,
              this.props.booking['case'] && this.props.booking['case'].addresses[0].unitNumber
            )
          );
        }
        // show payment button only if booking is "Closed" and not yet paid, and if not editing
        if (this.props.booking && this.props.booking['case'] && this.props.booking['case'].status === 'Closed' && !this.props.booking['case'].isPaid && !this.state.editingUser && !this.state.editingPatient && !this.state.editingAddress) {
          paymentButton = _react2['default'].createElement(
            'a',
            { href: '#', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
            'GO TO PAYMENT'
          );
        }

        return _react2['default'].createElement(
          'div',
          { className: 'BookingConfirmation' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              _reactLoader2['default'],
              { className: 'spinner', loaded: this.props.booking.id ? true : false },
              _react2['default'].createElement(
                'div',
                { className: 'BookingConfirmationWrapper' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingConfirmationBody' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingConfirmationBodySection' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingConfirmationBodySectionTitle' },
                      _react2['default'].createElement(
                        'h3',
                        null,
                        'Contact Person Details'
                      ),
                      _react2['default'].createElement(
                        'a',
                        { href: '#', className: this.state.editingUser ? 'hidden' : '', onClick: this._onClickEdit.bind(this, 'user') },
                        _react2['default'].createElement('img', { src: __webpack_require__(17) })
                      )
                    ),
                    _react2['default'].createElement(
                      _reactLoader2['default'],
                      { className: 'spinner', loaded: !this.state.updatingUser ? true : false },
                      userDetails
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingConfirmationBodySection' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingConfirmationBodySectionTitle' },
                      _react2['default'].createElement(
                        'h3',
                        null,
                        'Patient Details'
                      )
                    ),
                    patientDetails
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingConfirmationBodySection' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'BookingConfirmationBodySectionTitle' },
                      _react2['default'].createElement(
                        'h3',
                        null,
                        'Patient Location / Address'
                      )
                    ),
                    _react2['default'].createElement(
                      _reactLoader2['default'],
                      { className: 'spinner', loaded: !this.state.updatingAddress ? true : false },
                      addressDetails
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingConfirmationFooter' },
                    paymentButton
                  )
                ),
                this.props.children
              )
            )
          )
        );
      }
    }, {
      key: '_onClickEdit',
      value: function _onClickEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({
              client_contactNumber: this.props.booking.client_contactNumber,

              editingUser: true });
            break;
          case 'patient':
            this.setState({ editingPatient: true });
            break;
          case 'address':
            this.setState({
              postalCode: this.props.booking['case'].addresses[0].postalCode,
              address: this.props.booking['case'].addresses[0].address,
              unitNumber: this.props.booking['case'].addresses[0].unitNumber,

              editingAddress: true
            });
            break;
        }
      }
    }, {
      key: '_onClickStopEdit',
      value: function _onClickStopEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({ editingUser: false });
            break;
          case 'patient':
            this.setState({ editingPatient: false });
            break;
          case 'address':
            this.setState({ editingAddress: false });
            break;
        }
      }
    }, {
      key: '_onClickSave',
      value: function _onClickSave(entity, event) {
        var _this2 = this;

        event.preventDefault();

        switch (entity) {
          case 'user':
            if (this._userDetailsForm.checkValidity()) {
              this.setState({ updatingUser: true });
              this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/editBooking').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
                bid: this.props.booking && this.props.booking.id,
                token: this.props.booking && this.props.booking.token,
                booking: {
                  client_contactNumber: this.state.client_contactNumber
                }
              }).end(function (err, res) {
                if (err) {
                  return console.error(_libUtil2['default'].host + '/api/editBooking', err.toString());
                }
                // console.log(res.body);
                if (res.body && res.body.status === 1) {
                  _this2.setState({
                    editingUser: false,
                    updatingUser: false
                  });
                  _actionsBookingActions2['default'].setBooking(res.body.booking);
                } else {
                  console.error('Failed to edit booking.');
                }
              });
            }
            break;
          case 'patient':
            if (this._patientDetailsForm.checkValidity()) {
              this.setState({ editingPatient: false });
            }
            break;
          case 'address':
            if (this._addressDetailsForm.checkValidity()) {
              this.setState({ updatingAddress: true });
              this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/editBooking').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
                bid: this.props.booking && this.props.booking.id,
                token: this.props.booking && this.props.booking.token,
                'case': {
                  addresses: [{
                    id: this.props.booking && this.props.booking['case'] && this.props.booking['case'].addresses && this.props.booking['case'].addresses[0] && this.props.booking['case'].addresses[0].id,
                    address: this.state.address,
                    postalCode: this.state.postalCode,
                    unitNumber: this.state.unitNumber
                  }]
                }
              }).end(function (err, res) {
                if (err) {
                  return console.error(_libUtil2['default'].host + '/api/editBooking', err.toString());
                }
                // console.log(res.body);
                if (res.body && res.body.status === 1) {
                  _this2.setState({
                    editingAddress: false,
                    updatingAddress: false
                  });
                  _actionsBookingActions2['default'].setBooking(res.body.booking);
                } else {
                  console.error('Failed to edit booking.');
                }
              });
            }
            break;
        }
      }
    }, {
      key: '_onSelectDob',
      value: function _onSelectDob(date) {
        this.setState({
          patient_dob: date
        });
      }
    }, {
      key: '_onChangePostalCode',
      value: function _onChangePostalCode(event) {
        var that = this;
        var postalCodeInput = event.target;
        this.setState({
          postalCode: postalCodeInput.value
        });
        if (postalCodeInput.value.length === 6) {
          // console.log(postalCodeInput.value);
          try {
            // postalCodeInput.disabled = true;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': postalCodeInput.value,
              'region': 'SG'
            }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var position = results[0].geometry.location;
                geocoder.geocode({
                  latLng: position
                }, function (responses) {
                  if (responses && responses.length > 0) {
                    that.setState({
                      address: responses[0].formatted_address
                    });
                    // postalCodeInput.disabled = false;
                  } else {
                      // postalCodeInput.disabled = false;
                      console.error('Invalid postal code.');
                    }
                });
              } else {
                // postalCodeInput.disabled = false;
                console.error('Invalid postal code.');
              }
            });
          } catch (e) {
            // postalCodeInput.disabled = false;
            console.error('Unable to find your address.');
          }
        }
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        // Link.handleClick(event);
        event.preventDefault();

        _actionsBookingActions2['default'].setPostStatus('payment-paypal');
      }
    }]);

    return BookingConfirmation;
  })(_react.Component);

  exports['default'] = BookingConfirmation;
  module.exports = exports['default'];
  /*
  <div className="TableRow">
   <div className="TableRowItem1">First Name</div>
   <div className="TableRowItem3">
     <input type="text" id="client_firstName" name="client_firstName" value={this.props.booking.client_firstName} placeholder="First Name*" maxLength="50" required />
   </div>
  </div>
  <div className="TableRow">
   <div className="TableRowItem1">Last Name</div>
   <div className="TableRowItem3">
     <input type="text" id="client_lastName" name="client_lastName" value={this.props.booking.client_lastName} placeholder="Last Name*" maxLength="50" required />
   </div>
  </div>
  <div className="TableRow">
   <div className="TableRowItem1">Email</div>
   <div className="TableRowItem3">
     <input type="email" id="client_contactEmail" name="client_contactEmail" value={this.props.booking.client_contactEmail} placeholder="Email*" maxLength="50" required />
   </div>
  </div>
  */ /*<a href="#" className={this.state.editingPatient ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'patient')}><img src={require('../pencil.png')} /></a>*/ /*<a href="#" className={this.state.editingAddress ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'address')}><img src={require('../pencil.png')} /></a>*/

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  __webpack_require__(95);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingCredits = (function (_Component) {
    _inherits(BookingCredits, _Component);

    function BookingCredits(props) {
      _classCallCheck(this, BookingCredits);

      _get(Object.getPrototypeOf(BookingCredits.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    _createClass(BookingCredits, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BookingCredits' },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('img', { className: 'BookingCreditsLogo', src: __webpack_require__(31) }),
            _react2['default'].createElement('img', { className: 'BookingCreditsLogo', src: __webpack_require__(33) })
          ),
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement(
              'b',
              null,
              'Your Total Amount is SGD ',
              this.props.booking['case'].price
            )
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Please confirm your booking by clicking the "Confirm Booking" button below.',
            _react2['default'].createElement('br', null),
            'You will be redirected to the Paypal page to complete your booking process.'
          ),
          _react2['default'].createElement('p', null),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/booking3c', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
              'CONFIRM BOOKING'
            )
          )
        );
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        _Link2['default'].handleClick(event);

        var timeslots = [];
        for (var timeslot in this.state) {
          if (this.state[timeslot]) {
            timeslots.push(timeslot);
          }
        }
        // this.props.booking.timeslots = timeslots;
        _actionsBookingActions2['default'].setTimeslots(timeslots);
      }
    }]);

    return BookingCredits;
  })(_react.Component);

  exports['default'] = BookingCredits;
  module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  __webpack_require__(98);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var BookingDateTimeNavItem = (function (_Component) {
    _inherits(BookingDateTimeNavItem, _Component);

    function BookingDateTimeNavItem() {
      _classCallCheck(this, BookingDateTimeNavItem);

      _get(Object.getPrototypeOf(BookingDateTimeNavItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingDateTimeNavItem, [{
      key: 'render',
      value: function render() {
        if (_storesBookingStore2['default'].isNavigationAllowed(this.props.link)) {
          return _react2['default'].createElement(
            'li',
            { className: 'BookingDateTimeNavItem' },
            _react2['default'].createElement(
              'a',
              { className: (0, _classNames2['default'])('BookingDateTimeNav-link', this.props.path.indexOf('/' + this.props.active) == 0 ? 'active' : ''), href: '/' + this.props.link, onClick: _Link2['default'].handleClick },
              this.props.name,
              _react2['default'].createElement(
                'span',
                { className: 'BookingDateTimeNav-arrow' },
                _react2['default'].createElement('div', { className: 'nav-caret' })
              )
            )
          );
        } else {
          return _react2['default'].createElement(
            'li',
            { className: 'BookingDateTimeNavItem' },
            _react2['default'].createElement(
              'span',
              { className: (0, _classNames2['default'])('BookingDateTimeNav-link', this.props.path.indexOf('/' + this.props.active) == 0 ? 'active' : '') },
              this.props.name,
              _react2['default'].createElement(
                'span',
                { className: 'BookingDateTimeNav-arrow' },
                _react2['default'].createElement('div', { className: 'nav-caret' })
              )
            )
          );
        }
      }
    }]);

    return BookingDateTimeNavItem;
  })(_react.Component);

  exports['default'] = BookingDateTimeNavItem;
  module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _reactDatepicker = __webpack_require__(25);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(101);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingLocationUser = (function (_Component) {
    _inherits(BookingLocationUser, _Component);

    function BookingLocationUser(props) {
      _classCallCheck(this, BookingLocationUser);

      _get(Object.getPrototypeOf(BookingLocationUser.prototype), 'constructor', this).call(this, props);
      this.state = {
        editingUser: false,
        editingPatient: false,
        editingAddress: false,

        patients: undefined,
        patientId: undefined
      };
    }

    _createClass(BookingLocationUser, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        this._getPatients(this.props.user, function (patients) {
          if (_this.props.patient) {
            patients.forEach(function (patient, index) {
              if (patient.id === _this.props.patient.id) {
                _this.setState({
                  patientId: index,
                  patients: patients
                });
              }
            });
          } else {
            _this.setState({
              patients: patients
            });
          }
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var component, userDetails, patientDetails;
        if (this.state.editingUser) {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'form',
              { ref: function (c) {
                  return _this2._userDetailsForm = c;
                } },
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'First Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'first_name', name: 'first_name', valueLink: (0, _reactLinkState2['default'])(this, 'first_name'), placeholder: 'First Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Last Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'last_name', name: 'last_name', valueLink: (0, _reactLinkState2['default'])(this, 'last_name'), placeholder: 'Last Name*', maxLength: '50', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Mobile Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  _react2['default'].createElement('input', { type: 'text', id: 'mobilePhone', name: 'mobilePhone', valueLink: (0, _reactLinkState2['default'])(this, 'mobilePhone'), placeholder: 'Mobile Number*', maxLength: '8', required: true })
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickSave.bind(this, 'user') },
                  'Save'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onClickStopEdit.bind(this, 'user') },
                  'Cancel'
                )
              )
            )
          );
        } else {
          userDetails = _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'First Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.user.first_name
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Last Name'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.user.last_name
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Email'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.user.email
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'TableRow' },
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem1' },
                'Mobile Number'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRowItem3' },
                this.props.user.mobilePhone
              )
            )
          );
        }
        if (this.state.patients && this.state.patientId) {
          if (this.state.editingPatient) {
            patientDetails = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('input', { type: 'text', id: 'patient_firstName', name: 'patient_firstName', valueLink: (0, _reactLinkState2['default'])(this, 'patient_firstName'), placeholder: 'First Name*', maxLength: '50', required: true }),
                _react2['default'].createElement('input', { type: 'text', id: 'patient_lastName', name: 'patient_lastName', valueLink: (0, _reactLinkState2['default'])(this, 'patient_lastName'), placeholder: 'Last Name*', maxLength: '50', required: true }),
                _react2['default'].createElement(_reactDatepicker2['default'], { selected: this.state.patient_dob, maxDate: (0, _moment2['default'])(), dateFormat: 'YYYY-MM-DD', showYearDropdown: true, onChange: this._onSelectDob.bind(this), placeholderText: 'Date of Birth* (Y-M-D)' }),
                _react2['default'].createElement('input', { type: 'text', value: this.state.patient_dob, required: true, style: { 'display': 'none' } }),
                _react2['default'].createElement(
                  'div',
                  { className: 'radio radio-inline' },
                  _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_male', name: 'patient_gender', checked: this.state.patient_gender === 'Male', onChange: this._onSelectGender.bind(this, 'patient_gender'), value: 'Male', required: true }),
                  _react2['default'].createElement(
                    'label',
                    { htmlFor: 'patient_gender_male' },
                    _react2['default'].createElement(
                      'span',
                      null,
                      _react2['default'].createElement('span', null)
                    ),
                    _react2['default'].createElement(
                      'span',
                      null,
                      'Male'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'radio radio-inline' },
                  _react2['default'].createElement('input', { type: 'radio', id: 'patient_gender_female', name: 'patient_gender', checked: this.state.patient_gender === 'Female', onChange: this._onSelectGender.bind(this, 'patient_gender'), value: 'Female', required: true }),
                  _react2['default'].createElement(
                    'label',
                    { htmlFor: 'patient_gender_female' },
                    _react2['default'].createElement(
                      'span',
                      null,
                      _react2['default'].createElement('span', null)
                    ),
                    _react2['default'].createElement(
                      'span',
                      null,
                      'Female'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { style: { marginTop: '40px' } },
                _react2['default'].createElement(
                  'div',
                  null,
                  'Additional Info:'
                ),
                _react2['default'].createElement('textarea', { name: 'additionalInfo', valueLink: (0, _reactLinkState2['default'])(this, 'additionalInfo'), placeholder: 'Please provide important notes about patient here.' })
              )
            );
          } else {
            patientDetails = _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Full Name'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].fullName
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Gender'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].gender
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Date of Birth'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  (0, _moment2['default'])(this.state.patients[this.state.patientId].dob).format('ll')
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Age'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  (0, _moment2['default'])().diff((0, _moment2['default'])(this.state.patients[this.state.patientId].dob), 'years')
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Language',
                  this.state.patients[this.state.patientId].languages.length > 1 ? 's' : ''
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].languages.map(function (language, index) {
                    return index > 0 ? _react2['default'].createElement(
                      'span',
                      { key: language.id },
                      ', ',
                      language.name
                    ) : _react2['default'].createElement(
                      'span',
                      { key: language.id },
                      language.name
                    );
                  })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Race'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].race
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Religion'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].religion
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Address'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].addresses[0].address
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Unit Number'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].addresses[0].unitNumber
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'TableRow' },
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem1' },
                  'Postal Code'
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'TableRowItem3' },
                  this.state.patients[this.state.patientId].addresses[0].postalCode
                )
              )
            );
          }
        } else {
          // Add patient details
          patientDetails = _react2['default'].createElement(
            'form',
            { ref: function (c) {
                return _this2._patientDetailsForm = c;
              } },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('input', { type: 'text', id: 'fullName', name: 'fullName', valueLink: (0, _reactLinkState2['default'])(this, 'fullName'), placeholder: 'Full Name*', maxLength: '50', required: true }),
              _react2['default'].createElement(_reactDatepicker2['default'], { selected: this.state.dob, maxDate: (0, _moment2['default'])(), dateFormat: 'YYYY-MM-DD', showYearDropdown: true, onChange: this._onSelectNewDob.bind(this), placeholderText: 'Date of Birth* (Y-M-D)' }),
              _react2['default'].createElement(
                'div',
                { className: 'radio radio-inline' },
                _react2['default'].createElement('input', { type: 'radio', id: 'gender_male', name: 'gender', checked: this.state.gender === 'Male', onChange: this._onSelectGender.bind(this, 'gender'), value: 'Male', required: true }),
                _react2['default'].createElement(
                  'label',
                  { htmlFor: 'gender_male' },
                  _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement('span', null)
                  ),
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Male'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'radio radio-inline' },
                _react2['default'].createElement('input', { type: 'radio', id: 'gender_female', name: 'gender', checked: this.state.gender === 'Female', onChange: this._onSelectGender.bind(this, 'gender'), value: 'Female', required: true }),
                _react2['default'].createElement(
                  'label',
                  { htmlFor: 'gender_female' },
                  _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement('span', null)
                  ),
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Female'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'div',
                { style: { marginTop: '40px' } },
                'Patient Location / Address'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'PatientAddress' },
                _react2['default'].createElement(
                  'div',
                  { className: 'PatientAddressLeft inline' },
                  _react2['default'].createElement('input', { type: 'text', id: 'postalCode', name: 'postalCode', value: this.state.postalCode, onChange: this._onChangePostalCode.bind(this), placeholder: 'Enter Postal Code*', required: true }),
                  _react2['default'].createElement('input', { type: 'text', id: 'unitNumber', name: 'unitNumber', valueLink: (0, _reactLinkState2['default'])(this, 'unitNumber'), placeholder: 'Enter Unit Number' })
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'PatientAddressRight inline' },
                  _react2['default'].createElement('textarea', { id: 'address', name: 'address', valueLink: (0, _reactLinkState2['default'])(this, 'address'), placeholder: 'Enter Address*', required: true })
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'small' },
                'This information will only be used to contact you regarding your booking.'
              )
            ),
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-primary', onClick: this._onClickSavePatient.bind(this) },
              'Save Patient'
            )
          );
        }
        component = _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationUserBodyEditSection' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationUserBodyEditSectionTitle' },
              _react2['default'].createElement(
                'h3',
                null,
                'Contact Person Details'
              ),
              _react2['default'].createElement(
                'a',
                { href: '#', className: this.state.editingUser ? 'hidden' : '', onClick: this._onClickEdit.bind(this, 'user') },
                _react2['default'].createElement('img', { src: __webpack_require__(17) })
              )
            ),
            userDetails
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationUserBodyEditSection' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationUserBodyAddPatient' },
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary', onClick: this._onClickAddPatient.bind(this) },
                'Add New Patient'
              ),
              _react2['default'].createElement(
                'span',
                null,
                'or'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationUserBodySelectPatient' },
              _react2['default'].createElement(
                'span',
                null,
                'Select Existing Patient'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'select' },
                _react2['default'].createElement('span', null),
                _react2['default'].createElement(
                  'select',
                  { name: 'patientId', value: this.state.patientId, onChange: this._onChangePatient.bind(this) },
                  _react2['default'].createElement(
                    'option',
                    null,
                    'Select Patient'
                  ),
                  this.state.patients && this.state.patients.map(function (patient, index) {
                    return _react2['default'].createElement(
                      'option',
                      { key: patient.id, value: index },
                      patient.fullName
                    );
                  })
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationUserBodyEditSection' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationUserBodyEditSectionTitle' },
              _react2['default'].createElement(
                'h3',
                null,
                'Patient Details'
              )
            ),
            _react2['default'].createElement(
              _reactLoader2['default'],
              { className: 'spinner', loaded: this.state.patients ? true : false },
              patientDetails
            ),
            _react2['default'].createElement(
              'div',
              { style: { marginTop: '40px' } },
              _react2['default'].createElement(
                'div',
                null,
                'Additional Info:'
              ),
              _react2['default'].createElement('textarea', { name: 'additionalInfo', valueLink: (0, _reactLinkState2['default'])(this, 'additionalInfo') })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingLocationUserBodyEditSection' },
            _react2['default'].createElement(
              'div',
              { className: (0, _classNames2['default'])(!this.state.patientId ? 'hidden' : '') },
              _react2['default'].createElement(
                'a',
                { href: '/booking3a', className: 'btn btn-primary', onClick: this._onNext.bind(this) },
                'NEXT'
              )
            )
          )
        );
        return _react2['default'].createElement(
          'div',
          { className: 'BookingLocationUser' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'BookingLocationUserWrapper' },
              _react2['default'].createElement(
                'div',
                { className: 'BookingLocationUserBody' },
                component
              ),
              this.props.children
            )
          ),
          _react2['default'].createElement(
            _AlertPopup2['default'],
            { ref: function (c) {
                return _this2._alertPopup = c;
              } },
            'Please fill up all required fields.'
          )
        );
      }
    }, {
      key: '_onClickEdit',
      value: function _onClickEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({
              first_name: this.props.user.first_name,
              last_name: this.props.user.last_name,
              mobilePhone: this.props.user.mobilePhone,

              editingUser: true
            });
            break;
          case 'patient':
            this.setState({ editingPatient: true });
            break;
          case 'address':
            this.setState({ editingAddress: true });
            break;
        }
      }
    }, {
      key: '_onClickStopEdit',
      value: function _onClickStopEdit(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            this.setState({ editingUser: false });
            break;
          case 'patient':
            this.setState({ editingPatient: false });
            break;
          case 'address':
            this.setState({ editingAddress: false });
            break;
        }
      }
    }, {
      key: '_onClickSave',
      value: function _onClickSave(entity, event) {
        event.preventDefault();

        switch (entity) {
          case 'user':
            if (this._userDetailsForm.checkValidity()) {
              this.setState({ editingUser: false });
            }
            break;
          case 'patient':
            this.setState({ editingPatient: false });
            break;
          case 'address':
            this.setState({ editingAddress: false });
            break;
        }
      }
    }, {
      key: '_onClickAddPatient',
      value: function _onClickAddPatient(event) {
        this.setState({
          patientId: ''
        });
      }
    }, {
      key: '_onChangePatient',
      value: function _onChangePatient(event) {
        // console.log(event.target.value);
        var patient = this.state.patients[event.target.value];
        this.setState({
          patientId: event.target.value
        });
      }
    }, {
      key: '_onSelectDob',
      value: function _onSelectDob(date) {
        this.setState({
          patient_dob: date
        });
      }
    }, {
      key: '_onSelectNewDob',
      value: function _onSelectNewDob(date) {
        this.setState({
          dob: date
        });
      }
    }, {
      key: '_onSelectGender',
      value: function _onSelectGender(entity, event) {
        var obj = {};
        obj[entity] = event.target.value;
        this.setState(obj);
      }
    }, {
      key: '_onChangePostalCode',
      value: function _onChangePostalCode(event) {
        var that = this;
        var postalCodeInput = event.target;
        this.setState({
          postalCode: postalCodeInput.value
        });
        if (postalCodeInput.value.length === 6) {
          // console.log(postalCodeInput.value);
          try {
            // postalCodeInput.disabled = true;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': postalCodeInput.value,
              'region': 'SG'
            }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var position = results[0].geometry.location;
                geocoder.geocode({
                  latLng: position
                }, function (responses) {
                  if (responses && responses.length > 0) {
                    that.setState({
                      address: responses[0].formatted_address
                    });
                    // postalCodeInput.disabled = false;
                  } else {
                      // postalCodeInput.disabled = false;
                      console.error('Invalid postal code.');
                    }
                });
              } else {
                // postalCodeInput.disabled = false;
                console.error('Invalid postal code.');
              }
            });
          } catch (e) {
            // postalCodeInput.disabled = false;
            console.error('Unable to find your address.');
          }
        }
      }
    }, {
      key: '_onClickSavePatient',
      value: function _onClickSavePatient(event) {
        var _this3 = this;

        if (this._patientDetailsForm.checkValidity()) {
          event.preventDefault();
          this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/createPatient').auth(this.props.user.id, this.props.user.token).send({
            fullName: this.state.fullName,
            gender: this.state.gender,
            dob: this.state.dob.format('YYYY-MM-DD'),
            addresses: [{
              address: this.state.address,
              postalCode: this.state.postalCode,
              unitNumber: this.state.unitNumber
            }]
          }).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/createPatient', err.toString());
            }
            // console.log(res.body);
            if (res.body && res.body.patient) {
              var patientId = res.body.patient.id;
              _this3._getPatients(_this3.props.user, function () {
                var selectPatient;
                _this3.state.patients.forEach(function (patient, index) {
                  if (patient.id === patientId) {
                    _this3.setState({
                      patientId: index
                    });
                  }
                });
              });
            } else {
              console.error('Failed to create patient.');
            }
          });
        } else {
          event.preventDefault();
          // alert('Please fill up all required fields.');
          this._alertPopup.show();
        }
      }
    }, {
      key: '_onNext',
      value: function _onNext(event) {
        if (this.state.patientId) {
          _Link2['default'].handleClick(event);

          var booker = {
            additionalInfo: this.state.additionalInfo
          };
          // console.log(booker);
          var location = {
            postalCode: this.state.patients[this.state.patientId].addresses[0].postalCode,
            address: this.state.patients[this.state.patientId].addresses[0].address,
            unitNumber: this.state.patients[this.state.patientId].addresses[0].unitNumber
          };
          _actionsBookingActions2['default'].setBooker(booker);
          _actionsBookingActions2['default'].setLocation(location);
          _actionsBookingActions2['default'].setPatient(this.state.patients[this.state.patientId]);
          _actionsBookingActions2['default'].setLast('booking2');
        } else {
          event.preventDefault();
          // alert('Please fill up all required fields.');
          this._alertPopup.show();
        }
      }
    }, {
      key: '_getPatients',
      value: function _getPatients(user, cb) {
        var _this4 = this;

        cb = cb || function () {};
        this.serverRequest = _superagent2['default'].get(_libUtil2['default'].host + '/api/getPatients').query({
          cid: user.clients[0].id
        }).auth(user.id, user.token).end(function (err, res) {
          if (err) {
            return console.error(_libUtil2['default'].host + '/api/getPatients', err.toString());
          }
          if (res.body && res.body.status === 1) {
            console.log(res.body);
            // BookingActions.setUser(user);
            _this4.setState({
              patients: res.body.patients
            });
            return cb(res.body.patients);
          } else {
            console.error('Failed to obtain patients data.');
          }
        });
      }
    }]);

    return BookingLocationUser;
  })(_react.Component);

  exports['default'] = BookingLocationUser;
  module.exports = exports['default'];
  /*
  <div className="TableRow">
   <div className="TableRowItem1">Email</div>
   <div className="TableRowItem3">
     <input type="email" id="email" name="email" value={this.props.user.email} placeholder="Email*" maxLength="50" required />
   </div>
  </div>
  */ /*<a href="#" className={this.state.editingPatient || !this.state.patientId ? 'hidden' : ''} onClick={this._onClickEdit.bind(this, 'patient')}><img src={require('../pencil.png')} /></a>*/

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  __webpack_require__(103);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var BookingNavigationItem = (function (_Component) {
    _inherits(BookingNavigationItem, _Component);

    function BookingNavigationItem() {
      _classCallCheck(this, BookingNavigationItem);

      _get(Object.getPrototypeOf(BookingNavigationItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingNavigationItem, [{
      key: 'render',
      value: function render() {
        if (_storesBookingStore2['default'].isNavigationAllowed(this.props.link)) {
          return _react2['default'].createElement(
            'li',
            { className: 'BookingNavigationItem' },
            _react2['default'].createElement(
              'a',
              { className: (0, _classNames2['default'])('BookingNavigation-link', this.props.path.indexOf('/' + this.props.active) == 0 ? 'active' : ''), href: '/' + this.props.link, onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingNavigationItem-icon' },
                this.props.icon
              ),
              _react2['default'].createElement(
                'span',
                { className: 'BookingNavigationItem-text' },
                this.props.text
              )
            )
          );
        } else {
          return _react2['default'].createElement(
            'li',
            { className: 'BookingNavigationItem' },
            _react2['default'].createElement(
              'span',
              { className: (0, _classNames2['default'])('BookingNavigation-link', this.props.path.indexOf('/' + this.props.active) == 0 ? 'active' : '') },
              _react2['default'].createElement(
                'div',
                { className: 'BookingNavigationItem-icon' },
                this.props.icon
              ),
              _react2['default'].createElement(
                'span',
                { className: 'BookingNavigationItem-text' },
                this.props.text
              )
            )
          );
        }
      }
    }]);

    return BookingNavigationItem;
  })(_react.Component);

  exports['default'] = BookingNavigationItem;
  module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  __webpack_require__(104);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingPayment = (function (_Component) {
    _inherits(BookingPayment, _Component);

    function BookingPayment() {
      _classCallCheck(this, BookingPayment);

      _get(Object.getPrototypeOf(BookingPayment.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingPayment, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BookingPayment' },
          _react2['default'].createElement(
            'div',
            { className: 'BookingPaymentNav-wrapper' },
            _react2['default'].createElement(
              _Container2['default'],
              null,
              _react2['default'].createElement(
                'ul',
                { className: 'BookingPaymentNav' },
                _react2['default'].createElement(
                  'li',
                  { className: 'BookingPaymentNav-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('BookingPaymentNav-link', this.props.path === '/booking-confirmation' && this.props.postStatus === 'payment-paypal' ? 'active' : ''), href: '#', onClick: this._onClick.bind(this, 'paypal') },
                    'Paypal (Credit/Debit)',
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingPaymentNav-arrow' },
                      _react2['default'].createElement('div', { className: 'nav-caret' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'BookingPaymentNav-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('BookingPaymentNav-link', this.props.path === '/booking-confirmation' && this.props.postStatus === 'payment-bank' ? 'active' : ''), href: '#', onClick: this._onClick.bind(this, 'bank') },
                    'Bank Transfer',
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingPaymentNav-arrow' },
                      _react2['default'].createElement('div', { className: 'nav-caret' })
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _Container2['default'],
              null,
              _react2['default'].createElement(
                'div',
                { className: 'BookingPaymentBody' },
                this.props.children
              )
            )
          )
        );
      }
    }, {
      key: '_onClick',
      value: function _onClick(paymentType, event) {
        event.preventDefault();

        _actionsBookingActions2['default'].setPostStatus('payment-' + paymentType);
      }
    }]);

    return BookingPayment;
  })(_react.Component);

  exports['default'] = BookingPayment;
  module.exports = exports['default'];
  /*<li className="BookingPaymentNav-item">
   <a className={classNames('BookingPaymentNav-link', (this.props.path === '/booking-confirmation' && this.props.postStatus === 'payment-credits') ? 'active' : '')} href="#" onClick={this._onClick.bind(this, 'credits')}>eBeeCare Credits<span className="BookingPaymentNav-arrow"><div className="nav-caret"></div></span></a>
  </li>*/

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(105);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var BookingPaypal = (function (_Component) {
    _inherits(BookingPaypal, _Component);

    function BookingPaypal(props) {
      _classCallCheck(this, BookingPaypal);

      _get(Object.getPrototypeOf(BookingPaypal.prototype), 'constructor', this).call(this, props);
      this.state = {
        paymentId: this.props.location.query['paymentId'],
        pending: false,
        redirecting: false
      };
    }

    _createClass(BookingPaypal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.state.paymentId) {
          this.setState({
            pending: true
          });
          // Execute paypal payment since this is returned from Paypal
          this.serverRequest1 = _superagent2['default'].post(_libUtil2['default'].host + '/api/verifyPaypalTransaction').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
            ppid: this.state.paymentId
          }).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/verifyPaypalTransaction', status, err.toString());
            }
            console.log(res.body);
            if (res.body && res.body.status) {
              // console.log(res.body.items);
              _actionsBookingActions2['default'].setPostStatus('success');
            } else {
              console.error('Failed to execute paypal payment.');
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest1 && this.serverRequest1.abort();
        this.serverRequest2 && this.serverRequest2.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.paymentId) {
          return _react2['default'].createElement(
            'div',
            { className: 'BookingPaypal' },
            _react2['default'].createElement(_reactLoader2['default'], { className: 'spinner', loaded: this.state.pending ? false : true })
          );
        } else if (this.state.redirecting) {
          return _react2['default'].createElement(
            'div',
            { className: 'BookingPaypal' },
            _react2['default'].createElement(
              'div',
              { className: 'text-center' },
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'b',
                  null,
                  _react2['default'].createElement(
                    'i',
                    null,
                    'Redirecting to Paypal in a few seconds ...'
                  )
                )
              )
            ),
            _react2['default'].createElement(_reactLoader2['default'], { className: 'spinner', loaded: this.state.pending ? false : true })
          );
        } else {
          return _react2['default'].createElement(
            'div',
            { className: 'BookingPaypal' },
            _react2['default'].createElement(
              _reactLoader2['default'],
              { className: 'spinner', loaded: this.state.pending ? false : true },
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('img', { className: 'BookingPaypalLogo', src: __webpack_require__(31) }),
                _react2['default'].createElement('img', { className: 'BookingPaypalLogo', src: __webpack_require__(33) })
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'b',
                  null,
                  'Your Total Amount is SGD ',
                  this.props.booking && this.props.booking['case'] && this.props.booking['case'].price
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Please confirm your booking by clicking the "Confirm Booking" button below.',
                _react2['default'].createElement('br', null),
                'You will be redirected to Paypal to complete your payment.'
              ),
              _react2['default'].createElement('p', null),
              _react2['default'].createElement(
                'div',
                { className: 'BookingPaypalFooter' },
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'btn btn-primary', onClick: this._onConfirm.bind(this) },
                  'CONFIRM BOOKING'
                )
              )
            )
          );
        }
      }
    }, {
      key: '_onConfirm',
      value: function _onConfirm(event) {
        var _this = this;

        // Link.handleClick(event);
        event.preventDefault();

        this.setState({
          pending: true
        });

        var url = (window.location.href.indexOf('?') > -1 ? window.location.href.slice(0, window.location.href.indexOf('?') + 1) : window.location.href) + '?bid=' + this.props.booking.id + '&email=' + this.props.booking.client_contactEmail;

        this.serverRequest2 = _superagent2['default'].post(_libUtil2['default'].host + '/api/makePaypalWebPayment').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
          amount: this.props.booking['case'].price,
          type: 'case',
          cid: this.props.booking['case'].id,
          returnUrl: url,
          cancelUrl: url
        }).end(function (err, res) {
          if (err) {
            return console.error(_libUtil2['default'].host + '/api/makePaypalWebPayment', status, err.toString());
          }
          if (res.body && res.body.status === 1) {
            console.log(res.body.url);
            console.log(res.body.payment_id);
            _this.setState({
              redirecting: true
            });
            console.log('Redirecting to ' + res.body.url);
            window.location = res.body.url;
          } else {
            console.error('Failed to create paypal payment.');
          }
        });
        // console.log(url);
      }
    }]);

    return BookingPaypal;
  })(_react.Component);

  exports['default'] = BookingPaypal;
  module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  __webpack_require__(106);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingPostComplete = (function (_Component) {
    _inherits(BookingPostComplete, _Component);

    function BookingPostComplete(props) {
      _classCallCheck(this, BookingPostComplete);

      _get(Object.getPrototypeOf(BookingPostComplete.prototype), 'constructor', this).call(this, props);
    }

    _createClass(BookingPostComplete, [{
      key: 'render',
      value: function render() {
        var component, message, bookingId, bookingAmt;

        if (this.props.booking && this.props.booking['case'] && this.props.booking['case'].transactions && this.props.booking['case'].transactions.length) {
          var transaction = this.props.booking['case'].transactions[0];
          if (transaction) message = _react2['default'].createElement(
            'span',
            null,
            'Your payment via ',
            transaction.method,
            ' is ',
            transaction.status,
            '. Look out for our email on your booking summary.'
          );
        }

        if (this.props.booking && this.props.booking.id) {
          bookingId = this.props.booking.id;
        }

        if (this.props.booking && this.props.booking['case'] && this.props.booking['case'].price) {
          bookingAmt = this.props.booking['case'].price;
        }

        // if (this.state.bookingStatus) {
        component = _react2['default'].createElement(
          'div',
          { className: 'BookingPostCompleteBody' },
          _react2['default'].createElement(
            'div',
            { className: 'BookingPostCompleteHeader' },
            'THANK YOU'
          ),
          _react2['default'].createElement(
            'div',
            null,
            message
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'b',
              null,
              'BOOKING ID : ',
              bookingId
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            'TOTAL AMOUNT : SGD ',
            bookingAmt
          ),
          _react2['default'].createElement(
            'div',
            null,
            'For further inquiries, please email ',
            _react2['default'].createElement(
              'a',
              { href: 'mailto:contact@ebeecare.com' },
              'contact@ebeecare.com'
            ),
            ' or call us at 9733 6938, Mon-Fri (9.00am - 6.00pm).'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingPostCompleteFooter' },
            _react2['default'].createElement(
              'a',
              { href: '/manage-booking', className: 'btn btn-primary', onClick: _Link2['default'].handleClick },
              'Manage Booking'
            ),
            _react2['default'].createElement(
              'a',
              { href: '/', className: 'btn btn-primary', onClick: _Link2['default'].handleClick },
              'Back To Homepage'
            )
          )
        );
        // } else if (this.state.bookingStatus < 1) {
        //   component = (
        //     <div className="BookingPostCompleteBody">
        //       <div className="BookingPostCompleteHeader">
        //         TECHNICAL ERROR
        //       </div>
        //       <div>
        //         Oops, there was an error creating your booking. Please contact us at <a href="mailto:contact@ebeecare.com">contact@ebeecare.com</a> or 9733 6938 immediately.
        //       </div>
        //     </div>
        //   );
        // } else {
        //   component = (
        //     <div className="BookingPostCompleteBody">
        //       <Loader className="spinner" loaded={this.state.bookingId ? true : false} />
        //     </div>
        //   );
        // }

        return _react2['default'].createElement(
          'div',
          { className: 'BookingPostComplete' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              _reactLoader2['default'],
              { className: 'spinner', loaded: this.props.booking ? true : false },
              component
            )
          )
        );
      }
    }]);

    return BookingPostComplete;
  })(_react.Component);

  exports['default'] = BookingPostComplete;
  module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  __webpack_require__(107);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var BookingPostNavigation = (function (_Component) {
    _inherits(BookingPostNavigation, _Component);

    function BookingPostNavigation() {
      _classCallCheck(this, BookingPostNavigation);

      _get(Object.getPrototypeOf(BookingPostNavigation.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BookingPostNavigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BookingPostNavigation-wrapper' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'ul',
              { className: 'BookingPostNavigation' },
              _react2['default'].createElement(
                'li',
                { className: 'BookingPostNavigation-item' },
                _react2['default'].createElement(
                  'a',
                  { className: (0, _classNames2['default'])('BookingPostNavigation-link', this.props.path === '/booking-confirmation' && this.props.postStatus === 'confirmation' ? 'active' : ''), href: '#', onClick: this._onClick.bind(this) },
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingPostNavigation-item-icon' },
                    '1'
                  ),
                  _react2['default'].createElement(
                    'span',
                    { className: 'BookingPostNavigation-item-text' },
                    'Booking Confirmation'
                  )
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'BookingPostNavigation-item' },
                _react2['default'].createElement(
                  'span',
                  { className: (0, _classNames2['default'])('BookingPostNavigation-link', this.props.path === '/booking-confirmation' && this.props.postStatus.indexOf('payment') > -1 ? 'active' : '') },
                  _react2['default'].createElement(
                    'div',
                    { className: 'BookingPostNavigation-item-icon' },
                    '2'
                  ),
                  _react2['default'].createElement(
                    'span',
                    { className: 'BookingPostNavigation-item-text' },
                    'Booking Payment'
                  )
                )
              )
            )
          )
        );
      }
    }, {
      key: '_onClick',
      value: function _onClick(event) {
        event.preventDefault();

        _actionsBookingActions2['default'].setPostStatus('confirmation');
      }
    }]);

    return BookingPostNavigation;
  })(_react.Component);

  exports['default'] = BookingPostNavigation;
  module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _moment = __webpack_require__(16);

  var _moment2 = _interopRequireDefault(_moment);

  __webpack_require__(108);

  var BookingPostSidebar = (function (_Component) {
    _inherits(BookingPostSidebar, _Component);

    function BookingPostSidebar(props) {
      _classCallCheck(this, BookingPostSidebar);

      _get(Object.getPrototypeOf(BookingPostSidebar.prototype), 'constructor', this).call(this, props);
    }

    _createClass(BookingPostSidebar, [{
      key: 'render',
      value: function render() {
        var service, location, sessions, sum;
        if (this.props.allServicesHash && this.props.booking && this.props.booking['case'] && this.props.booking['case'].service) {
          service = this.props.allServicesHash[this.props.booking['case'].service].name;
        }
        if (this.props.booking && this.props.booking['case']) {
          location = _react2['default'].createElement(
            'span',
            null,
            this.props.booking['case'].addresses[0].address,
            _react2['default'].createElement('br', null),
            this.props.booking['case'].addresses[0].unitNumber
          );
        }
        if (this.props.booking && this.props.booking['case']) {
          sessions = this.props.booking['case'].dates;
        }
        if (this.props.booking && this.props.booking['case']) {
          sum = parseFloat(this.props.booking['case'].price);
        }
        return _react2['default'].createElement(
          'div',
          { className: 'BookingPostSidebar' },
          _react2['default'].createElement(
            'div',
            { className: 'BookingPostSidebarTitle' },
            'Your Booking'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingPostSidebarContent' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingPostSidebarService' },
              _react2['default'].createElement(
                'div',
                { className: 'BookingPostSidebarItem' },
                service
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingPostSidebarLocation' },
              _react2['default'].createElement(
                'div',
                { className: 'BookingPostSidebarItem' },
                location
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingPostSidebarTimings' },
              _react2['default'].createElement(
                'div',
                { className: 'BookingPostSidebarItem' },
                sessions && sessions.map(function (session) {
                  return _react2['default'].createElement(
                    'div',
                    { key: session.id },
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingPostSidebarItemLeft' },
                      (0, _moment2['default'])(session.dateTimeStart).format('D MMM')
                    ),
                    _react2['default'].createElement(
                      'span',
                      { className: 'BookingPostSidebarItemRight' },
                      '$ ',
                      session.price
                    )
                  );
                })
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'BookingPostSidebarSlots' },
              _react2['default'].createElement('div', { className: 'BookingPostSidebarItem' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingPostSidebarFooter' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingPostSidebarPrice' },
              _react2['default'].createElement(
                'span',
                { className: 'BookingPostSidebarPriceLabel' },
                typeof sum === 'number' ? 'Total Cost' : ''
              ),
              _react2['default'].createElement(
                'span',
                { className: 'BookingPostSidebarPriceCost' },
                typeof sum === 'number' ? 'SGD ' + sum.toFixed(2) : ''
              )
            )
          )
        );
      }
    }]);

    return BookingPostSidebar;
  })(_react.Component);

  exports['default'] = BookingPostSidebar;
  module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(111);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var BookingSidebar = (function (_Component) {
    _inherits(BookingSidebar, _Component);

    function BookingSidebar(props) {
      _classCallCheck(this, BookingSidebar);

      _get(Object.getPrototypeOf(BookingSidebar.prototype), 'constructor', this).call(this, props);
    }

    _createClass(BookingSidebar, [{
      key: 'render',
      value: function render() {
        var service, location, dateRange, timeslots, sum;
        if (this.props.allServicesHash && this.props.booking && this.props.booking.service) {
          service = this.props.allServicesHash[this.props.booking.service].name;
        }
        if (this.props.booking && this.props.booking.location && this.props.booking.location.postalCode) {
          location = _react2['default'].createElement(
            'span',
            null,
            this.props.booking.location.address,
            _react2['default'].createElement('br', null),
            this.props.booking.location.unitNumber
          );
        }
        if (this.props.booking && this.props.booking.range) {
          dateRange = this.props.booking.range.start.format('DD-MM-YYYY') + ' - ' + this.props.booking.range.end.format('DD-MM-YYYY');
        }
        if (this.props.booking && this.props.booking.timeslots) {
          timeslots = this.props.booking.timeslots;
        }
        if (this.props.booking && typeof this.props.booking.sum === 'number') {
          sum = this.props.booking.sum;
        }
        return _react2['default'].createElement(
          'div',
          { className: 'BookingSidebar' },
          _react2['default'].createElement(
            'div',
            { className: 'BookingSidebarTitle' },
            'Your Booking'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingSidebarContent' },
            _react2['default'].createElement(
              'a',
              { href: '/booking1', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingSidebarService' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingSidebarItem' },
                  service
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/booking2', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingSidebarLocation' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingSidebarItem' },
                  location
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/booking3a', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingSidebarDates' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingSidebarItem' },
                  dateRange
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/booking3b', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingSidebarTimings' },
                _react2['default'].createElement(
                  'div',
                  { className: 'BookingSidebarItem' },
                  timeslots && timeslots.map(function (timeslot) {
                    if (timeslot === 'Morning') {
                      return _react2['default'].createElement(
                        'div',
                        { key: 'Morning' },
                        'Morning: 8.00am - 11:00am'
                      );
                    } else if (timeslot === 'Afternoon') {
                      return _react2['default'].createElement(
                        'div',
                        { key: 'Afternoon' },
                        'Afternoon: 12:00pm - 5:00pm'
                      );
                    } else if (timeslot === 'Evening') {
                      return _react2['default'].createElement(
                        'div',
                        { key: 'Evening' },
                        'Evening: 7:00pm - 10:00pm'
                      );
                    }
                  })
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/booking3c', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'BookingSidebarSlots' },
                _react2['default'].createElement('div', { className: 'BookingSidebarItem' })
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'BookingSidebarFooter' },
            _react2['default'].createElement(
              'div',
              { className: 'BookingSidebarPrice' },
              _react2['default'].createElement(
                'span',
                { className: 'BookingSidebarPriceLabel' },
                typeof sum === 'number' ? 'Estimated Costs' : ''
              ),
              _react2['default'].createElement(
                'span',
                { className: 'BookingSidebarPriceCost' },
                typeof sum === 'number' ? 'SGD ' + sum.toFixed(2) : ''
              )
            )
          )
        );
      }
    }]);

    return BookingSidebar;
  })(_react.Component);

  exports['default'] = BookingSidebar;
  module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactSkylight = __webpack_require__(26);

  var _reactSkylight2 = _interopRequireDefault(_reactSkylight);

  __webpack_require__(113);

  var ConfirmPopup = (function (_Component) {
    _inherits(ConfirmPopup, _Component);

    function ConfirmPopup() {
      _classCallCheck(this, ConfirmPopup);

      _get(Object.getPrototypeOf(ConfirmPopup.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ConfirmPopup, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var styles = {
          dialogStyles: {
            width: '50%',
            height: 'auto',
            marginTop: '0',
            marginLeft: '-25%',
            top: '100px',
            textAlign: 'center'
          },
          title: {
            color: '#f78d00'
          },
          closeButtonStyle: {
            color: '#f78d00',
            textDecoration: 'none'
          }
        };

        return _react2['default'].createElement(
          _reactSkylight2['default'],
          { dialogStyles: styles.dialogStyles, title: styles.title, closeButtonStyle: styles.closeButtonStyle, hideOnOverlayClicked: true, ref: function (c) {
              return _this._confirmDialog = c;
            }, title: 'Confirmation' },
          _react2['default'].createElement(
            'div',
            { className: 'ConfirmPopup' },
            this.props.children,
            _react2['default'].createElement(
              'div',
              { className: 'ConfirmPopup-footer' },
              _react2['default'].createElement(
                'a',
                { className: 'btn btn-primary btn-small', href: '#', onClick: this._onClickOk.bind(this) },
                'OK'
              ),
              _react2['default'].createElement(
                'a',
                { className: 'btn btn-primary btn-small', href: '#', onClick: this._onClickCancel.bind(this) },
                'Cancel'
              )
            )
          )
        );
      }
    }, {
      key: '_onClickOk',
      value: function _onClickOk(event) {
        this._confirmDialog.hide();
        this._ok();
      }
    }, {
      key: '_onClickCancel',
      value: function _onClickCancel(event) {
        this._confirmDialog.hide();
      }
    }, {
      key: 'show',
      value: function show(ok) {
        this._ok = ok || function () {};
        this._confirmDialog.show();
      }
    }]);

    return ConfirmPopup;
  })(_react.Component);

  exports['default'] = ConfirmPopup;
  module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(115);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var Features = (function (_Component) {
    _inherits(Features, _Component);

    function Features() {
      _classCallCheck(this, Features);

      _get(Object.getPrototypeOf(Features.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Features, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Features' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'h1',
              { className: 'text-center' },
              'A family caregiver for every needing family'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'text-center featured' },
              'As caregivers ourselves, we understand the stress and urgency involved, often in the busiest period of the day in the mornings. Let our healthcare professionals assist you in reducing your load and in supporting you to get your loved ones ready to start the day!'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Features-list' },
              _react2['default'].createElement(
                'div',
                { className: 'Features-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(128), className: 'Features-item-icon' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Features-item-title' },
                  'Short-hours care'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'No minimum hours required!'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Features-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(129), className: 'Features-item-icon' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Features-item-title' },
                  'Hassle-Free'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Let us handle the coordination for you!'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Features-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(130), className: 'Features-item-icon' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Features-item-title' },
                  'Customised Care'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Every patient has different needs'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Features-item' },
                _react2['default'].createElement('img', { src: __webpack_require__(131), className: 'Features-item-icon' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'Features-item-title' },
                  'Verified Caregivers'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'By both eBeeCare and community'
                )
              )
            )
          )
        );
      }
    }]);

    return Features;
  })(_react.Component);

  exports['default'] = Features;
  module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactIconsLibFaFacebook = __webpack_require__(149);

  var _reactIconsLibFaFacebook2 = _interopRequireDefault(_reactIconsLibFaFacebook);

  var _reactIconsLibFaTwitter = __webpack_require__(151);

  var _reactIconsLibFaTwitter2 = _interopRequireDefault(_reactIconsLibFaTwitter);

  var _reactIconsLibFaInstagram = __webpack_require__(150);

  var _reactIconsLibFaInstagram2 = _interopRequireDefault(_reactIconsLibFaInstagram);

  __webpack_require__(116);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var Footer = (function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
      _classCallCheck(this, Footer);

      _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
      key: 'render',

      // static propTypes = {
      //   children: PropTypes.element.isRequired,
      // };

      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Footer' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'Footer-list' },
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '71 Ayer Rajah Crescent',
                  _react2['default'].createElement('br', null),
                  '#04-11 S(139951)'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'https://www.google.com.sg/maps/place/71+Ayer+Rajah+Crescent,+Singapore+139951/@1.2967471,103.7844749,17z/data=!3m1!4b1!4m2!3m1!1s0x31da1a4fd6a29643:0x1cbb8a56dd8c9ccf!6m1!1e1', className: 'btn Footer-maps-button', target: '_blank' },
                  _react2['default'].createElement('img', { src: __webpack_require__(132) }),
                  _react2['default'].createElement(
                    'span',
                    { className: 'Footer-maps-label' },
                    'Find Location'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Footer-tel' },
                  '6873 0132'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'mailto:contact@ebeecare.com' },
                    'contact@ebeecare.com'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Find us on:'
                  ),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://www.facebook.com/ebeecare/', className: 'Footer-social-media' },
                    _react2['default'].createElement(_reactIconsLibFaFacebook2['default'], null)
                  ),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://twitter.com/ebeecaresg', className: 'Footer-social-media' },
                    _react2['default'].createElement(_reactIconsLibFaTwitter2['default'], null)
                  ),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://www.instagram.com/ebeecare_official/', className: 'Footer-social-media' },
                    _react2['default'].createElement(_reactIconsLibFaInstagram2['default'], null)
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Copyright' },
              _react2['default'].createElement(
                'div',
                null,
                '© Copyright ',
                new Date().getFullYear(),
                ' by eBeeCare Pte. Ltd. (201415751N). '
              ),
              _react2['default'].createElement(
                'div',
                null,
                'All Rights Reserved.'
              )
            )
          )
        );
      }
    }]);

    return Footer;
  })(_react.Component);

  exports['default'] = Footer;
  module.exports = exports['default'];
  /*
  <a href="" className="Footer-social-media"><i className="fa fa-google-plus"></i></a>
  <a href="" className="Footer-social-media"><i className="fa fa-linkedin"></i></a>
  */

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(117);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Navigation = __webpack_require__(58);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(54);

  var _Footer2 = _interopRequireDefault(_Footer);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          _react2['default'].createElement(_Navigation2['default'], { path: this.props.path, pullRight: true }),
          _react2['default'].createElement(
            'div',
            { className: 'Body' },
            this.props.children
          ),
          _react2['default'].createElement(_Footer2['default'], null)
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLinkState = __webpack_require__(10);

  var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _reactSkylight = __webpack_require__(26);

  var _reactSkylight2 = _interopRequireDefault(_reactSkylight);

  __webpack_require__(119);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var LoginPopup = (function (_Component) {
    _inherits(LoginPopup, _Component);

    function LoginPopup(props) {
      _classCallCheck(this, LoginPopup);

      _get(Object.getPrototypeOf(LoginPopup.prototype), 'constructor', this).call(this, props);
      this.state = {
        email: undefined,
        password: undefined,
        error: undefined,
        pending: false
      };
    }

    _createClass(LoginPopup, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest && this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var styles = {
          dialogStyles: {
            width: '340px',
            marginLeft: '-170px'
          },
          title: {
            display: 'none'
          },
          closeButtonStyle: {
            color: '#f78d00',
            textDecoration: 'none'
          }
        };

        return _react2['default'].createElement(
          _reactSkylight2['default'],
          {
            dialogStyles: styles.dialogStyles,
            titleStyle: styles.title,
            closeButtonStyle: styles.closeButtonStyle,
            afterOpen: this._executeAfterModalOpen.bind(this),
            hideOnOverlayClicked: true,
            ref: function (c) {
              return _this._loginPopup = c;
            } },
          _react2['default'].createElement(
            _reactLoader2['default'],
            { className: 'spinner', loaded: this.state.pending ? false : true },
            _react2['default'].createElement(
              'div',
              { className: 'LoginPopup' },
              _react2['default'].createElement(
                'div',
                { className: 'Account-login Account-container-item' },
                _react2['default'].createElement(
                  'form',
                  { id: 'AccountLoginForm', ref: function (c) {
                      return _this._accountLoginForm = c;
                    }, autoComplete: 'off' },
                  _react2['default'].createElement(
                    'h3',
                    null,
                    'eBeeCare Login'
                  ),
                  _react2['default'].createElement('input', { className: 'EmailInput', type: 'email', name: 'email', ref: function (c) {
                      return _this._startInput = c;
                    }, valueLink: (0, _reactLinkState2['default'])(this, 'email'), placeholder: 'Enter Email', required: true }),
                  _react2['default'].createElement('input', { className: 'PasswordInput', type: 'password', name: 'password', valueLink: (0, _reactLinkState2['default'])(this, 'password'), placeholder: 'Enter Password', required: true }),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Account-container-item-middle' },
                    _react2['default'].createElement(
                      'div',
                      { className: this.state.error ? '' : 'hidden' },
                      _react2['default'].createElement(
                        'span',
                        { className: 'error' },
                        'Failed to login.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this._onClickLogin.bind(this) },
                    'Login'
                  )
                )
              )
            )
          )
        );
      }
    }, {
      key: '_onClickLogin',
      value: function _onClickLogin(event) {
        var _this2 = this;

        if (this._accountLoginForm.checkValidity()) {
          event.preventDefault();

          this.setState({ pending: true });

          this.serverRequest = _superagent2['default'].post(_libUtil2['default'].host + '/api/mlogin').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).send({
            email: this.state.email,
            password: this.state.password
          }).end(function (err, res) {
            _this2.setState({ pending: false });
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/mlogin', status, err.toString());
            }
            if (res.body && res.body.status === 1) {
              console.log(res.body);
              var user = res.body.user;

              _this2.setState({
                error: undefined
              });

              _this2._loginPopup.hide();

              _this2._success(user);
            } else {
              _this2.setState({
                error: true
              });
              console.error('Failed to login.');
            }
          });

          this.setState({
            email: undefined,
            password: undefined
          });
        }
      }
    }, {
      key: '_executeAfterModalOpen',
      value: function _executeAfterModalOpen() {
        this._startInput.focus();
      }
    }, {
      key: 'show',
      value: function show(success) {
        this._success = success || function () {};
        this._loginPopup.show();
      }
    }]);

    return LoginPopup;
  })(_react.Component);

  exports['default'] = LoginPopup;
  module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(120);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Logo' },
          _react2['default'].createElement(
            'a',
            { href: '/' },
            _react2['default'].createElement('img', { src: __webpack_require__(134) })
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _reactBurgerMenu = __webpack_require__(146);

  __webpack_require__(121);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Logo = __webpack_require__(57);

  var _Logo2 = _interopRequireDefault(_Logo);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation(props) {
      _classCallCheck(this, Navigation);

      _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).call(this, props);
      this.state = {
        visible: false
      };
    }

    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'NavWrapper' },
          _react2['default'].createElement(
            _reactBurgerMenu.slide,
            { id: "mobile-menu", width: 150, isOpen: this.state.visible, right: true },
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/' ? 'active' : ''), href: '/', onClick: _Link2['default'].handleClick },
                'Home'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/about' ? 'active' : ''), href: '/about', onClick: _Link2['default'].handleClick },
                'About'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/faq' ? 'active' : ''), href: '/faq', onClick: _Link2['default'].handleClick },
                'FAQ'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/services' ? 'active' : ''), href: '/services', onClick: _Link2['default'].handleClick },
                'Services'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/contact' ? 'active' : ''), href: '/contact', onClick: _Link2['default'].handleClick },
                'Contact'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/booking-manage' ? 'active' : ''), href: '/booking-manage', onClick: _Link2['default'].handleClick },
                'Manage Booking'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: 'Navigation-link', href: 'https://app.ebeecare.com/login/' },
                'Login'
              )
            )
          ),
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'Navigation-wrapper' },
              _react2['default'].createElement(_Logo2['default'], null),
              _react2['default'].createElement(
                'ul',
                { className: (0, _classNames2['default'])('Navigation', this.state.visible ? 'visible' : ''), role: 'menu' },
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/' ? 'active' : ''), href: '/', onClick: _Link2['default'].handleClick },
                    'Home'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/about' ? 'active' : ''), href: '/about', onClick: _Link2['default'].handleClick },
                    'About'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/faq' ? 'active' : ''), href: '/faq', onClick: _Link2['default'].handleClick },
                    'FAQ'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/services' ? 'active' : ''), href: '/services', onClick: _Link2['default'].handleClick },
                    'Services'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/contact' ? 'active' : ''), href: '/contact', onClick: _Link2['default'].handleClick },
                    'Contact'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/booking-manage' ? 'active' : ''), href: '/booking-manage', onClick: _Link2['default'].handleClick },
                    'Manage Booking'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'Navigation-item' },
                  _react2['default'].createElement(
                    'a',
                    { className: 'Navigation-link', href: 'https://app.ebeecare.com/login/' },
                    'Login'
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return Navigation;
  })(_react.Component);

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(12);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _reactIconsLibFaSpinner = __webpack_require__(36);

  var _reactIconsLibFaSpinner2 = _interopRequireDefault(_reactIconsLibFaSpinner);

  var _reactLoader = __webpack_require__(6);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  var _reactSanfona = __webpack_require__(152);

  var _superagent = __webpack_require__(7);

  var _superagent2 = _interopRequireDefault(_superagent);

  __webpack_require__(122);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _AlertPopup = __webpack_require__(11);

  var _AlertPopup2 = _interopRequireDefault(_AlertPopup);

  var _actionsBookingActions = __webpack_require__(5);

  var _actionsBookingActions2 = _interopRequireDefault(_actionsBookingActions);

  var _libLocation = __webpack_require__(15);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _libUtil = __webpack_require__(9);

  var _libUtil2 = _interopRequireDefault(_libUtil);

  var ALL_SERVICES = 'All Services';

  var Services = (function (_Component) {
    _inherits(Services, _Component);

    function Services(props) {
      _classCallCheck(this, Services);

      _get(Object.getPrototypeOf(Services.prototype), 'constructor', this).call(this, props);
      this.state = {
        services: undefined,
        filter: ALL_SERVICES,
        selectedService: undefined
      };
    }

    _createClass(Services, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        if (!this.state.services) {
          this.serverRequest1 = _superagent2['default'].get(_libUtil2['default'].host + '/api/getServices').auth(_libUtil2['default'].authKey, _libUtil2['default'].authSecret).end(function (err, res) {
            if (err) {
              return console.error(_libUtil2['default'].host + '/api/getServices', err.toString());
            }
            if (res.body && res.body.services && Array.isArray(res.body.services)) {
              // console.log(res.body.services);
              _this.setState({
                services: res.body.services
              });
            } else {
              console.error('Failed to obtain services data.');
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest1 && this.serverRequest1.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2['default'].createElement(
          'div',
          { className: 'Services' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'Services'
              )
            )
          ),
          _react2['default'].createElement(
            _reactLoader2['default'],
            { className: 'spinner', loaded: this.state.services ? true : false },
            _react2['default'].createElement(
              'div',
              { className: 'ServicesNav-wrapper' },
              _react2['default'].createElement(
                _Container2['default'],
                null,
                _react2['default'].createElement(
                  'ul',
                  { className: 'ServicesNav' },
                  _react2['default'].createElement(
                    'li',
                    { className: 'ServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('ServicesNav-link', this.state.filter === ALL_SERVICES ? 'active' : ''), href: '/', onClick: this._onClickFilter.bind(this, ALL_SERVICES) },
                      'All Services',
                      _react2['default'].createElement(
                        'span',
                        { className: 'ServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'ServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('ServicesNav-link', this.state.filter === 'Home Nursing' ? 'active' : ''), href: '/about', onClick: this._onClickFilter.bind(this, 'Home Nursing') },
                      'Home Nursing',
                      _react2['default'].createElement(
                        'span',
                        { className: 'ServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'ServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('ServicesNav-link', this.state.filter === 'Home Social Care' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home Social Care') },
                      'Home Social Care',
                      _react2['default'].createElement(
                        'span',
                        { className: 'ServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'ServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('ServicesNav-link', this.state.filter === 'Home Medical' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home Medical') },
                      'Home Medical',
                      _react2['default'].createElement(
                        'span',
                        { className: 'ServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    { className: 'ServicesNav-item' },
                    _react2['default'].createElement(
                      'a',
                      { className: (0, _classNames2['default'])('ServicesNav-link', this.state.filter === 'Home TCM' ? 'active' : ''), href: '/faq', onClick: this._onClickFilter.bind(this, 'Home TCM') },
                      'Home TCM',
                      _react2['default'].createElement(
                        'span',
                        { className: 'ServicesNav-arrow' },
                        _react2['default'].createElement('div', { className: 'nav-caret' })
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                _Container2['default'],
                null,
                _react2['default'].createElement(
                  'div',
                  { className: 'ServicesBody' },
                  this.state.services && this._subFilterServices(this._filterServices(this.state.services, this.state.filter)).map(function (services) {
                    return _react2['default'].createElement(
                      'div',
                      { key: services[0].subType },
                      _react2['default'].createElement(
                        'h3',
                        null,
                        _this2.state.filter === ALL_SERVICES ? services[0].category + ' > ' : '',
                        services[0].subType
                      ),
                      _react2['default'].createElement(
                        _reactSanfona.Accordion,
                        { activeItems: -1 },
                        services.map(function (service) {
                          return _react2['default'].createElement(
                            _reactSanfona.AccordionItem,
                            { title: service.name, key: service.id },
                            _react2['default'].createElement(
                              'div',
                              null,
                              service.description
                            ),
                            _react2['default'].createElement(
                              'div',
                              null,
                              _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-primary btn-small', onClick: _this2._onClickBook.bind(_this2, service) },
                                'Book Service'
                              )
                            )
                          );
                        })
                      )
                    );
                  })
                )
              )
            )
          )
        );
      }
    }, {
      key: '_onClickFilter',
      value: function _onClickFilter(filter, event) {
        event.preventDefault();

        this.setState({
          filter: filter
        });
      }
    }, {
      key: '_onSelect',
      value: function _onSelect(event) {
        this.setState({
          selectedService: parseInt(event.target.value)
        });
      }
    }, {
      key: '_filterServices',
      value: function _filterServices(services, filter) {
        return services.filter(function (service) {
          if (filter === ALL_SERVICES) return true;
          return service.category === filter;
        }).sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      }
    }, {
      key: '_subFilterServices',
      value: function _subFilterServices(services) {
        var hash = {},
            arr = [];
        services.forEach(function (service) {
          if (hash[service.subType]) {
            hash[service.subType].push(service);
          } else {
            hash[service.subType] = [service];
          }
        });
        for (var subType in hash) {
          arr.push(hash[subType]);
        }
        return arr;
      }
    }, {
      key: '_onClickBook',
      value: function _onClickBook(service, event) {
        event.preventDefault();

        _libLocation2['default'].push({ pathname: '/booking1', query: { sid: service.id } });
      }
    }]);

    return Services;
  })(_react.Component);

  exports['default'] = Services;
  module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(123);

  var _Container = __webpack_require__(3);

  var _Container2 = _interopRequireDefault(_Container);

  var Testimonials = (function (_Component) {
    _inherits(Testimonials, _Component);

    function Testimonials() {
      _classCallCheck(this, Testimonials);

      _get(Object.getPrototypeOf(Testimonials.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Testimonials, [{
      key: 'render',
      value: function render() {
        var avatar = function avatar(image) {
          return '<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><clipPath id="hex-mask"><polygon fill="#ff0000" points="60,0 120,30 120,90 60,120 0,90 0,30"/></clipPath></g><image clip-path="url(#hex-mask)" height="120" width="120" xlink:href="' + image + '" /></svg>';
        };
        return _react2['default'].createElement(
          'div',
          { className: 'Testimonials' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'h1',
              { className: 'text-center' },
              'Our Customers Say...'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Testimonials-list' },
              _react2['default'].createElement(
                'div',
                { className: 'Testimonials-item' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Testimonials-wrapper' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-text' },
                    'I tried out a few nutritionists from eBeeCare (for free) before I found Mark (a nutritionist whom I am now engaging on a long term basis).'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-name' },
                    'Vietnamese Businessman',
                    _react2['default'].createElement('br', null),
                    'Mr Ho Qun Tea'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-avatar' },
                    _react2['default'].createElement(
                      'svg',
                      { width: '120', height: '120', viewBox: '0 0 120 120', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1' },
                      _react2['default'].createElement(
                        'g',
                        null,
                        _react2['default'].createElement(
                          'clipPath',
                          { id: 'hex-mask' },
                          _react2['default'].createElement('polygon', { fill: '#ff0000', points: '60,0 120,30 120,90 60,120 0,90 0,30' })
                        )
                      ),
                      _react2['default'].createElement('image', { clipPath: 'url(#hex-mask)', height: '120', width: '120', xlinkHref: __webpack_require__(137) })
                    )
                  )
                ),
                _react2['default'].createElement('div', null)
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Testimonials-item' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Testimonials-wrapper' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-text' },
                    'We never knew wound care procedure could be done at home! Thanks to eBeeCare, now we do not need to take leave to bring my mum to hospital for simple wound dressing.'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-name' },
                    'Daughter of',
                    _react2['default'].createElement('br', null),
                    'Madam Goh Chng Ying'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-avatar' },
                    _react2['default'].createElement(
                      'svg',
                      { width: '120', height: '120', viewBox: '0 0 120 120', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1' },
                      _react2['default'].createElement(
                        'g',
                        null,
                        _react2['default'].createElement(
                          'clipPath',
                          { id: 'hex-mask' },
                          _react2['default'].createElement('polygon', { fill: '#ff0000', points: '60,0 120,30 120,90 60,120 0,90 0,30' })
                        )
                      ),
                      _react2['default'].createElement('image', { clipPath: 'url(#hex-mask)', height: '120', width: '120', xlinkHref: __webpack_require__(136) })
                    )
                  )
                ),
                _react2['default'].createElement('div', null)
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Testimonials-item' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Testimonials-wrapper' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-text' },
                    'It is so convenient to get a professional nurse from eBeeCare, even for last minute requests; and their price is very competitive.'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-name' },
                    'School Trip Organizer',
                    _react2['default'].createElement('br', null),
                    'Ms Cindy Chng'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'Testimonials-item-avatar' },
                    _react2['default'].createElement(
                      'svg',
                      { width: '120', height: '120', viewBox: '0 0 120 120', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', version: '1.1' },
                      _react2['default'].createElement(
                        'g',
                        null,
                        _react2['default'].createElement(
                          'clipPath',
                          { id: 'hex-mask' },
                          _react2['default'].createElement('polygon', { fill: '#ff0000', points: '60,0 120,30 120,90 60,120 0,90 0,30' })
                        )
                      ),
                      _react2['default'].createElement('image', { clipPath: 'url(#hex-mask)', height: '120', width: '120', xlinkHref: __webpack_require__(135) })
                    )
                  )
                ),
                _react2['default'].createElement('div', null)
              )
            )
          )
        );
      }
    }]);

    return Testimonials;
  })(_react.Component);

  exports['default'] = Testimonials;
  module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'About eBeeCare'
              ),
              _react2['default'].createElement(
                'h2',
                { className: '' },
                'The idea behind ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'eBeeCare'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                '“Many years back (almost a decade); the founder’s dad had a stroke when he was still serving in the army. His whole world changed with a role reversal – from being cared for to caring for his dad. To say the truth, he was very lost. His mother, being the primary caregiver, had a very hard time for the first few years as they were not supported by any organisation.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'After a few years, his dad’s condition deteriorated. He was thankful that he had graduated from NUS Nursing when that happened. He was then able to apply what he have learnt to care for his dad instead of hiring home care. Being a low-middle income family, engaging home care would be very expensive.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Those made him realize that improvements can be made to the current home care system. Everyone eventually becomes a caregiver or plays that part at some point in their lives.”'
              )
            ),
            _react2['default'].createElement('hr', null),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h2',
                null,
                'How We Are Fixing It'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Through all that, eBeeCare was born. eBeeCare serves as a trusted online nurse-caregiver co-ordination platform within the community, to provide holistic care seamlessly as a service provider – a world’s first. We understand the constraints in life. We feel what you are going through and know the best solution. Let’s work together to care for your loved ones and YOUR well-being. Caregiving is truly a test of one’s character strength, perseverance and unconditional love but it should never become a burden.'
              )
            ),
            _react2['default'].createElement('hr', null),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h2',
                null,
                'Our Vision'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'A Family Caregiver for Every Needing Family'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h2',
                null,
                'Our Mission'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'To enable ageing in place by providing support to caregivers'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h2',
                null,
                'Our Core Values'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Flexibility | Quality | Holistic | Continuity of Care'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingAppBookingApp = __webpack_require__(29);

  var _componentsBookingAppBookingApp2 = _interopRequireDefault(_componentsBookingAppBookingApp);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_componentsBookingAppBookingApp2['default'], { location: this.props.location, path: this.props.path });
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsAccountAccount = __webpack_require__(19);

  var _componentsAccountAccount2 = _interopRequireDefault(_componentsAccountAccount);

  var _componentsBookingDetailsBookingDetails = __webpack_require__(30);

  var _componentsBookingDetailsBookingDetails2 = _interopRequireDefault(_componentsBookingDetailsBookingDetails);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {
        booking: undefined
      };
    }

    _createClass(_default, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        _storesBookingStore2['default'].addChangeListener(this._onChange.bind(this));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _storesBookingStore2['default'].removeChangeListener(this._onChange.bind(this));

        this.serverRequest1 && this.serverRequest1.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var component;
        if (this.state.booking && this.state.booking.id) {
          component = _react2['default'].createElement(_componentsBookingDetailsBookingDetails2['default'], { booking: this.state.booking });
        } else {
          component = _react2['default'].createElement(_componentsAccountAccount2['default'], { type: 'login' });
        }
        return _react2['default'].createElement(
          'div',
          null,
          component
        );
      }

      /**
       * Event handler for 'change' events coming from the BookingStore
       */
    }, {
      key: '_onChange',
      value: function _onChange() {
        this.setState(_storesBookingStore2['default'].getState());
        // console.log(this.state);
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingAppBookingApp = __webpack_require__(29);

  var _componentsBookingAppBookingApp2 = _interopRequireDefault(_componentsBookingAppBookingApp);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(_componentsBookingAppBookingApp2['default'], { location: this.props.location, path: this.props.path });
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingServicesBookingServices = __webpack_require__(23);

  var _componentsBookingServicesBookingServices2 = _interopRequireDefault(_componentsBookingServicesBookingServices);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(_componentsBookingServicesBookingServices2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingLocationBookingLocation = __webpack_require__(21);

  var _componentsBookingLocationBookingLocation2 = _interopRequireDefault(_componentsBookingLocationBookingLocation);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(_componentsBookingLocationBookingLocation2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingLocationBookingLocation = __webpack_require__(21);

  var _componentsBookingLocationBookingLocation2 = _interopRequireDefault(_componentsBookingLocationBookingLocation);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(_componentsBookingLocationBookingLocation2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingDateBookingDate = __webpack_require__(20);

  var _componentsBookingDateBookingDate2 = _interopRequireDefault(_componentsBookingDateBookingDate);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingDateBookingDate2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingDateBookingDate = __webpack_require__(20);

  var _componentsBookingDateBookingDate2 = _interopRequireDefault(_componentsBookingDateBookingDate);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingDateBookingDate2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingTimeBookingTime = __webpack_require__(24);

  var _componentsBookingTimeBookingTime2 = _interopRequireDefault(_componentsBookingTimeBookingTime);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingTimeBookingTime2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingTimeBookingTime = __webpack_require__(24);

  var _componentsBookingTimeBookingTime2 = _interopRequireDefault(_componentsBookingTimeBookingTime);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingTimeBookingTime2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingResultsBookingResults = __webpack_require__(22);

  var _componentsBookingResultsBookingResults2 = _interopRequireDefault(_componentsBookingResultsBookingResults);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingResultsBookingResults2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingDateTimeBookingDateTime = __webpack_require__(14);

  var _componentsBookingDateTimeBookingDateTime2 = _interopRequireDefault(_componentsBookingDateTimeBookingDateTime);

  var _componentsBookingResultsBookingResults = __webpack_require__(22);

  var _componentsBookingResultsBookingResults2 = _interopRequireDefault(_componentsBookingResultsBookingResults);

  var _storesBookingStore = __webpack_require__(13);

  var _storesBookingStore2 = _interopRequireDefault(_storesBookingStore);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsBookingNavigationBookingNavigation2['default'], { path: this.props.path }),
            _react2['default'].createElement(
              _componentsBookingDateTimeBookingDateTime2['default'],
              { path: this.props.path },
              _react2['default'].createElement(_componentsBookingResultsBookingResults2['default'], null)
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsBookingNavigationBookingNavigation = __webpack_require__(8);

  var _componentsBookingNavigationBookingNavigation2 = _interopRequireDefault(_componentsBookingNavigationBookingNavigation);

  var _componentsBookingServicesBookingServices = __webpack_require__(23);

  var _componentsBookingServicesBookingServices2 = _interopRequireDefault(_componentsBookingServicesBookingServices);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            'THANK YOU'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            'THANK YOU'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'text-center' },
            'THANK YOU'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var gmapsCode = { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7965194576377!2d103.78447491475404!3d1.29674169905421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a4fd6a29643%3A0x1cbb8a56dd8c9ccf!2s71+Ayer+Rajah+Crescent%2C+Singapore+139951!5e0!3m2!1sen!2ssg!4v1454553406755" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>' };

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h1',
              { className: 'text-center' },
              'Contact eBeeCare'
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: gmapsCode })
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'FAQ'
              ),
              _react2['default'].createElement(
                'ol',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Can registered and enrolled nurses take up part time nursing assignments in Singapore?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Yes, there are no restrictions for part time work for RNs and ENs in Singapore.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Are nurses allowed to provide nursing services on their own directly?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Section 52 of the Nurses and Midwives Regulations states that:'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      '(1) No registered nurse or enrolled nurse may practise nursing on his own account or in partnership with another except with the prior written consent of the Board.'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      '(2) No registered midwife may practise midwifery on his own account or in partnership with another except with the prior written consent of the Board.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Is eBeeCare a registered private nurses\' agency?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'eBeeCare is a registered Home Healthcare service provider in Singapore. We are able to provide home/private nursing services as well as therapy and allied health services for families in their home premises.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Do other nursing agencies use part-time nurses too?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Yes, almost all government and private agencies and nursing service providers use part-time nurses.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Are eBeeCare nurses qualified to provide home nursing?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Yes, all our nurses are registered nurses or enrolled nurses with Singapore Nursing Board. They have at least 2 years of experience. We do not accept foreign nurses at the moment.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'b',
                    null,
                    'Are eBeeCare caregivers trained and qualified to provide home social care?'
                  ),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Yes, our caregivers have certificates issued by WDA/AIC and have undergone at least 40 hours of training.'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _componentsAccountAccount = __webpack_require__(19);

  var _componentsAccountAccount2 = _interopRequireDefault(_componentsAccountAccount);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'clickTab',
      value: function clickTab(index) {
        var tabs = document.getElementsByClassName("mytab");

        for (var i = 0; i < tabs.length; i++) {
          var tab = tabs[i];
          var newClassName = "";
          var classes = tab.className.split(" ");
          for (var j = 0; j < classes.length; j++) {
            if (classes[j] !== "active") {
              newClassName += classes[j] + " ";
            }
          }
          tab.className = newClassName;
          if (i === index - 1) {
            tab.className += 'active ';
          }
        }
        var loginContainer = document.getElementById("loginFormContainer");
        var bookingContainer = document.getElementById("getBookingFormContainer");
        // console.log(index)
        if (index == 1) {
          loginContainer.style.display = "none";
          bookingContainer.style.display = "block";
        } else {
          loginContainer.style.display = "block";
          bookingContainer.style.display = "none";
        }
      }
    }, {
      key: 'getBooking',
      value: function getBooking() {
        var bookingId = document.getElementById("bookingId").value;
        var email = document.getElementById("email_adhoc").value;
      }
    }, {
      key: 'render',
      value: function render() {
        // return (
        //   <div className="page-padding">
        //     <Container>
        //       <div className="modal" id="modal-one" aria-hidden="true">
        //         <div className="modal-dialog">
        //           <div className="modal-header">
        //             <h2>Modal</h2>
        //             <a href="#close" className="btn-close" aria-hidden="true" style={{color:'#000'}}>×</a>
        //           </div>
        //           <div className="modal-body">
        //             <p>One modal example here! :D</p>
        //           </div>
        //           <div className="modal-footer">
        //             <a href="#close" className="btn" style={{color:'#000'}}>Nice!</a> 
        //           </div>
        //         </div>
        //       </div>
        //       <div id="form1" className="card_shadow">
        //         <div className="flexi-layout myTabLayout">
        //           <div className="mytab active col2" id="bookingTab" value={1} onClick={this.clickTab.bind(this, 1)}>
        //             Booking
        //           </div>
        //           <div className="mytab col2" id="loginTab" value={2} onClick={this.clickTab.bind(this, 2)}>
        //             Login
        //           </div>
        //         </div>
        //         <div className="flexi-layout" >
        //           <div id="getBookingFormContainer" className="myForm">
        //             <div name="getBookingForm" id="getBookingForm" >
        //               <div className="flexi-layout">
        //                 <div className="col1">
        //                   <div className="formItem" >
        //                     <p className="formLabel" ><b>Booking reference id</b></p>
        //                     <input className="formInput" type="text" placeholder="ID" name="bookingId" id="bookingId"/>
        //                   </div>
        //                   <div className="formItem">
        //                     <p className="formLabel" ><b>Email</b></p>
        //                     <input className="formInput" type="email" placeholder="Email" id="email_adhoc" name="email_adhoc"/>
        //                   </div>
        //                 </div>
        //                 <div className="col1">
        //                   <a type="submit" className="btn-primary" id="getBookingBtn" onClick={this.getBooking.bind(this)} href="#modal-one" >
        //                     Find Booking <i className="fa fa-arrow-circle-right"></i>
        //                   </a>           
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div id="loginFormContainer" className="myForm" style={{display:'none'}}>
        //             <form className="form-vertical " action="/login/" id="loginForm" method="POST">
        //               <div className="formItem" >
        //                 <p className="formLabel" ><b>Email</b></p>
        //                 <input className="formInput" type="text" placeholder="Email" name="email"/>
        //               </div>
        //               <div className="formItem" >
        //                 <p className="formLabel" ><b>Password</b></p>
        //                 <input className="formInput" type="password" placeholder="Password" name="password"/>

        //               </div>
        //               <div className="formItem" >
        //                 <a href="/reset/" style={{color:'#000'}}>Forgot Password?</a>
        //               </div>
        //               <div className="formItem" >
        //                 <label className="checkbox" style={{display:'inline-block'}}>
        //                   <input type="checkbox" name="remember" /> Remember me
        //                 </label>
        //               </div>
        //               <div className="formItem" >
        //                 <a type="submit" className="btn-primary" >
        //                 Login <i className="fa fa-arrow-circle-right"></i>
        //                 </a>
        //                </div>
        //             </form>
        //           </div>
        //         </div>
        //       </div>
        //     </Container>
        //   </div>
        // );
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsAccountAccount2['default'], { type: 'forgot-password' })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // import Container from '../components/Container/Container';

  var _componentsBannerBanner = __webpack_require__(38);

  var _componentsBannerBanner2 = _interopRequireDefault(_componentsBannerBanner);

  var _componentsFeaturesFeatures = __webpack_require__(53);

  var _componentsFeaturesFeatures2 = _interopRequireDefault(_componentsFeaturesFeatures);

  var _componentsActionsActions = __webpack_require__(37);

  var _componentsActionsActions2 = _interopRequireDefault(_componentsActionsActions);

  var _componentsTestimonialsTestimonials = __webpack_require__(60);

  var _componentsTestimonialsTestimonials2 = _interopRequireDefault(_componentsTestimonialsTestimonials);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsBannerBanner2['default'], null),
          _react2['default'].createElement(_componentsFeaturesFeatures2['default'], null),
          _react2['default'].createElement(_componentsActionsActions2['default'], null),
          _react2['default'].createElement(_componentsTestimonialsTestimonials2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'Privacy Policy'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '1. Introduction'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This Policy sets out the manner in which eBeeCare Pte. Ltd. ("eBeeCare") collects, uses, manages and protects personal data (as defined below) in compliance with the provisions of the Personal Data Protection Act 2012.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This policy applies to all individuals (as defined below) who provide eBeeCare with personal data or whose personal data is otherwise collected, used and/or disclosed by eBeeCare in connection with and/or for the purpose of its operations.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This policy supplements but does not supersede or replace any previous consent which an individual may have provided to eBeeCare, nor does it affects any rights that eBeeCare may have at law in connection with the collection, use and/or disclosure of any individual\'s personal data. Subject to that, eBeeCare will not collect any personal data from an individual unless the individual has voluntarily chosen to provide us with it.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare may from time to time update this policy to ensure it is consistent with its future developments or business purposes or to accommodate future changes to applicable legal or regulatory requirements. All updates to this policy will be published at https://ebeecare.sg/privacy and appropriate notifications of any material revisions will be issued to the relevant persons. Subject to an individual\'s rights at law, the prevailing terms of the policy from time to time shall apply. By continuing their relationship with eBeeCare after any amendments have been introduced and published, individuals shall be deemed to have accepted the policy as amended.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'For the avoidance of doubt, this policy forms part of the terms and conditions, if any, governing an individual\'s specific relationship with eBeeCare ("Client Terms of Service", "Nurse Terms of Service", "Service Contract") and should be read in conjunction with such terms and conditions. In the event of any conflict or inconsistency between the provisions of this policy and terms and conditions, the provisions of the terms and conditions shall prevail to the fullest extent permissible by law.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '2. Key Definitions'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Data Protection Officer"'
                ),
                ' means the person designated to be responsible for ensuring that eBeeCare complies with the PDPA;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"DNC Registry"'
                ),
                ' means the Do-Not-Call registry maintained by the Personal Data Protection Commission, pursuant to the PDPA;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Event Participants"'
                ),
                ' means persons (whether or not Users) who participate in or attend events or programmes organised or sponsored by eBeeCare from time to time;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  ' '
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Individuals"'
                ),
                ' means natural persons, whether living or deceased, and "Individual" means any of them;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Users"'
                ),
                ' means any Individual who has successfully registered for an account under the category of Clients or Nurse in eBeeCare from time to time;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"PDPA"'
                ),
                ' means the Personal Data Protection Act 2012;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Personal Data"'
                ),
                ' means data that is capable of identifying a natural person, whether on its own or in conjunction with other data that is accessible to eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Personnel"'
                ),
                ' shall include any person engaged under a contract of service or contract for service with eBeeCare, management personnel, permanent or temporary employees, as well as advisors, interns and volunteers engaged by eBeeCare from time to time; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Potential Personnel"'
                ),
                ' shall include any Individual who has submitted an application to be engaged by eBeeCare as Personnel.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '3. Types of Personal Data Collected'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare will only collect, use or disclose personal data about an individual which it reasonably considers necessary for the relevant purposes underlying such collection, use or disclosure. Depending on the specific nature of an individual\'s interaction with eBeeCare, personal data which eBeeCare collects, uses or discloses concerning an individual may variously include the following:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) the individual\'s name, gender and contact particulars, including telephone number(s), residential/mailing address(es) and email address;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) details of the individual\'s identification documents (such as, NRIC or passport numbers), and applicable visa, permits or licenses (such as nursing license, employment pass, work permit, permanent residency status);'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) details of cultural backgrounds including race, religion, language spoken;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) details of the individual\'s employment history and academic qualifications;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) details of the individual\'s CPF, credit card or bank account;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'f) details of the individual\'s personal preferences or other special requests or special conditions applicable to the individual;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'g) the individual\'s network usage data and other information gathered automatically by our computer systems, including the individual\'s computer IP address, links visited and other activities conducted online or using our computer systems;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'h) photographs of the individual; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'i) other information which the individual may provide to eBeeCare, from time to time, in the course of such individual\'s interaction with eBeeCare.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '4. Methods of Data Collection'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Generally, eBeeCare may collect Personal Data about an Individual in one or more of the following ways:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) through application or registration forms submitted by the Individual;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) through correspondence, emails or electronic messages submitted by the Individual to eBeeCare or otherwise posted on eBeeCare’s website(s);'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) through the Individual’s verbal communications with eBeeCare Personnel;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) through surveys conducted with and/or feedback received from an Individual;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) through the Individual’s access to and/or use or navigation of eBeeCare’s website(s) and its computer network and the use of cookies;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'f) through recordings of the Individual when attending at eBeeCare’s premises or at any events or programmes organised by eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'g) through third party business partners or associates of eBeeCare; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'h) when the Individual submits his/her Personal Data to eBeeCare for any other reason related to eBeeCare’s ordinary course of operations.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '5. Purpose of Data Collection'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Generally, eBeeCare may collect, use and/or disclose Personal Data about an Individual for one or more of the following purposes:'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Users'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) administering and managing Users with eBeeCare, including the provision of services to Users;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) providing Users with information about services, updates, programmes, activities and/or other benefits being offered or made available by eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) providing Users with information about third party and/or promotions, deals and/or other services being offered or made available to Users, through partnerships, associations and/or other collaborations involving such third parties and eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) organising and/or facilitating events or programmes involving Users and/or verifying the eligibility of such Users to participate in such events or programmes;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) tailoring activities or services available to match User preferences; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'f) transmitting Personal Data to third parties engaged by or working in collaboration with eBeeCare to facilitate any of the above-mentioned purposes.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Personnel'
                ),
                _react2['default'].createElement('u', null)
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) administering and managing Personnel relationships with eBeeCare, including the provision of services to Personnel;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) evaluating the performance of Personnel;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) undertaking staff training and quality assurance activities;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) providing Personnel with services, facilities and/or other benefits being offered or made available by eBeeCare to such Personnel as well as information about such services, facilities and benefits; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) transmitting Personal Data to third parties engaged by or working in collaboration with eBeeCare to facilitate any of the above-mentioned purposes.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Potential Personnel'
                ),
                _react2['default'].createElement('u', null)
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) administering and managing eBeeCare’s relationship with Potential Personnel; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) evaluating the suitability and eligibility of Potential Personnel to be engaged by eBeeCare;'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Event Participants'
                ),
                _react2['default'].createElement('u', null)
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) administering and managing the event participant’s relationship with eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) verifying the identity and eligibility of event participants;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) promotional and publicity purposes, including recording videos or taking photographs of participants at events; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) transmitting Personal Data to third parties engaged by or working in collaboration with eBeeCare to facilitate any of the above-mentioned purposes.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'General Business Purposes'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) managing the administrative and business operations of eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) facilitating the completion of transactions with Individuals;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) responding to complaints, queries and/or requests;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) conducting market research for statistical profiling and other purposes in order to improve eBeeCare’s services;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) safety and security purposes;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'f) preventing, detecting or investigating any actual or crime, fraud, misconduct, unlawful action, breach or dispute;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'g) record-keeping purposes;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'h) accounting or auditing purposes;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'i) legal purposes (including but not limited to obtaining legal advice and dispute resolution); and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'j) complying with laws, regulations, codes or guidelines binding on eBeeCare, including disclosures to regulatory authorities or other public bodies; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'k) transmitting Personal Data to third parties engaged by or working in collaboration with eBeeCare to facilitate any of the above-mentioned purposes.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Purposes reasonably related to any of the above purposes'
                ),
                _react2['default'].createElement('u', null)
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) for any purposes reasonably related and/or ancillary to any of the abovementioned purposes.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                _react2['default'].createElement(
                  'u',
                  null,
                  'Purposes for which specific consent was obtained'
                ),
                _react2['default'].createElement('u', null)
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) for any other purposes for which the Individual’s consent was specifically given or obtained.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '6. Consent'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Unless otherwise authorised under the PDPA or any other applicable law, eBeeCare will not collect, use or disclose an Individual’s Personal Data without his/her consent.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare will take reasonable steps to highlight the purposes relevant to an Individual, by appropriate means, at the point or time of collection of the Personal Data from such Individual, including:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) via express provisions in contracts, application forms and/or hardcopy/online/digital registration forms to be signed with or submitted to eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) via notifications on eBeeCare’s websites; and'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) in the course of verbal communications.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Where feasible, eBeeCare will inform the Individual of purposes that are intrinsic to the relationship between eBeeCare or to the provision of services to such Individual, as well as purposes that are optional.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In so far as any purpose(s) are intrinsic to the relationship or provision of services, eBeeCare reserves the right to decline to engage in the relevant relationship or to provide the relevant services to the Individual if he or she does not consent to eBeeCare’s collection, use or disclosure of his/her Personal Data for such purpose.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Individuals who:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) voluntarily provide their Personal Data to eBeeCare for the specified purposes;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) use or access eBeeCare’s website(s) or computer network;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) enter eBeeCare’s premises or using any of the facilities thereon; and/or'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) attend or participate in events or programmes organised by eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'e) will be deemed to agree and consent to eBeeCare collecting, using and/or disclosing their Personal Data in the manner and for the purposes set forth in this Privacy Policy.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'An Individual who provides eBeeCare with Personal Data relating to a third party (e.g. information of his/her spouse or children) for any particular purpose, represents to eBeeCare that he/she has obtained the consent of the relevant third party to eBeeCare collecting, using or disclosing such Personal Data for the relevant purpose.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '7. Withdrawal of Consent'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Any Individual who wishes to withdraw his/her consent to any use or disclosure of his/her Personal Data by eBeeCare as set out in this Policy may do so by notifying eBeeCare’s Data Protection Officer at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:contact@ebeecare.com' },
                  'contact@ebeecare.com'
                ),
                '. eBeeCare may require up to 30 days from the date of the Individual’s notification to respond and effect any change.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Depending on the extent to which an Individual withdraws consent to any or all use or disclosure of his or her Personal Data by eBeeCare, such withdrawal of consent may result in eBeeCare’s inability to provide services to the Individual and may be considered as a termination by the Individual of any agreement between eBeeCare and the Individual. eBeeCare’s legal rights and remedies are expressly reserved in such event.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In so far as an Individual’s data is being collected by cookies, the Individual may disable the use of cookies on his or her internet browser when accessing eBeeCare’s website. However, this may result in the loss of functionality, restrict the Individual’s use of the website and/or delay or affect the way in which eBeeCare’s website operates.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '8. DNC Registry'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare is prohibited from sending unsolicited telemarketing messages ("specified messages") to Singapore telephone numbers through voice calls, text or fax messages registered on the DNC Registers unless eBeeCare has obtained the relevant Individual’s clear and unambiguous consent in written or other accessible forms.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In compliance with the PDPA, eBeeCare will not send specified messages to telephone numbers that appear on the DNC Registry unless the relevant Individual has given eBeeCare clear and unambiguous consent to do so.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare will continue to contact Individuals at the telephone numbers provided to eBeeCare in the limited circumstances allowed under the DNC Registry even if these telephone number are registered with the DNC Registry. Individuals who do not wish to receive such messages may notify eBeeCare’s Data Protection Officer at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:contact@ebeecare.com' },
                  'contact@ebeecare.com'
                ),
                '.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '9. Activities Undertaken Prior to 2',
                _react2['default'].createElement(
                  'sup',
                  null,
                  'nd'
                ),
                ' July 2014'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare may use Personal Data of an Individual that was collected before 2 July 2014 for purposes for which the Personal Data was collected unless consent is withdrawn by that Individual.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare will continue to use Personal Data of Users, which had been collected before 2 July 2014, for its general business purposes and purposes relating to Users. Users who wish to withdraw their consent to eBeeCare’s use of their Personal Data may contact eBeeCare’s Data Protection Officer at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:contact@ebeecare.com' },
                  'contact@ebeecare.com'
                ),
                '.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '10. Protection of Personal Data'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare shall make reasonable security arrangements to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks to Personal Data in its possession.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If eBeeCare transfers Personal Data outside Singapore, eBeeCare will take reasonable steps to ensure that such Personal Data transferred receives a standard of protection comparable to the protection received under the PDPA.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare will ensure that third parties who receive Personal Data from eBeeCare protect such Personal Data in a manner consistent with this Policy and not use such Personal Data for any purposes other than those specified by eBeeCare, by incorporating appropriate contractual terms in its written agreements with these third parties.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare is not responsible in any way for the security and/or management of Personal Data shared by Individuals with third party websites accessible via links on eBeeCare’s website.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '11. Access and Correction'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Any Individual who:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'a) has questions or feedback relating to this Policy;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'b) would like to obtain access to his/her Personal Data held by eBeeCare;'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'c) would like to obtain information about the ways in which his/her Personal Data held by eBeeCare has been or may have been used or disclosed by eBeeCare in the year preceding the request; and/or'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'd) would like to update or make corrections to his/her Personal Data held by eBeeCare,'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'should contact eBeeCare’s Data Protection Officer at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:contact@ebeecare.com' },
                  'contact@ebeecare.com'
                ),
                '.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Individuals should note that eBeeCare is not required, under the PDPA, to provide access and correction to Personal Data in certain situations.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare reserves the right to charge a reasonable fee for the handling and/or processing of access requests by an Individual pursuant to paragraphs (b) or (c) above.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare may require up to 30 days from the date of the Individual’s request to respond and effect any change.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '12. Governing Law'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This Policy shall be governed by and construed in accordance with the laws of Singapore. Any dispute arising out of or in connection with this Policy including any question regarding its existence, validity or termination, shall be referred to and finally resolved by the Courts of Singapore.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsServicesServices = __webpack_require__(59);

  var _componentsServicesServices2 = _interopRequireDefault(_componentsServicesServices);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsServicesServices2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(3);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'Terms of Service'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '1. Introduction'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '1.1. Nurse Agreement'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This Nurse Terms of Service (the "Agreement") is a contract between you (the "Nurse" or "you") and eBeeCare Pte Ltd ("eBeeCare", "we" or "us"). You must read, agree with and accept all of the terms and conditions contained in this Agreement in order to use our website located at www.eBeeCare.com (the "Site") and related software and services (collectively, the "Platform"). eBeeCare may amend this Agreement at any time by posting a revised version on the Site or by sending out emails to the affected Nurse. Each revised version will state its effective date, which will be on or after the date we post it. If the revised version materially reduces your rights or increases your responsibilities, we may post it in advance of the effective date in order to give you notice. Your continued use of the Platform after the effective date of a revised version of this Agreement constitutes your acceptance of its terms. In the event of a conflict between eBeeCare\'s policies (as stated on the Site and may be amended from time to time) and this Agreement, this Agreement shall prevail. Capitalized terms are defined throughout the Agreement.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'YOU UNDERSTAND THAT BY CHECKING THE BOX AND CLICKING THE "SUBMIT" BUTTON, OR BY USING THE PLATFORM, YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT ACCEPT THIS AGREEMENT IN ITS ENTIRETY, YOU MAY NOT ACCESS OR USE THE PLATFORM.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '1.2. Purpose of the Platform'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Platform allows Clients and Nurses to identify each other and enable them to buy and sell Services online. Under this Agreement, eBeeCare provides services to both Clients and Nurses, including curating Clients and Nurses, facilitating the formation of contracts between Clients and Nurses, and managing disputes related to those contracts. Clients put up requests for nursing services and invite Nurses to apply. Nurses post profiles and provide quotes on Cases. If a Client and Nurse agree on terms, a Participation Agreement is formed directly between such Client and Nurse subject to the provisions set forth in Annex A (Participation Agreement Between Client and Nurse). eBeeCare collects payment from Client in connection with their receipt of services from Nurse through the Platform. eBeeCare pays Nurse in connection with their delivery of services through the Platform after deducting relevant fees such as Admin Fees.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '2. Key Definitions'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Admin Fee"'
                ),
                ' means the amount that eBeeCare will deduct from the Service Fee collected, for the use of the Platform and/or any other amounts owed to eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Case"'
                ),
                'refers to any service request created by Client on the Platform and can be found through the marketplace located at www.ebeecare.com/marketplace (such website address may be subject to change from time to time).'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Client"'
                ),
                'means a registered user (under the category of \'Client/Patient\' in the Platform) and includes a Patient, carer, caregiver or any individual who has been authorized by a caregiver or Patient to act on his/her behalf. Client utilizes the Platform to request for Services from Nurses.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Client Terms of Service"'
                ),
                'means the contract between eBeeCare and Client, contained in the Client Terms of Service contract.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Confidential Information"'
                ),
                ' means any and all of eBeeCare\'s trade secrets, confidential and proprietary information and all other information and data on the Platform that is not generally known to the public or other third parties who could derive value, economic or otherwise, from its use or disclosure. Confidential Information shall be deemed to include but not limited to, Nurse, Client or Patient\'s Personal Information, Health Information, technical data, know-how, developments, processes, formulas, designs, drawings, system hardware configuration information, marketing, finances or other business information disclosed directly or indirectly in writing, orally or by drawings or observation.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Content"'
                ),
                'means any information entered into the Platform by Nurse.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Dispute Period" '
                ),
                ' means the 7 days after the Nurse has rendered Services to the Client based on the Participation Agreement, where Nurse or Client can raise a dispute case to eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"External Parties"'
                ),
                ' means the companies, agencies, societies and/or associations which eBeeCare is affiliated with, to provide Client services that may or may not be available in eBeeCare. Refer to our list of affiliated parties on our website at www.ebeecare.com/about.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Full-Time Nurse" '
                ),
                ' means the Nurse that has an existing employment contract with another employer that requires him/her to produce prior approval before taking up any additional external assignments .'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Health Information" '
                ),
                ' means information or an opinion (whether true or not) pertaining to an individual\'s physical and mental health or disability (at any time) which can include but are not limited to drug allergies, diagnosis, treatment, investigations, records of preventive measures, nursing records, clinical correspondence, referrals for treatment, demographic information, medical history, tests, laboratory results, or any other health related data that is entered into the Platform by the Patient, Client, Nurse, an authorized caregiver, or any other health care professional.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Nurse" '
                ),
                ' ("You") means an approved registered user (under the category of \'Nurse\'), contracted under his Agreement who utilizes the Platform to offer nursing Services to Clients.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Nurse Fee"'
                ),
                ' means the Service Fee less any applicable deductions (or any other reasonable deductions as determined by eBeeCare in its sole discretion).'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Participation Agreement" '
                ),
                ' means the contract between eBeeCare, Client and Nurse as contained in Annex A.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Patient"'
                ),
                ' means the individual who is under medical, nursing care or treatment and will be receiving Services provided by a Nurse.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Personal Information"'
                ),
                ' means information or an opinion (including information or an opinion forming part of the Platform), whether true or not, and whether recorded in a physical form or not, about an individual whose identity is apparent, or can reasonably be ascertained, from the information or opinion.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Proprietary Rights" '
                ),
                ' means any and all rights, data entered into the Platform, title, ownership and interest in and to copyrights, mask works, industrial designs, trademarks, service marks, trade names, trade secrets, patents, and any other rights to intellectual property, recognized in any jurisdiction, whether or not perfected.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Services"'
                ),
                ' means nursing related services provided by Nurses, such as but not limited to general nursing care, caregiver training, consultations, respiratory care, wound care, digestive care and urinary care.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Service Fee" '
                ),
                ' means the fee that Client has to pay to eBeeCare. This Service fee is the agreed amount between the Nurse and Client on the Platform for the performance of agreed Services by the Nurse.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Singapore Nursing License Certification"'
                ),
                ' means any reasonable proof that the Nurse has been accredited from Singapore Nursing Board.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Total Fee" '
                ),
                ' means the sum of the Service Fee and the Admin Fee.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  '"Universal Precautions"'
                ),
                ' means the practice of avoiding contact with Patients\' bodily fluids, by means of wearing of nonporous articles such as medical gloves.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In the event of any inconsistency between the definitions contained in the Participation Agreement and this Nurse Terms of Service or the Client Terms of Service, the definitions in the Participation Agreement shall prevail.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '3. Eligibility'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '3.1. General Eligibility'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Platform is available only to persons who are at least eighteen (18) years old and are otherwise capable of forming legally binding contracts under applicable law. Nurse declares that he/she is not a citizen or resident of a country in which use or participation is prohibited by law, decree, regulation, treaty or administrative act.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '3.2. Valid Licence'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurses shall submit a copy of his/her Singapore Nursing License Certification to eBeeCare each time such licence is renewed in order for us to update our records. Upon expiry of the license, Nurses may face immediate suspension from the Platform and/or immediate cessation of any activities on the Platform, at eBeeCare\'s sole discretion.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '3.3. Full Access to Services'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The full access to the Platform is conditional upon the successful completion of an interview with eBeeCare authorized personnel. eBeeCare reserves the right to approve or reject such Platform access rights at its sole discretion.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '3.4. Full-Time Nurses'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurses who are holding an existing full-time job ("',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Full-Time Nurses'
                ),
                '") shall obtain relevant approval from their supervisors or employers before their engagement with Clients on eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Upon request by the Full-Time Nurses\' supervisors or employers ("',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Requestors'
                ),
                '"), eBeeCare may assist, within commercially reasonable means, in the monitoring of any of the activities of these Full-Time Nurses on the Platform. Nurses may be notified in the event of such requests. Nurse agrees and consents that the information regarding their activities on the Platform may be shared with these Requestors where eBeeCare has determined in its sole discretion to share such information.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare reserves the right, at its sole discretion, to suspend and/or terminate Nurses\' user accounts, or restrict the number of Cases the Full-Time Nurse is allowed to take upon request by the Requestors.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '4. Our Relationship'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '4.1. Services'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Nurse expressly acknowledges, agrees and understands that: (i) eBeeCare Platform is merely a venue where Nurses find Clients and vice versa; (ii) The Nurse recognizes, that eBeeCare does not, in any way, supervise, direct, or control Nurse\'s work or Services save for the audits referred to in clause 4.3; (iii) eBeeCare shall not have any liability or obligations under or related to Participation Agreement or any acts or omissions by the Nurse; (iv) eBeeCare has no control over Nurses or over the Services promised or rendered by Nurses; and (v) eBeeCare disclaims any and all liability relating thereto.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse may not agree to any terms and conditions that affect the rights or responsibilities of eBeeCare.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '4.2. Work Classification'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees and acknowledges that Nurse is engaged as independent contractors by the Client (and not eBeeCare) under the Participation Agreement, and that no agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or created by this Agreement between eBeeCare and Nurse. Nurse does not have authority to enter into written or oral - whether implied or express - contracts on behalf of Client or eBeeCare.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '4.3. Audit Rights'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare reserves the right to validate Nurse information at any time, including but not limited to validation against third party databases or the verification of one or more official government or legal documents. Nurse authorizes eBeeCare, directly or through third parties, to make any inquiries necessary to validate your identity, including but not limited to: (i) Your email address; (ii) Financial related information; (iii) Personal Information. Any failure on your part to provide information about you when requested by eBeeCare is a violation of this Agreement.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '4.4. Indemnification'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'To the extent permitted by applicable law, Nurse shall indemnify and hold harmless eBeeCare (and its officers, directors, employees and agents) against any and all losses, claims, costs or debt, expenses (including without limitation legal fees) damages (actual or consequential) of every kind and nature, known or unknown, which Nurse may incur or suffer arising from or in connection with any act or omission (including any omission, error of judgement or mistake made in the exercise) relating to (i) Nurse\'s provision of Services, or (ii) any Participation Agreement entered into between Nurse and a Client.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '5. Nurse Obligations'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.1. Professional Obligations'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse shall perform Services in a professional and safe manner for all Cases agreed and assigned. This will be in accordance with the Ministry of Health nursing practice guidelines as stated at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://www.moh.gov.sg/content/moh_web/healthprofessionalsportal/nurses/guidelines/cpg_nursing.html' },
                  'https://www.moh.gov.sg/content/moh_web/healthprofessionalsportal/nurses/guidelines/cpg_nursing.html '
                ),
                ', the NURSES AND MIDWIVES ACT (Cap. 209) of Singapore, Singapore Nursing Board\'s Code of Ethics and Professional Conduct, Standards of Practice for Nurses and Midwives and Core Competencies and Generic Skills for Registered Nurse as stated in ',
                _react2['default'].createElement(
                  'a',
                  { href: 'http://www.healthprofessionals.gov.sg/content/hprof/snb/en/topnav/downloads/publications.html.%20Nurse' },
                  'http://www.healthprofessionals.gov.sg/content/hprof/snb/en/topnav/downloads/publications.html'
                ),
                '. Nurse agrees that it is his/her duty to refer to the actual publication periodically as it may be amended or updated from time to time.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.2. Exposure to Bloodborne Pathogens and Needlestick Injuries'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees that he/she shall treat every Patient on every visit with Universal Precaution until informed otherwise. Nurse agrees and understands that it is his/her sole responsibility to exercise best judgement to avoid exposure, needlestick injuries and any other related complications which may result in bodily harm or injury.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.3. Documentation'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Nurse agrees to document (in electronic form) any observations, actions, findings, comments, discussions, interventions, recommendations, care plans and any other related nursing notes in accordance with the format of the online nursing documentation system as provided in the Platform ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  '("Documentation System")'
                ),
                ' by 2359 hours on the same day of visit. Nurse agrees to exercise sound professional judgment in the use and application of appropriate nursing forms available.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.4. Correct information'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Nurse acknowledges and agrees that he/she is responsible for any information submitted during the interview and in the Platform. Accordingly, the Nurse represents and warrants that the information given is correct and accurate and that he/she has not wilfully suppressed any material facts. If there are any changes, the Nurse shall inform eBeeCare of such changes as soon as possible.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.5. Account Security'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse is solely responsible for ensuring and maintaining the secrecy and security of his/her account information and password. Nurse agrees not to disclose this password to anyone and shall be solely responsible under all circumstances for any use of or action taken through the use of such password on the  Platform. Nurse must notify eBeeCare immediately of any breach of security or unauthorized use of his/her account. By using your eBeeCare account, Nurse acknowledges and agrees that eBeeCare\'s account security procedures are commercially reasonable. If the Nurse is found negligent in ensuring and maintaining the secrecy and security of his/her account password, the Nurse will be liable for any damages for the consequence that may follow. This include but is not limited to events such as the following, (i) Leaking of personal information of any users; (ii) Leaking of any financial information; (iii) the occurrence of unauthorized transactions.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.6. Participation in System'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees not to use the Platform for any of the following uses unless eBeeCare\'s prior written approval is obtained:'
              ),
              _react2['default'].createElement(
                'p',
                null,
                '1) Any action that encourages or solicits complete or partial payment outside of the Platform. All payments relating to, or in any way connected with a Participation Agreement must be conducted and facilitated through eBeeCare and the Platform.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                '2) Nurse may not use eBeeCare to solicit for any other business, website or service apart from the provision of Services via the Platform. Nurse may not solicit, advertise for, or contact any Client in any form or for any other purpose not related to the provision of further Services through the eBeeCare Platform.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Failure to comply is a violation of this Agreement.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.7. Agreed Appointment With Client'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'When an arrangement is made between the Client and Nurse that includes a specific date and time of the Service delivery, Nurse has to ensure that the Case can be fulfiled at the date and time which has been set. Failure to do so may result in penalties such as, but not limited to, making such incidents visible to the public on their profiles on the Platform.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If the Nurse cancels the visit within 24 hours before the scheduled appointment, the Nurse is liable to compensate eBeeCare for any losses reasonably incurred, such as but not limited to, any expenses incurred within short notice to ensure the agreed Services are performed, and any other special arrangement with the Clients.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '5.8. Site Obligations'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse shall not access (or attempt to access) the Platform by any means other than the interface provided, and Nurse will not use information from the Platform for any purpose other than the purpose for which it was made available. Nurse will not engage in any activity that interferes with or disrupts the functioning of the Site. Nurse will not upload or attach an invalid or malicious or unknown file. Nurse will not insert any external links that may be malicious or unknown to him/her, or used for offering any goods or services other than Services to be provided through the Platform. Nurse agrees not to "scrape" or disaggregate data from the Platform (whether by manual or automated means), for any commercial, marketing, or data compiling or enhancing purpose, or to copy, re-post or re-use data from the Platform for any other service. Nurse agree not to use or provide software (except for general purpose web browsers and email clients, or software expressly licensed by us) or services that interact or interoperate with the Site, e.g. for downloading, uploading, posting, flagging, emailing, search, or mobile use.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '6. Payment'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '6.1. Release of Payment Due to Nurse'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse shall not collect any payment directly from the Client or Patient without the consent and knowledge of eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse acknowledges and agrees that Service Fee payments will be made by Client to eBeeCare, and that the portion of the Service Fee that constitutes the Nurse Fee will subsequently be disbursed to Nurse by eBeeCare. eBeeCare may notify Nurse when Client makes payment for the Service Fee, but such notification does not imply any payment with respect to the Nurse Fee has been made or is due to Nurse. The Nurse Fee becomes payable to the Nurse only after all of the following conditions (collectively, the "',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Nurse Fee Conditions'
                ),
                '") are met: (i) Case\'s documentation status is deemed as \'Completed\' in the Platform; (ii) the Dispute Period has ended; (iii) all Participation Agreement terms have been fulfilled; and (iv) Client has made the Service Fee payment. Determination of whether the ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Nurse Fee Conditions'
                ),
                ' have been met is at the sole discretion of eBeeCare. eBeeCare will disburse the Nurse Fee to Nurse no later than one month from the time it is deemed payable to Nurse.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In cases of fraud, abuse or violation of this Agreement, or any dispute between Nurse and Client, all monies due to the Nurse may be held and/or reclaimed by eBeeCare at its sole discretion.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '6.2. Right to Deduct'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees and consents to pay the Admin Fee to eBeeCare in consideration for the use of the Platform by Nurse, and Nurse further agrees that eBeeCare is entitled to deduct such Admin Fee from the Service Fee payments made by Client to eBeeCare pursuant to Clause 6.1 above. The Admin Fees schedule can be found at www.ebeecare.com/fees or as specified on other pages on the eBeeCare Site, which we may change time to time. Unless otherwise stated, all Admin Fees quoted are in Singapore dollars.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare may choose to temporarily change the Admin Fee for promotional events or new services, and such changes are effective when we post the temporary promotional event or new service on our Sites.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If Nurse is found to have violated any terms in this Agreement or in the Participation Agreement, Nurse agrees that eBeeCare shall have the right to withhold and/or deduct any amount due to the Nurse at its sole discretion.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees and acknowledges that Nurse\'s right to receive the Nurse Fee is subject to the Nurse Fee Conditions set out in Clause 6.1 above.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse further agrees that eBeeCare shall have the right to deduct other amounts from the Nurse Fee that would otherwise be due to Nurse for reasons including, but not limited to: (i) compensation due to Clients for any unsatisfactory work; and (ii) any amount owed by the Nurse to eBeeCare.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees that in the event Nurse is determined by eBeeCare in its sole discretion to have violated clause 5.6 of this Agreement, Nurse shall pay to eBeeCare an amount (as determined by eBeeCare) in lieu of the loss of revenue from such violations. eBeeCare shall be entitled to set-off such amount against any Nurse Fees that would otherwise have been due to Nurse.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '6.3. Other Charges'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse may ask eBeeCare to expedite payments, and Nurse agrees that eBeeCare shall have the right to refuse any such request at its sole discretion, and may charge a processing fee in connection with such a request. If Nurses elects disbursement through a third party, the third party may charge additional fees  which shall be borne by the Nurse.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If Nurse elects disbursement in foreign currency, eBeeCare adds a conversion fee as quoted by the foreign exchange vendor which Nurse will be made liable for. The conversion fee will be deducted from the payment due to Nurse.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '6.4. Invoices and Taxes'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare shall have no responsibility for determining the necessity of or for issuing any formal invoices, or for determining, remitting, or withholding any taxes applicable to Service Fees. Instead, Nurse shall be solely responsible for determining whether it is required by applicable law to issue any formal invoices for the Service Fees and for issuing any invoices so required. Nurse shall also be solely responsible for: (a) determining whether Nurse or eBeeCare is required by applicable law to remit to the appropriate authorities any value added tax or any other taxes or similar charges applicable to the Service Fees, and remitting any such taxes or charges to the appropriate authorities on behalf of himself/herself or eBeeCare, as appropriate; and (b) determining whether eBeeCare is required by applicable law to withhold any amount of the Service Fees, notifying eBeeCare of any such requirement and indemnifying eBeeCare (either by permitting eBeeCare to offset the relevant amount against a future payment of Service Fees or by refunding to eBeeCare the relevant amount, such choice to be exercised at eBeeCare\'s sole discretion) for any requirement to pay any withholding amount to the appropriate authorities. eBeeCare shall have the right, but not the obligation, to audit and monitor Nurse\'s compliance with applicable tax laws as required by Inland Revenue Authority of Singapore (IRAS). Further, in the event of an audit of eBeeCare, Nurse agrees to promptly cooperate with eBeeCare with other documents as may be reasonably requested for purposes of such audit.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '7. Claims'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare may engage a third party insurance company to indemnify the Nurse for claims against the Nurse. Any claim is only between the Nurse and the third party insurance company. eBeeCare will not be held liable or be involved for any possible claims by the Nurse, that may arise from the Participation Agreement. eBeeCare may, to a reasonable extent, assist the Nurse in any investigations in the event of possible claims.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '8. Confidential Information'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '8.1. General'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse acknowledges that Confidential Information is a valuable, special and unique asset of eBeeCare and agrees to not disclose, transfer, use (or seek to induce others to disclose, transfer or use) any Confidential Information for any purpose other than to fulfil the Participation Agreement. Nurse shall promptly notify eBeeCare in writing of any circumstances which may constitute unauthorized disclosure, transfer, or use of Confidential Information. Nurse shall use his/her best efforts to protect Confidential Information from unauthorized disclosure, transfer or use. Nurse shall return all originals and any copies of any and all materials containing Confidential Information to eBeeCare upon termination of this Agreement for any reason whatsoever.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '8.2. Access to Health Information'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare hereby grants Nurse, who have an existing relationship with the Client through a valid Participation Agreement, a limited, non-exclusive, revocable (at any time, at eBeeCare and Client\'s sole discretion) right to have access to use information and details of the Patient\'s Health Information and other records kept or entered into eBeeCare, as necessary for the performance of the Participation Agreement.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Upon completion of the Participation Agreement, the Nurse may be allowed to continue to access the Health information for up to 24 hours before such rights are revoked. If there is a subsequent appointment, the Health Information may remain available to Nurse as long as there is an existing Participation Agreement between Nurse and Client.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '8.3. Return of Confidential Information'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If and when Confidential Information is no longer needed for the performance of Services for the relevant contracts such as but not limited to: (i) suspension and/or termination of the Nurse\'s account on the Platform; (ii) Failure to follow up with Client within 30 days from the date the Participation Agreement comes into effect (iii) written request which may be made at any time at Client\'s or eBeeCare\'s sole discretion, Nurse shall promptly destroy or return all Confidential Information and any copies thereof (in any form including, without limitation, written or electronic means) contained in or on his/her premises, systems, or any other equipment otherwise under his/her control or access.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare reserves the right to revoke at its sole discretion the Nurse\'s rights to access Confidential Information if Nurse flouts or is suspected to violate any terms in this Agreement and/or in Participation Agreement.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '8.4. Publication'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Without limiting the generality of the provisions contained in this Clause 8 (Confidential Information), Nurse shall not publish, or cause to be published, any Confidential Information which includes but is not limited to Health Information.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '9. Proprietary Information'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The Nurse shall be solely responsible for his/her own Content and the consequences of submitting and publishing his/her Content on eBeeCare\'s platform. He/she affirms, represents, and warrants that he/she owns or have the necessary licenses, rights, consents, and permissions to publish Content he/she submit; and his/her license to eBeeCare, all patent, trademark, trade secret, copyright or other proprietary rights in and to such Content for publication on the Platform pursuant to the Agreement.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'For clarity, Nurse retains all of his/her ownership rights in his/her Content. However, by submitting Content to eBeeCare, Nurse hereby grants eBeeCare a worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the Content in connection with the Platform and eBeeCare\'s (and its successors\' and affiliates\') business, including without limitation for promoting and redistributing part or all of the Content (and derivative works thereof) in any media formats and through any media channels known now or in the future. Nurse understands and agrees, however, that eBeeCare may retain, but not display, distribute, or perform, server copies of Nurse\'s Content that has been removed or deleted. eBeeCare may use the de-identified Content for analysis.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare does not endorse any Content submitted to the Platform by Nurse. eBeeCare expressly disclaims any and all liability in connection with Content. eBeeCare reserves the right to remove Content without prior notice and at its sole discretion.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '10. Account Suspension and Termination'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.1. General'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare reserves the right to terminate or suspend the Nurse account at any time, with or without cause, effective immediately.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Without limiting the generality of the above, eBeeCare has the right, but not the obligation, to suspend or terminate Nurse account in eBeeCare if we believe that Nurse has violated or acted inconsistently with the letter or spirit of this Agreement or violated eBeeCare rights or those of another affiliated party with eBeeCare or violated the law.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Without limiting eBeeCare\'s other remedies, we may suspend or terminate Nurse account as in accordance, but not limited, to clause 10.2 to 10.7. eBeeCare will also take action if Nurse actions may cause legal liability for Clients, and/or eBeeCare and its affiliated parties.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Once suspended or terminated, Nurse SHALL NOT continue to use the Platform under a different account or re-register under a new account. In addition, violations of this Agreement may be prosecuted to the fullest extent of the law and may result in additional penalties and sanctions.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If Nurse attempts to use the Platform under a different account, Nurse agrees that all available funds in such account shall be forfeited, and eBeeCare has the right to deduct all available funds in such account for its own use. Nurse will still be liable for any outstanding payments (after deducting from  available funds in that account) and any other obligations owed to any parties he/she has incurred while under the identity of this new account.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Upon account termination, Nurse will be prohibited from accessing any parts of the Platform, including but not limited to data, messages, files and any other materials obtained, created, retrieved or generated from the Platform. If Nurse wishes to retrieve some data from eBeeCare, Nurse may write in a request to eBeeCare for approval.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.2. License Revocation'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If Nurse\'s license is suspended or revoked by Singapore Nursing Board, Nurse agrees to inform eBeeCare at the earliest possible time, stating the reason for suspension or revocation by Singapore Nursing Board. Nurse agrees to cooperate to the fullest extent possible with any queries eBeeCare may have. eBeeCare may consider the reason of suspension or revocation of the license and assess if it violates any parts of this Agreement or in the Participation Agreement during his/her service in eBeeCare. If Nurse is found to be in violation, Nurse will be made liable for any damages in relation to the violation. eBeeCare may proceed to inform Singapore Nursing Board, Ministry of Health and/or any other related agencies for any actions by them.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.3. Full-Time Nurses'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare does not endorse Full-Time Nurses to participate in the Platform without appropriate approval by their employers. In the event that any Full-Time Nurse is found to have entered any Participation Agreements with Clients in the absence of authorization or approval by the Full-Time Nurse\'s employer, eBeeCare reserves the right to suspend or terminate the Nurse\'s account with immediate effect.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If the employer or supervisor of the Nurse finds that the Nurse is in breach of his/her employment contract, the employer or supervisor may contact us for any actions at our sole discretion.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.4. Limited access'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If the employer or supervisor of the Nurse suspects that the Nurse is overworking in eBeeCare, upon request, eBeeCare may assist in monitoring of the work of these Full-Time Nurses within its reasonable means. eBeeCare reserves the right to suspend or terminate the Nurse\'s accounts or restrict the number of Cases the Full-Time Nurse is allowed to take per week.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare takes patient safety as top priority and will seek all commercially viable methods to ensure that Nurses will not be working under fatigue condition. Within our reasonable means, we will investigate the claims, if any.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.5. Misrepresentation'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Any submission of false particulars or wilful suppression of material facts by the Nurse will result in immediate suspension or termination of accounts. Damages, if any, will be assessed and legal action may be taken against you.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.6. Disintermediation and Solicitation'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Without prejudice to any other rights or remedies that eBeeCare may have, eBeeCare reserves the right to suspend or terminate the Nurse account at eBeeCare\'s sole discretion if Nurse violates clause 5.6. Regardless of circumstance, Nurse will bear FULL LIABILITY for any consequences that may happen.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '10.7. Agreed Appointment with Client'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'With reference to clause 5.7, repeated default of visit or lack of punctuality may result in suspension or termination of the account.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '11. Miscellaneous'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.1. Resolution of Disputes'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'In the event of any disputes arising between Client, Nurse and/or External Parties, Nurse agrees to release eBeeCare (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'However, eBeeCare will assist in the mediation process during such disputes within its reasonable means. eBeeCare reserves the right to but is not obligated to assist in such investigations. eBeeCare may at its discretion supersede the decisions made between both Nurse and Client if any of these conditions are met, including but not limited to: (i) All parties give eBeeCare the permission to make a decision on behalf of all parties involved. eBeeCare will not be made liable for any decisions made then; (ii) If any violation of any contract is found; (iii) Patient\'s safety is of concern. The dispute has to be filed no later than one week upon the completion of the Case concerned.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If required, eBeeCare may report any misdoing, of any parties, to professional bodies (such as the Singapore Nursing Board).'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.2. Consent to Use Your Information'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees and consents that certain information including, but not limited to: (i) Nurse\'s name; (ii) region of stay; (iii) previous work experience; (iv) education profile; (v) culture and race; will be made publicly available for the purpose of allowing Clients to make a sound judgement when selecting a Nurse for a Case.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'For the purpose of allowing the Nurse to receive quicker notifications regarding the status of the Case, Nurse agrees and consents that he/she will receive SMS notifications from eBeeCare.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.3. Nurses Validation'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'eBeeCare requires every Nurse to be verified and interviewed before they can provide their Services to Client on the Platform. During the interview, Nurse agrees to grant consent to eBeeCare to take reasonable steps to ensure that the information Nurse provides is correct. The information includes the following, but not limited to: (i) personal particulars of the Nurse as reflected on the NRIC; (ii) validity of Nurse license with the Singapore Nursing Board on their license cards; (iii) Education certifications; (iv) employment proof, testimonials and related records. Other professional information (working experience, awards etc) may also be used to assess the suitability of the Nurses.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.4. Limitation of Liability'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'IN NO EVENT SHALL EBEECARE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM NURSE ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF NURSE\'S USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LAW, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'NURSE SPECIFICALLY ACKNOWLEDGES THAT EBEECARE SHALL NOT BE LIABLE FOR CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH NURSE.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'BY USING THE SERVICE, NURSE EXPRESSLY RELIEVES EBEECARE FROM ANY AND ALL LIABILITY ARISING FROM YOUR USE OF ANY THIRD-PARTY WEBSITE/ THIRD-PARTIES SERVICES.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'ALTHOUGH EBEECARE WILL NOT BE LIABLE FOR NURSE LOSSES CAUSED BY UNAUTHORIZED USE OF HIS/HER ACCOUNT, NURSE MAY BE LIABLE FOR THE LOSSES OF EBEECARE, OTHER CLIENTS, NURSES AND/OR EXTERNAL PARTIES DUE TO SUCH UNAUTHORIZED USE.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'THE SERVICE IS CONTROLLED AND OFFERED BY EBEECARE FROM ITS FACILITIES IN SINGAPORE. EBEECARE MAKES NO REPRESENTATIONS THAT THE SERVICE IS APPROPRIATE OR AVAILABLE FOR USE IN OTHER LOCATIONS. NURSES ACCESSING OR USING THE SERVICE FROM OTHER JURISDICTIONS DO SO AT THEIR OWN VOLITION AND ARE RESPONSIBLE FOR COMPLIANCE WITH LOCAL LAW.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.5. Warranty Disclaimer'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'YOU AGREE THAT YOUR USE OF THE PLATFORM SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, EBEECARE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE PLATFORM AND NURSE\'S USE THEREOF. EBEECARE MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE PLATFORM\'S CONTENT OR THE CONTENT OF ANY SITES LINKED TO THE PLATFORM AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM NURSE\'S ACCESS TO AND USE OF EBEECARE SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE PLATFORM. EBEECARE DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY SERVICE OFFERED BY A THIRD PARTY THROUGH THE PLATFORM OR ANY HYPERLINKED SERVICES OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND EBEECARE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN NURSE AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH PROVIDING SERVICES THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, NURSE SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.6. Compliance'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse shall not violate any laws or third party rights on or related to the Platform. Without limiting the generality of the foregoing, Nurse agrees to comply with all Singapore laws and third parties\' Proprietary Rights.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.7. Notices: Consent to Electronic Notice'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse consents to the use of (a) electronic means to complete this Agreement and receive any notices pursuant to this Agreement; and (b) electronic records to store information related to this Agreement or Nurse use of the Platform.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.8. Modifications of Terms of Service'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'No modification or amendment to this Agreement shall be binding upon eBeeCare unless in a written instrument signed by a duly authorized representative of eBeeCare.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.9. No Waiver'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The failure or delay of eBeeCare to exercise or enforce any right or claim does not constitute a waiver of such right or claim and shall in no way affect eBeeCare\'s right to later enforce or exercise it, unless eBeeCare\'s duly authorized representative issues and signed an express written waiver.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.10. Prevailing Language'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The English language version of this Agreement shall be controlling in all respects and shall prevail in case of any inconsistencies with translated versions, if any.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.11. General Use of the Service - Permissions and Restrictions'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees not to use or launch any automated system, including without limitation, "robots," "spiders," or "offline readers," that accesses the Platform in a manner that sends more request messages to the eBeeCare servers in a given period of time than a human can reasonably produce in the same period by using a conventional on-line web browser. Notwithstanding the foregoing, eBeeCare grants the operators of public search engines permission to use spiders to copy materials from the site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials. eBeeCare reserves the right to revoke these exceptions either generally or in specific cases.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees not to collect or harvest any personally identifiable information, including account names, from the Platform, nor to use the communication systems provided by it (e.g., comments, email) for any commercial solicitation purposes. Nurse agrees not to solicit, for commercial purposes, any users of the Platform with respect to their personal and their Patient\'s information.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Nurse agrees not to circumvent, disable or otherwise interfere with security-related features of the Platform or features that prevent or restrict use or copying of any Content or enforce limitations on use of the Platform or the Content therein.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.12. Entire Agreement'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This Agreement supersedes and cancels all previous agreements, warranties and undertakings whether oral or written, express or implied, given or made by or between Nurse and eBeeCare, and constitutes the entire agreement between the Nurse and eBeeCare in respect of the matters set out herein, and no other terms and conditions shall be included or implied.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.13. Invalidity'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'If at any time any provision of this Agreement is or becomes invalid, illegal or unenforceable in any respect, the validity, legality or enforceability of the remaining provisions of this Agreement shall not in any way be affected or impaired thereby. Nurse and eBeeCare agree to amend or replace any invalid, illegal or unenforceable provision of this Agreement by a valid, legal and enforceable provision which achieves, to the greatest extent possible all purposes of the invalid, illegal or unenforceable provision.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.14. Third Party Rights'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'A person who or which is not party to this Agreement shall not have any right under the Contracts (Rights of Third Parties) Act (Chapter 53B of Singapore) to enforce any provision of this Agreement.'
              ),
              _react2['default'].createElement(
                'h4',
                null,
                '11.15. Jurisdiction and Governing Law'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'This Agreement shall be governed by the laws and the Republic of Singapore. The parties irrevocably submit to the non-exclusive jurisdiction of the courts of the Republic of Singapore.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Account {\n  background-image: url(" + __webpack_require__(124) + ");\n  background-position: center;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-repeat: no-repeat;\n  padding: 60px 0;\n}\n\n.Account .Account-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.Account .Account-container .Account-container-item {\n  position: relative;\n  min-height: 350px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 340px;\n  background-color: rgba(255, 255, 255, 0.9);\n  margin: 5px;\n  padding: 40px;\n}\n\n.Account .Account-container .Account-container-item form {\n  display: inline-block;\n}\n\n.Account .Account-container .Account-container-item form h3 {\n  color: #fdbc1d;\n  font-weight: normal;\n  font-size: 24px;\n  margin: 0 0 24px 0;\n}\n\n.Account .Account-container .Account-container-item form input {\n  margin: 0;\n  font-size: 21px;\n}\n\n.Account .Account-container .Account-container-item form input + input {\n  border-top: 0;\n}\n\n.Account .Account-container .Account-container-item form a.btn {\n  width: 100%;\n}\n\n.Account .Account-container .Account-container-item form .Account-container-item-middle {\n  height: 95px;\n}\n\n.Account .Account-container .Account-container-item form .Account-container-item-middle .ForgotPasswordContainer {\n  padding: 10px 0;\n}\n\n.Account .Account-container .Account-container-item form .Account-container-item-middle .ForgotPasswordContainer .ForgotPasswordLink {\n  color: #f78d00;\n}\n\n.Account .Account-container .Account-container-item form .Account-container-item-middle input[type=checkbox]:not(old) + label > span:first-child {\n  border-color: #ccc;\n}\n\n.Account .Account-container .Account-container-item form .Account-container-item-middle input[type=checkbox]:not(old):checked + label > span {\n  color: #444;\n}\n\n.Account .Account-container .Account-login {}\n\n.Account .Account-container .Account-find {}\n", ""]);

  // exports


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.Actions .Actions-list .Actions-item-title, .Actions .Actions-list .Actions-item-button {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.Actions {\n  background-color: #fdbc1d;\n}\n\n.Actions .Actions-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  list-style: none;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.Actions .Actions-list .Actions-item {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 20px 60px;\n  text-align: center;\n}\n\n.Actions .Actions-list .Actions-item-title {\n  color: #ffffff;\n  font-weight: 100;\n  font-size: 40px;\n  text-transform: uppercase;\n  padding: 5px;\n}\n\n.Actions .Actions-list .Actions-item-button {\n  display: inline-block;\n  padding: 5px;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 26px;\n  text-transform: uppercase;\n  width: 260px;\n  border: 1px solid #ffffff;\n  border-radius: 5px\n}\n\n.Actions .Actions-list .Actions-item-button:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n\n@media (max-width: 768px) {\n  .Actions .Actions-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n@media (min-width: 768px) {\n  .Actions .Actions-list .Actions-item + .Actions-item {\n    border-left: 1px solid #ffffff;\n  }\n    }\n\n@media (max-width: 768px) {\n  .Actions .Actions-list .Actions-item + .Actions-item {\n    border-top: 1px solid #ffffff;\n  }\n    }", ""]);

  // exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".AlertPopup {\n}\n.AlertPopup-footer {\n    text-align: center;\n    margin: 20px 0\n}", ""]);

  // exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Banner .Banner-item {\n  height: 500px;\n  background-color: #ffffff;\n  background-position: center;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-repeat: no-repeat\n}\n\n.Banner .Banner-item-text-wrapper {\n  position: relative;\n  color: #fff;\n}\n\n.Banner .Banner-item-text-wrapper .Banner-item-text {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  -webkit-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  -moz-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  -ms-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.Banner .Banner-item-text-wrapper .Banner-item-button {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-1 {\n  top: 140px;\n  font-size: 25px;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-2 {\n  top: 200px;\n  font-weight: bold;\n  font-size: 60px;\n  text-transform: uppercase;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-3 {\n  top: 272px;\n  font-size: 37px;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-4 {\n  top: 340px;\n}\n\n@media (max-width: 768px) {\n\n  .Banner .Banner-item {\n    background-position: -550px 0px\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Banner #Banner-item-1 .Banner-item-text-1 {\n    top: 70px\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-2 {\n    top: 140px\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-3 {\n    top: 300px\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-4 {\n    top: 400px\n  }\n    }\n\n#Banner-item-1 {\n  background-image: url(" + __webpack_require__(127) + ");\n}", ""]);

  // exports


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingApp {\n  \n}", ""]);

  // exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingBankTransfer {\n  position: relative;\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.BookingBankTransfer .BookingBankTransferLogo {\n  margin: 0 10px;\n}", ""]);

  // exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingComplete {\n  background-color: #f3f3f3;\n  position: relative;\n}\n\n.BookingComplete .BookingCompleteBody {\n  text-align: center;\n  padding: 80px 0;\n  min-height: 300px;\n}\n\n.BookingComplete .BookingCompleteBody div {\n  margin: 20px 0;\n}\n\n.BookingComplete .BookingCompleteBody a {\n  color: #fdbc1d;\n}\n\n.BookingComplete .BookingCompleteBody .BookingCompleteHeader {\n  color: #fdbc1d;\n  font-weight: 100;\n  font-size: 50px;\n  text-transform: uppercase;\n}\n\n.BookingComplete .BookingCompleteBody .BookingCompleteFooter a.btn-primary {\n  color: #fff;\n  text-transform: none;\n  font-size: 21px;\n  margin: 0 5px;\n}", ""]);

  // exports


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-top .datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-top .datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 4px;\n  display: inline-block;\n  position: relative;\n}\n\n.datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.datepicker__tether-element-attached-bottom.datepicker__tether-element {\n  margin-top: -20px;\n}\n\n.datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding-top: 8px;\n  position: relative;\n}\n\n.datepicker__current-month {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 13px;\n}\n.datepicker__current-month--hasYearDropdown {\n  margin-bottom: 16px;\n}\n\n.datepicker__navigation {\n  line-height: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  border: 6px solid transparent;\n}\n.datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n.datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n.datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n.datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n.datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n.datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n.datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n.datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.datepicker__week-day {\n  color: #ccc;\n  display: inline-block;\n  width: 28px;\n  line-height: 24px;\n}\n\n.datepicker__month {\n  margin: 5px;\n  text-align: center;\n}\n\n.datepicker__day {\n  color: #000;\n  display: inline-block;\n  width: 24px;\n  line-height: 24px;\n  text-align: center;\n  margin: 2px;\n  cursor: pointer;\n}\n.datepicker__day:hover {\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n.datepicker__day--today {\n  font-weight: bold;\n}\n.datepicker__day--selected, .datepicker__day--in-range {\n  border-radius: 4px;\n  background-color: #216ba5;\n  color: #fff;\n}\n.datepicker__day--selected:hover, .datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n.datepicker__day--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.datepicker__input-container {\n  position: relative;\n}\n\n.datepicker__input {\n  position: relative;\n  font-size: 13px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9;\n          box-shadow: inset 0 2px 2px #e9e9e9;\n  border: 1px solid #aeaeae;\n  line-height: 16px;\n  padding: 6px 10px 5px;\n}\n.datepicker__input:focus {\n  outline: none;\n  border-color: #aeaeae;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n          box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n}\n.datepicker__input:not(:valid) ~ .close-icon {\n  display: none;\n}\n\n.datepicker__year-read-view {\n  width: 50%;\n  left: 25%;\n  position: absolute;\n  bottom: 25px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.datepicker__year-read-view:hover {\n  cursor: pointer;\n}\n.datepicker__year-read-view:hover .datepicker__year-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-read-view--down-arrow {\n  border-top-color: #ccc;\n  margin-bottom: 3px;\n  left: 5px;\n  top: 9px;\n  position: relative;\n  border-width: 6px;\n}\n.datepicker__year-read-view--selected-year {\n  right: 6px;\n  position: relative;\n}\n\n.datepicker__year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #aeaeae;\n}\n.datepicker__year-dropdown:hover {\n  cursor: pointer;\n}\n\n.datepicker__year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__year-option:first-of-type {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.datepicker__year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.datepicker__year-option:hover {\n  background-color: #ccc;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-option--selected {\n  position: absolute;\n  left: 30px;\n}\n\n.close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n.close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 7px;\n  text-align: center;\n  top: 50%;\n}\n\n.datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n}\n\n.BookingConfirmation {\n  background-color: #f3f3f3;\n  position: relative;\n  min-height: 300px;\n}\n\n.BookingConfirmation .BookingConfirmationWrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 50px;\n  padding-bottom: 100px\n}\n\n.BookingConfirmation .BookingConfirmationBody {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n}\n\n.BookingConfirmation .BookingConfirmationBody input[type=radio] {\n  margin-top: 20px;\n}\n\n.BookingConfirmation .BookingConfirmationBody textarea {\n  width: 100%;\n}\n\n.BookingConfirmation .BookingConfirmationBody .select {\n  display: inline-block;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection {\n  position: relative;\n  min-height: 150px;\n  padding: 20px 0;\n  // border-top: 1px solid #ccc;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection h3 {\n  font-weight: normal;\n  font-size: 28px;\n  border-bottom: 1px solid #ccc;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection .BookingConfirmationBodySectionTitle {\n  position: relative;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection .BookingConfirmationBodySectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection form a {\n  margin: 5px 5px 0 0;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationBodySection:first-child {\n  border: 0;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationItem {\n  display: inline-block;\n  color: #444;\n  width: 100%;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationItem .BookingConfirmationRadio {\n  // margin-right: 5px;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationItem .BookingConfirmationRadioLabel {\n  // cursor: pointer;\n}\n\n.BookingConfirmation .BookingConfirmationBody .PatientAddress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingConfirmation .BookingConfirmationBody .PatientAddress .PatientAddressLeft {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingConfirmation .BookingConfirmationBody .PatientAddress .PatientAddressRight {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingConfirmation .BookingConfirmationBody .BookingConfirmationFooter {}\n\n.BookingConfirmation .BookingConfirmationSidebar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (max-width: 768px) {\n\n  .BookingConfirmation .BookingConfirmationWrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .BookingConfirmation .BookingConfirmationBody .BookingConfirmationItem {\n    width: 50%;\n  }\n      }\n\n@media (min-width: 1200px) {\n\n  .BookingConfirmation .BookingConfirmationBody .BookingConfirmationItem {\n    width: calc(100% / 3);\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingConfirmation .BookingConfirmationBody .PatientAddress {\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingConfirmation .BookingConfirmationBody .BookingConfirmationFooter {\n    text-align: center;\n  }\n      }", ""]);

  // exports


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingCredits {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.BookingCredits .BookingCreditsLogo {\n  margin: 0 10px;\n}", ""]);

  // exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.DateRangePicker {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 0;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .DateRangePicker__Legend {\n    color: #52575e;\n    font-size: 14px;\n    line-height: 16px;\n    list-style-type: none;\n    margin: 20px 0;\n    padding: 0; }\n  .DateRangePicker__LegendItem {\n    display: inline-block;\n    margin: 0 20px; }\n  .DateRangePicker__LegendItemColor {\n    border-radius: 50%;\n    display: inline-block;\n    height: 14px;\n    margin-right: 6px;\n    vertical-align: text-bottom;\n    width: 14px;\n    border: 1px solid rgba(0, 0, 0, 0.25); }\n    .DateRangePicker__LegendItemColor--selection {\n      background-color: #ed5434; }\n  .DateRangePicker__PaginationArrow {\n    border: 0;\n    cursor: pointer;\n    display: block;\n    height: 35px;\n    outline: none;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    text-align: center;\n    top: 0;\n    white-space: nowrap;\n    width: 35px;\n    z-index: 1; }\n    .DateRangePicker__PaginationArrow--previous {\n      left: 20px; }\n    .DateRangePicker__PaginationArrow--next {\n      right: 20px; }\n    .DateRangePicker__PaginationArrow:hover {\n      background-color: #ccc; }\n  .DateRangePicker__PaginationArrowIcon {\n    border-bottom: 8px solid transparent;\n    border-top: 8px solid transparent;\n    height: 0;\n    position: absolute;\n    top: 10px;\n    width: 0; }\n    .DateRangePicker__PaginationArrowIcon--is-disabled {\n      opacity: .25; }\n    .DateRangePicker__PaginationArrowIcon--previous {\n      border-left: 8px solid transparent;\n      border-right: 8px solid #aaa;\n      right: 11px; }\n    .DateRangePicker__PaginationArrowIcon--next {\n      border-left: 8px solid #aaa;\n      border-right: 8px solid transparent;\n      left: 11px; }\n  .DateRangePicker__Month {\n    color: #333;\n    display: inline-block;\n    margin: 0 20px;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    width: 275px; }\n  .DateRangePicker__MonthHeader {\n    color: #000;\n    font-size: 14px;\n    font-weight: bold;\n    height: 35px;\n    line-height: 35px;\n    position: relative;\n    text-align: center; }\n  .DateRangePicker__MonthHeaderLabel {\n    display: inline-block;\n    position: relative; }\n  .DateRangePicker__MonthHeaderSelect {\n    background: #e4e4e4;\n    border: 0;\n    cursor: pointer;\n    display: inline-block;\n    height: 100%;\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 5; }\n  .DateRangePicker__MonthDates {\n    border-bottom: 1px solid #f4f5f6;\n    border-collapse: separate;\n    border-spacing: 0 1px;\n    margin: 0;\n    width: 100%; }\n  .DateRangePicker__WeekdayHeading, .DateRangePicker__Date {\n    font-size: 12px;\n    line-height: 1;\n    padding: 10px 0;\n    text-align: center;\n    width: 14.285714285714286%; }\n  .DateRangePicker__WeekdayHeading {\n    border-bottom: 1px solid #f4f5f6;\n    color: #000;\n    font-weight: bold; }\n    .DateRangePicker__WeekdayHeading abbr[title] {\n      border-bottom-width: 0;\n      color: #000;\n      cursor: pointer;\n      font-size: inherit;\n      text-decoration: none; }\n  .DateRangePicker__Date {\n    border: 0 solid #f4f5f6;\n    border-right-width: 1px;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative; }\n    .DateRangePicker__Date:first-child {\n      border-left-width: 1px; }\n    .DateRangePicker__Date--weekend {\n      background-color: #f6f7f9; }\n    .DateRangePicker__Date--otherMonth {\n      opacity: .25; }\n    .DateRangePicker__Date--is-disabled {\n      color: #cdcdd1;\n      cursor: default; }\n    .DateRangePicker__Date--is-selected {\n      color: #fff; }\n    .DateRangePicker__Date--is-highlighted {\n      color: #333; }\n  .DateRangePicker__CalendarDatePeriod {\n    bottom: 0;\n    position: absolute;\n    top: 0; }\n    .DateRangePicker__CalendarDatePeriod--am {\n      left: 0;\n      right: 50%; }\n    .DateRangePicker__CalendarDatePeriod--pm {\n      left: 50%;\n      right: 0; }\n  .DateRangePicker__CalendarSelection {\n    background-color: #ed5434;\n    border: 1px solid #eb401d;\n    bottom: 5px;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 5px; }\n    .DateRangePicker__CalendarSelection--inOtherMonth {\n      opacity: .5; }\n    .DateRangePicker__CalendarSelection--start {\n      border-bottom-left-radius: 5px;\n      border-right-width: 0;\n      border-top-left-radius: 5px;\n      left: 5px; }\n    .DateRangePicker__CalendarSelection--end {\n      border-bottom-right-radius: 5px;\n      border-left-width: 0;\n      border-top-right-radius: 5px;\n      right: 5px; }\n    .DateRangePicker__CalendarSelection--segment {\n      border-left-width: 0;\n      border-right-width: 0; }\n    .DateRangePicker__CalendarSelection--single {\n      border-radius: 5px;\n      left: 5px;\n      right: 5px; }\n    .DateRangePicker__CalendarSelection--is-pending {\n      background-color: rgba(237, 84, 52, 0.75);\n      border-width: 0; }\n  .DateRangePicker__CalendarHighlight {\n    background-color: rgba(255, 255, 255, 0.25);\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    bottom: 5px;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 5px; }\n    .DateRangePicker__CalendarHighlight--inOtherMonth {\n      opacity: .5; }\n    .DateRangePicker__CalendarHighlight--start {\n      border-bottom-left-radius: 5px;\n      border-right-width: 0;\n      border-top-left-radius: 5px;\n      left: 5px; }\n    .DateRangePicker__CalendarHighlight--end {\n      border-bottom-right-radius: 5px;\n      border-left-width: 0;\n      border-top-right-radius: 5px;\n      right: 5px; }\n    .DateRangePicker__CalendarHighlight--segment {\n      border-left-width: 0;\n      border-right-width: 0; }\n    .DateRangePicker__CalendarHighlight--single {\n      background-color: #fff;\n      border: 1px solid #eb401d;\n      border-radius: 5px;\n      left: 5px;\n      right: 5px; }\n  .DateRangePicker__HalfDateStates {\n    bottom: -50px;\n    left: -50px;\n    position: absolute;\n    right: -50px;\n    top: -50px;\n    -webkit-transform: rotate(30deg);\n        -ms-transform: rotate(30deg);\n            -o-transform: rotate(30deg);\n       transform: rotate(30deg); }\n  .DateRangePicker__FullDateStates {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .DateRangePicker__DateLabel {\n    display: block;\n    position: relative;\n    text-align: center;\n    width: 100%;\n    z-index: 1; }\n\n.BookingDate {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.BookingDate .btn-inline {\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.BookingDate .BookingDateTo {\n  display: inline-block }\n\n.BookingDate input {\n  text-align: center; }\n\n.BookingDate .DateRangePicker {\n  font-size: 18px; }\n\n.BookingDate .DateRangePicker .DateRangePicker__Month {\n  color: #969696; }\n\n.BookingDate .DateRangePicker .DateRangePicker__MonthHeader {\n  color: #444;\n  font-size: 18px; }\n\n.BookingDate .DateRangePicker .DateRangePicker__WeekdayHeading {\n  color: #444;\n  font-weight: 600; }\n\n.BookingDate .DateRangePicker .DateRangePicker__WeekdayHeading abbr[title] {\n  color: #444; }\n\n.BookingDate .DateRangePicker .DateRangePicker__WeekdayHeading, .BookingDate .DateRangePicker .DateRangePicker__Date {\n  // color: #444;\n  font-size: 16px; }\n\n.BookingDate .DateRangePicker .DateRangePicker__CalendarHighlight {\n  border-color: #f78d00; }\n\n.BookingDate .DateRangePicker .DateRangePicker__CalendarSelection {\n  // color: #000000;\n  background-color: #f78d00;\n  border-color: #f78d00; }\n\n@media (max-width: 992px) {\n\n  .BookingDate .BookingDateTo {\n    display: block;\n    margin-top: 20px; }\n    }", ""]);

  // exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingDateTime {\n  background-color: #f3f3f3;\n}\n\n.BookingDateTime .BookingDateTimeNav-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #f78d00;\n}\n\n.BookingDateTime .BookingDateTimeNav-wrapper .BookingDateTimeNav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 10px 0;\n  list-style: none;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.BookingDateTime .BookingDateTimeBody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 50px;\n  padding-bottom: 100px;\n  background-color: #f3f3f3\n}\n\n@media (max-width: 768px) {\n\n  .BookingDateTime .BookingDateTimeNav-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: none;\n  }\n    }\n\n@media (max-width: 1200px) {\n\n  .BookingDateTime .BookingDateTimeNav-wrapper .BookingDateTimeNav {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingDateTime .BookingDateTimeNav-wrapper .BookingDateTimeNav {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingDateTime .BookingDateTimeBody {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n    }", ""]);

  // exports


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingDateTimeNavItem {\n  padding: 0 1em;\n  text-align: center;\n}\n\n.BookingDateTimeNavItem + .BookingDateTimeNavItem {}\n\n.BookingDateTimeNavItem .BookingDateTimeNav-link {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  color: #444;\n  font-size: 25px;\n  text-decoration: none\n}\n\n.BookingDateTimeNavItem .BookingDateTimeNav-link.active {\n  color: #fdbc1d;\n}\n\n.BookingDateTimeNavItem .BookingDateTimeNav-link.active .BookingDateTimeNav-arrow {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20px;\n  height: 14px;\n  bottom: -24px;\n  left: 0;\n  right: 0;\n}\n\n.BookingDateTimeNavItem .BookingDateTimeNav-link.active .BookingDateTimeNav-arrow .nav-caret {\n  display: block;\n}\n\n.BookingDateTimeNavItem a.BookingDateTimeNav-link {}\n\n.BookingDateTimeNavItem a.BookingDateTimeNav-link:hover {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n@media (min-width: 768px) {\n\n  .BookingDateTimeNavItem + .BookingDateTimeNavItem {\n    border-left: 1px solid #fdbc1d;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingDateTimeNavItem .BookingDateTimeNav-link {\n    font-size: 18px;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingDateTimeNavItem .BookingDateTimeNav-link.active .BookingDateTimeNav-arrow {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingDateTimeNavItem {\n    width: 100%;\n    text-align: left;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 65px;\n    margin: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n  }", ""]);

  // exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingDetails {\n  background-color: #f3f3f3;\n  position: relative;\n  min-height: 300px;\n}\n\n.BookingDetails .BookingDetailsWrapper {\n  padding-top: 50px;\n  padding-bottom: 100px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody {\n  font-size: 21px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper .BookingDetailsBodyColumn {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper .BookingDetailsBodyColumn + .BookingDetailsBodyColumn {\n  margin-left: 20px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper .BookingDetailsBodyColumn + .BookingDetailsBodyColumn .TableRowHeader {\n  color: #fdbc1d;\n  font-style: italic;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody input[type=radio] {\n  margin-top: 20px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody textarea {\n  width: 100%;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .select {\n  display: inline-block;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyActions {\n  float: right;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyActions span + span {\n  margin-left: 5px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection {\n  position: relative;\n  min-height: 150px;\n  padding: 20px 0;\n  // border-top: 1px solid #ccc;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection h3 {\n  font-weight: normal;\n  font-size: 28px;\n  border-bottom: 1px solid #ccc;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection .BookingDetailsBodySectionTitle {\n  position: relative;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection .BookingDetailsBodySectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection form a {\n  margin: 5px 5px 0 0;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodySection:first-child {\n  border: 0;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsItem {\n  display: inline-block;\n  color: #444;\n  width: 100%;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsItem .BookingDetailsRadio {\n  // margin-right: 5px;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsItem .BookingDetailsRadioLabel {\n  // cursor: pointer;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .PatientAddress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .PatientAddress .PatientAddressLeft {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .PatientAddress .PatientAddressRight {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsFooter a {\n  margin: 5px;\n}\n\n.BookingDetails .BookingDetailsSidebar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (max-width: 768px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper .BookingDetailsBodyColumn + .BookingDetailsBodyColumn {\n    margin-left: 0;\n  }\n          }\n\n@media (max-width: 768px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsBodyColumnWrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n        }\n\n@media (min-width: 768px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsItem {\n    width: 50%;\n  }\n        }\n\n@media (min-width: 1200px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsItem {\n    width: calc(100% / 3);\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .PatientAddress {\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .BookingDetails .BookingDetailsWrapper .BookingDetailsBody .BookingDetailsFooter {\n    text-align: center;\n  }\n        }", ""]);

  // exports


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-top .datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-top .datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 4px;\n  display: inline-block;\n  position: relative;\n}\n\n.datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.datepicker__tether-element-attached-bottom.datepicker__tether-element {\n  margin-top: -20px;\n}\n\n.datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding-top: 8px;\n  position: relative;\n}\n\n.datepicker__current-month {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 13px;\n}\n.datepicker__current-month--hasYearDropdown {\n  margin-bottom: 16px;\n}\n\n.datepicker__navigation {\n  line-height: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  border: 6px solid transparent;\n}\n.datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n.datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n.datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n.datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n.datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n.datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n.datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n.datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.datepicker__week-day {\n  color: #ccc;\n  display: inline-block;\n  width: 28px;\n  line-height: 24px;\n}\n\n.datepicker__month {\n  margin: 5px;\n  text-align: center;\n}\n\n.datepicker__day {\n  color: #000;\n  display: inline-block;\n  width: 24px;\n  line-height: 24px;\n  text-align: center;\n  margin: 2px;\n  cursor: pointer;\n}\n.datepicker__day:hover {\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n.datepicker__day--today {\n  font-weight: bold;\n}\n.datepicker__day--selected, .datepicker__day--in-range {\n  border-radius: 4px;\n  background-color: #216ba5;\n  color: #fff;\n}\n.datepicker__day--selected:hover, .datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n.datepicker__day--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.datepicker__input-container {\n  position: relative;\n}\n\n.datepicker__input {\n  position: relative;\n  font-size: 13px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9;\n          box-shadow: inset 0 2px 2px #e9e9e9;\n  border: 1px solid #aeaeae;\n  line-height: 16px;\n  padding: 6px 10px 5px;\n}\n.datepicker__input:focus {\n  outline: none;\n  border-color: #aeaeae;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n          box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n}\n.datepicker__input:not(:valid) ~ .close-icon {\n  display: none;\n}\n\n.datepicker__year-read-view {\n  width: 50%;\n  left: 25%;\n  position: absolute;\n  bottom: 25px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.datepicker__year-read-view:hover {\n  cursor: pointer;\n}\n.datepicker__year-read-view:hover .datepicker__year-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-read-view--down-arrow {\n  border-top-color: #ccc;\n  margin-bottom: 3px;\n  left: 5px;\n  top: 9px;\n  position: relative;\n  border-width: 6px;\n}\n.datepicker__year-read-view--selected-year {\n  right: 6px;\n  position: relative;\n}\n\n.datepicker__year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #aeaeae;\n}\n.datepicker__year-dropdown:hover {\n  cursor: pointer;\n}\n\n.datepicker__year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__year-option:first-of-type {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.datepicker__year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.datepicker__year-option:hover {\n  background-color: #ccc;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-option--selected {\n  position: absolute;\n  left: 30px;\n}\n\n.close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n.close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 7px;\n  text-align: center;\n  top: 50%;\n}\n\n.datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n}\n\n.BookingLocation {\n  background-color: #f3f3f3;\n}\n\n.BookingLocation .BookingLocationWrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 50px;\n  padding-bottom: 100px\n}\n\n.BookingLocation .BookingLocationBody {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n}\n\n.BookingLocation .BookingLocationBody input[type=radio] {\n  margin-top: 20px;\n}\n\n.BookingLocation .BookingLocationBody textarea {\n  width: 100%;\n}\n\n.BookingLocation .BookingLocationBody .select {\n  display: inline-block;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySection {\n  padding: 20px 0;\n  border-top: 1px solid #ccc;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySection .BookingLocationBodySectionTitle {\n  position: relative;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySection .BookingLocationBodySectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySection:first-child {\n  border: 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection {\n  padding: 20px 0;\n  // border-top: 1px solid #ccc;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection h3 {\n  font-weight: normal;\n  font-size: 28px;\n  border-bottom: 1px solid #ccc;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection .BookingLocationBodyEditSectionTitle {\n  position: relative;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection .BookingLocationBodyEditSectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection form a {\n  margin: 5px 5px 0 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyEditSection:first-child {\n  border: 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationItem {\n  display: inline-block;\n  color: #444;\n  width: 100%;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationItem .BookingLocationRadio {\n  // margin-right: 5px;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationItem .BookingLocationRadioLabel {\n  // cursor: pointer;\n}\n\n.BookingLocation .BookingLocationBody .PatientAddress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingLocation .BookingLocationBody .PatientAddress .PatientAddressLeft {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingLocation .BookingLocationBody .PatientAddress .PatientAddressRight {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyAddPatient {\n  padding: 20px 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodyAddPatient span {\n  margin: 0 10px;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySelectPatient {\n  background-color: #fdbc1d;\n  padding: 20px;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySelectPatient .select {\n  margin: 0;\n}\n\n.BookingLocation .BookingLocationBody .BookingLocationBodySelectPatient > span {\n  color: #fff;\n  font-size: 25px;\n  margin: 0 10px;\n}\n\n.BookingLocation .BookingLocationSidebar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (max-width: 768px) {\n\n  .BookingLocation .BookingLocationWrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .BookingLocation .BookingLocationBody .BookingLocationItem {\n    width: 50%;\n  }\n      }\n\n@media (min-width: 1200px) {\n\n  .BookingLocation .BookingLocationBody .BookingLocationItem {\n    width: calc(100% / 3);\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingLocation .BookingLocationBody .PatientAddress {\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n      }", ""]);

  // exports


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-top .datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-top .datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 4px;\n  display: inline-block;\n  position: relative;\n}\n\n.datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.datepicker__tether-element-attached-bottom.datepicker__tether-element {\n  margin-top: -20px;\n}\n\n.datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding-top: 8px;\n  position: relative;\n}\n\n.datepicker__current-month {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 13px;\n}\n.datepicker__current-month--hasYearDropdown {\n  margin-bottom: 16px;\n}\n\n.datepicker__navigation {\n  line-height: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  border: 6px solid transparent;\n}\n.datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n.datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n.datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n.datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n.datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n.datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n.datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n.datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.datepicker__week-day {\n  color: #ccc;\n  display: inline-block;\n  width: 28px;\n  line-height: 24px;\n}\n\n.datepicker__month {\n  margin: 5px;\n  text-align: center;\n}\n\n.datepicker__day {\n  color: #000;\n  display: inline-block;\n  width: 24px;\n  line-height: 24px;\n  text-align: center;\n  margin: 2px;\n  cursor: pointer;\n}\n.datepicker__day:hover {\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n.datepicker__day--today {\n  font-weight: bold;\n}\n.datepicker__day--selected, .datepicker__day--in-range {\n  border-radius: 4px;\n  background-color: #216ba5;\n  color: #fff;\n}\n.datepicker__day--selected:hover, .datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n.datepicker__day--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.datepicker__input-container {\n  position: relative;\n}\n\n.datepicker__input {\n  position: relative;\n  font-size: 13px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9;\n          box-shadow: inset 0 2px 2px #e9e9e9;\n  border: 1px solid #aeaeae;\n  line-height: 16px;\n  padding: 6px 10px 5px;\n}\n.datepicker__input:focus {\n  outline: none;\n  border-color: #aeaeae;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n          box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n}\n.datepicker__input:not(:valid) ~ .close-icon {\n  display: none;\n}\n\n.datepicker__year-read-view {\n  width: 50%;\n  left: 25%;\n  position: absolute;\n  bottom: 25px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.datepicker__year-read-view:hover {\n  cursor: pointer;\n}\n.datepicker__year-read-view:hover .datepicker__year-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-read-view--down-arrow {\n  border-top-color: #ccc;\n  margin-bottom: 3px;\n  left: 5px;\n  top: 9px;\n  position: relative;\n  border-width: 6px;\n}\n.datepicker__year-read-view--selected-year {\n  right: 6px;\n  position: relative;\n}\n\n.datepicker__year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #aeaeae;\n}\n.datepicker__year-dropdown:hover {\n  cursor: pointer;\n}\n\n.datepicker__year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__year-option:first-of-type {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.datepicker__year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.datepicker__year-option:hover {\n  background-color: #ccc;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-option--selected {\n  position: absolute;\n  left: 30px;\n}\n\n.close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n.close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 7px;\n  text-align: center;\n  top: 50%;\n}\n\n.datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n}\n\n.BookingLocationUser {\n  background-color: #f3f3f3;\n}\n\n.BookingLocationUser .BookingLocationUserWrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 50px;\n  padding-bottom: 100px\n}\n\n.BookingLocationUser .BookingLocationUserBody {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n}\n\n.BookingLocationUser .BookingLocationUserBody input[type=radio] {\n  margin-top: 20px;\n}\n\n.BookingLocationUser .BookingLocationUserBody textarea {\n  width: 100%;\n}\n\n.BookingLocationUser .BookingLocationUserBody .select {\n  display: inline-block;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySection {\n  padding: 20px 0;\n  border-top: 1px solid #ccc;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySection .BookingLocationUserBodySectionTitle {\n  position: relative;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySection .BookingLocationUserBodySectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySection:first-child {\n  border: 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection {\n  padding: 20px 0;\n  // border-top: 1px solid #ccc;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection h3 {\n  font-weight: normal;\n  font-size: 28px;\n  border-bottom: 1px solid #ccc;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection .BookingLocationUserBodyEditSectionTitle {\n  position: relative;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection .BookingLocationUserBodyEditSectionTitle a {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection .datepicker__input {\n  font: inherit;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection form a {\n  margin: 5px 5px 0 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyEditSection:first-child {\n  border: 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserItem {\n  display: inline-block;\n  color: #444;\n  width: 100%;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserItem .BookingLocationUserRadio {\n  // margin-right: 5px;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserItem .BookingLocationUserRadioLabel {\n  // cursor: pointer;\n}\n\n.BookingLocationUser .BookingLocationUserBody .PatientAddress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingLocationUser .BookingLocationUserBody .PatientAddress .PatientAddressLeft {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .PatientAddress .PatientAddressRight {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyAddPatient {\n  padding: 20px 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodyAddPatient span {\n  margin: 0 10px;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySelectPatient {\n  background-color: #fdbc1d;\n  padding: 20px;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySelectPatient .select {\n  margin: 0;\n}\n\n.BookingLocationUser .BookingLocationUserBody .BookingLocationUserBodySelectPatient > span {\n  color: #fff;\n  font-size: 25px;\n  margin: 0 10px;\n}\n\n.BookingLocationUser .BookingLocationUserSidebar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (max-width: 768px) {\n\n  .BookingLocationUser .BookingLocationUserWrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .BookingLocationUser .BookingLocationUserBody .BookingLocationUserItem {\n    width: 50%;\n  }\n      }\n\n@media (min-width: 1200px) {\n\n  .BookingLocationUser .BookingLocationUserBody .BookingLocationUserItem {\n    width: calc(100% / 3);\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingLocationUser .BookingLocationUserBody .PatientAddress {\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n      }", ""]);

  // exports


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingNavigation-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #fdbc1d\n}\n\n@media (max-width: 768px) {\n\n  .BookingNavigation-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column\n  }\n  }\n\n.BookingNavigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n@media (max-width: 1200px) {\n\n  .BookingNavigation {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap\n  }\n  }\n\n@media (max-width: 768px) {\n\n  .BookingNavigation {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start\n  }\n  }", ""]);

  // exports


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingNavigationItem {\n  margin: 0 0.5em;\n}\n\n.BookingNavigationItem .BookingNavigation-link {\n  display: inline-block;\n  padding: 0.5em 1em;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.BookingNavigationItem .BookingNavigation-link .BookingNavigationItem-icon {\n  display: inline-block;\n  width: 45px;\n  height: 51px;\n  background: url(" + __webpack_require__(32) + ") no-repeat center;\n  vertical-align: middle;\n  text-align: center;\n  line-height: 51px\n}\n\n.BookingNavigationItem .BookingNavigation-link .BookingNavigationItem-text {\n  vertical-align: middle;\n  margin-left: 25px\n}\n\n.BookingNavigationItem .BookingNavigation-link.active {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingNavigationItem .BookingNavigation-link.active .BookingNavigationItem-icon {\n  background: url(" + __webpack_require__(18) + ") no-repeat center;\n}\n\n.BookingNavigationItem a.BookingNavigation-link {}\n\n.BookingNavigationItem a.BookingNavigation-link:hover, .BookingNavigationItem a.BookingNavigation-link.active {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingNavigationItem a.BookingNavigation-link:hover .BookingNavigationItem-icon, .BookingNavigationItem a.BookingNavigation-link.active .BookingNavigationItem-icon {\n  background: url(" + __webpack_require__(18) + ") no-repeat center;\n}\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem .BookingNavigation-link .BookingNavigationItem-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%;\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem .BookingNavigation-link .BookingNavigationItem-text {\n    margin-left: 10px;\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem .BookingNavigation-link.active .BookingNavigationItem-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%;\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem .BookingNavigation-link {\n    font-size: 21px;\n    padding: 0 0.5em;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem a.BookingNavigation-link:hover .BookingNavigationItem-icon, .BookingNavigationItem a.BookingNavigation-link.active .BookingNavigationItem-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%;\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingNavigationItem {\n    width: 100%;\n    border-top: 1px solid #fff;\n  }\n\n  .BookingNavigationItem:first-child {\n    border-top: none;\n  }\n  }", ""]);

  // exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingPayment {\n  background-color: #f3f3f3;\n}\n\n.BookingPayment .BookingPaymentNav-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #f78d00\n}\n\n.BookingPayment .BookingPaymentNav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 10px 0;\n  list-style: none;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.BookingPayment .BookingPaymentNav-item {\n  padding: 0 1em;\n  text-align: center\n}\n\n.BookingPayment .BookingPaymentNav-item + .BookingPaymentNav-item {}\n\n.BookingPayment .BookingPaymentNav-link {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  color: #444;\n  font-size: 25px;\n  text-decoration: none;\n  cursor: pointer\n}\n\n.BookingPayment .BookingPaymentNav-link:hover {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingPayment .BookingPaymentNav-link.active {\n  color: #fdbc1d;\n}\n\n.BookingPayment .BookingPaymentNav-link.active .BookingPaymentNav-arrow {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20px;\n  height: 14px;\n  bottom: -24px;\n  left: 0;\n  right: 0;\n}\n\n.BookingPayment .BookingPaymentNav-link.active .BookingPaymentNav-arrow .nav-caret {\n  display: block;\n}\n\n.BookingPayment .BookingPaymentBody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 50px;\n  padding-bottom: 100px;\n  background-color: #f3f3f3\n}\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: none;\n  }\n    }\n\n@media (max-width: 1200px) {\n\n  .BookingPayment .BookingPaymentNav {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav-item {\n    width: 100%;\n    text-align: left;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 65px;\n    margin: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav-item + .BookingPaymentNav-item {\n    border-left: 1px solid #fdbc1d;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav-link {\n    font-size: 18px;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentNav-link.active .BookingPaymentNav-arrow {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingPayment .BookingPaymentBody {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n    }", ""]);

  // exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingPaypal {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  min-height: 300px;\n}\n\n.BookingPaypal .BookingPaypalLogo {\n  margin: 0 10px\n}\n\n.BookingPaypal .BookingPaypalFooter {}\n\n@media (max-width: 768px) {\n\n  .BookingPaypal .BookingPaypalLogo {\n    height: 25%;\n    width: 25%;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingPaypal .BookingPaypalFooter {\n    text-align: center;\n  }\n    }", ""]);

  // exports


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingPostComplete {\n  background-color: #f3f3f3;\n  position: relative;\n}\n\n.BookingPostComplete .BookingPostCompleteBody {\n  text-align: center;\n  padding: 80px 0;\n  min-height: 300px;\n}\n\n.BookingPostComplete .BookingPostCompleteBody div {\n  margin: 20px 0;\n}\n\n.BookingPostComplete .BookingPostCompleteBody a {\n  color: #fdbc1d;\n}\n\n.BookingPostComplete .BookingPostCompleteBody .BookingPostCompleteHeader {\n  color: #fdbc1d;\n  font-weight: 100;\n  font-size: 50px;\n  text-transform: uppercase;\n}\n\n.BookingPostComplete .BookingPostCompleteBody .BookingPostCompleteFooter a.btn-primary {\n  color: #fff;\n  text-transform: none;\n  font-size: 21px;\n  margin: 5px;\n}\n\n@media (max-width: 768px) {\n\n  .BookingPostComplete .BookingPostCompleteBody {\n    padding-top: 20px;\n  }\n    }", ""]);

  // exports


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingPostNavigation-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #fdbc1d\n}\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column\n  }\n  }\n\n.BookingPostNavigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.BookingPostNavigation .BookingPostNavigation-item {\n  margin: 0 0.5em;\n}\n\n.BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link {\n  display: inline-block;\n  padding: 0.5em 1em;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link .BookingPostNavigation-item-icon {\n  display: inline-block;\n  width: 45px;\n  height: 51px;\n  background: url(" + __webpack_require__(32) + ") no-repeat center;\n  vertical-align: middle;\n  text-align: center;\n  line-height: 51px\n}\n\n.BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link .BookingPostNavigation-item-text {\n  vertical-align: middle;\n  margin-left: 25px\n}\n\n.BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link.active {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link.active .BookingPostNavigation-item-icon {\n  background: url(" + __webpack_require__(18) + ") no-repeat center\n}\n\n.BookingPostNavigation .BookingPostNavigation-item a.BookingPostNavigation-link {}\n\n.BookingPostNavigation .BookingPostNavigation-item a.BookingPostNavigation-link:hover {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingPostNavigation .BookingPostNavigation-item a.BookingPostNavigation-link:hover .BookingPostNavigation-item-icon {\n  background: url(" + __webpack_require__(18) + ") no-repeat center\n}\n\n@media (max-width: 1200px) {\n\n  .BookingPostNavigation {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap\n  }\n  }\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start\n  }\n  }\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link .BookingPostNavigation-item-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link .BookingPostNavigation-item-text {\n    margin-left: 10px\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link.active .BookingPostNavigation-item-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item .BookingPostNavigation-link {\n    font-size: 21px;\n    padding: 0 0.5em\n  }\n      }\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item a.BookingPostNavigation-link:hover .BookingPostNavigation-item-icon {\n    -webkit-background-size: 75% 75%;\n            background-size: 75%\n  }\n}\n\n@media (max-width: 768px) {\n\n  .BookingPostNavigation .BookingPostNavigation-item {\n    width: 100%;\n    border-top: 1px solid #fff\n  }\n\n  .BookingPostNavigation .BookingPostNavigation-item:first-child {\n    border-top: none\n  }\n    }", ""]);

  // exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingPostSidebar {\n  margin-left: 40px;\n  background-color: #ffffff;\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\n.BookingPostSidebar .BookingPostSidebarTitle {\n  padding: 15px 25px;\n  border-bottom: 2px solid #f3f3f3;\n  font-size: 25px;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent {\n  padding: 15px 25px;\n  color: #969696;\n  font-size: 21px;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent .BookingPostSidebarService {\n  text-transform: uppercase;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent .BookingPostSidebarItem {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  padding-right: 30px;\n  // background: url(" + __webpack_require__(17) + ") no-repeat top right;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent .BookingPostSidebarItem .BookingPostSidebarItemRight {\n  float: right;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent > div {\n  margin-top: 10px;\n}\n\n.BookingPostSidebar .BookingPostSidebarContent > div:first-child {\n  margin-top: 0;\n}\n\n.BookingPostSidebar .BookingPostSidebarFooter {\n  padding: 15px 25px;\n  border-top: 2px solid #f3f3f3;\n  font-size: 25px;\n}\n\n.BookingPostSidebar .BookingPostSidebarFooter .BookingPostSidebarPriceCost {\n  float: right;\n  color: #f78d00;\n}\n\n@media (max-width: 768px) {\n\n  .BookingPostSidebar {\n    margin: 50px 0 0 0;\n  }\n  }", ""]);

  // exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingResults {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.BookingResults .BookingResultsItem {\n  padding: 10px 0;\n  border-top: 1px solid #ccc;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckbox {\n  width: 0;\n  float: left\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckbox:checked + label {\n  color: #f78d00;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckbox:disabled + label {\n  color: #969696;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel {\n  display: block;\n  // margin-left: 100px;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel .BookingResultsCheckboxLabelMetaWrapper {\n  display: block;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel .BookingResultsCheckboxLabelMetaWrapper .BookingResultsCheckboxLabelMeta {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel .BookingResultsCheckboxLabelMetaWrapper .BookingResultsCheckboxLabelMeta span:nth-child(1) {\n  width: 75px;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel .BookingResultsCheckboxLabelMetaWrapper .BookingResultsCheckboxLabelMeta span:nth-child(3) {\n  width: 100px;\n}\n\n.BookingResults .BookingResultsItem .BookingResultsCheckboxLabel > span {\n  float: left;\n}\n\n.BookingResults .BookingResultsItem:first-child {\n  border-top: 0;\n}", ""]);

  // exports


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingServices {\n  background-color: #f3f3f3;\n  min-height: 400px;\n  position: relative;\n}\n\n.BookingServices .BookingServicesNav-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #f78d00\n}\n\n.BookingServices .BookingServicesNav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 10px 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.BookingServices .BookingServicesNav-item {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0 0.5em;\n  text-align: center\n}\n\n.BookingServices .BookingServicesNav-item + .BookingServicesNav-item {}\n\n.BookingServices .BookingServicesNav-link {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  color: #444;\n  font-size: 25px;\n  text-decoration: none;\n  cursor: pointer\n}\n\n.BookingServices .BookingServicesNav-link:hover {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.BookingServices .BookingServicesNav-link.active {\n  color: #fdbc1d;\n}\n\n.BookingServices .BookingServicesNav-link.active .BookingServicesNav-arrow {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20px;\n  height: 14px;\n  bottom: -24px;\n  left: 0;\n  right: 0;\n}\n\n.BookingServices .BookingServicesNav-link.active .BookingServicesNav-arrow .nav-caret {\n  display: block;\n}\n\n.BookingServices .BookingServicesBody {\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.BookingServices .BookingServicesBody .BookingServicesItem {\n  display: inline-block;\n  color: #444;\n  font-size: 15px;\n  width: 100%;\n}\n\n.BookingServices .BookingServicesBody .BookingServicesItem .BookingServicesRadio {\n  // margin-right: 5px;\n}\n\n.BookingServices .BookingServicesBody .BookingServicesItem .BookingServicesRadioLabel {\n  // cursor: pointer;\n}\n\n.BookingServices .BookingServicesFooter {\n  padding-bottom: 100px;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n\n  .BookingServices .BookingServicesNav-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: none;\n  }\n    }\n\n@media (max-width: 1200px) {\n\n  .BookingServices .BookingServicesNav {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingServices .BookingServicesNav {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingServices .BookingServicesNav-item {\n    width: 100%;\n    text-align: left;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 65px;\n    margin: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .BookingServices .BookingServicesNav-item + .BookingServicesNav-item {\n    border-left: 1px solid #fdbc1d;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingServices .BookingServicesNav-link {\n    font-size: 18px;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .BookingServices .BookingServicesNav-link.active .BookingServicesNav-arrow {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .BookingServices .BookingServicesBody .BookingServicesItem {\n    width: 50%;\n  }\n      }\n\n@media (min-width: 1200px) {\n\n  .BookingServices .BookingServicesBody .BookingServicesItem {\n    width: calc(100% / 3);\n  }\n      }", ""]);

  // exports


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingSidebar {\n  margin-left: 40px;\n  background-color: #ffffff;\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\n.BookingSidebar .BookingSidebarTitle {\n  padding: 15px 25px;\n  border-bottom: 2px solid #f3f3f3;\n  font-size: 25px;\n}\n\n.BookingSidebar .BookingSidebarContent {\n  padding: 15px 25px;\n  color: #969696;\n  font-size: 21px;\n}\n\n.BookingSidebar .BookingSidebarContent .BookingSidebarService {\n  text-transform: uppercase;\n}\n\n.BookingSidebar .BookingSidebarContent .BookingSidebarItem {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  padding-right: 30px;\n  background: url(" + __webpack_require__(17) + ") no-repeat top right;\n}\n\n.BookingSidebar .BookingSidebarContent a {\n  color: #969696\n}\n\n.BookingSidebar .BookingSidebarContent a:hover {\n  text-decoration: none;\n}\n\n.BookingSidebar .BookingSidebarContent > a {}\n\n.BookingSidebar .BookingSidebarContent > a > div {\n  margin-top: 10px;\n}\n\n.BookingSidebar .BookingSidebarContent > a:first-child {\n  margin-top: 0;\n}\n\n.BookingSidebar .BookingSidebarFooter {\n  padding: 15px 25px;\n  border-top: 2px solid #f3f3f3;\n  font-size: 25px;\n}\n\n.BookingSidebar .BookingSidebarFooter .BookingSidebarPriceCost {\n  float: right;\n  color: #f78d00;\n}\n\n@media (max-width: 768px) {\n\n  .BookingSidebar {\n    margin: 50px 0 0 0;\n    width: 100%;\n  }\n  }", ""]);

  // exports


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BookingTime {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n  font-size: 21px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.BookingTime .BookingTimeItem {\n  margin: 10px 0;\n}", ""]);

  // exports


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.ConfirmPopup a {\n\n    color: #fdbc1d;\n}\n\n.ConfirmPopup label {\n\n    margin: 0;\n}\n\n.ConfirmPopup-footer {\n\n    text-align: center;\n\n    margin: 20px 0;\n}\n\n.ConfirmPopup-footer a {\n\n    margin: 5px;\n\n    color: #fff;\n}", ""]);

  // exports


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Container {\n  margin: 0 auto\n}\n\n.Container.nav {\n  background-color: #999;\n  width: 100% !important\n}\n\n@media (max-width: 768px) {\n  .Container {\n    width: 97%;\n  }\n}\n\n@media (min-width: 768px) {\n  .Container {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Container {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Container {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Features-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 50px 0 0 0;\n}\n\n.Features-list .Features-item {\n  padding: 0 0.5em;\n  width: 200px;\n  text-align: center;\n}\n\n.Features-list .Features-item .Features-item-icon {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.Features-list .Features-item .Features-item-title {\n  color: #f78d00;\n  font-size: 22px;\n  padding: 5px 0 5px 0;\n}\n\n@media (max-width: 768px) {\n\n  .Features-list {\n    padding: 0;\n  }\n  }\n\n@media (max-width: 768px) {\n\n  .Features-list .Features-item {\n    width: 100%;\n  }\n    }", ""]);

  // exports


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.Footer {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.Footer {\n  margin: 0 auto;\n  padding: 40px 0 20px 0;\n  color: #ffffff;\n  background-color: #fdbc1d;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.Footer a {\n  color: #ffffff;\n}\n\n.Footer .Footer-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.Footer .Footer-list .Footer-item {\n  padding: 0 0.5em;\n}\n\n.Footer .Footer-list .Footer-item .Footer-maps-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 32px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #eee;\n}\n\n.Footer .Footer-list .Footer-item .Footer-maps-button .Footer-maps-label {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 0.75em;\n  padding: 5px;\n  color: #444;\n}\n\n.Footer .Footer-list .Footer-item .Footer-maps-button:hover {\n  -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n  -ms-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n}\n\n.Footer .Footer-list .Footer-item .Footer-social-media {\n  color: #fbeaaa;\n  margin-left: 10px\n}\n\n.Footer .Footer-list .Footer-item .Footer-social-media:hover {\n  color: #fff;\n}\n\n.Footer .Footer-list .Footer-item .Footer-tel {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  .Footer .Footer-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n", ""]);

  // exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio, canvas, progress, video {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden], template {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active, a:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb, strong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton, input, optgroup, select, textarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton, select {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled], html input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd, th {\n  padding: 0;\n}\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\na.btn-primary, button.btn-primary {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #ffffff;\n  color: #444;\n  font-family: 'Proxima Nova',sans-serif;\n  font-size: 18px;\n}\n\nh1 {\n  color: #f78d00;\n  font-weight: normal;\n  font-size: 40px;\n}\n\nh2 {\n  font-weight: normal;\n}\n\nh3 {\n  margin: 0.5em 0;\n}\n\na {\n  color: #fdbc1d;\n  text-decoration: none\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid #E0DFDF;\n  border-bottom: 1px solid #FEFEFE;\n  background: transparent url(" + __webpack_require__(133) + ") no-repeat center 0;\n  height: 6px;\n}\n\na.btn, button.btn {\n  text-decoration: none;\n  border: 0;\n  cursor:pointer;\n  text-align: center;\n}\n\na.btn-primary, button.btn-primary {\n  display: inline-block;\n  background-color: #f78d00;\n  text-decoration: none;\n  color: #fff;\n  width: 260px;\n  padding: 0.3em 0 0.3em 0;\n  font-size: 25px;\n  cursor:pointer\n}\n\na.btn-primary:hover, button.btn-primary:hover {\n  background-color: #fdbc1d;\n}\n\na.btn-small, button.btn-small {\n  width: 150px;\n  font-size: 21px;\n  padding: 0.25em 0 0.25em 0;\n}\n\na.btn-inline, button.btn-inline {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\ninput[type=checkbox], input[type=radio] {\n  cursor: pointer;\n}\n\ninput[type=checkbox]:not(old) {\n  width     : 2em;\n  margin    : 0;\n  padding   : 0;\n  font-size : 1em;\n  opacity   : 0\n}\n\ninput[type=checkbox]:not(old) + label {\n  display: inline-block;\n  margin-left: -2em;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\ninput[type=checkbox]:not(old) + label > span:first-child {\n  display: inline-block;\n  width: 0.875em;\n  height: 0.875em;\n  margin: 0.25em 0.5em 0.25em 0.25em;\n  border: 0.0625em solid #f78d00;\n  border-radius: 0;\n  background: transparent;\n  vertical-align: bottom;\n  cursor: pointer;\n}\n\ninput[type=checkbox]:not(old):checked + label > span {\n  color: #f78d00;\n}\n\ninput[type=checkbox]:not(old):checked + label > span:first-child:before {\n  content: '\\2713';\n  display: block;\n  width: 1em;\n  color: #f78d00;\n  font-size: 0.875em;\n  line-height: 1em;\n  text-align: center;\n  font-weight: bold;\n}\n\ninput[type=checkbox]:not(old):disabled + label > span:first-child {\n  border-color: #969696;\n}\n\ninput[type=radio]:not(old) {\n  width     : 2em;\n  margin    : 0;\n  padding   : 0;\n  font-size : 1em;\n  opacity   : 0\n}\n\ninput[type=radio]:not(old) + label {\n  display: inline-block;\n  margin-left: -2em;\n  line-height: 1.5em;\n  cursor: pointer;\n}\n\ninput[type=radio]:not(old) + label > span:first-child {\n  display: inline-block;\n  width: 0.875em;\n  height: 0.875em;\n  margin: 0.25em 0.5em 0.25em 0.25em;\n  border: 0.0625em solid #f78d00;\n  border-radius: 50%;\n  vertical-align: bottom;\n  cursor: pointer;\n}\n\ninput[type=radio]:not(old):focus + label > span:first-child {\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\ninput[type=radio]:not(old):checked + label > span:first-child > span {\n  display: block;\n  width: 0.4em;\n  height: 0.4em;\n  margin: 0.175em;\n  border: 0.0625em solid #f78d00;\n  border-radius: 50%;\n  background: #f78d00;\n  cursor: pointer;\n}\n\ninput[type=text], input[type=email], input[type=password] {\n  width: 230px;\n  margin: 20px 20px 0 0;\n  padding: 15px;\n  border: 1px solid #ccc\n}\n\ninput[type=text].EmailInput, input[type=email].EmailInput, input[type=password].EmailInput {\n  width: 195px;\n  padding-left: 50px;\n  background: url(" + __webpack_require__(139) + ") no-repeat 12.5px;\n}\n\ninput[type=text].PasswordInput, input[type=email].PasswordInput, input[type=password].PasswordInput {\n  width: 195px;\n  padding-left: 50px;\n  background: url(" + __webpack_require__(138) + ") no-repeat 12.5px;\n}\n\ninput[type=text].BookingIdInput, input[type=email].BookingIdInput, input[type=password].BookingIdInput {\n  width: 195px;\n  padding-left: 50px;\n  background: url(" + __webpack_require__(140) + ") no-repeat 12.5px;\n}\n\ninput[type=text]::-webkit-input-placeholder, input[type=email]::-webkit-input-placeholder, input[type=password]::-webkit-input-placeholder {\n  color: #ddd;\n}\n\ninput[type=text]:-moz-placeholder, input[type=email]:-moz-placeholder, input[type=password]:-moz-placeholder {\n  color: #ddd;\n}\n\ninput[type=text]::-moz-placeholder, input[type=email]::-moz-placeholder, input[type=password]::-moz-placeholder {\n  color: #ddd;\n}\n\ninput[type=text]:-ms-input-placeholder, input[type=email]:-ms-input-placeholder, input[type=password]:-ms-input-placeholder {\n  color: #ddd;\n}\n\ninput[type=text]:disabled, input[type=email]:disabled, input[type=password]:disabled {\n  border: 1px solid #969696;\n}\n\ninput.btn-inline {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\ntextarea {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 230px;\n  border: 1px solid #ccc;\n  margin-top: 20px;\n  padding: 15px\n}\n\ntextarea::-webkit-input-placeholder {\n  color: #ddd;\n}\n\ntextarea:-moz-placeholder {\n  color: #ddd;\n}\n\ntextarea::-moz-placeholder {\n  color: #ddd;\n}\n\ntextarea:-ms-input-placeholder {\n  color: #ddd;\n}\n\n.select {\n  position: relative;\n  margin: 20px 20px 0 0;\n}\n\n.select select {\n  outline: none;\n  -webkit-appearance: none;\n  display: block;\n  width: 260px;\n  padding: 15px;\n  margin: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  color: #555;\n  line-height: normal;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.select > span {\n  background: #fff;\n  bottom: 5px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 50px;\n  pointer-events: none;\n}\n\n.select > span:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -5px;\n  pointer-events: none;\n  border-top: 10px solid #f78d00;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n\n.select > span:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 17px;\n  margin-top: -5px;\n  pointer-events: none;\n  border-top: 8px solid #fff;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n}\n\n.radio {\n  margin-right: 20px;\n}\n\n.radio-inline {\n  display: inline-block;\n}\n\n.nav-caret {\n  display: none;\n  position: relative;\n}\n\n.nav-caret:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-top: 10px solid #f78d00;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n\n.nav-caret:after {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 0;\n  border-top: 9px solid #f3f3f3;\n  border-left: 9px solid transparent;\n  border-right: 9px solid transparent;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n.Layout .Body {}\n\n@media (max-width: 768px) {\n\n  .Layout .Body {\n    margin-top: 57px;\n  }\n    }\n\n.small {\n  font-size: 75%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error {\n  color: #FF0000;\n}\n\n.featured {\n  font-size: 25px;\n  line-height: 2em;\n}\n\n.TableRow {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 5px 0;\n}\n\n.TableRow .TableRowItem1 {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.TableRow .TableRowItem2 {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n\n.TableRow .TableRowItem3 {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n}\n\n.TableRow input {\n  margin: 5px 0;\n}", ""]);

  // exports


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".Link {\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.LoginPopup .Account-container-item {\n\n    -webkit-box-sizing: border-box;\n\n            box-sizing: border-box;\n\n    width: 340px;\n\n    background-color: #fff;\n\n    padding: 40px;\n}\n\n.LoginPopup .Account-container-item form {\n\n    display: inline-block;\n}\n\n.LoginPopup .Account-container-item form h3 {\n\n    color: #fdbc1d;\n\n    font-weight: normal;\n\n    font-size: 24px;\n\n    margin: 0 0 24px 0;\n}\n\n.LoginPopup .Account-container-item form input {\n\n    margin: 0;\n\n    font-size: 21px;\n}\n\n.LoginPopup .Account-container-item form input + input {\n\n    border-top: 0;\n}\n\n.LoginPopup .Account-container-item form a.btn {\n\n    width: 100%;\n}\n\n.LoginPopup .Account-container-item form .Account-container-item-middle {\n\n    height: 95px;\n\n    padding: 10px 0;\n}\n\n.LoginPopup .Account-container-item form .Account-container-item-middle .ForgotPasswordContainer {\n\n    padding: 10px 0;\n}\n\n.LoginPopup .Account-container-item form .Account-container-item-middle .ForgotPasswordContainer .ForgotPasswordLink {\n\n    color: #f78d00;\n}\n\n.LoginPopup .Account-container-item form .Account-container-item-middle input[type=checkbox]:not(old) + label > span:first-child {\n\n    border-color: #ccc;\n}\n\n.LoginPopup .Account-container-item form .Account-container-item-middle input[type=checkbox]:not(old):checked + label > span {\n\n    color: #444;\n}\n\n.LoginPopup-footer {\n\n    text-align: center;\n\n    margin: 20px 0;\n}", ""]);

  // exports


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.Logo img {\n  width: 260px;\n  height: 68px;\n  margin: 10px 0\n}\n\n@media (max-width: 768px) {\n\n  .Logo img {\n    width: 160px;\n    height: 42px;\n    margin: 5px 25px;\n  }\n    }\n", ""]);

  // exports


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.NavWrapper {\n  background-color: #FFF;\n  position: relative\n}\n\n@media (max-width: 768px) {\n\n  .NavWrapper {\n    z-index: 2;\n    position: fixed;\n    height: 57px;\n    top: 0;\n    left: 0;\n    right: 0;\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\n    -ms-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)\n  }\n  }\n\n.Navigation-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Navigation-wrapper .Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n@media (max-width: 1200px) {\n\n  .Navigation-wrapper .Navigation {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Navigation-wrapper .Navigation {\n    display: none\n  }\n    }\n\n.Navigation-item {\n  padding: 0 0.5em;\n}\n\n.Navigation-item .Navigation-link {\n  display: inline-block;\n  padding: 0.5em 1em;\n  color: #444;\n  font-size: 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-item .Navigation-link:hover {\n  border-bottom: 3px solid #444;\n  color: #444;\n  text-decoration: none\n}\n\n.Navigation-item .Navigation-link.active {\n  border-bottom: 3px solid #fdbc1d;\n  color: #fdbc1d;\n  font-weight: bold\n}\n\n@media (max-width: 768px) {\n\n  .Navigation-item .Navigation-link {\n    font-size: 18px\n  }\n    }\n\n/* Position and sizing of burger button */\n.bm-burger-button {\n  position: fixed;\n  width: 24px;\n  height: 20px;\n  right: 18.5px;\n  top: 18.5px\n}\n@media (min-width: 768px) {\n\n  .bm-burger-button {\n    display: none\n  }\n  }\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background: #fdbc1d;\n  height: 10% !important;\n}\n\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #f78d00;\n}\n\n/* General sidebar styles */\n.bm-menu {\n  background: #ffffff;\n  padding: 2.5em 1em 0;\n  font-size: 1.15em;\n}\n\n/* Morph shape necessary with bubble or elastic */\n.bm-morph-shape {\n  fill: #373a47;\n}\n\n/* Wrapper for item list */\n.bm-item-list {\n  color: #b8b7ad;\n  // padding: 0.8em;\n}\n.bm-item-list .Navigation-item {\n  padding: 0;\n}\n.bm-item-list .Navigation-item .Navigation-link {}\n.bm-item-list .Navigation-item .Navigation-link.active, .bm-item-list .Navigation-item .Navigation-link:hover {\n  border-bottom: none\n}\n\n/* Styling of overlay */\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.5) !important;\n}", ""]);

  // exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Services {\n  min-height: 400px;\n  position: relative;\n}\n\n.Services .ServicesNav-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top: 1px solid #f78d00;\n  border-bottom: 1px solid #f78d00\n}\n\n.Services .ServicesNav {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 10px 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.Services .ServicesNav-item {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0 0.5em;\n  text-align: center\n}\n\n.Services .ServicesNav-item + .ServicesNav-item {}\n\n.Services .ServicesNav-link {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  color: #444;\n  font-size: 25px;\n  text-decoration: none;\n  cursor: pointer\n}\n\n.Services .ServicesNav-link:hover {\n  color: #f78d00;\n  text-decoration: none;\n}\n\n.Services .ServicesNav-link.active {\n  color: #fdbc1d;\n}\n\n.Services .ServicesNav-link.active .ServicesNav-arrow {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20px;\n  height: 14px;\n  bottom: -24px;\n  left: 0;\n  right: 0;\n}\n\n.Services .ServicesNav-link.active .ServicesNav-arrow .nav-caret {\n  display: block;\n}\n\n.Services .ServicesBody {\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.Services .ServicesBody h3 {\n  color: #f78d00;\n}\n\n.Services .ServicesBody .react-sanfona {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.Services .ServicesBody .react-sanfona .react-sanfona-item .react-sanfona-item-title {\n  border-top: 1px solid #ccc;\n  color: #444;\n  font-weight: 600;\n  padding: 10px;\n  -webkit-transition: background-color .3s;\n  -o-transition: background-color .3s;\n  transition: background-color .3s;\n}\n\n.Services .ServicesBody .react-sanfona .react-sanfona-item .react-sanfona-item-body .react-sanfona-item-body-wrapper {\n  padding: 10px;\n  position: relative;\n}\n\n.Services .ServicesBody .react-sanfona .react-sanfona-item.react-sanfona-item-expanded .react-sanfona-item-title {\n  background-color: #fdbc1d;\n  color: #fff;\n}\n\n.Services .ServicesBody .react-sanfona .react-sanfona-item:first-child .react-sanfona-item-title {\n  border-top: none;\n}\n\n.Services .ServicesBody .ServicesItem {\n  display: inline-block;\n  color: #444;\n  font-size: 15px;\n  width: 100%;\n}\n\n.Services .ServicesBody .ServicesItem .ServicesRadio {\n  // margin-right: 5px;\n}\n\n.Services .ServicesBody .ServicesItem .ServicesRadioLabel {\n  // cursor: pointer;\n}\n\n.Services .ServicesFooter {\n  padding-bottom: 100px;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n\n  .Services .ServicesNav-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: none;\n  }\n    }\n\n@media (max-width: 1200px) {\n\n  .Services .ServicesNav {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Services .ServicesNav {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Services .ServicesNav-item {\n    width: 100%;\n    text-align: left;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 65px;\n    margin: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .Services .ServicesNav-item + .ServicesNav-item {\n    border-left: 1px solid #fdbc1d;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Services .ServicesNav-link {\n    font-size: 18px;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Services .ServicesNav-link.active .ServicesNav-arrow {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .Services .ServicesBody .ServicesItem {\n    width: 50%;\n  }\n      }\n\n@media (min-width: 1200px) {\n\n  .Services .ServicesBody .ServicesItem {\n    width: calc(100% / 3);\n  }\n      }", ""]);

  // exports


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Testimonials-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start\n}\n\n@media (max-width: 768px) {\n\n  .Testimonials-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap\n  }\n  }\n\n.Testimonials-item {\n  position: relative;\n  margin: 0 15px 65px 15px;\n  padding: 0;\n  width: 310px;\n  height: 390px;\n  border: 1px solid #f78d00;\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.5em;\n}\n\n.Testimonials-item .Testimonials-wrapper {\n  padding: 1.5em;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-text {\n  color: #444;\n  max-height: 230px;\n  overflow: hidden;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-name {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 80px;\n  color: #fdbc1d;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-avatar {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: -60px;\n}", ""]);

  // exports


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "97e83ef71d77e96111add3cbb6bb34bc.jpg";

/***/ },
/* 125 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0I4ODcwMEMwRUExMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0I4ODcwMUMwRUExMUU1QTgwN0E1MEI5RkJENzA0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlDQjg4NkZFQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlDQjg4NkZGQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3oFbogAABqpJREFUeNrEmnlsFUUcx19fz1B6QCvSAoUnbYFqhTRglRhAolbhD6xGATUxxaBGSRo1YCCgBisoxESJBypqYhTUiKJEAkqN1HCVIGixFGtbhVpselnoRR/t8zvkO89x2d03+47ySz7Zye5cvzl/v5mN8vl8rjBJJrgB3MhnDhhriNMIfgNHwCFQCZrCUXhUiIrEgyJwN5jJyjuRWnAAfAH2gAtXQpFHwNMgV3l3HJwCv4IzoEtpcdFjw0EWyCP5SlrRUy+D94OqjVDEIVeDnb7/pBqsAtc6zMcN8pi2WslvJ8twVC+nSkwANSywGTwO4oNoDCPxzKuZedewrIgpsp8F/QjGh0EBI+OZt49lRUyRkyxkrmb8BHCAJGimmcsyTjqpW4zDKVUFJpssq1YSDW5SwrrLuJATTirmRJFxygo1UXctAT1KWEey+Ix1oohbM9714AcwVVFKR/otwjqKLACbw9kj08D3YARoA2k2Q0vktw+MVBoqgWGxtwwy3A5mg4s2Q0vIoxySS0PdR9JAHSffN6CI4SoQYxI/FvT6Aksv45qVWck460ArwxtCWbVEQXuZ0VGu9UKxC6AdjLBI5wHZJJ+V7mVYvvdYpE0CZ8EASAdzGBbyYLCKLGcG58EUvhsGmvhed8PqJjpxx4BB0EZFxLtSpRenOlUkmwoIKTF8O873szQqlgj6SKJG/ALmXUcTRr7fzvf7DO/9WK1aG2ng7QUfGL418DlBc/kdIDrLr8zztLIwSAO1GcwCJbrL73RwF5fLFSbf/+AzQ6Nivdx7chkOJKMNZUgRq+VqhstAko4iK/n8DBwz+d7I5y3gGo0e+YvY9YjY/K4Dtyo9YhRh3h+lsg8H8kdyaYaIjAvoXxilmI6QEC/9jmpQzwp3glau/yLcIcrhUE1l3qO4L2WxTGEpXKXsaw+BD23KFuVMAeet9pHnOKn2BDAEnwHlyoIQDulhuWu5DJuVHaP4Lv9bhNQeES31C43CReBTjTGdytaczIk6ijt/Mnf3fuZ7M+PX01fvAy3gT8Z9ifPCo1HmE+B1UEHr4LIema04TClh8i9EC77HfE+DTIt4tYyzRCPP0RwJXnqYl+0jLzCzrWFSYhKoYJ5NAVzhhYzXoWy+duxg/FVmihzkx4UhKjASrOEmKH36fI10HysOVUaAuIsZt8KoSBYnW1+QLqywy2aAV8DfygTeAlI18ximNOaJAD04lvXtZtivyJ3M4JBFQmEg5nDueNjCd9AOelOxkKXsduAOG09opDLC8i0DxRZxZbxiVZFn+fJtkwQrOXZ9tHytpB5sAjNDHJrCJvvEkLdZvTYq5r5/A5Ke30HDUncvWMfwGS63DXSIznLzbOBp4c8WjpJT6eby/xVPLh+jrfUt2K7Ek3UtkMuvGJvHqN00g9byIO4pLqViM4yKwDGQHYtYh88N73PBRfC7WBxiuKGN43bfbGgdeciwg60djhZ3KoctDjwaeRwr6j7RzR05jTurUZF2Pse4rpzI84Euw/se1jlO2F1uHiZLDQcNkb/mcy2NvqGW4SxbyJcm3+v4LHTTirQynd/ihJ7DLn4epAyBAiks6zDLFnV418Y3ynPxOFPIaovJJuyjXcpS+MYQTPBXlfJ22dhoSxinxaUcJpQEyHwBDbVOB7t1MCTx8MHLMu3i3ia1dSsua0uA7hbrejnN7vsiOKzuoQtQzjLtpNPM1W3TKOQdPpc5OG51KssMZdnJOf+WwJ4ZpNGncyFzimnmRWBYFSkWcLymq+CVQ0v63p0aLSAuKzcxvCYCvbGcz9c0L0Z7/PuLYgzmOjC3G5lufhh7Q1rgjZqHedL3aVR7JIq4NFthPcMvOkgX6HqjjOH1NBy1bqX95bMV+jnenDhS8lK0NAy9UapcgsY6SJcut49gFXFxsvvopeWEoEQO8whmAcmW1xjqHMkIohKbmV54a9FBpI9WPL3NQaTPZCdc8i18NBZX8O8DD8+ifIYx3EFrWPAPTxPFivEdmAG2gfsdzo2tYDH/TbkdJHIzlCTzBHLQMC+8dOjEKeWGS/UL4WSwi7dL6l8L20CcRkvGMa7690RlKCeXoke20JTvp/vqM6xEPsUniaVlmsxTxTiTVt4PnmQrm0kh94lCk28D9InOcV/z0nkaMKlTNO8bxWg5EsxPNW4qkk47zcNfm6bT949TfJnd9OXlpep8ME/ZhMUR7U/83amWDdlKJQaG8jcno0ziL09Lbc5xG+hbCEepJlwFh1sR9ebpAV4YFXDYVrGXPjK5yAlZ/hVgAEYAHVTf2lDiAAAAAElFTkSuQmCC"

/***/ },
/* 126 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0I4ODcwNEMwRUExMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTQ1RjdGNEMwRjAxMUU1QTgwN0E1MEI5RkJENzA0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlDQjg4NzAyQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlDQjg4NzAzQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+17UFbgAABrdJREFUeNrMmglsFVUUhktXREpLEYoEasEWKVuBCIKoxSgixoYmogWEaHEDQ4RUSdwpSIIaDQnGGEMTFIxV2RQEwVilYlAIW0HKIgRobYUUCgXaspQ+/2P+C8dx5r15r/Nab/Jl3ps5dzl3OefcO9PG5/NFhDF1BLeCHqA3aAuiwBawwcuK2nisSCQYCu4Bd7LxokS8Ra4cDAS1/zdFuoGpIBf0tzyrAhWgAZwAI6lcNvjWsy4URZrBTWA+qPFdT4dAIXgM9AUJljyvUG4FSLN5HhLNyTweVCkF1oCxoG2AfLf7/p1Ogi2ggM9aTJEY8LFqyEZwd5BlvAtKQBk4bVGsGIwJtyIJbLikWjDNg2nRCdwB3gJHlEJL+cxzRTqCnazkKBjgxdy2cAOYwekm6Q8wyEtFZDr9yML3gO5hUEKTDDawvnNguFeKfKZ6qFuYlTCIa/iK9VYF6jw3Bc5kYdWgn0eNHAruciEXSWso6WcQFaoifUADCxrrkRJiMC6CRpejK/KH2Yb8UBUpYQEfeDhlnleW6XWXee4HTeCs0xTzl3kCKzvulfcF7cExpUgFaOcy70rmeT8YRWQuHmTGPA9HYyHL/EmZ8hku8w7hqJymK3ClyBRWUkbr4YUSD7JMWRupYJwalQ4uyyhmngluFBFLUcoMj3ukhMzrEyzzTTXqZby3wGU5eZRf5UaRLAqXgziPvPUWllnCjjLPcni/gZFwoLJ6gsvglHV62QkvZeEFHo3GOmU07CzOd3y+wWV52yk/zJ8inbm3uALSm6mAhDXLWOl5MNhBLp1+xe1UXkLZqf4UyVVWpTlKxKuergOjAsi/pPYmgZzkbMq+7U+R5RSa3Qwl+ipjcQbc6zKfWUfrA8g9RLllTop0oGVpYmNCUeIZel+z5c0MIq/EcfXMO8smVMoiJvZb56TISArs8xecOZCpgjsfvXBSCB0xnfmvcLNlTHe9779ph5Mi5lCgMIjFLFvcT1XhNYylmrO+iljWQe7/k5XBkLW7m/+vglftFFnrYDnEs2eDp8FkLszPwX6lwCWw2KMNV4IKjw6yLh/Nro48LvP+YK1IWxXM6fURC772OadDPEhI83m7qRqotrsm7bbILNBRQTSPt3ry0Owv8Kc69noWjOPB2g+gCVwAe8FusAtcCsNR6x4wCAwDc0Gmjcxq8DLoJ3+0InLcuQ+cU8LZvD4H1kS0bJJO/QYcY6c5pRhzVhuhjjn3W4RSVA+1Vqp3Ou41h6VakXRe91qEK3nNbEVFGh3uN6mD82uK9OT1iEV4Ja/vgF6toISc4s9yeGbafNIcYsfzrEpShk0IvlX5iNWgdwscBfVmuFTu4ABjVbtyjfnNoKmT0KKLTaFJPDk3aXkLKPKJqq9UnallcXe4TT0fYRQZRedygN7aqfAsboAuhvmQLpr+qYmRwy0OPsyE/vMkXyRfj4kJqwFX/MzXEprgOPBkGNdFfxqf38FmGpyPwFY+PwueAhP5f5hZI/l20aQDo9UwR4dpRObZ7Td4iqJ3kskMjaQtnSP52uz66vefikEpSAOPhmE0olRPr7A8G89rKa+nwVHQXdoTqZzeeRcVie1eyN+vKfPtLw0HWWRIANlcdpKEPtvV/Zs5nUxoYvxLFd8U95KGJKqQwE36EhxnjJPrR64L47NfwSayA2zkunTyDRKW5Kt7Pdh4Ka8I/GbjsPtEU1C7/EDpIigAS8B8GoA6GzkZufsYhB7mPXld/QAoBIts8nwP1tKgPAxGgylUfBdjPp2OX+sA5QyfCGJBRqoNzhs2z+Noqq9yUZr7KWofEUxa4nAaaQ4iNkWrl/nBhONNHP5irpX1nDY6PqrkVw95nF4R/JAghhH2Tt6ro7ws9PaqjDpGvTLi2/xEyJI6RyitJ4VgKucy7wGetOtnE/30cI6S68qNVEoI9U8y7zSjLT1gF+sn0DpJb7XjaEjofCMXXjW4DXwBclS0WsSen05ZYzIL1Xco2QxMY7g23qPDa+Sa9fH/VZbVYGlfNa+psh8333Aspi+RKLcrSGIDkjjsCS4MglicydxFBkrTwIcuTPgFKnKGnS0RyCkakFgw03yLEuhjlPMchRparCgWfkHtCSQNAJ1AGXiB68cuidmeoxzqL2oU29AvJHI0olimdhOOH9XMYbxSwf1IBffoprG1bHAtDUKUw2ZHHNlSMIL/N3Oh7uMuLwOM4fQz00zOBFY5eHijSCIV6cCpnUifksqYLPWfujyOk8Tsvmj5gsGaKhlHdfWybq+/19J7/QngEXPKwWh2LRf3Aa8r/FuAAQBRjyraVmB/jAAAAABJRU5ErkJggg=="

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "23b5a58a762a53105c7084d9553cefa1.jpg";

/***/ },
/* 128 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENzYzMTBGRkMwRTkxMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENzYzMTEwMEMwRTkxMUU1QTgwN0E1MEI5RkJENzA0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3NjMxMEZEQzBFOTExRTVBODA3QTUwQjlGQkQ3MDQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3NjMxMEZFQzBFOTExRTVBODA3QTUwQjlGQkQ3MDQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B4HrowAAB11JREFUeNrsnf9Z2zwQx0Uf/m82wJ2gYQLcCRomiJkgyQSYCZINkkzQMAFmAsIEOBM0mYBXenp6MeJkSbZky4ruefSkJS2W7uPv3Un+oYv393cSzR/7Fl3gl122/QXH1UVXfW0rZScdHc3fo0JiyIoWgUQg0SKQaA6qrA7twrDquogKiXY2ChnTdgWfI/hU2RNtezZVgs8DfFo1Og+b0rnI1loYaLt04mhiyBx+Q1sKbWTLf7QV0J4tAFrTltG2oVDuQgOS0DaFASYdKa+kbUXbI/y5CQxuVqD4AIRDSHsOi0UFjikMa1D6BDKjba6phhOElz2cyfvKGV4iSksqoS+BT9a+a6omp02WF1LITzJrBaUPIFMYcKIAUFSarWQ8ruSlVAGIgVnQtkO+y0Al1qF0CYQ5Y6kITSzRbsAJR8chihUKE3DujSKULZCTwgmUruYh97S91MBg4eEHfL/pAAavuDZwzB+KEPUCY/jkcNrqHJ7Rk3Xtm0JYWPojmTecIImuOgKgq5o5NCycMZXcCnnLqlJcKmQCZxYG4xF+nnsEg6smh749SsLuC4ztH8H5u45Ssr6BzEAZ4oSOzZZ/wYBK4q+V0Mdf0GdRRX9gjDpQtvB9b0DWEIZkqigGtLRU1KhlVQ1VEigMRmZywG8OYGAdWMAZdyTDsyP0faFK3AIUYxi2kzoG4wRVyp6EYVzh3+sSN/VJSv/eKBLYAoLBOMCZFQoMIyhNzUbImiMwXqHjocHgpW8CYxTD17ztL2+lENqBCVQcojLGA80XpnMWBudK+PktVcqucyAURgI1+SjgnNEkfLET8ZpCaVTWtwlZ2DzjnGDw8JVK5ind5RCqjhyZgS/ODAYvdfdISTwGH7kPWfRAfPlAnPRNDGR+9HymbgKE+4Xljd/C19cAzKlClkgS150APQHMF4P/MxTLkGWWpdOQBYtkKdKRo6Yy0kqcXYcEhSrhiIwnhUrUmULukVClOyM9QhWms9QyVCgF+brutXQCBNSRCCWuyUSolPz7oKDAGKsnXuJq+V1Ux6pBrb0h+DJ1MFDAJyuF79oBQdRBCL7EHqHgvtFWia5CpsLft5DESIQiTfBbhQ+bAYElErGyyi30O3Sl5EjFldhQiOic56brNOcEBXz0LPx4YgPIFHGiTQtZKaKvZq2AwDKJWOruHHU8RCg7JLmP2yhEzB1Fy2R+VlDAV48Kn7YD0oHEQ1NKYRPITcdAQoRSKHyqBwRi3aergaZLyRHK/9dLqkspo7o8UqcQsWbu+uJTSErZK3yrBWTcQ7gKFcpe4dtGCunrLpIQoJQ2FNJ3yAoJipWQ5eOsVwaFXdh+I//u9kiGPLWvA/JTITufoPCzjj+T4hsU0XdXTYCMhPKt9Fwp1X6vfKKB+C6IkCVCIQbqDiJk+W4ng4IkAulhSUK0LDQgn2760rna1bHNFSrxpiRGfHdoAqT0PAyU5OP5v4PnUBLdinXoLzArodRlA76omadMhjIgE4WMBzAeWUnct0rGNhTie8gygdL3HMpKyCoGqBARygFyTO6ZQqQVYt07F48Dn2xtiP07ZJraT4Vv1QoxvdIVTVryGl15VVVZorTS6GJjS00mtBHIwIHcUAmOoo+1wxXz1W9rQCDWVWfBoyFNsjww0VcH1Z07OjN1sVKZRj9rm/F90U2ApB4uNPoYrhIkf7QHAle7xBet5NHlShN9pPUYh+7ionhJdBqTu1IdjR7j0AICb0oTl7jn0fVSy5Bkbg+IRIKzmEuk6pg1DfHaQBCVsJC1jAi+2JJ8Xio5uHwraY7U2XH2/qGOCTL3MCqAjIAAafFBxjWxt+HK0GflS6Sy2jgDIklYCal/1fa52Jp8vRCVmf4SYyBQSz8goWt+xuqYI6Hqocndnm3eucjWZMQLL9fk/N4qh73Q7ZXCaHTtqM1dJ+yMEO+LeiLDutRrA4a4286JtFiAbQwE5CjGSP4CyHNI8iOAIY41a3Njeqv7suD9tAskyT8FDkUG467NO3tbAwFj61xbSVwNMXyxMb0hY9ualriugPDybitRyjgwGJgyGu2E4BKIDMoIlDILAMaMfH2Tt1UYtoHIoPCwNtRkzwsV7KksqzBcAOFQFpIyuW6nNh+N9xkrY++Ig3uGXd39zs6mW2SewvOK70/LJtBHrJ8nGNvGxYFdPo6wgyT4WnPm3XsWxhLysecipgq+L8rOVQdcPx9SwgAeJLE5p+0vwRfmugaxhnI2l5wkDzCW0mVHunpghw2S7ab5XJN33iCcTTtSzQiO9QTHluWDZ+h73oWjLjs8C0tI6BkMDnt4Pq0kfRYWCmJnI/rqPOIGjqFabzpAPzddSrXP7bvrwHw5DMG37z4Q/MGiqwqAhHxs362jPCMQfLuKEIBUwWRE8aa1DozvVG2kCNtAfHjoc0M+dmx+IDWPDDuwAxyzulN1r+aDQmSxPiV6G9Gb2AnyEm+tc5NthVwSP43ni1UF0AjgJJUSOUFyUDWvlNCKSh7y2lorJNow5yHRNO0/AQYAix6j1VLteqsAAAAASUVORK5CYII="

/***/ },
/* 129 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENzYzMTEwM0MwRTkxMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENzYzMTEwNEMwRTkxMUU1QTgwN0E1MEI5RkJENzA0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3NjMxMTAxQzBFOTExRTVBODA3QTUwQjlGQkQ3MDQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3NjMxMTAyQzBFOTExRTVBODA3QTUwQjlGQkQ3MDQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Djtr7gAACutJREFUeNrsXf9t2zoQvhj9P3roAFUniDqBlQniThBlAvtNEGWCOBNYmSD2BJYnqDxBnQGKJ02QJwFHmKWPvyRRot0eQCSIHYm8j3f3HXmirj4+PqCL/Hq5ghHlvm5x3UL8yaSsW1G3vG6vdTuAp/J5/rv+r84QkKBuz3Wb4e8m0gDzhD+9BmQC5yWNRfysW2IBBqD1bOu2svy/weWcAGmUmXVUaAPkj7pFfwFpLyGCkRCfVXV7qdtt3f5pXDC2r3X7Xred5HpbX0H55GGfGgu4QzfDAjYFRFq3peQaB2xrVHxjWTfCPbZ4jY1PQd+XoM5AmGFTyR6/Y6vEDGMQJWtsG2RoowX1Tx64o7lFkH5Hq2mjtIQjBqLwEyFDqjwKI5uMCMQKGdPCIlDPOs7gBJWt+84WW3zpgPBAJIrvVcTfnjDZ6yoLtDRTqryVxLGzBqSxgEeknIkChGb2fkOliZ8te+pLicHcZBIwYH4OlcMMAUiMQKSSATWz9QE/S9AKZkRA7jPYZoSVrJE+7xSu7KcB6fAakEeFyTMgQlQQL3eEAvuWlFgFKHACfZXEmmbSvOHSTXBOgAScVVCuQQYEEIH0vafYQVlJJbn3AS3iFmk2FYecJJcuAInQtKnObhRA8P/PS+HQgteayZBjf/4lwIs0MdGLTD3B4Ee5pwWhABkTGxKQe8VkYLLESZQLGT9w480kY7nj3FuJMaoYApC5hAntLPOHIS1ETP6mGnYW4RjnBqDEGG+oWFPgdV57WTr59XIV4cyKNMnTC0FhTZTEK+bWcdYsKuDK0BM0Cr0miMKTwlNQwNx+nn+UrSykBuIeb6pLlCoEIoPLlAyOO5LXAiCxRYYfIXDfrQGpwaBMVTXrCrhsYRRZBCWWeAoGwJRYDrJjWeii5hadDcDjPQcHoFSK7zygt1hwOc5e0G9sS3sp1F/R1NjG0GtPoJQG9/YNlKUCjIwY35eueYjIFPI6ECV1W3MKTHoCpdDcu+9lHV72LdnloyEYQDCvqtZjbguIyHLi2swSCfvoCkquWUZxCcjB8v9XEuuQgbEk7rlsRXtrAEQ62ljGN8kgMjjdCCqRwhYG1vif8LfvhkllmzxkaqBImxgpuwZFhfe1dURtl04WRKfeFDxdZim6mFDiEouUifQkIcF4ckOropaGKpygFBgzAoyK0oUNII8KHm0Lim79R3QD9w6Ce0os7xwMdLAl4toe+1dY6CimVi9Maa+q+CBRKJgChfneR40rEfcrnnsEIyJcaqqxpq3kOzsNGBSADzLXPTEAIzBQxkoxgxtQ/pXMUNUuXGJhjbayIqwjU/Tjh2R8TyAvulCBkXWhvQtiqeQ7kQy9gXq19EEyWNkGVk7EkqQHUFZEPxcSq3iTTJoKdZAqLHArmWzKODUxsA4xQ3/C/CORBPlAsf5zC/J9hZkEsHfib88dwBD7vSEY3FzRpx2CtVYE/a1CD2lrQOC0ROedBVwE5UHiawNFbIgJJTMwRUBLVEpF9MumGkS2mVQJf4vxe0vJGFQuird4VTJ7p/p8YmkdKb9UXP+eEUE7UtBhlolHQBcTzJBSzg3Wixj9XIF8HyPGz39IaCpTLnNPstxij5RWNbtl7vRBmICBimVObKwDATBhUrHG15f4nSdJ0rVE5dwZLOIlaHkfqPgt/vxQUGy+ApLViclY5BOCVGgs8FmRJC4Jl2gNyNzC9y2IdSCTAJyCvJAgRj/9E44VITLL4hUTa5ZpNti3OagL9pr7fNX5fEM2lRGuPTIGBPOOQDDvtcGMp0DR7RjmIC8kYJ3POFe2INyAiVR4nWtNcvqODCo2SBQDQ2pbEl4ksbEQ8ctLPnYoQKEC8DOYVWYsUfkbRXK2QHfEqiALwwXBEoFIFPlSxbknk3UzUzCYiNck497J4iIGc3Fx72sNyEFiTZQJ53C63/wNzHcRY1TePbgXVqa6BLvqyDci7rxqJt+HTq8TCdMRVyQPFh0tJAHSdgk+QR/+AuodubbyjhYRYpywASNtAQaAwaKpCSBZi8HmRI4SgH3B8oFbKXjAAVUdrWGDMaINEEw/jwQtXhjqRfQEvwlV5DDV+D5TydAi5kSOcmt5rRKvlwlsKkaApwoAWHVIAd33VEKgl9FN687WAj2+UcYQ3GzfCrlHqFleMQHmnvjbg6OYwNjRwcG1qf0c27oxMY78wxOmicaE8h4GIctREkeA5I7AWBD6aXMYwY4gQdIYEjkApJRk2Ss4nzKhUBI30hbXOtgAMiUYEzgE5Q08P1mBy6UCIm5AD4CEKkB+U07t2/qsPiwIJhJCf5tOriQmlJ92cIu5kYXw1XOcSfYtGRzLKnkaufAYEMpVLV3dbCKzDnD3AD0V5B9hwCddLXOOmOg/DAGIi4CuGmglTIZnDwGZEwypq17E//+iy9SHkAPBUKjZODazionY4eI+owMC6Id3RH7iiywcWEenGDLGoO89AmRKEBIYEpAhYwhPhd9V1HtEdyXqYz00IKUma3cZT8a4r450iFS3L9Ypju9dBkgx0ky99pBdubSOQDUhJx4OPvegTzdj9WligaQrX81L5amF9LmEFKuuPXYMGfKQgLYKq3petVCuiExGVkbsobsCx5NE6aJVFnIzAtf3wUJce4Ybo6BOLLUH+Hz6nxbQA4d9iuD0CVwly9ppXIpLd9Un1/dVtC56onEZ0Zidu0CJbAHJNT7+TwDEJd2/6wpIWMeR8A8K6ODQbYoF7OTRhb8BgvVBYhxZDGC6Jo8kn7uI62Nr00x9rTGzS00IXYvWXZkCEuLzIn1KeEaA9OGyE8JdmVkI8mLqcWSXAf3SAaFKacHUQki31XNwv/EYENGVXPcw+eJOgODDneJOXuqQWvoc0LvmYmJdl/IFMqrl95MDYHpaSomIDB08tpAuuQllHcoiOxUgjZVQzwv2bR3nsFwS9WQd2soVKSCYk4g5SEyUnF4i5d31AAhVZ6Z1+8otXEksWeGDoZdsIUVHpkVVYhrVdZnsqSdE557hsuXQ0UJSAkSj1EELCJ6YeZKXdEgWY5OM1TMLmVqO7+QEJVMmaVp1khABfuVw4dFHpmUSO6lzKK0eXzACBAN8YnDzS5I2m3XUsU6JTZw0rsvC87FeCN+6+kOsxASQkHBVVizStlAuhXan/lwCICZxZMG59k2b1Q0rQNB1xUQ8uURQckluoSMDjde4hZYPhVqXkmpAmV8YKJsWbuvQhTm2qu3FkqFYEtQuyVKG2KzrDggHiuro1+ACAMmJoB15CQiCkklAiWHgd8g6zNj3bTLuUQBBaUD5Bnbn8Z6TZEO6rb6eD5GdGio7j/ec44hTt9XnAzsFdnYvoYs/wP/XF8nclusaAyeAABxfvvgiyWKbuHJDuLa/bMsRIHzGSh3YD4TrCs4QkPDcAGGDCEF+7CuTG49BafrPjqTlZX+OgDAXNkNrkR183Hz+H6jfQTK0xHA8gjwlLMLZM+ut3oXLi8GZi7xrYi9YvNYE0SVoymUcyBQnx0zjkvZ9xr06lxsNEB6YFJmKrgiNnSTaZMy7ngGI0F3GcFqZLpM2L1v2HhDRYhpgvlgsZZRwPGKcWRBVPR/B6TtqWQ5hM8PZ65BsT74+O0BEXj+DARbvLIS9eSdzeRMRkE+eDD7Dxl52ksAwTwHLQFjDSOVJn8AvKeF4MH7ABdnIwq3ZyA6OJ1/n4EGNmG+AiOBknMsI4HjEeMgxId3WKnu6l8WcEo5Hj3sn/wswAAiYaKqlGa2bAAAAAElFTkSuQmCC"

/***/ },
/* 130 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0I4ODZGQ0MwRUExMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0I4ODZGREMwRUExMUU1QTgwN0E1MEI5RkJENzA0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlDQjg4NkZBQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlDQjg4NkZCQzBFQTExRTVBODA3QTUwQjlGQkQ3MDQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+g0+KNQAACmtJREFUeNrsXGuIHMUWrmmjIXBlVw0qPnBExSdmgu8r6iT34gMx2fgvkkdvRMX4yK4ioleTidEfgtfdhauY+JiNioKvzaLRaIzZVVR8gLOCgihmc/GPEDWLiqiJ43d2zkinrJ6u7uqa7pnpA4ea7pk6VX2+OnVOnaqeXLVaFRmlh3IZIBkgGWWAZICoG8vlGn7/w4DYH8Wl4MvB/wIfz1/tBL8Dfg388kH94ked9iCvm2WRzAvAx/BXX4G3gTeDt0De76r6SQzWVAACxc1E4YKvBp8VIOZT8NPgDVDklI+8LhTXgpeBTwuQ9xH4cfAw5P3a8YBAeReieBh8Kt/6DDwG/gD8f753FHgueD6XdatZBSWOSvIWohjyWMMn4Le4/IbvHQ3+J7gIPtnT7krIe7tjAYHyXB6dDvhj8Fp0Z/PBt4hqg2mIlHg7T0NEt0GJD/B3t6J4gO+/Qp/x3XgDWTNYzhrwmeA/wCtQZ2PHAQJlLEXxJF/eS2BAEXt0ZaH+tWxZ+4Fv5Nv/A5M/uBGyNoSQRcCUwP/hW0tR/+mOAQQKOBvF+2wZ1+DhH4siD3IuZkfv8K294H9D3lhEedeheIQt5bzuvuqHbQ8IHno/dsyngO+D8u4ykQl5vSie4MtlkPeUobz7UNwJ/hx8OkDZ20xAnARC7cUMBjnZ1abCAEAZxUvg503BYLobPMF9XNxs5TQVEF5nrOTLO6DAP2ISvYKmvjgEcZ/u5MuVuwdz+zdTRzO8jnbX4PRCahW4B1zg2xXwJgolZ/eJ3YaAUIR0DvgL8JtxPYTfesSAtoK/5r4WoaOtJsLC6NXxVKIf7+Boo+CRV+B7O/g3JrSA23wDStwrUkq8ct/Kfb3CEIxQenU8lUbA3Q1k03cjhqDM96yO007vSn2OCkYovTpsTuUQ7ZS5ThQ6icsdLQBIvY8nG0xTofXqcA5JVnA/WS5zvwJR1zCI2NMCgOwxDHx09Dol63UGO5p9KsHJDHquB3fVrgY896jOYMRRdyz4iBYApN7HryPWj6RXQv8iqeKwQrh876KInayPiANbAJADpT6HJR29bpLr/M0cVaGtabjrofe5PLMFADlX6rMR+eh1MumVen3tcUYLADKHy23tnDqhUJJGxRlYJObTigT6dhwPmklP+Nt+gGDB9S2K7eADFE4vTXQF93Eb97ltLYTo2XqeCCPxgBRaB/Wpnm97ptntJwEIbadSNvUEUdvzThst475RH8fbHhDOYa3jyxJG5OwUWQf1pcSX65LItyVhIQTKi6KWvDsS/GCKrGOI+7SV+yg6AhCmmzg9sZR3/ZK2DurDVWA6CnRDUv1IDBCMwC88D74eCjk/QTBoVb2eL29G377sOEAYFDoZ8iiYduU2QTFzEwCD2nyB+7A+zGmVtgOkHv6K2pFOcqhboKA5TQSD2trCbW/2hLudCwifxbpS1I7zHAp+g08z2gZjPqdFDuW2r4xxj7+lLYRA+Y1X7q+ygshSllgEYwm3dQiXPdwHkQGyLyi05067bLPAT0Fx6+Js47v/ihxk0ilJOi40k9takBYwiGakaYnMC7EVUBptZN0DvgufKcnXa5pTgpzDUNCZ3Uv41mrIXCdSRo5IIbGiFoFpD+EycIVPtUcFg+pWGIxdJDuNYKQWEAaFdtPoDDDlvg7nsPhB8KwQQMwC0+p7E8sgWWexbJEBEh4UWqDRgWoazXQImQ4GvAclX6ABBv3mPVrocV2ScTFkTqb5mSP7kF2D0/sak8yjs/umpwRbfmU1FPw6yodE7YDZ27guobxXTgDyYW563+NuvkVZ2xvwO6sbTdAH9YumxjxzJMpB0D7H36HYnE+DQcfkx0TtZEXF1kPzdEXKvp1v0XuH13Aahr4/kVf+dQu6X9TeO/nFMhB0cqTY6He6etUCBL9xhd6hL3LCvZBhdY6G4ueJ2ss6dPDuJ1E7bE1EryX8Q9ReJaCXdrY3wSqoDZ2Dg4tUepH174QYATpUPxbpWvYt29nhb2AAnmOmz/TCzdkpA4OozHWMnfqAolGKXGiUUsp61Kdx26D8CKY3nugdju+ZF+Pe9eCfEwJjlHUyj9c88mANHNgNpyx8R85JPodLU9Kw5pT2t99amsIuY5Bes91WAzB09XKs9zxW2ClLPhkyqlIw3+tNwlLqQKQNDI9exgN0GmrKkhuuNIgiEgUlbWBI0WcjndpbGLYrKAZgxL5Sl1e1yzsNlBjAWB6g01CAyHFzHh0sdwoopmCwrvIBOtUHhE9sy+Gb2wmgxASG/Jwbg94k0PEhfaL2Ry8dA4olMCZYl+F8iPz+ICNKodpUJ4BiCQzSnStbh+pdTUcRJxcUSq1w8qytQbEIRtEn6SrretzRWHt0BCgJgCEUDn/aQuSFS7GBUtsSlITAUFnImKNYfS8PUGpbgZIgGCpdV3IslJxNl+eLtRBW0niQMake0TDq9mo8CD1EYgnJpMFAXdLvGm891Omu+xC58TVBo9WipQzo7Bu0OBiuBAbR9FvrOU/4NakY7XM1hNuwFLLYeba2gxMGg9r+RFE3T2Gxd++jyJ0MrRhLoEzygNgdMxjdrJB8QmCoBgLpeGyfhSHf6FWEwNuD/mwmpumrXxESli0YiCq/1N8EMLobWOVfka7ugYYKo7jbsqUMKyKPRXEdmvB5NsovuU0CoxBklY7PaB1SxMsDGiPd1FJcReZgwODvoGSlyI503DYY9WdQgDGkskrHRzGUBBtVKLVkGxR+8Clp6uqLwUD6pKlqSmj8eYEpGKwzV2GVfVrJRUkxE2HDYQ1QBgPqkjMvhVmsapIso6QxBQ8agqEKbxtmfXMBAvPsP7qihKR+PsXvFJ9Ul4A5Jo4Fo8J37ISsvEa9qgEYqojqr/DWr56jMVqLishrRGde97EU3X9HGNbNsWlQMUC2H41HBGNaR4qIqmi8QcUd6FWEpFonAz2gkE/aKPT/dEZW2kIDQBZGBKSH+zwawoEL1o1qnRNYPxfC7Gk+XRUlnDWIjOgB5qgWUCFkyAveCcgoWOyzKggY8nPioS1EirzGFU7aFfZoTBF+h6VCgMw4wXAVYIzrghEKEI8Jy/vrZR6FNqiimCpNAbGVHysqFp0TIuT/goUCpMH++ghHZHHTZAwWkg+QGQcYeXbickTmhs3FhT65yI7JjRp5hST5YboiyOgKkBlHBkAVUblRstWRjpJybmltlPRKBPBj9SEWUvqqtMjaqPk3x0BZJaE+RFcSHUIN0iKRdWB62LrPJ73S0wFg9IRNi1gHpIGTLzdjGzZBMAqKiGo6WWm6oWb8OgKnV3oUTr5swcmnAYxGaRHjCC6W90N8dhsLilCwHWgkalqkaYAwKMMKJ18MSre3mHXQsxQVTnw4rjbifoPKVTj5VW3yShs9g5zLm9DZcUwMkLpVKNIrA21gIPIz7BQi/pRR7IB4Ii/Zybc6yc/QE/cRJVsWImz+30layNYzOiKjVFEGSAZIRhkgGSAZZYBkgGSUAZIBYkQ7fT43W05a+pE4ICVR27SZEsJoW9dUTlr6oUW5arWazRMpogyQDJCMMkAyQDKKSn8KMACWx4ylJHeqnQAAAABJRU5ErkJggg=="

/***/ },
/* 131 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzgwMTE3NDA3MjA2ODExODA4M0Y3OTgzQzVCNkU5QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQjhERkI3MEMwRTgxMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQjhERkI2RkMwRTgxMUU1QTgwN0E1MEI5RkJENzA0MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4ODAxMTc0MDcyMDY4MTE4MDgzRjc5ODNDNUI2RTlDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3ODAxMTc0MDcyMDY4MTE4MDgzRjc5ODNDNUI2RTlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oeDbbwAACWlJREFUeNrsXf1R4zoQXzz8H18FmArwVYCvAnIVYCogV0FCBYQKklQAVIBTAUkF51RAUgEverN6KMrKsmVZlsLbGc0dTLAl/fa3X/rI2ccj+Czxvl3tW4r/z/D3CbYqKbExKfZtu2+rfVvj//0Y4Ojz4OdzDwG4wYnPakx6lYigZQRYBbZXnwA69wiEITYXwoDKsTF5wdY7OH0CwiblHicl7lkpuDIwMOb79iSYu5MHhAExFrRTJzu0/SvBD3At5j+LkgoAx8LPKbaBhq0jbAyYP64Zc+bYqTNGTDSM2KH54DbetqZyYDJkRRVAW+zvkyun7goQBsAz4VxFWQi2vA9zdVvxGaYYv7tgiwxI5GDATBv/KsBgbHjYtx9owlyDwR16jn14wD7JkuEY0q47EzkA401hop7Qn0w8CTu5eUoUJirGsaShAqICgyVmP9FxehP/S8CMsI9r16B0CcgzAcYC6b8C/2WFfV0o/GFwYW9CgJFDWLIV+nxbMbZgfIgo846e+ym1kPruFJClhjEhSaIZW5AMOSVAgmTI6oQAiTVj8x4QNoDrEwIkJZx9MICkiqz2Ak5H7qG6DOQNIFWZecgMuVYkiLnPgLDOvUN1JTeB05KZbVAii2DMOopWPjWt7ed1krkExQYgmQKMxYnlIlx2XYLSFhA2wc8KMPITMVkpEfLeKUDJ+gSEF9niCjAKTTwfYg7C190pUJ7bKl0bQGaE9ugKiCZl6zNNa/t5E4YAfK2511HSzgGZwPGWnTUBhsyQwYkwhMsUjsvzDMBHl4AwSo4JR5cbaFsIcqUpm+RE8JKj0joBhIqoRkDXd4oaGhcaQygZEtHX2MSfNAUkJyKJBTRbLwiJJUlNJdsCvety1iUgMWEbN8iOKlkGzJAmGs6AeiJytLwrQKbEZJpsVAiZIbqFqREcb4x4bKKEUYOO3RKde6mpOd+BISIo8ngntgGZ1HhxXwxpm2c0AaSoqYByKHxfd9yRITsWUH/VLORcxDTrnhBR18gWIDbZEZoPGRgwhEmJPleU2zoA6wCJFexo4sgpJj3jc30Dhy89j7GPbfo3xShUp9yH9lez+31CZOWX0PyIgG4dooCvM4H8/McGujk0EwvZdwaHZ0d0AcePhso4IlKFg/lrehzhQ+rkEsxKzAUcL4M2kVIBTlFhFmMJhLZs3Bj4lBj7PZAsTK4C5FxTDoibUq5CU6YtQEkUk5GBG9mA2QLUFsc9lnyJMn+LNICIsm7g1Cg/kiFd71BL1h478w1m3ayvP1EZTMc+J36XN/UhMZorUf4QkYMNyQQGZILJ6To8XgrKwt59I5nIS4vvmkvB0QqBrm2yqEJZV6ebigamSuV4Y0y+RNmhAhU1fJEMCFeOwtIYpxIgPIg4ikBVgMiDe4V+jgnLE1gowHhTmIWXBu9Zw+Hax9giICs0gxdS/0Z1fEhCRCR9nP2rm2RSJ5qeDPo8JUypzYsM5kSiWMupZw7NVRvJFWAsDCsJcziu5s7A3k6ZOcHsoQkgXt0FAl/rMjOo3vFiIhPiXa02LRBmsVL5KUBuDOs3LoRp1F8FA2wcmWNjfSDM4mNHLLnRAUJFMT6YqwzNk0pb/4C97ZwToDctzCw8W57LZDs9S6sAGRIJUtkjELcIxJvCt20wnp92wMR1B6CUcFxwzKoAyTwwVykO/AMpriqPPKhieQvCNy3sCFB0O/ybsmRYBch1D+YqQSY8IwjvUH1l0xKz6EnHwUaJyrAjFOYdzIuVspJf781WTCWGacMsWjW5F5KpE8sgvOoql0rqyCuReXctvAY3l5LGBEHhwL0gY7cGgPA5KmRAMsI+13kBL1uMwP4GBn5V06RHX7YSyihXCiUcoen5XcOEbpHl19LcF7LJUm0q1oHxBvo7sJqCsMDBJWi++gws+CSmcLx5QQbmrWYiSV26duRDrgzMVdtlTg7AEin/E4HNkRm+XU7D+nVHREqigs4MzNZ/bBHL7/Iy6y8NKDw3oJzutfSzrB0lHF7bF6pw5ZETx58aC5NggivKZTz6LM9VKXwNhsiJ2BqfE/IEm5iyKXxd6MllpElUS7QMA0nB55GAmDy5OrkiMtzvBEZlBm5gthLRhyQE8nUSuL6TSF9EHnudSxJWVFIeWczQt/C/NGGIHDkOREAGmg/XdXDfVUzGXlIWJ1KYnzqALCnKfVPJNHNTK2Nnld8I6p8S0tnA+28MyL2hyZfzmSQC8yVKag169g3BoC4MmJuaLQqQZYOHPRG5Sed323oifIOFnG80uchf/lzchiE896DWiVkl9APode/QnTdfq3knmLGGZtttSYa0ub5ui51aV5QVpicEyBTUazUmlYojJkXQ/vo6DorqGwRu4TRuAaLOyohmKjOYOxmQq6gOajVBYfWbS+wctfQZushj2OFYL8Heten/+pALC4CIf8u/EEVmyamFtnycbearoExWF+bkRWIJe8cwYDAyaZ74SqZ1sWWyKBP2ckJmKycUbhsSIFTieBOoc08Ik2szclzrALElKyIcnpwAO9Zgdy/Y1hUgKpaElChSB4E6zasiIpSzKXM4LKDF0O7SAdcib23aQMdfXRG1yNJNWXIfEEtuXZtcF19XMZeYFwpLckeh7so1INsAWUJd1jbtKNTdugaEDyYklsi+YweOiqSuAFGxJPGUHfeO2NEbICqW+JiXTPtih2tAtkAXHX1aXUyJyMrpF2BGjgcs5yVMfFqHl/vSed7RNyBAsCT1xHRNCLa6CDySvgFhsfyr9Ltxz6YrheOL2l7B3ZG+XgHhSdfOI9Mlv7vuXfYnYbK4g88JLZ31BEZKKMz2OwGiMl25Y82k3ufKVJHCTlDJJ6cyKVdIDbR/JUUqZUUSxj4rr+vfOYhuckVUlVawI5H6mhgkt/KpsUIHSJeyEgAr8d8fOPkDh6DkFX7jA76ObqeEkjpniE/SBSg5eLwHOQK/hU3co8XnPYLfG8J37NDnAxGDr1tEGdeWOzlC03EH5hswmPmxcYSbEtO5kv0RM5kT3UXKNiQjAoQMDm+YritzVKCywaDHBpHbBg5v2S6Fd1o9yt30ZmtXWXKCIKU1GVYITdRQDjJ71rAmI/h9xDzQKFwO3kdAVKwaYrP9td8bzDMK8OByNhkQX516gb6DMecX2LkFe43PSvDZXt606nuUxcHhTv3V4O9f8W9TCOAs/TmEI3Ns3N9kQvI2kJxxKfiYMqAxwj8CDAAeSozOeLV2VQAAAABJRU5ErkJggg=="

/***/ },
/* 132 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RUNGM0I2OUMxOTIxMUU1OTJEOEIxQ0E5QzQyMTNGOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RUNGM0I2QUMxOTIxMUU1OTJEOEIxQ0E5QzQyMTNGOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFQ0YzQjY3QzE5MjExRTU5MkQ4QjFDQTlDNDIxM0Y5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFQ0YzQjY4QzE5MjExRTU5MkQ4QjFDQTlDNDIxM0Y5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FD2zRwAAB5JJREFUeNp8VmtsXEcVnsd97F17d70PP3br0sROcGs7fiRupKQNgpaWgIjUUAGVQitE1UjQRC0IVOgvKtRGSoA/CARCIrREIhJVVKRKbSqV1kmj0oLSGEjUNI6DnWA78Wu9j/ucO8O5M3fXrit1PLq+vp75zjnf+c6ZwSOnvoME4ghzJEJ4EfCX4PIlRNGTR0/1BdagUAiBEDyIQGUdI53sn/GfuFzvLwfwkfGQBT73fA0jjKKpAZ4c8a91L582YGdFx5tt8ZOJ5Xv/V7M8FkqrmGCdUGaage9r4AQY4HK9QNKxBrwQn2YH0Ksa3rYannzzZlfZWTEJj77JEQXu64QIXfciG8qAilriuiFEyJDAHg8p0RLUVN+VbWU3wCgdoN+eWchX3aUExfJ/BGOunMRYcG4IEVDN8QONN5yFZ5U5A5k7vtA53J0s5M30ZHX+j9femqkvaZiKdRHVNfzEh9WBRfsWoAMtwAPBNuMyIzjgQvlsYu5SqoUiJsYJg5Fs7/NDjz19/vc+5y/v+XELTVyr3zKxHscnJ0ScYOLL0zUwo9II852F1cmabVGyp5ApWkYgQSnnFqFEoJgfm3kHe/derc2/v3Rlojz9w/PHP1cc6k/f7oZsLTcIMYzanbC7FviSG4OQK1Xng5Uq42LJC84ulOGlkRCUQFzjja3wYhC9ZKbBtkXNf63OuL7DOFeZU0KIfoCHkEPgAlwHnRBcCRiohWDYjp0whOhNSLJKByxQkgcYjeq/u3p6R37rU337PB7sK40dn3rr4up1sLqeIti6qpOKEacFGO9ttZIatcMQ0tDbmkxSymNViFqunaa/Pqp26kS/Up37281/D2c3/2L021Ayj7/36zajVUS+R2UoRKO+DLJr3h0sBx4F5aBWnd6eTEAC+tPJ4WyKy6BhKde0G2O7GxHIqRHtjfmJH5w/blFjJN+zubVYYV7ktEJvVAFQfGpTi4jJjYLI6dqufKY/3SLickI08KvtxcX+EcKlMKRG3XYz89y2R56562t/nn6nM5F5d+8LW1LFeujxuEpiwbUw8Wop+fd20/JjG0wIN4R1vFGuUG7h/OB2kkgQ2WeEzYKtqeKpe380XV988dr4sxMnd772bI25R4YesUNfNAtdjpqPD3S7Y98QTihrT2yses1zFzZtrfT2WY4dU1QJnO9t2Qs1/IePTkPTyhrpqersTyf+UjBTONLCWsOqBuRAyTmxZaVjFJNdhNcEwh/rYJhzXzdn7rkPGoam0dgAxvRCeXqw0PPNnvtqzFsN7IKV+2LXtl9efo00+kyE7pNHi/aJgRVQaxjg7EMIF1wUNPukrC/Xub5jt991m4mEpunUehhUhA2q/2Ppqs3cp/q+cn/XwO7CZ+/puPPV2Q9eufHPtG410b9VtP8UoUPeMBE+SrcuoF30wiTsj9GDoFLo+O/9X7UwNgxD13VodnF0IKHn//PKry6/UbSyXPAb9jJUA6BL0Snf6y8NlKUkgDYPCf1G5WBlZ3/mvSlreoobZrQuZNd37iGWpUcq1SilazIF9tJ6EuzN1BdnnRWN0FYtIRro4PsaOgK90CnvcC0cTCRC5/NfEixqJ9T3y6XPQG7NkGm6HqETWdPNAYuAcTgxCCbNxEn0eswMoAsXuHWzR4S1m6CKBt19cMTvvgMHPrh/c2CU6kbkuUTHWAI1c9icjS+i6uNHS8C79J0DMy4ier3tBWbe3dVutLamQsZoa8of3kEc2023VTf1GnCQrDewAbQJDbMW+e681L8sT2qMiAtn7UryCE3eLdgqrOjo6EilUsjzWN8gwqTW1S3SbdDFFbqCUu1645TVpDSzLO0TUF/AtYNnjx06PcaC1YQuzy8hOjs701YibO/k6Ta3eJuiHgaWQ3L+iQHbah4+oBQZ3SMI+B6E2qEzR9+/NXphxnn6r3oQooSGlI2O9vZUV5efzrC2nAapbpCj0Ki+f2iDgTr4XoJqUrxHvvtcPzx+bHx2e950APejRXxxnjzYx00NOl1Uhy3pdH15aTGTI6k0HJ/rI6DG/uEN6AeKjkTHEboWMXN4/Oj4XISuspXU0ZVb+NI8eUDaYGCDMXNkzCHErVV1wyByNCNYM2BL3iN0pUhAF9qT48fOzG7PmY5SGpbnQ1LDVxbIpTnywF3cpAgYI4Lns1nGmG3bUGLKfSBwzYAd+S77DPgO6A1mPokuaw1ZOppcwBfBxp3c1DHcvID5XC4XBEG9XgeW4sJSJWZHWa2fUFmV6MDMofGjb8810OWp1kRXWs5a6N2r+Psv68CSZUQXDBg9PT2FQsH3/Zgibf+QG3XguEc20Z8c/3nEu+Go2xaOu3JkAsdXwciGpfIxhyOu9Igr+G82m/U8D+KATFC2d+Thkn1yUPku9S4kutRME126jNW9UVUmbhQnNLbJm1E+HuznhswH8J/P5x3HqVQq+Ddn9z1edAwikQhb9DLPnHvu3PxIzoh5Rw3f1dVFFT1e6ydCBofLNtq5SfzsIZaxRKQruElyvrS0RL7bUzVoo2drzvFLj71+fSRn2uoS97EeIuJLKm5+llUfmYB8JNHbH+IXzxHLiKsV+CmVSv8XYABvVptJVkUqKQAAAABJRU5ErkJggg=="

/***/ },
/* 133 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABFkAAAAGCAYAAAAYCkEPAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDIvMjQvMTP88lKFAAAB50lEQVR4nO2c23LDIAxExUz//5fJk6eYxAaDLgve89RppNUiux1QnKScs4iIpJSk4usXnbTyenU14jRrrRSjUQOp/xpeve+F0XhL7ZF4rVxtLU0vlpqRdVqg+KhB9bUa7OO7yY3XU0fMm0HtTbQvr/radWb1NPzMaDzJfVqnN15bt0dPw5tGnavXLbV7Y2b1Z3vXG2ftw+teuc055ioiIn9fkf9Dl9F/Bk/zLDeCEQdKjzwvb1bxKEMKhFgk7afxUQMbz8GSRr6VlrWu9yF9haHACh5nuDt47772SKIPzpGgr91zqGAx+LLwr6XpPfjwOteM5O04RLH0ENlbhD6h6s/kzOR5a54L5PzrYRVJ5cSFtEkpnaZUv5pqVdqrkGFNVD0NHSQv0TpIQ4nofCstK010PZRaSLV7WcEjGQd9Mxfpb8WnLzhs8fEQuQYE7wjXUCNfSwNdK7xW/QkYzhGu4ZCFuOE4kGpRv1sEY6zC+4Cai5+92bFm1H11XEuU+xrFx0HpB6lPI6zsncSw8qav/HtFWweCH6unYXprr6yPUM/z2iHcryX1njzUH8/GRAMOWQh5MVeDr5vvatqFbRc2Cftyhv0gxJfIQQESb19/zVb9aO2xeDYjZH04ZCGEEEIIIYQQQghR4AOrl5z54BICNwAAAABJRU5ErkJggg=="

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "879ee2eff79dc4834cf3327f083ecd1e.png";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "88d5c08f9e1286151a9d22c466418a80.png";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "4315d90f77ccd83eeff8c7c8f7ab7ee4.png";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7092aac981cf9324f6c657f5b500388d.png";

/***/ },
/* 138 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0U4OTcwQURFQkQxMUU1QUYxQ0I4ODhFOTM1OTdEMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0U4OTcwQkRFQkQxMUU1QUYxQ0I4ODhFOTM1OTdEMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU5RUNGRkZGREVBRDExRTVBRjFDQjg4OEU5MzU5N0QxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5RUQwMDAwREVBRDExRTVBRjFDQjg4OEU5MzU5N0QxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cW/BJAAAAbZJREFUeNq0lj0sBEEUx2/PRwQRJEShoBClcMmVwkWjUWh0VCJxBY1GpRCNgkpzFZ3GyV2hEfFRikgoNOIjkSvIOSckzmH9JnmFXG52dvfWJL/Mbmb2/ee9mfdmLdu2Q//dqt1Melm32ukWYQIa4Q22YaV53n40fW+ZPEFgiG4VHiAFd9AFY9AJCwgdOhpRIjpya6F+yEBcMx6X8YiTHa0neKBCeQZJVrrk4KkaG4cB5n2VmxN2cDIGVZAwhDwhdmK6CU4iUbiGrEEkK/OifkTqoEAIPpwUZLwg8z2LeE0g29URZhP76GagSWLcAvtQlP0pbd9QAyOQgwPpN/DwSpeMSTiHUzgW423icbmVWvADOyLWChHYhV6dSDdMsYoTvyWEaAzSHTntyTs0VFiq6sWOVsQyHAa10laDSFjseCuQYlzFfFKFk+dN+i3CWgysCktTB2AZOqAH9iDj5sOwB5FnSMtzWt5DgYpIZl/K64WpEvj1RLV7uIHbwG/GP96k5OLy1MIV1itXdaxcnuQrFMib8uQJRskDVbZrfQh8wrDY0YrMyk03V7oaD2F6hWlPfytBtF8BBgC5Q709CkjL5QAAAABJRU5ErkJggg=="

/***/ },
/* 139 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUVDRkZGRERFQUQxMUU1QUYxQ0I4ODhFOTM1OTdEMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUVDRkZGRURFQUQxMUU1QUYxQ0I4ODhFOTM1OTdEMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU5RUNGRkZCREVBRDExRTVBRjFDQjg4OEU5MzU5N0QxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5RUNGRkZDREVBRDExRTVBRjFDQjg4OEU5MzU5N0QxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PzJBHQAAAZxJREFUeNrslr1LQmEUh73q2FBQa0G5ORUENkpgQ1FDBA7RxyA0RB9DQ0sUuRX0MbdkFPQF9Qc0FkaDQTSEEGRDmwUtIZY9N37KHbS8F2809MLDea/vvefnOeeeo0ahUPC4vbyeX1i/IuJ/WTdcz5dfdhpuXfAfhI2iiBnNmRMv9TOVE0GWgtaarMJiLUNAYBmzYhWJQS8c1MC5Fw7Z9shvSSQNIWiCCzMLDgUaMOfQKH9pq0gdvENYB1fQalMgoOfuqFMYPuS3bJ+Mwq4eCFUp0KX7d3A+Vm0zmi/BFJi5HfxBYAhzDBMILNnteDOaRzhSH5Vbc3pZ0gjs2x0rATVnBsxUzMIW+HTu0/Wkzp+I6EZ1qUqkH5JKQVT7DmiGlL55StftRJCEqCK+RKivksibbBz2VPwFy31ZiMA8XMtG9Hmx8816DEMCobjVr/G89jVSBmAE2rTPOB0rCLRgTuAetuG0GEkCXqHTjkAF0Qf5ycpvKV3mnBmHfC3mFkJ5iMlvadTnoNvhKPnuOGcV2XTzR8v4/yPx50Q+BRgAPWt9pTBGLEMAAAAASUVORK5CYII="

/***/ },
/* 140 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0U4OTcwRURFQkQxMUU1QUYxQ0I4ODhFOTM1OTdEMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0U4OTcwRkRFQkQxMUU1QUYxQ0I4ODhFOTM1OTdEMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzRTg5NzBDREVCRDExRTVBRjFDQjg4OEU5MzU5N0QxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzRTg5NzBEREVCRDExRTVBRjFDQjg4OEU5MzU5N0QxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+28NGzQAAAYBJREFUeNq8ls8rBVEUx2duUoqyEGWjsbCSH4mFpcJOFmJhS1hhqRSysdJTWFhYKUVvYyHZ+APoZYWweAsLimIhGzU+R/cVuu/NjLn3nfp0Zuae7veec2fOHT8MQ8+1Vbxm/FQT1M6ZF8m8G7ghxgPlYuUIBLgJuJN75ahCWciRxcB3uRxkMYPrhKDwTFkWqMdtwzJZ5J2IYPuQR2Dl19tlMYsxXB90/R1TlgRqcHuwSRY5JyLYLrzBvPFjtJBFP25ESkUWn6aYtJlUwoFsOAJnxYLSikjrqILJUkEicgnHOjiJdcM0jJPFe5TIKrRLG4C6BCKHcIpANipQ6T7Tpq+voDmGgCysSbKIs5rCnrxAB9zDjemD+mEtsAhT8JxEROwDevX+XMBgiQ57Djtx62p6u4b1BCeGcsxCK4wmOhmLPJdSPOpW0QDr0AgZWJAmaENEbAmeYAuqdSlvYS3xGR8xLmfDg94HpUvl2RYROwI5H3rg+j8ifjl+iZRXBvsSYAAyblewhoYdNgAAAABJRU5ErkJggg=="

/***/ },
/* 141 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 142 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 143 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 144 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 145 */
/***/ function(module, exports) {

  module.exports = require("keymirror");

/***/ },
/* 146 */
/***/ function(module, exports) {

  module.exports = require("react-burger-menu");

/***/ },
/* 147 */
/***/ function(module, exports) {

  module.exports = require("react-daterange-picker");

/***/ },
/* 148 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 149 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/facebook");

/***/ },
/* 150 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/instagram");

/***/ },
/* 151 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/twitter");

/***/ },
/* 152 */
/***/ function(module, exports) {

  module.exports = require("react-sanfona");

/***/ }
/******/ ]);