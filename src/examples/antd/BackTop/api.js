
const api = [
	{
		title: "BackTop API",
		api: [
			{
				key: "1",
				parameter: "target",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '() => window',							//默认值
				instructions: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数	'	//描述
			},
			{
				key: "2",
				parameter: "visibilityHeight	",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '400',							//默认值
				instructions: '滚动高度达到此参数值才出现 BackTop	'	//描述
			},
			{
				key: "3",
				parameter: "onClick",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '点击按钮的回调函数			'	//描述
			},
		]
	},
	
];

export default {
	api
}