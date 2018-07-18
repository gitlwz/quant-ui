import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
//基本用法
import Check_basic from './check_basic/Detail.js'
import Check_basicCode from './check_basic/code.js'
//不可用
import Check_disabled from './check_disabled/Detail.js'
import Check_disabledCode from './check_disabled/code.js'
//受控的checkbox
import Check_controlled from './check_controlled/Detail.js'
import Check_controlledCode from './check_controlled/code.js'
//chenckbox组
import Check_group from './check_group/Detail.js'
import Check_groupCode from './check_group/code.js'
//全选
import Check_all from './check_all/Detail.js'
import Check_allCode from './check_all/code.js'
//布局
import Check_layout from './check_layout/Detail.js'
import Check_layoutCode from './check_layout/code.js'
import Code from '../../Code.js';
import { width } from 'window-size';
import api from '../../page/map/api.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Checkbox多选框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Check_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="不可用" key="2">
                        <Card >
                            <Check_disabled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_disabledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="受控的Checkbox" key="3">
                        <Card >
                            <Check_controlled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_controlledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="Checkbox组" key="4">
                        <Card >
                            <Check_group />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_groupCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="全选" key="5">
                        <Card >
                            <Check_all />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_allCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="布局" key="6">
                        <Card >
                            <Check_layout />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Check_layoutCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='参数api' key='7'>
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab='方法' key='8'>
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
