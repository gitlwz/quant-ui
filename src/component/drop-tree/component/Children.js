import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { createDragPreview } from 'react-dnd-text-dragpreview'
import isFunction from 'lodash/isFunction';
import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } from 'react-contexify';
import Icon from '../../icon';
import language from '../../language';
import 'react-contexify/dist/ReactContexify.min.css';
const $ = language.getLanguageData;
const knightSource = {
    beginDrag(props) {
        props.onDrageFromTo("from", props.data)
        return {};
    },
    canDrag(props) {
        return !props.forbidDrag
    }
};
var dragPreviewStyle = {
    backgroundColor: 'rgb(68, 67, 67)',
    borderColor: '#F96816',
    color: 'white',
    fontSize: 15,
    paddingTop: 4,
    paddingRight: 7,
    paddingBottom: 6,
    paddingLeft: 7
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    }
}
language.setLanguageData({
    'en_US': {
        "添加节点": "add",
        "删除节点": "delete",
    },
})
class App extends Component {
    static defaultProps = {
        width: 100,
        isEditItem: true
    };
    formatDragMessage = () => {
        return `Moving`
    }
    componentDidMount() {
        // handles first time dragPreview setup
        this.dragPreview = createDragPreview(this.formatDragMessage(), dragPreviewStyle)
        this.props.connectDragPreview(this.dragPreview)
    }
    componentDidUpdate(prevProps) {
        // handles updates to the dragPreview image as the dynamic numRows value changes
        this.dragPreview = createDragPreview(this.formatDragMessage(), dragPreviewStyle, this.dragPreview)
    }
    MyAwesomeMenu = () => {
        let itemData = this.props.data;
        return (
            <ContextMenu animation="zoom" id={"menu_id" + itemData.id}>
                <Item onClick={() => this.props._addOneItem(itemData)}><Icon type="plus" /><label style={{ marginLeft: 5 }}>{$('添加节点')}</label></Item>
                <Separator />
                <Item onClick={() => this.props._deleteOneItem(itemData)}><Icon type="delete" /><label style={{ marginLeft: 5 }}>{$('删除节点')}</label></Item>
            </ContextMenu>
        )
    };
    _onClick = (item) => {
        if (isFunction(this.props.onClick)) {
            this.props.onClick(item)
        }
    }
    _render = (item) => {
        return isFunction(this.props.renderItem) ? this.props.renderItem(item) : item.name
    }
    render() {
        let item = this.props.data;
        let colSpan = item.childrens.length * 2;
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div className="node"
                onClick={() => this._onClick(item)}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 12,
                    cursor: this.props.forbidDrag?'not-allowed':'move',
                    width: this.props.width,
                }}>
                <ContextMenuProvider width={this.props.width} id={"menu_id" + item.id}>
                    <div style={{ minHeight: 50 }}>
                        {this._render(item)}
                    </div>
                </ContextMenuProvider>
                {this.props.isEditItem == "true" ? this.MyAwesomeMenu() : null}
            </div>
        )
    }
}
export default DragSource("Childern", knightSource, collect)(App);
