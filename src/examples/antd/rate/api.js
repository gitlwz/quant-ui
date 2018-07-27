
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否允许再次点击后清除'	//描述
			},
			{
				key: "2",
				parameter: "allowHalf",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否允许半选'	//描述
			},
			{
				key: "3",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
			},
			{
				key: "4",
				parameter: "character",  //字段名
				type: 'ReactNode',	//类型
				must: '',				//是否必填
				default: '<Icon type="star" />',							//默认值
				instructions: '自定义字符'	//描述
			},
			{
				key: "5",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义样式类名'	//描述
			},
			{
				key: "6",
				parameter: "count",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '5',							//默认值
				instructions: 'star 总数'	//描述
			},
			{
				key: "7",
				parameter: "defaultValue",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '默认值'	//描述
			},
			{
				key: "8",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '只读，无法进行交互'	//描述
			},
			{
				key: "9",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义样式对象'	//描述
			},
			{
				key: "10",
				parameter: "value",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当前数，受控值'	//描述
			},
			{
				key: "11",
				parameter: "onBlur",  //字段名
				type: 'Function()',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '失去焦点时的回调'	//描述
			},
			{
				key: "12",
				parameter: "onChange",  //字段名
				type: 'Function(value: number)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选择时的回调'	//描述
			},
			{
				key: "13",
				parameter: "onFocus",  //字段名
				type: 'Function()',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '获取焦点时的回调'	//描述
			},
			{
				key: "14",
				parameter: "onHoverChange",  //字段名
				type: 'Function(value: number)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '鼠标经过时数值变化的回调'	//描述
			},
			{
				key: "15",
				parameter: "onKeyDown",  //字段名
				type: 'Function(event)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '按键回调'	//描述
			},
		]
	}

];

export default {
	api
}