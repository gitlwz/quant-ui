
import React, { Component } from 'react';
import classNames from 'classNames';
import isFunction  from 'lodash/isFunction';
import language  from "../language";
import Input from "../input";
const {setLanguageData,getLanguageData:$} = language;


//密码强度校验
function checkStrong(sPW) {
    if (!sPW)
        return 0; //密码太短，不检测级别
    let Modes = [];
    for (let i = 0; i < sPW.length; i++) {
        //密码模式
        Modes.push(CharMode(sPW.charCodeAt(i)));
    }
    Modes = unique1(Modes);
    if (Modes.length == 1) {
        return 1;
    } else if (Modes.length == 2) {
        return 2
    } else if (Modes.length > 2 && sPW.length > 6) {
        return 3
    } else {
        return 2
    }
}

function unique1(arr) {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
            hash.push(arr[i]);
        }
    }
    return hash;
}

function CharMode(iN) {
    if (iN >= 48 && iN <= 57) //数字
        return 1;
    if (iN >= 65 && iN <= 90) //大写
        return 2;
    if (iN >= 97 && iN <= 122) //小写
        return 4;
    else
        return 8;
}


setLanguageData({
    'en_US': {
        "弱": "L",
        "中": "M",
        "强": "H"
    },
})
class Strength extends React.Component {
    constructor(props) {
        super(props)
        const value = props.value || null;
        this.state = {
            value: value
        }
        this._strength = 0;
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }
    render() {
        const { value } = this.state
        const strength = checkStrong(value)
        this._strength = strength;
        let _class = classNames("quant-strength", {
            'quant-strength-L': strength == 1,
            'quant-strength-M': strength == 2,
            'quant-strength-H': strength == 3,
        }, this.props.className)
        return (
            <div style={this.props.style} className={_class}>
                <span>{$("弱")}</span>
                <span>{$("中")}</span>
                <span>{$("强")}</span>
            </div>
        )
    }
}
let AllStrength = function (props) {
    return <div>
        <Input {...props} />
        <Strength {...props} />
    </div>
}
AllStrength.checkStrong = checkStrong;
export default AllStrength;