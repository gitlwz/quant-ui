
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "wrapperStyle",  //字段名
				type: 'string',	//类型
				must: '',
				default: "无",							//默认值
				instructions: '应用于编辑器和工具栏的样式对象'	//描述
			},
			{
				key: "2",
				parameter: "editorStyle",  //字段名
				type: 'string',	//类型
				must: '',
				default: "无",							//默认值
				instructions: '在编辑器周围应用样式对象'	//描述
			},
			{
				key: "3",
				parameter: "toolbarStyle",  //字段名
				type: 'string',	//类型
				must: '',
				default: "无",							//默认值
				instructions: '应用于工具栏周围的样式对象'	//描述
			},
			{
				key: "4",
				parameter: "onChange",  //字段名
				type: 'Function',	//类型
				must: '',
				default: "默认配置",							//默认值
				instructions: '当编译器状态改变时调用，传入RawDraftContentState类型的参数，该参数包含表述文本的对象'	//描述
			},
			{
				key: "5",
				parameter: "toolbarHidden",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: "false",							//默认值
				instructions: '如果此属性为true，则隐藏工具栏。'	//描述
			},
			{
				key: "6",
				parameter: "toolbarOnFocus",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: "false",							//默认值
				instructions: '只有在编辑器聚焦时，工具栏才可见。'	//描述
			},
			{
				key: "7",
				parameter: "toolbarCustomButtons",  //字段名
				type: 'Function',	//类型
				must: '',
				default: "默认配置",							//默认值
				instructions: '向工具栏添加新选项。'	//描述
			},
			{
				key: "8",
				parameter: "localization",  //字段名
				type: 'String',	//类型
				must: '',
				default: "en",							//默认值
				instructions: '语言，en, fr, zh, ru, pt, ko, it, nl, de, da, zh_tw, pl, es.'	//描述
			},
		]
	},
	{
		title: "toolbar",
		api: [
			{
				key: "0",
				parameter: "options",  //字段名
				type: 'Array',	//类型
				must: '',
				default: "默认配置",							//默认值
				instructions: '工具栏中的选项值和每个菜单选项中的可用选项数组。该数组中指定的选项按顺序被添加到工具栏或菜单选项，'	//描述
			},
			{
				key: "1",
				parameter: "classname",  //字段名
				type: 'String',	//类型
				must: '',
				default: "undefined",							//默认值
				instructions: '为工具栏中按钮、下拉框、弹框添加类名'	//描述
			},
			{
				key: "2",
				parameter: "inDropdown",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: "false",							//默认值
				instructions: '菜单选项是否可下拉选择'	//描述
			},
			{
				key: "3",
				parameter: "component",  //字段名
				type: '',	//类型
				must: '',
				default: "undefined",							//默认值
				instructions: '可使用自定义的react组件，而不是预配置组件'	//描述
			},
			{
				key: "4",
				parameter: "icon",  //字段名
				type: '',	//类型
				must: '',
				default: "undefined",							//默认值
				instructions: '可用来指定工具栏按钮的图标'	//描述
			},
			{
				key: "5",
				parameter: "colorPicker.colors",  //字段名
				type: 'Array',	//类型
				must: '',
				default: "默认配置",							//默认值
				instructions: '配置可选的颜色数组'	//描述
			},
			{
				key: "6",
				parameter: "image: urlEnabled",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: "true",							//默认值
				instructions: '图片路径是否可输入，默认true'	//描述
			},
			{
				key: "7",
				parameter: "image: uploadEnabled",  //字段名
				type: 'boolean',	//类型
				must: '',
				default: "true",							//默认值
				instructions: '图片是否可自主选择上传，默认true'	//描述
			},
			{
				key: "8",
				parameter: "image: uploadCallback",  //字段名
				type: 'Function',	//类型
				must: '',
				default: "true",							//默认值
				instructions: '图片上传回调函数，返回Promise，调用成功获取图片路径对象，格式为{ data: { link: <THE_URL>}}'	//描述
			},
			{
				key: "9",
				parameter: "image: inputAccept",  //字段名
				type: 'String',	//类型
				must: '',
				default: "image/gif,image/jpeg,image/jpg,image/png,image/svg",//默认值
				instructions: '图片类型配置'	//描述
			},
		]
	}
];

export default {
	api
}