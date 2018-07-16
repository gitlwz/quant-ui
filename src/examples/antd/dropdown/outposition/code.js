const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="o5nw"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Dropdown</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> menu </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">a target</span><span class="pun">=</span><span class="str">"_blank"</span><span class="pln"> rel</span><span class="pun">=</span><span class="str">"noopener noreferrer"</span><span class="pln"> href</span><span class="pun">=</span><span class="str">"http://www.alipay.com/"</span><span class="pun">&gt;</span><span class="lit">1st</span><span class="pln"> menu item</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">a target</span><span class="pun">=</span><span class="str">"_blank"</span><span class="pln"> rel</span><span class="pun">=</span><span class="str">"noopener noreferrer"</span><span class="pln"> href</span><span class="pun">=</span><span class="str">"http://www.taobao.com/"</span><span class="pun">&gt;</span><span class="lit">2nd</span><span class="pln"> menu item</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">a target</span><span class="pun">=</span><span class="str">"_blank"</span><span class="pln"> rel</span><span class="pun">=</span><span class="str">"noopener noreferrer"</span><span class="pln"> href</span><span class="pun">=</span><span class="str">"http://www.tmall.com/"</span><span class="pun">&gt;</span><span class="lit">3rd</span><span class="pln"> menu item</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">  </span><span class="pun">);</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L1"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomLeft"</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">bottomLeft</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomCenter"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">bottomCenter</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomRight"</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">bottomRight</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">br </span><span class="pun">/&gt;&lt;</span><span class="pln">br </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"topLeft"</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">topLeft</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"topCenter"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">topCenter</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&amp;</span><span class="pln">nbsp</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"topRight"</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span><span class="pln">topRight</span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L0"><code></code></li><li class="L1"><code></code></li><li class="L2"><code></code></li></ol></pre>`;

export default {
	code,
}