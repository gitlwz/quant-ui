import React, { Component } from 'react';
import { EntryTable } from 'quant-ui';
const cascaderoption = [{
	value: 'zhejiang',
	name: 'Zhejiang',
	children: [{
		value: 'hangzhou',
		name: 'Hangzhou',
		children: [{
			value: 'xihu',
			name: 'West Lake',
		}, {
			value: 'xiasha',
			name: 'Xia Sha',
			disabled: true,
		}],
	}],
}, {
	value: 'jiangsu',
	name: 'Jiangsu',
	children: [{
		value: 'nanjing',
		name: 'Nanjing',
		children: [{
			value: 'zhonghuamen',
			name: 'Zhong Hua men',
		}],
	}],
}]
const columns = [{
	title: '编号(展示)',
	dataIndex: 'num',
	type: 0,
	width: 200,
	key: 'num',
},{
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
	option:"select" ,

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
}, {
	title: '(级联选择)',
	dataIndex: 'cascader',
	key: 'cascader',
	type: 6,
	width: 200,
	cascaderoption: cascaderoption
}, {
	title: '开关',
	dataIndex: 'switch',
	key: 'switch',
	type: 7,
	width: 200,
	cascaderoption: cascaderoption
}];


const dataSource = [{
	key: '1',
	num:"SD00012B",
	name: '胡彦斌',
	id: '11',
	age: 32,
	address:  "sh" ,
	address1: "北京",
	birthday: new Date()
}];
class Detail extends Component {
	constructor(props) {
		super(props);
    }
	cellOnChange = (newValue,oldValue,record,index,column) =>{
		console.log("发生改变",newValue,oldValue,record,index,column)
    }
    onClick = () => {
        this.refs.table.setOptions({
            select:[{
                name: "上海",
                value: "sh"
            }, {
                name: "北京",
                value: "bg"
            }, {
                name: "广州",
                value: "gz"
            }]
        })
    }
	render() {
		return (
			<div>
                <button onClick={this.onClick}>aaa</button>
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
