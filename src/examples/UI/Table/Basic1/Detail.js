import React, { Component } from 'react';
import { EntryTable,Button, Divider } from 'quant-ui';
const columns = [{
	title: '姓名',
	dataIndex: 'name',
	type: 1,
	width:200,
	key: 'name',
}, {
	title: '年龄',
	dataIndex: 'age',
	key: 'age',
	type: 2,
	width:200,
	API: {
		precision: 2,
		max: 100,
		min: 0
	}
}, {
	title: '住址',
	dataIndex: 'address222',
	key: 'address',
	width:200,
	option:[{
		name:"1111122222222222222222222222222222222222222222222222222221",
		value:"2222222"
	}],
	type: 3
}, {
	title: '住址',
	dataIndex: 'address333',
	key: 'address',
	width:200,
	type: 4
}, {
	title: '住址',
	dataIndex: 'address444',
	key: 'address',
	width:200,
	type: 5
}, {
	title: '住址',
	dataIndex: 'address555',
	key: 'address',
	width:200,
	type: 6
}];


const dataSource = [{
	key: '1',
	name: '胡彦斌',
	id: '2222222222',
	age: 32,
	address: '西湖区湖底公园1号'
}, {
	key: '2',
	name: '张国荣',
	id: "444444444444",
	age: 42,
	address: '西湖区湖底公园1号'
}];
class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataJSON: ""
		}
	}
	getDataSource = () => {
		let data = this.refs.table.getSelectedRowKeys();
		this.setState({
			dataJSON: JSON.stringify(data)
		})
	}
	addLastRow = () => {
		let table = this.refs.table;
		table.addLastRow({
			key: (new Date().getTime()) + "" + Math.random() * 2,
			name: "锦涛"
		})
	}
	cellOnChange = (value, oldvalue, record, index, column) => {
		console.log("7777777777777777",value, oldvalue, record, index, column)
		// this.setState({
		// 	dataJSON: `
		// 		vale:${value},
		// 		oldvalue:${oldvalue},
		// 		record:${record.toString()},
		// 		index:${index},
		// 		column:${column}
		// 	`
		// })
	}
	disabled = () => {
		let table = this.refs.table;
		table.addDisabled('2222222222', 'name')
	}
	showAllApi = () => {
		this.setState({
			dataJSON: `getDataSource：获取所有数据、getColumns：获取所有配置项、getAPI：获取表格API、getSelectedRowKeys：获取选中项keys、getRowDataBySelectedAll：获得所有选中的数据、getRowDataByKeys：获取数据通过keys、`
		})
	}

	nextPage = () => {
		let table = this.refs.table;
		table.addDisabled(2, 'name')
	}
	render() {
		return (
			<div>
				<Button onClick={this.getDataSource} type="primary">拿到3333数据</Button>

				<Divider type="vertical" />

				<Button onClick={this.addLastRow} type="primary">加3333一行2222</Button>

				<Divider type="vertical" />

				<Button onClick={this.disabled} type="primary">修改为不可操作</Button>

				<Divider type="vertical" />

				<Button onClick={this.showAllApi} type="primary">showAllApi</Button>

				<Divider type="vertical" />

				<Button onClick={this.nextPage} type="primary">下一页</Button>

				<p>{this.state.dataJSON}</p>
				<EntryTable
					ref="table"
					dataSource={dataSource}
					showSelection ={true}
					columns={columns}
					cellOnChange = {this.cellOnChange}
					rowKey="id"
				></EntryTable>
			</div>
		);
	}
}
export default Detail;
