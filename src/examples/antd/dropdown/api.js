
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '菜单是否禁用'	//描述
			},
			{
				key: "2",
				parameter: "getPopupContainer",  //字段名
				type: 'Function(triggerNode)',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 2.7 中增加'	//描述
			},
			{
				key: "3",
				parameter: "overlay",  //字段名
				type: 'Menu',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '菜单 button 的行为和 a 链接一致'	//描述
			},
			{
				key: "4",
				parameter: "placement",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'bottomLeft',							//默认值
				instructions: '菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight'	//描述
			},
			{
				key: "5",
				parameter: "trigger",  //字段名
				type: 'Array<click|hover|contextMenu>',	//类型
				must: '',				//是否必填
				default: '[\'hover\']',							//默认值
				instructions: '触发下拉的行为	'	//描述
			},
			{
				key: "6",
				parameter: "visible",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '菜单是否显示'	//描述
			},
			{
				key: "7",
				parameter: "onVisibleChange",  //字段名
				type: 'Function(visible)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '菜单显示状态改变时调用，参数为 visible'	//描述
			},
		]
	}

];

export default {
	api
}