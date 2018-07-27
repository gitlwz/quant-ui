import React, { Component } from 'react';
import { Table } from 'quant-ui';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filter: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
        width: '20%'

    },
    {
        title: 'Email',
        dataIndex: 'email',
    },

]

class Detail extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.getData({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    getData = (params = {}) => {
        console.log('params---', params);
        this.setState({ loading: true });
        fetch('https://randomuser.me/api?results=10', {
            method: 'GET',
            type: 'json',
            
        }).then((res) => {
            res.text().then((value) => {
                let data = JSON.parse(value);
                console.log(data);
                const pagination = { ...this.state.pagination };
                pagination.total = 200;
                this.setState({
                    loading: false,
                    data: data.results,
                    pagination,
                })
            })
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />)
    }
}

export default Detail;

