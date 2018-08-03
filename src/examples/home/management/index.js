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
                    这是一个专门为管理端服务的框架的，框架本身已经集成权限管理、后台交互、上传交互处理、数据流（dva）、路由功能、全局loading处理等等一个开箱即用的框架。同时完美的配合quant-ui组件库，各种功能的组件能够方便使用、能快捷的实现多语言、动态主题、自适应等功能。<a>前去下载</a>
                    下载完成后执行npm install 、npm start就可以看到项目啦！
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
            </div>  
            
        </div>
    );
  }
}

export default App;
