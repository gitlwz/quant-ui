import React, { Component } from 'react';
import { QContextMenu, Button} from 'quant-ui';
let { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } = QContextMenu;
const onClick = ({ event, ref, data, dataFromProvider }) => {
    console.log(event.clientX, event.clientY);//指本机事件，可以返回点击位置
    console.log(ref.props);//ref指ContextMenuProvider 组件中，声明为类的react组件的实例
    console.log(data);//传入的数据对象
};

const MyAwesomeMenu = () => (
    <ContextMenu id='menu_id'>
        <Item data={{name:'lorem'}} onClick={onClick}>Lorem</Item>
        <Item onClick={onClick}>Ipsum</Item>
        <Separator />
        <Item disabled>Dolor</Item>
        <Separator />
        <Submenu label="Foobar">
            <Item onClick={onClick}>Foo</Item>
            <Item onClick={onClick}>Bar</Item>
        </Submenu>
    </ContextMenu>
);
class Detail extends Component {
    render() {
        return (
            <div>
                <ContextMenuProvider id="menu_id">
                    <h1>右击我</h1>
                </ContextMenuProvider>
                <ContextMenuProvider event="onClick" id="menu_id">
                    <h1>单击我</h1>
                </ContextMenuProvider>
                <ContextMenuProvider event="onDoubleClick" id="menu_id">
                    <h1>双击我</h1>
                </ContextMenuProvider>
                <MyAwesomeMenu />
            </div>
        );
    }
}

export default Detail;
