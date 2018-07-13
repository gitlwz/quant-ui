const code = `
<pre class="prettyprint linenums prettyprinted" data-anchor-id="rira" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">ReactQMap</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> img </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./imgs/spot_location.png'</span></code></li><li class="L3"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">NotFoundCode</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    getContianer </span><span class="pun">=</span><span class="pln"> dom </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">if</span><span class="pun">(!</span><span class="pln">dom</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pun">;</span></code></li><li class="L6"><code><span class="pln">        </span><span class="kwd">const</span><span class="pln"> middleControl </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">'div'</span><span class="pun">);</span></code></li><li class="L7"><code><span class="pln">        middleControl</span><span class="pun">.</span><span class="pln">style</span><span class="pun">.</span><span class="pln">cssText </span><span class="pun">=</span><span class="pln"> </span><span class="str">'width: 22px;height: 30px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -23px;margin-top: -23px;'</span><span class="pun">;</span></code></li><li class="L8"><code><span class="pln">        middleControl</span><span class="pun">.</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> </span><span class="str">"&lt;img src="</span><span class="pun">+</span><span class="pln">img</span><span class="pun">+</span><span class="str">" style='width: 100%;height: 100%;' /&gt;"</span><span class="pun">;</span></code></li><li class="L9"><code><span class="pln">        dom</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">middleControl</span><span class="pun">);</span></code></li><li class="L0"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L1"><code><span class="pln">    getMap </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">map</span><span class="pun">,</span><span class="pln">map2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;{</span></code></li><li class="L2"><code><span class="pln">        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"地图对象！"</span><span class="pun">,</span><span class="pln">map</span><span class="pun">)</span></code></li><li class="L3"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code><span class="pln">    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L6"><code><span class="pln">            </span><span class="str">&lt;div&gt;</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">&lt;</span><span class="pln">div style</span><span class="pun">={{</span><span class="pln">height</span><span class="pun">:</span><span class="str">"500px"</span><span class="pun">}}&gt;</span></code></li><li class="L8"><code><span class="pln">                    </span><span class="pun">&lt;</span><span class="typ">ReactQMap</span></code></li><li class="L9"><code><span class="pln">                        center</span><span class="pun">={{</span><span class="pln">latitude</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30.53786</span><span class="pun">,</span><span class="pln"> longitude</span><span class="pun">:</span><span class="pln"> </span><span class="lit">104.07265</span><span class="pun">}}</span><span class="pln"> </span></code></li><li class="L0"><code><span class="pln">                        initialOptions</span><span class="pun">={{</span><span class="pln">zoomControl</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> mapTypeControl</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}}</span><span class="pln"> </span></code></li><li class="L1"><code><span class="pln">                        apiKey</span><span class="pun">=</span><span class="str">"UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"</span></code></li><li class="L2"><code><span class="pln">                        style</span><span class="pun">={{</span><span class="pln">height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">500</span><span class="pun">}}</span></code></li><li class="L3"><code><span class="pln">                        mySpot</span><span class="pun">={{</span><span class="pln">latitude</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30.53786</span><span class="pun">,</span><span class="pln"> longitude</span><span class="pun">:</span><span class="pln"> </span><span class="lit">104.07265</span><span class="pun">}}</span></code></li><li class="L4"><code><span class="pln">                        getMap</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getMap</span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">                        getContainer</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">getContianer</span><span class="pun">}</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">/&gt;</span></code></li><li class="L7"><code></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">                </span><span class="str">&lt;h3&gt;</span></code></li><li class="L1"><code><span class="pln">                    </span><span class="pun">有了初始化的地图，获取到地图对象之后，就可以按照官网提供的资料随心所欲了。</span></code></li><li class="L2"><code><span class="pln">                    </span><span class="str">&lt;p&gt;</span><span class="pun">更多关于</span><span class="pln">API</span><span class="pun">的操作请查看腾讯地图&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"http://lbs.qq.com/javascript_v2/doc/index.html#g0"</span><span class="pun">&gt;官网&lt;</span><span class="str">/a&gt;&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">);</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pun">}</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">NotFoundCode</span><span class="pun">;</span></code></li></ol></pre>
`;
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "getMap",  //字段名
				type: 'function',	//类型
				must: 'false',
				default: '',							//默认值
				instructions: '获取地图的对象和当前容器的map对象,第一个参数是new的当前map对象，第二个参数是全局map对象'	//描述
			},
			{
				key: "2",
				parameter: "style",  //字段名
				type: 'object',	//类型
				must: 'false',
				default: '',							//默认值
				instructions: "设置组件的内联样式，默认样式width: '100%', height: '100%'"	//描述
			}, {
				key: "3",
				parameter: "className",  //字段名
				type: 'string',	//类型
				must: 'false',
				default: '',							//默认值
				instructions: "设置组件的class"	//描述
			}, {
				key: "4",
				parameter: "mySpot",  //字段名
				type: 'object',	//类型
				must: 'false',
				default: '',							//默认值
				instructions: "设置地图的定位坐标"	//描述
			}, {
				key: "5",
				parameter: "initialOptions",  //字段名
				type: 'object',	//类型
				must: 'false',
				default: 'zoom: 14,disableDefaultUI: true, zoomControl: false,mapTypeControl: false,',							//默认值
				instructions: "初始化地图的参数，简单默认设置了几个，更多的初始化参数请参照http://lbs.qq.com/javascript_v2/doc/mapoptions.html "	//描述
			}, {
				key: "6",
				parameter: "apiKey",  //字段名
				type: 'string',	//类型
				must: 'true',
				default: '',							//默认值
				instructions: "设置地图引用的key,为防止限制调用API,建议官网申请自己的key -> http://lbs.qq.com/index.html"	//描述
			}, {
				key: "7",
				parameter: "center",  //字段名
				type: 'object',	//类型
				must: 'true',
				default: '',							//默认值
				instructions: "设置地图初始化的中心位置坐标"	//描述
			}, {
				key: "8",
				parameter: "getContainer",  //字段名
				type: 'function',	//类型
				must: 'false',
				default: '',							//默认值
				instructions: "获取地图的html dom元素的函数，参数是当前地图挂载的元素DOM"	//描述
			},
		]
	}

];

export default {
	code,
	api
}