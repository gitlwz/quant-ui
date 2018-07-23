import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Radio_basic from './radio_basic/Detail.js'
import Radio_basicCode from './radio_basic/code.js'
//不可用
import Radio_disable from './radio_disable/Detail.js'
import Radio_disableCode from './radio_disable/code.js'
//单选组合
import Radio_group from './radio_group/Detail.js'
import Radio_groupCode from './radio_group/code.js'
//RadioGroup垂直
import Radio_group_vertical from './radio_group_vertical/Detail.js'
import Radio_group_verticalCode from './radio_group_vertical/code.js'
//RadioGroup组合
import Radio_group_group from './radio_group_group/Detail.js'
import Radio_group_groupCode from './radio_group_group/code.js'
//按钮样式
import Radio_button_style from './radio_button_style/Detail.js'
import Radio_button_styleCode from './radio_button_style/code.js'
//单选组合-配合name使用
import Radio_group_name from './radio_group_name/Detail.js'
import Radio_group_nameCode from './radio_group_name/code.js'
//大小
import Radio_button_size from './radio_button_size/Detail.js'
import Radio_button_sizeCode from './radio_button_size/code.js'
//填底的按钮样式
import Radio_button_bgstyle from './radio_button_bgstyle/Detail.js'
import Radio_button_bgstyleCode from './radio_button_bgstyle/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Radio单选框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                            <Card >
                                <Radio_basic/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_basicCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="不可用" key="2">
                            <Card >
                                <Radio_disable/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_disableCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="单选组合" key="3">
                            <Card >
                                <Radio_group/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_groupCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="RadioGroup垂直" key="4">
                            <Card >
                                <Radio_group_vertical/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_group_verticalCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="RadioGroup组合" key="5">
                            <Card >
                                <Radio_group_group/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_group_groupCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="按钮样式" key="6">
                            <Card >
                                <Radio_button_style/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_button_styleCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="单选组合-配合name使用" key="7">
                            <Card >
                                <Radio_group_name/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_group_nameCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="大小" key="8">
                            <Card >
                                <Radio_button_size/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_button_sizeCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="填底的按钮样式" key="9">
                            <Card >
                                <Radio_button_bgstyle/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={Radio_button_bgstyleCode} />
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
