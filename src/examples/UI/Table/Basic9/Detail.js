import React, { Component } from 'react';
import {EntryTable,screenfull,Button} from 'quant-ui';

const columns = [{
    title: '编号(展示)',
    dataIndex: 'num',
    type: 0,
    width: 200,
	key: 'num',
	fixed:"left",
},{
    title: '姓名(input)',
    dataIndex: 'name',
    type: 1,
    width: 200,
    disabled:true,
    key: 'name',
}, {
    title: '年龄(数字)',
    dataIndex: 'age',
    key: 'age',
    disabled:true,
    type: 2,
    width: 200,
}, {
    title: '住址(下拉选择)',
    dataIndex: 'address',
    key: 'address',
    disabled:true,
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
}];
const dataSource = [{
    key: '1',
    num:"SD00012B",
    name: '胡彦斌',
    id: '11',
    age: 32,
    address: { value: "sh",name:"上海" },
    birthday: new Date()
}];
class Detail extends Component {
    
    screenFullDom = () =>{
		window.onresize = null;
		if (screenfull.enabled) {
			screenfull.request(this.refs.div);
		}
	}

	render() {
		return (
            <div>
                <Button onClick={this.screenFullDom}>配合全屏方法使用</Button>
				<br/><br/>
                <div ref="div">
                    <EntryTable
                        ref="table"
                        scroll={{ y: 300 }}
                        drop={true}
                        sizable={true}
                        dataSource={dataSource}
                        columns={columns}
                        cellOnChange={this.cellOnChange}
                        rowKey="id"
                    ></EntryTable>
                </div>
            </div>
			
		);
	}
}
export default Detail;
