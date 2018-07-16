
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "placeholder",  //字段名
				instructions: '占位文字',	//描述
				type: '	string',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "dataSource",  //字段名
				instructions: '当前提示内容列表',	//描述
				type: '	string[]',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "onSearch",  //字段名
				instructions: '选择某项或按下回车时的回调',	//描述
				type: 'function(value)',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "onChange",  //字段名
				instructions: '输入搜索字符的回调',	//描述
				type: 'function(value)',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "onPressEnter",  //字段名
				instructions: '按下回车时的回调',	//描述
				type: 'function(value)',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}