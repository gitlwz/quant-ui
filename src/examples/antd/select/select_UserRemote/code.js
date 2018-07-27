const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="bw33"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Select</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Spin</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> debounce </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'lodash/debounce'</span><span class="pun">;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">Option</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Select</span><span class="pun">.</span><span class="typ">Option</span><span class="pun">;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastFetchId </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">fetchUser </span><span class="pun">=</span><span class="pln"> debounce</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">fetchUser</span><span class="pun">,</span><span class="pln"> </span><span class="lit">800</span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        data</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span></code></li><li class="L5"><code><span class="pln">        value</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span></code></li><li class="L6"><code><span class="pln">        fetching</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    fetchUser </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'fetching user'</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastFetchId </span><span class="pun">+=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> fetchId </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastFetchId</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> data</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> fetching</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pln">        fetch</span><span class="pun">(</span><span class="str">'https://randomuser.me/api/?results=5'</span><span class="pun">)</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">.</span><span class="kwd">then</span><span class="pun">(</span><span class="pln">response </span><span class="pun">=&gt;</span><span class="pln"> response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">())</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">.</span><span class="kwd">then</span><span class="pun">((</span><span class="pln">body</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">                </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">fetchId </span><span class="pun">!==</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">lastFetchId</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">// for fetch callback order</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="kwd">return</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                </span><span class="kwd">const</span><span class="pln"> data </span><span class="pun">=</span><span class="pln"> body</span><span class="pun">.</span><span class="pln">results</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">user </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">({</span></code></li><li class="L1"><code><span class="pln">                    text</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> user</span><span class="pun">.</span><span class="pln">name</span><span class="pun">.</span><span class="pln">first </span><span class="pun">+</span><span class="pln"> user</span><span class="pun">.</span><span class="pln">name</span><span class="pun">.</span><span class="kwd">last</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                    value</span><span class="pun">:</span><span class="pln"> user</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">username</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">}));</span></code></li><li class="L4"><code><span class="pln">                </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> data</span><span class="pun">,</span><span class="pln"> fetching</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln"> </span><span class="pun">});</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">});</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="pln">    handleChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span></code></li><li class="L0"><code><span class="pln">            value</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">            data</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span></code></li><li class="L2"><code><span class="pln">            fetching</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> fetching</span><span class="pun">,</span><span class="pln"> data</span><span class="pun">,</span><span class="pln"> value </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Select</span></code></li><li class="L0"><code><span class="pln">                mode</span><span class="pun">=</span><span class="str">"multiple"</span></code></li><li class="L1"><code><span class="pln">                labelInValue</span></code></li><li class="L2"><code><span class="pln">                value</span><span class="pun">={</span><span class="pln">value</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                placeholder</span><span class="pun">=</span><span class="str">"Select users"</span></code></li><li class="L4"><code><span class="pln">                notFoundContent</span><span class="pun">={</span><span class="pln">fetching </span><span class="pun">?</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Spin</span><span class="pln"> size</span><span class="pun">=</span><span class="str">"small"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                filterOption</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                onSearch</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">fetchUser</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleChange</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="str">'100%'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">{</span><span class="pln">data</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">d </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Option</span><span class="pln"> key</span><span class="pun">={</span><span class="pln">d</span><span class="pun">.</span><span class="pln">value</span><span class="pun">}&gt;{</span><span class="pln">d</span><span class="pun">.</span><span class="pln">text</span><span class="pun">}&lt;/</span><span class="typ">Option</span><span class="pun">&gt;)}</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Select</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pun">}</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
export default {
	code,
}