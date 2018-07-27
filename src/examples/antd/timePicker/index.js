import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import TimePicker_basic from './timePicker_basic/Detail.js'
import TimePicker_basicCode from './timePicker_basic/code.js'
//受控组件
import TimerPicker_controlled from './timerPicker_controlled/Detail.js'
import TimerPicker_controlledCode from './timerPicker_controlled/code.js'
//三种大小
import TimerPicker_size from './timerPicker_size/Detail.js'
import TimerPicker_sizeCode from './timerPicker_size/code.js'
//禁用
import TimerPicker_disabled from './timerPicker_disabled/Detail.js'
import TimerPicker_disabledCode from './timerPicker_disabled/code.js'
//选择时分
import TimerPicker_select from './timerPicker_select/Detail.js'
import TimerPicker_selectCode from './timerPicker_select/code.js'
//步长选项
import TimerPicker_step from './timerPicker_step/Detail.js'
import TimerPicker_stepCode from './timerPicker_step/code.js'
//附加内容
import TimerPicker_addon from './timerPicker_addon/Detail.js'
import TimerPicker_addonCode from './timerPicker_addon/code.js'
//12小时制
import TimerPicker_format from './timerPicker_format/Detail.js'
import TimerPicker_formatCode from './timerPicker_format/code.js'
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>TimePicker时间选择框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <TimePicker_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimePicker_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="受控组件" key="2">
                        <Card >
                            <TimerPicker_controlled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_controlledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种大小" key="3">
                        <Card >
                            <TimerPicker_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="禁用" key="4">
                        <Card >
                            <TimerPicker_disabled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_disabledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="选择时分" key="5">
                        <Card >
                            <TimerPicker_select />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_selectCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="步长选项" key="6">
                        <Card >
                            <TimerPicker_step />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_stepCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="附加内容" key="7">
                        <Card >
                            <TimerPicker_addon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_addonCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="12小时制" key="8">
                        <Card >
                            <TimerPicker_format />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TimerPicker_formatCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="9">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="10">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
