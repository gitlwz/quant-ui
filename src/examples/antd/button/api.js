
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '按钮失效状态'	//描述
			},
			{
				key: "2",
				parameter: "ghost",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '幽灵属性，使按钮背景透明，版本 2.7 中增加'	//描述
			},
			{
				key: "3",
				parameter: "href",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致'	//描述
			},
			{
				key: "4",
				parameter: "htmlType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'button',							//默认值
				instructions: '设置 button 原生的 type 值，可选值请参考 HTML 标准'	//描述
			},
			{
				key: "5",
				parameter: "icon",  //字段名
				type: 'boolean | { delay: number }',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '设置按钮的图标类型'	//描述
			},
			{
				key: "6",
				parameter: "loading",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'button',							//默认值
				instructions: '设置按钮载入状态'	//描述
			},
			{
				key: "7",
				parameter: "shape",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '设置按钮形状，可选值为 circle 或者不设'	//描述
			},
			{
				key: "8",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '设置按钮大小，可选值为 small large 或者不设'	//描述
			},
			{
				key: "9",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '设置按钮类型，可选值为 primary dashed danger(版本 2.7 中增加) 或者不设'	//描述
			},
			{
				key: "10",
				parameter: "target",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '相当于 a 链接的 target 属性，href 存在时生效'	//描述
			},
			{
				key: "11",
				parameter: "onClick",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'click 事件的 handler'	//描述
			},
		]
	}

];

export default {
	api
}