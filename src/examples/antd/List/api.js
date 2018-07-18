
const api = [
	{
		title: "List API",
		api: [
			{
				key: "1",
				parameter: "bordered",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否展示边框	'	//描述
            },
            {
                key: "2",
				parameter: "footer",  //字段名
				type: "string | ReactNode",	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: ' 列表底部'	//描述
            },
            {
                key: "3",
				parameter: "grid",  
				type: "object",
				must: '',
				default: '-',
				instructions: ' 列表栅格配置'
            },
            {
                key: "4",
				parameter: "header",  
				type: "string | ReactNode",
				must: '',
				default: '-',
				instructions: ' 列表头部'
            },
            {
                key: "5",
				parameter: "itemLayout",  
				type: "string",
				must: '',
				default: '-',
				instructions: '设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排'
            },
            {
                key: "6",
				parameter: "loading",  
				type: "boolean | object",
				must: '',
				default: 'false',
				instructions: ' 当卡片内容还在加载中时，可以用 loading 展示一个占位'
            },
            {
                key: "7",
				parameter: "loadMore",  
				type: "string | ReactNode",
				must: '',
				default: '-',
				instructions: ' 加载更多'
            },
            {
                key: "8",
				parameter: "locale",  
				type: "object",
				must: '',
				default: "emptyText:'暂无数据'",
				instructions: "默认文案设置，目前包括空数据文案"
            },
            {
                key: "9",
				parameter: "pagination",  
				type: "boolean | ReactNode",
				must: '',
				default: 'false',
				instructions: ' 对应的 pagination 配置, 设置 false 不显示'
            },
            {
                key: "10",
				parameter: "size",  
				type: "default | middle | small",
				must: '',
				default: 'default',
				instructions: ' list 的尺寸'
            },
            {
                key: "11",
				parameter: "split",  
				type: "boolean",
				must: '',
				default: 'true',
				instructions: ' 是否展示分割线'
            },
        ]
    },
    {
        title:'pagination API',
        api:[
            {
                key: "1",
				parameter: "position",  
				type: "'top' | 'bottom' | 'both' " ,
				must: '',
				default: 'bottom',
				instructions: ' 指定分页显示的位置'
            },
            
        ]
    },
    {
		title: "List grid props",
		api: [
			{
				key: "1",
				parameter: "column",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '列数		'	//描述
            },
            {
                key: "2",
				parameter: "gutter",  //字段名
				type: "number",	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: ' 栅格间隔	'	//描述
            },
            {
                key: "3",
				parameter: "xs",  
				type: "number",
				must: '',
				default: '-',
				instructions: ' <576px 展示的列数'
            },
            {
                key: "4",
				parameter: "sm",  
				type: "number",
				must: '',
				default: '-',
				instructions: ' ≥576px 展示的列数'
            },
            {
                key: "5",
				parameter: "md",  
				type: "number",
				must: '',
				default: '-',
				instructions: '≥768px 展示的列数'
            },
            {
                key: "6",
				parameter: "lg",  
				type: "number",
				must: '',
				default: '-',
				instructions: ' ≥992px 展示的列数'
            },
            {
                key: "7",
				parameter: "xl",  
				type: "number",
				must: '',
				default: '-',
				instructions: ' ≥1200px 展示的列数'
            },
            {
                key: "8",
				parameter: "xxl",  
				type: "number",
				must: '',
				default: "-",
				instructions: "≥1600px 展示的列数"
            },
            
        ]
    },
    {
        title:'List.Item API',
        api:[
            {
                key: "1",
				parameter: "actions",  
				type: "Array<ReactNode> " ,
				must: '',
				default: '-',
				instructions: ' 列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧'
            },
            {
                key: "2",
				parameter: "extra",  
				type: "string | ReactNode " ,
				must: '',
				default: '-',
				instructions: ' 额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧'
            },
        ]
    },
    {
        title:'List.Item.Meta API',
        api:[
            {
                key: "1",
				parameter: "avatar",  
				type: "ReactNode" ,
				must: '',
				default: '-',
				instructions: ' 列表元素的图标'
            },
            {
                key: "2",
				parameter: "description",  
				type: "string | ReactNode " ,
				must: '',
				default: '-',
				instructions: '列表元素的描述内容'
            },
            {
                key: "3",
				parameter: "title",  
				type: "string | ReactNode " ,
				must: '',
				default: '-',
				instructions: '列表元素的标题'
            },
        ]
    },
];

export default {
	api
}