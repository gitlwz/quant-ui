
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "afterChange",  //字段名
				type: 'function(current)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '切换面板的回调'	//描述
            },
            {
                key: "2",
				parameter: "autoplay",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: ' 是否自动切换'	//描述
            },
            {
                key: "3",
				parameter: "beforeChange",  
				type: "function(from,to)",
				must: '',
				default: '-',
				instructions: ' 切换面板的回调'
            },
            {
                key: "4",
				parameter: "dots",  
				type: "boolean",
				must: '',
				default: 'true',
				instructions: ' 是否显示面板指示点'
            },
            {
                key: "5",
				parameter: "easing",  
				type: "string",
				must: '',
				default: 'linear',
				instructions: ' 动画效果'
            },
            {
                key: "6",
				parameter: "effect",  
				type: "string",
				must: '',
				default: "scrollx",
				instructions: ' 动画效果函数，可取 scrollx, fade'
            },
            {
                key: "7",
				parameter: "vertical",  
				type: "boolean",
				must: '',
				default: "false",
				instructions: '垂直显示'
            },
        ]
    },


];

export default {
	api
}