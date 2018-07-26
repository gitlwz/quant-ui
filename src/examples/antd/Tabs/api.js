
const api = [
    {
        title: "API",
        api: [
            {
                key: "1",
                parameter: "title",  //字段名
                type: "string | ReactNode | ()=> ReactNode",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 提示文字	'	//描述
            },
            {
                key: "2",
                parameter: "arrowPointAtCenter",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 箭头是否指向目标元素中心	'	//描述
            },
            {
                key: "3",
                parameter: "autoAdjustOverflow",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'true',							//默认值
                instructions: ' 气泡被遮挡时自动调整位置'	//描述
            },
            {
                key: "4",
                parameter: "defaultVisible",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 默认是否显隐'	//描述
            },
            {
                key: "5",
                parameter: "getPopupContainer",  //字段名
                type: "function(triggerNode)",	//类型
                must: '',				//是否必填
                default: '()=>document.body',							//默认值
                instructions: ' 浮层渲染父节点，默认渲染到 body 上。2.5.2 之前请使用 getTooltipContainer	'	//描述
            },
            {
                key: "6",
                parameter: "mouseEnterDelay",  //字段名
                type: "number",	//类型
                must: '',				//是否必填
                default: '0.1',							//默认值
                instructions: ' 鼠标移入后延时多少才显示 Tooltip，单位：秒'	//描述
            },
            {
                key: "7",
                parameter: "mouseLeaveDelay",  //字段名
                type: "number",	//类型
                must: '',				//是否必填
                default: '0.1',							//默认值
                instructions: ' 鼠标移出后延时多少才隐藏 Tooltip，单位：秒'	//描述
            },

            {
                key: "8",
                parameter: "overlayClassName",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 卡片类名'	//描述
            },
            {
                key: "9",
                parameter: "ovarlayStyle",  //字段名
                type: "object",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 卡片样式'	//描述
            },
            {
                key: "10",
                parameter: "placement",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: 'top',							//默认值
                instructions: '气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom'	//描述
            }, {
                key: "11",
                parameter: "trigger",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: 'hover',							//默认值
                instructions: ' 触发行为，可选 hover/focus/click/contextMenu'	//描述
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
                parameter: "onVisibleChange",  //字段名
                type: "(visible)=>void",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 显示隐藏的回调	'	//描述
            },


        ]
    },

];

export default {
    api
}