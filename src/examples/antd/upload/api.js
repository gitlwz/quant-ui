
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "accept",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '接受上传的文件类型'	//描述
			},
			{
				key: "2",
				parameter: "action",  //字段名
				type: 'string|(file) => Promise',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '必选参数, 上传的地址'	//描述
			},
			{
				key: "3",
				parameter: "directory",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'fasle',							//默认值
				instructions: '支持上传文件夹（caniuse）'	//描述
			},
			{
				key: "4",
				parameter: "beforeUpload",  //字段名
				type: '(file, fileList) => boolean | Promise',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。注意：IE9 不支持该方法。'	//描述
			},
			{
				key: "5",
				parameter: "customRequest",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '通过覆盖默认的上传行为，可以自定义自己的上传实现'	//描述
			},
			{
				key: "6",
				parameter: "data",  //字段名
				type: 'object|(file) => object',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '上传所需参数或返回上传参数的方法'	//描述
			},
			{
				key: "7",
				parameter: "defaultFileList",  //字段名
				type: 'object[]',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认已经上传的文件列表'	//描述
			},
			{
				key: "8",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否禁用'	//描述
			},
			{
				key: "9",
				parameter: "fileList",  //字段名
				type: 'object[]',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '已经上传的文件列表（受控）'	//描述
			},
			{
				key: "10",
				parameter: "headers",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '设置上传的请求头部，IE10 以上有效'	//描述
			},
			{
				key: "11",
				parameter: "listType",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'text\'',							//默认值
				instructions: '上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card'	//描述
			},
			{
				key: "12",
				parameter: "multiple",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: ' 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。'	//描述
			},
			{
				key: "13",
				parameter: "name",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'file\'',							//默认值
				instructions: '发到后台的文件参数名'	//描述
			},
			{
				key: "14",
				parameter: "showUploadList",  //字段名
				type: 'Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon'	//描述
			},
			{
				key: "15",
				parameter: "supportServerRender",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '服务端渲染时需要打开这个'	//描述
			},
			{
				key: "16",
				parameter: "withCredentials",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '上传请求时是否携带 cookie'	//描述
			},
			{
				key: "17",
				parameter: "onChange",  //字段名
				type: 'Function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '上传文件改变时的状态'	//描述
			},
			{
				key: "18",
				parameter: "onPreview",  //字段名
				type: 'Function(file)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击文件链接或预览图标时的回调'	//描述
			},
			{
				key: "19",
				parameter: "onRemove",  //字段名
				type: 'Function(file): boolean | Promise',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。'	//描述
			},
		]
	}

];

export default {
	api
}