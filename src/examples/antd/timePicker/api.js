
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "addon",  //字段名
				type: 'function',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '选择框底部显示自定义的内容'	//描述
			},
			{
				key: "2",
				parameter: "allowEmpty",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否展示清除按钮'	//描述
			},
			{
				key: "3",
				parameter: "autoFocus",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
			},
			{
				key: "4",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'\'',							//默认值
				instructions: '选择器类名'	//描述
			},
			{
				key: "5",
				parameter: "clearText",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'clear',							//默认值
				instructions: '清除按钮的提示文案'	//描述
			},
			{
				key: "6",
				parameter: "defaultOpenValue",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值'	//描述
			},
			{
				key: "7",
				parameter: "defaultValue",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认时间'	//描述
			},
			{
				key: "8",
				parameter: "disabled",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '禁用全部操作'	//描述
			},
			{
				key: "9",
				parameter: "disabledHours",  //字段名
				type: 'function()',	//类型
				must: '',				//是否必填
				default: '	无',							//默认值
				instructions: '禁止选择部分小时选项'	//描述
			},
			{
				key: "10",
				parameter: "disabledMinutes",  //字段名
				type: 'function(selectedHour)',	//类型
				must: '',				//是否必填
				default: '	无',							//默认值
				instructions: '禁止选择部分分钟选项'	//描述
			},
			{
				key: "11",
				parameter: "disabledSeconds",  //字段名
				type: 'function(selectedHour, selectedMinute)',	//类型
				must: '',				//是否必填
				default: '	无',							//默认值
				instructions: '禁止选择部分秒选项'	//描述
			},
			{
				key: "12",
				parameter: "format",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '"HH:mm:ss"',							//默认值
				instructions: '展示的时间格式'	//描述
			},
			{
				key: "13",
				parameter: "getPopupContainer",  //字段名
				type: 'function(trigger)',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '定义浮层的容器，默认为 body 上新建 div'	//描述
			},
			{
				key: "14",
				parameter: "hideDisabledOptions",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '隐藏禁止选择的选项'	//描述
			},
			{
				key: "15",
				parameter: "hourStep",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '小时选项间隔'	//描述
			},
			{
				key: "16",
				parameter: "inputReadOnly",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '设置输入框为只读（避免在移动设备上打开虚拟键盘）'	//描述
			},
			{
				key: "17",
				parameter: "minuteStep",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '分钟选项间隔'	//描述
			},
			{
				key: "18",
				parameter: "open",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '面板是否打开'	//描述
			},
			{
				key: "19",
				parameter: "placeholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '"请选择时间"',							//默认值
				instructions: '没有值的时候显示的内容'	//描述
			},
			{
				key: "20",
				parameter: "popupClassName",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'\'',							//默认值
				instructions: '弹出层类名'	//描述
			},
			{
				key: "21",
				parameter: "secondStep",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '秒选项间隔'	//描述
			},
			{
				key: "22",
				parameter: "use12Hours",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '使用 12 小时制，为 true 时 format 默认为 h:mm:ss a'	//描述
			},
			{
				key: "23",
				parameter: "value",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '当前时间'	//描述
			},
			{
				key: "24",
				parameter: "onChange",  //字段名
				type: 'function(time: moment, timeString: string): void',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '时间发生变化的回调'	//描述
			},
			{
				key: "25",
				parameter: "onOpenChange",  //字段名
				type: '(open: boolean): void',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '面板打开/关闭时的回调'	//描述
			},
		]
	}

];

export default {
	api
}