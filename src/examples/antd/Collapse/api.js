
const api = [
	{
		title: "Collapse API",
		api: [
			{
				key: "1",
				parameter: "activeKey",  //字段名
				type: 'string[]|string',	//类型
				must: '',				//是否必填
				default: '默认无，accordion模式下默认第一个元素',							//默认值
				instructions: '当前激活 tab 面板的 key'	//描述
            },
            {
                key: "2",
				parameter: "defaultActiveKey",  //字段名
				type: "string",	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: ' 初始化选中面板的 key'	//描述
            },
            {
                key: "3",
				parameter: "onChange",  
				type: "function",
				must: '',
				default: '-',
				instructions: ' 切换面板的回调'
            },
           
        ]
    },
    {
        title:'Collapse.Panel API',
        api:[
            {
                key: "1",
				parameter: "disabled",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: ' 禁用后的面板展开与否将无法通过用户交互改变'
            },
            {
                key: "2",
				parameter: "forceRender",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: ' 被隐藏时是否渲染 DOM 结构'
            },
            {
                key: "3",
				parameter: "header",  
				type: "string | ReactNode",
				must: '',
				default: '-',
				instructions: ' 面板头内容'
            },
            {
                key: "4",
				parameter: "key",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 对应 activeKey'
            }
        ]
    }

];

export default {
	api
}