
const api = [
	{
		title: "currency-option",
		api: [
			{
				key: "1.1",
				parameter: "symbol",  //字段名
				instructions: '符号',	//描述
				type: '',	//类型
				default: "$",							//默认值
				must: '',
			},{
				key: "1",
				parameter: "formatWithSymbol",  //字段名
				instructions: '当formatWithSymbol设置为true，这个货币符号将调用currency.format()时使用',	//描述
				type: '',	//类型
				default: "false",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "separator ",  //字段名
				instructions: '数字之间的分隔符  currency.format()实现',	//描述
				type: '',	//类型
				default: ",",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "decimal",  //字段名
				instructions: '	小数符号',	//描述
				type: '',	//类型
				default: ".",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "precision",  //字段名
				instructions: '小数位数',	//描述
				type: '',	//类型
				default: "2",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "precision",  //字段名
				instructions: '小数位数',	//描述
				type: '',	//类型
				default: "2",							//默认值
				must: '',
			},{
				key: "6",
				parameter: "errorOnInvalid ",  //字段名
				instructions: '如果传入无效值（例如null或undefined），currency则会引发错误',	//描述
				type: '',	//类型
				default: "false",							//默认值
				must: '',
			},{
				key: "7",
				parameter: "increment ",  //字段名
				instructions: '实现实现舍入的货币时，设置该increment值将允许您设置最接近的增量以将显示值四舍五入。',	//描述
				type: '',	//类型
				default: "null",							//默认值
				must: '',
			},{
				key: "8",
				parameter: "useVedic  ",  //字段名
				instructions: '设置useVedic将使用正确的分组格式化值，即10,00,000.00。',	//描述
				type: '',	//类型
				default: "false",							//默认值
				must: '',
			}
		]
	},{
		title:"currency-function",
		api:[
			{
				key: "0",
				parameter: "add  ",  //字段名
				instructions: '添加一个string，number或currency值与当前的货币实例。',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "1",
				parameter: "subtract  ",  //字段名
				instructions: '将一个 string，number或currency值减去当前货币实例。',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "multiply",  //字段名
				instructions: '将当前货币实例乘以number',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "divide",  //字段名
				instructions: '将当前货币实例除以number。',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "distribute",  //字段名
				instructions: '分配采用货币值，并尝试均匀分配金额。分配中剩余的任何额外分数将堆叠在第一组条目上。',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "format",  //字段名
				instructions: '一种简单的格式化程序，返回人性化的货币格式',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "6",
				parameter: "dollars",  //字段名
				instructions: '返回货币的美元价值。',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "7",
				parameter: "cents",  //字段名
				instructions: '返回货币的小数位',	//描述
				type: 'function',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}