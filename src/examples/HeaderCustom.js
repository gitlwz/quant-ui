import React, { Component } from 'react';
import { theme,Layout, Icon, HeaderSearch ,Button,Dropdown,Menu,language,screenfull, Switch} from 'quant-ui';
import config from "../routes/config"
import history from "./history/history"
const {getCurrentColor,refreshColor,setCurrentColor} = theme;
const { Header } = Layout;
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
const colormenu = (
    <Menu 
        onClick = {colorhandleMenuClick} 
        defaultSelectedKeys={[getCurrentColor()]}
    >
        <Menu.Item key="default">默认</Menu.Item>
        <Menu.Item key="red">红色</Menu.Item>
        <Menu.Item key="green">绿色</Menu.Item>
        <Menu.Item key="purple">紫色</Menu.Item>
    </Menu>
)
function colorhandleMenuClick(e){
    setCurrentColor(e.key)
    refreshColor()
}
function handleMenuClick(e) {
    setCurrentLanguage(e.key);
    refreshLanguage();
}
class HeaderCustom extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataSource:[],
            check:false
        }
        this.dataSource = [];
        this.findDataSource(config.menus)
    }
    componentDidMount(){
        let LDtheme =  window.localStorage.getItem("quant-LDtheme");
        if(LDtheme === "light"){
            this.setState({
                check:true
            })
        }else{
            this.setState({
                check:false
            })
        }
    }
    themeChange = (check) => {
        if(check){
            window.localStorage.setItem("quant-LDtheme","light")
            window.location.reload()
        }else{
            window.localStorage.setItem("quant-LDtheme","dark")
            window.location.reload()
        }
    }
    screenFull = () =>{
        if (screenfull.enabled) {
            screenfull.request();
        }
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
            this.props.historyChange(enterData.value)
            this.props.history.push(enterData.value)
        }
    }
    render() {
        let languageData = "中文";
        if(getCurrentLanguage() === "en_US"){
            languageData = "English"
        }
        return (
            <Header className={this.props.collapsed?'HeaderCustom_0':'HeaderCustom_200'} >
                <div
                style={{
                    textAlign: 'right',
                    height: '64px',
                    lineHeight: '64px',
                    width:"100%",
                    boxShadow: '0 1px 4px rgba(0,21,41,.12)',
                }}>
                    <Icon
                        style={{float: 'left',marginTop:"20px"}}
                        className="app_trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />
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
                    <span className="HeaderCustom_color" style={{display:'inline-block',margin:"0px 20px 0 0px",cursor:'pointer'}}>
                        <Dropdown overlay={colormenu}>
                            <Icon className="icon" type="skin" />
                        </Dropdown>
                    </span >
                    <span style={{display:'inline-block',margin:"0px 20px 0 0px",cursor:'pointer'}}>
                        <Switch onChange={this.themeChange} checkedChildren="亮色" unCheckedChildren="暗色" checked={this.state.check} />
                    </span >
                    <span onClick={this.screenFull} style={{display:'inline-block',margin:"0px 20px 0 0px",cursor:'pointer'}}>
                        <Icon type="arrows-alt" />
                    </span >
                </div>

            </Header>
        );
    }
}
export default HeaderCustom;