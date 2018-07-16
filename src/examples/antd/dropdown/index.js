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
//下拉框点击触发方式
import Triggermode from './triggermode/Detail.js';
import TriggermodeCode from './triggermode/code.js';
//下拉框触发事件
import Triggerevents from './triggerevents/Detail.js';
import TriggereventsCode from './triggerevents/code.js';
//带下拉框的按钮
import Dropbutton from './dropbutton/Detail.js';
import DropbuttonCode from './dropbutton/code.js';
//多级菜单
import Cascadingmenu from './cascadingmenu/Detail.js';
import CascadingmenuCode from './cascadingmenu/code.js';
//菜单隐藏方式
import Hidemode from './hidemode/Detail.js';
import HidemodeCode from './hidemode/code.js';
//右键菜单
import Clickright from './clickright/Detail.js';
import ClickrightCode from './clickright/code.js';

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
                    <TabPane tab="点击触发方式" key="4">
                        <Card >
                            <Triggermode />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TriggermodeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="触发事件" key="5">
                        <Card >
                            <Triggerevents />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TriggereventsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带下拉框的按钮" key="6">
                        <Card >
                            <Dropbutton />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DropbuttonCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多级菜单" key="7">
                        <Card >
                            <Cascadingmenu/>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CascadingmenuCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="菜单隐藏方式" key="8">
                        <Card >
                            <Hidemode/>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={HidemodeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="右键菜单" key="9">
                        <Card >
                            <Clickright/>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ClickrightCode} />
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
