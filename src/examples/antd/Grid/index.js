import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';


import Basic from './Basic/Detail';
import BasicCode from './Basic/code';
import Gutter from './Gutter/Detail';
import GutterCode from './Gutter/code';
import Offset from './Offset/Detail';
import OffsetCode from './Offset/code';
import Order from './Order/Detail';
import OrderCode from './Order/code';
import Flex from './Flex/Detail'
import FlexCode from './Flex/code'
import Align from './Align/Detail'
import AlignCode from './Align/code'
import FlexOrder from './FlexOrder/Detail'
import FlexOrderCode from './FlexOrder/code'
import Response from './Response/Detail'
import ResponseCode from './Response/code'
import Response_1 from './Response.1/Detail'
import Response_1Code from './Response.1/code'
import Setting from './Settings/Detail'
import SettingCode from './Settings/code'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Grid栅格</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="间隔" key="2">
                        <Card >
                            <Gutter />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={GutterCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="左右偏移" key="3">
                        <Card >
                            <Offset />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={OffsetCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="栅格排序" key="4">
                        <Card >
                            <Order />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={OrderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="flex布局" key="5">
                        <Card >
                            <Flex />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FlexCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="flex对齐" key="6">
                        <Card >
                            <Align />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AlignCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="flex顺序" key="7">
                        <Card >
                            <FlexOrder />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FlexOrderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="响应式布局" key="8">
                        <Card >
                            <Response />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ResponseCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="其他属性的响应式" key="9">
                        <Card >
                            <Response_1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Response_1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="栅格配置器" key="10">
                        <Card >
                            <Setting />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SettingCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="16">
                        <Api data={data}/>
                    </TabPane>
                </Tabs>

            </div>
                );
            }
        }
        
        export default App;
