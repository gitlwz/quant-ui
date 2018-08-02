import React, { Component } from 'react';
import { Card, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic1 from './Basic1/Detail.js';
import Basic1Code from './Basic1/code.js';

//富文本尺寸变换
import Edit from './Edit/Detail.js';
import EditCode from './Edit/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>尺寸变化</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="富文本尺寸变换" key="2">
                        <Card >
                            <Edit />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={EditCode} />
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
