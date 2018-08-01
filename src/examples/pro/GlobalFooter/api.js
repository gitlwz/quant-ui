
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "links",  //字段名
				instructions: '链接数据	',	//描述
				type: '	array<{ title: ReactNode, href: string, blankTarget?: boolean }>',	//类型
				default: "-",							//默认值
				must: '',
			},{
				key: "2",
				parameter: "copyright	",  //字段名
				instructions: '版权信息	',	//描述
				type: 'ReactNode',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	}
];

export default {
	api
}