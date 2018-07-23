import React, { Component } from 'react';
import Table from "../table";
import Input from "../input";
import InputNumber from "../input-number";
import Select from "../select";
import AutoComplete from "../auto-complete";
import DatePicker from "../date-picker";
import cloneDeep  from 'lodash/cloneDeep';
import isFunction  from 'lodash/isFunction';
import isArray  from 'lodash/isArray';
import moment from 'moment';
import 'moment/locale/zh-cn';
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
 *          type：单元格属性
 *              option：
 *                  空|| 0 文本展示单元格，
 *                  1：文本输入单元格
 *                  2：数字输入单元格
 *                  3：下拉选择单元格    需要制定 option
 *                  4：模糊匹配单元格    需要制定 option
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
    }
    _getCheckboxProps = (record) =>{
        if(isFunction(this.props.getCheckboxProps)){
            return this.props.getCheckboxProps(record)
        }else{
            return {
                disabled:false
            }
        }
    }
    _textColumns(text,record,index, column,collocate){
        const API = collocate.API || {};
        return (
            <div>
                <div style={{ width:'100%'}}>{text}</div>
            </div>
        );
    }
    _inputColumns(text,record,index, column,collocate) {
        const API = collocate.API || {};
        if((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+column] === true) && this.disabled[record[this._getKey()]+"_"+column] !== false ){
            return (
                <div>
                    <div style={{ width:'100%'}}>{text}</div>
                </div>
            );
        }   
        return (
            <div>
                <Input {...API} style={{width:'100%'}} value={text} onChange={e => this._handleChange(e.target.value,record,index,column)} />
            </div>
        ); 
    }
    _inputNumberColumns(text,record,index, column,collocate) {
        const API = collocate.API || {};
        if((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+column] === true) && this.disabled[record[this._getKey()]+"_"+column] !== false){
            return (
                <div>
                    <div style={{ width:'100%'}}>{text}</div>
                </div>
            );
        }else{
            return (
                <div>
                    <InputNumber {...API} style={{width:'100%' }} value={text} onChange={value => this._handleChange(value,record,index,column)} />
                </div>
            );
        }
    }
    _selectColumns(text,record,index, column,collocate) {
        const API = collocate.API || {};
        let width = !!collocate.width? collocate.width -32 : '100%'
        if((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+column] === true) && this.disabled[record[this._getKey()]+"_"+column] !== false){
            return (
                <div>
                    <div style={{width:width}}>{text}</div>
                </div>
                
            )
        }else{
            let optiondata = [];
            if(isArray(collocate.option)){
                optiondata = collocate.option
            }else{
                optiondata = record[collocate.option] || []
            }
            return (
                <div>
                    <Select  {...API} style={{ width:width }} value={text} onChange={value => this._handleChange(value,record,index,column)} >
                        {
                            optiondata.map((optionObj,index)=>{
                            let optionApi = collocate.optionApi || {}
                            if(isFunction(collocate.disabled)){
                                optionApi = {...optionApi,...{disabled:optionApi(optionObj,record,index)}}
                            }
                            return (
                                    <Option key={index} {...optionApi} value={optionObj.value}>{optionObj.name}</Option>
                                )
                        })}
                    </Select>
                </div>
            );
        }
    }
    _AutoCompleteColumns(text,record,index, column,collocate){
        const API = collocate.API || {};
        if((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+column] === true) && this.disabled[record[this._getKey()]+"_"+column] !== false){
            return (
                <div>
                    <div style={{width:'100%'}}>{text}</div>
                </div>
                
            )
        }else{
            let optiondata = [];
            if(isArray(collocate.option)){
                optiondata = collocate.option
            }else{
                optiondata = record[collocate.option] || []
            }
            return (
                <div>
                    <AutoComplete
                        style={{ width:'100%',zIndex: 0}}
                        {...API}
                        dataSource={optiondata}
                        value={text} onChange={value => this._handleChange(value,record,index,column)}
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                </div>
            );
        }
    }
    _DatePickerColumns(text,record,index, column,collocate){
        const API = collocate.API || {};    
        if((!!collocate.disabled || this.disabled[record[this._getKey()]+"_"+column] === true) && this.disabled[record[this._getKey()]+"_"+column] !== false){
            let _text = moment(text, 'YYYY-MM-DD').toString() === "Invalid date"?null:moment(text, 'YYYY-MM-DD').format('YYYY-MM-DD');
            return (
                <div>
                    <div style={{width:'100%'}}>{_text}</div>
                </div>                
            )
        }else{
            let _text = moment(text, 'YYYY-MM-DD').toString() === "Invalid date"?null:moment(text, 'YYYY-MM-DD');
            return (
                <div>
                    <DatePicker
                        value={_text}
                        onChange={(value,valueString) => this._handleChange(valueString,record,index,column,value)}
                    />
                </div>
            );
        }
    }
    _EditableColumns(columns){
        let _columns = columns.filter((item)=>item.show !== false).map((collocate)=>{
            let _collocate = cloneDeep(collocate)
            if(isFunction(_collocate.render)) return _collocate;
            let props = {}
            if(_collocate.type === 0){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{ 
                        children:this._textColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
            }
            else if(_collocate.type === 1){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{ 
                        children:this._inputColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
                
            }
            else if(_collocate.type === 2){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{ 
                        children:this._inputNumberColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
            }
            else if(_collocate.type === 3){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{
                        children:this._selectColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
            }
            else if(_collocate.type === 4){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{
                        children:this._AutoCompleteColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
            }
            else if(_collocate.type === 5){
                _collocate.render = (text,record,index)=> {
                    if(isFunction(_collocate.props)){
                        props = _collocate.props(text,record,index,_collocate.dataIndex,_collocate);
                    }
                    return{
                        children:this._DatePickerColumns(text,record,index,_collocate.dataIndex,_collocate),
                        props
                    }
                }
            }
            return _collocate;
        })
        return _columns;
    }
    _getKey = () =>{
        return this._tableProps.rowKey || "key";
    }
    _handleChange(value,record,index,column) {
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
        this.disabled = {...this.disabled,...this.disableds};
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
        return (
            <div className="LTtable">
    	       <Table
                    pagination={false}
                    {
                        ...{
                            ...this._tableProps,
                            ...{
                                dataSource:this.dataSource,
                                columns:this._columns}
                        }
                    }
                />
            </div>)
    }
}
export default EditableTable;