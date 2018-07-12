const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="m9k3" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">SlidingValidation</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">SlidingValidationCode</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">SlidingValidation</span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">SlidingValidationCode</span><span class="pun">;</span></code></li></ol></pre>
`;
const api = [
	{
		key:"1",
		parameter:"succeed",  //字段名
		type:'function',	//类型
		must:'true',
		default:'无',							//默认值
		instructions:'滑动成功后的回调'	//描述
	},{
		key:"2",
		parameter:"succeedColr",  //字段名
		type:'string',	//类型
		must:'',
		default:'#7BBB55',							//默认值
		instructions:'成功色'	//描述
	},{
		key:"3",
		parameter:"width",  //字段名
		type:'string',	//类型
		must:'',
		default:'100%',							//默认值
		instructions:'宽度'	//描述
	},
];

export default {
	code,
	api
}