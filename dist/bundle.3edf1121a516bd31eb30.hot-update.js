exports.id = "bundle";
exports.modules = {

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxFirstRouterLink = __webpack_require__(/*! redux-first-router-link */ \"./node_modules/redux-first-router-link/dist/index.js\");\n\nvar _reduxFirstRouterLink2 = _interopRequireDefault(_reduxFirstRouterLink);\n\nvar _reduxFirstRouter = __webpack_require__(/*! redux-first-router */ \"./node_modules/redux-first-router/dist/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction Home(_ref) {\n  var sendTo = _ref.sendTo;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Soy T',\n    _react2.default.createElement(\n      _reduxFirstRouterLink2.default,\n      { to: '/info' },\n      'A Info'\n    )\n  );\n}\n\nvar mapState = function mapState(state) {\n  return {};\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    sendTo: function sendTo(to) {\n      return dispatch((0, _reduxFirstRouter.redirect)({ type: to }));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapState, mapDispatch)(Home);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, 'Home', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/containers/Home.js');\n  reactHotLoader.register(mapState, 'mapState', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/containers/Home.js');\n  reactHotLoader.register(mapDispatch, 'mapDispatch', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/containers/Home.js');\n  reactHotLoader.register(_default, 'default', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/containers/Home.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/containers/Home.js?");

/***/ })

};