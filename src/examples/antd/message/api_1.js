const api = [
	{
		title: "message.config",
		api: [
			
			{
				key: "1",
				parameter: "duration",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '3',							//默认值
				instructions: '自动关闭的延时，单位秒。'	//描述
			},
			{
				key: "2",
				parameter: "getContainer",  //字段名
				type: '() => HTMLElement',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '配置渲染节点的输出位置'	//描述
            },
            {
				key: "3",
				parameter: "maxCount",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '最大显示数, 超过限制时，最早的消息会被自动关闭'	//描述
            },
            {
				key: "4",
				parameter: "top",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '24',							//默认值
				instructions: '消息距离顶部的位置'	//描述
			},
		]
	}

];

export default {
	api
}