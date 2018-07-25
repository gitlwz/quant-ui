
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "afterClose",  //字段名
				type: '() => void',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '关闭动画结束后触发的回调函数'	//描述
			},
			{
				key: "2",
				parameter: "banner",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否用作顶部公告'	//描述
			},
			{
				key: "3",
				parameter: "closable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认不显示关闭按钮'	//描述
			},
			{
				key: "4",
				parameter: "closeText",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '自定义关闭按钮'	//描述
			},
			{
				key: "5",
				parameter: "description",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '警告提示的辅助性文字介绍'	//描述
			},
			{
				key: "6",
				parameter: "iconType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义图标类型，showIcon 为 true 时有效'	//描述
			},
			{
				key: "7",
				parameter: "message",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '警告提示内容'	//描述
			},
			{
				key: "8",
				parameter: "showIcon",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false，banner 模式下默认值为 true',							//默认值
				instructions: '是否显示辅助图标'	//描述
			},
			{
				key: "9",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'info，banner 模式下默认值为 warning',							//默认值
				instructions: '指定警告提示的样式，有四种选择 success、info、warning、error'	//描述
			},
			{
				key: "10",
				parameter: "onClose",  //字段名
				type: '(e: MouseEvent) => void',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '关闭时触发的回调函数'	//描述
			},
		]
	}

];

export default {
	api
}