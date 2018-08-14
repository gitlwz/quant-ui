import React, { Component } from 'react';
import "./index.less";
import { Table, Input, InputNumber, Popconfirm, Form, Select, DatePicker } from 'antd';
import Text from "./Text"
import moment from 'moment';
const Option = Select.Option;
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getShowType = (form) => {
        const { getFieldDecorator } = form;
        const { type, record, dataIndex, selectOption } = this.props;
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        }
        if (!type) {
            return <FormItem style={{ margin: 0 }}>
                {getFieldDecorator(dataIndex, {
                    initialValue: record[dataIndex],
                })(<Text />)}
            </FormItem>
        } else if (type == 1) {
            return <FormItem
                style={{ margin: 0 }}
                {...formItemLayout}
            >
                {getFieldDecorator(dataIndex, {
                    initialValue: record[dataIndex],
                })(<Input style={{ width: '100%' }} />)}
            </FormItem>
        } else if (type == 2) {
            return <FormItem
                style={{ margin: 0 }}
                {...formItemLayout}
            >
                {getFieldDecorator(dataIndex, {
                    initialValue: record[dataIndex],
                })(<InputNumber style={{ width: '100%' }} />)}
            </FormItem>
        } else if (type == 3) {
            let option = selectOption || [];
            return <FormItem
                style={{ margin: 0 }}
                {...formItemLayout}
            >
                {getFieldDecorator(dataIndex, {
                    initialValue: record[dataIndex],
                })(
                    <Select labelInValue style={{ width: '100%' }}>
                        {
                            option.map((ele) => {
                                return <Option value={ele.value} key={ele.value}>{ele.name}</Option>
                            })
                        }
                    </Select>
                )}
            </FormItem>
        } else if (type == 4) {
            return <FormItem
                        {...formItemLayout}
                        style={{ margin: 0 }}
                    >
                        {getFieldDecorator(dataIndex, {initialValue: record[dataIndex]&&moment(record[dataIndex], 'YYYY-MM-DD')})(
                            <DatePicker />
                        )}
                    </FormItem>
        }



        return <div>123</div>
    }
    render() {
        const {
            editing,
            dataIndex,
            title,
            type,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    return (
                        <td {...restProps}>
                            {editing ? (this.getShowType(form)) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}


const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
        address2: 123,
        address3:'2018-08-10'
    });
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh:0 
        };

        this.data = data;
        this.editingKey = '',
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '100',
                editable: true,
                type: 0,
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '100',
                editable: true,
                type: 1,
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '100',
                editable: true,
                type: 2,
            },
            {
                title: 'address2',
                dataIndex: 'address2',
                width: '300',
                editable: true,
                type: 3,
                selectOption: [{
                    name: "123",
                    value: "123"
                }]
            },
            {
                title: 'address3',
                dataIndex: 'address3',
                width: '300',
                editable: true,
                type: 4,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                Save
                                            </a>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="Sure to cancel?"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                    <a onClick={() => this.edit(record.key)}>Edit</a>
                                )}
                        </div>
                    );
                },
            },
        ];
    }

    isEditing = (record) => {
        return record.key === this.editingKey;
    };

    edit(key) {
        this.editingKey = key;
        this.refresh()
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.data = newData;
                this.editingKey = "";
                this.refresh()
            } else {
                newData.push(row);
                this.data = newData;
                this.editingKey = "";
                this.refresh()
            }
        });
    }
    onChange = (value,dataIndex,record) => {
        console.log("^^^^^^^^^^^^^",value,dataIndex,record)
    }
    cancel = () => {
        this.editingKey = '';
        this.refresh();
    };

    refresh = (callBack)=>{
        this.setState({
            refresh:this.state.refresh++
        },()=>{
            callBack&&callBack();
        })
    }
    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    selectOption: col.selectOption || {},
                    record,
                    type: col.type,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                    onChange:this.onChange
                }),
            };
        });

        return (
            <Table
                components={components}
                bordered
                dataSource={this.data}
                columns={columns}
                scroll={{ x: 2000 }}
                rowClassName="editable-row"
            />
        );
    }
}
export default EditableTable;
