
const api = [
	{
		title: "Row",
		api: [
			{
				key: "1",
				parameter: "align",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '	top',							//默认值
				instructions: 'flex 布局下的垂直对齐方式：top middle bottom'	//描述
			},
			{
				key: "2",
				parameter: "gutter",  //字段名
				type: 'number/object',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}'	//描述
			},
			{
				key: "3",
				parameter: "justify",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'start',							//默认值
				instructions: 'flex 布局下的水平排列方式：start end center space-around space-between'	//描述
			},
			{
				key: "4",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '布局模式，可选 flex，现代浏览器 下有效'	//描述
			},
		]
	},
	{
		title: "Col",
		api: [
			{
				key: "1",
				parameter: "offset",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '	0',							//默认值
				instructions: '栅格左侧的间隔格数，间隔内不可以有栅格	'	//描述
			},
			{
				key: "2",
				parameter: "order",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: ' 栅格顺序，flex 布局模式下有效'	//描述
			},
			{
				key: "3",
				parameter: "pull",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '栅格向左移动格数	'	//描述
			},
			{
				key: "4",
				parameter: "push",  //字段名
				type: 'number	',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '栅格向右移动格数'	//描述
            },
            {
				key: "4",
				parameter: "span",  //字段名
				type: 'number	',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '栅格占位格数，为 0 时相当于 display: none'	//描述
			},
		]
	},
	
];

export default {
	api
}