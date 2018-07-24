
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '支持清除, 单选模式有效'	//描述
			},
			{
				key: "2",
				parameter: "defaultValue",  //字段名
				type: 'number|number[]',	//类型
				must: '',				//是否必填
				default: '0 or 0, 0',							//默认值
				instructions: '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]'	//描述
			},
			{
				key: "3",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '值为 true 时，滑块为禁用状态'	//描述
			},
			{
				key: "4",
				parameter: "dots",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否只能拖拽到刻度上'	//描述
			},
			{
				key: "5",
				parameter: "included",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: 'marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列'	//描述
			},
			{
				key: "6",
				parameter: "marks",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '{ number: string|ReactNode } or { number: { style: object, label: string|ReactNode } }',							//默认值
				instructions: '刻度标记，key 的类型必须为 number 且取值在闭区间 min, max 内，每个标签可以单独设置样式'	//描述
			},
			{
				key: "7",
				parameter: "max",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '100',							//默认值
				instructions: '最大值'	//描述
			},
			{
				key: "8",
				parameter: "min",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '最小值'	//描述
			},
			{
				key: "9",
				parameter: "range",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '双滑块模式'	//描述
			},
			{
				key: "10",
				parameter: "step",  //字段名
				type: 'number|null',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。'	//描述
			},
			{
				key: "11",
				parameter: "tipFormatter",  //字段名
				type: 'Function|null',	//类型
				must: '',				//是否必填
				default: 'IDENTITY',							//默认值
				instructions: 'Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。'	//描述
			},
			{
				key: "12",
				parameter: "value",  //字段名
				type: 'number|number[]',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]'	//描述
			},
			{
				key: "13",
				parameter: "vertical",  //字段名
				type: 'Boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '值为 true 时，Slider 为垂直方向'	//描述
			},
			{
				key: "14",
				parameter: "onAfterChange",  //字段名
				type: 'Function(value)',	//类型
				must: '',				//是否必填
				default: 'NOOP',							//默认值
				instructions: '与 onmouseup 触发时机一致，把当前值作为参数传入。'	//描述
			},
			{
				key: "15",
				parameter: "onChange",  //字段名
				type: 'Function(value)',	//类型
				must: '',				//是否必填
				default: 'NOOP',							//默认值
				instructions: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。'	//描述
			},
		]
	}

];

export default {
	api
}