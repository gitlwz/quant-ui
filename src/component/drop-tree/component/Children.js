import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import isFunction from 'lodash/isFunction';

const knightSource = {
    beginDrag(props) {
        props.onDrageFromTo("from", props.data)
        return {};
    },
    canDrag(props) {
        return !props.forbidDrag
    },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}
class App extends Component {

    _onClick = (item) =>{
        if(isFunction(this.props.onClick)){
            this.props.onClick(item)
        }
    }
    _render = (item)=>{
        return isFunction(this.props.renderItem)?this.props.renderItem(item):item.name
    }
    render() {
        let item = this.props.data;
        let colSpan = item.childrens.length * 2;
        const { connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <div 
                onClick = {()=>this._onClick(item)}
                
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 12,
                    cursor: 'move'
                }} className="node">
                    {this._render(item)}
                </div>

        )
    }
}
export default DragSource("Childern", knightSource, collect)(App);
