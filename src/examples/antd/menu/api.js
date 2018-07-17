
const api = [
	{
		title: "Menu",
		api: [
			{
				key: "1",
				parameter: "defaultOpenKeys",  //字段名
				type: '',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '初始展开的 SubMenu 菜单项 key 数组'	//描述
			},
			{
				key: "2",
				parameter: "defaultSelectedKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '初始选中的菜单项 key 数组'	//描述
			},
			{
				key: "3",
				parameter: "forceSubMenuRender",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '在子菜单展示之前就渲染进 DOM'	//描述
			},
			{
				key: "4",
				parameter: "inlineCollapsed",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'inline 时菜单是否收起状态'	//描述
			},
			{
				key: "5",
				parameter: "inlineIndent",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '24',							//默认值
				instructions: 'inline 模式的菜单缩进宽度'	//描述
			},
			{
				key: "6",
				parameter: "mode",  //字段名
				type: 'string: vertical vertical-right horizontal inline',	//类型
				must: '',				//是否必填
				default: 'vertical',							//默认值
				instructions: '菜单类型，现在支持垂直、水平、和内嵌模式三种'	//描述
			},
			{
				key: "7",
				parameter: "multiple",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否允许多选'	//描述
			},
			{
				key: "8",
				parameter: "openKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '当前展开的 SubMenu 菜单项 key 数组'	//描述
			},
			{
				key: "9",
				parameter: "selectable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否允许选中'	//描述
			},
			{
				key: "10",
				parameter: "selectedKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '当前选中的菜单项 key 数组'	//描述
			},
			{
				key: "11",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '根节点样式'	//描述
			},
			{
				key: "12",
				parameter: "subMenuCloseDelay",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0.1',							//默认值
				instructions: '用户鼠标离开子菜单后关闭延时，单位：秒'	//描述
			},
			{
				key: "13",
				parameter: "subMenuOpenDelay",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '用户鼠标进入子菜单后开启延时，单位：秒'	//描述
			},
			{
				key: "14",
				parameter: "theme",  //字段名
				type: 'string: light dark',	//类型
				must: '',				//是否必填
				default: 'light',							//默认值
				instructions: '主题颜色'	//描述
			},
			{
				key: "15",
				parameter: "onClick",  //字段名
				type: 'function({ item, key, keyPath })',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '点击 MenuItem 调用此函数'	//描述
			},
			{
				key: "16",
				parameter: "onDeselect",  //字段名
				type: 'function({ item, key, selectedKeys })',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '取消选中时调用，仅在 multiple 生效'	//描述
			},
			{
				key: "17",
				parameter: "onOpenChange",  //字段名
				type: 'function(openKeys: string[])',	//类型
				must: '',				//是否必填
				default: 'noop',							//默认值
				instructions: 'SubMenu 展开/关闭的回调'	//描述
			},
			{
				key: "18",
				parameter: "onSelect",  //字段名
				type: 'function({ item, key, selectedKeys })',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '被选中时调用'	//描述
			},
		]
	},
	{
		title: "Menu.Item",
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
				instructions: 'item 的唯一标志'	//描述
			},
		]
	},
	{
		title: "Menu.SubMenu",
		api: [
			{
				key: "1",
				parameter: "children",  //字段名
				type: 'Array<MenuItem|SubMenu>',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '子菜单的菜单项'	//描述
			},
			{
				key: "2",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "3",
				parameter: "key",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '唯一标志'	//描述
			},
			{
				key: "4",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '子菜单项值'	//描述
			},
			{
				key: "5",
				parameter: "onTitleClick",  //字段名
				type: 'function({ key, domEvent })',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '点击子菜单标题'	//描述
			},
		]
	},
	{
		title: "Menu.ItemGroup",
		api: [
			{
				key: "1",
				parameter: "children",  //字段名
				type: 'MenuItem[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '分组的菜单项'	//描述
			},
			{
				key: "2",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '分组标题'	//描述
			},
		]
	},

];

export default {
	api
}