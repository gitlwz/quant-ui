import React, { Component } from 'react';
import { EntryTable,Button,Divider } from 'quant-ui';
const columns = [];
for(let i = 0; i < 10 ; i++){
	columns.push({
		title: '列-'+i,
		dataIndex: "dataIndex" + i,
		width: 200,
		key: i,
	})
}
const dataSource = [];
for (let i = 0; i < 10; i++) {
	dataSource.push({
		key: i,
		dataIndex0: i,
		dataIndex1: i,
		dataIndex2: i,
		dataIndex3: i,
		dataIndex4: i,
		dataIndex5: i,
		dataIndex6: i,
		dataIndex7: i,
		dataIndex8: i,
		dataIndex9: i,
		id: i,
	})
}
const colSpanf = (text,record,index,dataIndex,collocate,len) =>{
	if(collocate.key === 3 && record.key === 4 ){
		return {
			colSpan:2
		}
	}
	if(collocate.key === 4 && record.key === 4 ){
		return {
			colSpan:0
		}
	}
	return {}
}
const props = (text,record,index,dataIndex,collocate,len) =>{
	if (index === 2) {
		return {
			rowSpan:3
		}
	}
	if (index === 3) {
		return {
			rowSpan:0
		}
	}
	if (index === 4) {
		return {
			rowSpan:0
		}
	}
	return {}
}
class Detail extends Component {
	constructor(props) {
		super(props);

	}
	setFixed = () =>{
		let {table} = this.refs;
		let columns = table.getColumns();
		columns[0].fixed = "left";
		table.setColumns(columns)
	}

	rowspan = () => {
		let {table} = this.refs;
		let columns = table.getColumns();
		columns[1].props = props;
		table.setColumns(columns)
	}
	colSpan = () =>{
		let {table} = this.refs;
		let columns = table.getColumns();
		columns[3].props = colSpanf;
		columns[4].props = colSpanf;
		table.setColumns(columns)
	}
	hidden = () =>{
		let {table} = this.refs;
		let columns = table.getColumns();
		columns[2].show = false;
		table.setColumns(columns)
	}
	show = () =>{
		let {table} = this.refs;
		let columns = table.getColumns();
		columns[2].show = true;
		table.setColumns(columns)
	}
	render() {
		return (
			<div>
				<div>
					<Button onClick={this.setFixed}>设置第一列固定</Button>
					<Divider type="vertical" />
					<Button onClick={this.rowspan}>设置合并行</Button>
					<Divider type="vertical" />
					<Button onClick={this.colSpan}>设置合并列</Button>
					<Divider type="vertical" />
					<Button onClick={this.hidden}>隐藏第二列</Button>
					<Divider type="vertical" />
					<Button onClick={this.show}>显示第二列</Button>
				</div>
				<EntryTable
					ref="table"
					bordered
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
