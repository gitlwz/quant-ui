
const api = [
	{
		title: "Steps",
		api: [
			{
				key: "1",
				parameter: "current",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态'	//描述
			},
			{
				key: "2",
				parameter: "direction",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'horizontal',							//默认值
				instructions: '指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向'	//描述
			},
			{
				key: "3",
				parameter: "progressDot",  //字段名
				type: 'Boolean or (iconDot, {index, status, title, description}) => ReactNode',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '点状步骤条，可以设置为一个 function'	//描述
			},
			{
				key: "4",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'default',							//默认值
				instructions: '指定大小，目前支持普通（default）和迷你（small）'	//描述
			},
			{
				key: "5",
				parameter: "status",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'process',							//默认值
				instructions: '指定当前步骤的状态，可选 wait process finish error'	//描述
			},
		]
	},
	{
		title: "Steps.Step",
		api: [
			{
				key: "1",
				parameter: "description",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '步骤的详情描述，可选'	//描述
			},
			{
				key: "2",
				parameter: "icon",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '步骤图标的类型，可选'	//描述
			},
			{
				key: "3",
				parameter: "status",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: 'wait',							//默认值
				instructions: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error'	//描述
			},
			{
				key: "4",
				parameter: "title",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '标题'	//描述
			},
		]
	}

];

export default {
	api
}