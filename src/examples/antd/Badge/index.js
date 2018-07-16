import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//独立使用
import UsedAlone from './UsedAlone/Detail.js';
import UsedAloneCode from './UsedAlone/code.js';
//封顶数字
import MaxNum from './MaxNum/Detail.js';
import MaxNumCode from './MaxNum/code.js';
//小红点
import RedDot from './RedDot/Detail.js';
import RedDotCode from './RedDot/code.js';
//可点击
import ToClick from './ToClick/Detail.js';
import ToClickCode from './ToClick/code.js';
//动态
import Dynamic from './Dynamic/Detail.js';
import DynamicCode from './Dynamic/code.js';
//状态点
import Status from './Status/Detail.js';
import StatusCode from './Status/code.js';

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Badge徽标数</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="单独使用" key="2">
                        <Card >
                            <UsedAlone />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={UsedAloneCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="封顶数字" key="3">
                        <Card >
                            <MaxNum />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={MaxNumCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="小红点" key="4">
                        <Card >
                            <RedDot />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={RedDotCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可点击" key="5">
                        <Card >
                            <ToClick />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ToClickCode} />
                        </div>
                    </TabPane>  
                    <TabPane tab="动态" key="6">
                        <Card >
                            <Dynamic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DynamicCode} />
                        </div>
                    </TabPane>         
                    <TabPane tab="状态点" key="7">
                        <Card >
                            <Status />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={StatusCode} />
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
