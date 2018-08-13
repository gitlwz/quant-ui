import React, { Component } from 'react';
import { Table, Icon, Divider,Radio,MoveModal,Switch,List ,DescriptionList,utils } from 'quant-ui';
import classNames from "classNames";
import cloneDeep  from 'lodash/cloneDeep';
import "./index.less"
import { DropTarget, DragDropContext,DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
const {interchange} = utils
const { Description } = DescriptionList;
let debounce = new Date().getTime();

class Title2 extends Component{
    onMouseDown = (e) =>{
        e.preventDefault();
        if(e.button == 2){
            this.props.rightClick()
        }
    }
    render(){
        const {
            ...restProps
        } = this.props;
        const style = { ...restProps.style, cursor: 'move' };
        let className = classNames("ExhibitTable",restProps.className);
        return(
                <tr
                    {...restProps}
                    className={className}
                    onContextMenu = {this.onMouseDown}
                    style={style}
                />
        )
    }
}
let Title = Title2



class Cell31 extends Component{
    render(){
        const {connectDragSource,connectDropTarget,isDragging,children} = this.props;
        return(
                connectDropTarget(
                    connectDragSource(
                            <div>
                                {children}
                            </div>
                        )
                )
            )
                    
    }
}
const cardTarget = {
    canDrop() {
		return true
    },
    hover(props, monitor) {
        let {children,canDrag,moveCard} = props
        let { removeKey } = monitor.getItem();
        let hoverKey = children.key;
        //有fixed  false  无就true
        console.log("*******",canDrag(hoverKey))
		if (hoverKey !== removeKey && canDrag(hoverKey)) {
            let _debounce = new Date().getTime()
            if(_debounce - debounce < 250 ) return
            debounce = _debounce;
            moveCard(hoverKey, removeKey)
		}
	}
}
const cardSource = {
    canDrag(props) {
        return  props.canDrag(props.children.key)
    },
    beginDrag(props) {
		return {
            removeKey:props.children.key
		}
    },
};
let Cell3  = DropTarget("ExhibitTable",cardTarget,connect => ({
	connectDropTarget: connect.dropTarget(),
}))(DragSource("ExhibitTable", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))(Cell31));

class Cell2 extends Component{
    render(){
        const {connectDropTarget,children,canDrag,moveCard,...restProps} = this.props;
        const style = { ...restProps.style, padding:'0px'};
        return <th
                    {...restProps}
                    style={style}
                >
                    {connectDropTarget(
                    <div>
                        {<Cell3 moveCard={moveCard} canDrag={canDrag} children={children} />}
                    </div>)}
                    
                </th>
    }
}

let Cell = DragDropContext(HTML5Backend)(
    DropTarget("ExhibitTable",{
        drop() {
            //
        },
    },connect => ({
        connectDropTarget: connect.dropTarget(),
    }))(Cell2)
    );
class ExhibitTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }
    rightClick = () =>{
        this.setState({
            visible:true
        })
    }
    onCancel = () => {
        this.setState({
            visible:false
        })
    }
    canDrag = (key) =>{
        let item = this.props.columns.find((ele)=>ele.key === key);
        return !item.fixed;
    }
    moveCard = (hoverKey, removeKey) => {
        this.props.moveCard(hoverKey, removeKey)
    }
    render() {
        let {columns,...restProps} = this.props;
        let components = {
            header:{
                    row:(props)=> <Title {...props} rightClick={this.rightClick} />,
                    cell:(props)=> <Cell {...props} canDrag={this.canDrag} moveCard={this.moveCard}/>
                }
        }
        let _columns = columns.filter((ele)=> ele.show !== false);
        return (
            <div>
                <Table {...this.props} columns={_columns} components={components} />
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
                        renderItem={(item)=>{
                            return (
                                <List.Item>
                                    <div className="ExhibitTable-list-item">
                                        <div>{item.title}</div>
                                        <div>
                                            <Switch 
                                                    checked={item.show || item.show === undefined}
                                                    checkedChildren={<Icon type="check" />} 
                                                    unCheckedChildren={<Icon type="cross" />} 
                                                    onChange = {(checked)=>{
                                                        this.props.switchChange(checked,cloneDeep(item))
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


const dataSource = [
    {
        name: 'Taylor Swift',
        age: '22',
        adress: 'SanFrancisco'
    },
    {
        name: 'Eason Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        adress: 'Hongkong'
    },
    {
        name: 'Jimmy',
        age: '12',
        adress: 'Shanghai'
    },
]

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            columns : [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a href="javascript:;">{text}</a>,
                    fixed:"left",
                    width:300
                },
                {
                    title: 'Name1',
                    dataIndex: 'name1',
                    key: 'name1',
                    width:300
                },
                {
                    title: 'Name2',
                    dataIndex: 'name2',
                    key: 'name2',
                    width:300
                },
                {
                    title: 'Name3',
                    dataIndex: 'name3',
                    key: 'name3',
                    width:300
                },
                {
                    title: 'Name4',
                    dataIndex: 'name4',
                    key: 'name4',
                    width:300
                },
                {
                    title: 'Name5',
                    dataIndex: 'name5',
                    key: 'name5',
                    width:300
                },
                
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    width:300
                },
                {
                    title: 'Adress',
                    dataIndex: 'adress',
                    key: 'adress',
                    width:300
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    width:300,
                    render: (text, record) => (
                        <span>
                            <a href='javascript:;'>Action - {record.name}</a>
                            <Divider type='vertical' />
                            <a href='javascript:;'>Delete</a>
                            <Divider type='vertical' />
                            <a href='javascript:;' className='ant-dropdown-link'>More actions <Icon type='down' /></a>
                        </span>
                    )
                },
            ]
        }
    }
  
    switchChange = (check,data) =>{
        let columns =  this.state.columns.map((ele)=>{
            if(ele.dataIndex === data.dataIndex){
                ele.show = check;
            }
            return ele;
        })
        this.setState({
            columns:columns
        })
    }
    moveCard = (hoverKey, removeKey) =>{
        console.log("moveCard*******",hoverKey, removeKey)
        let {columns} = this.state;
        let hoverIndex = columns.findIndex((ele)=>ele.key === hoverKey);
        let removeIndex = columns.findIndex((ele)=>ele.key === removeKey);
        this.setState({
            columns:interchange(hoverIndex,removeIndex,columns)
        },()=>{
            console.log("********",this.state.columns)
        })
    }
    render() {
        return (
            <div>
                <ExhibitTable 
                    columns={this.state.columns} 
                    dataSource={dataSource}
                    scroll={{
                        x:2700
                    }}
                    bordered
                    switchChange = {this.switchChange}
                    moveCard = {this.moveCard}
                    />
                
            </div>

        );
    }
}
export default Detail;
