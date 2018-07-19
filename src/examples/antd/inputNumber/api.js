
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
			},
			{
				key: "2",
				parameter: "defaultValue",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '初始值'	//描述
			},
			{
				key: "3",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '禁用'	//描述
			},
			{
				key: "4",
				parameter: "formatter",  //字段名
				type: 'function(value: number | string): string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定输入框展示值的格式'	//描述
			},
			{
				key: "5",
				parameter: "max",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: 'Infinity',							//默认值
				instructions: '最大值'	//描述
			},
			{
				key: "6",
				parameter: "min",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-Infinity',							//默认值
				instructions: '最小值'	//描述
			},
			{
				key: "7",
				parameter: "parser",  //字段名
				type: 'function( string): number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用'	//描述
			},
			{
				key: "8",
				parameter: "precision",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '数值精度'	//描述
			},
			{
				key: "9",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '输入框大小'	//描述
			},
			{
				key: "10",
				parameter: "step",  //字段名
				type: 'number|string',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '每次改变步数，可以为小数'	//描述
			},
			{
				key: "11",
				parameter: "value",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '当前值'	//描述
			},
			{
				key: "12",
				parameter: "onChange",  //字段名
				type: 'Function(value: number | string)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '变化回调'	//描述
			},
		]
	}

];

export default {
	api
}