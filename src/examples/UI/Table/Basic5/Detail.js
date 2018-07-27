import React, { Component } from 'react';
import { EntryTable ,Button,Divider } from 'quant-ui';
const columns = [{
	title: '姓名(input)',
	dataIndex: 'name',
	type: 1,
	width: 200,
	key: 'name',
},{
	title: '年龄(数字)',
	dataIndex: 'age',
	key: 'age',
	type: 2,
	width: 200,
}, {
	title: '加数(数字)',
	dataIndex: 'num1',
	key: 'num1',
	type: 2,
	width: 200,
}, {
	title: '被加数(数字)',
	dataIndex: 'num2',
	key: 'num2',
	type: 2,
	width: 200,
},{
	disabled:true,
	title: '合计(数字)',
	dataIndex: 'sum',
	key: 'sum',
	type: 2,
	width: 200,
},{
	disabled:true,
	title: '生日(日期)',
	dataIndex: 'birthday',
	key: 'birthday',
	type: 5,
	width: 200,
}];


const dataSource = [{
	key: '1',
	name: '胡彦斌',
	id: '111',
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

	cellOnChange = (newValue,oldValue,record,index,column) =>{
		let {table} = this.refs;
		if(column == "num1" ){
			let num1 = newValue ||0;
			let num2 = record.num2 ||0;
			this.add(num1,num2,record)
		}
		if(column == "num2" ){
			let num1 = record.num1 ||0;
			let num2 = newValue ||0;
			this.add(num1,num2,record)
		}

		if(column == "age"){
			if(newValue > 50){
				table.addDisabled(record.id,"name")
			}else{
				table.removeDisabled(record.id,"name")
			}
		}
	}
	add = (num1,num2,record) =>{
		let {table} = this.refs;
		let sum = num1 + num2;
		table.saveCellData(record.id,"sum",sum)
		if(sum > 100){
			table.saveCellData(record.id,"birthday",new Date())
		}else{
			table.saveCellData(record.id,"birthday",null)
		}
	}
	render() {
		return (
			<div>
				<div>
					<Button onClick={this.addLastRow}>添加末尾</Button>
					<Divider type="vertical" />
					<Button onClick={this.deleteRow}>删除勾选行</Button>
					<h3>加数+被加数 = 合计</h3>
					<h3>当合计大于100时设置生日为当前时间</h3>
					<h3>当年龄大于50时，名称不可操作</h3>
				</div>
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
