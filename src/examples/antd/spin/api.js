
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "delay",  //字段名
				type: 'number (毫秒)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '延迟显示加载效果的时间（防止闪烁）'	//描述
			},
			{
				key: "2",
				parameter: "indicator",  //字段名
				type: 'ReactElement',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '加载指示符'	//描述
			},
			{
				key: "3",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'default\'',							//默认值
				instructions: '组件大小，可选值为 small default large'	//描述
			},
			{
				key: "4",
				parameter: "spinning",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否旋转'	//描述
			},
			{
				key: "5",
				parameter: "tip",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当作为包裹元素时，可以自定义描述文案'	//描述
			},
			{
				key: "6",
				parameter: "wrapperClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '包装器的类属性'	//描述
			},
		]
	}

];

export default {
	api
}