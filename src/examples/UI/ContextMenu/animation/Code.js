const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="4qjq"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">QContextMenu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">let</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">ContextMenu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Item</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Separator</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Submenu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">ContextMenuProvider</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">QContextMenu</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> onClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">({</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">ref</span><span class="pun">,</span><span class="pln"> data</span><span class="pun">,</span><span class="pln"> dataFromProvider </span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> alert</span><span class="pun">(</span><span class="str">'Hello'</span><span class="pun">);</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            animation</span><span class="pun">:</span><span class="pln"> </span><span class="str">'none'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">    </span><span class="typ">MyAwesomeMenu</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">ContextMenu</span><span class="pln"> animation</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">animation</span><span class="pun">}</span><span class="pln"> id</span><span class="pun">=</span><span class="str">'menu_id3'</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Item</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">onClick</span><span class="pun">}&gt;</span><span class="typ">Lorem</span><span class="pun">&lt;/</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Item</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">onClick</span><span class="pun">}&gt;</span><span class="typ">Ipsum</span><span class="pun">&lt;/</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Separator</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Item</span><span class="pln"> disabled</span><span class="pun">&gt;</span><span class="typ">Dolor</span><span class="pun">&lt;/</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Separator</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Submenu</span><span class="pln"> label</span><span class="pun">=</span><span class="str">"Foobar"</span><span class="pln"> arrow</span><span class="pun">=</span><span class="str">"🦄"</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Item</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">onClick</span><span class="pun">}&gt;</span><span class="typ">Foo</span><span class="pun">&lt;/</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Item</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">onClick</span><span class="pun">}&gt;</span><span class="typ">Bar</span><span class="pun">&lt;/</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Submenu</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">ContextMenu</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    _onClick</span><span class="pun">(</span><span class="pln">animation</span><span class="pun">){</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L7"><code><span class="pln">            animation</span><span class="pun">:</span><span class="pln">animation</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">})</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="typ">Animation</span><span class="pun">:</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_onClick</span><span class="pun">(</span><span class="str">"fade"</span><span class="pun">)}&gt;</span><span class="pln">fade</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln">  onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_onClick</span><span class="pun">(</span><span class="str">"flip"</span><span class="pun">)}&gt;</span><span class="pln">flip</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_onClick</span><span class="pun">(</span><span class="str">"pop"</span><span class="pun">)}&gt;</span><span class="pln">pop</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln">  onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_onClick</span><span class="pun">(</span><span class="str">"zoom"</span><span class="pun">)}&gt;</span><span class="pln">zoom</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ContextMenuProvider</span><span class="pln"> id</span><span class="pun">=</span><span class="str">"menu_id3"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="str">&lt;h1&gt;</span><span class="pun">我是环境菜单&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ContextMenuProvider</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="typ">MyAwesomeMenu</span><span class="pun">()}</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;
export default {
	code,
}