
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "count",  //字段名
				type: 'number | ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏'	//描述
            },
            {
                key: "2",
				parameter: "dot",  //字段名
				type: "boolean",	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: ' 不展示数字，只有一个小红点'	//描述
            },
            {
                key: "3",
				parameter: "offset",  
				type: "[number,number]",
				must: '',
				default: '-',
				instructions: ' 设置状态点的位置偏移，格式为 [x, y]'
            },
            {
                key: "4",
				parameter: "overflowCount",  
				type: "number",
				must: '',
				default: '99',
				instructions: ' 展示封顶的数字值'
            },
            {
                key: "5",
				parameter: "showZero",  
				type: "boolean",
				must: '',
				default: 'false',
				instructions: ' 当数值为 0 时，是否展示 Badge'
            },
            {
                key: "6",
				parameter: "status",  
				type: "Enum{ 'success', 'processing, 'default', 'error', 'warning' }",
				must: '',
				default: "''",
				instructions: ' 设置 Badge 为状态点'
            },
            {
                key: "7",
				parameter: "text",  
				type: "string",
				must: '',
				default: "''",
				instructions: ' 在设置了 status 的前提下有效，设置状态点的文本'
            },
            {
                key: "8",
				parameter: "title",  
				type: "string",
				must: '',
				default: 'count',
				instructions: ' 设置鼠标放在状态点上时显示的文字'
            },
		]
	}

];

export default {
	api
}