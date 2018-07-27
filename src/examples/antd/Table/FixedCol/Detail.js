//若列头与内容不对齐或出现列重复，请指定列的宽度 width。

//建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。

import React, { Component } from 'react';
import { Table, Icon, Divider } from 'quant-ui';

const dataSource = [
    {
        name: 'Jimmy 1',
        age: '12',
        address: `Shanghai `
    },
    {
        name: 'Jimmy 2',
        age: '18',
        address: `Shanghai `
    }
];

const columns = [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Age',
        key: 'age',
        dataIndex:'age',
        fixed: 'right',
        width: 100,
        render: (text) => <a href="javascript:;">{text}</a>,
    },

]

class Detail extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={dataSource}  scroll={{ x: 1300 }} style={{ width: '50%' }} />
        )
    }
}

export default Detail;

