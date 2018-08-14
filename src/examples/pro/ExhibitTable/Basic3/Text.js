import React, { Component } from 'react';


export default class Text extends React.Component {
    constructor(props) {
        super(props);

        const value = props.value;
        this.state = {
            value: value,
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState({value});
        }
    }
    render() {
        return (
            <div>{this.state.value}</div>
        )
    }
}