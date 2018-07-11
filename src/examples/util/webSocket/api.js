const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="48uz" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> webSocket </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> webSocketCode </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    componentWillMount </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> webSocket</span><span class="pun">(</span><span class="str">"ws://47.75.170.16/sundax/wsPublicMessage"</span><span class="pun">,</span><span class="kwd">null</span><span class="pun">,{});</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">onopen </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">evt</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">onmessage </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">evt</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">onclose </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">evt</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">onerror </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">onconnecting </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">    componentWillUnmount </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">close</span><span class="pun">();</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">请打开</span><span class="pln">F12</span><span class="pun">查看链接过程！</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">                </span><span class="str">&lt;p&gt;</span><span class="pun">它装饰</span><span class="typ">WebSocket</span><span class="pln"> API</span><span class="pun">以提供</span><span class="typ">WebSocket</span><span class="pun">连接，如果连接断开，它将自动重新连接。&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">                </span><span class="str">&lt;h1&gt;</span><span class="pun">方法&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="str">&lt;h2&gt;</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">open</span><span class="pun">()&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="str">&lt;h3&gt;</span><span class="pun">打开重新连接</span><span class="typ">Websocket</span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">                </span><span class="str">&lt;h2&gt;</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">open</span><span class="pun">()&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="str">&lt;h3&gt;</span><span class="pun">关闭</span><span class="typ">WebSocket</span><span class="pun">连接或连接尝试（如果有）。&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;h2&gt;</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">refresh</span><span class="pun">()&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="str">&lt;h3&gt;</span><span class="pun">如果仍然打开则刷新连接（关闭然后重新打开）&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">                </span><span class="str">&lt;h2&gt;</span><span class="pln">ws</span><span class="pun">.</span><span class="pln">send</span><span class="pun">(</span><span class="pln">data</span><span class="pun">)&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="str">&lt;h3&gt;</span><span class="pun">通过</span><span class="typ">WebSocket</span><span class="pun">连接将数据传输到服务器。</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">接受</span><span class="lit">@param</span><span class="pun">数据文本字符串，</span><span class="typ">ArrayBuffer</span><span class="pun">或</span><span class="typ">Blob</span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> webSocketCode</span><span class="pun">;</span></code></li></ol></pre>
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