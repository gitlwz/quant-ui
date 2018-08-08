
import React, { Component } from 'react';
import classNames from 'classNames';
import isFunction  from 'lodash/isFunction';
import language  from "../language";
const {setLanguageData,getLanguageData:$} = language;
setLanguageData({
    'en_US':{
        "弱":"L",
        "中":"M",
        "强":"H"
    },
})
class Strength extends React.Component{
    constructor(props){
        super(props)
        const value = props.value || null;
        this.state = {
            value:value
        }
        this._strength = 0;
    }
    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.value !== this.state.value){
            this.setState({
                value:nextProps.value
            })
        }
    }
    //判断输入密码的类型
     CharMode = (iN)=>{
        if (iN >= 48 && iN <= 57) //数字
            return 1;
        if (iN >= 65 && iN <= 90) //大写
            return 2;
        if (iN >= 97 && iN <= 122) //小写
            return 4;
        else
            return 8;
    }
    //bitTotal函数
    //计算密码模式
     bitTotal = (num) => {
        let  modes = 0;
        for (let i = 0;i < 4;i++){
            if (num & 1) 
                modes++;
            num >>>= 1;
        }
        return modes;
    }
    //返回强度级别
     checkStrong = (sPW) => {
        if ( !sPW || sPW.length < 6 )
            return 0;           //密码太短，不检测级别
        let Modes = 0;
        for (let i = 0; i < sPW.length; i++){
            //密码模式
            Modes |= this.CharMode(sPW.charCodeAt(i));
        }
        return this.bitTotal(Modes);
    }
    render(){
        const {value} = this.state
        const strength = this.checkStrong(value)
        if(this._strength !== strength && isFunction(this.props.onChange)){
            this.props.onChange(strength);
        }
        this._strength = strength;
        let _class =  classNames("quant-strength",{
            'quant-strength-L':strength == 1,
            'quant-strength-M':strength == 2,
            'quant-strength-H':strength == 3,
        })
        return (
            <div className={_class}>
                <span>{$("弱")}</span>
                <span>{$("中")}</span>
                <span>{$("强")}</span>
            </div>
        )
    } 
}
export default Strength;