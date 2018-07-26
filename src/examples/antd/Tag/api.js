
const api = [
    {
        title: "API",
        api: [
            {
                key: "1",
                parameter: "afterClose",  //字段名
                type: "() => void ",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: '关闭动画完成后的回调	'	//描述
            },
            {
                key: "2",
                parameter: "closable",  //字段名
                type: "boolean ",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 标签是否可以关闭	'	//描述
            },
            {
                key: "3",
                parameter: "color",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: '标签色	'	//描述
            },
            {
                key: "4",
                parameter: "onClose",  //字段名
                type: "(e) => void",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 关闭时的回调	'	//描述
            },
            {
                key: "5",
                parameter: "visible",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: "true",							//默认值
                instructions: ' 是否显示标签	'	//描述
            },
           
        ]

    },
    {
        
            title: "Tag.CheckableTag",
            api: [
                {
                    key: "1",
                    parameter: "checked",  //字段名
                    type: "boolean ",	//类型
                    must: '',				//是否必填
                    default: 'false',							//默认值
                    instructions: ' 设置标签的选中状态'	//描述
                },
                {
                    key: "2",
                    parameter: "onChange",  //字段名
                    type: "(checked) => void",	//类型
                    must: '',				//是否必填
                    default: '-',							//默认值
                    instructions: ' 点击标签时触发的回调	'	//描述
                },
                
            ]
    }

];

export default {
    api
}