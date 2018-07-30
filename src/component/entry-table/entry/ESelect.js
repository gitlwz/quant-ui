import React, { Component } from 'react';
import Select from "../../select";
import isObject from "lodash/isObject";
const Option = Select.Option;
class ESelect extends React.Component {
    
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
                <Select   
                    {...API}
                    style={{width:width}}
                    labelInValue ={true}
                    value={showText} 
                    key = {index}
                    onChange={value =>{ 
                        let _value = {
                            value:value.key,
                            name:value.label
                        }
                        this._SelectChange(_value,record,index,dataIndex)}
                    } 
                >
                    {
                        optiondata.map((optionObj,index)=>{
                            let optionApi = collocate.optionApi || {}
                            if(isFunction(optionApi.disabled)){
                                optionApi = {...optionApi,...{disabled:optionApi(optionObj,record,index)}}
                            }
                            return (
                                    <Option key={index} {...optionApi} value={optionObj.value}>{optionObj.name}</Option>
                                )
                        })
                    }
                </Select>
            </div>)
    }
}
export default ESelect;