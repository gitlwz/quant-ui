
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "layout",  //字段名
				instructions: '数据',	//描述
				type: '	Array',	//类型
				default: "-",							//默认值
				must: 'true',
			},{
				key: "2",
				parameter: "col",  //字段名
				instructions: '宽度切分比这个参数会把容器的宽度平均分为col等份于是容器内元素的最小宽度就等于 containerWidth/col',	//描述
				type: 'number',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "3",
				parameter: "width",  //字段名
				instructions: '	 容器的宽度 	',	//描述
				type: 'number',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "4",
				parameter: "rowHeight",  //字段名
				instructions: '	容器内每个元素的最小高度  	',	//描述
				type: 'number',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "5",
				parameter: "padding",  //字段名
				instructions: '容器内部的padding',	//描述
				type: 'number',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "6",
				parameter: "children",  //字段名
				instructions: '拖动自组件',	//描述
				type: '(Item: DragactLayoutItem, provided: GridItemProvided) => any',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "7",
				parameter: "margin",  //字段名
				instructions: '每个元素的margin,第一个参数是左右，第二个参数是上下',	//描述
				type: 'Array [number, number]',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "8",
				parameter: "className",  //字段名
				instructions: 'layout的名字',	//描述
				type: 'number | string',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "9",
				parameter: "placeholder ",  //字段名
				instructions: '是否有placeholder ',	//描述
				type: 'Boolean',	//类型
				default: "",							//默认值
				must: '',
			},{
				key: "10",
				parameter: "style ",  //字段名
				instructions: 'React.CSSProperties',	//描述
				type: 'React.CSSProperties',	//类型
				default: "",							//默认值
				must: '',
			}
		]
    },{
		title: "Function",
		api: [
			{
				key: "1",
				parameter: "onDragStart",  //字段名
				instructions: '拖动中的回调',	//描述
				type: '	function(interface GridItemEvent {event: any //浏览器拖动事件GridX: number //在布局中的x格子  GridY: number //在布局中的y格子  w: number //元素的宽度  h: number //元素的高度     UniqueKey: string | number //元素的唯一key })',	//类型
				default: "-",							//默认值
				must: 'true',
			},{
				key: "2",
				parameter: "onDrag",  //字段名
				instructions: '拖动中的回调',	//描述
				type: 'function((event: GridItemEvent) => void)',	//类型
				default: "-",							//默认值
				must: 'true',
			},{
				key: "3",
				parameter: "onDragEnd",  //字段名
				instructions: '拖动结束的回调',	//描述
				type: 'function((event: GridItemEvent) => void)',	//类型
				default: "-",							//默认值
				must: 'true',
			}
		]
    },
];

export default {
	api
}