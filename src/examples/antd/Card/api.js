
const api = [
	{
		title: "Card API",
		api: [
			{
				key: "1",
				parameter: "actions",  //字段名
				type: 'Array',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '卡片操作组，位置在卡片底部'	//描述
            },
            {
                key: "2",
				parameter: "activeTabKey",  //字段名
				type: "string",	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: ' 当前激活页签的 key'	//描述
            },
            {
                key: "3",
				parameter: "bodyStyle",  
				type: "object",
				must: '',
				default: '默认日期',
				instructions: ' 内容区域自定义样式'
            },
            {
                key: "4",
				parameter: "bordered",  
				type: "boolean",
				must: '',
				default: 'true',
				instructions: ' 是否有边框'
            },
            {
                key: "5",
				parameter: "cover",  
				type: "ReactNode",
				must: '',
				default: '-',
				instructions: ' 卡片封面'
            },
            {
                key: "6",
				parameter: "defaultActiveTabKey",  
				type: "string",
				must: '',
				default: "第一个页签",
				instructions: ' 如果没有设置activeTabKey,初始化选中页签的key'
            },
            {
                key: "7",
				parameter: "extra",  
				type: "string | ReactNode",
				must: '',
				default: "-",
				instructions: '卡片右上角的操作区域'
            },
            {
                key: "8",
				parameter: "hoverable",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: ' 鼠标移过时可浮起'
            },
            {
                key: "9",
				parameter: "loading",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: ' 当卡片内容还在加载中时，可以用 loading 展示一个占位'
            },
            {
                key: "10",
				parameter: "tabList",  
				type: "Array<{key: string, tab: ReactNode}>",
				must: '',
				default: '-',
				instructions: ' 页签标题列表'
            },
            {
                key: "11",
				parameter: "title",  
				type: "string | ReactNode",
				must: '',
				default: '-',
				instructions: ' 卡片标题'
            },
            {
                key: "12",
				parameter: "type",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 卡片类型，可设置为 inner 或 不设置'
            },
            {
                key: "13",
				parameter: "onTabChange",  
				type: "(key)=>void",
				must: '',
				default: '-',
				instructions: ' 页签切换的回调'
            },

		]
    },
    {
        title:'Card.Grid API',
        api:[
            {
                key: "1",
				parameter: "className",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 网格容器类名'
            },
            {
                key: "2",
				parameter: "style",  
				type: "object",
				must: '',
				default: '-',
				instructions: ' 定义网格容器类名的样式'
            }
        ]
    },
    {
        title:'Card.Meta API',
        api:[
            {
                key: "1",
				parameter: "avatar",  
				type: "ReactNode",
				must: '',
				default: '-',
				instructions: ' 头像/图标'
            },
            {
                key: "2",
				parameter: "className",  
				type: "string",
				must: '',
				default: '-',
				instructions: '容器类名'
            },
            {
                key: "3",
				parameter: "description",  
				type: "ReactNode",
				must: '',
				default: '-',
				instructions: '描述内容	'
            },
            {
                
                key: "4",
				parameter: "style",  
				type: "object",
				must: '',
				default: '-',
				instructions: '定义容器类名的样式		'
            },
            {
                
                key: "5",
				parameter: "title",  
				type: "ReactNode",
				must: '',
				default: '-',
				instructions: '标题内容	'
            },
        ]
    }

];

export default {
	api
}