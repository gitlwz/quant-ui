const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="l9zv"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Modal</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> visible</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    showModal </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L9"><code><span class="pln">            visible</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    handleOk </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">e</span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L6"><code><span class="pln">            visible</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    handleCancel </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">e</span><span class="pun">);</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L3"><code><span class="pln">            visible</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">showModal</span><span class="pun">}&gt;</span><span class="typ">Open</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Modal</span></code></li><li class="L2"><code><span class="pln">                    title</span><span class="pun">=</span><span class="str">"Basic Modal"</span></code></li><li class="L3"><code><span class="pln">                    visible</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">visible</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                    onOk</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleOk</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    onCancel</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleCancel</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                    okButtonProps</span><span class="pun">={{</span><span class="pln"> disabled</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L7"><code><span class="pln">                    cancelButtonProps</span><span class="pun">={{</span><span class="pln"> disabled</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="str">&lt;p&gt;</span><span class="typ">Some</span><span class="pln"> contents</span><span class="pun">...&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="str">&lt;p&gt;</span><span class="typ">Some</span><span class="pln"> contents</span><span class="pun">...&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="str">&lt;p&gt;</span><span class="typ">Some</span><span class="pln"> contents</span><span class="pun">...&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Modal</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L9"><code></code></li></ol></pre>`;

export default {
	code,
}