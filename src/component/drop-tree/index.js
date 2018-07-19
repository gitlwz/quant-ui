import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import Children from './Children';
import Target from './Target';
// import './index.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
let obj = {};
let copyFrom = {};
let that = {};
let notChangeData = {}
class DropTree extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        onReset: PropTypes.func,
        dataSource: PropTypes.array,
    };

    static defaultProps = {
        onReset: () => { },
        className: '',
        dataSource: [],
    };
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
        };
        this.dataSource = props.dataSource || [];
        this._dataSource = cloneDeep(this.dataSource);
        notChangeData = cloneDeep(this.dataSource);
        that = this;
    }
    onResetData = () => {
        console.log("onResetData")
    }
    onSetData = () => {
        console.log("onSetData")
    }
    onGetData = () => {
        return "onGetData"
    }
    children = (data) => {
        if (!!data && data.length > 0) {
            return (
                <tr >
                    {
                        data.map((item) => {
                            return (
                                <td className="node-container" colSpan="2">
                                    {this.parent([item])}
                                </td>
                            )
                        })
                    }
                </tr>
            )
        }
        return null;
    }
    lineFirst = (lineNum) => {
        if (lineNum == 0) {
            return null;
        }
        return (
            <tr>
                <td colSpan={lineNum * 2}>
                    <div className="line down"></div>
                </td>
            </tr>
        )
    }
    lineTow = (lineNum) => {
        if (lineNum == 0) {
            return null;
        }
        let line = []
        for (let i = 0; i < lineNum * 2; i++) {
            if (i == 0) {
                line.push(
                    <td class="line left">&nbsp;</td>
                )
                continue;
            }
            if (i == (lineNum * 2 - 1)) {
                line.push(
                    <td class="line right">&nbsp;</td>
                )
                continue;
            }
            if (i % 2 == 0) { //偶数
                line.push(
                    <td class="line left top">&nbsp;</td>
                )
            } else {
                line.push(
                    <td class="line right top">&nbsp;</td>
                )
            }

        }
        return (
            <tr>
                {line}
            </tr>
        )
    }
    parent = (data) => {
        return data.map((item) => {
            let colSpan = item.childrens.length * 2;
            return (
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        <tr>
                            <Target onDrageFromTo={this.onDrageFromTo} data={item}>
                                <Children forbidDrag={!!item.pid?false:true} onDrageFromTo={this.onDrageFromTo} data={item} />
                            </Target>
                        </tr>
                        {this.lineFirst(item.childrens.length)}
                        {this.lineTow(item.childrens.length)}
                        {this.children(item.childrens)}
                    </tbody>
                </table>
            )
        })
    }
    onDrageFromTo(type, data) {
        if (type === "from") {
            obj.fromId = data.id;
            obj.fromPId = data.pid;
        } else if (type === "to") {
            obj.toId = data.id;
            obj.toPId = data.pid;
            if(obj.fromId === obj.toId) return;
            that.recursion(that._dataSource)
            setTimeout(() => {
                that.dataSource = cloneDeep(that._dataSource);
                that.setState({
                    refresh:!that.state.refresh
                })
            }, 0);
        }
        console.log(type, data)
    }
    recursion(item) {
        item.forEach((value, index) => {
            if (value.childrens.length > 0) {
                if (obj.toId == value.id) {
                    setTimeout(() => {
                        copyFrom.pid = value.id;
                        value.childrens.push(copyFrom)
                    }, 0);
                }
                if (obj.fromPId == value.id) {//找到父节点，判断需要删哪个子节点
                    for (let index in value.childrens) {
                        if (value.childrens[index].id == obj.fromId) {
                            copyFrom = cloneDeep(value.childrens[index])
                            value.childrens.splice(index, 1);
                        }
                    }
                }
                this.recursion(value.childrens)
            } else {
                if (obj.toId == value.id) {
                    setTimeout(() => {
                        copyFrom.pid = value.id;
                        value.childrens.push(copyFrom)
                    }, 0);
                }
                if (obj.fromPId == value.id) {
                    for (let index in value.childrens) {
                        if (value.childrens[index].id == obj.fromId) {
                            copyFrom = cloneDeep(value.childrens[index])
                            value.childrens.splice(index, 1);
                        }
                    }
                }
            }
        })
    }
    render() {
        return (
            <div className="quant-drop-tree">
                {this.parent(this.dataSource)}
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(DropTree);
