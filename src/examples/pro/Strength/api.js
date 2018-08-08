
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "value",  //字段名
				instructions: '需要测试的数值强度	',	//描述
				type: 'string',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "onChange",  //字段名
				instructions: '当前测试值强度的回调函数 params:0 未达到测试下限| 1 弱|2中|3强',	//描述
				type: 'function(type)',	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}