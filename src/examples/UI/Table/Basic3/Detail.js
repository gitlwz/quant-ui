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
	id: '1111',
	age: 32,
	address:{name:"上海",value:"sh"},
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
	addBeforeRow = () =>{
		let {table} = this.refs
		table.addBeforeRow({
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
	getDataSource = () =>{
		let {table} = this.refs;
		console.log(table.getDataSource());
	}
	setDisabled = () =>{
		let {table} = this.refs
		let columns = table.getColumns();
		columns[0].disabled = true;
		table.setColumns(columns)
	}
	setDisabledCondition = () =>{
		let {table} = this.refs;
		let dataSource = table.getDataSource()
		let disableds = {};
		dataSource.forEach((ele)=>{
			if(!!ele.address && ele.address.value == "sh"){
				disableds[ele.id + "_age"] = true
			}
		})
		table.editDisable(disableds);
	}
	cellOnChange = (newValue,oldValue,record,index,column) =>{
		if(this.flag === true){
			let {table} = this.refs;
			if(column == "address" && newValue.value == "sh"){
				table.addDisabled(record.id,"age");
			}else if(column == "address" && newValue.value != "sh"){
				table.removeDisabled(record.id,"age");
			}
		}
	}
	render() {
		return (
			<div>
				<div>
					<Button onClick={this.addLastRow}>添加末尾</Button>
					<Divider type="vertical" />
					<Button onClick={this.addBeforeRow}>添加首位</Button>
					<Divider type="vertical" />
					<Button onClick={this.deleteRow}>删除勾选行</Button>
					<Divider type="vertical" />
					<Button onClick={this.getDataSource}>获取当前表格内数据</Button>
					<Divider type="vertical" />
					<Button onClick={this.setDisabled}>设置某一列不可操作</Button>
					<Divider type="vertical" />
					<Button onClick={this.setDisabledCondition}>设置住址为上海人员的年龄不可操作</Button>
					<Divider type="vertical" />
					<Button onClick={()=>{this.flag = true }}>设置选择住址为上海人员的年龄不可操作</Button>
				</div>

				<EntryTable
					ref="table"
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
