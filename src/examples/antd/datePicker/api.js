
const api = [
	{
		title: "Checkbox",
		api: [
			{
				key: "1",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
            },
            {
                key: "2",
				parameter: "checked",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '指定当前是否选中'	//描述
            },
            {
                key: "3",
				parameter: "defaultChecked",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: '初始是否选中'
            },
            {
                key: "4",
				parameter: "disabled",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: '失效状态'
            },
            {
                key: "5",
				parameter: "onChange",  
				type: "Function(e:Event)",
				must: '',
				default: '-',
				instructions: '变化时回调函数'
            },
        ]
	},
	{
		title: "Checkbox Group",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '默认选中的选项'	//描述
            },
            {
                key: "2",
				parameter: "disabled",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '整组失效'	//描述
            },
            {
                key: "3",
				parameter: "options",  
				type: "string[]",
				must: '',
				default: '[]',
				instructions: '指定可选项'
            },
            {
                key: "4",
				parameter: "value",  
				type: "string[]",
				must: '',
				default: '[]',
				instructions: '指定选中的选项'
            },
            {
                key: "5",
				parameter: "onChange",  
				type: "Function(checkedValue)",
				must: '',
				default: '-',
				instructions: '变化时回调函数'
            },
        ]
    },


];

export default {
	api
}