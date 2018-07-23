
const api = [
	{
		title: "Radio",
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
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '指定当前是否选中'	//描述
			},
			{
				key: "3",
				parameter: "defaultChecked",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '初始是否选中'	//描述
			},
			{
				key: "4",
				parameter: "value",  //字段名
				type: 'any',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '根据 value 进行比较，判断是否选中'	//描述
			},
		]
	},
	{
		title: "RadioGroup",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'any',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认选中的值'	//描述
			},
			{
				key: "2",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '禁选所有子单选器'	//描述
			},
			{
				key: "3",
				parameter: "name",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'RadioGroup 下所有 input[type="radio"] 的 name 属性'	//描述
			},
			{
				key: "4",
				parameter: "options",  //字段名
				type: 'string[] | Array<{ label: string value: string disabled?: boolean }>',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '以配置形式设置子元素'	//描述
			},
			{
				key: "5",
				parameter: "size",  //字段名
				type: 'large | default | small',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: '大小，只对按钮样式生效'	//描述
			},
			{
				key: "6",
				parameter: "value",  //字段名
				type: 'any',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '用于设置当前选中的值'	//描述
			},
			{
				key: "7",
				parameter: "onChange",  //字段名
				type: 'Function(e:Event)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '选项变化时的回调函数'	//描述
			},
			{
				key: "8",
				parameter: "buttonStyle",  //字段名
				type: 'outline | solid',	//类型
				must: '',				//是否必填
				default: 'outline',							//默认值
				instructions: 'RadioButton 的风格样式，目前有描边和填色两种风格'	//描述
			},
		]
	}


];

export default {
	api
}