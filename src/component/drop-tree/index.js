import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import Children from './Children';
import Target from './Target';
// import './index.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
let drageData = null;
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
        
    }
    onResetData = () => {
        console.log("onResetData")
    }
    onSetData = (dataSource,callBack) => {
        
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
                                <Children renderItem={this.props.renderItem} forbidDrag={!!item.pid?false:true} onDrageFromTo={this.onDrageFromTo} data={item} />
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
    onDrageFromTo = (type, data) => {
       if(type == "from"){
            drageData = cloneDeep(data);
       }else if(type == "to"){
            if(data.id === drageData.id) return;
            if(!!this.isParentToChildren(drageData,data)){
                //可以给提示
                return;
            }
            this.delItem(drageData.id);
            this.addItem(data.id,drageData);
            this.refresh();
       }
    }
    /**
     * id 当前原色id
     * datas需要递归寻找的数据源
     * return id的父节点
     */
    findParent = (id,datas) =>{
        for(let i = 0,length = datas.length; i < length;i++){
            let item = datas[i];
            if(item.childrens.find((ele)=>ele.id === id)){
                return item
            }
            let _item = this.findParent(id,item.childrens);
            if(!!_item) return _item;
        }
    }
    findItem = (id,datas) =>{
        for(let i = 0,length = datas.length; i < length;i++){
            let item = datas[i];
            if(item.id === id){
                return item;
            }
            let _item = this.findItem(id,item.childrens);
            if(!!_item) return _item;
        }
    }
    addItem = (id,drageData) =>{
        let currentData =  this.findItem(id,this._dataSource);
        let _isHaveChildren = currentData.childrens.find((item)=>item.id === drageData.id)
        if(_isHaveChildren){
            return;
        }
        drageData.pid = currentData.id;
        currentData.childrens.push(drageData)
    }
    delItem = (id) => {
        let parent =  this.findParent(id,this._dataSource);
        for (let i = 0 ; i < parent.childrens.length; i++) {
            let element = parent.childrens[i];
            if(element.id === id){
                parent.childrens.splice(i,1);
                return;
            }
        }
    }
    isParentToChildren = (from,to) =>{
        if(!!this.findItem(to.id,from.childrens)) return true;
        return false
    }
    refresh = (callBack) =>{
        this.setState({
            refresh:!this.state.refresh
        },()=>{
            if(isFunction(callBack)){
                callBack();
            }
        })
    }
    render() {
        return (
            <div className="quant-drop-tree">
                {this.parent(this._dataSource)}
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(DropTree);
