import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本用法
import Spin_basic from './spin_basic/Detail.js'
import Spin_basicCode from './spin_basic/code.js'
//各种大小
import Spin_size from './spin_size/Detail.js'
import Spin_sizeCode from './spin_size/code.js'
//容器
import Spin_container from './spin_container/Detail.js'
import Spin_containerCode from './spin_container/code.js'
//卡片加载中
import Spin_card from './spin_card/Detail.js'
import Spin_cardCode from './spin_card/code.js'
//自定义面熟文案
import Spin_description from './spin_description/Detail.js'
import Spin_descriptionCode from './spin_description/code.js'
//延时
import Spin_delay from './spin_delay/Detail.js'
import Spin_delayCode from './spin_delay/code.js'
//自定义指示符
import Spin_icon from './spin_icon/Detail.js'
import Spin_iconCode from './spin_icon/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Spin加载中</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Spin_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="各种大小" key="2">
                        <Card >
                            <Spin_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="容器" key="3">
                        <Card >
                            <Spin_container />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_containerCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="卡片加载中" key="4">
                        <Card >
                            <Spin_card />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_cardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义描述文案" key="5">
                        <Card >
                            <Spin_description />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_descriptionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="延时" key="6">
                        <Card >
                            <Spin_delay />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_delayCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义指示符" key="7">
                        <Card >
                            <Spin_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Spin_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="8">
                        <Api data={data} />
                        <Card >
                            <h3><span>静态方法</span></h3>
                            <ul>
                                <li>
                                    <p><code>Spin.setDefaultIndicator(indicator: ReactElement)</code><br />同上<code>indicator</code>，你可以自定义全局默认元素</p>
                                </li>
                            </ul>
                        </Card>
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
