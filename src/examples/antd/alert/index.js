import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';


//基本
import Alert from './alert_basic/Detail.js'
import AlertCode from './alert_basic/code.js'
//四种样式
import Alert_style from './alert_style/Detail.js'
import Alert_styleCode from './alert_style/code.js'
//可关闭的警告提示
import Alert_close from './alert_close/Detail.js'
import Alert_closeCode from './alert_close/code.js'
//含有辅助性文字介绍
import Alert_description from './alert_description/Detail.js'
import Alert_descriptionCode from './alert_description/code.js'
//图标
import Alert_icon from './alert_icon/Detail.js'
import Alert_iconCode from './alert_icon/code.js'
//自定义关闭
import Alert_auto_close from './alert_auto_close/Detail.js'
import Alert_auto_closeCode from './alert_auto_close/code.js'
//顶部公告
import Alert_banner from './alert_banner/Detail.js'
import Alert_bannerCode from './alert_banner/code.js'
//平滑地卸载
import Alert_Smooth from './alert_Smooth/Detail.js'
import Alert_SmoothCode from './alert_Smooth/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Alert警告提示</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Alert />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AlertCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="四种样式" key="2">
                        <Card >
                            <Alert_style />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_styleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可关闭的警告提示" key="3">
                        <Card >
                            <Alert_close />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_closeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="含有辅助性文字介绍" key="4">
                        <Card >
                            <Alert_description />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_descriptionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="图标" key="5">
                        <Card >
                            <Alert_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义关闭" key="6">
                        <Card >
                            <Alert_auto_close />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_auto_closeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="顶部公告" key="7">
                        <Card >
                            <Alert_banner />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_bannerCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="平滑地卸载" key="8">
                        <Card >
                            <Alert_Smooth />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Alert_SmoothCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="9">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
