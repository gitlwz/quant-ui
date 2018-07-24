import React, { Component } from 'react';
import { DragSource ,DropTarget} from 'react-dnd';
import "./style.less";
const cardSource = {
    beginDrag(props) {
        let {collocate} = props;
		return {
            dataIndex:collocate.dataIndex
		}
    },
    endDrag(props,monitor) {
		
	},
    
};
const cardTarget = {
    canDrop() {
		return false
    },
    hover(props, monitor) {
		const { dataIndex } = monitor.getItem()
		const { collocate } = props

		if (collocate.dataIndex !== dataIndex) {
			props.moveCard(dataIndex, collocate.dataIndex)
		}
	}
}
class Card extends Component {

    componentDidMount() {
	}
    render() {
        const { connectDragSource,connectDropTarget,text,isDragging } = this.props
        return (
            connectDropTarget(
            connectDragSource(
            <div style={{ width: "100%" }}
                className={isDragging?"entry-table-dragSource":""}
            >
                {text}
            </div>))
        );
    }
}

export default DropTarget("title",cardTarget,connect => ({
	connectDropTarget: connect.dropTarget(),
}))(DragSource("title", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))(Card));