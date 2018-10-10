
const api = [
	{
		title: "function",
		api: [
			{
				key: "1",
				parameter: "stringify",  //字段名
				instructions: '对象序列化',	//描述
				type: '	Function(object, [options])',	//类型
				default: "-",							//默认值
				must: '',
            },
            {
				key: "2",
				parameter: "parse",  //字段名
				instructions: '反序列化',	//描述
				type: '	Function(string, [options])',	//类型
				default: "-",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}