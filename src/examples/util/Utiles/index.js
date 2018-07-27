import React, { Component } from 'react';
import { Card, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import data2 from './api2.js';

import Basic1 from './Basic1/Detail.js';
import Basic1Code from './Basic1/code.js';

import Basic2 from './Basic2/Detail.js';
import Basic2Code from './Basic2/code.js';

import Basic3 from './Basic3/Detail.js';
import Basic3Code from './Basic3/code.js';

import Basic4 from './Basic4/Detail.js';
import Basic4Code from './Basic4/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Utils方法</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="currency" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="currency的方法" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="函数方法-1.throttle（节流）" key="3">
                        <Card >
                            <Basic3 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic3Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="函数方法-2.debounce(函数防抖 )" key="4">
                        <Card >
                            <Basic4 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic4Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="currency-API" key="10">
                        <Api data={data} />
                    </TabPane>

                    {data2.api.map((ele,index)=>{
                        return (
                            <TabPane tab={ele[0].title} key={index+12}>
                                <Api data={{api:ele}} />
                            </TabPane>
                        )
                    })}
                </Tabs>


            </div>
        );
    }
}

export default App;
