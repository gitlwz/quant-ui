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

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>TEST</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="基本222" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="基本222" key="3">
                        <Card >
                            <Basic3 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic3Code} />
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
