import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//类型
import Type from './Type/Detail.js';
import TypeCode from './Type/code.js';
//自动调整字符大小
import AutoSet from './AutoSet/Detail.js';
import AutoSetCode from './AutoSet/code.js';
//带徽标的头像
import Badge from './Badge/Detail.js';
import BadgeCode from './Badge/code.js';



const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Avatar头像</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="类型" key="2">
                        <Card >
                            <Type />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TypeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自动调整字符大小" key="3">
                        <Card >
                            <AutoSet />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutoSetCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带徽标的头像" key="4">
                        <Card >
                            <Badge />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BadgeCode} />
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
