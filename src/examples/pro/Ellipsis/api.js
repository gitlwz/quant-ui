
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "tooltip",  //字段名
				instructions: '移动到文本展示完整内容的提示',	//描述
				type: '	boolean',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "length",  //字段名
				instructions: '在按照长度截取下的文本最大字符数，超过则截取省略',	//描述
				type: 'number',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "lines",  //字段名
				instructions: '在按照行数截取下最大的行数，超过则截取省略',	//描述
				type: 'number',	//类型
				default: "1",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}