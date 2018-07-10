import React, { Component } from 'react';
import { webSocket } from 'quant-ui';
import data from './api.js';
import Code from '../../Code.js';
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
				<Code code={data.code}/>
			</div>
		);
	}
}

export default CopyCode;
