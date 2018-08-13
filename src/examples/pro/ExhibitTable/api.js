
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "showRight",  //字段名
				instructions: '是否使用右键显示隐藏列功能（true时需要监听switchChange修改列的columns的show属性）	',	//描述
				type: 'true|false',	//类型
				default: "false",							//默认值
				must: '',
			},
		]
    },
    {
		title: "columns",
		api: [
			{
				key: "1",
				parameter: "show",  //字段名
				instructions: '是否显示此列	',	//描述
				type: 'true|false',	//类型
				default: "true",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "type",  //字段名
				instructions: '处理数据的格式(2:按金额处理，保留两位小数、千分位)',	//描述
				type: '2',	//类型
				default: "undefined",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}