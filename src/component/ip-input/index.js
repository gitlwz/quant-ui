
import React, { Component } from 'react';
import Input from '../input';
class IpInput extends Component {
    constructor(props) {
        super(props);
        const value = props.value || {};
        this.state = {
            value1: value.value1,
            value2: value.value2,
            value3: value.value3,
            value4: value.value4,
        };
        this.foces = null;
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }
    componentDidUpdate = () => {
        this.focesfn(this.foces)
    }
    focesfn = (ele) => {
        if (!!ele) {
            this.refs[this.foces].input.focus();
        }
    }
    handleNumberChange1 = (e) => {
        const value1 = e.target.value;
        this.foces = "input1"
        if (!!value1 && value1.length >= 3) {
            this.foces = "input2";
        }
        if (value1.length >= 4) {
            this.focesfn(this.foces);
            return;
        }

        if (isNaN(value1) || !/^\d+$/.test(value1 || 0) || value1.length >= 4) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({
                value1
            });
        }
        this.triggerChange({ value1 });
    }
    handleNumberChange2 = (e) => {
        const value2 = e.target.value;
        this.foces = "input2"
        if (!!value2 && value2.length >= 3) {
            this.foces = "input3";
        }
        if (value2.length >= 4) {
            this.focesfn(this.foces);
            return;
        }
        if (isNaN(value2) || ! /^\d+$/.test(value2 || 0)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({
                value2
            });
        }

        this.triggerChange({ value2 });
    }
    handleNumberChange3 = (e) => {
        const value3 = e.target.value;
        this.foces = "input3"
        if (!!value3 && value3.length >= 3) {
            this.foces = "input4";
        }
        if (value3.length >= 4) {
            this.focesfn(this.foces);
            return;
        }
        if (isNaN(value3) || ! /^\d+$/.test(value3 || 0)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({
                value3
            });
        }
        this.triggerChange({ value3 });
    }
    handleNumberChange4 = (e) => {
        const value4 = e.target.value;
        this.foces = "input4"
        if (value4.length >= 4) {
            return;
        }
        if (isNaN(value4) || ! /^\d+$/.test(value4 || 0)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({
                value4
            });
        }
        this.triggerChange({ value4 });
    }
    triggerChange = (value) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, value));
        }
    }
    render() {
        const state = this.state;
        return (
            <div className="quant-ip-input">
                <Input
                    type="text"
                    ref="input1"
                    value={state.value1}
                    onChange={this.handleNumberChange1}
                />
                .
                 <Input
                    type="text"
                    ref="input2"
                    value={state.value2}
                    onChange={this.handleNumberChange2}
                />
                .
                 <Input
                    type="text"
                    ref="input3"
                    value={state.value3}
                    onChange={this.handleNumberChange3}
                />
                .
                 <Input
                    type="text"
                    ref="input4"
                    value={state.value4}
                    onChange={this.handleNumberChange4}
                />

            </div>
        );
    }
}
export default IpInput;