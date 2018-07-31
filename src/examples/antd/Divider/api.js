
const api = [
	{
		title: "Divider API",
		api: [
			{
				key: "1",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '分割线样式类	'	//描述
			},
			{
				key: "2",
				parameter: "dashed	",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否虚线	'	//描述
			},
			{
				key: "3",
				parameter: "orientation",  //字段名
				type: 'enum: left right',	//类型
				must: '',				//是否必填
				default: 'center',							//默认值
				instructions: '分割线标题的位置	'	//描述
            },
            {
				key: "4",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '分割线样式对象		'	//描述
            },
            {
				key: "5",
				parameter: "type",  //字段名
				type: 'enum: horizontal vertical',	//类型
				must: '',				//是否必填
				default: 'horizontal',							//默认值
				instructions: '水平还是垂直类型		'	//描述
			},
		]
	},
	
];

export default {
	api
}