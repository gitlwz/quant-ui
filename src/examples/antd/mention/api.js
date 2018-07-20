
const api = [
	{
		title: "Mention",
		api: [
			{
				key: "1",
				parameter: "getMentions",  //字段名
				type: 'Function(contentState: ContentState): string[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '获取当前 contentState 中提到的人的列表'	//描述
			},
			{
				key: "2",
				parameter: "toContentState",  //字段名
				type: 'Function(value: string): ContentState',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '把字符串转成 ContentState'	//描述
			},
			{
				key: "3",
				parameter: "toString",  //字段名
				type: 'Function(contentState: ContentState): string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '把 ContentState 转成字符串'	//描述
			},
			{
				key: "4",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
			},
			{
				key: "5",
				parameter: "defaultValue",  //字段名
				type: 'ContentState, 可以用 Mention.toContentState(text) 把文字转换成 ContentState',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '默认值'	//描述
			},
			{
				key: "6",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用状态.'	//描述
			},
			{
				key: "7",
				parameter: "getSuggestionContainer",  //字段名
				type: 'function()',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位'	//描述
			},
			{
				key: "8",
				parameter: "loading",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '加载中'	//描述
			},
			{
				key: "9",
				parameter: "multiLines",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '多行模式'	//描述
			},
			{
				key: "10",
				parameter: "notFoundContent",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'无匹配结果，轻敲空格完成输入\'',							//默认值
				instructions: '未找到时的内容'	//描述
			},
			{
				key: "11",
				parameter: "placeholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '输入框默认文字'	//描述
			},
			{
				key: "12",
				parameter: "placement",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'bottom\'',							//默认值
				instructions: '建议框位置，可选 top bottom'	//描述
			},
			{
				key: "13",
				parameter: "prefix",  //字段名
				type: 'string or Array',	//类型
				must: '',				//是否必填
				default: '\'@\'',							//默认值
				instructions: '触发弹出下拉框的字符'	//描述
			},
			{
				key: "14",
				parameter: "readOnly",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否只读.'	//描述
			},
			{
				key: "15",
				parameter: "suggestions",  //字段名
				type: 'Array<string|Mention.Nav>',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '建议内容'	//描述
			},
			{
				key: "16",
				parameter: "suggestionStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: '弹出下拉框样式'	//描述
			},
			{
				key: "17",
				parameter: "value",  //字段名
				type: 'ContentState',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '值'	//描述
			},
			{
				key: "18",
				parameter: "onBlur",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '失去焦点时回调'	//描述
			},
			{
				key: "19",
				parameter: "onChange",  //字段名
				type: 'function(contentState: ContentState)',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '输入框内容变化时回调'	//描述
			},
			{
				key: "20",
				parameter: "onFocus",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '获得焦点时回调'	//描述
			},
			{
				key: "21",
				parameter: "onSearchChange",  //字段名
				type: 'function(value:string, trigger: string)',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '输入框中 @ 变化时回调'	//描述
			},
			{
				key: "21",
				parameter: "onSelect",  //字段名
				type: 'function(suggestion: string, data?: any)',	//类型
				must: '',				//是否必填
				default: 'null',							//默认值
				instructions: '下拉框选择建议时回调'	//描述
			},
		]
	},
	{
		title: "Nav",
		api: [
			{
				key: "1",
				parameter: "children	",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: '建议内容'	//描述
			},
			{
				key: "2",
				parameter: "value	",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '""',							//默认值
				instructions: '建议值，选择建议时，用此值插入到输入框中'	//描述
			},
		]
	}

];

export default {
	api
}