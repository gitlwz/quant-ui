
import React, { Component } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

export default Form.create()(EditableRow);