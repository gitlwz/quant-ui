import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import Popconfirm_basic from './popconfirm_basic/Detail.js'
import Popconfirm_basicCode from './popconfirm_basic/code.js'
//国际化
import Popconfirm_national from './popconfirm_national/Detail.js'
import Popconfirm_nationalCode from './popconfirm_national/code.js'
//位置
import Popconfirm_position from './popconfirm_position/Detail.js'
import Popconfirm_positionCode from './popconfirm_position/code.js'
//条件触发
import Popconfirm_visible from './popconfirm_visible/Detail.js'
import Popconfirm_visibleCode from './popconfirm_visible/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Popconfirm气泡确认框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Popconfirm_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Popconfirm_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="国际化" key="2">
                        <Card >
                            <Popconfirm_national />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Popconfirm_nationalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="位置" key="3">
                        <Card >
                            <Popconfirm_position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Popconfirm_positionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="条件触发" key="4">
                        <Card >
                            <Popconfirm_visible />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Popconfirm_visibleCode} />
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
