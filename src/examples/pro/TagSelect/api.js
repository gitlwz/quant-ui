
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "value",  //字段名
				instructions: '选中的项	',	//描述
				type: '	string[] | number[]',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "defaultValue",  //字段名
				instructions: '默认选中的项	',	//描述
				type: 'string[] | number[]',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "onChange",  //字段名
				instructions: '	标签选择的回调函数	',	//描述
				type: 'Function(checkedTags)',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "expandable",  //字段名
				instructions: '	是否展示 展开/收起 按钮	',	//描述
				type: 'Boolean',	//类型
				default: "false",							//默认值
				must: '',
			},
		]
	},{
        title:'TagSelectOption',
        api:[
            {
                key: "1",
				parameter: "value",  //字段名
				instructions: 'TagSelect的值		',	//描述
				type: '	string | number',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "children",  //字段名
				instructions: 'tag的内容		',	//描述
				type: 'string | ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},
            
        ]
    }
];

export default {
	api
}