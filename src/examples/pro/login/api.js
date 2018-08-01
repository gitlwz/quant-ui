
const api = [
	{
		title: "Login",
		api: [
			{
				key: "1",
				parameter: "defaultActiveKey",  //字段名
				instructions: '默认激活 tab 面板的 key',	//描述
				type: '	String',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "onTabChange",  //字段名
				instructions: '切换页签时的回调	',	//描述
				type: '(key) => void',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "onSubmit",  //字段名
				instructions: '	点击提交时的回调	',	//描述
				type: '(err, values) => void',	//类型
				default: "",							//默认值
				must: '',
			}
		]
    },
    {
		title: "Login.Tab",
		api: [
			{
				key: "1",
				parameter: "key",  //字段名
				instructions: '对应选项卡的 key	',	//描述
				type: '	String',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "tab",  //字段名
				instructions: '选项卡头显示文字		',	//描述
				type: 'ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},
		]
    },
    {
		title: "Login.UserName ",
		api: [
			{
				key: "1",
				parameter: "name	",  //字段名
				instructions: '控件标记，提交数据中同样以此为 key',	//描述
				type: '	String',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "rules",  //字段名
				instructions: '校验规则，同 Form getFieldDecorator(id, options) 中 option.rules 的规则	',	//描述
				type: 'object[]	',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	},
];

export default {
	api
}