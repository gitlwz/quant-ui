import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Detail from './basic/Detail';
import DetailCode from './basic/Code';
import Theme from './theme/Detail';
import ThemeCode from './theme/Code';
import Animation from './animation/Detail';
import AnimationCode from './animation/Code';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>环境菜单</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <Detail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DetailCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="主题变化" key="2">
                        <Card >
                            <Theme />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ThemeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="动画效果" key="3">
                        <Card >
                            <Animation />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AnimationCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="6">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
