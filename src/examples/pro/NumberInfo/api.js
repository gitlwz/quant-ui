
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "title",  //字段名
				instructions: '标题',	//描述
				type: '	ReactNode|string',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "subTitle",  //字段名
				instructions: '子标题	',	//描述
				type: '	ReactNode|string',	//类型
				default: "-",						//默认值
				must: '',
			},{
				key: "3",
				parameter: "total",  //字段名
				instructions: '总量',	//描述
				type: '	ReactNode|string',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "subTotal",  //字段名
				instructions: '子总量	',	//描述
				type: '	ReactNode|string',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "status",  //字段名
				instructions: '增加状态	',	//描述
				type: "'up | down'",	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "6",
				parameter: "theme",  //字段名
				instructions: '状态样式	',	//描述
				type: 'string',	//类型
				default: "light",							//默认值
				must: '',
			},{
				key: "7",
				parameter: "gap",  //字段名
				instructions: '设置数字和描述直接的间距（像素）',	//描述
				type: '	number',	//类型
				default: "8",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}