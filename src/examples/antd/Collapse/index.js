import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import BasicCollapse from './BasicCollapse/Detail.js';
import BasicCollapseCode from './BasicCollapse/code.js';
//手风琴
import Accordion from './Accordion/Detail.js'
import AccordionCode from './Accordion/code.js';
//简洁风格
import Simple from './Simple/Detail'
import SimpleCode from './Simple/code'
//用户自定义
import CustomPanel from './CustomPanel/Detail'
import CustomPanelCode from './CustomPanel/code'
//隐藏箭头
import HiddenArrow from './HiddenArrow/Detail'
import HiddenArrowCode from './HiddenArrow/code'


const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Collapse折叠面板</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <BasicCollapse />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCollapseCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="手风琴" key="2">
                        <Card >
                            <Accordion />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AccordionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="简洁风格" key="3">
                        <Card >
                            <Simple />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SimpleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义面板" key="4">
                        <Card >
                            <CustomPanel />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CustomPanelCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="隐藏箭头" key="5">
                        <Card >
                            <HiddenArrow />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={HiddenArrowCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="11">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
