import React, { Component } from 'react';
import EditableRow from './EditableRow';
import EditableCell from './EditableCell';

import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import isObject from "lodash/isObject";

import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
class EditableTable extends Component {
    static defaultProps = {
        columns: [],
        dataSource:[]

    };
    constructor(props) {
        super(props);
        this.state = {
            refresh: 1,
        }

        this.editingKey = "";
        this.columns = this.props.columns;
        this._columns = this._EditableColumns(cloneDeep(this.columns))

        this.dataSource = this.props.dataSource;
        this._dataSource = cloneDeep(this.dataSource)
    }

    _isEditing = (record) => {
        return record.key === this.editingKey;
    };

    _edit = (key) => {
        this.setState({ editingKey: key });
    }
    refresh = (callBack) => {
        this.setState({
            refresh: this.state.refresh++
        }, () => {
            isFunction(callBack) && callBack();
        })
    }

    _save = (form, key) => {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }
    _EditableColumns = (columns) => {
        let _columns = columns.filter((item) => item.show !== false).map((col) => {
            return {
                ...col,
                onCell: record => ({
                    record,
                    type: col.type,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this._isEditing(record),
                }),
            };
        });
        return _columns;
    }
    _onRow = (record, index) => {
        return {
            onDoubleClick: () => this._rowDoubleClick(record, index)
        }
    }
    _rowDoubleClick = (record, index) => {
        if (record.key !== this.editingKey) {
            this.editingKey = record.key;
            this.refresh();
        }
    }
    render() {
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        return (
            <Table
                components={components}
                bordered
                dataSource={this._dataSource}
                columns={this._columns}
                rowClassName="editable-row"
                onRow={this._onRow}
            />
        );
    }
}
export default EditableTable;