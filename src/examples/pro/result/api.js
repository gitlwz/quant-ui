const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "type",  //字段名
				instructions: '类型，不同类型自带对应的图标	',	//描述
				type: "Enum {'success', 'error'}",	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "title",  //字段名
				instructions: '标题',	//描述
				type: "ReactNode",	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "description",  //字段名
				instructions: '结果描述',	//描述
				type: "ReactNode",	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "extra",  //字段名
				instructions: '补充信息，有默认的灰色背景',	//描述
				type: "ReactNode",	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "actions",  //字段名
				instructions: '操作建议，推荐放置跳转链接，按钮组等',	//描述
				type: "ReactNode",	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}