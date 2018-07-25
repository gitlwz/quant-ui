import React, { Component } from 'react';
import { QContextMenu, Button} from 'quant-ui';
let { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } = QContextMenu;
const onClick = ({ event, ref, data, dataFromProvider }) => alert('Hello');

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        };
    }
    MyAwesomeMenu = () => (
        <ContextMenu theme={this.state.theme} id='menu_id2'>
            <Item onClick={onClick}>Lorem</Item>
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
    _onClick(theme){
        this.setState({
            theme:theme
        })
    }
    render() {
        return (
            <div>
                Theme:<Button onClick={()=>this._onClick("light")}>light</Button>
                    <Button  onClick={()=>this._onClick("dark")}>dark</Button>
                <ContextMenuProvider id="menu_id2">
                    <h1>我是环境菜单</h1>
                </ContextMenuProvider>
                {this.MyAwesomeMenu()}
            </div>
        );
    }
}

export default Detail;
