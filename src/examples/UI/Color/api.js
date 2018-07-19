
const api = [
	[
	{
		title: "公共API",
		api: [
			{
				key: "1",
				parameter: "color",  //字段名
				instructions: '颜色控制颜色选择器上的活动颜色。您可以使用它来初始化具有特定颜色的颜色选择器，或者使其与父组件的状态保持同步',	//描述
				type: '',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "onChange",  //字段名
				instructions: '每次更改颜色时都传递一个函数来调用。使用此选项可将颜色存储在父组件的状态中或进行其他转换。',	//描述
				type: 'funtion',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "onChangeComplete",  //字段名
				instructions: '	传递颜色更改完成后调用的函数。',	//描述
				type: 'funtion',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
],[
	{
		title: "Alpha组件API",
		api: [
			{
				key: "1",
				parameter: "width",  //字段名
				instructions: '字符串，选择器宽度的像素值',	//描述
				type: '',	//类型
				default: "316px",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "height",  //字段名
				instructions: '拾取器高度的像素值。',	//描述
				type: '',	//类型
				default: "16px",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "direction",  //字段名
				instructions: '方向',	//描述
				type: '字符串枚举，horizontal或vertical',	//类型
				default: "horizontal",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "renderers",  //字段名
				instructions: '使用{canvas：Canvas}和节点画布来做SSR',	//描述
				type: 'Object',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "pointer",  //字段名
				instructions: '自定义指针组件',	//描述
				type: ' React Component',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
],[
	{
		title:"Block组件API",
		api:[
			{
				key: "1",
				parameter: "width",  //字段名
				instructions: '选择器宽度的像素值',	//描述
				type: ' 字符串',	//类型
				default: "170px",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "colors",  //字段名
				instructions: '要显示的颜色方块',	//描述
				type: '  字符串数组',	//类型
				default: "['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "triangle",  //字段名
				instructions: 'hide或者top',	//描述
				type: '  字符串',	//类型
				default: "top",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "onSwatchHover",  //字段名
				instructions: '对于事件处理程序onMouseOver在<Swatch>这个组件内秒给出了args(color, event)',	//描述
				type: ' ',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
]

]

export default {
	api
}