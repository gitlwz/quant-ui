import React, { Component } from 'react';
import Table from "../table";
import Icon from "../icon";
import MoveModal from "../move-modal";
import Switch from "../switch";
import List from "../list";
import utils from "../utils";
import cloneDeep from "lodash/cloneDeep";
import isArray from "lodash/isArray";
import Input from "../input";
import Button from "../button";
import language from "../language";
const $ = language.getLanguageData
const { currency, store } = utils;
class ExhibitTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        }
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
    }

    handleReset = clearFilters => () => {
        clearFilters();
    }
    rightClick = () => {
        this.setState({
            visible: true
        })
    }
    onCancel = () => {
        this.setState({
            visible: false
        })
    }
    _filter = (ele) => {
        if (!ele.type) {
            ele.filterIcon = filtered => <Icon type="search" className={filtered?'quant-ExhibitTable-highlight':'quant-ExhibitTable-nolight'} />
            ele.filterDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div className="quant-ExhibitTable-filter-dropdown">
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder={$("请输入")}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={this.handleSearch(selectedKeys, confirm)}
                    />
                    <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>{$("搜索")}</Button>
                    <Button onClick={this.handleReset(clearFilters)}>{$("重置")}</Button>
                </div>
            )
        }
        if (ele.type == 2) {
            ele.sorter =  true
        }
        if (ele.type == 3) {
            let optiondata = [];
            if (isArray(ele.option)) {
                optiondata = ele.option
            } else {
                let options = this.props.options || {};
                optiondata = options[ele.option] || []
            }

            let _optiondata = optiondata.map((item) => {
                return {
                    text: item.name,
                    value: item.value
                }
            })
            ele.filters = _optiondata;
        }
        if (ele.type == 5) {
            ele.sorter =  true
        }
        return ele;

    }
    _rednderColumns = (columns) => {
        let _columns = columns.filter((ele) => ele.show !== false)
        _columns = _columns.map((ele) => {
            if (ele.filter === true) {
                //搜索处理
                ele = this._filter(ele)
            }

            if (!ele.render && ele.type === 2) {
                ele.render = (text, record, index) => {
                    let _text = text;
                    if (!isNaN(text)) {
                        _text = currency(text).format()
                    }
                    return <div style={{ textAlign: "right" }}>{_text}</div>
                }
            }
            if (!ele.render && ele.type === 3) {
                ele.render = (text, record, index) => {
                    let _text = text;
                    let optiondata = [];
                    if (isArray(ele.option)) {
                        optiondata = ele.option
                    } else {
                        let options = this.props.options || {};
                        optiondata = options[ele.option] || []
                    }
                    if (!!text) {
                        let item = optiondata.find((ele) => { return ele.value === text });
                        _text = item ? item.name : "";
                    }
                    return <div>{_text}</div>
                }
            }
            return ele
        })
        return _columns;
    }
    afterClose = () => {
        let _layout = store.get("layout") || {};
        let _columns = []
        this.props.columns.forEach((ele) => {
            if (ele.show === false) {
                _columns.push(ele.key)
            }
        })
        _layout[this.props.name] = _columns;
        store.set("layout", _layout);
    }
    render() {
        let { columns, showRight, ...restProps } = this.props;
        let _columns = this._rednderColumns(columns);

        return (
            <div className="quant-ExhibitTable">
                <Table  {...restProps} columns={_columns}
                    onHeaderRow={
                        (column) => {
                            return {
                                onContextMenu: (e) => {
                                    e.preventDefault();
                                    if (e.button == 2 && !!showRight) {
                                        this.rightClick(column)
                                    }
                                }
                            };
                        }
                    }
                />
                <MoveModal
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    title="控制显示列"
                    footer={null}
                    width={300}
                    afterClose={this.afterClose}
                >
                    <List
                        bordered
                        dataSource={this.props.columns}
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <div className="quant-ExhibitTable-list-item">
                                        <div>{item.title}</div>
                                        <div>
                                            <Switch
                                                checked={item.show || item.show === undefined}
                                                checkedChildren={<Icon type="check" />}
                                                unCheckedChildren={<Icon type="cross" />}
                                                onChange={(checked) => {
                                                    this.props.switchChange(checked, cloneDeep(item))
                                                }}
                                            />
                                        </div>
                                    </div>
                                </List.Item>)
                        }}
                    />
                </MoveModal>
            </div>
        );
    }
}

export default ExhibitTable;