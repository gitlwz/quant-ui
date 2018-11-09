import React, { Component } from 'react';
import {Menu,Dropdown,Icon,Row,Col,Button,HeaderSearch,language,Divider} from "quant-ui"
import logo from "../../../imgs/logo@3x.png";
import config from "../../../routes/config"
import history from "../../history/history"
import "./index.less";
import IMG from "../../../imgs/startup-usage1.png"
import IMG2 from "../../../imgs/vscode.png"
const $ = language.getLanguageData;
let {getCurrentLanguage,setCurrentLanguage,refreshLanguage} = language;
const menu = (
    <Menu 
        onClick = {handleMenuClick} 
        defaultSelectedKeys={[getCurrentLanguage()]}
    >
        <Menu.Item key="zh_CN">中文</Menu.Item>
        <Menu.Item key="en_US">English</Menu.Item>
    </Menu>
);
function handleMenuClick(e) {
    setCurrentLanguage(e.key);
    refreshLanguage();
}
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataSource:[]
        }
        this.dataSource = [];
        this.findDataSource(config.menus)
    }
    findDataSource = (config) =>{
        config.forEach((ele)=>{
            if(!!ele.component){
                this.dataSource.push({value:ele.key,name:ele.title})
            }else if(!!ele.subs){
                this.findDataSource(ele.subs)
            }
        })
    }
    onSearch = (value) =>{
        let findData = this.dataSource.filter(({name}) => name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
        this.setState({
            dataSource:findData.map(({name})=>name)
        })
    }
    onPressEnter = (value) => {
        let enterData = this.dataSource.find(({name})=>name === value);
        if(!!enterData){
            this.props.history.push(enterData.value)
        }
    }
  render() {
    let languageData = "中文";
    if(getCurrentLanguage() === "en_US"){
        languageData = "English"
    }
    return (
        <div className="management">
            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <img style={{cursor: 'pointer'}}  onClick={()=>this.props.history.push("/")} className="management-logo" witdh="120" height="39" src={logo}/>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'right',paddingRight:"6vw"}}>

                        <HeaderSearch
                            placeholder="站内搜索"
                            dataSource={this.state.dataSource}
                            onSearch={this.onSearch}
                            onPressEnter={this.onPressEnter}
                        />
                        <span style={{display:'inline-block',margin:"0px 20px 0 20px",cursor:'pointer'}}>
                            <Button onClick={()=>this.props.history.push("/history")}  icon="api">{history[0].title}</Button>
                        </span >
                        <span style={{display:'inline-block',margin:"0px 20px 0 0px",cursor:'pointer'}}>
                            <Dropdown overlay={menu}>
                                <Button icon="setting" style={{ marginLeft: 8 }}>
                                    {languageData} <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </span >
                    </div>
                </Col>
            </Row> 
            <div className="quick_text">
                <div className="title">框架介绍</div>
                <div className="detail">
                    这是一个专门为前端设计的框架，框架本身已经集成 组件按需加载打包、整体性能优化、 权限管理、后台交互、上传交互处理、数据流（dva）、路由功能、全局loading处理等等一个开箱即用的框架。同时完美的配合quant-ui组件库，各种功能的组件能够方便使用、能快捷的实现多语言、动态主题、自适应等功能。为此我们准备了一个脚手架工具来快速生成框架<a href="#/quantcli">quant-cli</a>
                </div>
                <div className="title">运行环境&开发环境</div>
                <div>
                    <div className="huanjing">
                        <img src={IMG}/>
                        <p>需要安装<a href="https://git-scm.com/">git</a>、 <a href="https://nodejs.org/">Node.js</a></p>
                    </div>
                    <div className="huanjing">
                        <img src={IMG2} />
                        <p>推荐 <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
                    </div>
                    <p style={{color:"red",fontSize:"18px"}} className="detail">
                        如果你实用的是Visual Studio Code。框架中集成了规范代码格式、检验代码语言、代码调试功能。因此你需要下载Debugger for Chrome、ESLint插件。如果你希望你的样式文件一样的漂亮的话，你需要下载Beautify css/sass/scss/less插件。如果你习惯中文开发工具的话，你需要下载Chinese (Simplified) Language Pack for Visual Studio Code插件。
                    </p>
                    <p style={{color:"blue",fontSize:"16px"}} className="detail">
                        代码调试功能是已经设置好的，但是如果你启动了多个前端服务那么你的端口号就可能发生改变不再是3000端口，此时你可以修改.vscode->launch.json中的端口号配置。
                        如果你想修改默认的启动端口的话可以修改package.json->"start": "node scripts/start.js"  为   "set PORT=4000&&node scripts/start.js" 改为4000端口
                    </p>
                </div>
                <div className="title">
                    项目结构
                </div>
                <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="10dd" style=""><ol class="linenums"><li class="L0"><code><span class="pun">---|</span><span class="pln">config          </span><span class="pun">配置文件</span></code></li><li class="L1"><code><span class="pun">---|</span><span class="pln">node_modules    node</span><span class="pun">包</span></code></li><li class="L2"><code><span class="pun">---|</span><span class="kwd">public</span><span class="pln">          </span><span class="pun">静态文件</span></code></li><li class="L3"><code><span class="pun">---|</span><span class="pln">scripts         </span><span class="pun">服务文件</span></code></li><li class="L4"><code><span class="pun">---|</span><span class="pln">src             </span><span class="pun">源文件</span></code></li></ol></pre>`}}/>
                <br/>
                <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html: `<pre class="prettyprint linenums prettyprinted" data-anchor-id="10dd" style=""><ol class="linenums"><li class="L0"><code><span class="pun">---|</span><span class="pln">src             </span><span class="pun">源文件</span></code></li><li class="L1"><code><span class="pun">-------|</span><span class="pln">assets      </span><span class="pun">用于存放图片之类的静态资源</span></code></li><li class="L2"><code><span class="pun">-------|</span><span class="pln">common      </span><span class="pun">路由和导航栏在此处配置</span></code></li><li class="L3"><code><span class="pun">-------|</span><span class="pln">components  </span><span class="pun">组件</span></code></li><li class="L4"><code><span class="pun">-------|</span><span class="pln">layouts     </span><span class="pun">常用的模板页面，内置了基础、空白、</span><span class="pln">header</span><span class="pun">、用户模板</span></code></li><li class="L5"><code><span class="pun">-------|</span><span class="pln">models      </span><span class="pun">数据流的书写</span><span class="pln"> </span><span class="pun">具体参考</span><span class="pln">dva</span></code></li><li class="L6"><code><span class="pun">-------|</span><span class="pln">routes      </span><span class="pun">页面代码</span></code></li><li class="L7"><code><span class="pun">-------|</span><span class="pln">theme       </span><span class="pun">主题配置</span></code></li><li class="L8"><code><span class="pun">-------|</span><span class="pln">utils       </span><span class="pun">方法，主要是权限的控制和封装的与后台的请求</span></code></li></ol></pre>`}} />
            
                <div className="title">
                    具体框架介绍
                </div>
                <div style={{marginBottom:"30px"}} className="detail">
                    先添加一个页面吧！
                    <p>首先在routes下面添加一个homde.js</p>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="10dd" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span></code></li><li class="L1"><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">Home</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span></code></li><li class="L4"><code><span class="pln">        </span><span class="str">&lt;div&gt;</span></code></li><li class="L5"><code><span class="pln">            </span><span class="pun">首页</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">);</span></code></li><li class="L8"><code><span class="pln">  </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pun">}</span></code></li><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">Home</span><span class="pun">;</span></code></li></ol></pre>`}} />

                    <p>在common下面的router.js中的getRouterData方法里面添加路由</p>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="10dd" style=""><ol class="linenums"><li class="L0"><code><span class="str">'/home'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">            component</span><span class="pun">:</span><span class="pln"> dynamicWrapper</span><span class="pun">(</span><span class="pln">app</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[],</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">import</span><span class="pun">(</span><span class="str">'../routes/home.js'</span><span class="pun">)),</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">},</span></code></li></ol></pre>`}} />
                    <p>此时在浏览器中输入/home路由就可以看到页面了，但是左边的菜单栏并没有配置！</p>

                    <br/>

                    <p>配置菜单栏</p>
                    <p>在common/menu.js下载的menuData数组中添加菜单</p>
                    <div style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<pre class="prettyprint linenums prettyprinted" data-anchor-id="10dd" style=""><ol class="linenums"><li class="L0"><code><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'home'</span><span class="pun">,</span><span class="pln">       </span><span class="com">//菜单名称</span></code></li><li class="L2"><code><span class="pln">    icon</span><span class="pun">:</span><span class="pln"> </span><span class="str">'home'</span><span class="pun">,</span><span class="pln">       </span><span class="com">//图标</span></code></li><li class="L3"><code><span class="pln">    path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'home'</span><span class="pun">,</span><span class="pln">       </span><span class="com">//路径</span></code></li><li class="L4"><code><span class="pln"> </span><span class="pun">}</span></code></li></ol></pre>`}} />

                    好啦！页面出来啦。赶快去开发吧。具体的数据流处理请参考<a href="https://dvajs.com/" >dva </a>
                </div>

                <div  style={{lineHeight:1.5}} dangerouslySetInnerHTML = {{__html:`<div id="wmd-preview" class="wmd-preview" data-medium-element="true" style="height: auto; left: 0px;"><div class="md-section-divider"></div><div class="md-section-divider"></div><h1 data-anchor-id="nx1l" id="quant-项目包-纯净版-使用文档">quant 项目包-纯净版 使用文档</h1><hr><div class="md-section-divider"></div><h2 data-anchor-id="v7y0" id="一目录结构">一、目录结构</h2><pre data-anchor-id="7iu2"><code> |---config 
 |--- public
 |--- scripts
 |--- src
 |      |--- assets              #  图片等本地静态资源
 |      |--- common
 |          |--- config.js       #  title、logle等资源配置项
 |          |--- menu.js         #  菜单配置项
 |          |--- router.js       #  路由设置项
 |      |--- components          #  自定义的业务通用组件
 |      |--- layouts             #  通用布局
 |      |--- models              #  全局各个页面的modal
 |      |--- routes              #  各个业务页面详细信息
 |      |--- services            #  后台接口服务
 |      |--- theme               #  页面主题样式    
 |      |--- utils               #  工具库
 |      |--- index.js            #  项目入口
 |      |--- index.less          #  项目加载样式
 |      |--- router.js           #  路由配置
 |--- .babelrc
 |--- .gitignore
 |--- README.md
 |--- package.json           
 |--- yarn.lock
</code></pre><div class="md-section-divider"></div><h2 data-anchor-id="0cau" id="二新增页面">二、新增页面</h2><div class="md-section-divider"></div><h4 data-anchor-id="dsib" id="1增加jsless文件">1、增加js、less文件</h4><p data-anchor-id="6c87">在src/routes下新建页面的js、以及less文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。 <br>
  引入组件的时候只需要在js文件中 ：</p><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="wc06" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Button</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'quant-ui'</span><span class="pun">;</span></code></li></ol></pre><div class="md-section-divider"></div><h4 data-anchor-id="c0ru" id="2将文件加入菜单和路由">2、将文件加入菜单和路由</h4><p data-anchor-id="j4vk">增加菜单项目需要在src/common/menu.js中如下方式添加即可</p><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="0hw8" style=""><ol class="linenums"><li class="L0"><code><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'用户权限管理'</span><span class="pun">,</span></code></li><li class="L2"><code><span class="pln">    icon</span><span class="pun">:</span><span class="pln"> </span><span class="str">'icon'</span><span class="pun">,</span></code></li><li class="L3"><code><span class="pln">    path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'user'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">    key</span><span class="pun">:</span><span class="pln"> </span><span class="str">"menu:user"</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">    authority</span><span class="pun">:</span><span class="pln"> </span><span class="str">"admin"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">    children</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span></code></li><li class="L7"><code><span class="pln">        </span><span class="pun">{</span></code></li><li class="L8"><code><span class="pln">            name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'角色管理'</span><span class="pun">,</span></code></li><li class="L9"><code><span class="pln">            path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'roleManagement'</span><span class="pun">,</span></code></li><li class="L0"><code><span class="pln">            key</span><span class="pun">:</span><span class="pln"> </span><span class="str">"menu:userRight/roleManagement"</span><span class="pun">,</span></code></li><li class="L1"><code><span class="pln">        </span><span class="pun">},</span></code></li><li class="L2"><code><span class="pln">        </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">            name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'用户管理'</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">            path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'usermanage'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">            key</span><span class="pun">:</span><span class="pln"> </span><span class="str">"menu:userRight/usermanage"</span><span class="pun">,</span></code></li><li class="L6"><code><span class="pln">        </span><span class="pun">},</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">],</span></code></li><li class="L8"><code><span class="pun">},</span></code></li></ol></pre><p data-anchor-id="uq5e">增加路由需要在src/common/router.js中如下方式添加即可</p><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="9q7k" style=""><ol class="linenums"><li class="L0"><code><span class="str">'/home'</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">    component</span><span class="pun">:</span><span class="pln"> dynamicWrapper</span><span class="pun">(</span><span class="pln">app</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">"home"</span><span class="pun">,</span><span class="str">"global"</span><span class="pun">],</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">import</span><span class="pun">(</span><span class="str">'../routes/home/index.js'</span><span class="pun">)),</span></code></li><li class="L2"><code><span class="pun">},</span></code></li></ol></pre><p data-anchor-id="msnx">其中数组[]表示绑定的modal import表示页面的入口文件路径</p><div class="md-section-divider"></div><h4 data-anchor-id="soq5" id="3新增-modelservice">3、新增 model、service</h4><p data-anchor-id="jzll">布局及路由都配置好之后，回到之前新建的 js中，可以开始写业务代码了！如果需要用到数据流，还需要在 src/models src/services 中建立相应的 model 和 service  <strong>具体参考项目包中的modal和services的写法</strong></p><div class="md-section-divider"></div><h2 data-anchor-id="u5dk" id="三请求的发送和服务端进行交互">三、请求的发送（和服务端进行交互）</h2><p data-anchor-id="cse1">请求流程：</p><ul data-anchor-id="g09r">
<li><p>UI 组件交互操作；</p></li>
<li><p>调用 model 的 effect；</p></li>
<li><p>调用统一管理的 services；</p></li>
<li><p>使用封装的 request.js 发送请求；</p></li>
<li><p>获取服务端返回；</p></li>
<li><p>然后改变 state；</p></li>
<li><p>更新 model。</p></li>
</ul><p data-anchor-id="bzuy">后台提供的api接口统一放在src/servsrcs/api.js中</p><pre data-anchor-id="jywq"><code>|--services/
|    |--  api.js
</code></pre><p data-anchor-id="gc70">调用的modal写法大致如下：</p><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="27rg" style=""><ol class="linenums"><li class="L0"><code></code></li><li class="L1"><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> GET</span><span class="pun">,</span><span class="pln"> POST </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'../utils/request'</span><span class="pun">;</span></code></li><li class="L2"><code><span class="kwd">import</span><span class="pln"> api </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'../services/api.js'</span><span class="pun">;</span></code></li><li class="L3"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L4"><code><span class="pln">    </span><span class="kwd">namespace</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xxx'</span><span class="pun">,</span></code></li><li class="L5"><code><span class="pln">    state</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L6"><code><span class="pln">        dataSource</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span></code></li><li class="L7"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L8"><code><span class="pln">    effects</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L9"><code><span class="pln">        </span><span class="pun">*</span><span class="pln">find</span><span class="pun">({</span><span class="pln"> payload </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> call</span><span class="pun">,</span><span class="pln"> put </span><span class="pun">})</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L0"><code><span class="pln">            </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> errorCode</span><span class="pun">,</span><span class="pln"> data </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">yield</span><span class="pln"> call</span><span class="pun">(</span><span class="pln">POST</span><span class="pun">,</span><span class="pln"> api</span><span class="pun">.</span><span class="pln">xxx</span><span class="pun">.</span><span class="pln">yyy</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="pln">payload</span><span class="pun">]);</span></code></li><li class="L1"><code><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">errorCode </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">                </span><span class="kwd">yield</span><span class="pln"> put</span><span class="pun">({</span></code></li><li class="L3"><code><span class="pln">                    type</span><span class="pun">:</span><span class="pln"> </span><span class="str">"save"</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">                    payload</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L5"><code><span class="pln">                        dataSource</span><span class="pun">:</span><span class="pln"> data</span></code></li><li class="L6"><code><span class="pln">                    </span><span class="pun">}</span></code></li><li class="L7"><code><span class="pln">                </span><span class="pun">})</span></code></li><li class="L8"><code><span class="pln">        </span><span class="pun">}</span></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pln">    reducers</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code><span class="pln">        save</span><span class="pun">(</span><span class="pln">state</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> payload </span><span class="pun">})</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code><span class="pln">            </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">                </span><span class="pun">...</span><span class="pln">state</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">payload</span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">};</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">},</span></code></li><li class="L6"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L7"><code><span class="pln">    subscriptions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L8"><code></code></li><li class="L9"><code><span class="pln">    </span><span class="pun">},</span></code></li><li class="L0"><code><span class="pun">};</span></code></li></ol></pre><p data-anchor-id="fap2"><strong>yield call(POST, api.xxx.yyy, [payload]);表示返送一个POST请求，请求的api（url）为 api.xxx.yyy 参数为payload</strong></p><div class="md-section-divider"></div><h4 data-anchor-id="8pii" id="页面调用effects方式如下">页面调用effects方式如下</h4><div class="md-section-divider"></div><h5 data-anchor-id="wkjt" id="1连接到modal">1、连接到modal</h5><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="j8tv" style=""><ol class="linenums"><li class="L0"><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> connect</span><span class="pun">(({</span><span class="pln"> xxx</span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">     </span><span class="com">//链接到xxx modal上</span></code></li><li class="L1"><code><span class="pln">    </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> dataSource </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> xxx</span><span class="pun">;</span><span class="pln">          </span><span class="com">//拿到xxx 的dataSource</span></code></li><li class="L2"><code><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L3"><code><span class="pln">        dataSource</span><span class="pun">,</span></code></li><li class="L4"><code><span class="pln">    </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pun">})(</span></code></li><li class="L6"><code><span class="pln">    </span><span class="typ">Form</span><span class="pun">.</span><span class="pln">create</span><span class="pun">()()</span></code></li><li class="L7"><code><span class="pun">)</span></code></li></ol></pre><div class="md-section-divider"></div><h5 data-anchor-id="n9w9" id="2交互时调用">2、交互时调用</h5><div class="md-section-divider"></div><pre class="prettyprint linenums prettyprinted" data-anchor-id="s5ve" style=""><ol class="linenums"><li class="L0"><code><span class="pln"> dispatch</span><span class="pun">({</span></code></li><li class="L1"><code><span class="pln">            type</span><span class="pun">:</span><span class="pln"> </span><span class="str">"xxx/find"</span><span class="pun">,</span><span class="pln">     </span><span class="com">//调用xxx下的find</span></code></li><li class="L2"><code><span class="pln">            payload</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">            </span><span class="com">//参数为对象</span></code></li><li class="L3"><code><span class="pln">                a</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pln">       </span></code></li><li class="L4"><code><span class="pln">            </span><span class="pun">}</span></code></li><li class="L5"><code><span class="pln">        </span><span class="pun">})</span></code></li></ol></pre><div class="md-section-divider"></div><h3 data-anchor-id="1i7j" id="ui组件的使用">ui组件的使用</h3><p data-anchor-id="cohn"><strong>使用请参考quant-ui <a href="http://192.168.100.184:8080/build/#/home" target="_blank">http://192.168.100.184:8080/build/#/home</a></strong></p></div>`}}/>
            </div>  
            
        </div>
    );
  }
}

export default App;
