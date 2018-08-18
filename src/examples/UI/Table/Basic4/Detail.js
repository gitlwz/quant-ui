import React, { Component } from 'react';
import { EntryTable ,Button,Divider } from 'quant-ui';
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
	id: '11',
	age: 32,
	address:"sh",
	address1: "北京",
	birthday: new Date()
}];
class Detail extends Component {
	constructor(props) {
		super(props);
	}
	addLastRow = () =>{
		let {table} = this.refs
		table.addLastRow({
				name: '锦涛',
				id: new Date().getTime(),
				age: 11,
			})
	}
	deleteRow = () =>{
		let {table} = this.refs;
		let keys = table.getSelectedRowKeys();
		table.deleteRow(keys)
	}
	getSelectedRowKeys = () =>{
		let {table} = this.refs;
		let keys = table.getSelectedRowKeys();
		alert(keys)
	}
	getRowDataBySelectedAll = () =>{
		let {table} = this.refs;
		let datas = table.getRowDataBySelectedAll();
		alert(JSON.stringify(datas))
	}
	setSelectedKeys = () => {
		let {table} = this.refs;
		table.setSelectedKeys(["11"]);
	}
	setSelectedKeysdel = () =>{
		let {table} = this.refs;
		table.setSelectedKeys([]);
	}
	getCheckboxProps = (record) =>{
		if(this.flag == true){
			if(!!record.address && record.address.value =="sh"){
				return {
					disabled:true
				}
			}else{
				return {
					disabled:false
				}
			}
		}else{
			return {
				disabled:false
			}
		}
	}
	render() {
		return (
			<div>
				<div>
					<Button onClick={this.addLastRow}>添加末尾</Button>
					<Divider type="vertical" />
					<Button onClick={this.deleteRow}>删除勾选行</Button>
					<Divider type="vertical" />
					<Button onClick={this.getSelectedRowKeys}>获取勾选行key</Button>
					<Divider type="vertical" />
					<Button onClick={this.getRowDataBySelectedAll}>获取勾选行数据</Button>
					<Divider type="vertical" />
					<Button onClick={this.setSelectedKeys}>设置id为11的勾选中</Button>
					<Divider type="vertical" />
					<Button onClick={this.setSelectedKeysdel}>清空勾选</Button>
					<Divider type="vertical" />
					<Button onClick={()=>{this.flag = true}}>设置住址选择上海的不可勾选</Button>
				</div>

				<EntryTable
					ref="table"
					getCheckboxProps = {this.getCheckboxProps}
					scroll={{ y: 300 }}
					dataSource={dataSource}
					showSelection={true}   //显示勾选行
					columns={columns}
					cellOnChange={this.cellOnChange}
					rowKey="id"
				></EntryTable>
			</div>
		);
	}
}
export default Detail;
