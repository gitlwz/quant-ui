import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本下拉框
import Dropdownbasic from './dropdownbasic/Detail.js';
import DropdownbasicCode from './dropdownbasic/code.js';
//弹出位置
import Outposition from './outposition/Detail.js';
import OutpositionCode from './outposition/code.js';
//下拉框中有其他元素
import OtherElement from './otherElement/Detail.js';
import OtherElementCode from './otherElement/code.js';
//下拉框触发方式
import Triggermode from './triggermode/Detail.js';
import TriggermodeCode from './triggermode/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Dropdown下拉菜单</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Dropdownbasic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DropdownbasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="弹出位置" key="2">
                        <Card >
                            <Outposition />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={OutpositionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="其他元素" key="3">
                        <Card >
                            <OtherElement />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={OtherElementCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="触发方式" key="4">
                        <Card >
                            <Triggermode />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TriggermodeCode} />
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
