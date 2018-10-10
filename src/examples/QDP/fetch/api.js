
const api = [
    {
        title: "function",
        api: [
            {
                key: "0",
                parameter: "POST",  //字段名
                instructions: 'post请求	',	//描述
                type: '	function(url,params,showMessage,shownotification)  返回一个pomise ',	//类型
                default: "default",							//默认值
                must: '',
            },
            {
                key: "1",
                parameter: "GET",  //字段名
                instructions: 'get请求	',	//描述
                type: '	function(url,params,showMessage,shownotification)  返回一个pomise ',	//类型
                default: "default",							//默认值
                must: '',
            },
            {
                key: "2",
                parameter: "request",  //字段名
                instructions: 'fetch请求',	//描述
                type: '	function(url, newOptions,showMessage,shownotification)  返回一个pomise ',	//类型
                default: "default",							//默认值
                must: '',
            },{
                key: "3",
                parameter: "Download",  //字段名
                instructions: '文件导出请求，配合table使用更加方便',	//描述
                type: '	function(url, fileName, type, entity, params)',	//类型
                default: "default",							//默认值
                must: '',
            },
            {
                key: "4",
                parameter: "UploadMethod",  //字段名
                instructions: '文件上传方法',	//描述
                type: '	function(url, params, showMessage, shownotification)',	//类型
                default: "default",							//默认值
                must: '',
            },
        ]
    }
];

export default {
    api
}