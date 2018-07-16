import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'quant-ui';

const menu = (
	<Menu>
	  	<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
	  	</Menu.Item>
	  	<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
	  	</Menu.Item>
	  	<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
	  	</Menu.Item>
	</Menu>
  );
  
class Detail extends Component {
	
	render() {
		return (
			<div>
				<Dropdown overlay={menu} placement="bottomLeft">
					<Button>bottomLeft</Button>
				</Dropdown>
				&nbsp;
				<Dropdown overlay={menu} placement="bottomCenter">
					<Button>bottomCenter</Button>
				</Dropdown>
				&nbsp;
				<Dropdown overlay={menu} placement="bottomRight">
					<Button>bottomRight</Button>
				</Dropdown>
				<br /><br />
				<Dropdown overlay={menu} placement="topLeft">
					<Button>topLeft</Button>
				</Dropdown>
				&nbsp;
				<Dropdown overlay={menu} placement="topCenter">
					<Button>topCenter</Button>
				</Dropdown>
				&nbsp;
				<Dropdown overlay={menu} placement="topRight">
					<Button>topRight</Button>
				</Dropdown>
			</div>
		);
	}
}
export default Detail;
