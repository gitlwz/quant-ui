import React, { Component } from 'react';
import Input from "../input";
import isNaN from 'lodash/isNaN';
import indexOf from 'lodash/indexOf';
import lastIndexOf from 'lodash/lastIndexOf';
import toNumber from 'lodash/toNumber';
import isFunction from 'lodash/isFunction';
var clearComma = function clearComma(value) {
    return value && typeof value == 'string' ? value.split(",").join("") : value;
};
class Number extends Component {
    static defaultProps = {
        precision: 2, //小数位数
        zeroFilling: true, //是否自动补充0
        minus: false,    //是否可以为负数
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this._handleZeroFilling(this.props.value),
            isFocus: false,
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if ('value' in nextProps) {
            var val = nextProps.value;
            var isFocus = this.state.isFocus;
            // 计算为NAN时置为空字符串，否则数字格式化字符串
            val = val === undefined || val === null || isNaN(val) ? '' : val + '';
            this.setState({ value: isFocus ? val : this._handleZeroFilling(val) });
        }
    }
    //处理小数点问题
    _handlePoint = (preValue, value) => {
        var pre_sub = preValue.slice(0, preValue.indexOf('.'));
        var cur_sub = value.slice(0, value.indexOf('.'));
        var index; // 记录小数点位置
        if (pre_sub !== cur_sub) {
            // 小数点前移
            index = value.indexOf('.');
            value = value.replace(/\./g, '');
            value = value.slice(0, index) + '.' + value.slice(index);
        } else if (pre_sub === cur_sub) {
            // 小数点后移
            index = lastIndexOf(value, '.');
            value = value.replace(/\./g, '');
            value = value.slice(0, index - 1) + '.' + value.slice(index - 1);
        }
        return value;
    }
    //处理减号符
    _handleMinus = (value) => {
        var index = value.indexOf('-');
        if (index > -1) {
            value = value.replace(/-/g, '');
            if (this.props.minus) {
                value = '-' + value;
            }
        }
        return value;
    }
    //处理数字0问题
    _handleZero = (value) => {
        var hasMinus = value.indexOf('-') > -1 ? true : false;
        value = value.replace(/-/g, '');
        var substr1 = value.substr(0, 1);
        var substr2 = value.substr(1, 1);
        var substr3 = value.substr(2);

        if (value.length > 1 && substr1 == 0 && substr2 != '.') {
            value = substr2 + substr3;
        }
        value = hasMinus ? '-' + value : value;
        return value;
    }
    _handleZeroFilling = (value) => {
        let { precision, zeroFilling } = this.props
        if (value && zeroFilling) {
            //处理0覆盖问题
            let sIndex = value.indexOf('.')
            if (sIndex !== -1) {
                value = value.substr(0, sIndex + precision + 1);
                let _zero = value.substr(sIndex + 1);
                if (precision - _zero.length > 0) {
                    for (let i = 0; i < (precision - _zero.length); i++) {
                        value += "0"
                    }
                }
            } else {
                value += ".";
                for (let i = 0; i < precision; i++) {
                    value += "0"
                }
            }
        }
        return value
    }
    _handleBlur = (e) => {
        var self = this;

        var value = this.state.value;
        value = this._handleZeroFilling(value);
        this.setState({ isFocus: false, value: value !== undefined ? value + '' : '' }, function () {
            var numVal = value;
            if (isFunction(self.props.onChange)) {
                //失去焦点后才将值强转换为number，提供第二个参数确保同原本onChange参数列表一致
                if (value) {
                    numVal = toNumber(value);
                };
                self.props.onChange(value, numVal);
            }
            if (isFunction(this.props.onBlur)) {
                this.props.onBlur(e, value);
            }
        });
    }
    _handleFocus = (e) => {
        var value = this.state.value;
        if (!!value && value.indexOf('.') !== -1) {
            for (let i = value.length - 1; i >= 0; i--) {
                let ele = value[i];
                if (ele == '0' || ele == ".") {
                    value = value.substr(0, i)
                } else {
                    break;
                }
            }
        }
        //标记为编辑进行时
        this.setState({ isFocus: true, value: value }, function () {
            if (isFunction(this.props.onFocus)) {
                this.props.onFocus(e);
            }
        });
    }
    _handleChange = (e) => {
        var self = this;
        var value = '';
        if (e && e.target) {
            value = e.target.value;
            let _value = ""
            for (let i = 0; i < value.length; i++) {
                let ele = value[i];
                let code = ele.charCodeAt();
                if (code == 45 || code == 46 || 48 <= code && code <= 57)
                    _value += ele
            }
            value = _value;
            //处理掉千分位
            value = clearComma(value);
            //处理小数点的输入
            if (indexOf(value, '.') != lastIndexOf(value, '.')) {
                value = this._handlePoint(this.state.value, e.target.value);
            }
            //处理减号
            value = this._handleMinus(value);
            //处理0的输入
            value = this._handleZero(value);
        }
        this.setState({
            value: value
        }, function () {
            if (isFunction(self.props.onChange)) {
                var numVal = value;
                //如果onChange第一个参数为number类型将导致无法输入小数点
                if (value) {
                    numVal = toNumber(value);
                };
                self.props.onChange(value, numVal);
            }
        });
    }
    _handleKeyPress = (e) => {
        let { minus, precision } = this.props
        var charCode = e.charCode;
        if (charCode == 46) {
            //小数点
            if (precision <= 0) {
                //不存在小数位，则不允许输入小数点
                e.stopPropagation();
                e.preventDefault();
            }
        } else if (charCode == 45) {
            //减号
            if (minus === false) {
                //不允许输入负数，则减号无效
                e.stopPropagation();
                e.preventDefault();
            }
        } else if (48 <= charCode && charCode <= 57) {//数字0~9
        } else if (charCode === undefined) {//非char字符，一般为功能键被按时，例如：回退删除
        } else {
            //其它char字符，则不允许按出来
            e.stopPropagation();
            e.preventDefault();
        }
    }
    render() {
        let { zeroFilling, addonAfter, addonBefore, disabled, size, ...resProps } = this.props
        let { value } = this.state;

        var textValue = value;
        let props = {
            ...resProps,
            value: textValue,
            onKeyPress: this._handleKeyPress,
            onChange: this._handleChange,
            onFocus: this._handleFocus,
            onBlur: this._handleBlur,
            addonAfter,
            addonBefore,
            disabled,
            size,
            type: "text",

        }
        return (
            <Input
                {
                ...props
                }
            />
        )
    }
}
export default Number;