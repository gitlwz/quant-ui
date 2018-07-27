const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="l9zv"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Modal</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">function</span><span class="pln"> info</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    </span><span class="typ">Modal</span><span class="pun">.</span><span class="pln">info</span><span class="pun">({</span></code></li><li class="L5"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'This is a notification message'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        content</span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="str">&lt;p&gt;</span><span class="pln">some messages</span><span class="pun">...</span><span class="pln">some messages</span><span class="pun">...&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;p&gt;</span><span class="pln">some messages</span><span class="pun">...</span><span class="pln">some messages</span><span class="pun">...&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">),</span></code></li><li class="L2"><code><span class="pln">        onOk</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pun">}</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="kwd">function</span><span class="pln"> success</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    </span><span class="typ">Modal</span><span class="pun">.</span><span class="pln">success</span><span class="pun">({</span></code></li><li class="L8"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'This is a success message'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'some messages...some messages...'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L1"><code><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">function</span><span class="pln"> error</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    </span><span class="typ">Modal</span><span class="pun">.</span><span class="pln">error</span><span class="pun">({</span></code></li><li class="L5"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'This is an error message'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'some messages...some messages...'</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="kwd">function</span><span class="pln"> warning</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    </span><span class="typ">Modal</span><span class="pun">.</span><span class="pln">warning</span><span class="pun">({</span></code></li><li class="L2"><code><span class="pln">        title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'This is a warning message'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'some messages...some messages...'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L0"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">info</span><span class="pun">}&gt;</span><span class="typ">Info</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">success</span><span class="pun">}&gt;</span><span class="typ">Success</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">error</span><span class="pun">}&gt;</span><span class="typ">Error</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">warning</span><span class="pun">}&gt;</span><span class="typ">Warning</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}