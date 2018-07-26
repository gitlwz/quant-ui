import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//disabled
import Disabled from './Disabled/Detail.js';
import DisabledCode from './Disabled/code.js';
//TabWithIcon
import TabWithIcon from './TabsWithIcon/Detail';
import TabWithIconCode from './TabsWithIcon/code';
//Slide
import Slide from './Slide/Detail'
import SlideCode from './Slide/code'
//ExtraContent
import ExtraContent from './ExtraContent/Detail'
import ExtraContentCode from './ExtraContent/code'
//Size
import Size from './Size/Detail'
import SizeCode from './Size/code'
//Position
import Position from './Position/Detail'
import PositionCode from './Position/code'
//CardType
import CardType from './CardType/Detail'
import CardTypeCode from './CardType/code'

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Tabs标签页</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="禁用" key="2">
                        <Card >
                            <Disabled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DisabledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带图标" key="3">
                        <Card >
                            <TabWithIcon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TabWithIconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="滑动条" key="4">
                        <Card >
                            <Slide />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SlideCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="更多内容" key="5">
                        <Card >
                            <ExtraContent />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ExtraContentCode} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="大小" key="6">
                        <Card >
                            <Size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="位置" key="7">
                        <Card >
                            <Position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={PositionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="卡片样式标签呀" key="8">
                        <Card >
                            <CardType />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CardTypeCode} />
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
