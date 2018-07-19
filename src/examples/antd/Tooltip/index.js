import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//12种位置
import Position from './Position/Detail';
import PositionCode from './Position/code';
//箭头指向
import ArrowPointDirection from './ArrowPointDirection/Detail';
import ArrowPointDirectionCode from './ArrowPointDirection/code';


const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Tooltip文字提示</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                  
                    <TabPane tab="12种位置" key="2">
                        <Card >
                            <Position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={PositionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="箭头指向" key="3">
                        <Card >
                            <ArrowPointDirection />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ArrowPointDirectionCode} />
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
