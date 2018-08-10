
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "title",  //字段名
				instructions: 'title 区域',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "logo",  //字段名
				instructions: '	logo区域',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "action",
				parameter: "action",  //字段名
				instructions: '	操作区，位于 title 行的行尾',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "content",
				parameter: "content",  //字段名
				instructions: '	内容区',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "extraContent",
				parameter: "extraContent",  //字段名
				instructions: '	额外内容区，位于content的右侧',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "breadcrumbList",
				parameter: "breadcrumbList",  //字段名
				instructions: '面包屑数据，配置了此属性时 routes params location breadcrumbNameMap 无效',	//描述
				type: '	array<{title: ReactNode, href?: string}>',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "routes",
				parameter: "routes",  //字段名
				instructions: '面包屑相关属性，router 的路由栈信息',	//描述
				type: 'object[]',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "params",
				parameter: "params",  //字段名
				instructions: '面包屑相关属性，路由的参数',	//描述
				type: 'object',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "location",
				parameter: "location",  //字段名
				instructions: '面包屑相关属性，当前的路由信息',	//描述
				type: 'object',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "breadcrumbNameMap",
				parameter: "breadcrumbNameMap",  //字段名
				instructions: '面包屑相关属性，路由的地址-名称映射表',	//描述
				type: 'object',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "tabList",
				parameter: "tabList",  //字段名
				instructions: 'tab 标题列表',	//描述
				type: 'array<{key: string, tab: ReactNode}>',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "tabActiveKey",
				parameter: "tabActiveKey",  //字段名
				instructions: '当前高亮的 tab 项',	//描述
				type: 'string',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "onTabChange",
				parameter: "onTabChange",  //字段名
				instructions: '切换面板的回调',	//描述
				type: '(key) => void',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "linkElement",
				parameter: "linkElement",  //字段名
				instructions: '定义链接的元素，默认为 a，可传入 react-router 的 Link',	//描述
				type: 'string|ReactElement',	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}