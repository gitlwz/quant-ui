const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="dw2b"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">SubMenu</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">SubMenu</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">MenuItemGroup</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">ItemGroup</span><span class="pun">;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="kwd">function</span><span class="pln"> handleClick</span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> e</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pln"> onClick</span><span class="pun">={</span><span class="pln">handleClick</span><span class="pun">}</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">256</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> mode</span><span class="pun">=</span><span class="str">"vertical"</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">SubMenu</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"sub1"</span><span class="pln"> title</span><span class="pun">={&lt;</span><span class="pln">span</span><span class="pun">&gt;&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"mail"</span><span class="pln"> </span><span class="pun">/&gt;&lt;</span><span class="pln">span</span><span class="pun">&gt;</span><span class="typ">Navigation</span><span class="pln"> </span><span class="typ">One</span><span class="pun">&lt;</span><span class="str">/span&gt;&lt;/</span><span class="pln">span</span><span class="pun">&gt;}&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">MenuItemGroup</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Item 1"</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"1"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">1</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"2"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">2</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">MenuItemGroup</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">MenuItemGroup</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Iteom 2"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"3"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">3</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"4"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">4</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">MenuItemGroup</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">SubMenu</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">SubMenu</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"sub2"</span><span class="pln"> title</span><span class="pun">={&lt;</span><span class="pln">span</span><span class="pun">&gt;&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"appstore"</span><span class="pln"> </span><span class="pun">/&gt;&lt;</span><span class="pln">span</span><span class="pun">&gt;</span><span class="typ">Navigation</span><span class="pln"> </span><span class="typ">Two</span><span class="pun">&lt;</span><span class="str">/span&gt;&lt;/</span><span class="pln">span</span><span class="pun">&gt;}&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"5"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">5</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"6"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">6</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">SubMenu</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"sub3"</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"Submenu"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"7"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">7</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"8"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">8</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">SubMenu</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">SubMenu</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">SubMenu</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"sub4"</span><span class="pln"> title</span><span class="pun">={&lt;</span><span class="pln">span</span><span class="pun">&gt;&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"setting"</span><span class="pln"> </span><span class="pun">/&gt;&lt;</span><span class="pln">span</span><span class="pun">&gt;</span><span class="typ">Navigation</span><span class="pln"> </span><span class="typ">Three</span><span class="pun">&lt;</span><span class="str">/span&gt;&lt;/</span><span class="pln">span</span><span class="pun">&gt;}&gt;</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"9"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">9</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"10"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">10</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"11"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">11</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"12"</span><span class="pun">&gt;</span><span class="typ">Option</span><span class="pln"> </span><span class="lit">12</span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">SubMenu</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}