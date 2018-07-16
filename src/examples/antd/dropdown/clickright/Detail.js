import React, { Component } from 'react';
import { Menu, Dropdown } from 'quant-ui';

const menu = (
	<Menu>
	  	<Menu.Item key="1">1st menu item</Menu.Item>
	  	<Menu.Item key="2">2nd menu item</Menu.Item>
	  	<Menu.Item key="3">3rd menu item</Menu.Item>
	</Menu>
);
  
class Detail extends Component {
	
	render() {
		return (
			<Dropdown overlay={menu} trigger={['contextMenu']}>
    			<span style={{ userSelect: 'none' }}>Right Click on Me</span>
  			</Dropdown>
		);
	}
}
export default Detail;
