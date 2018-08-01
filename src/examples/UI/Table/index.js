import React, { Component } from 'react';
import { Card, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic1 from './Basic1/Detail.js';
import Basic1Code from './Basic1/code.js';

import Basic2 from './Basic2/Detail.js';
import Basic2Code from './Basic2/code.js';

import Basic3 from './Basic3/Detail.js';
import Basic3Code from './Basic3/code.js';

import Basic4 from './Basic4/Detail.js';
import Basic4Code from './Basic4/code.js';

import Basic5 from './Basic5/Detail.js';
import Basic5Code from './Basic5/code.js';

import Basic6 from './Basic6/Detail.js';
import Basic6Code from './Basic6/code.js';

import Basic7 from './Basic7/Detail.js';
import Basic7Code from './Basic7/code.js';

import Basic8 from './Basic8/Detail.js';
import Basic8Code from './Basic8/code.js';

import Basic9 from './Basic9/Detail.js';
import Basic9Code from './Basic9/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>数据录入table</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="加、减行" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="不可操作" key="3">
                        <Card >
                            <Basic3 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic3Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="勾选框行" key="4">
                        <Card >
                            <Basic4 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic4Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="数据联动" key="5">
                        <Card >
                            <Basic5 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic5Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="显示隐藏、合并列、固定列" key="6">
                        <Card >
                            <Basic6 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic6Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="拖动列" key="7">
                        <Card >
                            <Basic7 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic7Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="拖动表格" key="8">
                        <Card >
                            <Basic8 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic8Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="配合全屏方法使用" key="9">
                        <Card >
                            <Basic9 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic9Code} />
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
