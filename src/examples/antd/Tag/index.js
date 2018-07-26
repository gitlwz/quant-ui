import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//color
import Colorful from './ColorfulTag/Detail.js';
import ColorfulCode from './ColorfulTag/code.js';
//addNDelete
import AddNDelete from './AddNDelete/Detail.js';
import AddNDeleteCode from './AddNDelete/code.js';
//selectable
import Selectable from './Selectable/Detail.js';
import SelectableCode from './Selectable/code.js';
//Hottag
import Hottag from './HotTag/Detail.js';
import HottagCode from './HotTag/code.js';
//visibke
import Visible from './Visible/Detail.js';
import VisibleCode from './Visible/code.js';

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Tags标签</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多彩标签" key="2">
                        <Card >
                            <Colorful />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ColorfulCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="动态添加和删除" key="3">
                        <Card >
                            <AddNDelete />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AddNDeleteCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可选择" key="4">
                        <Card >
                            <Selectable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="热门标签" key="5">
                        <Card >
                            <Hottag />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={HottagCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="控制可见性" key="6">
                        <Card >
                            <Visible />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VisibleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="13">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
