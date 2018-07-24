import React, { Component } from 'react';
import { Table, Icon, Divider } from 'quant-ui';

const dataSource = [
    {
        name: 'Taylor Swift',
        age: '22',
        address: 'SanFrancisco'
    },
    {
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        address: 'Hongkong'
    },
    {
        name: 'Jimmy',
        age: '12',
        address: 'Shanghai'
    },
    
]

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',

    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href='javascript:;'>Action - {record.name}</a>
                <Divider type='vertical' />
                <a href='javascript:;'>Delete</a>
                <Divider type='vertical' />
                <a href='javascript:;' className='ant-dropdown-link'>More actions <Icon type='down' /></a>
            </span>
        )
    },

]

class Detail extends Component {
    render() {
        return (
            <Table columns={columns} 
            dataSource={dataSource}
            bordered
            title={()=>'header'}
            footer={()=>'footer'} />
        )
    }
}

export default Detail;

