import React, { Component } from 'react';
import { EntryTable } from 'quant-ui';
const columns = [{
	title: '姓名(input)',
	dataIndex: 'name',
	type: 1,
	width: 200,
	key: 'name',
}, {
	title: '年龄(数字)',
	dataIndex: 'age',
	key: 'age',
	type: 2,
	width: 200,
}, {
	title: '住址(下拉选择)',
	dataIndex: 'address',
	key: 'address',
	type: 3,
	width: 200,
	option: [{
		name: "上海",
		value: "sh"
	}, {
		name: "北京",
		value: "bg"
	}, {
		name: "广州",
		value: "gz"
	}],

}, {
	title: '住址(模糊匹配)',
	dataIndex: 'address1',
	key: 'address1',
	type: 4,
	width: 200,
	autooption: ["上海", "北京", "广州",],
}, {
	title: '生日(日期)',
	dataIndex: 'birthday',
	key: 'birthday',
	type: 5,
	width: 200,
}];


const dataSource = [{
	key: '1',
	name: '胡彦斌',
	id: '2222222222',
	age: 32,
	address: { value: "sh" },
	address1: "北京",
	birthday: new Date()
}];
class Detail extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				<EntryTable
					ref="table"
					scroll={{ y: 300 }}
					dataSource={dataSource}
					columns={columns}
					cellOnChange={this.cellOnChange}
					rowKey="id"
				></EntryTable>
			</div>
		);
	}
}
export default Detail;
