import React, { Component } from 'react';
import { DropTree ,Button } from 'quant-ui';
const dataSource = {
	"data": [
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
					"childrens": [
					  {
						"id": 10,
						"name": "企业主体信息识别",
						"pid": 5,
						"childrens": [
						]
					  },
					  {
						"id": 11,
						"name": "企业持续注册时间",
						"pid": 5,
						"childrens": [
						]
					  },
					  {
						"id": 12,
						"name": "注册资本",
						"pid": 5,
						"childrens": [
						]
					  }
					]
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
	]
};
const dataSource2 = {
	"data": [
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
	]
};
class Detail extends Component {
	
	render() {
		return (
			<div>
				<Button onClick={()=>{this.refs.droptree.onReset()}}>点我复原</Button>
				<Button onClick={()=>{this.refs.droptree.onSetData(dataSource2)}}>点我设置数据</Button>
				<Button onClick={()=>{alert(JSON.stringify(this.refs.droptree.onGetData()))}}>点我获取改变后数据</Button>
				<DropTree ref="droptree"/>
			</div>
		);
	}
}

export default Detail;
