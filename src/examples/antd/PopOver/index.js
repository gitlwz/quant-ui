import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//三种触发方式
import Type from './Type/Detail.js';
import TypeCode from './Type/code.js';

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>List列表</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种触发方式" key="2">
                        <Card >
                            <Type />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TypeCode} />
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
