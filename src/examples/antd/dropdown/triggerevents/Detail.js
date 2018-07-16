import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message } from 'quant-ui';

const onClick = function ({ key }) {
	message.info('Click on item' + key);
};
  
  	const menu = (
		<Menu onClick={onClick}>
			<Menu.Item key="1">1st menu item</Menu.Item>
			<Menu.Item key="2">2nd memu item</Menu.Item>
			<Menu.Item key="3">3rd menu item</Menu.Item>
		</Menu>
 	);
class Detail extends Component {
	
	render() {
		return (
			<Dropdown overlay={menu}>
    			<a className="ant-dropdown-link" href="javascript:void(0);">
     				 Hover me, Click menu item <Icon type="down" />
    			</a>
  			</Dropdown>
		);
	}
}
export default Detail;
