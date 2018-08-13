import React, { Component } from 'react';
import Table from "../table";
import Icon from "../icon";
import MoveModal from "../move-modal";
import Switch from "../switch";
import List from "../list";
import utils from "../utils";
import cloneDeep from "lodash/cloneDeep";
import "./index.less";
const { currency } = utils;
class ExhibitTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
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
    render() {
        let { columns, showRight, ...restProps } = this.props;
        let _columns = columns.filter((ele) => ele.show !== false);
        _columns = _columns.map((ele)=>{
            if(!ele.render && ele.type === 2){
                ele.render = (text, record, index) => {
                    let _text = text;
                    if( !isNaN(text) ){
                        _text = currency(text).format()
                    }
                    return <div style={{textAlign:"right"}}>{_text}</div>
                }
            }
            return ele
        })
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