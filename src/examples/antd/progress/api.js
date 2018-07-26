
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "format",  //字段名
				type: 'function(percent, successPercent)',	//类型
				must: '',				//是否必填
				default: 'percent => percent + \'%\'',							//默认值
				instructions: '内容的模板函数'	//描述
			},
			{
				key: "2",
				parameter: "gapDegree (type=circle)",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '圆形进度条缺口角度，可取值 0 ~ 360'	//描述
			},
			{
				key: "3",
				parameter: "gapPosition (type=circle)",  //字段名
				type: 'Enum{ \'top\', \'bottom\', \'left\', \'right\' }',	//类型
				must: '',				//是否必填
				default: 'top',							//默认值
				instructions: '圆形进度条缺口位置'	//描述
			},
			{
				key: "4",
				parameter: "percent",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '百分比'	//描述
			},
			{
				key: "5",
				parameter: "showInfo",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'true',							//默认值
				instructions: '是否显示进度数值或状态图标'	//描述
			},
			{
				key: "6",
				parameter: "status",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '状态，可选：success exception active'	//描述
			},
			{
				key: "7",
				parameter: "strokeWidth (type=line)",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '10',							//默认值
				instructions: '进度条线的宽度，单位 px'	//描述
			},
			{
				key: "8",
				parameter: "strokeWidth (type=circle)",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '6',							//默认值
				instructions: '圆形进度条线的宽度，单位是进度条画布宽度的百分比'	//描述
			},
			{
				key: "9",
				parameter: "strokeColor",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '进度条的色彩'	//描述
			},
			{
				key: "10",
				parameter: "successPercent",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '已完成的分段百分比，type="line" 时有效'	//描述
			},
			{
				key: "11",
				parameter: "type",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'line',							//默认值
				instructions: '类型，可选 line circle dashboard'	//描述
			},
			{
				key: "12",
				parameter: "width (type=circle)",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '132',							//默认值
				instructions: '圆形进度条画布宽度，单位 px'	//描述
			},
		]
	}

];

export default {
	api
}