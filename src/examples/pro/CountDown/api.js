
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "format",  //字段名
				instructions: '时间格式化显示',	//描述
				type: '	Function(time)',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "target",  //字段名
				instructions: '目标时间',	//描述
				type: 'Date',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "onEnd",  //字段名
				instructions: '	倒计时结束回调',	//描述
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