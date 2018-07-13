const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="c8r6" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">NotFound</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">NotFoundCode</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">NotFound</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">NotFoundCode</span><span class="pun">;</span></code></li></ol></pre>
`;
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "img",  //字段名
				type: 'string',	//类型
				must: '',
				default: '404.png',							//默认值
				instructions: '页面中间的404图片'	//描述
			},
		]
	}

];

export default {
	code,
	api
}