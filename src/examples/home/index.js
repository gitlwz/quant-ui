import React, { Component } from 'react';
import {Menu,Dropdown,Icon,Row,Col,Button,HeaderSearch,language,Divider} from "quant-ui"
import logo from "../../imgs/logo@3x.png";
import config from "../../routes/config"
import history from "../history/history"
import "./home.less"
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
language.setLanguageData({
	'en_US':{
		"一个服务于「量投」的设计体系，追求更好的用户体验。":"A Design System serves for「Quantdo Technology」for better user experience.",
        "公司级的UI规范":"Company based UI Standard",
        "基础组件":"Basic Widget",
        "交互规范":"UX Standard",
        "业务组件":"Business Widget",
        "管理项目框架":"Project Management Framework",
        "开始使用":"Get Started",
        "快速上手":"EasyStart"
    }
})
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
        <div className="home">
            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <img witdh="120" height="39" src={logo}/>
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
            <div className="home_text">
                <div>Quantdo Design</div>
                <div>{$('一个服务于「量投」的设计体系，追求更好的用户体验。')}</div>
                    <div>
                        {$('公司级的UI规范')}
                        <Divider type="vertical" />
                        {$('基础组件')}
                        <Divider type="vertical" />
                        {$('交互规范')}
                        <Divider type="vertical" />
                        {$('业务组件')}
                        <Divider type="vertical" />
                        <a href="#/management">{$('前端框架')}</a>
                    </div>
                <div>
                    <Button onClick={()=>this.props.history.push("/app/home/process")}>{$("开始使用")}</Button>
                    <Button onClick={()=>this.props.history.push("/quick")}>{$("快速上手")}</Button>
                </div>
                
            </div>
        </div>
    );
  }
}

export default App;
