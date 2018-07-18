import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本列表
import BasicList from './BasicList/Detail.js';
import BasicListCode from './BasicList/code.js';
//简单列表
import SimpleList from './SimpleList/Detail'
import SimpleListCode from './SimpleList/code'
//加载更多
import LoadMore from './LoadMore/Detail'
import LoadMoreCode from './LoadMore/code'
//竖排列表
import VerticalList from './VerticalList/Detail'
import VerticalListCode from './VerticalList/code'
//栅格列表
import GridList from './GridList/Detail'
import GridListCode from './GridList/code'
//响应式格栅列表
import LayoutGridList from './LayoutGridList/Detail'
import LayoutGridListCode from './LayoutGridList/code'
//滚动列表
import ScrollList from './ScrollList/Detail'
import ScrollListCode from './ScrollList/code'
//滚动加载无限长列表
import VirtualizedList from './VirtualizedList/Detail'
import VirtualizedListCode from './VirtualizedList/code'

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>List列表</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="简单列表" key="1">
                        <Card >
                            <SimpleList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SimpleListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="基础列表" key="2">
                        <Card >
                            <BasicList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="加载更多" key="3">
                        <Card >
                            <LoadMore />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LoadMoreCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="竖排列表" key="4">
                        <Card >
                            <VerticalList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VerticalListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="栅格列表" key="5">
                        <Card >
                            <GridList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={GridListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="响应式栅格列表" key="6">
                        <Card >
                            <LayoutGridList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LayoutGridListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="滚动列表" key="7">
                        <Card >
                            <ScrollList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ScrollListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="滚动加载无限长列表" key="8">
                        <Card >
                            <VirtualizedList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VirtualizedListCode} />
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
