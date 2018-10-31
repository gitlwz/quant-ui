const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="q5vp" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln">  </span><span class="pun">{</span><span class="pln"> </span><span class="typ">ReactGridLayout</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"quant-ui"</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">"./style.less"</span></code></li><li class="L3"><code><span class="kwd">import</span><span class="pln"> _ </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"lodash"</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="typ">Responsive</span><span class="pun">,</span><span class="pln"> </span><span class="typ">WidthProvider</span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">ReactGridLayout</span></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ResponsiveReactGridLayout</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">WidthProvider</span><span class="pun">(</span><span class="typ">Responsive</span><span class="pun">);</span></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    </span><span class="kwd">static</span><span class="pln"> defaultProps </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        className</span><span class="pun">:</span><span class="pln"> </span><span class="str">"layout"</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">        rowHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        onLayoutChange</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L1"><code><span class="pln">        cols</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> lg</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span><span class="pln"> md</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> sm</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span><span class="pln"> xs</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> xxs</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L2"><code><span class="pln">        initialLayout</span><span class="pun">:</span><span class="pln"> generateLayout</span><span class="pun">()</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L4"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        currentBreakpoint</span><span class="pun">:</span><span class="pln"> </span><span class="str">"lg"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        compactType</span><span class="pun">:</span><span class="pln"> </span><span class="str">"vertical"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        mounted</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">        layouts</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> lg</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">initialLayout </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L0"><code><span class="pln">    componentDidMount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> mounted</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">    generateDOM</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">layouts</span><span class="pun">.</span><span class="pln">lg</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">l</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div key</span><span class="pun">={</span><span class="pln">i</span><span class="pun">}</span><span class="pln"> className</span><span class="pun">={</span><span class="pln">l</span><span class="pun">.</span><span class="kwd">static</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="str">"static"</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">}&gt;</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">l</span><span class="pun">.</span><span class="kwd">static</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">&lt;</span><span class="pln">span</span></code></li><li class="L9"><code><span class="pln">                            className</span><span class="pun">=</span><span class="str">"text"</span></code></li><li class="L0"><code><span class="pln">                            title</span><span class="pun">=</span><span class="str">"This item is static and cannot be removed or resized."</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                            </span><span class="typ">Static</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="pun">{</span><span class="pln">i</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">                            </span><span class="pun">&lt;</span><span class="pln">span className</span><span class="pun">=</span><span class="str">"text"</span><span class="pun">&gt;{</span><span class="pln">i</span><span class="pun">}&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                        </span><span class="pun">)}</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    onBreakpointChange </span><span class="pun">=</span><span class="pln"> breakpoint </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L3"><code><span class="pln">            currentBreakpoint</span><span class="pun">:</span><span class="pln"> breakpoint</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">    onCompactTypeChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> compactType</span><span class="pun">:</span><span class="pln"> oldCompactType </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> compactType </span><span class="pun">=</span></code></li><li class="L0"><code><span class="pln">            oldCompactType </span><span class="pun">===</span><span class="pln"> </span><span class="str">"horizontal"</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">?</span><span class="pln"> </span><span class="str">"vertical"</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">:</span><span class="pln"> oldCompactType </span><span class="pun">===</span><span class="pln"> </span><span class="str">"vertical"</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="kwd">null</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">"horizontal"</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> compactType </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">    onLayoutChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">layout</span><span class="pun">,</span><span class="pln"> layouts</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onLayoutChange</span><span class="pun">(</span><span class="pln">layout</span><span class="pun">,</span><span class="pln"> layouts</span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    onNewLayout </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L2"><code><span class="pln">            layouts</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> lg</span><span class="pun">:</span><span class="pln"> generateLayout</span><span class="pun">()</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">};</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="typ">Current</span><span class="pln"> </span><span class="typ">Breakpoint</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">currentBreakpoint</span><span class="pun">}</span><span class="pln"> </span><span class="pun">({</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">cols</span><span class="pun">[</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">currentBreakpoint</span><span class="pun">]</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">}{</span><span class="str">" "</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                    columns</span><span class="pun">)</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="str">&lt;div&gt;</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="typ">Compaction</span><span class="pln"> type</span><span class="pun">:{</span><span class="str">" "</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="pun">{</span><span class="pln">_</span><span class="pun">.</span><span class="pln">capitalize</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">compactType</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="str">"No Compaction"</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onNewLayout</span><span class="pun">}&gt;</span><span class="typ">Generate</span><span class="pln"> </span><span class="typ">New</span><span class="pln"> </span><span class="typ">Layout</span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onCompactTypeChange</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="typ">Change</span><span class="pln"> </span><span class="typ">Compaction</span><span class="pln"> </span><span class="typ">Type</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">ResponsiveReactGridLayout</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">{...</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    layouts</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">layouts</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                    onBreakpointChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onBreakpointChange</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                    onLayoutChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onLayoutChange</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                    measureBeforeMount</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">                    useCSSTransforms</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">mounted</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                    compactType</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">compactType</span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">                    preventCollision</span><span class="pun">={!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">compactType</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">generateDOM</span><span class="pun">()}</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="typ">ResponsiveReactGridLayout</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code><span class="kwd">function</span><span class="pln"> generateLayout</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">_</span><span class="pun">.</span><span class="pln">range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">25</span><span class="pun">),</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">item</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">var</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">ceil</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">            x</span><span class="pun">:</span><span class="pln"> </span><span class="pun">(</span><span class="pln">_</span><span class="pun">.</span><span class="pln">random</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">)</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">%</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">            y</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="pln">i </span><span class="pun">/</span><span class="pln"> </span><span class="lit">6</span><span class="pun">)</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> y</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            w</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">            h</span><span class="pun">:</span><span class="pln"> y</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            i</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">(),</span></code></li><li class="L9"><code><span class="pln">            </span><span class="kwd">static</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">random</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">0.05</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`
export default {
	code,
}