
const api = [
	{
		title: "共同的api",
		api: [
			{
				key: "1",
				parameter: "allowClear",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否显示清除按钮'	//描述
            },
            {
                key: "2",
				parameter: "autoFocus",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '自动获取焦点'	//描述
            },
            {
                key: "3",
				parameter: "className",  
				type: "string",
				must: '',
				default: '',
				instructions: '选择器 className'
            },
            {
                key: "4",
				parameter: "dateRender",  
				type: "function(currentDate: moment, today: moment) => React.ReactNode",
				must: '',
				default: '-',
				instructions: '自定义日期单元格的内容'
            },
            {
                key: "5",
				parameter: "disabled",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: '禁用'
			},
			{
                key: "6",
				parameter: "disabledDate",  
				type: "(currentDate: moment) => boolean",
				must: '',
				default: '无',
				instructions: '不可选择的日期'
			},
			{
                key: "7",
				parameter: "dropdownClassName",  
				type: "string",
				must: '',
				default: '-',
				instructions: '额外的弹出日历 className'
			},
			{
                key: "8",
				parameter: "getCalendarContainer",  
				type: "function(trigger)",
				must: '',
				default: '无',
				instructions: '定义浮层的容器，默认为 body 上新建 div'
			},
			{
                key: "9",
				parameter: "locale",  
				type: "object",
				must: '',
				default: '默认配置',
				instructions: '国际化配置'
			},
			{
                key: "10",
				parameter: "open",  
				type: "boolean",
				must: '',
				default: '-',
				instructions: '控制弹层是否展开'
			},
			{
                key: "11",
				parameter: "placeholder",  
				type: "string|RangePicker[]",
				must: '',
				default: '-',
				instructions: '输入框提示文字'
			},
			{
                key: "12",
				parameter: "popupStyle",  
				type: "object",
				must: '',
				default: '{}',
				instructions: '额外的弹出日历样式'
			},
			{
                key: "13",
				parameter: "size",  
				type: "string",
				must: '',
				default: '无',
				instructions: '输入框大小，large 高度为 40px，small 为 24px，默认是 32px'
			},
			{
                key: "14",
				parameter: "style",  
				type: "object",
				must: '',
				default: '{}',
				instructions: '自定义输入框样式'
			},
			{
                key: "15",
				parameter: "onOpenChange",  
				type: "function(status)",
				must: '',
				default: '无',
				instructions: '弹出日历和关闭日历的回调'
            },
        ]
	},
	{
		title: "DatePicker",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认日期'	//描述
            },
            {
                key: "2",
				parameter: "disabledTime",  //字段名
				type: "function(date)",	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '不可选择的时间'	//描述
            },
            {
                key: "3",
				parameter: "format",  
				type: "string",
				must: '',
				default: '"YYYY-MM-DD"',
				instructions: '展示的日期格式，配置参考 moment.js'
            },
            {
                key: "4",
				parameter: "mode",  
				type: "time|date|month|year",
				must: '',
				default: '\'date\'',
				instructions: '日期面板的状态'
            },
            {
                key: "5",
				parameter: "renderExtraFooter",  
				type: "() => React.ReactNode",
				must: '',
				default: '-',
				instructions: '在面板中添加额外的页脚'
			},
			{
                key: "6",
				parameter: "showTime",  
				type: "Object|boolean",
				must: '',
				default: 'TimePicker Options',
				instructions: '增加时间选择功能'
			},
			{
                key: "7",
				parameter: "showTime.defaultValue",  
				type: "moment",
				must: '',
				default: 'moment()',
				instructions: '设置用户选择日期时默认的时分秒，'
			},
			{
                key: "8",
				parameter: "showToday",  
				type: "boolean",
				must: '',
				default: 'true',
				instructions: '是否展示“今天”按钮'
			},
			{
                key: "9",
				parameter: "value",  
				type: "moment",
				must: '',
				default: '无',
				instructions: '日期'
			},
			{
                key: "10",
				parameter: "onChange",  
				type: "function(date: moment, dateString: string)",
				must: '',
				default: '无',
				instructions: '时间发生变化的回调'
			},
			{
                key: "10",
				parameter: "onOk",  
				type: "function()",
				must: '',
				default: '-',
				instructions: '点击确定按钮的回调'
			},
			{
                key: "11",
				parameter: "onPanelChange",  
				type: "function(value, mode)",
				must: '',
				default: '-',
				instructions: '日期面板变化时的回调'
            },
        ]
	},
	{
		title: "MonthPicker",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认日期'	//描述
            },
            {
                key: "2",
				parameter: "format",  //字段名
				type: "string",	//类型
				must: '',				//是否必填
				default: '"YYYY-MM"',							//默认值
				instructions: '展示的日期格式，配置参考 moment.js'	//描述
            },
            {
                key: "3",
				parameter: "monthCellContentRender",  
				type: "function(date, locale): ReactNode",
				must: '',
				default: '-',
				instructions: '自定义的月份内容渲染方法'
            },
            {
                key: "4",
				parameter: "renderExtraFooter",  
				type: "() => React.ReactNode",
				must: '',
				default: '-',
				instructions: '在面板中添加额外的页脚'
            },
            {
                key: "5",
				parameter: "value",  
				type: "moment",
				must: '',
				default: '无',
				instructions: '日期'
			},
			{
                key: "6",
				parameter: "onChange",  
				type: "function(date: moment, dateString: string)",
				must: '',
				default: '-',
				instructions: '时间发生变化的回调，发生在用户选择时间时'
			},
        ]
	},
	{
		title: "WeekPicker",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'moment',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '默认日期'	//描述
            },
            {
                key: "2",
				parameter: "format",  //字段名
				type: "string",	//类型
				must: '',				//是否必填
				default: '"YYYY-wo"',							//默认值
				instructions: '展示的日期格式，配置参考 moment.js'	//描述
            },
            {
                key: "3",
				parameter: "value",  
				type: "moment",
				must: '',
				default: '-',
				instructions: '日期'
            },
            {
                key: "4",
				parameter: "onChange",  
				type: "function(date: moment, dateString: string)",
				must: '',
				default: '-',
				instructions: '时间发生变化的回调，发生在用户选择时间时'
            },
        ]
	},
	{
		title: "RangePicker",
		api: [
			{
				key: "1",
				parameter: "defaultValue",  //字段名
				type: 'moment[]',	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '默认日期'	//描述
            },
            {
                key: "2",
				parameter: "disabledTime",  //字段名
				type: "function(dates: moment, moment, partial: 'start'|'end')",	//类型
				must: '',				//是否必填
				default: '无',							//默认值
				instructions: '不可选择的时间'	//描述
            },
            {
                key: "3",
				parameter: "format",  
				type: "string",
				must: '',
				default: '"YYYY-MM-DD HH:mm:ss"',
				instructions: '展示的日期格式'
            },
            {
                key: "4",
				parameter: "ranges",  
				type: "{ [range: string]: moment[] } | () => { [range: string]: moment[] }",
				must: '',
				default: '无',
				instructions: '预设时间范围快捷选择'
			},
			{
                key: "5",
				parameter: "renderExtraFooter",  
				type: " () => React.ReactNode	",
				must: '',
				default: '-',
				instructions: '在面板中添加额外的页脚'
			},
			{
                key: "6",
				parameter: "showTime",  
				type: " Object|boolean",
				must: '',
				default: 'TimePicker Options',
				instructions: '增加时间选择功能'
			},
			{
                key: "7",
				parameter: "showTime.defaultValue",  
				type: "moment[]",
				must: '',
				default: 'moment(), moment()',
				instructions: '设置用户选择日期时默认的时分秒'
			},
			{
                key: "8",
				parameter: "value",  
				type: "moment[]",
				must: '',
				default: '无',
				instructions: '日期'
			},
			{
                key: "9",
				parameter: "onCalendarChange",  
				type: "function(dates: moment, moment, dateStrings: string, string)",
				must: '',
				default: '无',
				instructions: '待选日期发生变化的回调'
			},
			{
                key: "10",
				parameter: "onChange",  
				type: "function(dates: moment, moment, dateStrings: string, string)",
				must: '',
				default: '无',
				instructions: '日期范围发生变化的回调'
			},
			{
                key: "11",
				parameter: "onOk",  
				type: "function()",
				must: '',
				default: '-',
				instructions: '点击确定按钮的回调'
			},
        ]
    },



];

export default {
	api
}