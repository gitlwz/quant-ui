import React, { Component } from 'react';
class Detail extends Component {
	render() {
		return (
            <div>
                <div className="quick_text">
                <div className="title">快速上手</div>
                <div className="detail">QuantDo Design，一个服务于[量投]的设计体系，追求更好的用户体验，提高程序员的开发效率，并统一UI开发规范</div>
                <div className="secondDetail">
                    <p>开始之前，推荐先学习<a href="http://facebook.github.io/react/">React</a>和
                    <a href="http://babeljs.io/docs/learn-es2015/">ES2015</a>并且正确安装了<a href="https://nodejs.org/">Node.js</a>环境。</p>
                </div>
                </div>
                <div className="quick_text">
                    <div className="secondeTitle">第一个本地实例</div>
                    <div className="detail">实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们可以利用
                    <a href="https://github.com/facebook/create-react-app">create-react-app</a>
                    来创建一个新的react项目，并在项目中引用Quantdo Design组件</div>
                    <div className="thirdTitle">1. 安装脚手架工具</div>
                    <div className="detail">create-react-app安装起来比较简单，只需要一条命令</div>
                    <div className="secondDetail">
                        <p>
                            npm install -g create-react-app
                        </p>
                    </div>
                    <div className="thirdTitle">2. 创建一个项目</div>
                    <div className="detail">安装完成后，生成一个新的项目,工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，可以使用一下命令:</div>
                    <div className="secondDetail">
                        <p>
                            create-react-app my-app
                        </p>
                        <p>
                            cd my-app/
                        </p>
                    </div>
                    <div className="thirdTitle">3. 启动项目</div>
                    <div className="detail">进入项目目录后，执行以下命令，此时浏览器会访问 <a>http://localhost:3000/</a>，看到 Welcome to React 的界面就算成功了。</div>
                    <div className="secondDetail">
                        <p>
                            npm start
                        </p>
                    </div>
                    <div className="secondeTitle">create-react-app项目添加less配置</div>
                    <div className="detail">Quantdo Design支持主题切换，所以需使用less加载样式。使用create-react-app 创建的项目默认不支持less，以下增加less配置的步骤</div>
                    <div className="secondDetail">
                        <p>如需了解less，请戳这里<a href="http://lesscss.cn/">Less</a></p>
                    </div>
                    <div className="thirdTitle">1. 暴露配置文件</div>
                    <div className="detail">create-react-app生成的项目文，看不到webpack相关的配置文件，需要先暴露出来，使用如下命令即可：</div>
                    <div className="secondDetail">
                        <p>
                            npm run eject
                        </p>
                    </div>
                    <div className="thirdTitle">2. 安装less-loader 和 less</div>
                    <div className="secondDetail">
                        <p>
                            npm install less-loader less --save-dev
                        </p>
                    </div>
                    <div className="thirdTitle">3. 修改webpack配置</div>
                    <div className="detail">修改config文件夹中 webpack.config.dev.js 和 webpack.config-prod.js 配置文件</div>
                    <div className="detail">将两个文件中的<label className="fontStyle">test: /\.css$/</label> 改为 <label className="fontStyle">test: /\.(css|less)$/</label>,</div>
                    <div className="detail">并且两个文件中的
                        <label className="fontStyle">test: /\.css$/</label> 中的 
                        <label className="fontStyle">use</label>数组增加如下配置项
                    </div>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="grd3" style=""><ol class="linenums"><li class="L0"><code><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    loader</span><span class="pun">:</span><span class="kwd">require</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">'less-loader'</span><span class="pun">),</span></code></li><li class="L2"><code><span class="pln">    options</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> javascriptEnabled</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">}</span></code></li><li class="L3"><code><span class="pun">}</span></code></li></ol></pre>`}} ></div>
                    <div className="thirdTitle">4. 使用babel-plugin-import进行按需加载</div>
                    <div className="detail">从Quantdo Design中引入所需组件时，可以只引入所需类中的某个组件，不必引整个组件，babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件</div>
                    <div className="secondDetail">
                        <p>
                            npm install babel-plugin-import --save-dev
                        </p>
                    </div>
                    <div className="detail">安装完成后在根目录my-app下创建一个文件<label className="fontStyle">.babelrc</label>，在文件中写入如下配置：</div>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="qs1q" style=""><ol class="linenums"><li class="L0"><code><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    </span><span class="str">"presets"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">"react-app"</span><span class="pun">],</span></code></li><li class="L2"><code><span class="pln">    </span><span class="str">"plugins"</span><span class="pun">:[[</span><span class="str">"import"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="str">"libraryName"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"quant-ui"</span><span class="pun">}]]</span></code></li><li class="L3"><code><span class="pun">}</span></code></li></ol></pre>`}} ></div>
                    <div className="thirdTitle">5. 安装Quantdo Design组件</div>
                    <div className="detail">执行以下命令，下载Quantdo Desigh组件</div>
                    <div className="secondDetail">
                        <p>
                            npm install quant-ui
                        </p>
                    </div>
                    <div className="detail">接下来，我们还需要引入Quantdo Design的样式文件，在<label className="fontStyle">App.less</label>的第一行加入以下代码：</div>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="qs1q" style=""><ol class="linenums"><li class="L0"><code><span class="lit">@import</span><span class="pln"> </span><span class="str">'~quant-ui/lib/theme/index.less'</span><span class="pun">;</span></code></li></ol></pre>`}} ></div>
                    <div className="thirdTitle">6. 使用Quantdo Design组件</div>
                    <div className="detail">现在我们就可以使用Quantdo Desigh组件啦，将App.js替换成下面的代码看看效果吧。</div>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="sb4y" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> logo </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./logo.svg'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="typ">Calendar</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span></code></li><li class="L3"><code><span class="kwd">import</span><span class="pln"> </span><span class="str">'./App.less'</span><span class="pun">;</span></code></li><li class="L4"><code></code></li><li class="L5"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L7"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L8"><code><span class="pln">      </span><span class="pun">&lt;</span><span class="pln">div className</span><span class="pun">=</span><span class="str">"App"</span><span class="pun">&gt;</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">header className</span><span class="pun">=</span><span class="str">"App-header"</span><span class="pun">&gt;</span></code></li><li class="L0"><code><span class="pln">          </span><span class="pun">&lt;</span><span class="pln">img src</span><span class="pun">={</span><span class="pln">logo</span><span class="pun">}</span><span class="pln"> className</span><span class="pun">=</span><span class="str">"App-logo"</span><span class="pln"> alt</span><span class="pun">=</span><span class="str">"logo"</span><span class="pln"> </span><span class="pun">/&gt;</span></code></li><li class="L1"><code><span class="pln">          </span><span class="pun">&lt;</span><span class="pln">h1 className</span><span class="pun">=</span><span class="str">"App-title"</span><span class="pun">&gt;</span><span class="typ">Welcome</span><span class="pln"> to </span><span class="typ">React</span><span class="pun">&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">header</span><span class="pun">&gt;</span></code></li><li class="L3"><code><span class="pln">        </span><span class="pun">&lt;</span><span class="pln">div style </span><span class="pun">=</span><span class="pln">  </span><span class="pun">{{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">300</span><span class="pun">,</span><span class="pln"> border</span><span class="pun">:</span><span class="pln"> </span><span class="str">'1px solid #d9d9d9'</span><span class="pun">,</span><span class="pln"> borderRadius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">}}&gt;</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">&lt;</span><span class="typ">Calendar</span><span class="pln"> width</span><span class="pun">={</span><span class="lit">500</span><span class="pun">}</span><span class="pln"> fullscreen</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}/&gt;</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L6"><code><span class="pln">      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">  </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">App</span><span class="pun">;</span></code></li></ol></pre>`}} ></div>
                    
                </div>
            </div>
		);
	}
}
export default Detail;
