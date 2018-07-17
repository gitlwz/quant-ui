import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本使用
import Autobasic from './autobasic/Detail.js'
import AutobasicCode from './autobasic/code.js'
//自定义选项
import Autocustom from './autocustom/Detail.js'
import AutocustomCode from './autocustom/code.js'
//自定义输入组件
import Autoincustom from './autoincustom/Detail.js'
import AutoincustomCode from './autoincustom/code.js'
//不区分大小写
import AutoCL from './autoCL/Detail.js'
import AutoCLCode from './autoCL/code.js'
//查询模式-确定类型
import Automodel from './automodel/Detail.js'
import AutomodelCode from './automodel/code.js'
//查询模式-不确定类型
import Autosoundmodel from './autosoundmodel/Detail.js'
import AutosoundmodelCode from './autosoundmodel/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>AutoComplete自动完成</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本使用" key="1">
                        <Card >
                            <Autobasic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutobasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义选项" key="2">
                        <Card >
                            <Autocustom />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutocustomCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义输入组件" key="3">
                        <Card >
                            <Autoincustom />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutoincustomCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="不区分大小写" key="4">
                        <Card >
                            <AutoCL />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutoCLCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="查询模式-确定类型" key="5">
                        <Card >
                            <Automodel />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutomodelCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="查询模式-不确定类型" key="6">
                        <Card >
                            <Autosoundmodel />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutosoundmodelCode} />
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
