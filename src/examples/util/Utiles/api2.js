
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
	}],[{
		title: "Number-API",
		api: [
			{
				key: "1",
				parameter: "digitUppercase",  //字段名
				instructions: '数字转中文大写',	//描述
				type: '',	//类型
				default: "fucntion(number)",							//默认值
				must: '',
			}
		]
	}],[{
		title: "Time-API",
		api: [
			{
				key: "1",
				parameter: "getTimeDistance",  //字段名
				instructions: '获取时间间隔',	//描述
				type: '',	//类型
				default: "fucntion('today | week | month | year' )",							//默认值
				must: '',
            },
            {
				key: "2",
				parameter: "formatPassTime",  //字段名
				instructions: '格式化${startTime}距现在的已过时间',	//描述
				type: '',	//类型
				default: "fucntion(startTime)",							//默认值
				must: '',
			},
            {
				key: "3",
				parameter: "formatRemainTime",  //字段名
				instructions: '格式化现在距${endTime}的剩余时间',	//描述
				type: '',	//类型
				default: "fucntion(endTime)",							//默认值
				must: '',
			}
		]
	}],[{
		title: "Regexp-API",
		api: [
			{
				key: "1",
				parameter: "isEmail",  //字段名
				instructions: '判断是否为邮箱地址',	//描述
				type: '',	//类型
				default: "fucntion(string)",							//默认值
				must: '',
            },
            {
				key: "2",
				parameter: "isIdCard",  //字段名
				instructions: '判断是否为身份证号',	//描述
				type: '',	//类型
				default: "fucntion(string)",							//默认值
				must: '',
			},
            {
				key: "3",
				parameter: "isPhoneNum",  //字段名
				instructions: '判断是否为手机号',	//描述
				type: '',	//类型
				default: "fucntion(string)",							//默认值
				must: '',
			}
		]
	}]

]

export default {
	api
}