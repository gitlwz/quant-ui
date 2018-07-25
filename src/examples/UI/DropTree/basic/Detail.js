import React, { Component } from 'react';
import { DropTree ,Button } from 'quant-ui';
const dataSource = [
    {
        "id": 1,
        "name": "企业主体信用得分",
        "pid": null,
        "notDrag": true,//不可拖拽
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
class Detail extends Component {
	constructor(props){
        super(props);
        this.state = {
            dataSource:dataSource
        }
    }
    onClick = (item) => {
        console.log(item)
    }
    onResetData = () => {
        if(this.refs.droptree){
            this.refs.droptree.ref.current.onResetData()
        }
    }
	render() {
		return (
			<div>
                <Button onClick={()=>this.onResetData()}>点我复原</Button>
                <DropTree 
                    onClick = {this.onClick}
                    dataSource={this.state.dataSource}
                    width={100}
                    ref="droptree"/>
			</div>
		);
	}
}

export default Detail;
