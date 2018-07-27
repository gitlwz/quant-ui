const code=`<pre class="prettyprint linenums prettyprinted" data-anchor-id="m142" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Radio</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">TabPane</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pun">.</span><span class="typ">TabPane</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            size</span><span class="pun">:</span><span class="pln"> </span><span class="str">'small'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    handleChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">var</span><span class="pln"> size </span><span class="pun">=</span><span class="pln"> e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">value</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> size </span><span class="pun">})</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Button</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="typ">Group</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Radio</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> size </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Group</span><span class="pln"> onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleChange</span><span class="pun">}</span><span class="pln"> </span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="pln"> </span><span class="str">'small'</span><span class="pun">&gt;</span><span class="pln">small</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">'default'</span><span class="pun">&gt;</span><span class="kwd">default</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> value</span><span class="pun">=</span><span class="str">'large'</span><span class="pun">&gt;</span><span class="pln">large</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Group</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Tabs</span><span class="pln"> defaultActiveKey</span><span class="pun">=</span><span class="str">"1"</span><span class="pln"> size</span><span class="pun">={</span><span class="pln">size</span><span class="pun">}</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 1"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"1"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">1</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 2"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"2"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">2</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 3"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"3"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of </span><span class="typ">Tab</span><span class="pln"> </span><span class="typ">Pane</span><span class="pln"> </span><span class="lit">3</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">TabPane</span><span class="pln"> tab</span><span class="pun">=</span><span class="str">"Tab 4"</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"4"</span><span class="pun">&gt;</span><span class="typ">Content</span><span class="pln"> of tab </span><span class="lit">4</span><span class="pun">&lt;/</span><span class="typ">TabPane</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Tabs</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div </span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">)</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L1"><code></code></li><li class="L2"><code></code></li><li class="L3"><code></code></li><li class="L4"><code></code></li><li class="L5"><code></code></li><li class="L6"><code></code></li><li class="L7"><code></code></li><li class="L8"><code></code></li></ol></pre>`;

export default{
    code,
}