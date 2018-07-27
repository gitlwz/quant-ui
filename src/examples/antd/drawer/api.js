
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "closable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否显示右上角的关闭按钮'	//描述
			},
			{
				key: "2",
				parameter: "destroyOnClose",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '关闭时销毁 Drawer 里的子元素'	//描述
			},
			{
				key: "3",
				parameter: "getContainer",  //字段名
				type: 'HTMLElement | () => HTMLElement | selectors ',	//类型
				must: '',				//是否必填
				default: '\'body\'',							//默认值
				instructions: '指定 Drawer 挂载的 HTML 节点'	//描述
			},
			{
				key: "4",
				parameter: "maskClosable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '点击蒙层是否允许关闭'	//描述
			},
			{
				key: "5",
				parameter: "mask",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否展示遮罩'	//描述
			},
			{
				key: "6",
				parameter: "maskStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: '遮罩样式'	//描述
			},
			{
				key: "7",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '可用于设置 Drawer 的样式，调整浮层位置等'	//描述
			},
			{
				key: "8",
				parameter: "title",  //字段名
				type: 'string | ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '标题'	//描述
			},
			{
				key: "9",
				parameter: "visible",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'Drawer 是否可见'	//描述
			},
			{
				key: "10",
				parameter: "width",  //字段名
				type: 'string | number',	//类型
				must: '',				//是否必填
				default: '256',							//默认值
				instructions: '宽度'	//描述
			},
			{
				key: "11",
				parameter: "wrapClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '对话框外层容器的类名'	//描述
			},
			{
				key: "12",
				parameter: "zIndex",  //字段名
				type: 'Number',	//类型
				must: '',				//是否必填
				default: '1000',							//默认值
				instructions: '设置 Drawer 的 z-index'	//描述
			},
			{
				key: "13",
				parameter: "placement",  //字段名
				type: '\'left\' | \'right\'',	//类型
				must: '',				//是否必填
				default: '\'right\'',							//默认值
				instructions: '抽屉的方向'	//描述
			},
			{
				key: "14",
				parameter: "onClose",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击遮罩层或右上角叉或取消按钮的回调'	//描述
			},
		]
	}

];

export default {
	api
}