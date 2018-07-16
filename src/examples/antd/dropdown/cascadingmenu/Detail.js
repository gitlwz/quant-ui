import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'quant-ui';

const SubMenu = Menu.SubMenu;

const menu = (
  	<Menu>
    	<Menu.Item>1st menu item</Menu.Item>
    	<Menu.Item>2nd menu item</Menu.Item>
    	<SubMenu title="sub menu">
			<Menu.Item>3rd menu item</Menu.Item>
			<Menu.Item>4th menu item</Menu.Item>
    	</SubMenu>
    	<SubMenu title="disabled sub menu" disabled>
			<Menu.Item>5d menu item</Menu.Item>
			<Menu.Item>6th menu item</Menu.Item>
    	</SubMenu>
  	</Menu>
);
class Detail extends Component {
	
	render() {
		return (
			<Dropdown overlay={menu}>
    			<a className="ant-dropdown-link" href="javascript:void(0);">
      				Cascading menu <Icon type="down" />
    			</a>
  			</Dropdown>
		);
	}
}
export default Detail;
