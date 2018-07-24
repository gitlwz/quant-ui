import React, { Component } from 'react';
import { TreeSelect } from 'quant-ui';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [{
	title: 'Node1',
	value: '0-0',
	key: '0-0',
	children: [{
		title: 'Child Node1',
		value: '0-0-0',
		key: '0-0-0',
	}],
}, {
	title: 'Node2',
	value: '0-1',
	key: '0-1',
	children: [{
		title: 'Child Node3',
		value: '0-1-0',
		key: '0-1-0',
	}, {
		title: 'Child Node4',
		value: '0-1-1',
		key: '0-1-1',
	}, {
		title: 'Child Node5',
		value: '0-1-2',
		key: '0-1-2',
	}],
}];


class Detail extends Component {
	state = {
		value: ['0-0-0'],
	}

	onChange = (value) => {
		console.log('onChange ', value);
		this.setState({ value });
	}

	render() {
		const tProps = {
			treeData,
			value: this.state.value,
			onChange: this.onChange,
			treeCheckable: true,
			showCheckedStrategy: SHOW_PARENT,
			searchPlaceholder: 'Please select',
			style: {
				width: 300,
			},
		};
		return <TreeSelect {...tProps} />;
	}
}

export default Detail;
