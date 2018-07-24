
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '自定义类'	//描述
			},
			{
				key: "2",
				parameter: "dataSource",  //字段名
				type: 'TransferItem[]',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。'	//描述
			},
			{
				key: "3",
				parameter: "filterOption",  //字段名
				type: '(inputValue, option): boolean',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。'	//描述
			},
			{
				key: "4",
				parameter: "footer",  //字段名
				type: '(props): ReactNode',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '底部渲染函数'	//描述
			},
			{
				key: "5",
				parameter: "lazy",  //字段名
				type: 'object|boolean',	//类型
				must: '',				//是否必填
				default: '{ height: 32, offset: 32 }',							//默认值
				instructions: 'Transfer 使用了 react-lazy-load 优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。'	//描述
			},
			{
				key: "6",
				parameter: "listStyle",  //字段名
				type: 'object',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '两个穿梭框的自定义样式'	//描述
			},
			{
				key: "7",
				parameter: "notFoundContent",  //字段名
				type: 'string|ReactNode',	//类型
				must: '',				//是否必填
				default: '\'列表为空\'',							//默认值
				instructions: '当列表为空时显示的内容'	//描述
			},
			{
				key: "8",
				parameter: "operations",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '\'>\', \'<\'',							//默认值
				instructions: '操作文案集合，顺序从下至上'	//描述
			},
			{
				key: "9",
				parameter: "render",  //字段名
				type: 'Function(record)',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title'	//描述
			},
			{
				key: "10",
				parameter: "searchPlaceholder",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '\'请输入搜索内容\'',							//默认值
				instructions: '搜索框的默认值'	//描述
			},
			{
				key: "11",
				parameter: "selectedKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '设置哪些项应该被选中'	//描述
			},
			{
				key: "12",
				parameter: "showSearch",  //字段名
				type: 'boolean',	//类型
				must: '',				//是否必填
				default: 'false',							//默认值
				instructions: '是否显示搜索框'	//描述
			},
			{
				key: "13",
				parameter: "targetKeys",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '[]',							//默认值
				instructions: '显示在右侧框数据的key集合'	//描述
			},
			{
				key: "14",
				parameter: "titles",  //字段名
				type: 'string[]',	//类型
				must: '',				//是否必填
				default: '\'\', \'\'',							//默认值
				instructions: '标题集合，顺序从左至右'	//描述
			},
			{
				key: "15",
				parameter: "onChange",  //字段名
				type: '(targetKeys, direction, moveKeys): void',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '选项在两栏之间转移时的回调函数'	//描述
			},
			{
				key: "16",
				parameter: "onScroll",  //字段名
				type: '(direction, event): void',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '选项列表滚动时的回调函数'	//描述
			},
			{
				key: "17",
				parameter: "onSearchChange",  //字段名
				type: '(direction: \'left\'|\'right\', event: Event): void',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '搜索框内容时改变时的回调函数'	//描述
			},
			{
				key: "18",
				parameter: "onSelectChange",  //字段名
				type: '(sourceSelectedKeys, targetSelectedKeys): void',	//类型
				must: '',				//是否必填
				default: '',							//默认值
				instructions: '选中项发生改变时的回调函数'	//描述
			},
		]
	}

];

export default {
	api
}