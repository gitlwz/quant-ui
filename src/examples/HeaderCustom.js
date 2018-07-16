import React, { Component } from 'react';
import { Layout, Icon, HeaderSearch ,Button,Dropdown,Menu,language} from 'quant-ui';
import "./HeaderCustom.less"
import config from "../routes/config"
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
function handleMenuClick(e) {
    setCurrentLanguage(e.key);
    refreshLanguage();
}
class HeaderCustom extends Component {
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
                        style={{float: 'left'}}
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
                        <Button icon="api">版本历史</Button>
                    </span >
                    <span style={{display:'inline-block',margin:"0px 20px 0 0px",cursor:'pointer'}}>
                        <Dropdown overlay={menu}>
                            <Button icon="setting" style={{ marginLeft: 8 }}>
                                {languageData} <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </span >
                </div>

            </Header>
        );
    }
}
export default HeaderCustom;