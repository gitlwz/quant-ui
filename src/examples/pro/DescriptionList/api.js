
const api = [
    {
        title: "DescriptionList",
        api: [
            {
                key: "1",
                parameter: "layout",  //字段名
                instructions: '布局方式	',	//描述
                type: "Enum{'horizontal', 'vertical'}",	//类型
                default: "'horizontal'",							//默认值
                must: '',
            }, {
                key: "2",
                parameter: "col",  //字段名
                instructions: '指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定',	//描述
                type: 'number(0 < col <= 4)',	//类型
                default: "3",							//默认值
                must: '',
            }, {
                key: "3",
                parameter: "title",  //字段名
                instructions: '	列表标题	',	//描述
                type: 'ReactNode',	//类型
                default: "-",							//默认值
                must: '',
            }, {
                key: "4",
                parameter: "gutter",  //字段名
                instructions: '	列表项间距，单位为 px	',	//描述
                type: 'number',	//类型
                default: "32",							//默认值
                must: '',
            }, {
                key: "5",
                parameter: "size",  //字段名
                instructions: '	列表型号，可以设置为 large small	',	//描述
                type: "Enum{'large', 'small'}",	//类型
                default: "-",							//默认值
                must: '',
            },

        ]
    }, {
        title: 'DescriptionList.Description',
        api: [
            {
                key: "1",
                parameter: "term",  //字段名
                instructions: '列表项标题		',	//描述
                type: "ReactNode",	//类型
                default: "-",							//默认值
                must: '',
            }
        ]


    }
];

export default {
    api
}