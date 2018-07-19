
const api = [
	{
		title: "方法",
		api: [
			{
				key: "1",
				parameter: "getCurrentColor",  //字段名
				instructions: '获取当前主题颜色',	//描述
				type: 'function()',	//类型
				default: "default",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "setCurrentColor",  //字段名
				instructions: '设置当前主题颜色',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "refreshColor",  //字段名
				instructions: '	刷新主题颜色',	//描述
				type: 'funtion',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}