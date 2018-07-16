
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "icon",  //字段名
				type: 'string',	//类型
				must: '',				//是否必填
				default: '-',							//默认值
				instructions: '设置头像的图标类型，参考 Icon 组件'	//描述
            },
            {
                key: "2",
				parameter: "shape",  //字段名
				type: "Enum{'circle' , 'square'}",	//类型
				must: '',				//是否必填
				default: 'circle',							//默认值
				instructions: ' 指定头像形状'	//描述
            },
            {
                key: "3",
				parameter: "size",  
				type: "Enum{'large' , 'small' , 'default'}",
				must: '',
				default: 'default',
				instructions: ' 设置头像大小'
            },
            {
                key: "4",
				parameter: "src",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 图像类头像的资源地址'
            },
            {
                key: "5",
				parameter: "alt",  
				type: "string",
				must: '',
				default: '-',
				instructions: ' 图像无法显示时的替代文本'
            }
		]
	}

];

export default {
	api
}