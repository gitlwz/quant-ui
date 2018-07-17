
const api = [
	{
		title: "Methods方法",
		api: [
			{
				key: "1",
				parameter: ".request()",  //字段名
				instructions: '使元素全屏。默认是<html>',	//描述
				type: 'function()',	//类型
				default: "html DOM",							//默认值
				must: '',
			},{
				key: "2",
				parameter: ".exit()",  //字段名
				instructions: '退出全屏',	//描述
				type: 'function()',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: ".toggle()",  //字段名
				instructions: '全屏切换',	//描述
				type: 'function()',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: ".on(event, function)",  //字段名
				instructions: '添加侦听器，以便在浏览器进出全屏或出现错误时进行切换',	//描述
				type: 'function()',	//类型
				default: "event ：change error",							//默认值
				must: '',
			},{
				key: "4",
				parameter: ".off(event, function)",  //字段名
				instructions: '删除以前注册的事件侦听器。',	//描述
				type: 'function()',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: ".onchange(function)",  //字段名
				instructions: '别名 .on("error", function)',	//描述
				type: 'function()',	//类型
				default: "",							//默认值
				must: '',
			}
		]
	},{
		title:"属性",
		api:[
			{
				key: "1",
				parameter: ".isFullscreen",  //字段名
				instructions: '返回布尔值，无判断是否为全屏状态。',	//描述
				type: '',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "2",
				parameter: ".element",  //字段名
				instructions: '返回当前全屏的元素，否则返回null。',	//描述
				type: '',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: ".enabled",  //字段名
				instructions: '返回一个布尔值，是否允许您进入全屏。',	//描述
				type: '',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}