const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="5en1"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">DropTree</span><span class="pln"> </span><span class="pun">,</span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> dataSource </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业主体信用得分"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L8"><code><span class="pln">          </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">            </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">            </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业素质"</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">            </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">            </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L3"><code><span class="pln">              </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">                </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">                </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"基本信息"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[]</span></code></li><li class="L8"><code><span class="pln">              </span><span class="pun">},</span></code></li><li class="L9"><code><span class="pln">              </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">                </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"管理认证"</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">                  </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">13</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"国际性管理认证"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L9"><code><span class="pln">                    </span><span class="pun">]</span></code></li><li class="L0"><code><span class="pln">                  </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">]</span></code></li><li class="L2"><code><span class="pln">              </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">            </span><span class="pun">]</span></code></li><li class="L4"><code><span class="pln">          </span><span class="pun">},</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">]</span></code></li><li class="L6"><code><span class="pln">      </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pun">];</span></code></li><li class="L8"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    onClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">    onResetData </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">if</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">droptree</span><span class="pun">){</span></code></li><li class="L5"><code><span class="pln">            </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">droptree</span><span class="pun">.</span><span class="kwd">ref</span><span class="pun">.</span><span class="pln">current</span><span class="pun">.</span><span class="pln">onResetData</span><span class="pun">()</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L0"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onResetData</span><span class="pun">()}&gt;点我复原&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">DropTree</span><span class="pln"> </span></code></li><li class="L3"><code><span class="pln">                    onClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onClick</span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                    dataSource</span><span class="pun">={</span><span class="pln">dataSource</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                    width</span><span class="pun">={</span><span class="lit">100</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="kwd">ref</span><span class="pun">=</span><span class="str">"droptree"</span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pun">}</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>
`;

export default {
	code,
}