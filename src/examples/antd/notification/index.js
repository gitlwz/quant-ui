import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';


//基本
import Notification_basic from './notification_basic/Detail.js'
import Notification_basicCode from './notification_basic/code.js'
//自动关闭的延时
import Notification_duration from './notification_duration/Detail.js'
import Notification_durationCode from './notification_duration/code.js'
//带有图标的通知提醒框
import Notification_icon from './notification_icon/Detail.js'
import Notification_iconCode from './notification_icon/code.js'
//自定义按钮
import Notification_button_auto from './notification_button_auto/Detail.js'
import Notification_button_autoCode from './notification_button_auto/code.js'
//自定义图标
import Notification_icon_auto from './notification_icon_auto/Detail.js'
import Notification_icon_autoCode from './notification_icon_auto/code.js'
//位置
import Notification_position from './notification_position/Detail.js'
import Notification_positionCode from './notification_position/code.js'
//自定义样式
import Notification_style from './notification_style/Detail.js'
import Notification_styleCode from './notification_style/code.js'
//更新消息内容
import Notification_updata from './notification_updata/Detail.js'
import Notification_updataCode from './notification_updata/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Notification通知提醒框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Notification_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自动关闭的延时" key="2">
                        <Card >
                            <Notification_duration />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_durationCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带有图标的通知提醒框" key="3">
                        <Card >
                            <Notification_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义按钮" key="4">
                        <Card >
                            <Notification_button_auto />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_button_autoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义图标" key="5">
                        <Card >
                            <Notification_icon_auto />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_icon_autoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="位置" key="6">
                        <Card >
                            <Notification_position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_positionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义样式" key="7">
                        <Card >
                            <Notification_style />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_styleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="更新消息内容" key="8">
                        <Card >
                            <Notification_updata />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Notification_updataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="9">
                        <Card>
                            <ul>
                                <li><p><code>notification.success(config)</code></p></li>
                                <li><p><code>notification.error(config)</code></p></li>
                                <li><p><code>notification.info(config)</code></p></li>
                                <li><p><code>notification.warning(config)</code></p></li>
                                <li><p><code>notification.warn(config)</code></p></li>
                                <li><p><code>notification.open(config)</code></p></li>
                                <li><p><code>notification.close(key: String)</code></p></li>
                                <li><p><code>notification.destroy()</code></p></li>
                            </ul>
                            <Api data={data} />
                        </Card>
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
