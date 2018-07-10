'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Authorized = require('./Authorized');

var _Authorized2 = _interopRequireDefault(_Authorized);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizedRoute = function (_React$Component) {
  _inherits(AuthorizedRoute, _React$Component);

  function AuthorizedRoute() {
    _classCallCheck(this, AuthorizedRoute);

    return _possibleConstructorReturn(this, (AuthorizedRoute.__proto__ || Object.getPrototypeOf(AuthorizedRoute)).apply(this, arguments));
  }

  _createClass(AuthorizedRoute, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          _render = _props.render,
          authority = _props.authority,
          redirectPath = _props.redirectPath,
          rest = _objectWithoutProperties(_props, ['component', 'render', 'authority', 'redirectPath']);

      return _react2.default.createElement(
        _Authorized2.default,
        {
          authority: authority,
          noMatch: _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render() {
              return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: redirectPath } });
            } }))
        },
        _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return Component ? _react2.default.createElement(Component, props) : _render(props);
          } }))
      );
    }
  }]);

  return AuthorizedRoute;
}(_react2.default.Component);

exports.default = AuthorizedRoute;