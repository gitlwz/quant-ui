
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "itemRender",  //字段名
				type: '(route, params, routes, paths) => ReactNode',	//类型
				must: '-',				//是否必填
				default: 'false',							//默认值
				instructions: '自定义链接函数，和 react-router 配置使用'	//描述
			},
			{
				key: "2",
				parameter: "params",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '路由的参数 2.7 中增加'	//描述
			},
			{
				key: "3",
				parameter: "routes",  //字段名
				type: 'object[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'router 的路由栈信息 button 的行为和 a 链接一致'	//描述
			},
			{
				key: "4",
				parameter: "separator",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: "'/'",							//默认值
				instructions: '分隔符自定义'	//描述
			},
			
		]
	}

];

export default {
	api
}