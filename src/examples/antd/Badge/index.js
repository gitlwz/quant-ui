import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

//基本
import Basic from './Basic/Detail.js';
import BasicCode from './Basic/code.js';
//独立使用
import UsedAlone from './UsedAlone/Detail.js';
import UsedAloneCode from './UsedAlone/code.js';
//封顶数字
import MaxNum from './MaxNum/Detail.js';
import MaxNumCode from './MaxNum/code.js';



const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Badge徽标数</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="单独使用" key="2">
                        <Card >
                            <UsedAlone />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={UsedAloneCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="封顶数字" key="3">
                        <Card >
                            <MaxNum />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={MaxNumCode} />
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
