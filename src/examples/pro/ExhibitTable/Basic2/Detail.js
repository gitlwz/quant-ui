import React, { Component } from 'react';
import { Icon, Divider,ExhibitTable} from 'quant-ui';

const dataSource = [
    {
        name: 'Taylor Swift',
        name1:"zhangsan",
        name2:"文本",
        name3:123,
        name4:"5:32:00",
        name5:"2018-01-12",
        name6:"123",
        name7:"2222"
    },
    {
        name: 'Taylor Swift',
        name1:"zhangsan",
        name2:"文本",
        name3:123,
        name4:"5:32:00",
        name5:"2018-01-12",
        name6:"123",
        name7:"2222"
    },
    {
        name: 'Taylor Swift',
        name1:"zhangsan",
        name2:"文本",
        name3:123,
        name4:"5:32:00",
        name5:"2018-01-12",
        name6:"123",
        name7:"2222"
    },
]

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a href="javascript:;">{text}</a>,
                    fixed: "left",
                    width: 300
                },
                {
                    title: 'name1',
                    dataIndex: 'name1',
                    key: 'name1',
                    filter:true,
                    
                    type:3,
                    option:"name1",
                    width: 300
                },
                {
                    title: 'name2',
                    dataIndex: 'name2',
                    filter:true,
                    type:0,
                    filterType:[2,0],
                    key: 'name2',
                    width: 300
                },
                {
                    title: 'name3',
                    dataIndex: 'name3',
                    key: 'name3',
                    filter:true,
                    type:2,
                    width: 300
                },
                {
                    title: 'name4',
                    dataIndex: 'name4',
                    key: 'name4',
                    filter:true,
                    type:4,
                    width: 300
                },
                {
                    title: 'name5',
                    dataIndex: 'name5',
                    key: 'name5',
                    filter:true,
                    type: 5,
                    width: 300
                },

                {
                    title: 'name6',
                    dataIndex: 'name6',
                    key: 'name6',
                    filter:true,
                    width: 300
                },
                {
                    title: 'name7',
                    dataIndex: 'name7',
                    key: 'name7',
                    align:"right",
                    filter:true,
                    width: 300
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    width: 300,
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
        }
    }

    switchChange = (check, data) => {
        let columns = this.state.columns.map((ele) => {
            if (ele.dataIndex === data.dataIndex) {
                ele.show = check;
            }
            return ele;
        })
        this.setState({
            columns: columns
        })
    }
    onChange = (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter)
    }
    render() {
        return (
            <div>
                <ExhibitTable
                    columns={this.state.columns}
                    dataSource={dataSource}
                    name="ExhibitTable"
                    scroll={{
                        x: 2700
                    }}
                    options={{
                        name1:[{
                            name:"张三",
                            value:"zhangsan"
                        },{
                            name:"李四",
                            value:"lisi"
                        }]
                    }}
                    onChange = {this.onChange}
                    showRight={true}
                    bordered
                    switchChange={this.switchChange}
                />

            </div>

        );
    }
}
export default Detail;
