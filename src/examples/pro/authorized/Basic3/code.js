const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="ei3m" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln">theme</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln">getCurrentColor</span><span class="pun">,</span><span class="pln">refreshColor</span><span class="pun">,</span><span class="pln">setCurrentColor</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> theme</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    redClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L5"><code><span class="pln">        setCurrentColor</span><span class="pun">(</span><span class="str">'red'</span><span class="pun">)</span></code></li><li class="L6"><code><span class="pln">        refreshColor</span><span class="pun">()</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">    greenClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        setCurrentColor</span><span class="pun">(</span><span class="str">'green'</span><span class="pun">)</span></code></li><li class="L0"><code><span class="pln">        refreshColor</span><span class="pun">()</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">    purpleClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L3"><code><span class="pln">        setCurrentColor</span><span class="pun">(</span><span class="str">'purple'</span><span class="pun">)</span></code></li><li class="L4"><code><span class="pln">        refreshColor</span><span class="pun">()</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;h2&gt;</span><span class="pun">当前字体颜色{</span><span class="pln">getCurrentColor</span><span class="pun">()}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">redClick</span><span class="pun">}&gt;红色&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">greenClick</span><span class="pun">}&gt;绿色&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">purpleClick</span><span class="pun">}&gt;紫色&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;

export default {
	code,
}