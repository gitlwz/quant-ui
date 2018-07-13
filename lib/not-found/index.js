'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./imgs/404.png');

var _2 = _interopRequireDefault(_);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lwz.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));

        _this.enter = function () {
            _this.setState({ animated: 'hinge' });
        };

        _this.state = {
            animated: ''
        };
        return _this;
    }

    _createClass(NotFound, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { textAlign: "center", height: '100%', background: '#ececec', overflow: 'hidden' } },
                _react2.default.createElement('img', { src: this.props.img, alt: '404', className: 'animated swing ' + this.state.animated, onMouseEnter: this.enter })
            );
        }
    }]);

    return NotFound;
}(_react2.default.Component);

NotFound.defaultProps = {
    img: _2.default
};
exports.default = NotFound;