import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';


//基础抽屉
import Drawer_basic from './drawer_basic/Detail.js'
import Drawer_basicCode from './drawer_basic/code.js'
//左侧滑出
import Drawer_placement from './drawer_placement/Detail.js'
import Drawer_placementCode from './drawer_placement/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Drawer抽屉</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基础抽屉" key="1">
                        <Card >
                            <Drawer_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Drawer_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="左侧滑出" key="2">
                        <Card >
                            <Drawer_placement />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Drawer_placementCode} />
                        </div>
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
