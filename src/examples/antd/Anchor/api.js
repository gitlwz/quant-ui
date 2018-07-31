
const api = [
	{
		title: "Anchor props",
		api: [
			{
				key: "1",
				parameter: "affix",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '固定模式	'	//描述
			},
			{
				key: "2",
				parameter: "bounds",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '5px',							//默认值
				instructions: '锚点区域边界	'	//描述
			},
			{
				key: "3",
				parameter: "getContainer",  //字段名
				type: '( ) => HTMLElement',	//类型
				must: '',				//是否必填
				default: '( ) => window',							//默认值
				instructions: '指定滚动的容器		'	//描述
			},
			{
				key: "4",
				parameter: "offsetBottom",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '距离窗口底部达到指定偏移量后触发	'	//描述
            },
            {
				key: "5",
				parameter: "offsetTop",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '距离窗口顶部达到指定偏移量后触发	'	//描述
            },
            {
				key: "6",
				parameter: "showInkInFixed",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '固定模式是否显示小圆点'	//描述
			},
		]
	},
	{
		title: "Link Props",
		api: [
			{
				key: "1",
				parameter: "href",  //字段名
				type: "string",	//类型
				must: '',				//是否必填
				default: '	-',							//默认值
				instructions: '锚点链接	'	//描述
			},
			{
				key: "2",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '文字内容		'	//描述
			},
			
		]
	},
	
];

export default {
	api
}