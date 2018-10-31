const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="q5vp" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">"./style.less"</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> _ </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"lodash"</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">import</span><span class="pln">  </span><span class="pun">{</span><span class="pln"> </span><span class="typ">ReactGridLayout</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"quant-ui"</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="typ">WidthProvider</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">ReactGridLayout</span></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ReactGridLayout2</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">WidthProvider</span><span class="pun">(</span><span class="typ">ReactGridLayout</span><span class="pun">);</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">NoCompactingLayout</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">PureComponent</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">    </span><span class="kwd">static</span><span class="pln"> defaultProps </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        className</span><span class="pun">:</span><span class="pln"> </span><span class="str">"layout"</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        items</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">        cols</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">        rowHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        onLayoutChange</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L4"><code><span class="pln">        </span><span class="com">// This turns off compaction so you can place items wherever.</span></code></li><li class="L5"><code><span class="pln">        verticalCompact</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="com">// This turns off rearrangement so items will not be pushed arround.</span></code></li><li class="L7"><code><span class="pln">        preventCollision</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> layout </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">generateLayout</span><span class="pun">();</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> layout </span><span class="pun">};</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    generateDOM</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">_</span><span class="pun">.</span><span class="pln">range</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">items</span><span class="pun">),</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div key</span><span class="pun">={</span><span class="pln">i</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="pln">span className</span><span class="pun">=</span><span class="str">"text"</span><span class="pun">&gt;{</span><span class="pln">i</span><span class="pun">}&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">);</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    generateLayout</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">items</span><span class="pun">),</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">            </span><span class="kwd">const</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">result</span><span class="pun">(</span><span class="pln">p</span><span class="pun">,</span><span class="pln"> </span><span class="str">"y"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">ceil</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L1"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">                x</span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">*</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">%</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                y</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="pln">i </span><span class="pun">/</span><span class="pln"> </span><span class="lit">6</span><span class="pun">)</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> y</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">                w</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">                h</span><span class="pun">:</span><span class="pln"> y</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                i</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">()</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">};</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="pln">    onLayoutChange</span><span class="pun">(</span><span class="pln">layout</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onLayoutChange</span><span class="pun">(</span><span class="pln">layout</span><span class="pun">);</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">ReactGridLayout2</span></code></li><li class="L8"><code><span class="pln">                layout</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">layout</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                onLayoutChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onLayoutChange</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">{...</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">generateDOM</span><span class="pun">()}</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">ReactGridLayout2</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">NoCompactingLayout</span><span class="pun">;</span></code></li><li class="L0"><code></code></li><li class="L1"><code></code></li></ol></pre>
`
export default {
	code,
}