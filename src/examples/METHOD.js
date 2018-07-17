import React, { Component } from 'react';
import { Table } from 'quant-ui';
const columns = [{
    title: '名称',
    dataIndex: 'function',
    key: 'function',
    width: 150,
}, {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: 100,
},];

class METHOD extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.method.length>0?this.props.data.method.map((ele)=>{
                        return (
                            <div style={{padding:"20px",marginBottom:"20px", 'backgroundColor': "#fff", overflowX: "auto" }}>
                                <div style={{ minWidth: "600px", }}>
                                    <h2>{ele.title}</h2>
                                    <Table bordered pagination={false} dataSource={ele.method} columns={columns} />
                                </div>
                            </div>
                        )
                    }):<div style={{padding:"20px",marginBottom:"20px", 'backgroundColor': "#fff", overflowX: "auto" }}>
                            <div style={{ minWidth: "600px", }}>
                                <Table bordered pagination={false} dataSource={[]} columns={columns} />
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default METHOD;
