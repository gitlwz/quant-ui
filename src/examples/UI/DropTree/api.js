const code = `<pre class="prettyprint linenums prettyprinted" data-anchor-id="javf"><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">DropTree</span><span class="pln"> </span><span class="pun">,</span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> dataSource </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    </span><span class="str">"data"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">            </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业主体信用得分"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L9"><code><span class="pln">              </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">                </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业素质"</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">                  </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"基本信息"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L9"><code><span class="pln">                      </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业主体信息识别"</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="pun">]</span></code></li><li class="L5"><code><span class="pln">                      </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pln">                      </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">11</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业持续注册时间"</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="pun">]</span></code></li><li class="L2"><code><span class="pln">                      </span><span class="pun">},</span></code></li><li class="L3"><code><span class="pln">                      </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">                        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">                        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"注册资本"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="pun">]</span></code></li><li class="L9"><code><span class="pln">                      </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">                    </span><span class="pun">]</span></code></li><li class="L1"><code><span class="pln">                  </span><span class="pun">},</span></code></li><li class="L2"><code><span class="pln">                  </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"管理认证"</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L7"><code><span class="pln">                      </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">13</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"国际性管理认证"</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">                        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L2"><code><span class="pln">                        </span><span class="pun">]</span></code></li><li class="L3"><code><span class="pln">                      </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="pun">]</span></code></li><li class="L5"><code><span class="pln">                  </span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">]</span></code></li><li class="L7"><code><span class="pln">              </span><span class="pun">},</span></code></li><li class="L8"><code><span class="pln">            </span><span class="pun">]</span></code></li><li class="L9"><code><span class="pln">          </span><span class="pun">}</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">]</span></code></li><li class="L1"><code><span class="pun">};</span></code></li><li class="L2"><code><span class="kwd">const</span><span class="pln"> dataSource2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    </span><span class="str">"data"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">        </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">            </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业主体信用得分"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">            </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">            </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L9"><code><span class="pln">              </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">                </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">                </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"企业素质"</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L4"><code><span class="pln">                  </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                    </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"基本信息"</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                    </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[]</span></code></li><li class="L9"><code><span class="pln">                  </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pln">                  </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"管理认证"</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">                    </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">                    </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L5"><code><span class="pln">                      </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">                        </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">13</span><span class="pun">,</span></code></li><li class="L7"><code><span class="pln">                        </span><span class="str">"name"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"国际性管理认证"</span><span class="pun">,</span></code></li><li class="L8"><code><span class="pln">                        </span><span class="str">"pid"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">                        </span><span class="str">"childrens"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L0"><code><span class="pln">                        </span><span class="pun">]</span></code></li><li class="L1"><code><span class="pln">                      </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="pun">]</span></code></li><li class="L3"><code><span class="pln">                  </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">                </span><span class="pun">]</span></code></li><li class="L5"><code><span class="pln">              </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pln">            </span><span class="pun">]</span></code></li><li class="L7"><code><span class="pln">          </span><span class="pun">}</span></code></li><li class="L8"><code><span class="pln">    </span><span class="pun">]</span></code></li><li class="L9"><code><span class="pun">};</span></code></li><li class="L0"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Detail</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code></code></li><li class="L2"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L5"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">droptree</span><span class="pun">.</span><span class="pln">onReset</span><span class="pun">()}}&gt;点我复原&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">droptree</span><span class="pun">.</span><span class="pln">onSetData</span><span class="pun">(</span><span class="pln">dataSource2</span><span class="pun">)}}&gt;点我设置数据&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">Button</span><span class="pln"> onClick</span><span class="pun">={()=&gt;{</span><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">droptree</span><span class="pun">.</span><span class="pln">onGetData</span><span class="pun">())}}&gt;点我获取改变后数据&lt;/</span><span class="typ">Button</span><span class="pun">&gt;</span></code></li><li class="L8"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="typ">DropTree</span><span class="pln"> dataSource</span><span class="pun">={</span><span class="pln">dataSource</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">ref</span><span class="pun">=</span><span class="str">"droptree"</span><span class="pun">/&gt;</span></code></li><li class="L9"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L1"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L2"><code><span class="pun">}</span></code></li><li class="L3"><code></code></li><li class="L4"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Detail</span><span class="pun">;</span></code></li></ol></pre>`;
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "onReset",  //字段名
				instructions: '树形图复原',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "2",
				parameter: "onSetData",  //字段名
				instructions: '树形图数据设置，传入固定数据结构',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "3",
				parameter: "onGetData",  //字段名
				instructions: '树形图数据获取',	//描述
				type: 'Function',	//类型
				default: "",							//默认值
				must: '',
			},
			{
				key: "4",
				parameter: "dataSource",  //字段名
				instructions: '用于显示树形图数据，固定数据格式，详见代码',	//描述
				type: 'Object',	//类型
				default: "",							//默认值
				must: '',
			},
		]
	}
];

export default {
	code,
	api
}