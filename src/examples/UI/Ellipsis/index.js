import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import NotifyIcon from './notifyIcon/Detail.js';
import NotifyIconCode from './notifyIcon/code.js';


import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>顶部搜索框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="通知图标" key="1">
                        <Card >
                            <NotifyIcon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={NotifyIconCode} />
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
