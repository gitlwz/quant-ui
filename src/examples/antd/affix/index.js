import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本的Affix固定
import Affix from './Affixbasic/Detail.js';
import AffixbasicCode from './Affixbasic/code.js';
//固定状态的回调
import AffixedState from './AffixedState/Detail.js';
import AffixedStateCode from './AffixedState/code.js';
//滚动容器
import ScrollPane from './ScrollPane/Detail.js';
import ScrollPaneCode from './ScrollPane/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Affix固钉</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Affix />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AffixbasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="固定状态改变的回调" key="2">
                        <Card >
                            <AffixedState />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AffixedStateCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="滚动容器" key="3">
                        <Card >
                            <ScrollPane />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ScrollPaneCode} />
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
