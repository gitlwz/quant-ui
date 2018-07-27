
const api = [
	{
		title: "Select props",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '支持清除'	//描述
			},
			{
				key: "2",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '默认获取焦点'	//描述
			},
			{
				key: "3",
				parameter: "defaultActiveFirstOption",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否默认高亮第一个选项。'	//描述
			},
			{
				key: "4",
				parameter: "defaultValue",  //字段名
				type: 'string|string[]|number|number[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定默认选中的条目'	//描述
			},
			{
				key: "5",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "6",
				parameter: "dropdownClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '下拉菜单的 className 属性'	//描述
			},
			{
				key: "7",
				parameter: "dropdownMatchSelectWidth",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '下拉菜单和选择器同宽'	//描述
			},
			{
				key: "8",
				parameter: "dropdownStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '下拉菜单的 style 属性'	//描述
			},
			{
				key: "9",
				parameter: "filterOption",  //字段名
				type: 'boolean or function(inputValue, option)',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。'	//描述
			},
			{
				key: "10",
				parameter: "firstActiveValue",  //字段名
				type: 'string|string[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认高亮的选项'	//描述
			},
			{
				key: "11",
				parameter: "getPopupContainer",  //字段名
				type: 'Function(triggerNode)',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。'	//描述
			},
			{
				key: "12",
				parameter: "labelInValue",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: ReactNode} 的格式'	//描述
			},
			{
				key: "13",
				parameter: "maxTagCount",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '最多显示多少个 tag'	//描述
			},
			{
				key: "14",
				parameter: "maxTagPlaceholder",  //字段名
				type: 'ReactNode/function(omittedValues)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '隐藏 tag 时显示的内容'	//描述
			},
			{
				key: "15",
				parameter: "mode",  //字段名
				type: '\'multiple\' | \'tags\'',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '设置 Select 的模式（2.9 之后支持）'	//描述
			},
			{
				key: "16",
				parameter: "notFoundContent",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'Not Found\'',							//默认值
				instructions: '当下拉列表为空时显示的内容'	//描述
			},
			{
				key: "17",
				parameter: "optionFilterProp",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'value',							//默认值
				instructions: '搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索'	//描述
			},
			{
				key: "18",
				parameter: "optionLabelProp",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'children （combobox 模式下为 value）',							//默认值
				instructions: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。'	//描述
			},
			{
				key: "19",
				parameter: "placeholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选择框默认文字'	//描述
			},
			{
				key: "20",
				parameter: "showArrow",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否显示下拉小箭头'	//描述
			},
			{
				key: "21",
				parameter: "showSearch",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '使单选模式可搜索'	//描述
			},
			{
				key: "22",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: '选择框大小，可选 large small'	//描述
			},
			{
				key: "23",
				parameter: "tags",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配（2.9 之后废弃，请使用 mode）'	//描述
			},
			{
				key: "24",
				parameter: "tokenSeparators",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '在 tags 和 multiple 模式下自动分词的分隔符'	//描述
			},
			{
				key: "25",
				parameter: "value",  //字段名
				type: 'string|string[]|number|number[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定当前选中的条目'	//描述
			},
			{
				key: "26",
				parameter: "onBlur",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '失去焦点的时回调'	//描述
			},
			{
				key: "27",
				parameter: "onChange",  //字段名
				type: 'function(value, option:Option/Array<Option>)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数'	//描述
			},
			{
				key: "28",
				parameter: "onDeselect",  //字段名
				type: 'function(value，option:Option)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效'	//描述
			},
			{
				key: "29",
				parameter: "onFocus",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '获得焦点时回调'	//描述
			},
			{
				key: "30",
				parameter: "onMouseEnter",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '鼠标移入时回调'	//描述
			},
			{
				key: "31",
				parameter: "onMouseLeave",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '鼠标移出时回调'	//描述
			},
			{
				key: "32",
				parameter: "onPopupScroll",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '下拉列表滚动时的回调'	//描述
			},
			{
				key: "33",
				parameter: "onSearch",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '文本框值变化时回调'	//描述
			},
			{
				key: "34",
				parameter: "onSelect",  //字段名
				type: 'function(value, option:Option)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '被选中时调用，参数为选中项的 value (或 key) 值'	//描述
			},
		]
	},
	{
		title: "Option props",
		api: [
			{
				key: "1",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "2",
				parameter: "key",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置'	//描述
			},
			{
				key: "3",
				parameter: "title",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选中该 Option 后，Select 的 title'	//描述
			},
			{
				key: "4",
				parameter: "value",  //字段名
				type: 'string|number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认根据此属性值进行筛选'	//描述
			},
		]
	},
	{
		title: "OptGroup props",
		api: [
			{
				key: "1",
				parameter: "key",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: ''	//描述
			},
			{
				key: "2",
				parameter: "label",  //字段名
				type: 'string|React.Element',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '组名'	//描述
			},
		]
	}


];

export default {
	api
}