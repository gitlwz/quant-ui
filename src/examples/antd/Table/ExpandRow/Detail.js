import React, { Component } from 'react';
import { Table, Icon, Divider } from 'quant-ui';

const dataSource = [
    {
        name: 'Taylor Swift',
        age: '22',
        address: 'SanFrancisco',
        description: 'A female singer'
    },
    {
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        address: 'Hongkong',
        description: 'A funny singer'
    },
    {
        name: 'Jimmy',
        age: '12',
        address: 'Shanghai',
        description: 'A cute boy'
    },

]

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
                expandedRowRender={(record) => <p style={{ margin: 0 }}>{record.description}</p>}
            />
        )
    }
}

export default Detail;

