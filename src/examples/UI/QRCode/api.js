const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="t6f5" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">QRCode</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">QRCodeCode</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">        </span><span class="str">&lt;div&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">QRCode</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"https://www.baidu.com/"</span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">  </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">QRCodeCode</span><span class="pun">;</span></code></li></ol></pre>
`;
const api = [
	{
		key:"1",
		parameter:"value",  //字段名
		type:'string',	//类型
		must:'',
		default:'无',							//默认值
		instructions:'扫面二维码出现的值'	//描述
	},
	{
		key:"2",
		parameter:"renderAs",  //字段名
		type:"string ('canvas' 'svg')",	//类型
		must:'',
		default:'canvas',							//默认值
		instructions:'二维码图片类型'	//描述
	},
	{
		key:"3",
		parameter:"size",  //字段名
		type:"number",	//类型
		must:'',
		default:'128',							//默认值
		instructions:'二维码图片大小'	//描述
	},
	{
		key:"4",
		parameter:"bgColor",  //字段名
		type:"string (CSS color)",	//类型
		must:'',
		default:'#FFFFFF',							//默认值
		instructions:'背景颜色'	//描述
	},
	{
		key:"5",
		parameter:"fgColor",  //字段名
		type:"string (CSS color)",	//类型
		must:'',
		default:'#000000',							//默认值
		instructions:'内容颜色'	//描述
	},
	{
		key:"6",
		parameter:"level",  //字段名
		type:"string ('L' 'M' 'Q' 'H')",	//类型
		must:'',
		default:'L',							//默认值
		instructions:'二维码复杂度'	//描述
	}
];

export default {
	code,
	api
}