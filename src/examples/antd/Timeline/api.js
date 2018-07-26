
const api = [
    {
        title: "API",
        api: [
            {
                key: "1",
                parameter: "pending",  //字段名
                type: "boolean|string|ReactNode",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 指定最后一个幽灵节点是否存在或内容'	//描述
            },
            {
                key: "2",
                parameter: "pendingDot",  //字段名
                type: "string|ReactNode",	//类型
                must: '',				//是否必填
                default: '<Icon type="loading" />',							//默认值
                instructions: ' 当最后一个幽灵节点存在時，指定其时间图点		'	//描述
            },
            {
                key: "3",
                parameter: "reverse	",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 节点排序	'	//描述
            },
           
        ]
    },
    {
        title: "Timeline.Item",
        api: [
            {
                key: "1",
                parameter: "color",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: 'blue',							//默认值
                instructions: ' 指定圆圈颜色 blue, red, green，或自定义的色值'	//描述
            },
            {
                key: "2",
                parameter: "dot",  //字段名
                type: "string|ReactNode",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 自定义时间轴点			'	//描述
            },
            {
                key: "3",
                parameter: "reverse	",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 节点排序	'	//描述
            },
           
        ]
    },

];

export default {
    api
}