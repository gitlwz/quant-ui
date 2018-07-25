import React, { Component } from 'react'
import { Table, Button } from 'quant-ui'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key:'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key:'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key:'address',
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
        data: dataSource,
    };

    delete = () => {
        const { selectedRowKeys, data } = this.state;
        console.log('select ', selectedRowKeys);
        selectedRowKeys.forEach(element => {
            let position = data.findIndex((value) => { return value.key == element });
            data.splice(position, 1);
        })
        this.setState({
            selectedRowKeys: [],
            data: data,
        })
              
    }
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
        const { selectedRowKeys, data } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,

        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.delete}
                        disabled={!hasSelected}
                    >
                        Delete
                </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
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