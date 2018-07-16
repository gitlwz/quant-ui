import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//通知事项日历
import Reminder from './Reminder/Detail.js';
import ReminderCode from './Reminder/code.js';
//卡片模式
import CardPattern from './CardPattern/Detail.js';
import CardPatternCode from './CardPattern/code.js';
//选择功能
import Select from './Select/Detail.js';
import SelectCode from './Select/code.js';



const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Calendar日历</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="通知事项日历" key="2">
                        <Card >
                            <Reminder />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ReminderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="卡片模式" key="3">
                        <Card >
                            <CardPattern />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CardPatternCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="选择功能" key="4">
                        <Card >
                            <Select />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectCode} />
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
