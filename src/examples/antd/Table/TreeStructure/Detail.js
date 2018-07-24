import React, { Component } from 'react';
import { Table, Icon, Divider } from 'quant-ui';

const dataSource = [
    {
        key: '1',
        name: 'Taylor Swift',
        age: '22',
        address: 'SanFrancisco',
        children: [
            {
                key: '11',
                name: 'Taylor Swift',
                age: '22',
                address: 'SanFrancisco',
                children:[
                    {
                        key:'111',
                        name: 'Jimmy',
                        age: '12',
                        address: 'Shanghai'
                    },
                ]
            },
            {
                key: '12',
                name: 'Taylor Swift',
                age: '22',
                address: 'SanFrancisco',
            },
            {
                key: '13',
                name: 'Taylor Swift',
                age: '22',
                address: 'SanFrancisco',
                children:[
                    {
                        key:'131',
                        name: 'Jimmy',
                        age: '12',
                        address: 'Shanghai'
                    },
                    {
                        key:'132',
                        name: 'Jimmy',
                        age: '12',
                        address: 'Shanghai'
                    },
                ]
            },
        ]
    },
    {
        key:'2',
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        address: 'Hongkong'
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
            <Table columns={columns} dataSource={dataSource} />
        )
    }
}

export default Detail;

