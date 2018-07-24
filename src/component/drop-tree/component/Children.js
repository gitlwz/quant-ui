import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import isFunction from 'lodash/isFunction';
import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider  } from 'react-contexify';
import  Icon from '../../icon';
import language  from '../../language';
import 'react-contexify/dist/ReactContexify.min.css';
const $ = language.getLanguageData;
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
language.setLanguageData({
	'en_US':{
		"添加节点":"add",
		"删除节点":"delete",
	},
})
class App extends Component {
    static defaultProps = {
        width: 100,
        isEditItem: true
    };
    MyAwesomeMenu = () => {
        let itemData = this.props.data;
        return (
            <ContextMenu animation="zoom" id={"menu_id" + itemData.id}>
                <Item onClick={()=>this.props._addOneItem(itemData)}><Icon type="plus" /><label style={{marginLeft:5}}>{$('添加节点')}</label></Item>
                <Item onClick={()=>this.props._deleteOneItem(itemData)}><Icon type="delete" /><label style={{marginLeft:5}}>{$('删除节点')}</label></Item>
            </ContextMenu>
     )
    };
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
        <div className="node"
            onClick = {()=>this._onClick(item)}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 12,
                cursor: 'move',
                width:this.props.width,
            }}>
            <ContextMenuProvider width={this.props.width} id={"menu_id" + item.id}>
            <div style={{minHeight:50}}>
                    {this._render(item)}
            </div>
            </ContextMenuProvider>
            {this.props.isEditItem == "true"?this.MyAwesomeMenu():null}
        </div>
        )
    }
}
export default DragSource("Childern", knightSource, collect)(App);
