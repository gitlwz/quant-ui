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
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>拾色器</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="SketchPicker" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="PhotoshopPicker" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="SwatchesPicker" key="3">
                        <Card >
                            <Basic3 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic3Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="SliderPicker" key="4">
                        <Card >
                            <Basic4 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic4Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="拾色器汇总" key="5">
                        <Card >
                            <Basic5 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic5Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="参数api" key="10">
                        <Api data={{api:data.api[0]}} />
                    </TabPane>
                    <TabPane tab="Alpha组件API" key="11">
                        <Api data={{api:data.api[1]}} />
                    </TabPane>
                    <TabPane tab="Block组件API" key="12">
                        <Api data={{api:data.api[2]}} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
