import React, { Component } from 'react';
import Input from "../../input";
import isObject from "lodash/isObject";

class Einput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text:this.props.text
        }
    }
    
    onChange = (e) =>{
        this.setState({
            text:e.target.value
        })
        this.props.onChange(e.target.value)
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
                <Input 
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
export default Einput;