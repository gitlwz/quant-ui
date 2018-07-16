
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "getAllLanguage",  //字段名
				instructions: '获取所有语言数据',	//描述
				type: 'function()',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "getCurrentLanguage",  //字段名
				instructions: '获取当前语言类型',	//描述
				type: 'function',	//类型
				default: "zh_CN",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "getLanguageData",  //字段名
				instructions: '	获取根据当前预览类型翻译后的语言',	//描述
				type: 'funtion',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "refreshLanguage",  //字段名
				instructions: '	刷新语言',	//描述
				type: 'funtion',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "setCurrentLanguage",  //字段名
				instructions: '	设置当前语言类型',	//描述
				type: 'funtion（String[语言类型]）',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "6",
				parameter: "setLanguageData",  //字段名
				instructions: '	设置语言数据',	//描述
				type: 'funtion（Object）',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	}
];

export default {
	api
}