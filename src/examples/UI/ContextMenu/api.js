
const api = [
	{
		title: "ContextMenuProvider",
		api: [
			{
				key: "1",
				parameter: "id",  //字段名
				instructions: '将组件映射到上下文的ID',	//描述
				type: 'String | Number',	//类型
				default: "",							//默认值
				must: 'must',
			},{
				key: "2",
				parameter: "event",  //字段名
				instructions: '可用于指定菜单出现的方式，右键或点击事件',	//描述
				type: 'String',	//类型
				default: "onContextMenu",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "data",  //字段名
				instructions: '	传递给item组件点击回调事件',	//描述
				type: 'any',	//类型
				default: "-",							//默认值
				must: '',
			}
		]
	},{
		title: "ContextMenu",
		api: [
			{
				key: "1",
				parameter: "id",  //字段名
				instructions: '用于识别相应的菜单',	//描述
				type: 'String | Number',	//类型
				default: "",							//默认值
				must: 'must',
			},{
				key: "2",
				parameter: "theme",  //字段名
				instructions: '主题，有light | dark',	//描述
				type: 'String',	//类型
				default: "light",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "animation",  //字段名
				instructions: '菜单出现时的动画，fade | flip | pop | zoom',	//描述
				type: 'string',	//类型
				default: "fade",							//默认值
				must: '',
			}
		]
	},{
		title: "Submenu",
		api: [
			{
				key: "1",
				parameter: "label",  //字段名
				instructions: '子菜单标签，可以是string也可以是节点，如<div>hello</div>',	//描述
				type: 'any',	//类型
				default: "",							//默认值
				must: 'must',
			},{
				key: "2",
				parameter: "disabled",  //字段名
				instructions: '是否禁用该项目，可为函数，需返回bool值',	//描述
				type: 'bool| Function',	//类型
				default: "false",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "arrow",  //字段名
				instructions: '自定义节点箭头图标',	//描述
				type: '',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}