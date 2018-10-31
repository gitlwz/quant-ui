
const api = [
    {
        title: "网格布局属性",
        api: [
            {
                key: "1",
                parameter: "width",  //字段名
                instructions: '设置初始宽度	',	//描述
                type: 'number',	//类型
                default: "default",							//默认值
                must: '',
            },{
                key: "2",
                parameter: "autoSize ",  //字段名
                instructions: '如果为true，容器高度会膨胀并收缩以适应内容	',	//描述
                type: 'boolean =  true',	//类型
                default: "default",							//默认值
                must: '',
            },{
                key: "3",
                parameter: "cols ",  //字段名
                instructions: '此布局中的列数。',	//描述
                type: '',	//类型
                default: " 12",							//默认值
                must: '',
            },{
                key: "4",
                parameter: "draggableHandle  ",  //字段名
                instructions: '用作可作为可拖动句柄的标记的CSS选择器',	//描述
                type: 'string ',	//类型
                default: " ",							//默认值
                must: '',
            },{
                key: "5",
                parameter: "verticalCompact  ",  //字段名
                instructions: '如果为true，布局将垂直压缩 ',	//描述
                type: 'boolean =  true',	//类型
                default: " ",							//默认值
                must: '',
            },{
                key: "6",
                parameter: "compactType   ",  //字段名
                instructions: '压缩类型 ',	//描述
                type: 'vertical '  |  ' horizo​​ntal',	//类型
                default: "vertical ",							//默认值
                must: '',
            },{
                key: "7",
                parameter: "layout   ",  //字段名
                instructions: 'Layout是一个对象数组，格式为：{x：number，y：number，w：number，h：number} 布局索引必须与每个项目组件上使用的键匹配。如果选择使用自定义键，则可以在布局中指定该键 ',	//描述
                type: 'array ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "8",
                parameter: "margin   ",  //字段名
                instructions: 'px中项[x，y]之间的边距',	//描述
                type: '[ 10， 10 ] ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "9",
                parameter: "containerPadding ",  //字段名
                instructions: '填充容器[x，y]内部',	//描述
                type: '[number, number] = margin',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "rowHeight ",
                parameter: "rowHeight  ",  //字段名
                instructions: '行有一个静态的高度，但你可以在此基础上的断点改变',	//描述
                type: 'number = 150',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "isDraggable  ",
                parameter: "isDraggable   ",  //字段名
                instructions: '标志',	//描述
                type: 'boolean ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "isResizable   ",
                parameter: "isResizable ",  //字段名
                instructions: '标志',	//描述
                type: 'boolean ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "useCSSTransforms    ",
                parameter: "useCSSTransforms  ",  //字段名
                instructions: '使用CSS3 translate（）而不是top / left',	//描述
                type: 'boolean ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "preventCollision     ",
                parameter: "preventCollision   ",  //字段名
                instructions: '如果为true，则拖动时网格项不会改变位置',	//描述
                type: 'boolean ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onLayoutChange     ",
                parameter: "onLayoutChange   ",  //字段名
                instructions: '回调，以便您可以保存布局每次拖动或调整大小停止后，使用（currentLayout）回调。',	//描述
                type: 'layout: Layout) => void, ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onDragStart     ",
                parameter: "onDragStart   ",  //字段名
                instructions: '拖动开始时调用。',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onDrag     ",
                parameter: "onDrag   ",  //字段名
                instructions: '调用每个拖动动作',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onDragStop     ",
                parameter: "onDragStop   ",  //字段名
                instructions: '拖动完成后调用',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onResizeStart     ",
                parameter: "onResizeStart   ",  //字段名
                instructions: '调整大小时调用',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onResize     ",
                parameter: "onResize   ",  //字段名
                instructions: '调整大小移动时调用',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },{
                key: "onResizeStop     ",
                parameter: "onResizeStop   ",  //字段名
                instructions: '调整大小时调用。',	//描述
                type: 'ItemCallback ',	//类型
                default: "null ",							//默认值
                must: '',
            },
        ]
    },
    // {
    //     title: 'AvatarList.Item',
    //     api: [
    //         {
    //             key: "2",
    //             parameter: "target",  //字段名
    //             instructions: '目标时间',	//描述
    //             type: 'Date',	//类型
    //             default: "",							//默认值
    //             must: '',
    //         }, {
    //             key: "3",
    //             parameter: "onEnd",  //字段名
    //             instructions: '	倒计时结束回调',	//描述
    //             type: 'funtion',	//类型
    //             default: "",							//默认值
    //             must: '',
    //         }
    //     ]

    // }
];

export default {
    api
}