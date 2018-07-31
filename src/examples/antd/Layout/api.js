
const api = [
	{
		title: "Layout",
		api: [
			{
				key: "1",
				parameter: "string",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '	-',							//默认值
				instructions: '容器 className'	//描述
			},
			{
				key: "2",
				parameter: "hasSider",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动'	//描述
			},
			{
				key: "3",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定样式	'	//描述
			},
			
		]
	},
	{
		title: "Layout.Sider",
		api: [
			{
				key: "1",
				parameter: "breakpoint",  //字段名
				type: "Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }",	//类型
				must: '',				//是否必填
				default: '	-',							//默认值
				instructions: '触发响应式布局的断点'	//描述
			},
			{
				key: "2",
				parameter: "collapsed",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当前收起状态	'	//描述
			},
			{
				key: "3",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '容器 className'	//描述
			},
			{
				key: "4",
				parameter: "collapsedWidth",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '64',							//默认值
				instructions: '收缩宽度，设置为 0 会出现特殊 trigger'	//描述
			},	
			{
				key: "5",
				parameter: "collapsible",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否可收起	'	//描述
			},
			{
				key: "6",
				parameter: "defaultCollapsed",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否默认收起	'	//描述
			},
			{
				key: "7",
				parameter: "reverseArrow",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用'	//描述
			},
			{
				key: "8",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定样式	'	//描述
			},
			{
				key: "9",
				parameter: "theme",  //字段名
				type: 'string: light dark',	//类型
				must: '',				//是否必填
				default: 'dark',							//默认值
				instructions: '主题颜色	'	//描述
			},
			{
				key: "10",
				parameter: "trigger",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义 trigger，设置为 null 时隐藏 trigger'	//描述
			},
			{
				key: "11",
				parameter: "width",  //字段名
				type: 'number|string',	//类型
				must: '',				//是否必填
				default: '200',							//默认值
				instructions: '宽度'	//描述
			},
			{
				key: "12",
				parameter: "onCollapse",  //字段名
				type: '(collapsed, type) => {}',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发'	//描述
			},
			{
				key: "13",
				parameter: "onBreakpoint",  //字段名
				type: '(broken) => {}',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '触发响应式布局断点时的回调'	//描述
			},
		]
	},
	
];

export default {
	api
}