
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "children",  //字段名
				instructions: '工具栏内容，向右对齐',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "extra",  //字段名
				instructions: '额外信息，向左对齐',	//描述
				type: 'ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}