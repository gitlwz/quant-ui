"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlidingValidation = function (_Component) {
    _inherits(SlidingValidation, _Component);

    function SlidingValidation(props) {
        _classCallCheck(this, SlidingValidation);

        var _this = _possibleConstructorReturn(this, (SlidingValidation.__proto__ || Object.getPrototypeOf(SlidingValidation)).call(this, props));

        _this.elementOnmousedown = function (e) {
            var _this$refs = _this.refs,
                box = _this$refs.box,
                xbox = _this$refs.xbox,
                element = _this$refs.element;

            var b = box.offsetWidth;
            var o = element.offsetWidth;
            var disX = e.clientX - element.offsetLeft;
            document.onmousemove = function (e) {
                var l = e.clientX - disX + o;
                if (l < o) {
                    l = o;
                }
                if (l > b) {
                    l = b;
                }
                _this.setState({
                    xboxWidth: l
                });
            };
            document.onmouseup = function (e) {
                var l = e.clientX - disX + o;
                if (l < b) {
                    l = o;
                } else {
                    l = b;
                    _this.props.succeed();
                    _this.setState({
                        succeed: true
                    });
                }
                _this.setState({
                    xboxWidth: l
                });
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };

        _this.state = {
            xboxWidth: null,
            succeed: false
        };
        return _this;
    }

    _createClass(SlidingValidation, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { ref: "box", style: { width: this.props.width }, className: "quant-sliding", id: "verify_box" },
                _react2.default.createElement(
                    "div",
                    { ref: "xbox", style: { background: this.props.succeedColr, width: this.state.xboxWidth }, className: "verify_xbox" },
                    !this.state.succeed ? _react2.default.createElement(
                        "div",
                        { onMouseDown: this.elementOnmousedown, onDragStart: function onDragStart() {
                                return false;
                            }, ref: "element", className: "verify_btn" },
                        _react2.default.createElement(_icon2.default, { className: "slid_bock", type: "double-right" })
                    ) : _react2.default.createElement(
                        "div",
                        null,
                        "\u9A8C\u8BC1\u901A\u8FC7",
                        _react2.default.createElement(
                            "div",
                            { onDragStart: function onDragStart() {
                                    return false;
                                }, ref: "element", className: "verify_btn" },
                            _react2.default.createElement(_icon2.default, { style: { color: this.props.succeedColr }, className: "slid_bock_check", type: "check-circle" })
                        )
                    )
                ),
                "\xA0 \xA0 \xA0 \xA0 \xA0\u6309\u4F4F\u6ED1\u5757\uFF0C\u62D6\u52A8\u5230\u6700\u53F3\u8FB9"
            );
        }
    }]);

    return SlidingValidation;
}(_react.Component);

SlidingValidation.defaultProps = {
    succeed: function succeed() {},
    succeedColr: "#7BBB55",
    width: "100%"
};
exports.default = SlidingValidation;