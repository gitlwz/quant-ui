import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import api from './api.js';
import Detail from './basic/Detail';
import code from './basic/Code';
import ChangeDataDetail from './changeData/Detail';
import ChangeDataCode from './changeData/Code';
import OnRightClickDetail from './onRightClick/Detail';
import OnRightClickCode from './onRightClick/Code';
import ReturnDataDetail from './returnData/Detail';
import ReturnDataCode from './returnData/Code';
import SetDataDetail from './setData/Detail';
import SetDataCode from './setData/Code';
import IsToDetail from './isParentToChildren/Detail';
import IsToCode from './isParentToChildren/Code';
import RenderItemDetail from './renderItem/Detail';
import RenderItemCode from './renderItem/Code';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>拖拽树形图</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Detail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={code} />
                        </div>
                    </TabPane>
                    <TabPane tab="设置数据" key="2">
                        <Card >
                            <SetDataDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SetDataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="数据返回" key="3">
                        <Card >
                            <ReturnDataDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ReturnDataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="改变节点数据" key="4">
                        <Card >
                            <ChangeDataDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ChangeDataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="右击事件" key="5">
                        <Card >
                            <OnRightClickDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={OnRightClickCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="是否可拖拽" key="6">
                        <Card >
                            <IsToDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={IsToCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="返回自定义组件" key="8">
                        <Card >
                            <RenderItemDetail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={RenderItemCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="9">
                        <Api data={api} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
