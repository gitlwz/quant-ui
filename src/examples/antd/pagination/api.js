
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "offsetBottom",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '距离窗口底部达到指定偏移量后触发'	//描述
			},
			{
				key: "2",
				parameter: "offsetTop",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '距离窗口顶部达到指定偏移量后触发 2.7 中增加'	//描述
			},
			{
				key: "3",
				parameter: "target",  //字段名
				type: '() => HTMLElement',	//类型
				must: '',				//是否必填
				default: '() => window',							//默认值
				instructions: '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 button 的行为和 a 链接一致'	//描述
			},
			{
				key: "4",
				parameter: "onChange",  //字段名
				type: 'Function(affixed)	',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '固定状态改变时触发的回调函数'	//描述
			},
		]
	}

];

export default {
	api
}