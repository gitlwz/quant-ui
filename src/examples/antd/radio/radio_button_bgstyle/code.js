const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="bw33"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Radio</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Group</span><span class="pln"> defaultValue</span><span class="pun">=</span><span class="str">"a"</span><span class="pln"> buttonStyle</span><span class="pun">=</span><span class="str">"solid"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"a"</span><span class="pun">&gt;</span><span class="typ">Hangzhou</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"b"</span><span class="pun">&gt;</span><span class="typ">Shanghai</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"c"</span><span class="pun">&gt;</span><span class="typ">Beijing</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"d"</span><span class="pun">&gt;</span><span class="typ">Chengdu</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">16</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Group</span><span class="pln"> defaultValue</span><span class="pun">=</span><span class="str">"c"</span><span class="pln"> buttonStyle</span><span class="pun">=</span><span class="str">"solid"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"a"</span><span class="pun">&gt;</span><span class="typ">Hangzhou</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"b"</span><span class="pln"> disabled</span><span class="pun">&gt;</span><span class="typ">Shanghai</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"c"</span><span class="pun">&gt;</span><span class="typ">Beijing</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"d"</span><span class="pun">&gt;</span><span class="typ">Chengdu</span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L8"><code></code></li><li class="L9"><code></code></li><li class="L0"><code></code></li></ol></pre>`;

export default {
	code,
}