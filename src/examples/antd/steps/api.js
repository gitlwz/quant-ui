
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "current",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当前页数'	//描述
			},
			{
				key: "2",
				parameter: "defaultCurrent",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '1',							//默认值
				instructions: '默认的当前页数'	//描述
			},
			{
				key: "3",
				parameter: "defaultPageSize",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '10',							//默认值
				instructions: '默认的每页条数'	//描述
			},
			{
				key: "4",
				parameter: "hideOnSinglePage",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '只有一页时是否隐藏分页器'	//描述
			},
			{
				key: "5",
				parameter: "itemRender",  //字段名
				type: '(page, type: \'page\' | \'prev\' | \'next\', originalElement) => React.ReactNode',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '用于自定义页码的结构，可用于优化 SEO'	//描述
			},
			{
				key: "6",
				parameter: "pageSize",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '每页条数'	//描述
			},
			{
				key: "7",
				parameter: "pageSizeOptions",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '\'10\', \'20\', \'30\', \'40\'',							//默认值
				instructions: '指定每页可以显示多少条'	//描述
			},
			{
				key: "8",
				parameter: "showQuickJumper",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否可以快速跳转至某页'	//描述
			},
			{
				key: "9",
				parameter: "showSizeChanger",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否可以改变 pageSize'	//描述
			},
			{
				key: "10",
				parameter: "showTotal",  //字段名
				type: 'Function(total, range)',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '用于显示数据总量和当前数据顺序'	//描述
			},
			{
				key: "11",
				parameter: "simple",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '当添加该属性时，显示为简单分页'	//描述
			},
			{
				key: "12",
				parameter: "size",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '""',							//默认值
				instructions: '当为「small」时，是小尺寸分页'	//描述
			},
			{
				key: "13",
				parameter: "total",  //字段名
				type: 'number',	//类型
				must: '',				//是否必填
				default: '0',							//默认值
				instructions: '数据总数'	//描述
			},
			{
				key: "14",
				parameter: "onChange",  //字段名
				type: 'Function(page, pageSize)',	//类型
				must: '',				//是否必填
				default: 'noop',							//默认值
				instructions: '页码改变的回调，参数是改变后的页码及每页条数'	//描述
			},
			{
				key: "15",
				parameter: "onShowSizeChange",  //字段名
				type: 'Function(current, size)',	//类型
				must: '',				//是否必填
				default: 'noop',							//默认值
				instructions: 'pageSize 变化的回调'	//描述
			},
		]
	}

];

export default {
	api
}