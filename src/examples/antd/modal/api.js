
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "afterClose",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: 'Modal 完全关闭后的回调'	//描述
			},
			{
				key: "2",
				parameter: "bodyStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: 'Modal body 样式'	//描述
			},
			{
				key: "3",
				parameter: "cancelText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '取消',							//默认值
				instructions: '取消按钮文字'	//描述
			},
			{
				key: "4",
				parameter: "closable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否显示右上角的关闭按钮'	//描述
			},
			{
				key: "5",
				parameter: "confirmLoading",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '确定按钮 loading'	//描述
			},
			{
				key: "6",
				parameter: "destroyOnClose",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '关闭时销毁 Modal 里的子元素'	//描述
			},
			{
				key: "7",
				parameter: "footer",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '确定取消按钮',							//默认值
				instructions: '底部内容，当不需要默认底部按钮时，可以设为 footer={null}'	//描述
			},
			{
				key: "8",
				parameter: "getContainer",  //字段名
				type: '(instance): HTMLElement',	//类型
				must: '',				//是否必填
				default: '() => document.body',							//默认值
				instructions: '指定 Modal 挂载的 HTML 节点'	//描述
			},
			{
				key: "9",
				parameter: "keyboard",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否支持键盘esc关闭'	//描述
			},
			{
				key: "10",
				parameter: "mask",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否展示遮罩'	//描述
			},
			{
				key: "11",
				parameter: "maskClosable",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '点击蒙层是否允许关闭'	//描述
			},
			{
				key: "12",
				parameter: "maskStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: '遮罩样式'	//描述
			},
			{
				key: "13",
				parameter: "okText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '确定',							//默认值
				instructions: '确认按钮文字'	//描述
			},
			{
				key: "14",
				parameter: "okType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'primary',							//默认值
				instructions: '确认按钮类型'	//描述
			},
			{
				key: "15",
				parameter: "okButtonProps",  //字段名
				type: 'ButtonProps',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'ok 按钮 props'	//描述
			},
			{
				key: "16",
				parameter: "cancelButtonProps",  //字段名
				type: 'ButtonProps',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: 'cancel 按钮 props'	//描述
			},
			{
				key: "17",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '可用于设置浮层的样式，调整浮层位置等'	//描述
			},
			{
				key: "17",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '标题'	//描述
			},
			{
				key: "18",
				parameter: "visible",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '对话框是否可见'	//描述
			},
			{
				key: "19",
				parameter: "width",  //字段名
				type: 'boolstring|numberean',	//类型
				must: '',				//是否必填
				default: '520',							//默认值
				instructions: '宽度'	//描述
			},
			{
				key: "20",
				parameter: "wrapClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '对话框外层容器的类名'	//描述
			},
			{
				key: "21",
				parameter: "zIndex",  //字段名
				type: 'Number',	//类型
				must: '',				//是否必填
				default: '1000',							//默认值
				instructions: '设置 Modal 的 z-index'	//描述
			},
			{
				key: "22",
				parameter: "onCancel",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击遮罩层或右上角叉或取消按钮的回调'	//描述
			},
			{
				key: "23",
				parameter: "onOk",  //字段名
				type: 'function(e)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击确定回调'	//描述
			},
		]
	},
	{
		title: "Modal.method()",
		api: [
			{
				key: "1",
				parameter: "cancelText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '取消',							//默认值
				instructions: '取消按钮文字'	//描述
			},
			{
				key: "2",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '容器类名'	//描述
			},
			{
				key: "3",
				parameter: "content",  //字段名
				type: 'string|ReactNode	',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '内容'	//描述
			},
			{
				key: "4",
				parameter: "iconType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'question-circle',							//默认值
				instructions: '图标 Icon 类型'	//描述
			},
			{
				key: "5",
				parameter: "maskClosable",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '点击蒙层是否允许关闭'	//描述
			},
			{
				key: "6",
				parameter: "okText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '确定',							//默认值
				instructions: '确认按钮文字'	//描述
			},
			{
				key: "7",
				parameter: "okType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'primary',							//默认值
				instructions: '确认按钮类型'	//描述
			},
			{
				key: "8",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '标题'	//描述
			},
			{
				key: "9",
				parameter: "width",  //字段名
				type: 'string|number',	//类型
				must: '',				//是否必填
				default: '416',							//默认值
				instructions: '宽度'	//描述
			},
			{
				key: "10",
				parameter: "zIndex",  //字段名
				type: 'Number',	//类型
				must: '',				//是否必填
				default: '1000',							//默认值
				instructions: '设置 Modal 的 z-index'	//描述
			},
			{
				key: "11",
				parameter: "onCancel",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭'	//描述
			},
			{
				key: "12",
				parameter: "onOk",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭'	//描述
			},
		]
	}

];

export default {
	api
}