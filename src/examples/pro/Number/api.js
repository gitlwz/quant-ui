
const api = [
    {
        title: "API",
        api: [
            {
                key: "1",
                parameter: "precision",  //字段名
                instructions: '小数位数	',	//描述
                type: '	number',	//类型
                default: "2",							//默认值
                must: '',
            },{
                key: "2",
                parameter: "zeroFilling",  //字段名
                instructions: '是否自动补充0	',	//描述
                type: '	',	//类型
                default: "true",							//默认值
                must: '',
            },{
                key: "3",
                parameter: "minus",  //字段名
                instructions: '是否可以为负数	',	//描述
                type: '	',	//类型
                default: "false",							//默认值
                must: '',
            },
        ]
    }
];

export default {
    api
}