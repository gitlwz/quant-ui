import React, { Component } from 'react'
import { Table } from 'quant-ui'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }];

const dataSource = [];
for (let i = 1; i <= 77; i++) {
    dataSource.push({
        key: i,
        name: `Eason Chan ${i}`,
        age: (new Date().getFullYear() - 1974).toString(),
        address: `HongKong Maple Street ${i}`

    })
}

class Detail extends Component {
    state = {
        selectedRowKeys: [],
    };

    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all_data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({ selectedRowKeys: [...Array(77).keys()] })
                    }
                }, {
                    key: 'odd',
                    text: 'Select Odd Data',
                    onSelect: (changeableRowKeys) => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) return false;
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'Even',
                    text: 'Select Even Data',
                    onSelect: (changeableRowKeys) => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) return true;
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                }
            ]
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    onRow={(record) => ({
                        onClick: () => {
                            this.selectRow(record);
                        },
                    })}
                />
            </div>
        )
    }
}

export default Detail;