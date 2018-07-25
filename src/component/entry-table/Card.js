import React, { Component } from 'react';
import { DragSource ,DropTarget} from 'react-dnd';
import classNames from 'classnames';
import { createDragPreview } from 'react-dnd-text-dragpreview'
const cardSource = {
    beginDrag(props) {
        let {collocate} = props;
		return {
            dataIndex:collocate.dataIndex
		}
    },
    endDrag(props,monitor) {
		
    },
    canDrag(props) {
        return !props.collocate.fixed
    },
    
};
const cardTarget = {
    canDrop() {
		return false
    },
    hover(props, monitor) {
		const { dataIndex } = monitor.getItem()
		const { collocate } = props

		if (collocate.dataIndex !== dataIndex && !collocate.fixed) {
			props.moveCard(dataIndex, collocate.dataIndex)
		}
	}
}
var dragPreviewStyle = {
    backgroundColor: 'rgb(68, 67, 67)',
    borderColor: '#F96816',
    color: 'white',
    fontSize: 15,
    paddingTop: 4,
    paddingRight: 7,
    paddingBottom: 6,
    paddingLeft: 7,
    cursor:'pointer',
  }
class Card extends Component {

    componentDidMount() {
        this.dragPreview = createDragPreview(this.props.collocate.title, dragPreviewStyle)
        this.props.connectDragPreview(this.dragPreview)
	}
    render() {
        const { connectDragSource,connectDropTarget,text,isDragging,collocate } = this.props
        let className =  classNames("entry-table-title",{
            'entry-table-dragSource':!!isDragging,
            'entry-table-notmove':!!collocate.fixed,
            'entry-table-move':!collocate.fixed
        })
        return (
            connectDropTarget(
            connectDragSource(
            <div className={className}>
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