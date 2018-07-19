import React, { Component } from 'react';
import { Table, Icon, Divider } from 'quant-ui';

const dataSource = [
    {
        name: 'Taylor Swift',
        age: '22',
        adress: 'SanFrancisco'
    },
    {
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        adress: 'Hongkong'
    },
    {
        name: 'Jimmy',
        age: '12',
        adress: 'Shanghai'
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
        title: 'Adress',
        dataIndex: 'adress',
        key: 'adress',

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
            <Table columns={columns} dataSource={dataSource} />
        )
    }
}

export default Detail;

