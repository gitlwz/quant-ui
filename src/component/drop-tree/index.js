import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import Children from './component/Children';
import Target from './component/Target';
import LineFirst from './component/LineFirst';
import LineTow from './component/LineTow';
// import './index.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
let drageData = null;
class DropTree extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        onReset: PropTypes.func,
        onSetData: PropTypes.func,
        onGetData: PropTypes.func,
        dataSource: PropTypes.array,
    };

    static defaultProps = {
        onReset: () => { },
        onSetData: () => { },
        onGetData: () => { },
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
        this.dataSource = cloneDeep(this.dataSource);
        this._dataSource = cloneDeep(this.dataSource);;
        this.setState({
            refresh:!this.state.refresh
        })
    }
    onSetData = (dataSource,callBack) => {
        if(!!dataSource){
            this.dataSource = dataSource;
            this._dataSource = cloneDeep(this.dataSource);;
            this.setState({
                refresh:!this.state.refresh
            })
            if(!!isFunction(callBack)){
                callBack()
            }
        }
    }
    onGetData = () => {
        return this._dataSource;
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
    parent = (data) => {
        return data.map((item) => {
            let colSpan = item.childrens.length * 2;
            return (
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        <tr>
                            <Target onDrageFromTo={this.onDrageFromTo} data={item}>
                                <Children onClick={this.props.onClick} renderItem={this.props.renderItem} forbidDrag={!!item.pid?false:true} onDrageFromTo={this.onDrageFromTo} data={item} />
                            </Target>
                        </tr>
                        <LineFirst lineNum = {item.childrens.length}/>
                        <LineTow lineNum = {item.childrens.length}/>
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
            if(isFunction(this.props.isParentToChildren)){
                if(this.props.isParentToChildren(drageData,data) === false){
                    return;  
                }
            }
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
