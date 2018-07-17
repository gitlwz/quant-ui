import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Stepsbasic from './stepsbasic/Detail.js'
import StepsbasicCode from './stepsbasic/code.js'
//迷你版
import Stepsmini from './stepsmini/Detail.js'
import StepsminiCode from './stepsmini/code.js'
//带图标的步骤条
import Stepsicon from './stepsicon/Detail.js'
import StepsiconCode from './stepsicon/code.js'
//步骤切换
import Stepschange from './stepschange/Detail.js'
import StepschangeCode from './stepschange/code.js'
//竖直方向的步骤条
import Stepsver from './stepsver/Detail.js'
import StepsverCode from './stepsver/code.js'
//竖直方向的小型步骤条
import Stepsvermini from './stepsvermini/Detail.js'
import StepsverminiCode from './stepsvermini/code.js'
//步骤运行错误
import Stepswrong from './stepswrong/Detail.js'
import StepswrongCode from './stepswrong/code.js'
//点状步骤条
import Stepsdot from './stepsdot/Detail.js'
import StepsdotCode from './stepsdot/code.js'
//自定义点状步骤条
import Stepscustom from './stepscustom/Detail.js'
import StepscustomCode from './stepscustom/code.js'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>steps步骤条</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Stepsbasic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsbasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="迷你版" key="2">
                        <Card >
                            <Stepsmini />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsminiCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带图标的步骤条" key="3">
                        <Card >
                            <Stepsicon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsiconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="步骤切换" key="4">
                        <Card >
                            <Stepschange />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepschangeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="竖直方向的步骤条" key="5">
                        <Card >
                            <Stepsver />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsverCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="竖直方向的小型步骤条" key="6">
                        <Card >
                            <Stepsvermini />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsverminiCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="步骤运行错误" key="7">
                        <Card >
                            <Stepswrong />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepswrongCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="点状步骤条" key="8">
                        <Card >
                            <Stepsdot />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepsdotCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义点状步骤条" key="9">
                        <Card >
                            <Stepscustom />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StepscustomCode} />
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
