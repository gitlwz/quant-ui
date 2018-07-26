
const api = [
    {
        title: "API",
        api: [
            {
                key: "1",
                parameter: "activeKey",  //字段名
                type: "string ",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 当前激活 tab 面板的 key	'	//描述
            },
            {
                key: "2",
                parameter: "animated",  //字段名
                type: "boolean | {inkBar:boolean, tabPane:boolean}",	//类型
                must: '',				//是否必填
                default: 'true, 当 type="card" 时为 false',							//默认值
                instructions: ' 是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效	'	//描述
            },
            {
                key: "3",
                parameter: "defaultActiveKey",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: '第一个面板',							//默认值
                instructions: ' 初始化选中面板的 key，如果没有设置 activeKey'	//描述
            },
            {
                key: "4",
                parameter: "hideAdd",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 是否隐藏加号图标，在 type="editable-card" 时有效'	//描述
            },
            {
                key: "5",
                parameter: "size",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: "'default'",							//默认值
                instructions: ' 大小，提供 large default 和 small 三种大小'	//描述
            },
            {
                key: "6",
                parameter: "tabBarExtraContent",  //字段名
                type: "React.ReactNode",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: 'tab bar 上额外的元素'	//描述
            },
            {
                key: "7",
                parameter: "tabBarGutter",  //字段名
                type: "number",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: 'tabs 之间的间隙	'	//描述
            },

            {
                key: "8",
                parameter: "tabBarStyle",  //字段名
                type: "object",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' tab bar 的样式对象'	//描述
            },
            {
                key: "9",
                parameter: "tabPosition",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: "'top'",							//默认值
                instructions: ' 页签位置，可选值有 top right bottom left'	//描述
            },
            {
                key: "10",
                parameter: "type",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: 'line',							//默认值
                instructions: '页签的基本样式，可选 line、card editable-card 类型'	//描述
            }, {
                key: "11",
                parameter: "onChange",  //字段名
                type: "	Function(activeKey) {}",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: '切换面板的回调	'	//描述
            },
            {
                key: "12",
                parameter: "visible",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 用于手动控制浮层显隐'	//描述
            },
            {
                key: "13",
                parameter: "onEdit",  //字段名
                type: "(targetKey, action): void",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 新增和删除页签的回调，在 type="editable-card" 时有效	'	//描述
            },
            {
                key: "14",
                parameter: "onNextClick",  //字段名
                type: "Function",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: 'next 按钮被点击的回调	'	//描述
            },
            {
                key: "15",
                parameter: "onPrevClick",  //字段名
                type: "Function",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: 'prev 按钮被点击的回调	'	//描述
            },
            {
                key: "16",
                parameter: "onTabClick",  //字段名
                type: "Function",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' tab 被点击的回调	'	//描述
            },


        ]

    },
    {
        
            title: "Tabs.TabPane",
            api: [
                {
                    key: "1",
                    parameter: "forceRender",  //字段名
                    type: "boolean ",	//类型
                    must: '',				//是否必填
                    default: 'false',							//默认值
                    instructions: ' 被隐藏时是否渲染 DOM 结构	'	//描述
                },
                {
                    key: "2",
                    parameter: "key",  //字段名
                    type: "string",	//类型
                    must: '',				//是否必填
                    default: '-',							//默认值
                    instructions: ' 对应 activeKey'	//描述
                },
                {
                    key: "3",
                    parameter: "tab",  //字段名
                    type: "string|ReactNode	",	//类型
                    must: '',				//是否必填
                    default: '-',							//默认值
                    instructions: ' 选项卡头显示文字	'	//描述
                },
            ]
    }

];

export default {
    api
}