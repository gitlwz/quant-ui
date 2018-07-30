
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "spin",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否有旋转动画'	//描述
			},
			{
				key: "2",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '	设置图标的样式，例如 fontSize 和 color'	//描述
			},
			{
				key: "3",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '图标类型'	//描述
			},
		]
	}

];

export default {
	api
}