
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
				instructions: '是否支持清除'	//描述
            },
            {
                key: "2",
				parameter: "autoFocus",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
            },
            {
                key: "3",
				parameter: "changeOnSelect",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: '当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示'
            },
            {
                key: "4",
				parameter: "className",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 自定义类名'
            },
            {
                key: "5",
				parameter: "defaultValue",  
				type: "string[]",
				must: '',
				default: '[]',
				instructions: '默认的选中项'
            },
            {
                key: "6",
				parameter: "disabled",  
				type: "boolean",
				must: '',
				default: "false",
				instructions: '禁用'
            },
            {
                key: "7",
				parameter: "displayRender",  
				type: "(label, selectedOptions) => ReactNode",
				must: '',
				default: "label => label.join(' / ')",
				instructions: '选择后展示的渲染函数'
			},
			{
                key: "8",
				parameter: "expandTrigger",  
				type: "string",
				must: '',
				default: "click",
				instructions: '次级菜单的展开方式，可选 \'click\' 和 \'hover\''
			},
			{
                key: "9",
				parameter: "fieldNames",  
				type: "object",
				must: '',
				default: "{ label: 'label', value: 'value', children: 'children' }",
				instructions: '自定义 options 中 label name children 的字段'
			},
			{
                key: "10",
				parameter: "getPopupContainer",  
				type: "Function(triggerNode)",
				must: '',
				default: "() => document.body",
				instructions: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。'
			},
			{
                key: "11",
				parameter: "loadData",  
				type: "(selectedOptions) => void",
				must: '',
				default: "-",
				instructions: '用于动态加载选项，无法与 showSearch 一起使用'
			},
			{
                key: "12",
				parameter: "notFoundContent",  
				type: "string",
				must: '',
				default: "'Not Found'",
				instructions: '当下拉列表为空时显示的内容'
			},
			{
                key: "13",
				parameter: "options",  
				type: "object",
				must: '',
				default: "-",
				instructions: '可选项数据源'
			},
			{
                key: "14",
				parameter: "placeholder",  
				type: "string",
				must: '',
				default: "'请选择'",
				instructions: '输入框占位文本'
			},
			{
                key: "15",
				parameter: "popupClassName",  
				type: "string",
				must: '',
				default: "-",
				instructions: '自定义浮层类名'
			},
			{
                key: "16",
				parameter: "popupPlacement",  
				type: "Enum",
				must: '',
				default: "bottomLeft",
				instructions: '浮层预设位置：bottomLeft bottomRight topLeft topRight'
			},
			{
                key: "17",
				parameter: "popupVisible",  
				type: "boolean",
				must: '',
				default: "-",
				instructions: '控制浮层显隐'
			},
			{
                key: "18",
				parameter: "showSearch",  
				type: "boolean",
				must: '',
				default: "false",
				instructions: '在选择框中显示搜索框'
			},
			{
                key: "19",
				parameter: "size",  
				type: "string",
				must: '',
				default: "default",
				instructions: '输入框大小，可选 large default small'
			},
			{
                key: "20",
				parameter: "style",  
				type: "string",
				must: '',
				default: "-",
				instructions: '自定义样式'
			},
			{
                key: "21",
				parameter: "value",  
				type: "string[]",
				must: '',
				default: "-",
				instructions: '指定选中项'
			},
			{
                key: "22",
				parameter: "onChange",  
				type: "(value, selectedOptions) => void",
				must: '',
				default: "-",
				instructions: '选择完成后的回调'
			},
			{
                key: "23",
				parameter: "onPopupVisibleChange",  
				type: "(value) => void",
				must: '',
				default: "-",
				instructions: '显示/隐藏浮层的回调'
			},
			{
                key: "24",
				parameter: "filter",  
				type: "function(inputValue, path): boolean",
				must: '',
				default: "",
				instructions: '接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。'
			},
			{
                key: "25",
				parameter: "matchInputWidth",  
				type: "boolean",
				must: '',
				default: "",
				instructions: '搜索结果列表是否与输入框同宽'
			},
			{
                key: "26",
				parameter: "render",  
				type: "function(inputValue, path): ReactNode",
				must: '',
				default: "",
				instructions: '用于渲染 filter 后的选项'
			},
			{
                key: "27",
				parameter: "sort",  
				type: "function(a, b, inputValue)",
				must: '',
				default: "",
				instructions: '用于排序 filter 后的选项'
            },
        ]
    },


];

export default {
	api
}