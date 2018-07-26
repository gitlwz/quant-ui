
const api = [
	{
		title: "config 参数",
		api: [
			{
				key: "1",
				parameter: "btn",  //字段名
				type: 'ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义关闭按钮'	//描述
			},
			{
				key: "2",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义 CSS class'	//描述
			},
			{
				key: "3",
				parameter: "description",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '通知提醒内容，必选'	//描述
			},
			{
				key: "4",
				parameter: "duration",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '4.5',							//默认值
				instructions: '默认 4.5 秒后自动关闭，配置为 null 则不自动关闭'	//描述
			},
			{
				key: "5",
				parameter: "icon",  //字段名
				type: 'ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义图标'	//描述
			},
			{
				key: "6",
				parameter: "key",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当前通知唯一标志'	//描述
			},
			{
				key: "7",
				parameter: "message",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '通知提醒标题，必选'	//描述
			},
			{
				key: "8",
				parameter: "placement",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'topRight',							//默认值
				instructions: '弹出位置，可选 topLeft topRight bottomLeft bottomRight'	//描述
			},
			{
				key: "9",
				parameter: "style",  //字段名
				type: 'React.CSSProperties',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义内联样式'	//描述
			},
			{
				key: "10",
				parameter: "onClose",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '点击默认关闭按钮时触发的回调函数'	//描述
			},
		]
	},
	{
		title: "notification.config(options)全局配置方法，在调用前提前配置，全局一次生效",
		api: [
			{
				key: "1",
				parameter: "bottom",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '24',							//默认值
				instructions: '消息从底部弹出时，距离底部的位置，单位像素。'	//描述
			},
			{
				key: "2",
				parameter: "duration",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '4.5',							//默认值
				instructions: '默认自动关闭延时，单位秒'	//描述
			},
			{
				key: "3",
				parameter: "getContainer",  //字段名
				type: '	() => HTMLNode',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '配置渲染节点的输出位置'	//描述
			},
			{
				key: "4",
				parameter: "placement",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'topRight',							//默认值
				instructions: '弹出位置，可选 topLeft topRight bottomLeft bottomRight'	//描述
			},
			{
				key: "5",
				parameter: "top",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '24',							//默认值
				instructions: '消息从顶部弹出时，距离顶部的位置，单位像素。'	//描述
			},
			
		]
	}

];

export default {
	api
}