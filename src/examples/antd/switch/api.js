
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '组件自动获取焦点'	//描述
			},
			{
				key: "2",
				parameter: "checked",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '指定当前是否选中'	//描述
			},
			{
				key: "3",
				parameter: "checkedChildren",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '选中时的内容'	//描述
			},
			{
				key: "4",
				parameter: "defaultChecked",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '初始是否选中'	//描述
			},
			{
				key: "5",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "6",
				parameter: "loading",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '加载中的开关'	//描述
			},
			{
				key: "7",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: '开关大小，可选值：default small'	//描述
			},
			{
				key: "8",
				parameter: "unCheckedChildren",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '非选中时的内容'	//描述
			},
			{
				key: "9",
				parameter: "unCheckedChildren",  //字段名
				type: 'Function(checked:Boolean)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '变化时回调函数'	//描述
			},
		]
	}

];

export default {
	api
}