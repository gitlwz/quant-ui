import React, { Component } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const EditableContext = React.createContext();
const FormItem = Form.Item; 
class EditableCell extends Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

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
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}
const EditableRow = ({ form, index, ...props }) => {
    return  <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
}
module.exports = {
    EditableCell,
    EditableRow:Form.create()(EditableRow)
}

