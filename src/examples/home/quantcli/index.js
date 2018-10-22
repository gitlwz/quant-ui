import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Row, Col, Button, HeaderSearch, language, Divider } from "quant-ui"
import logo from "../../../imgs/logo@3x.png";
import config from "../../../routes/config"
import history from "../../history/history"
import "./index.less";
import IMG from "../../../imgs/startup-usage1.png"
import IMG2 from "../../../imgs/vscode.png"
const $ = language.getLanguageData;
let { getCurrentLanguage, setCurrentLanguage, refreshLanguage } = language;
const menu = (
    <Menu
        onClick={handleMenuClick}
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
    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
        this.dataSource = [];
        this.findDataSource(config.menus)
    }
    findDataSource = (config) => {
        config.forEach((ele) => {
            if (!!ele.component) {
                this.dataSource.push({ value: ele.key, name: ele.title })
            } else if (!!ele.subs) {
                this.findDataSource(ele.subs)
            }
        })
    }
    onSearch = (value) => {
        let findData = this.dataSource.filter(({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) !== -1)
        this.setState({
            dataSource: findData.map(({ name }) => name)
        })
    }
    onPressEnter = (value) => {
        let enterData = this.dataSource.find(({ name }) => name === value);
        if (!!enterData) {
            this.props.history.push(enterData.value)
        }
    }
    render() {
        let languageData = "中文";
        if (getCurrentLanguage() === "en_US") {
            languageData = "English"
        }
        return (
            <div className="quantcli">
                <Row type="flex" justify="space-between">
                    <Col span={12}>
                        <img style={{ cursor: 'pointer' }} onClick={() => this.props.history.push("/")} className="quantcli-logo" witdh="120" height="39" src={logo} />
                    </Col>
                    <Col span={12}>
                        <div style={{ textAlign: 'right', paddingRight: "6vw" }}>

                            <HeaderSearch
                                placeholder="站内搜索"
                                dataSource={this.state.dataSource}
                                onSearch={this.onSearch}
                                onPressEnter={this.onPressEnter}
                            />
                            <span style={{ display: 'inline-block', margin: "0px 20px 0 20px", cursor: 'pointer' }}>
                                <Button onClick={() => this.props.history.push("/history")} icon="api">{history[0].title}</Button>
                            </span >
                            <span style={{ display: 'inline-block', margin: "0px 20px 0 0px", cursor: 'pointer' }}>
                                <Dropdown overlay={menu}>
                                    <Button icon="setting" style={{ marginLeft: 8 }}>
                                        {languageData} <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </span >
                        </div>
                    </Col>
                </Row>
                <div className="quick_text history">
                    <div style={{ lineHeight: 1.5 }} dangerouslySetInnerHTML={{
                            __html: `<div id="wmd-preview" class="wmd-preview" data-medium-element="true" style="height: auto; left: 0px;"><div class="md-section-divider"></div><div class="md-section-divider"></div><h1 data-anchor-id="yaly" id="quant-cli">quant-cli</h1><hr><p data-anchor-id="xg2g">用于快熟构建量投前端框架的脚手架工具。</p><p data-anchor-id="lojo"><strong>安装</strong> <br>
                            先决条件：<a href="https://nodejs.org/en/" target="_blank">Node.js</a>（&gt; = 6.x，8.x首选），npm版本3+和<a href="https://git-scm.com/" target="_blank">Git</a>。</p><blockquote data-anchor-id="m1bn" class="white-blockquote">
                              <p>$ npm install -g quant-cli</p>
                            </blockquote><p data-anchor-id="77kv"><strong>用法</strong></p><blockquote data-anchor-id="2cks" class="white-blockquote">
                              <p>$ quant init </p>
                            </blockquote><p data-anchor-id="3dhp">例：</p><blockquote data-anchor-id="q395" class="white-blockquote">
                              <p>$ vue init my-project</p>
                            </blockquote></div>`}} />
                    </div>

            </div>
        );
    }
}

export default App;
