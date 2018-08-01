
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "colorful",  //字段名
				instructions: '是否彩色标记	',	//描述
				type: '	Boolean',	//类型
				default: "true",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "flag",  //字段名
				instructions: '上升下降标识：up|down',	//描述
				type: 'string',	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}