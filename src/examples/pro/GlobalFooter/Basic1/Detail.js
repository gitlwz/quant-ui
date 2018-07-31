import React, { Component } from 'react';
import { Icon, GlobalFooter } from 'quant-ui';

const links = [{
	key: '帮助',
	title: '帮助',
	href: '',
}, {
	key: 'github',
	title: <Icon type="github" />,
	href: 'https://github.com/ant-design/ant-design-pro',
	blankTarget: true,
}, {
	key: '条款',
	title: '条款',
	href: '',
	blankTarget: true,
}];

const copyright = <div>Copyright <Icon type="copyright" /> 量投科技</div>;
class Detail extends Component {

	render() {
		return (
			<div style={{ background: '#f5f5f5', overflow: 'hidden' }}>
				<div style={{ height: 280 }} />
				<GlobalFooter links={links} copyright={copyright} />
			</div>
		);
	}
}
export default Detail;
