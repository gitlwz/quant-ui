
const api = [
	{
		title: "Form",
		api: [
			{
				key: "1",
				parameter: "form",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '	无',							//默认值
				instructions: '经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 Form 即可。1.7.0 之后无需设置'	//描述
			},
			{
				key: "2",
				parameter: "hideRequiredMark",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '隐藏所有表单项的必选标记'	//描述
			},
			{
				key: "3",
				parameter: "layout",  //字段名
				type: '\'horizontal\'|\'vertical\'|\'inline\'',	//类型
				must: '',				//是否必填
				default: '\'horizontal\'',							//默认值
				instructions: '表单布局(2.8 之后支持)'	//描述
			},
			{
				key: "4",
				parameter: "onSubmit",  //字段名
				type: 'Function(e:Event)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '数据验证成功后回调事件'	//描述
			},
		]
	},
	{
		title: "Form.create(options)",
		api: [
			{
				key: "1",
				parameter: "mapPropsToFields",  //字段名
				type: '(props) => Object{ fieldName: FormField { value } }',	//类型
				must: '',				//是否必填
				default: '	无',							//默认值
				instructions: '把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 Form.createFormField 标记'	//描述
			},
			{
				key: "2",
				parameter: "validateMessages",  //字段名
				type: 'Object { nested.path: String }',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '默认校验信息，可用于把默认错误信息改为中文等，格式与 newMessages 返回值一致'	//描述
			},
			{
				key: "3",
				parameter: "onFieldsChange",  //字段名
				type: 'Function(props, fields)',	//类型
				must: '',				//是否必填
				default: '\'horizontal\'',							//默认值
				instructions: '当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store'	//描述
			},
			{
				key: "4",
				parameter: "onValuesChange",  //字段名
				type: '(props, changedValues, allValues) => void',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '任一表单域的值发生改变时的回调'	//描述
			},
		]
	},
	{
		title: "this.props.form",
		api: [
			{
				key: "1",
				parameter: "getFieldDecorator",  //字段名
				type: '',	//类型
				must: '',				//是否必填
				default: '	',							//默认值
				instructions: '用于和表单进行双向绑定，详见下方描述'	//描述
			},
			{
				key: "2",
				parameter: "getFieldError",  //字段名
				type: 'Function(name)',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '获取某个输入控件的 Error'	//描述
			},
			{
				key: "3",
				parameter: "getFieldsError",  //字段名
				type: 'Function([names: string[]])',	//类型
				must: '',				//是否必填
				default: '\'horizontal\'',							//默认值
				instructions: '获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error'	//描述
			},
			{
				key: "4",
				parameter: "getFieldsValue",  //字段名
				type: 'Function([fieldNames: string[]])',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '获取一组输入控件的值，如不传入参数，则获取全部组件的值'	//描述
			},
			{
				key: "5",
				parameter: "getFieldValue",  //字段名
				type: 'Function(fieldName: string)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '获取一个输入控件的值'	//描述
			},
			{
				key: "6",
				parameter: "isFieldsTouched",  //字段名
				type: '(names?: string[]) => boolean',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '判断是否任一输入控件经历过 getFieldDecorator 的值收集时机 options.trigger'	//描述
			},
			{
				key: "7",
				parameter: "isFieldTouched",  //字段名
				type: '(name: string) => boolean',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger'	//描述
			},
			{
				key: "8",
				parameter: "isFieldValidating",  //字段名
				type: 'Function(name)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '判断一个输入控件是否在校验状态'	//描述
			},
			{
				key: "9",
				parameter: "resetFields",  //字段名
				type: 'Function([names: string[]])',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件'	//描述
			},
			{
				key: "10",
				parameter: "setFields",  //字段名
				type: 'Function({ fieldName: { value: any, errors: Error } })',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '设置一组输入控件的值与 Error'	//描述
			},
			{
				key: "11",
				parameter: "setFieldsValue",  //字段名
				type: 'Function({ fieldName: value }',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '设置一组输入控件的值（注意：不要在 componentWillReceiveProps 内使用，否则会导致死循环）'	//描述
			},
			{
				key: "12",
				parameter: "validateFields",  //字段名
				type: 'Function([fieldNames: string[]], options: object, callback: Function(errors, values))',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件'	//描述
			},
			{
				key: "13",
				parameter: "validateFieldsAndScroll",  //字段名
				type: '参考 validateFields',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '与 validateFields 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围'	//描述
			},
		]
	},
	{
		title: "this.props.form.validateFields/validateFieldsAndScroll([fieldNames: string[]], options: object, callback: Function(errors, values))",
		api: [
			{
				key: "1",
				parameter: "options.first",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验'	//描述
			},
			{
				key: "2",
				parameter: "options.firstFields",  //字段名
				type: 'String[]',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '指定表单域会在碰到第一个失败了的校验规则后停止校验'	//描述
			},
			{
				key: "3",
				parameter: "options.force",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验'	//描述
			},
			{
				key: "4",
				parameter: "options.scroll",  //字段名
				type: 'Object',	//类型
				must: '',				//是否必填
				default: '{}',							//默认值
				instructions: '定义 validateFieldsAndScroll 的滚动行为'	//描述
			},
		]
	},
	{
		title: "getFieldDecorator(id, options) 参数",
		api: [
			{
				key: "1",
				parameter: "id",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '必填输入控件唯一标志。支持嵌套式的写法'	//描述
			},
			{
				key: "2",
				parameter: "options.getValueFromEvent",  //字段名
				type: 'function(..args)',	//类型
				must: '',				//是否必填
				default: 'reference',							//默认值
				instructions: '可以把 onChange 的参数（如 event）转化为控件的值'	//描述
			},
			{
				key: "3",
				parameter: "options.initialValue",  //字段名
				type: '',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '子节点的初始值，类型、可选值均由子节点决定(注意：由于内部校验时使用 === 判断是否变化，建议使用变量缓存所需设置的值而非直接使用字面量))'	//描述
			},
			{
				key: "4",
				parameter: "options.normalize",  //字段名
				type: 'function(value, prevValue, allValues): any',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '转换默认的 value 给控件'	//描述
			},
			{
				key: "5",
				parameter: "options.rules",  //字段名
				type: 'object[]',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '校验规则'	//描述
			},
			{
				key: "6",
				parameter: "options.trigger",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'onChange\'',							//默认值
				instructions: '收集子节点的值的时机'	//描述
			},
			{
				key: "7",
				parameter: "options.validateFirst",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '当某一规则校验不通过时，是否停止剩下的规则的校验'	//描述
			},
			{
				key: "8",
				parameter: "options.validateTrigger",  //字段名
				type: 'string|string[]',	//类型
				must: '',				//是否必填
				default: '\'onChange\'',							//默认值
				instructions: '校验子节点值的时机'	//描述
			},
			{
				key: "9",
				parameter: "options.valuePropName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'value\'',							//默认值
				instructions: '子节点的值的属性，如 Switch 的是 \'checked\''	//描述
			},
		]
	},
	{
		title: "Form.Item",
		api: [
			{
				key: "1",
				parameter: "colon",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '配合 label 属性使用，表示是否显示 label 后面的冒号'	//描述
			},
			{
				key: "2",
				parameter: "extra",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。'	//描述
			},
			{
				key: "3",
				parameter: "hasFeedback",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用'	//描述
			},
			{
				key: "4",
				parameter: "help",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '提示信息，如不设置，则会根据校验规则自动生成'	//描述
			},
			{
				key: "5",
				parameter: "label",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: 'label 标签的文本'	//描述
			},
			{
				key: "6",
				parameter: "labelCol",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: 'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}'	//描述
			},
			{
				key: "7",
				parameter: "required",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否必填，如不设置，则会根据校验规则自动生成'	//描述
			},
			{
				key: "8",
				parameter: "validateStatus",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '校验状态，如不设置，则会根据校验规则自动生成，可选：\'success\' \'warning\' \'error\' \'validating\''	//描述
			},
			{
				key: "9",
				parameter: "wrapperCol",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol'	//描述
			},
		]
	},
	{
		title: "校验规则",
		api: [
			{
				key: "1",
				parameter: "enum",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '枚举类型'	//描述
			},
			{
				key: "2",
				parameter: "len",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '字段长度'	//描述
			},
			{
				key: "3",
				parameter: "max",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '最大长度'	//描述
			},
			{
				key: "4",
				parameter: "message",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '校验文案'	//描述
			},
			{
				key: "5",
				parameter: "min",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '最小长度'	//描述
			},
			{
				key: "6",
				parameter: "pattern",  //字段名
				type: 'RegExp',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '正则表达式校验'	//描述
			},
			{
				key: "7",
				parameter: "required",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否必选'	//描述
			},
			{
				key: "8",
				parameter: "transform",  //字段名
				type: 'function(value) => transformedValue:any',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '校验前转换字段值'	//描述
			},
			{
				key: "9",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'string\'',							//默认值
				instructions: '内建校验类型，可选项	'	//描述
			},
			{
				key: "10",
				parameter: "validator",  //字段名
				type: 'function(rule, value, callback)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '自定义校验（注意，callback 必须被调用）	'	//描述
			},
			{
				key: "11",
				parameter: "whitespace",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '必选时，空格是否会被视为错误'	//描述
			},
		]
	}
];

export default {
	api
}