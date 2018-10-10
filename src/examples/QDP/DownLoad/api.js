
const api = [
    {
        title: "api",
        api: [
            {
                key: "0",
                parameter: "params",  //字段名
                instructions: '传给后台的请求参数格式通POST请求',	//描述
                type: '',	//类型
                default: "",							//默认值
                must: '',
            },
            {
                key: "1",
                parameter: "url",  //字段名
                instructions: '导出地址',	//描述
                type: '	',	//类型
                default: "",							//默认值
                must: '',
            },
            {
                key: "2",
                parameter: "name",  //字段名
                instructions: '导出文件夹名称',	//描述
                type: '',	//类型
                default: "default",							//默认值
                must: '',
            },{
                key: "3",
                parameter: "options",  //字段名
                instructions: '数据字典',	//描述
                type: '	',	//类型
                default: " ",							//默认值
                must: '',
            },
            {
                key: "4",
                parameter: "columns",  //字段名
                instructions: '表格字段，对应导出实体',	//描述
                type: '',	//类型
                default: "",							//默认值
                must: '',
            },
            {
                key: "5",
                parameter: "tooltip",  //字段名
                instructions: '是否显示提示',	//描述
                type: '',	//类型
                default: "false",							//默认值
                must: '',
            },
        ]
    }
];

export default {
    api
}