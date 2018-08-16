import React, { Component } from 'react';
import { Icon, Divider,ExhibitTable} from 'quant-ui';

const dataSource = [
    {
        name: 'Taylor Swift',
        money: '22',
        adress: 'SanFrancisco'
    },
    {
        name: 'Eason Chan',
        money: (new Date().getFullYear() - 1974).toString(),
        adress: 'Hongkong'
    },
    {
        name: 'Jimmy',
        money: '22555',
        adress: 'Shanghai'
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
                    title: 'Name1',
                    dataIndex: 'name1',
                    key: 'name1',
                    width: 300
                },
                {
                    title: 'Name2',
                    dataIndex: 'name2',
                    key: 'name2',
                    width: 300
                },
                {
                    title: 'Name3',
                    dataIndex: 'name3',
                    key: 'name3',
                    width: 300
                },
                {
                    title: 'Name4',
                    dataIndex: 'name4',
                    key: 'name4',
                    width: 300
                },
                {
                    title: 'Name5',
                    dataIndex: 'name5',
                    key: 'name5',
                    width: 300
                },

                {
                    title: 'money',
                    dataIndex: 'money',
                    key: 'money',
                    type: 2,
                    width: 300
                },
                {
                    title: 'Adress',
                    dataIndex: 'adress',
                    key: 'adress',
                    align:"right",
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
                    showRight={true}
                    bordered
                    switchChange={this.switchChange}
                />

            </div>

        );
    }
}
export default Detail;
