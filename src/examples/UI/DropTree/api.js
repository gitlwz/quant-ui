const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "onReset",  //字段名
				instructions: '树形图复原',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "2",
				parameter: "onSetData",  //字段名
				instructions: '树形图数据设置，传入固定数据结构与设置成功后的回调函数',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "3",
				parameter: "onGetData",  //字段名
				instructions: '树形图数据获取',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "4",
				parameter: "dataSource",  //字段名
				instructions: '用于显示树形图数据，固定数据格式，详见代码',	//描述
				type: 'Object',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "5",
				parameter: "isParentToChildren  ",  //字段名
				instructions: '接受from和to参数，表示from节点是否能拖向to节点，返回true则可拖动',	//描述
				type: 'Function',	//类型
				default: "true",							//默认值
				must: '',
			},
			{
				key: "6",
				parameter: "renderItem ",  //字段名
				instructions: '自定义显示的数据，默认显示节点name属性',	//描述
				type: 'Function',	//类型
				default: "name",							//默认值
				must: '',
			},
			{
				key: "7",
				parameter: "onClick ",  //字段名
				instructions: '节点点击事件，返回该节点数据',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
            {
                key: "8",
                parameter: "width ",  //字段名
                instructions: '节点宽度',	//描述
                type: 'String',	//类型
                default: "100px",							//默认值
                must: '',
            },
            {
                key: "9",
                parameter: "onChangeData ",  //字段名
                instructions: '改变节点数据，传入id和改变后的对象数据',	//描述
                type: 'Function',	//类型
                default: "",							//默认值
                must: '',
            },
            {
                key: "10",
                parameter: "isEditItem ",  //字段名
                instructions: '是否可右键出现编辑框，增加或删除节点',	//描述
                type: 'String',	//类型
                default: "true",							//默认值
                must: '',
            },
		]
	}
];

export default {
	api
}