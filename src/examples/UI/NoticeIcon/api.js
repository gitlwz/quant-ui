
const api = [
	{
		title:"API",
		api:[
			{
				key: "1",
				parameter: "count",  //字段名
				type: 'number',	//类型
				must: '',
				default: '',							//默认值
				instructions: '图标上的消息总数'	//描述
			},{
				key: "2",
				parameter: "loading",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: 'false',							//默认值
				instructions: '弹出卡片加载状态'	//描述
			},{
				key: "3",
				parameter: "onClear",  //字段名
				instructions: '点击清空按钮的回调',	//描述
				type: 'function(tabTitle)	',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "4",
				parameter: "onItemClick",  //字段名
				instructions: '点击列表项的回调',	//描述
				type: '	function(item, tabProps)',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "5",
				parameter: "onTabChange",  //字段名
				instructions: '切换页签的回调',	//描述
				type: '	function(tabTitle)',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "6",
				parameter: "popupAlign",  //字段名
				instructions: '弹出卡片的位置配置',	//描述
				type: '	Object alignConfig',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "7",
				parameter: "onPopupVisibleChange",  //字段名
				instructions: '弹出卡片显隐的回调',	//描述
				type: '	function(visible)',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "8",
				parameter: "popupVisible",  //字段名
				instructions: '控制弹层显隐',	//描述
				type: '	boolean',	//类型
				default: '',							//默认值
				must: '',
			},{
				key: "9",
				parameter: "locale",  //字段名
				instructions: '默认文案',	//描述
				type: '	Object',	//类型
				default: "{ emptyText: '暂无数据', clear: '清空' }",							//默认值
				must: '',
			},
		]
	},
	{
		title:"NoticeIcon.Tab",
		api:[
			{
				key: "0",
				parameter: "title",  //字段名
				instructions: '消息分类的页签标题',	//描述
				type: '	string',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "1",
				parameter: "list",  //字段名
				instructions: '列表数据，格式参照下表',	//描述
				type: '	Array',	//类型
				default: "[]",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "emptyText",  //字段名
				instructions: '针对每个 Tab 定制空数据文案',	//描述
				type: '	ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "emptyImage",  //字段名
				instructions: '针对每个 Tab 定制空数据图片',	//描述
				type: '	string',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	},{
		title:"Tab data",
		api:[
			{
				key: "1",
				parameter: "avatar",  //字段名
				instructions: '头像图片链接',	//描述
				type: '	string',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "title",  //字段名
				instructions: '标题',	//描述
				type: '	ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "description",  //字段名
				instructions: '描述信息',	//描述
				type: '	ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "datetime",  //字段名
				instructions: '时间戳',	//描述
				type: '	ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "extra",  //字段名
				instructions: '额外信息，在列表项右上角',	//描述
				type: '	ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}