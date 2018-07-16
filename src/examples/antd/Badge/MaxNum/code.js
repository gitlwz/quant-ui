const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="snef" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Avatar</span><span class="pun">,</span><span class="typ">Badge</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Badge</span><span class="pln"> count</span><span class="pun">={</span><span class="lit">99</span><span class="pun">}&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Avatar</span><span class="pln"> shape</span><span class="pun">=</span><span class="str">"square"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Badge</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Badge</span><span class="pln"> count</span><span class="pun">={</span><span class="lit">100</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Avatar</span><span class="pln"> shape</span><span class="pun">=</span><span class="str">"square"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Badge</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Badge</span><span class="pln"> count</span><span class="pun">={</span><span class="lit">99</span><span class="pun">}</span><span class="pln"> overflowCount</span><span class="pun">={</span><span class="lit">10</span><span class="pun">}&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Avatar</span><span class="pln"> shape</span><span class="pun">=</span><span class="str">"square"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Badge</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Badge</span><span class="pln"> count</span><span class="pun">={</span><span class="lit">1000</span><span class="pun">}</span><span class="pln"> overflowCount</span><span class="pun">={</span><span class="lit">999</span><span class="pun">}&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Avatar</span><span class="pln"> shape</span><span class="pun">=</span><span class="str">"square"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Badge</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}