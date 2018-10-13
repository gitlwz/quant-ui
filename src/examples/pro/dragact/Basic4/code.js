const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="k4v8" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Dragact</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./index.less'</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Words</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Sorry I just can not move in any circumstances'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">static</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Those who dare to fail miserably can achieve greatly.'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'You miss 100 percent of the shots you never take.'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Sorry I just can not move in any circumstances,too'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="str">'I’d rather live with a good question than a bad answer.'</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">]</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">const</span><span class="pln"> fakeData </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">    </span><span class="kwd">var</span><span class="pln"> Y </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="typ">Words</span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">index </span><span class="pun">%</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> Y</span><span class="pun">++;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">...</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> </span><span class="typ">GridX</span><span class="pun">:</span><span class="pln"> index </span><span class="pun">%</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="typ">GridY</span><span class="pun">:</span><span class="pln"> Y </span><span class="pun">*</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> w</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> h</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> index </span><span class="pun">+</span><span class="pln"> </span><span class="str">''</span><span class="pun">,</span><span class="pln"> canResize</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">})</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Cell</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">({</span><span class="pln"> item</span><span class="pun">,</span><span class="pln"> provided </span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">{...</span><span class="pln">provided</span><span class="pun">.</span><span class="pln">props</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">{...</span><span class="pln">provided</span><span class="pun">.</span><span class="pln">dragHandle</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">            className</span><span class="pun">={</span><span class="str">"layout-Cell "</span><span class="pun">+</span><span class="pln"> item</span><span class="pun">.</span><span class="kwd">static</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="str">"static"</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">            style</span><span class="pun">={{</span><span class="pln"> </span><span class="pun">...</span><span class="pln">provided</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">style</span><span class="pun">,</span><span class="pln"> background</span><span class="pun">:</span><span class="pln"> item</span><span class="pun">.</span><span class="kwd">static</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="str">"#e8e8e8"</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#595959'</span><span class="pln"> </span><span class="pun">}}&gt;{</span><span class="pln">item</span><span class="pun">.</span><span class="pln">content</span><span class="pun">}&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">)</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    render </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> display</span><span class="pun">:</span><span class="pln"> </span><span class="str">'flex'</span><span class="pun">,</span><span class="pln"> justifyContent</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="pln">h1 style</span><span class="pun">={{</span><span class="pln"> textAlign</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pln"> </span><span class="pun">}}&gt;静态组件</span><span class="pln"> </span><span class="typ">Demo</span><span class="pun">&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Dragact</span></code></li><li class="L2"><code><span class="pln">                        width</span><span class="pun">={</span><span class="lit">600</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                        col</span><span class="pun">={</span><span class="lit">16</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                        rowHeight</span><span class="pun">={</span><span class="lit">30</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                        margin</span><span class="pun">={[</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">]}</span></code></li><li class="L6"><code><span class="pln">                        className</span><span class="pun">=</span><span class="str">'normal-layout'</span></code></li><li class="L7"><code><span class="pln">                        layout</span><span class="pun">={</span><span class="pln">fakeData</span><span class="pun">()}</span></code></li><li class="L8"><code><span class="pln">                        placeholder</span><span class="pun">={</span><span class="kwd">true</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">{(</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> provided</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">                            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Cell</span><span class="pln"> item</span><span class="pun">={</span><span class="pln">item</span><span class="pun">}</span><span class="pln"> provided</span><span class="pun">={</span><span class="pln">provided</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="pun">}}</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="pun">&lt;/</span><span class="typ">Dragact</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">)</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="com">//index.less</span></code></li><li class="L3"><code><span class="pun">.</span><span class="pln">layout</span><span class="pun">-</span><span class="typ">Cell</span><span class="pun">&gt;</span><span class="pln">img </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    border</span><span class="pun">-</span><span class="pln">radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5px</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pun">.</span><span class="pln">layout</span><span class="pun">-</span><span class="typ">Cell</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">    background</span><span class="pun">:</span><span class="pln"> white</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">    display</span><span class="pun">:</span><span class="pln"> flex</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">    align</span><span class="pun">-</span><span class="pln">items</span><span class="pun">:</span><span class="pln"> center</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">    height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">%;</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="pun">.</span><span class="pln">layout</span><span class="pun">-</span><span class="typ">Cell</span><span class="pun">:</span><span class="pln">hover </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">    cursor</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="pln">webkit</span><span class="pun">-</span><span class="pln">grab</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pun">.</span><span class="pln">layout</span><span class="pun">-</span><span class="typ">Cell</span><span class="pun">.</span><span class="kwd">static</span><span class="pun">:</span><span class="pln">hover </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">    cursor</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">no</span><span class="pun">-</span><span class="pln">drop</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pun">}</span></code></li></ol></pre>
`;

export default {
	code,
}