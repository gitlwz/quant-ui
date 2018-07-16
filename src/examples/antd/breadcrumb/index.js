import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本面包屑
import Breadcrumbbasic from './breadcrumbbasic/Detail.js';
import BreadcrumbbasicCode from './breadcrumbbasic/code.js';
//带图标的用法
import Iconic from './iconic/Detail.js';
import IconicCode from './iconic/code.js';
//react-router
import Reactrouter from './react-router/Detail.js';
import ReactrouterCode from './react-router/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Breadcrumb面包屑</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Breadcrumbbasic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BreadcrumbbasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带有图标的" key="2">
                        <Card >
                            <Iconic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={IconicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="react-router" key="3">
                        <Card >
                            <Reactrouter />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ReactrouterCode} />
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
