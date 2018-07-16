import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//顶部导航
import ShowOnTop from './showOntop/Detail.js'
import ShowOnTopCode from './showOntop/code.js'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Menu导航菜单</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="顶部导航" key="1">
                            <Card >
                                <ShowOnTop/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={ShowOnTopCode} />
                            </div>
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
