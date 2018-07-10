const code = `
import React, { Component } from 'react';
import { webSocket } from 'quant-ui';
class CopyCode extends Component {
	componentWillMount = () =>{
		this.ws = new webSocket("ws://47.75.170.16/sundax/wsPublicMessage",null,{});
		this.ws.onopen = function (evt) {
		
		};
        this.ws.onmessage = function (evt) {
		
		};

        this.ws.onclose = function (evt) {
		
		};
        this.ws.onerror = function(){
		
		}
        this.ws.onconnecting = function(){

        }
	}
	componentWillUnmount = () =>{
		this.ws.close();
	}
	render() {
		return (
			<div>
				请打开F12查看链接过程！

				<p>它装饰WebSocket API以提供WebSocket连接，如果连接断开，它将自动重新连接。</p>

				<h1>方法</h1>
				<h2>ws.open()</h2>
				<h3>打开重新连接Websocket</h3>

				<h2>ws.open()</h2>
				<h3>关闭WebSocket连接或连接尝试（如果有）。</h3>

				<h2>ws.refresh()</h2>
				<h3>如果仍然打开则刷新连接（关闭然后重新打开）</h3>

				<h2>ws.send(data)</h2>
				<h3>通过WebSocket连接将数据传输到服务器。
					接受@param数据文本字符串，ArrayBuffer或Blob</h3>
			</div>
		);
	}
}

export default CopyCode;
`;
const api = [
	{
		key:"1",
		parameter:"debug",  //字段名
		type:'true或false',	//类型
		must:'',
		default:'false',							//默认值
		instructions:'此实例是否应记录调试消息。打印调试消息console.debug()'	//描述
	},{
		key:"2",
		parameter:"automaticOpen",  //字段名
		type:'true或false',	//类型
		must:'',
		default:'true',							//默认值
		instructions:'websocket是否应该在实例化时立即尝试连接。可以使用ws.open（）和ws.close（）随时手动打开或关'	//描述
	},{
		key:"3",
		parameter:"reconnectInterval",  //字段名
		type:'integer',	//类型
		must:'',
		default:'1000',							//默认值
		instructions:'尝试重新连接之前延迟的毫秒数'	//描述
	},{
		key:"4",
		parameter:"maxReconnectInterval",  //字段名
		type:'integer',	//类型
		must:'',
		default:'30000',							//默认值
		instructions:'延迟重新连接尝试的最大毫秒数'	//描述
	},{
		key:"5",
		parameter:"reconnectDecay",  //字段名
		type:'integer',	//类型
		must:'',
		default:'1.5',							//默认值
		instructions:'重新连接延迟的增加率。允许重新连接尝试在问题仍然存在时退出'	//描述
	},{
		key:"6",
		parameter:"timeoutInterval",  //字段名
		type:'integer',	//类型
		must:'',
		default:'2000',							//默认值
		instructions:'在关闭和重试之前等待连接成功的最长时间（以毫秒为单位）'	//描述
	},{
		key:"7",
		parameter:"maxReconnectAttempts",  //字段名
		type:'integer或null',	//类型
		must:'',
		default:'null',							//默认值
		instructions:'在放弃之前将进行的最大重新连接尝试次数。如果为null，则将继续永久重新连接尝试'	//描述
	},{
		key:"8",
		parameter:"breatheParams",  //字段名
		type:'',	//类型
		must:'',
		default:"{ oper: 'touch' }",							//默认值
		instructions:'呼吸参数'	//描述
	},{
		key:"9",
		parameter:"breatheTime",  //字段名
		type:'int',	//类型
		must:'',
		default:"30000",							//默认值
		instructions:'呼吸间隔'	//描述
	},
];

export default {
	code,
	api
}