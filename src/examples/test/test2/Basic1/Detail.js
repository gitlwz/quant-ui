import React, { Component } from 'react';
import { Button, MoveModal, Divider, Icon, Table, Card } from 'quant-ui';
import cloneDeep from 'lodash/cloneDeep';

class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            dataSource: [],
            options: {},
            columnsOption:[],
        }
        if ("options" in this.props) {
            this.state.options = { ...this.state.options, ...this.props.options }
        }
        if ('columns' in this.props) {
            let _columnsoptions = this._renderColumns(this.props.columns);
            this.state.columnsOption = _columnsoptions;

            this.columns = [{
                title: '查询项',
                dataIndex: 'name',
                key: 'name',
                width: 200,
            }, {
                title: '公式',
                dataIndex: 'key1',
                key: 'key1',
                type: 3,
                option: [{
                    name: "等于",
                    value: "="
                }, {
                    name: "小于",
                    value: "<"
                }, {
                    name: "大于",
                    value: ">"
                }, {
                    name: "不等于",
                    value: "!="
                }],
                width: 150,
            }, {
                title: '公式22',
                dataIndex: 'key2',
                key: 'key2',
                type: 1,
                width: 200,
            }]
        }
    }
    _renderColumns = (columns) => {
        let _columns = cloneDeep(columns);
        let option = [];
        _columns.forEach((ele) => {
            if (ele.search !== false && ele.show !== false) {
                option.push({
                    name: ele.title,
                    value: ele.dataIndex,
                    type: ele.type
                })
            }
        })
        return option;
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    onClick = () => {
        this.setState({
            visible: true,
        });
    }

    render() {
        const { type = "primary", icon = "search", text = "高级搜索" } = this.props;
        return (
            <span>
                <Button onClick={this.onClick} type={type} icon={icon}>{text}</Button>
                <MoveModal
                    title="高级查询"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    width="660px"
                    onCancel={this.handleCancel}
                >
                    <Card>
                        <Button onClick={this.addClick}>添加查询项</Button>
                        <Table
                            dataSource={this.state.dataSource}
                            bordered
                            columns={this.columns}
                        ></Table>
                    </Card>
                </MoveModal>
            </span>
        )
    }
}

let columns = [
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
        filter: true,
        type: 3,
        option: "Name",
        width: 300
    },
    {
        title: 'Name2',
        dataIndex: 'name2',
        filter: true,

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
        filter: true,
        type: 2,
        width: 300
    },

    {
        title: 'money',
        dataIndex: 'money',
        key: 'money',
        filter: true,
        type: 2,
        width: 300
    },
    {
        title: 'Adress',
        dataIndex: 'adress',
        key: 'adress',
        align: "right",
        width: 300
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 300,
        search: false,
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
            <div>
                <SearchButton columns={columns} />
            </div>
        );
    }
}
export default Detail;
