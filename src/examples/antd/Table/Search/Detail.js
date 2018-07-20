import React, { Component } from 'react';
import { Table, Button, Input, Icon, Card } from 'quant-ui';
import './style.less'


const dataSource = [
    {
        name: 'Taylor Swift',
        age: '22',
        address: 'SanFrancisco'
    },
    {
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        address: 'HongKong'
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
        searchText: '',
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
        })
    }

    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                    <div className='custom-filter-dropdown'>

                        <Input
                            ref={ele => this.searchInput = ele}
                            placeholder='Search name'
                            value={selectedKeys[0]}
                            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={this.handleSearch(selectedKeys, confirm)}
                        />
                        <Button type='primary' onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
                        <Button onClick={this.handleReset(clearFilters)}>Reset</Button>



                    </div>
                ),
                filterIcon: filtered => <Icon type='search' style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
                onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: (visible) => {
                    if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus()
                        })
                    }
                },
                render: (text) => {
                    const { searchText } = this.state;
                    return searchText ? (
                        <span>
                            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                                fragment.toLowerCase() === searchText.toLowerCase()
                                    ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
                            ))}
                        </span>
                    ) : text
                }

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
                filters: [
                    { text: 'HongKong', value: 'HongKong' },
                    { text: 'SanFrancisco', value: 'SanFrancisco' }
                ],
                onFilter: (value, record) => record.address.includes(value),

            },

        ]

        return (
            <div>
                <Table columns={columns} dataSource={dataSource} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Detail;

