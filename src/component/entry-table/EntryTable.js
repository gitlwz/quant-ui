import React, { Component } from 'react';
import Table from "../table";
import Input from "../input";
import InputNumber from "../input-number";
import Select from "../select";
import AutoComplete from "../auto-complete";
import DatePicker from "../date-picker";
import Cascader from "../cascader";
import Switch  from "../switch";
import Resizable from "../resizable"
import cloneDeep  from 'lodash/cloneDeep';
import isFunction  from 'lodash/isFunction';
import isArray  from 'lodash/isArray';
import isObject from "lodash/isObject";
import moment from 'moment';
import {currency} from '../utils'
import Ttile from "./Title"
import 'moment/locale/zh-cn';

import classNames from 'classnames';
moment.locale('zh-cn');
const Option = Select.Option;

/**
 *dataSource:当前数据源
 *
 *columns :当前配置项
 *          API：当前列单元格操作配置
 *          props：Function | 主要用于合并单元格操作
 *              text ： 当前文本
 *              record： 当前行数据
 *              index：  index索引
 *              dataIndex： 当前dataIndex值
 *              collocate：  当前columns配置
 *              len:数据长度
 *          type：单元格属性
 *              option：
 *                  空|| 0 文本展示单元格，
 *                  1：文本输入单元格
 *                  2：数字输入单元格
 *                  3：下拉选择单元格    需要制定 option
 *                  4：模糊匹配单元格    需要制定 autoption
 *                  5：日期单元格
 *
 * showSelection:  是否显示select
 * defaultRowKeys: 默认选中项
 * onSelectChange：选中项发生变化的时的回调
 * onSelect：      用户手动选择/取消选择某列的回调
 * onSelectAll：   用户手动选择/取消选择所有列的回调
 */

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            forceUpdate:1,
        }
        this.selectedRowKeys = this.props.defaultRowKeys || [];
        this.tableProps = this.props;
        this._tableProps = cloneDeep(this.props);
        this.disabled = {};
        this.dataSource = this.props.dataSource;
        this.columns = this.props.columns;
        this._columns = this._EditableColumns(this.columns);

        this.editingKey = ""
    }
    _moveCard = (startDataIndex,endDataIndex) =>{
        let start = this._findCard(startDataIndex);
        let end = this._findCard(endDataIndex);
        this.columns.splice(start.index,1);
        this.columns.splice(end.index,0,start.data);
        this._columns = this._EditableColumns(this.columns);
        this.refresh();
    }
    _Cascaderfilter = (inputValue, path) =>{
        return (path.some(option => (option.name).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }   
    _findCard = (dataIndex) =>{
        const data = this.columns.filter(c => c.dataIndex === dataIndex)[0];
        const index = this.columns.findIndex((c)=> c.dataIndex === dataIndex);
        return {
            data,
            index
        }
    }
    _renderColumns = (text,record,index,dataIndex,collocate) =>{
        if(!collocate.type /*|| record[this._getKey()]!== this.editingKey */ || ((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+dataIndex] === true) && this.disabled[record[this._getKey()]+"_"+dataIndex] !== false )){
            return this._disabledRender(text,record,index,dataIndex,collocate)
        }else{
            return this._entryRender(text,record,index,dataIndex,collocate)
        }
    }
    _entryRender = (text,record,index,dataIndex,collocate) =>{
        const API = collocate.API || {};
        const type = collocate.type;
        if(type == 1){
            return  <div>
                        <Input 
                            
                            {...API}  
                            title={text}
                            style={{width:'100%'}} 
                            value={text} 
                            onChange={e => this._handleChange(e.target.value,record,index,dataIndex)} 
                            />
                    </div>
        }else if(type == 2){
           return <div>
                <InputNumber 
                    {...API}
                    title={text} 
                    style={{width:'100%'}} 
                    value={text} 
                    onChange={value => this._handleChange(value,record,index,dataIndex)} 
                    />
            </div>
        }else if(type == 3){
            let optiondata = [];
            if(isArray(collocate.option)){
                optiondata = collocate.option
            }else{
                optiondata = record[collocate.option] || []
            }
            let showText = {key:null};
            if(isObject(text)){
                showText.key = text.value;
                showText.label = text.name;
            
            }
            let width = !!collocate.width? collocate.width -33 : '100%';
            return (<div>
                <Select   
                    {...API}
                    style={{width:width}}
                    labelInValue ={true}
                    value={showText} 
                    key = {index}
                    onChange={value =>{ 
                        let _value = {
                            value:value.key,
                            name:value.label
                        }
                        this._SelectChange(_value,record,index,dataIndex)}
                    } 
                >
                    {
                        optiondata.map((optionObj,index)=>{
                            let optionApi = collocate.optionApi || {}
                            if(isFunction(optionApi.disabled)){
                                optionApi = {...optionApi,...{disabled:optionApi(optionObj,record,index)}}
                            }
                            return (
                                    <Option key={index} {...optionApi} value={optionObj.value}>{optionObj.name}</Option>
                                )
                        })
                    }
                </Select>
            </div>)
        }else if(type == 4){
            let optiondata = [];
            if(isArray(collocate.autooption)){
                optiondata = collocate.autooption
            }else{
                optiondata = record[collocate.autooption] || []
            }
            let width = !!collocate.width? collocate.width -33 : '100%';
            return (
                <div>
                    <AutoComplete
                        style={{width,width,zIndex: 0}}
                        {...API}
                        dataSource={optiondata}
                        value={text} 
                        onChange={value => this._handleChange(value,record,index,dataIndex)}
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                </div>
            );
        }else if(type == 5){
            let _text = moment(text, 'YYYY-MM-DD').toString() === "Invalid date"?null:moment(text, 'YYYY-MM-DD');
            return (
                <div>
                    <DatePicker
                        value={_text}
                        {...API}
                        onChange={(value,valueString) => this._handleChange(valueString,record,index,dataIndex,value)}
                    />
                </div>
            );
        }else if(type == 6){
            let optiondata = [];
            if(isArray(collocate.cascaderoption)){
                optiondata = collocate.cascaderoption
            }else{
                optiondata = record[collocate.cascaderoption] || []
            } 
            return (
                <div>
                    <Cascader
                        expandTrigger="hover"
                        fieldNames={{
                            label:"name",
                            value:"value",
                            children:"children"
                        }}
                        {...API}
                        options={optiondata}
                        value={text} 
                        showSearch={{
                            filter :this._Cascaderfilter
                        }}
                        onChange = {(value, selectedOptions)=>this._CascaderChange(value,record,index,dataIndex,selectedOptions)}
                        />
                </div>
            ); 
        }else if(type == 7){
            const API = collocate.API || {};
            return  <div>
                        <Switch 
                            {...API}
                            checked = {text}
                            onChange = {(checked)=>this._handleChange(checked,record,index,dataIndex)}
                            />
                    </div>
        }

    }
    _disabledRender = (text,record,index,dataIndex,collocate) =>{
        let {type} = collocate;
        const API = collocate.API || {};
        let showText = null;
        if(!type || type == 1 || type == 4){
            showText = text;
        }else if(type == 2){ //inputeNumber
            showText = text;
            if(API.precision !== undefined && text !== null && text !== "" && text !== undefined ){
                showText = currency(text,{precision:API.precision}).format()
            }
        }else if(type == 3 && isObject(text)){
            showText = text.name;
        }else if(type == 5 ){
            showText = moment(text, 'YYYY-MM-DD').toString() === "Invalid date"?null:moment(text, 'YYYY-MM-DD').format('YYYY-MM-DD');
        }else if (type == 6 && isArray(text)){
            showText = text.join('/')
        }else if (type == 7){
            const API = collocate.API || {};
            return <div>
                <Switch 
                    {...API}
                    disabled={true}
                    checked = {text}
                    />
            </div>
        }
        return  <div>
                    <div title={showText} style={{ width:'100%'}}>{showText}</div>
                </div>
    }
    _EditableColumns(columns){
        let _columns = columns.filter((item)=>item.show !== false).map((collocate)=>{
            let _collocate = cloneDeep(collocate)
            if(this.props.drop === true){
                _collocate.title = <Ttile
                    moveCard = {this._moveCard}  
                    collocate = {collocate}
                    text={collocate.title}/>
            }
            if(isFunction(_collocate.render)) return _collocate;


            let props = {}
            _collocate.render = (text,record,index)=> {
                if(isFunction(_collocate.props)){
                    props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate,this.dataSource.length);
                }
                return{ 
                    children:this._renderColumns(text,record,index,_collocate.dataIndex,_collocate),
                    props
                }
            }
            return _collocate;
        })
        return _columns;
    }
    _getKey = () =>{
        return this._tableProps.rowKey || "key";
    }
    _CascaderChange = (value,record,index,column, selectedOptions) =>{
        const newData = [...this.dataSource];
        const target = newData.filter(item => record[this._getKey()] === item[this._getKey()])[0];
        if (target) {
            if(isFunction(this.props.cellOnChange)){
                this.props.cellOnChange(value,target[column],record,index,column,selectedOptions);
            }
            target[column] = value;
            this.dataSource = newData;
            this.refresh();
        }
    }
    _SelectChange = (value,record,index,column) =>{
        const newData = [...this.dataSource];
        const target = newData.filter(item => record[this._getKey()] === item[this._getKey()])[0];
        if (target) {
            if(isFunction(this.props.cellOnChange)){
                this.props.cellOnChange(value,target[column],record,index,column);
            }
            target[column] = value;
            this.dataSource = newData;
            this.refresh();
        }
    }
    _handleChange(value,record,index,column) {
        const newData = [...this.dataSource];
        const target = newData.filter(item => record[this._getKey()] === item[this._getKey()])[0];
        if (target) {
            let _oldValue = cloneDeep(target[column])
            
            target[column] = value;
            this.dataSource = newData;
            if(isFunction(this.props.cellOnChange)){
                this.props.cellOnChange(value,_oldValue,record,index,column);
            }
            this.refresh();
        }
    }
    _onRow = (record, index) =>{
        return {
            onDoubleClick: () => this._rowDoubleClick(record, index)
        }
    }
    _rowDoubleClick = (record, index) => {
        let key = record[this._getKey()]
        if (key !== this.editingKey) {
            this.editingKey = key;
            this.refresh();
        }
    }

    /**
     * 自定义时确认行为
     * @param  {[type]} value  [description]
     * @param  {[type]} record [description]
     * @param  {[type]} index  [description]
     * @param  {[type]} column [description]
     * @return {[type]}        [description]
     */
    handleChange(value,record,index,column) {
        const newData = [...this.dataSource];
        const target = newData.filter(item => record[this._getKey()] === item[this._getKey()])[0];
        if (target) {
            if(isFunction(this.props.cellOnChange)){
                this.props.cellOnChange(value,target[column],record,index,column);
            }
            target[column] = value;
            this.dataSource = newData;
            this.refresh();
        }
    }
    /**获取当前dataSource
     * @return {array}
     */
    getDataSource(){
        return cloneDeep(this.dataSource)
    }
    /**获取列配置项
     * @return {array}
     */
    getColumns(){
        return cloneDeep(this.columns)
    }
    /**获取表格配置
     * @return {obj}
     */
    getAPI(){
        return cloneDeep(this.tableProps)
    }
    /**获取选中项keys
     * @return {array}
     */
    getSelectedRowKeys(){
        return cloneDeep(this.selectedRowKeys)
    }
    /**获得所有选中的数据
     * @return {array}
     */
    getRowDataBySelectedAll(){
        return this.dataSource.filter( item => {
            return this.selectedRowKeys.includes(item[this._getKey()])
        })
    }
    /**获取数据通过keys
     * @param  {array}
     * @return {array}
     */
    getRowDataByKeys(keys){
        let _keys = [];
        if(isArray(keys)){
            _keys = keys;
        }else{
            _keys = [keys]
        }
        return this.dataSource.filter( item => {
            return _keys.includes(item[this._getKey()])
        })
    }
    /**设置某单元格数据
     * @param  {string}
     * @param  {string}
     * @param  {string}
     * @param  {Function}
     * @return {[type]}
     */
    saveCellData(rowId,dataIndex,cellValue,callback){
        const newData = [...this.dataSource];
        const target = newData.filter(item => rowId == item[this._getKey()])[0];
        if (target) {
            target[dataIndex] = cellValue;
            this.dataSource = newData;
            this.refresh(callback);
        }
    }
    /**添加一行数据在末尾
     * @param {obj || array}
     * @param {Function}
     */
    addLastRow(rowData,callback){
        const newData = [...this.dataSource];
        if(isArray(rowData)){
            this.dataSource = [...newData,...rowData]
        } else{
            this.dataSource = [...newData,...[rowData]]
        }
        this.refresh(callback);
    }
    
    /**
     * 添加一行数据在首位
     * @param {[type]}   rowData  [description]
     * @param {Function} callback [description]
     */
    addBeforeRow(rowData,callback){
       const newData = [...this.dataSource];
        if(isArray(rowData)){
            this.dataSource = [...rowData,...newData]
        } else{
            this.dataSource = [...[rowData],...newData]
        }
        this.refresh(callback); 
    }
    /**
     * 根据key删除一行
     */
    deleteRow = (keys,callback) =>{
        this.dataSource = this.dataSource.filter((ele)=>{
            return  !keys.includes(ele[this._getKey()])
        })
        this.refresh(callback); 
    }
    /**设置当前选中数据
     * @param {array}
     * @param {Function}
     */
    setSelectedKeys(keys,callback){
        this.selectedRowKeys = keys;
        this.refresh(callback)
    }
    /**
     * 添加当前选中数据
     * @param  {[type]}   keys     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    addSelectedKeys(keys,callback){
        if(isArray(keys)){
            this.selectedRowKeys = [...this.selectedRowKeys,...keys]
        }else{
            this.selectedRowKeys.push(keys)
        }
        this.refresh(callback);
    }
    /**添加不可操作单元格
     * @param {string}
     * @param {string}
     * @param {Function}
     */
    addDisabled(key,column,callback){
        let _disabled = cloneDeep(this.disabled)
        _disabled[key+"_"+column] = true;
        this.disabled = _disabled;
        this.refresh(callback);
    }
    /**移除不可操作单元格
     * @param  {string}
     * @param  {string}
     * @param  {Function}
     * @return {[type]}
     */
    removeDisabled(key,column,callback){
        let _disabled = cloneDeep(this.disabled)
        _disabled[key+"_"+column] = false;
        this.disabled = _disabled;
        this.refresh(callback)
    }
    /**
     * 修改不可操作单元格
     * @param  {[type]}   disableds [description]
     * @param  {Function} callback  [description]
     * @return {[type]}             [description]
     */
    editDisable(disableds,callback){
        this.disabled = {...this.disabled,...disableds};
        this.refresh(callback)
    }
    /**移除所有不可操作数据
     * @param  {Function}
     * @return {[type]}
     */
    removeAllDisabled(callback){
        this.disabled = {};
        this.refresh(callback)
    }
    /**设置当前数据
     * @param {array}
     * @param {Function}
     */
    setDataSource(dataSource,callback){
        this.dataSource = dataSource;
        this.refresh(callback);
    }
    /**
     * 设置当前配置项
     * @param {[type]}   columns  [description]
     * @param {Function} callback [description]
     */
    setColumns(columns,callback){
        this.columns = columns;
        this._columns = this._EditableColumns(columns)
        this.refresh(callback);
    }
    /**
     * 设置当前表格api
     * @param {[type]}   API      [description]
     * @param {Function} callback [description]
     */
    setAPI(API,callback){
        let _API = cloneDeep(this.tableProps)
        let __API = {..._API,...API};
        this.tableProps = __API;
        this._tableProps = cloneDeep(__API);
        this.refresh(callback);
    }
    /**
     * 清楚所有数据
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    clearRowData(callback){
        this.dataSource = [];
        this.refresh(callback)
    }
    /**
     * 刷新当前页面
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    refresh(callback){
        this.setState({
            forceUpdate:this.state.forceUpdate++
        },()=>{
            if(isFunction(callback)){
                callback();
            }
        })
    }
    /**
     * 选中项发生变化的时的回调
     * @param  {[type]} selectedRowKeys [description]
     * @param  {[type]} rowValue        [description]
     * @return {[type]}                 [description]
     */
    onSelectChange(selectedRowKeys,rowValue){
        this.selectedRowKeys = selectedRowKeys;
        if(isFunction(this.props.onSelectChange)){
            this.props.onSelectChange(selectedRowKeys,rowValue)
        }
        this.refresh()
    }
    /**
     * 用户手动选择/取消选择某列的回调
     * @param  {[type]} record       [description]
     * @param  {[type]} selected     [description]
     * @param  {[type]} selectedRows [description]
     * @param  {[type]} nativeEvent  [description]
     * @return {[type]}              [description]
     */
    onSelect(record, selected, selectedRows, nativeEvent){
        if(isFunction(this.props.onSelect)){
            this.props.onSelect(record, selected, selectedRows, nativeEvent)
        }
    }
    /**
     * 用户手动选择/取消选择所有列的回调
     * @param  {[type]} selected     [description]
     * @param  {[type]} selectedRows [description]
     * @param  {[type]} changeRow    [description]
     * @return {[type]}              [description]
     */
    onSelectAll(selected, selectedRows, changeRow){
        if(isFunction(this.props.onSelectAll)){
            this.props.onSelectAll(selected, selectedRows, changeRow)
        }
    }
    render() {
        let showSelection = this._tableProps.showSelection
        if(!!showSelection){
            let selectedRowKeys = this.selectedRowKeys;
            const rowSelection = {
                selectedRowKeys,
                getCheckboxProps:this._getCheckboxProps,
                onChange: (val,rowValue)=>{this.onSelectChange(val,rowValue)},
                onSelect:(record, selected, selectedRows, nativeEvent)=>{this.onSelect(record, selected, selectedRows, nativeEvent)},
                onSelectAll:(selected, selectedRows, changeRows) => {this.onSelectAll(selected, selectedRows, changeRows)}
            };
            this._tableProps.rowSelection = rowSelection
        }

        let scroll = {x:!!showSelection?70:0}
        if(!!this._tableProps.scroll && !!this._tableProps.scroll.x){
            scroll.x = this._tableProps.scroll.x;
        }else{
            
            for (var i = 0; i < this.columns.length; i++) {
                if(!this.columns[i].width){
                    scroll = {};
                    break
                }
                scroll.x =  (scroll.x || 0) + this.columns[i].width * 1;
            };
        }
        scroll.y = !!this._tableProps.scroll?this._tableProps.scroll.y:undefined;
        // let classNameaa =  classNames("entry-table-title",{
        //     'entry-table-sizable':!!this._tableProps.sizable
        // })
        return (
            <div>
                {/* <Resizable
					className={classNameaa}
					enable={{ top:false, right:!!this._tableProps.sizable, bottom:false, left:!!this._tableProps.sizable, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
				> */}
    	       <Table
                    pagination={false}
                    {
                        ...{
                            ...this._tableProps,
                            ...{
                                dataSource:this.dataSource,
                                columns:this._columns,
                                scroll:scroll,
                                // onRow:this._onRow
                            }
                        }
                    }
                />
                {/* </Resizable> */}
            </div>)
    }
}
export default EditableTable;