import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const knightSource = {
    beginDrag(props) {
        props.onDrageFromTo("from",props.data)
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

   
  render() {
        let item = this.props.data;
        let colSpan = item.childrens.length * 2;
        const { connectDragSource, isDragging } = this.props;
        
        return connectDragSource(
                <div style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 12,
                    cursor: 'move'
                  }} className="node">{item.name}</div>
            
        )
  }
}
export default DragSource("Childern", knightSource, collect)(App);
