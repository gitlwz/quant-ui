import React, { Component } from 'react';
import { Form, Input } from 'quant-ui';
const FormItem = Form.Item;
class MacInput extends Component {

    state = {
        value: '',
        pos: 0
    }
    constructor(props) {
        super(props);
        this.pos = 0;
    }
    onKeyDown = (e) => {
        e.preventDefault();

        let value = ""
        if (e.key.toUpperCase() === "BACKSPACE") {
            value = this.deleteValue(this.state.value)
        } else if (e.key.toUpperCase() === "ARROWLEFT") {
            this.moveLeft()
        } else {
            value = this.dealwithValue(this.state.value, e.key.toUpperCase())
        }

        this.setState({
            value: value
        })

    }
    // dealwithValue = (value,key) =>{
    //     let isLast = false;
    //     let length = 0;
    //     if(value&&value.length > 0){
    //         let _valuearr = value.split(':');
    //         length = _valuearr.length;
    //         if(_valuearr[length - 1].length === 2){
    //             isLast = true
    //         }
    //     }
    //     if(key.match(/[0-9A-F]/) && key.length === 1 && (length !== 6 || !isLast)){
    //         if(isLast){
    //             return value + ":" + key;
    //         }
    //         return value + key;
    //     }
    //     return value
    // }
    deleteValue = (_value) => {
        let value = _value;
        if (value && value.length > 0) {
            let arr = value.split(":");
            if (arr.length > 0 && arr[arr.length - 1].length === 1) {
                value = value.substring(0, value.length - 2)
            } else {
                value = value.substring(0, value.length - 1)
            }
        }
        return value;
    }
    onClick = (e) => {
        console.log("^^^^^^^^^6", this.refs.t.input.selectionStart)
    }

    onChange = (e) => {
        this.setState({
            value: this.dealwithValue(e.target.value)
        })
    }
    dealwithValue = (_value) => {
        let value = _value;
        if (!!_value) {
            value = value.toUpperCase();
            console.log("******", this.refs.t.input.selectionStart, value)
            let pos = this.refs.t.input.selectionStart
            let lastValue = value[pos - 1];
            if (!lastValue.match(/[0-9A-F]/)) {
                value = value.slice(0, pos - 1) + value.slice(pos, value.length);
                // this.refs.t.input.setSelectionRange(pos - 2,pos - 2)
                // ReactDOM.findDOMNode(this.refs.t.input).setSelectionRange(pos - 1, pos - 1)
            }

        }
        console.log("value===", value)
        return value
    }
    // componentDidUpdate = () =>{
    //     this.refs.t.input.setSelectionRange(0,0)
    // }
    onKeyDown = () => {

    }
    render() {

        return (
            <div>
                <button onClick={this.btnClick}>1232</button>
                <Input
                    value={this.state.value}
                    type="text"
                    onKeyDown={e => { e.preventDefault(); this.onKeyDown }}
                    onClick={e => this.setState({ ...this.state, pos: this.refs.t.input.selectionStart })}
                    ref="t"
                />
            </div>
        );
    }
}

class Detail extends Component {

    handleConfirmPassword = (rule, value, callback) =>{
        if(!!value && value.length > 0){
            let test = 0;
            let f = null;
            for(let i = 0; i < value.length ;i++ ){
                let item = value[i];
                if(item === ":" || item === "-"){
                    if(test !== 2){
                        callback("每位mac地址长度为两位");
                        return
                    }
                    if(f === null){
                        f = item
                    }else if(item !== f){
                        callback("请使用相同的分隔符");
                        return
                    }
                    test = 0;
                    continue;
                }
                if(test === 2){
                    callback("每位mac地址长度为两位");
                    return
                }
                if(!item.match(/[0-9A-Fa-f]/)){
                    callback("mac地址只能输入0-9、a-f");
                    return
                }
                test++
            }

        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Form>
                    <FormItem
                    >
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: 'Please input your Password!' },
                                { validator: this.handleConfirmPassword }
                            ],
                        })(
                            <Input  />
                        )}
                    </FormItem>
                    
                </Form>

            </div >
        );
    }
}
export default Form.create()(Detail);
