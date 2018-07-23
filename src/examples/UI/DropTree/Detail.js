import React, { Component } from 'react';
import { DropTree ,Button } from 'quant-ui';
const dataSource = [
    {
        "id": 1,
        "name": "企业主体信22222用得分",
        "pid": null,
        "childrens": [
          {
            "id": 2,
            "name": "企业素质",
            "pid": 1,
            "childrens": [
              {
                "id": 5,
                "name": "基本信息",
                "pid": 2,
                "childrens": []
              },
              {
                "id": 6,
                "name": "管理认证",
                "pid": 2,
                "childrens": [
                  {
                    "id": 13,
                    "name": "国际性管理认证",
                    "pid": 6,
                    "childrens": [
                    ]
                  }
                ]
              }
            ]
          },
        ]
      }
];
const dataSource2 = [
    {
        "id": 1,
        "name": "企业主体信用得分",
        "pid": null,
        "childrens": [
          {
            "id": 2,
            "name": "企业素质",
            "pid": 1,
            "childrens":[
                {
                    "id": 5,
                    "name": "基本信息",
                    "pid": 2,
                    "childrens": []
                },
            ]
          },
        ]
      }
];
class Detail extends Component {
	
    isParentToChildren = (from,to) => {
        return true;//可以拖拽
    }
    onClick = (item) => {
        console.log(item)
    }
    onSetData = () => {
        if(this.refs.droptree){
            this.refs.droptree.ref.current.onSetData(dataSource2,()=>{})
        }
    }
    onResetData = () => {
        if(this.refs.droptree){
            this.refs.droptree.ref.current.onResetData()
        }
    }
    onGetData = () => {
        console.log(this.refs.droptree.ref.current.onGetData())
    }
    onChangeData = () => {
        if(this.refs.droptree){
            this.refs.droptree.ref.current.onChangeData(2,{name:"企业主得2222分"})
        }
    }
	render() {
		return (
			<div>
                <Button onClick={()=>this.onResetData()}>点我复原</Button>
                <Button onClick={()=>this.onSetData()}>点我设置数据</Button>
                <Button onClick={()=>this.onGetData()}>点我获取返回数据</Button>
                <Button onClick={()=>this.onChangeData()}>改变节点数据</Button>
                <DropTree 
                    isParentToChildren = {this.isParentToChildren}
                    onClick = {this.onClick}
                    dataSource={dataSource}
                    width="100"
                    isEditItem="true"
                    ref="droptree"/>
			</div>
		);
	}
}

export default Detail;
