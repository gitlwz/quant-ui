
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "set",  //字段名
				instructions: 'set(key, val)',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
            },
            {
				key: "2",
				parameter: "get",  //字段名
				instructions: 'get(key, def)',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			},
            {
				key: "3",
				parameter: "remove",  //字段名
				instructions: 'remove(key)',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			},
            {
				key: "4",
				parameter: "has",  //字段名
				instructions: 'has(key)',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			},
            {
				key: "5",
				parameter: "clear",  //字段名
				instructions: 'clear()',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			},
            {
				key: "6",
				parameter: "getAll",  //字段名
				instructions: 'getAll()',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			},
            {
				key: "7",
				parameter: "forEach",  //字段名
				instructions: 'forEach()',	//描述
				type: '	',	//类型
				default: "-",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}