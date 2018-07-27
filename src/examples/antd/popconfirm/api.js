
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "cancelText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '取消',							//默认值
				instructions: '取消按钮文字'	//描述
			},
			{
				key: "2",
				parameter: "okText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '确定',							//默认值
				instructions: '确认按钮文字'	//描述
			},
			{
				key: "3",
				parameter: "okType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'primary',							//默认值
				instructions: '确认按钮类型'	//描述
			},
			{
				key: "4",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '确认框的描述'	//描述
			},
			{
				key: "5",
				parameter: "onCancel",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击取消的回调'	//描述
			},
			{
				key: "6",
				parameter: "onConfirm",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击确认的回调'	//描述
			},
		]
	}

];

export default {
	api
}