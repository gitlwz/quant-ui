import React, { Component } from 'react';
import { QContextMenu, Button} from 'quant-ui';
let { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } = QContextMenu;
const onClick = ({ event, ref, data, dataFromProvider }) => alert('Hello');

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'none',
        };
    }
    MyAwesomeMenu = () => (
        <ContextMenu animation={this.state.animation} id='menu_id3'>
            <Item onClick={onClick}>Lorem</Item>
            <Item onClick={onClick}>Ipsum</Item>
            <Separator />
            <Item disabled>Dolor</Item>
            <Separator />
            <Submenu label="Foobar" arrow="🦄">
                <Item onClick={onClick}>Foo</Item>
                <Item onClick={onClick}>Bar</Item>
            </Submenu>
        </ContextMenu>
    );
    _onClick(animation){
        this.setState({
            animation:animation
        })
    }
    render() {
        return (
            <div>
                Animation:
                <Button onClick={()=>this._onClick("fade")}>fade</Button>
                <Button  onClick={()=>this._onClick("flip")}>flip</Button>
                <Button onClick={()=>this._onClick("pop")}>pop</Button>
                <Button  onClick={()=>this._onClick("zoom")}>zoom</Button>
                <ContextMenuProvider id="menu_id3">
                    <h1>我是环境菜单</h1>
                </ContextMenuProvider>
                {this.MyAwesomeMenu()}
            </div>
        );
    }
}

export default Detail;
