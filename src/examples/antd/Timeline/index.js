import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//Color
import Color from './Color/Detail';
import ColorCode from './Color/code'
//Reverse
import Reverse from './Reverse/Detail';
import ReverseCode from './Reverse/code'
//Customized
import Customized from './Customized/Detail';
import CustomizedCode from './Customized/code'

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Timeline时间轴</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="彩色圆圈" key="2">
                        <Card >
                            <Color />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ColorCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="幽灵节点&倒序" key="3">
                        <Card >
                            <Reverse />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ReverseCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义" key="4">
                        <Card >
                            <Customized />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CustomizedCode} />
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
