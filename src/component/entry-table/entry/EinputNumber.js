import React, { Component } from 'react';
import InputNumber from "../../input-number";
import isObject from "lodash/isObject";

class EInputNumber extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text:this.props.text
        }
    }
    
    onChange = (value) =>{
        this.setState({
            text:value
        })
        this.props.onChange(value)
    }
    componentWillReceiveProps = (newProps) =>{
        if(newProps.text !== this.props.text){
            this.setState({
                text:newProps.text
            })
        }
    }
    render(){
        return(
            <div>
                <InputNumber 
                    {...this.props.API}  
                    title={this.state.text}
                    style={{width:'100%'}} 
                    value={this.state.text} 
                    onChange={this.onChange } 
                    />
            </div>
        )
    }
}
export default EInputNumber;