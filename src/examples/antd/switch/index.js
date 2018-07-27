import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import Switch_basic from './switch_basic/Detail.js'
import Switch_basicCode from './switch_basic/code.js'
//不可用
import Switch_disabled from './switch_disabled/Detail.js'
import Switch_disabledCode from './switch_disabled/code.js'
//文字和图标
import Switch_word_icon from './switch_word_icon/Detail.js'
import Switch_word_iconCode from './switch_word_icon/code.js'
//两种大小
import Switch_size from './switch_size/Detail.js'
import Switch_sizeCode from './switch_size/code.js'
//加载中
import Switch_loading from './switch_loading/Detail.js'
import Switch_loadingCode from './switch_loading/code.js'
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Switch开关</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Switch_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Switch_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="不可用" key="2">
                        <Card >
                            <Switch_disabled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Switch_disabledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="文字和图标" key="3">
                        <Card >
                            <Switch_word_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Switch_word_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="两种大小" key="4">
                        <Card >
                            <Switch_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Switch_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="加载中" key="5">
                        <Card >
                            <Switch_loading />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Switch_loadingCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="6">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="7">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
