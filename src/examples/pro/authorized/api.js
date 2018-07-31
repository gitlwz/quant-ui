import React from 'react';
const api = [
	{
		title: "API",
		text:<div><h2>RenderAuthorized</h2><p>RenderAuthorized: (currentAuthority: string | () => string) => Authorized</p><p>权限组件默认 export RenderAuthorized 函数，它接收当前权限作为参数，返回一个权限对象，该对象提供以下几种使用方式。</p></div>,
	},
	{
		title: "Authorized",
		api:[
			{
				key: "1",
				parameter: "children",  //字段名
				instructions: '正常渲染的元素，权限判断通过时展示',	//描述
				type: '	ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "authority",  //字段名
				instructions: '准入权限/权限判断',	//描述
				type: '	string | array | Promise | (currentAuthority) => boolean',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "noMatch",  //字段名
				instructions: '权限异常渲染元素，权限判断不通过时展示',	//描述
				type: 'ReactNode',	//类型
				default: "-",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}