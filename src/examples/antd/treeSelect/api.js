
const api = [
	{
		title: "Tree props",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '显示清除按钮'	//描述
			},
			{
				key: "2",
				parameter: "autoClearSearchValue",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '当多选模式下值被选择，自动清空搜索框'	//描述
			},
			{
				key: "3",
				parameter: "defaultValue",  //字段名
				type: 'string/string[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '	指定默认选中的条目'	//描述
			},
			{
				key: "4",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '	是否禁用'	//描述
			},
			{
				key: "5",
				parameter: "dropdownClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '	下拉菜单的 className 属性'	//描述
			},
			{
				key: "6",
				parameter: "dropdownMatchSelectWidth",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '	下拉菜单和选择器同宽。默认将设置 min-width。'	//描述
			},
			{
				key: "7",
				parameter: "dropdownStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '下拉菜单的样式'	//描述
			},
			{
				key: "8",
				parameter: "filterTreeNode",  //字段名
				type: 'boolean|Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值)',	//类型
				must: '',				//是否必填
				default: 'Function',							//默认值
				instructions: '是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值'	//描述
			},
			{
				key: "9",
				parameter: "getPopupContainer",  //字段名
				type: 'Function(triggerNode)',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位'	//描述
			},
			{
				key: "10",
				parameter: "labelInValue",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式'	//描述
			},
			{
				key: "11",
				parameter: "loadData",  //字段名
				type: 'function(node)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '异步加载数据'	//描述
			},
			{
				key: "12",
				parameter: "maxTagCount",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '最多显示多少个 tag'	//描述
			},
			{
				key: "13",
				parameter: "maxTagPlaceholder",  //字段名
				type: 'ReactNode/function(omittedValues)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '隐藏 tag 时显示的内容'	//描述
			},
			{
				key: "14",
				parameter: "multiple",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '支持多选（当设置 treeCheckable 时自动变为true）'	//描述
			},
			{
				key: "15",
				parameter: "placeholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选择框默认文字'	//描述
			},
			{
				key: "16",
				parameter: "searchPlaceholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '搜索框默认文字'	//描述
			},
			{
				key: "17",
				parameter: "searchValue",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '搜索框的值，可以通过 onSearch 获取用户输入'	//描述
			},
			{
				key: "18",
				parameter: "showCheckedStrategy",  //字段名
				type: 'enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }',	//类型
				must: '',				//是否必填
				default: 'TreeSelect.SHOW_CHILD',							//默认值
				instructions: '定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.'	//描述
			},
			{
				key: "19",
				parameter: "showSearch",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '在下拉中显示搜索框(仅在单选模式下生效)'	//描述
			},
			{
				key: "20",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'default\'',							//默认值
				instructions: '选择框大小，可选 large small'	//描述
			},
			{
				key: "21",
				parameter: "treeCheckable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '显示 checkbox'	//描述
			},
			{
				key: "22",
				parameter: "treeCheckStrictly",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true'	//描述
			},
			{
				key: "23",
				parameter: "treeData",  //字段名
				type: 'array<{value, title, children, disabled, disableCheckbox, selectable}>',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）'	//描述
			},
			{
				key: "24",
				parameter: "treeDataSimpleMode",  //字段名
				type: 'false|Array<{ id: string, pId: string, rootPId: null }>',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: {id:1, pId:0, value:\'1\', title:"test1",...},..., pId 是父节点的 id)'	//描述
			},
			{
				key: "25",
				parameter: "treeDefaultExpandAll",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '默认展开所有树节点'	//描述
			},
			{
				key: "26",
				parameter: "treeDefaultExpandedKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认展开的树节点'	//描述
			},
			{
				key: "27",
				parameter: "treeNodeFilterProp",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'value\'',							//默认值
				instructions: '输入项过滤对应的 treeNode 属性'	//描述
			},
			{
				key: "28",
				parameter: "treeNodeLabelProp",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'title\'',							//默认值
				instructions: '作为显示的 prop 设置'	//描述
			},
			{
				key: "29",
				parameter: "value",  //字段名
				type: 'string/string[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '指定当前选中的条目'	//描述
			},
			{
				key: "30",
				parameter: "onChange",  //字段名
				type: 'function(value, label, extra)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选中树节点时调用此函数'	//描述
			},
			{
				key: "31",
				parameter: "onSearch",  //字段名
				type: 'function(value: string)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '文本框值变化时回调'	//描述
			},
			{
				key: "32",
				parameter: "onSelect",  //字段名
				type: 'function(value, node, extra)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '被选中时调用'	//描述
			},
		]
	},
	{
		title: "TreeNode props",
		api: [
			{
				key: "1",
				parameter: "disableCheckbox",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '禁掉 checkbox'	//描述
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
				parameter: "isLeaf",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '	是否是叶子节点'	//描述
			},
			{
				key: "4",
				parameter: "key",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '此项必须设置（其值在整个树范围内唯一）'	//描述
			},
			{
				key: "5",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '\'---\'',							//默认值
				instructions: '树节点显示的内容'	//描述
			},
			{
				key: "6",
				parameter: "value",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认根据此属性值进行筛选（其值在整个树范围内唯一）'	//描述
			},
		]
	}

];

export default {
	api
}