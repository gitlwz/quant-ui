import React, { Component } from 'react';
import { Table } from 'quant-ui';
const columns = [{
    title: '参数',
    dataIndex: 'parameter',
    key: 'parameter',
    width: 150,
}, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: 100,
},
{
    title: '是否必须',
    dataIndex: 'must',
    key: 'must',
    width: 100,
}, {
    title: '默认值',
    dataIndex: 'default',
    key: 'default',
    width: 100,
},
{
    title: '说明',
    dataIndex: 'instructions',
    key: 'instructions',
    width: 200,
}];

class API extends Component {
    render() {
        return (<div>

            <div style={{padding:"20px", 'backgroundColor': "#fff", overflowX: "auto" }}>
                <div style={{ minWidth: "600px", }}>
                    <h2>{this.props.title}</h2>
                    <Table bordered pagination={false} dataSource={this.props.data.api} columns={columns} />
                </div>
            </div>
        </div>
        )
    }
}

export default API;
