import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import TreeSelect_basic from './treeSelect_basic/Detail.js'
import TreeSelect_basicCode from './treeSelect_basic/code.js'
//多选
import TreeSelect_multi_select from './treeSelect_multi_select/Detail.js'
import TreeSelect_multi_selectCode from './treeSelect_multi_select/code.js'
//从数据直接生成
import TreeSelect_json from './treeSelect_json/Detail.js'
import TreeSelect_jsonCode from './treeSelect_json/code.js'
//可勾选
import TreeSelect_Checkable from './treeSelect_Checkable/Detail.js'
import TreeSelect_CheckableCode from './treeSelect_Checkable/code.js'
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>TreeSelect树选择</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <TreeSelect_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TreeSelect_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多选" key="2">
                        <Card >
                            <TreeSelect_multi_select />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TreeSelect_multi_selectCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="从数据直接生成" key="3">
                        <Card >
                            <TreeSelect_json />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TreeSelect_jsonCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可勾选" key="4">
                        <Card >
                            <TreeSelect_Checkable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TreeSelect_CheckableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="5">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="6">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
