
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '支持清除, 单选模式有效'	//描述
			},
			{
				key: "2",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
			},
			{
				key: "3",
				parameter: "backfill",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '使用键盘选择选项的时候把选中项回填到输入框中'	//描述
			},
			{
				key: "4",
				parameter: "children (自动完成的数据源)",  //字段名
				type: 'React.ReactElement / Array<React.ReactElement>',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自动完成的数据源'	//描述
			},
			{
				key: "5",
				parameter: "children (自定义输入框)	",  //字段名
				type: 'HTMLInputElement / HTMLTextAreaElement / React.ReactElement',	//类型
				must: '',				//是否必填
				default: '<Input />',							//默认值
				instructions: '自定义输入框	HTMLInputElement / '	//描述
			},
			{
				key: "6",
				parameter: "dataSource",  //字段名
				type: 'DataSourceItemType[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '自动完成的数据源 '	//描述
			},
			{
				key: "7",
				parameter: "defaultActiveFirstOption",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否默认高亮第一个选项。 '	//描述
			},
			{
				key: "8",
				parameter: "defaultValue",  //字段名
				type: 'string|string[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode}>',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '指定默认选中的条目'	//描述
			},
			{
				key: "9",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "10",
				parameter: "filterOption",  //字段名
				type: 'boolean or function(inputValue, option)',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。'	//描述
			},
			{
				key: "11",
				parameter: "optionLabelProp",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'children',							//默认值
				instructions: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。'	//描述
			},
			{
				key: "12",
				parameter: "placeholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '输入框提示'
			},
			{
				key: "13",
				parameter: "value",  //字段名
				type: 'string|string[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode }>',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '指定当前选中的条目'
			},
			{
				key: "14",
				parameter: "onBlur",  //字段名
				type: 'function()',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '获取焦点时的回调'
			},
			{
				key: "15",
				parameter: "onChange",  //字段名
				type: 'function(value)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '选中 option，或 input 的 value 变化时，调用此函数'
			},
			{
				key: "16",
				parameter: "onFocus",  //字段名
				type: 'function()',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '失去焦点时的回调'
			},
			{
				key: "17",
				parameter: "onSearch",  //字段名
				type: 'function(value)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '搜索补全项的时候调用'
			},
			{
				key: "18",
				parameter: "onSelect",  //字段名
				type: 'function(value, option)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '被选中时调用，参数为选中项的 value 值'
			},
		]
	}

];

export default {
	api
}