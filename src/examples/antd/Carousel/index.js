import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'

//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//竖直
import Vertical from './Vertical/Detail.js';
import VerticalCode from './Vertical/code.js';
//渐显
import FadeIn from './FadeIn/Detail.js';
import FadeInCode from './FadeIn/code.js';
//自动播放
import AutoPlay from './AutoPlay/Detail.js';
import AutoPlayCode from './AutoPlay/code.js';



const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Carousel走马灯</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="竖直" key="2">
                        <Card >
                            <Vertical />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VerticalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="渐显" key="3">
                        <Card >
                            <FadeIn />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FadeInCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自动播放" key="4">
                        <Card >
                            <AutoPlay />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AutoPlayCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="11">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="12">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
