
const api = [
    {
        title: "AvatarList",
        api: [
            {
                key: "1",
                parameter: "size",  //字段名
                instructions: '头像大小	',	//描述
                type: '	large、small 、mini, default',	//类型
                default: "default",							//默认值
                must: '',
            },
        ]
    },
    {
        title: 'AvatarList.Item',
        api: [
            {
                key: "2",
                parameter: "target",  //字段名
                instructions: '目标时间',	//描述
                type: 'Date',	//类型
                default: "",							//默认值
                must: '',
            }, {
                key: "3",
                parameter: "onEnd",  //字段名
                instructions: '	倒计时结束回调',	//描述
                type: 'funtion',	//类型
                default: "",							//默认值
                must: '',
            }
        ]

    }
];

export default {
    api
}