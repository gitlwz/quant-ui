import React, { Component } from 'react';
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import isFunction  from 'lodash/isFunction';
import Card from "./Card";
const cardTarget = {
    drop() {
		//
	},
}
class Title extends Component {
    moveCard = (startDataIndex, endDataIndex) => {
		if(isFunction(this.props.moveCard)){
            this.props.moveCard(startDataIndex, endDataIndex)
        }
	}
    render() {
    const { connectDropTarget,text ,collocate} = this.props

        return (
            connectDropTarget&&
            connectDropTarget(
                <div style={{ width: "100%" }}>
                    <Card 
                        collocate = {collocate}
                        text = {text}
                        moveCard={this.moveCard} 
                    />
                </div>
            )
        );
    }
}

export default DragDropContext(HTML5Backend)(DropTarget("title",cardTarget,connect => ({
	connectDropTarget: connect.dropTarget(),
}))(Title));
