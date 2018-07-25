
const api = [
	[{
		title: "function-API",
		api: [
			{
				key: "1",
				parameter: "debounce",  //字段名
				instructions: '函数防抖',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "throttle",  //字段名
				instructions: '函数节流',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			}
		]
	}],[{
		title: "Url-API",
		api: [
			{
				key: "1",
				parameter: "parseQueryString",  //字段名
				instructions: 'url参数转对象',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "stringfyQueryString",  //字段名
				instructions: '对象序列化',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			}
		]
	}],[{
		title: "Device-API",
		api: [
			{
				key: "1",
				parameter: "getExplore",  //字段名
				instructions: '获取浏览器类型和版本号',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "getOS",  //字段名
				instructions: '获取操作系统类型',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			}
		]
	}],[{
		title: "Cookie-API",
		api: [
			{
				key: "1",
				parameter: "getCookie",  //字段名
				instructions: '根据name读取Cookie',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "removeCookie",  //字段名
				instructions: '根据name删除Cookie',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "setCookie",  //字段名
				instructions: '添加Cookie',	//描述
				type: '',	//类型
				default: "fucntion",							//默认值
				must: '',
			}
		]
	}]

]

export default {
	api
}