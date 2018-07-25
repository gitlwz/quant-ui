const code=`<pre class="prettyprint linenums prettyprinted" data-anchor-id="iymb" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Table</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Badge</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Dropdown</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./style.less'</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> menu </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="typ">Action</span><span class="pln"> </span><span class="lit">1</span></code></li><li class="L8"><code><span class="pln">      </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="typ">Action</span><span class="pln"> </span><span class="lit">2</span></code></li><li class="L1"><code><span class="pln">      </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pun">);</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">const</span><span class="pln"> expandedRowRender </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    </span><span class="kwd">const</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Date'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'date'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'date'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Name'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'name'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'name'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Status'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'state'</span><span class="pun">,</span><span class="pln"> render</span><span class="pun">:</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="str">&lt;span&gt;</span><span class="pun">&lt;</span><span class="typ">Badge</span><span class="pln"> status</span><span class="pun">=</span><span class="str">"success"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="typ">Finished</span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Upgrade Status'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'upgradeNum'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'upgradeNum'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">          title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Action'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">          dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'operation'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">          key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'operation'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">          render</span><span class="pun">:</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">span className</span><span class="pun">=</span><span class="str">"table-operation"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">              </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pln"> className</span><span class="pun">=</span><span class="str">'a'</span><span class="pun">&gt;</span><span class="typ">Pause</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">              </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pln">className</span><span class="pun">=</span><span class="str">'a'</span><span class="pun">&gt;</span><span class="typ">Stop</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">              </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">                  </span><span class="typ">More</span><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"down"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">              </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">          </span><span class="pun">),</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">},</span></code></li><li class="L7"><code><span class="pln">      </span><span class="pun">];</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">      </span><span class="kwd">const</span><span class="pln"> data </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span></code></li><li class="L0"><code><span class="pln">      </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln"> </span><span class="pun">++</span><span class="pln">i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        data</span><span class="pun">.</span><span class="pln">push</span><span class="pun">({</span></code></li><li class="L2"><code><span class="pln">          key</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">          date</span><span class="pun">:</span><span class="pln"> </span><span class="str">'2014-12-24 23:12:00'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">          name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'This is production name'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">          upgradeNum</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Upgraded: 56'</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">});</span></code></li><li class="L7"><code><span class="pln">      </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Table</span></code></li><li class="L0"><code><span class="pln">          columns</span><span class="pun">={</span><span class="pln">columns</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">          dataSource</span><span class="pun">={</span><span class="pln">data</span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">          pagination</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">      </span><span class="pun">);</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="kwd">const</span><span class="pln"> columns </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Name'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'name'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'name'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Platform'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'platform'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'platform'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Version'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'version'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'version'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Upgraded'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'upgradeNum'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'upgradeNum'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Creator'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'creator'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'creator'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Date'</span><span class="pun">,</span><span class="pln"> dataIndex</span><span class="pun">:</span><span class="pln"> </span><span class="str">'createdAt'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'createdAt'</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">{</span><span class="pln"> title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Action'</span><span class="pun">,</span><span class="pln"> key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'operation'</span><span class="pun">,</span><span class="pln"> render</span><span class="pun">:</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"javascript:;"</span><span class="pun">&gt;</span><span class="typ">Publish</span><span class="pun">&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pun">];</span></code></li><li class="L7"><code></code></li><li class="L8"><code><span class="kwd">const</span><span class="pln"> data </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span></code></li><li class="L9"><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln"> </span><span class="pun">++</span><span class="pln">i</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">    data</span><span class="pun">.</span><span class="pln">push</span><span class="pun">({</span></code></li><li class="L1"><code><span class="pln">        key</span><span class="pun">:</span><span class="pln"> i</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">        name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Screem'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">        platform</span><span class="pun">:</span><span class="pln"> </span><span class="str">'iOS'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">        version</span><span class="pun">:</span><span class="pln"> </span><span class="str">'10.3.4.5654'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">        upgradeNum</span><span class="pun">:</span><span class="pln"> </span><span class="lit">500</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        creator</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Jack'</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">        createdAt</span><span class="pun">:</span><span class="pln"> </span><span class="str">'2014-12-24 23:12:00'</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">});</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Table</span></code></li><li class="L6"><code><span class="pln">                className</span><span class="pun">=</span><span class="str">"components-table-demo-nested"</span></code></li><li class="L7"><code><span class="pln">                columns</span><span class="pun">={</span><span class="pln">columns</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                expandedRowRender</span><span class="pun">={</span><span class="pln">expandedRowRender</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                dataSource</span><span class="pun">={</span><span class="pln">data</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">)</span></code></li><li class="L2"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li><li class="L6"><code></code></li><li class="L7"><code></code></li></ol></pre>`;
export default{
    
    code,
}