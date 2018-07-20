import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
//基本
import InputNumber_basic from './inputNumber_basic/Detail.js'
import InputNumber_basicCode from './inputNumber_basic/code.js'
//三种大小
import InputNumber_size from './inputNumber_size/Detail.js'
import InputNumber_sizeCode from './inputNumber_size/code.js'
//不可用
import InputNumber_disabled from './inputNumber_disabled/Detail.js'
import InputNumber_disabledCode from './inputNumber_disabled/code.js'
//格式化展示
import InputNumber_formatshow from './inputNumber_formatshow/Detail.js'
import InputNumber_formatshowCode from './inputNumber_formatshow/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>InputNumber数字输入框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <InputNumber_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InputNumber_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种大小" key="2">
                        <Card >
                            <InputNumber_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InputNumber_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="不可用" key="3">
                        <Card >
                            <InputNumber_disabled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InputNumber_disabledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="格式化展示" key="4">
                        <Card >
                            <InputNumber_formatshow />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InputNumber_formatshowCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="5">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="6">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
