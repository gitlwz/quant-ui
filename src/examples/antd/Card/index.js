import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

//典型
import Typical from './Typical/Detail.js';
import TypicalCode from './Typical/code.js';

//无边框
import NoBorder from './NoBorder/Detail.js';
import NoBorderCode from './NoBorder/code.js';
//简洁卡片
import SimpleCard from './SimpleCard/Detail.js';
import SimpleCardCode from './SimpleCard/code.js';
//more content
import FlexibleContent from './FlexibleContent/Detail.js';
import FlexibleContentCode from './FlexibleContent/code.js';
//栅格卡片
import CardInColumn from './CardInColumn/Detail.js';
import CardInColumnCode from './CardInColumn/code.js';
//loadingCard
import LoadingCard from './LoadingCard/Detail.js';
import LoadingCardCode from './LoadingCard/code.js';
//网格型内嵌卡片
import GridCard from './GridCard/Detail.js';
import GridCardCode from './GridCard/code.js';
//内部卡片
import InnerCard from './InnerCard/Detail.js'
import InnerCardCode from './InnerCard/code.js'
//带页签的卡片
import TabsCard from './TabsCard/Detail'
import TabsCardCode from './TabsCard/code'


const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Card 卡片</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="典型卡片" key="1">
                        <Card >
                            <Typical />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TypicalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="无边框" key="2">
                        <Card >
                            <NoBorder />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={NoBorderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="简洁卡片" key="3">
                        <Card >
                            <SimpleCard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SimpleCardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="展示更灵活的内容" key="4">
                        <Card >
                            <FlexibleContent />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FlexibleContentCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="栅格卡片" key="5">
                        <Card >
                            <CardInColumn />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CardInColumnCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="预加载的卡片" key="6">
                        <Card >
                            <LoadingCard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LoadingCardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="网格卡片" key="7">
                        <Card >
                            <GridCard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={GridCardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="内部卡片" key="8">
                        <Card >
                            <InnerCard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InnerCardCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带页签的卡片" key="9">
                        <Card >
                            <TabsCard />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TabsCardCode} />
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
