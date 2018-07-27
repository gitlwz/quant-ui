import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//control
import Control from './Control/Detail';
import ControlCode from './Control/code'
//dragable
import Dragable from './DragNodes/Detail'
import DragableCode from './DragNodes/code'
//Async
import Async from './Async/Detail'
import AsyncCode from './Async/code'
//Searchable
import Searchable from './Searchable/Detail'
import SearchableCode from './Searchable/code'
//Line
import Line from './Line/Detail'
import LineCode from './Line/code'
//WithIcon
import WithIcon from './WithIcon/Detail'
import WithIconCode from './WithIcon/code'
//Catalog
import Catalog from './Catalog/Detail'
import CatalogCode from './Catalog/code'

const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Tree树形控件</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="受控操作示例" key="2">
                        <Card >
                            <Control />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ControlCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="拖动" key="3">
                        <Card >
                            <Dragable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DragableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="异步加载数据" key="4">
                        <Card >
                            <Async />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AsyncCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可搜索" key="5">
                        <Card >
                            <Searchable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SearchableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="连接线" key="6">
                        <Card >
                            <Line />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LineCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义图标" key="7">
                        <Card >
                            <WithIcon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={WithIconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="目录" key="8">
                        <Card >
                            <Catalog />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CatalogCode} />
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
