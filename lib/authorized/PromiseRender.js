'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PromiseRender = function (_React$PureComponent) {
  _inherits(PromiseRender, _React$PureComponent);

  function PromiseRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PromiseRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PromiseRender.__proto__ || Object.getPrototypeOf(PromiseRender)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      component: null
    }, _this.checkIsInstantiation = function (target) {
      if (!_react2.default.isValidElement(target)) {
        return target;
      }
      return function () {
        return target;
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PromiseRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRenderComponent(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // new Props enter
      this.setRenderComponent(nextProps);
    }

    // set render Component : ok or error

  }, {
    key: 'setRenderComponent',
    value: function setRenderComponent(props) {
      var _this2 = this;

      var ok = this.checkIsInstantiation(props.ok);
      var error = this.checkIsInstantiation(props.error);
      props.promise.then(function () {
        _this2.setState({
          component: ok
        });
      }).catch(function () {
        _this2.setState({
          component: error
        });
      });
    }

    // Determine whether the incoming component has been instantiated
    // AuthorizedRoute is already instantiated
    // Authorized  render is already instantiated, children is no instantiated
    // Secured is not instantiated

  }, {
    key: 'render',
    value: function render() {
      var Component = this.state.component;

      return Component ? _react2.default.createElement(Component, this.props) : _react2.default.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '100%',
            margin: 'auto',
            paddingTop: 50,
            textAlign: 'center'
          }
        },
        _react2.default.createElement(_antd.Spin, { size: 'large' })
      );
    }
  }]);

  return PromiseRender;
}(_react2.default.PureComponent);

exports.default = PromiseRender;