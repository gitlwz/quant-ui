import React, { Component } from 'react';
import { DropTree ,Button } from 'quant-ui';
const dataSource = [
    {
        "id": 1,
        "name": "企业主体信用得分",
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
class Detail extends Component {
	
    isParentToChildren = (from,to) => {
        if(from.id == 13)
            return true;//可以拖拽
        else{
            return false;
        }
    }
    onClick = (item) => {
        console.log(item)
    }
	render() {
		return (
			<div>
                <DropTree 
                    isParentToChildren = {this.isParentToChildren}
                    onClick = {this.onClick}
                    dataSource={dataSource}
                    width={100}
                    ref="droptree"/>
			</div>
		);
	}
}

export default Detail;
