
const api = [
	{
		title: "参数",
		api: [
			{
				key: "1",
				parameter: "content",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '提示内容'	//描述
			},
			{
				key: "2",
				parameter: "duration",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '3',							//默认值
				instructions: '自动关闭的延时，单位秒。设为 0 时不自动关闭。'	//描述
			},
			{
				key: "3",
				parameter: "onClose",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '关闭时触发的回调函数'	//描述
			},
		]
	}

];

export default {
	api
}