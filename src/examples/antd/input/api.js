
const api = [
	{
		title: "Input",
		api: [
			{
				key: "1",
				parameter: "addonAfter",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '带标签的 input，设置后置标签'	//描述
			},
			{
				key: "2",
				parameter: "addonBefore",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '带标签的 input，设置前置标签'	//描述
			},
			{
				key: "3",
				parameter: "defaultValue",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '输入框默认内容'	//描述
			},
			{
				key: "4",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用状态，默认为 false'	//描述
			},
			{
				key: "5",
				parameter: "id",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '输入框的 id	'	//描述
			},
			{
				key: "6",
				parameter: "prefix",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '带有前缀图标的 input'	//描述
			},
			{
				key: "7",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: '控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small'	//描述
			},
			{
				key: "8",
				parameter: "suffix",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '带有后缀图标的 input'	//描述
			},
			{
				key: "8",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'text',							//默认值
				instructions: '声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")。'	//描述
			},
			{
				key: "9",
				parameter: "value",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '输入框内容'	//描述
			},
			{
				key: "10",
				parameter: "onPressEnter",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '按下回车的回调'	//描述
			},

		]
	},
	{
		title: "Input.TextArea",
		api: [
			{
				key: "1",
				parameter: "autosize",  //字段名
				type: 'boolean|object',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }'	//描述
			},
			{
				key: "2",
				parameter: "defaultValue",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '输入框默认内容'	//描述
			},
			{
				key: "3",
				parameter: "value",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '输入框内容'	//描述
			},
			{
				key: "4",
				parameter: "onPressEnter",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '按下回车的回调'	//描述
			},

		]
	},
	{
		title: "Input.Search",
		api: [
			{
				key: "1",
				parameter: "enterButton",  //字段名
				type: 'boolean|ReactNode',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否有确认按钮，可设为按钮文字'	//描述
			},
			{
				key: "2",
				parameter: "onSearch",  //字段名
				type: 'function(value, event)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '点击搜索或按下回车键时的回调'	//描述
			},
		]
	},
	{
		title: "Input.Group",
		api: [
			{
				key: "1",
				parameter: "compact",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否用紧凑模式'	//描述
			},
			{
				key: "2",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: 'Input.Group 中所有的 Input 的大小，可选 large default small'	//描述
			},
		]
	}

];

export default {
	api
}