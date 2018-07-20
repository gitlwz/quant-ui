import React, { Component } from 'react';
import { Table, Button} from 'quant-ui';

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
        name: 'Eason Liu',
        age: (new Date().getFullYear() - 1974).toString(),
        address: 'London'
    },
    {
        name: 'Jimmy Smith',
        age: '12',
        address: 'Shanghai'
    },
    {
        name: 'Jimmy Lee',
        age: '21',
        address: 'Beijing'
    },

]

class Detail extends Component {
    state = {
        filterInfo: null,
        sortInfo: null,
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameter', pagination, filters, sorter);
        this.setState({
            filterInfo: filters,
            sortInfo: sorter,
        })
    }

    clearFilter = () => {
        this.setState({
            filterInfo: null,
        })
    }

    clearAll = () => {
        this.setState({
            filterInfo: null,
            sortInfo: null,
        })
    }

    setAgeSort = () => {
        this.setState({
            sortInfo: {
                order: 'descend',
                columnKey: 'age',
            }
        })
    }

    render() {
        let { sortInfo, filterInfo } = this.state;
        sortInfo = sortInfo || {};
        filterInfo = filterInfo || {};

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                    { text: 'Eason', value: 'Eason' },
                    { text: 'jimmy', value: 'jimmy' },
                ],
                filterValue: filterInfo || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortInfo.columnKey === 'name' && sortInfo.order,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortInfo.columnKey === 'age' && sortInfo.order,

            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    { text: 'HongKong', value: 'HongKong' },
                    { text: 'SanFrancisco', value: 'SanFrancisco' }
                ],
                filterValue: filterInfo.address || null,
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortInfo.columnKey === 'adress' && sortInfo.order,

            },

        ]

        return (
            <div>
                <div className='table-operations'>
                    <Button onClick={this.setAgeSort}>Sort Age</Button>
                    <Button onCLick={this.clearFilter}> Clear Filter</Button>
                    <Button onClick={this.clearAll}>Clear All </Button>
                </div>
                <Table columns={columns} dataSource={dataSource} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Detail;

