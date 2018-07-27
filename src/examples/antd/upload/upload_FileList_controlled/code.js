const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="37p8"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Upload</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        fileList</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L6"><code><span class="pln">            uid</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">            name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xxx.png'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            status</span><span class="pun">:</span><span class="pln"> </span><span class="str">'done'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">            url</span><span class="pun">:</span><span class="pln"> </span><span class="str">'http://www.baidu.com/xxx.png'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">}],</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">    handleChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">info</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">let</span><span class="pln"> fileList </span><span class="pun">=</span><span class="pln"> info</span><span class="pun">.</span><span class="pln">fileList</span><span class="pun">;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">        </span><span class="com">// 1. Limit the number of uploaded files</span></code></li><li class="L7"><code><span class="pln">        </span><span class="com">//    Only to show two recent uploaded files, and old ones will be replaced by the new</span></code></li><li class="L8"><code><span class="pln">        fileList </span><span class="pun">=</span><span class="pln"> fileList</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(-</span><span class="lit">2</span><span class="pun">);</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">        </span><span class="com">// 2. read from response and show file link</span></code></li><li class="L1"><code><span class="pln">        fileList </span><span class="pun">=</span><span class="pln"> fileList</span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">file</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">file</span><span class="pun">.</span><span class="pln">response</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">                </span><span class="com">// Component will show file.url as link</span></code></li><li class="L4"><code><span class="pln">                file</span><span class="pun">.</span><span class="pln">url </span><span class="pun">=</span><span class="pln"> file</span><span class="pun">.</span><span class="pln">response</span><span class="pun">.</span><span class="pln">url</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> file</span><span class="pun">;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">        </span><span class="com">// 3. filter successfully uploaded files according to response from server</span></code></li><li class="L0"><code><span class="pln">        fileList </span><span class="pun">=</span><span class="pln"> fileList</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">((</span><span class="pln">file</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">file</span><span class="pun">.</span><span class="pln">response</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">                </span><span class="kwd">return</span><span class="pln"> file</span><span class="pun">.</span><span class="pln">response</span><span class="pun">.</span><span class="pln">status </span><span class="pun">===</span><span class="pln"> </span><span class="str">'success'</span><span class="pun">;</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="pln">        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln"> fileList </span><span class="pun">});</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> props </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">            action</span><span class="pun">:</span><span class="pln"> </span><span class="str">'//jsonplaceholder.typicode.com/posts/'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">            onChange</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleChange</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">            multiple</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">};</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Upload</span><span class="pln"> </span><span class="pun">{...</span><span class="pln">props</span><span class="pun">}</span><span class="pln"> fileList</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">fileList</span><span class="pun">}&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"upload"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln"> upload</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Upload</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pun">}</span></code></li><li class="L5"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L6"><code></code></li></ol></pre>`;
export default {
	code,
}