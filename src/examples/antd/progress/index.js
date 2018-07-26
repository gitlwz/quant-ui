import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//进度条
import Progress_basic from './progress_basic/Detail.js'
import Progress_basicCode from './progress_basic/code.js'
//进度圈
import Progress_circle from './progress_circle/Detail.js'
import Progress_circleCode from './progress_circle/code.js'
//小型进度条
import Progress_basic_small from './progress_basic_small/Detail.js'
import Progress_basic_smallCode from './progress_basic_small/code.js'
//小型进度圈
import Progress_circle_small from './progress_circle_small/Detail.js'
import Progress_circle_smallCode from './progress_circle_small/code.js'
//进度圈动态展示
import Progress_circle_dynamic from './progress_circle_dynamic/Detail.js'
import Progress_circle_dynamicCode from './progress_circle_dynamic/code.js'
//进度条动态展示
import Progress_basic_dynamic from './progress_basic_dynamic/Detail.js'
import Progress_basic_dynamicCode from './progress_basic_dynamic/code.js'
//自定义文字格式
import Progress_style from './progress_style/Detail.js'
import Progress_styleCode from './progress_style/code.js'
//仪表盘
import Progress_dashboard from './progress_dashboard/Detail.js'
import Progress_dashboardCode from './progress_dashboard/code.js'
//分段进度条
import Progress_basic_tooltip from './progress_basic_tooltip/Detail.js'
import Progress_basic_tooltipCode from './progress_basic_tooltip/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Progress进度条</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="进度条" key="1">
                        <Card >
                            <Progress_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="进度圈" key="2">
                        <Card >
                            <Progress_circle />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_circleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="小型进度条" key="3">
                        <Card >
                            <Progress_basic_small />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_basic_smallCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="小型进度圈" key="4">
                        <Card >
                            <Progress_circle_small />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_circle_smallCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="进度圈动态展示" key="5">
                        <Card >
                            <Progress_circle_dynamic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_circle_dynamicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="进度条动态展示" key="6">
                        <Card >
                            <Progress_basic_dynamic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_basic_dynamicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义文字格式" key="7">
                        <Card >
                            <Progress_style />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_styleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="仪表盘" key="8">
                        <Card >
                            <Progress_dashboard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_dashboardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="分段进度条" key="9">
                        <Card >
                            <Progress_basic_tooltip />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Progress_basic_tooltipCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="10">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
