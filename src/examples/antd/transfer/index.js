import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本用法
import Transfer_basic from './transfer_basic/Detail.js'
import Transfer_basicCode from './transfer_basic/code.js'
//带搜索框
import Transfer_search from './transfer_search/Detail.js'
import Transfer_searchCode from './transfer_search/code.js'
//高级用法
import Transfer_moreUsage from './transfer_moreUsage/Detail.js'
import Transfer_moreUsageCode from './transfer_moreUsage/code.js'
//自定义渲染行数据
import Transfer_auto from './transfer_auto/Detail.js'
import Transfer_autoCode from './transfer_auto/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Transfer穿梭框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Transfer_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Transfer_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带搜索框" key="2">
                        <Card >
                            <Transfer_search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Transfer_searchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="高级用法" key="3">
                        <Card >
                            <Transfer_moreUsage />
                            <h3>穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。</h3>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Transfer_moreUsageCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义渲染行数据" key="4">
                        <Card >
                            <Transfer_auto />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Transfer_autoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="5">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
