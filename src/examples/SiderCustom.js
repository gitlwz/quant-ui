/**
 * SiderCustom
 */
import React, { Component } from 'react';
import { Layout } from 'quant-ui';
import { withRouter } from 'react-router-dom';
import routes from '../routes/config';
import SiderMenu from './SiderMenu';
import config from '../routes/config'
import Helmet from "react-helmet"
import darkImage from '../imgs/quantdo.png'
import lightImage from '../imgs/logo@3x.png'
const { Sider } = Layout;
const LDtheme =  'dark';
let title = "";
class SiderCustom extends Component {
    static setMenuOpen = props => {
        const { pathname } = props.location;
        let openKey = [];
        let str = ""
        pathname.split('/').forEach((ele,index)=>{
            if(index == 0) return
                str += `/${ele}`
            if(index >= 2){
                openKey.push(str)
            }
        })
        return {
            openKey: openKey,
            selectedKey: pathname
        };
    };
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: false,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        title:"首页",
        imgSrc:darkImage
    };
    componentDidMount() {
        // this.setMenuOpen(this.props);
        const state = SiderCustom.setMenuOpen(this.props);
        this.findSrcTitle(config.menus, state.selectedKey);
        state.title = title;
        if(this.props.msg === "light"){
            state.imgSrc = lightImage;
        }else{
            state.imgSrc = darkImage;
        }
        this.setState(state);
    }
    menuClick = e => {
        title = "";
        this.findSrcTitle(config.menus, e.key);
        this.setState({
            selectedKey: e.key,
            title:title
        });
    };
    setMenu  = (pathname) =>{
        let openKey = [];
        let str = ""
        pathname.split('/').forEach((ele,index)=>{
            if(index == 0) return
                str += `/${ele}`
            if(index >= 2){
                openKey.push(str)
            }
        })
        this.setState({
            openKey,
            selectedKey: pathname
        });
    }
    openMenu = v => {
        this.setState({
            openKey: v,
            firstHide: false,
        })
    };
    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.pathname !== this.props.pathname){
            this.setMenu(nextProps.pathname)
        }
    }
    findSrcTitle(data, key){
        for(let value of data){
            if(value.subs){
                this.findSrcTitle(value.subs, key);
            }else{
                if(value.key === key){
                    title = value.title;
                }
            }
        }
    }
    render() {
        if(this.props.msg === "light"){
            this.state.imgSrc = lightImage;
        }else{
            this.state.imgSrc = darkImage;
        }
        
        return (
            <Sider
                className="quant-ui-application"
                trigger={null}
                breakpoint="lg"
                theme={this.props.msg}
                collapsedWidth="0"
                collapsed={this.props.collapsed}
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,minWidth:"250px",width:"250px" }}
            >
                <Helmet title={this.state.title} />
                <div style={{cursor: 'pointer'}} onClick={()=>this.props.history.push('/')} className="app_logo" >
                    <img width="130px" src={this.state.imgSrc}/>
                </div>
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    theme={this.props.msg}
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [...this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);