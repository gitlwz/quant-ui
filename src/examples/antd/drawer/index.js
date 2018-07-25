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
//对象编辑
import Drawer_Form from './drawer_Form/Detail.js'
import Drawer_FormCode from './drawer_Form/code.js'
//信息预览抽屉
import Drawer_preview from './drawer_preview/Detail.js'
import Drawer_previewCode from './drawer_preview/code.js'
//多层抽屉
import Drawer_multi from './drawer_multi/Detail.js'
import Drawer_multiCode from './drawer_multi/code.js'
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
                    <TabPane tab="对象编辑" key="3">
                        <Card >
                            <Drawer_Form />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Drawer_FormCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="信息预览抽屉" key="4">
                        <Card >
                            <Drawer_preview />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Drawer_previewCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多层抽屉" key="5">
                        <Card >
                            <Drawer_multi />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Drawer_multiCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='参数api' key='7'>
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
