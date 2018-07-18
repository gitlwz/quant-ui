import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
//基本用法
import Checkbox_basic from './checkbox_basic/Detail.js'
import Checkbox_basicCode from './checkbox_basic/code.js'
//不可用
import Check_disabled from './check_disabled/Detail.js'
import Check_disabledCode from './check_disabled/code.js'
import Code from '../../Code.js';
import { width } from 'window-size';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Checkbox多选框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Checkbox_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Checkbox_basicCode} />
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
                </Tabs>

            </div>
        );
    }
}

export default App;
