import React, { Component } from 'react';
import  Modal  from '../modal';
import isFunction  from 'lodash/isFunction';
import "./index.less";
import classNames from 'classnames';
class Title extends React.Component{

    constructor(props) {
        super(props);
        if(!this.props.visible){
            document.onmousemove = null;
        }
    }
    componentWillReceiveProps  = (nextProps) =>{
        if(!nextProps.visible){
            document.onmousemove = null;
        } 
    }
    componentWillUnmount = () =>{
        document.onmousemove = null;
    }
    mousedown = (event) =>{
        let _this = this;
        var target = event.target;
        var disX = event.clientX-this.props.left;
        var disY = event.clientY-this.props.top;
        document.onmousemove = function(event){
            event.preventDefault();
            var l = event.clientX - disX;
            var t = event.clientY - disY;
            _this.props.onChange(t,l)
        }
        target.onmouseup = function(){
            document.onmousemove = null;
            target.onmouseup = null;
        }
    }
    render(){
        return(
            <div className="quant-move-modal-move"  onMouseDown={(e)=>this.mousedown(e)}>
                {this.props.children}
            </div>
        )
    }
}

class MoveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left:this.props.style&&this.props.style.left?this.props.style.left:0,
            top:this.props.style&&this.props.style.top?this.props.style.top:100,
            visible:this.props.visible
        }
    }
    onChange = (top,left) =>{
        this.setState({
            top:top,
            left:left
        })
    }
    afterClose = () =>{
        if(isFunction(this.props.afterClose)){
            this.props.afterClose()
        }
        this.setState({
            visible:false
        })
    }
    componentWillReceiveProps  = (nextProps) =>{
        if(this.state.visible !== nextProps.visible){
            this.setState({
                visible:nextProps.visible
            })
        } 
    }
    render(){
        const {left,top} = this.state;
        let className = classNames("quant-move-modal",this.props.wrapClassName)
        return (
                <Modal 
                    {...this.props}
                    wrapClassName = {className}
                    title = {<Title visible={this.state.visible} top={top} left={left} onChange={this.onChange}>{this.props.title}</Title>}
                    style = {{top,left}}
                    afterClose= {this.afterClose}
                >
                </Modal >
        )
    }
}
export default MoveModal
