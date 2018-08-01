import React, { Component } from 'react';
import { Card, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic1 from './Basic1/Detail.js';
import Basic1Code from './Basic1/code.js';

import Basic2 from './Basic2/Detail.js';
import Basic2Code from './Basic2/code.js';

import Screenfull_charts from './screenfull_charts/Detail.js';
import Screenfull_chartsCode from './screenfull_charts/code.js';

import Screenfull_table from './screenfull_table/Detail.js';
import Screenfull_tableCode from './screenfull_table/code.js';

import Screenfull_Editor from './screenfull_Editor/Detail.js';
import Screenfull_EditorCode from './screenfull_Editor/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>全屏</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="全屏切换" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="图表全屏" key="3">
                        <Card >
                            <Screenfull_charts />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Screenfull_chartsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="表格全屏" key="4">
                        <Card >
                            <Screenfull_table />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Screenfull_tableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="富文本全屏" key="5">
                        <Card >
                            <Screenfull_Editor />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Screenfull_EditorCode} />
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
