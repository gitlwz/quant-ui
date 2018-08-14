const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="ue0j" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Result</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Button</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Row</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Col</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Icon</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Steps</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Step</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Steps</span><span class="pun">;</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> desc1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">14</span><span class="pun">,</span><span class="pln"> position</span><span class="pun">:</span><span class="pln"> </span><span class="str">'relative'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">38</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">曲丽丽</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"dingding-o"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">}}&gt;</span><span class="lit">2016</span><span class="pun">-</span><span class="lit">12</span><span class="pun">-</span><span class="lit">12</span><span class="pln"> </span><span class="lit">12</span><span class="pun">:</span><span class="lit">32</span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pun">);</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> desc2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">14</span><span class="pun">,</span><span class="pln"> position</span><span class="pun">:</span><span class="pln"> </span><span class="str">'relative'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">38</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">周毛毛</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Icon</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"dingding-o"</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#00A0E9'</span><span class="pun">,</span><span class="pln"> marginLeft</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pln"> </span><span class="pun">}}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> marginTop</span><span class="pun">:</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">}}&gt;&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">""</span><span class="pun">&gt;催一下&lt;</span><span class="str">/a&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pun">);</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">const</span><span class="pln"> extra </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L5"><code><span class="pln">    </span><span class="str">&lt;div&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln"> fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">16</span><span class="pun">,</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pun">,</span><span class="pln"> fontWeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">500</span><span class="pun">,</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">项目名称</span></code></li><li class="L8"><code><span class="pln">      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Row</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln"> marginBottom</span><span class="pun">:</span><span class="pln"> </span><span class="lit">16</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L0"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> xs</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> sm</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> md</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> lg</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> xl</span><span class="pun">={</span><span class="lit">6</span><span class="pun">}&gt;</span></code></li><li class="L1"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">span style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pln"> </span><span class="pun">}}&gt;项目</span><span class="pln"> ID</span><span class="pun">：&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">                </span><span class="lit">23421</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> xs</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> sm</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> md</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> lg</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}</span><span class="pln"> xl</span><span class="pun">={</span><span class="lit">6</span><span class="pun">}&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">span style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pln"> </span><span class="pun">}}&gt;负责人：&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">曲丽丽</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Col</span><span class="pln"> xs</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> sm</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> md</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> lg</span><span class="pun">={</span><span class="lit">24</span><span class="pun">}</span><span class="pln"> xl</span><span class="pun">={</span><span class="lit">12</span><span class="pun">}&gt;</span></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">span style</span><span class="pun">={{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0, 0, 0, 0.85)'</span><span class="pln"> </span><span class="pun">}}&gt;生效时间：&lt;/</span><span class="pln">span</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="lit">2016</span><span class="pun">-</span><span class="lit">12</span><span class="pun">-</span><span class="lit">12</span><span class="pln"> </span><span class="pun">~</span><span class="pln"> </span><span class="lit">2017</span><span class="pun">-</span><span class="lit">12</span><span class="pun">-</span><span class="lit">12</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Col</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Row</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Steps</span><span class="pln"> progressDot current</span><span class="pun">={</span><span class="lit">1</span><span class="pun">}&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"创建项目"</span><span class="pln"> description</span><span class="pun">={</span><span class="pln">desc1</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"部门初审"</span><span class="pln"> description</span><span class="pun">={</span><span class="pln">desc2</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"财务复核"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L7"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Step</span><span class="pln"> title</span><span class="pun">=</span><span class="str">"完成"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="typ">Steps</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pun">);</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> actions </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L3"><code><span class="pln">    </span><span class="str">&lt;div&gt;</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> type</span><span class="pun">=</span><span class="str">"primary"</span><span class="pun">&gt;返回列表&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;查看项目&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pun">&gt;打</span><span class="pln"> </span><span class="pun">印&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pun">);</span></code></li><li class="L9"><code></code></li><li class="L0"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Result</span></code></li><li class="L5"><code><span class="pln">                type</span><span class="pun">=</span><span class="str">"success"</span></code></li><li class="L6"><code><span class="pln">                title</span><span class="pun">=</span><span class="str">"提交成功"</span></code></li><li class="L7"><code><span class="pln">                description</span><span class="pun">=</span><span class="str">"提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。本文字区域可以展示简单的补充说明，如果有类似展示“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"</span></code></li><li class="L8"><code><span class="pln">                extra</span><span class="pun">={</span><span class="pln">extra</span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">                actions</span><span class="pun">={</span><span class="pln">actions</span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                style</span><span class="pun">={{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="str">'100%'</span><span class="pln"> </span><span class="pun">}}</span></code></li><li class="L1"><code><span class="pln">            </span><span class="pun">/&gt;</span></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pun">}</span></code></li><li class="L6"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;

export default {
	code,
}