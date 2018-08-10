const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="ue0j" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">PageHeader</span><span class="pun">,</span><span class="pln"> </span><span class="typ">DescriptionList</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Menu</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Dropdown</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Row</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Col</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Description</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">DescriptionList</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ButtonGroup</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">;</span></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> description </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">DescriptionList</span><span class="pln"> size</span><span class="pun">=</span><span class="str">"small"</span><span class="pln"> col</span><span class="pun">=</span><span class="str">"2"</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Description</span><span class="pln"> term</span><span class="pun">=</span><span class="str">"创建人"</span><span class="pun">&gt;曲丽丽&lt;/</span><span class="typ">Description</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Description</span><span class="pln"> term</span><span class="pun">=</span><span class="str">"订购产品"</span><span class="pun">&gt;</span><span class="pln">XX </span><span class="pun">服务&lt;/</span><span class="typ">Description</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Description</span><span class="pln"> term</span><span class="pun">=</span><span class="str">"创建时间"</span><span class="pun">&gt;</span><span class="lit">2017</span><span class="pun">-</span><span class="lit">07</span><span class="pun">-</span><span class="lit">07</span><span class="pun">&lt;/</span><span class="typ">Description</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Description</span><span class="pln"> term</span><span class="pun">=</span><span class="str">"关联单据"</span><span class="pun">&gt;&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">""</span><span class="pun">&gt;</span><span class="lit">12421</span><span class="pun">&lt;</span><span class="str">/a&gt;&lt;/</span><span class="typ">Description</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">DescriptionList</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pun">);</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="kwd">const</span><span class="pln"> menu </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"1"</span><span class="pun">&gt;选项一&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"2"</span><span class="pun">&gt;选项二&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pln"> key</span><span class="pun">=</span><span class="str">"3"</span><span class="pun">&gt;选项三&lt;/</span><span class="typ">Menu</span><span class="pun">.</span><span class="typ">Item</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">Menu</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pun">);</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">const</span><span class="pln"> action </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">    </span><span class="str">&lt;div&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;操作&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;操作&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Dropdown</span><span class="pln"> overlay</span><span class="pun">={</span><span class="pln">menu</span><span class="pun">}</span><span class="pln"> placement</span><span class="pun">=</span><span class="str">"bottomRight"</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"ellipsis"</span><span class="pln"> </span><span class="pun">/&gt;&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="typ">Dropdown</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">ButtonGroup</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pun">&gt;主操作&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pun">);</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> extra </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> sm</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> md</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.43)'</span><span class="pln"> </span><span class="pun">}}&gt;状态&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pun">,</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pln"> </span><span class="pun">}}&gt;待审批&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> sm</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> md</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.43)'</span><span class="pln"> </span><span class="pun">}}&gt;订单金额&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pun">,</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pln"> </span><span class="pun">}}&gt;¥</span><span class="pln"> </span><span class="lit">568.08</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pun">);</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">const</span><span class="pln"> breadcrumbList </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L8"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'一级菜单'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">    href</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'二级菜单'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">    href</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'三级菜单'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pun">}];</span></code></li><li class="L6"><code></code></li><li class="L7"><code><span class="kwd">const</span><span class="pln"> tabList </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[{</span></code></li><li class="L8"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'detail'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">    tab</span><span class="pun">:</span><span class="pln"> </span><span class="str">'详情'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rule'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">    tab</span><span class="pun">:</span><span class="pln"> </span><span class="str">'规则'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pun">}];</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">function</span><span class="pln"> onTabChange</span><span class="pun">(</span><span class="pln">key</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">key</span><span class="pun">);</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L2"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">PageHeader</span></code></li><li class="L4"><code><span class="pln">                    title</span><span class="pun">=</span><span class="str">"单号：234231029431"</span></code></li><li class="L5"><code><span class="pln">                    logo</span><span class="pun">={&lt;</span><span class="pln">img alt</span><span class="pun">=</span><span class="str">""</span><span class="pln"> src</span><span class="pun">=</span><span class="str">"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"</span><span class="pln"> </span><span class="pun">/&gt;}</span></code></li><li class="L6"><code><span class="pln">                    action</span><span class="pun">={</span><span class="pln">action</span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                    content</span><span class="pun">={</span><span class="pln">description</span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">                    extraContent</span><span class="pun">={</span><span class="pln">extra</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                    breadcrumbList</span><span class="pun">={</span><span class="pln">breadcrumbList</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                    tabList</span><span class="pun">={</span><span class="pln">tabList</span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">                    tabActiveKey</span><span class="pun">=</span><span class="str">"detail"</span></code></li><li class="L2"><code><span class="pln">                    onTabChange</span><span class="pun">={</span><span class="pln">onTabChange</span><span class="pun">}</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">/&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pun">}</span></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}